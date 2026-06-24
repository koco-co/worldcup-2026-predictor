#!/usr/bin/env python3
"""从真源数据生成平台数据，并把数据同步进平台页面。

两个唯一真源：
  - 赛程/赛果： .claude/skills/football-match-analysis/assets/tournament.json
  - 押注台账： .claude/skills/football-match-analysis/assets/betting-ledger.json

本脚本做两件事：
  1) 重写 worldcup-data.js 中标记之间的：
       WORLDCUP_DATA   ← tournament.json（赛事元信息 + 104 场赛程）
       WORLDCUP_LEDGER ← betting-ledger.json（每日投入/收入/票面，战绩与净盈亏的真源）
     手工维护的 WORLDCUP_FLAGS / WORLDCUP_VENUE_OFFSET / WORLDCUP_PREDICTIONS 原样保留。
  2) 把整份 worldcup-data.js 内联进 index.html 的 WC_INLINE_DATA 标记之间，
     让页面完全自包含——file://、隔离预览、任意静态服务器、GitHub Pages 都能直接出数据。

改了赛果/赛程/台账后跑一次即可：
    python3 scripts/build_worldcup_data.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOURNAMENT = ROOT / ".claude/skills/football-match-analysis/assets/tournament.json"
LEDGER = ROOT / ".claude/skills/football-match-analysis/assets/betting-ledger.json"
OUT = ROOT / "data" / "worldcup-data.js"
PAGE = ROOT / "index.html"


def block_re(name: str) -> re.Pattern:
    return re.compile(r"/\* === " + name + r":BEGIN.*? \*/.*?/\* === " + name + r":END === \*/", re.S)


def js_block(name: str, var: str, value) -> str:
    body = "window." + var + " = " + json.dumps(value, ensure_ascii=False, indent=1) + ";"
    begin = "/* === " + name + ":BEGIN (auto-generated — 勿手改) === */"
    end = "/* === " + name + ":END === */"
    return begin + "\n" + body + "\n" + end


HTML_BLOCK_RE = re.compile(r"<!-- WC_INLINE_DATA:BEGIN.*?-->.*?<!-- WC_INLINE_DATA:END -->", re.S)
HTML_BEGIN = "<!-- WC_INLINE_DATA:BEGIN — 由 scripts/build_worldcup_data.py 注入(data/worldcup-data.js 的内联副本，勿手改) -->"
HTML_END = "<!-- WC_INLINE_DATA:END -->"


def replace_block(text: str, name: str, replacement: str) -> str:
    rx = block_re(name)
    if not rx.search(text):
        raise KeyError(name)
    return rx.sub(lambda *_: replacement, text, count=1)


def inline_into_page(data_js: str) -> bool:
    if not PAGE.exists():
        print(f"跳过页面内联：找不到 {PAGE}", file=sys.stderr)
        return False
    html = PAGE.read_text(encoding="utf-8")
    if not HTML_BLOCK_RE.search(html):
        print("index.html 缺少 WC_INLINE_DATA 标记，跳过页面内联。", file=sys.stderr)
        return False
    safe = re.sub(r"</(script)", r"<\\/\1", data_js, flags=re.I)  # 防止内联脚本被提前闭合
    block = HTML_BEGIN + '\n<script id="wc-data">\n' + safe + "\n</script>\n" + HTML_END
    PAGE.write_text(HTML_BLOCK_RE.sub(lambda *_: block, html, count=1), encoding="utf-8")
    return True


def main() -> int:
    for p in (TOURNAMENT, LEDGER):
        if not p.exists():
            print(f"找不到真源数据: {p}", file=sys.stderr)
            return 1
    if not OUT.exists():
        print(f"找不到目标文件: {OUT}（请先创建含标记的 worldcup-data.js）", file=sys.stderr)
        return 1

    data = json.loads(TOURNAMENT.read_text(encoding="utf-8"))
    ledger = json.loads(LEDGER.read_text(encoding="utf-8"))

    text = OUT.read_text(encoding="utf-8")
    try:
        text = replace_block(text, "WORLDCUP_DATA", js_block("WORLDCUP_DATA", "WORLDCUP_DATA", data))
        text = replace_block(text, "WORLDCUP_LEDGER", js_block("WORLDCUP_LEDGER", "WORLDCUP_LEDGER", ledger))
    except KeyError as e:
        print(f"worldcup-data.js 缺少 {e} 的 BEGIN/END 标记，无法注入。", file=sys.stderr)
        return 1

    OUT.write_text(text, encoding="utf-8")
    inlined = inline_into_page(text)

    days = len(ledger.get("days", []))
    print(
        f"已刷新 WORLDCUP_DATA: {data['matches']} 场 · {data['teams']} 队 · 赛程 {len(data['schedule'])} 条；"
        f"WORLDCUP_LEDGER: {days} 天台账（updated {ledger.get('updated')}）"
        + ("；并已内联进 index.html" if inlined else "")
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
