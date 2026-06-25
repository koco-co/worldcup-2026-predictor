#!/usr/bin/env python3
"""Live data sync helpers for the World Cup dashboard.

The browser reads a single normalized snapshot from the local sync server.
This module builds that snapshot from official-ish upstreams with local/cache
fallbacks, while keeping betting stake data local.
"""

from __future__ import annotations

import copy
import json
import re
import ssl
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TOURNAMENT = ROOT / ".claude/skills/football-match-analysis/assets/tournament.json"
LEDGER = ROOT / ".claude/skills/football-match-analysis/assets/betting-ledger.json"
DATA_JS = ROOT / "data/worldcup-data.js"
LIVE_CACHE = ROOT / "data/live-cache.json"

FIFA_CALENDAR_URL = (
    "https://api.fifa.com/api/v3/calendar/matches"
    "?from=2026-06-11&to=2026-07-19&language=en&count=500&idCompetition=17"
)
FIFA_RANKING_URL = "https://inside.fifa.com/fifa-world-ranking/men"
SPORTTERY_MATCH_URL = "https://webapi.sporttery.cn/gateway/jc/football/getMatchListV1.qry?clientCode=3001"
SPORTTERY_RESULT_URL = "https://webapi.sporttery.cn/gateway/jc/football/getMatchResultV1.qry?clientCode=3001"


TEAM_ALIAS = {
    "bosnia and herzegovina": "bosnia and herzegovina",
    "bosnia-herzegovina": "bosnia and herzegovina",
    "bosnia": "bosnia and herzegovina",
    "côte d'ivoire": "cote d ivoire",
    "cote d'ivoire": "cote d ivoire",
    "ivory coast": "cote d ivoire",
    "czechia": "czech republic",
    "czech republic": "czech republic",
    "dr congo": "dr congo",
    "congo dr": "dr congo",
    "congo": "dr congo",
    "ir iran": "iran",
    "iran": "iran",
    "korea republic": "south korea",
    "south korea": "south korea",
    "usa": "united states",
    "united states": "united states",
    "curacao": "curacao",
    "curaçao": "curacao",
}


@dataclass
class SourceStatus:
    name: str
    status: str
    detail: str = ""
    rows: int = 0
    updated: str = ""

    def as_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "status": self.status,
            "detail": self.detail,
            "rows": self.rows,
            "updated": self.updated,
        }


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def normalize_name(name: str | None) -> str:
    text = (name or "").strip().lower()
    text = re.sub(r"[™®]", "", text)
    text = re.sub(r"\([^)]*\)", "", text)
    text = re.sub(r"[^a-z0-9]+", " ", text).strip()
    return TEAM_ALIAS.get(text, text)


def localized_text(items: Any, fallback: str = "") -> str:
    if isinstance(items, str):
        return items
    if not isinstance(items, list):
        return fallback
    for locale in ("en-GB", "en", "en-US"):
        for item in items:
            if isinstance(item, dict) and item.get("Locale") == locale and item.get("Description"):
                return str(item["Description"])
    for item in items:
        if isinstance(item, dict) and item.get("Description"):
            return str(item["Description"])
    return fallback


def load_json(path: Path, fallback: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return copy.deepcopy(fallback)


def load_local_tournament() -> dict[str, Any]:
    return load_json(TOURNAMENT, {"schedule": []})


def load_local_ledger() -> dict[str, Any]:
    return load_json(LEDGER, {"days": []})


def extract_js_object(var_name: str, fallback: Any) -> Any:
    if not DATA_JS.exists():
        return copy.deepcopy(fallback)
    text = DATA_JS.read_text(encoding="utf-8")
    match = re.search(r"window\." + re.escape(var_name) + r"\s*=\s*(\{.*?\});", text, re.S)
    if not match:
        return copy.deepcopy(fallback)
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return copy.deepcopy(fallback)


def load_local_rank() -> dict[str, int]:
    raw = extract_js_object("WORLDCUP_FIFA_RANK", {})
    return {str(k): int(v) for k, v in raw.items() if isinstance(v, int)}


def fetch_text(url: str, timeout: int = 12, headers: dict[str, str] | None = None) -> str:
    req = urllib.request.Request(
        url,
        headers=headers
        or {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/126 Safari/537.36",
            "Accept": "application/json,text/html;q=0.9,*/*;q=0.8",
        },
    )
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
        return resp.read().decode("utf-8", errors="replace")


def fetch_json(url: str, timeout: int = 12, headers: dict[str, str] | None = None) -> Any:
    return json.loads(fetch_text(url, timeout=timeout, headers=headers))


def parse_fifa_calendar(payload: dict[str, Any]) -> list[dict[str, Any]]:
    results = payload.get("Results") or []
    out: list[dict[str, Any]] = []
    for item in results:
        if not isinstance(item, dict):
            continue
        home = item.get("Home") or {}
        away = item.get("Away") or {}
        home_name = localized_text(home.get("TeamName"), home.get("Name") or "")
        away_name = localized_text(away.get("TeamName"), away.get("Name") or "")
        if not home_name or not away_name:
            continue
        home_score = home.get("Score")
        away_score = away.get("Score")
        status = "played" if home_score is not None and away_score is not None else "upcoming"
        out.append(
            {
                "fifa_id": str(item.get("IdMatch") or ""),
                "date_utc": str(item.get("Date") or ""),
                "home_en": home_name,
                "away_en": away_name,
                "home_key": normalize_name(home_name),
                "away_key": normalize_name(away_name),
                "home_score": home_score,
                "away_score": away_score,
                "status": status,
            }
        )
    return out


def merge_fifa_scores(data: dict[str, Any], fifa_matches: list[dict[str, Any]]) -> tuple[dict[str, Any], int]:
    merged = copy.deepcopy(data)
    by_teams: dict[tuple[str, str], dict[str, Any]] = {}
    for match in fifa_matches:
        by_teams[(match["home_key"], match["away_key"])] = match

    changed = 0
    for local in merged.get("schedule", []):
        key = (normalize_name(local.get("home_en")), normalize_name(local.get("away_en")))
        remote = by_teams.get(key)
        if not remote:
            continue
        before = (
            local.get("home_score"),
            local.get("away_score"),
            local.get("status"),
            local.get("fifa_id"),
        )
        local["home_score"] = remote.get("home_score")
        local["away_score"] = remote.get("away_score")
        local["status"] = remote.get("status") or local.get("status") or "upcoming"
        if remote.get("fifa_id"):
            local["fifa_id"] = remote["fifa_id"]
        after = (
            local.get("home_score"),
            local.get("away_score"),
            local.get("status"),
            local.get("fifa_id"),
        )
        if after != before:
            changed += 1
    if changed:
        merged["updated"] = utc_now_iso()
        merged["source"] = "FIFA calendar API + local tournament skeleton"
    return merged, changed


def try_fifa_calendar(data: dict[str, Any]) -> tuple[dict[str, Any], SourceStatus]:
    try:
        payload = fetch_json(FIFA_CALENDAR_URL)
        matches = parse_fifa_calendar(payload)
        merged, changed = merge_fifa_scores(data, matches)
        return merged, SourceStatus("fifa-calendar", "ok", f"merged {changed} changed matches", len(matches), utc_now_iso())
    except Exception as exc:  # network and schema failures should degrade cleanly
        return data, SourceStatus("fifa-calendar", "error", str(exc)[:240], 0, utc_now_iso())


def try_fifa_rank(local_rank: dict[str, int]) -> tuple[dict[str, int], SourceStatus]:
    try:
        html = fetch_text(FIFA_RANKING_URL)
        # FIFA's current ranking page is a Next app. The page shape changes, so we
        # only accept a parsed result if enough known World Cup teams are present.
        parsed: dict[str, int] = {}
        for name, rank in re.findall(r'"countryName"\s*:\s*"([^"]+)".{0,300}?"rank"\s*:\s*(\d+)', html):
            parsed[name] = int(rank)
        if len(parsed) < 20:
            return local_rank, SourceStatus("fifa-ranking", "fallback", "ranking page fetched but no stable JSON payload found", len(local_rank), utc_now_iso())
        return parsed, SourceStatus("fifa-ranking", "ok", "parsed FIFA ranking payload", len(parsed), utc_now_iso())
    except Exception as exc:
        return local_rank, SourceStatus("fifa-ranking", "error", str(exc)[:240], len(local_rank), utc_now_iso())


def try_sporttery_odds() -> tuple[dict[str, Any], SourceStatus]:
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/126 Safari/537.36",
        "Accept": "application/json,text/plain,*/*",
        "Referer": "https://www.sporttery.cn/",
    }
    errors: list[str] = []
    for url in (SPORTTERY_MATCH_URL, SPORTTERY_RESULT_URL):
        try:
            text = fetch_text(url, headers=headers)
            if "WAF" in text or "禁止访问" in text:
                errors.append("sporttery WAF blocked")
                continue
            payload = json.loads(text)
            return {"raw": payload}, SourceStatus("sporttery-odds", "ok", "raw official payload cached", 1, utc_now_iso())
        except Exception as exc:
            errors.append(str(exc)[:120])
    detail = "; ".join(errors) if errors else "no sporttery response"
    return {}, SourceStatus("sporttery-odds", "error", detail[:240], 0, utc_now_iso())


def build_snapshot(
    data: dict[str, Any],
    rank: dict[str, int],
    ledger: dict[str, Any],
    source_status: list[SourceStatus],
    odds: dict[str, Any] | None = None,
) -> dict[str, Any]:
    statuses = list(source_status)
    if not statuses:
        statuses.append(SourceStatus("local-data", "fallback", "using embedded local data", len(data.get("schedule", [])), utc_now_iso()))
    return {
        "ok": True,
        "updated": utc_now_iso(),
        "data": data,
        "rank": rank,
        "ledger": ledger,
        "odds": odds or {},
        "sourceStatus": [s.as_dict() for s in statuses],
    }


def read_cache() -> dict[str, Any] | None:
    if not LIVE_CACHE.exists():
        return None
    try:
        return json.loads(LIVE_CACHE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None


def write_cache(snapshot: dict[str, Any]) -> None:
    LIVE_CACHE.parent.mkdir(parents=True, exist_ok=True)
    LIVE_CACHE.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2), encoding="utf-8")


def sync_live_snapshot(force: bool = False) -> dict[str, Any]:
    if not force:
        cached = read_cache()
        if cached and time.time() - LIVE_CACHE.stat().st_mtime < 300:
            return cached

    data = load_local_tournament()
    ledger = load_local_ledger()
    rank = load_local_rank()
    statuses: list[SourceStatus] = []

    data, fifa_status = try_fifa_calendar(data)
    statuses.append(fifa_status)
    rank, rank_status = try_fifa_rank(rank)
    statuses.append(rank_status)
    odds, odds_status = try_sporttery_odds()
    statuses.append(odds_status)

    if all(s.status == "error" for s in statuses):
        cached = read_cache()
        if cached:
            cached = copy.deepcopy(cached)
            cached["sourceStatus"] = [SourceStatus("cache", "fallback", "all upstreams failed; using last live-cache.json").as_dict()] + cached.get("sourceStatus", [])
            return cached

    snapshot = build_snapshot(data, rank, ledger, statuses, odds)
    write_cache(snapshot)
    return snapshot


def main() -> int:
    print(json.dumps(sync_live_snapshot(force=True), ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
