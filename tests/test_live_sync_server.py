import json
import tempfile
import threading
import unittest
import urllib.request
from http.server import ThreadingHTTPServer

from scripts import live_sync_server


class LiveSyncServerTests(unittest.TestCase):
    def test_api_live_and_force_sync_routes(self):
        calls = []

        def snapshot_func(force=False):
            calls.append(force)
            return {"ok": True, "force": force}

        with tempfile.TemporaryDirectory() as tmp:
            handler = live_sync_server.make_handler(tmp, snapshot_func)
            server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
            thread = threading.Thread(target=server.serve_forever, daemon=True)
            thread.start()
            try:
                base = f"http://127.0.0.1:{server.server_port}"
                live = json.loads(urllib.request.urlopen(base + "/api/live", timeout=3).read().decode("utf-8"))
                forced = json.loads(urllib.request.urlopen(base + "/api/sync?force=1", timeout=3).read().decode("utf-8"))
            finally:
                server.shutdown()
                server.server_close()
                thread.join(timeout=3)

        self.assertEqual(live, {"ok": True, "force": False})
        self.assertEqual(forced, {"ok": True, "force": True})
        self.assertEqual(calls, [False, True])


if __name__ == "__main__":
    unittest.main()
