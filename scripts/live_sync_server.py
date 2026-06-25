#!/usr/bin/env python3
"""Local dashboard server with live sync endpoints.

Usage:
    python3 scripts/live_sync_server.py --port 8765
"""

from __future__ import annotations

import argparse
import json
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

try:
    from scripts import live_sync
except ImportError:  # pragma: no cover - allows direct script execution
    import live_sync  # type: ignore


ROOT = Path(__file__).resolve().parents[1]


def make_handler(directory: str | Path, snapshot_func=live_sync.sync_live_snapshot):
    class LiveSyncHandler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(directory), **kwargs)

        def end_headers(self):
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            super().end_headers()

        def do_OPTIONS(self):  # noqa: N802 - stdlib handler API
            self.send_response(HTTPStatus.NO_CONTENT)
            self.end_headers()

        def do_GET(self):  # noqa: N802 - stdlib handler API
            parsed = urlparse(self.path)
            if parsed.path in ("/api/live", "/api/sync"):
                force = parsed.path == "/api/sync" or parse_qs(parsed.query).get("force") in (["1"], ["true"], ["yes"])
                self.write_json(snapshot_func(force=force))
                return
            return super().do_GET()

        def write_json(self, payload):
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, fmt, *args):  # keep terminal readable
            if self.path.startswith("/api/"):
                return
            super().log_message(fmt, *args)

    return LiveSyncHandler


def serve(port: int = 8765, host: str = "127.0.0.1") -> None:
    handler = make_handler(ROOT)
    server = ThreadingHTTPServer((host, port), handler)
    print(f"World Cup dashboard: http://{host}:{port}/index.html")
    print(f"Live sync API:        http://{host}:{port}/api/live")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()


def main() -> int:
    parser = argparse.ArgumentParser(description="Serve dashboard and live sync API")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    serve(port=args.port, host=args.host)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
