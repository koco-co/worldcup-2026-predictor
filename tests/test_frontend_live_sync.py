from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


class FrontendLiveSyncTests(unittest.TestCase):
    def test_frontend_consumes_unified_live_snapshot(self):
        html = INDEX.read_text(encoding="utf-8")

        self.assertIn("function liveEndpoint", html)
        self.assertIn("function applyLiveSnapshot", html)
        self.assertIn("'/api/live'", html)
        self.assertIn("'/api/sync?force=1'", html)
        self.assertIn("DATA = snap.data", html)
        self.assertIn("RANK = snap.rank", html)
        self.assertIn("LEDGER = snap.ledger", html)
        self.assertIn("ODDS = snap.odds", html)
        self.assertIn("sourceStatus", html)


if __name__ == "__main__":
    unittest.main()
