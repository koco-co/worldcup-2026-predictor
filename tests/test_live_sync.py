import copy
import unittest

from scripts import live_sync


class LiveSyncTests(unittest.TestCase):
    def test_parse_fifa_calendar_and_merge_score(self):
        base = {
            "updated": "2026-06-24",
            "schedule": [
                {
                    "stage": "group",
                    "group": "A",
                    "date": "2026-06-11",
                    "time_local": "13:00",
                    "venue_en": "Estadio Azteca",
                    "home_en": "Mexico",
                    "home_zh": "墨西哥",
                    "away_en": "South Africa",
                    "away_zh": "南非",
                    "home_score": None,
                    "away_score": None,
                    "status": "upcoming",
                }
            ],
        }
        fifa_payload = {
            "Results": [
                {
                    "IdMatch": "400021443",
                    "Date": "2026-06-11T19:00:00Z",
                    "Home": {"TeamName": [{"Locale": "en-GB", "Description": "Mexico"}], "Score": 2},
                    "Away": {"TeamName": [{"Locale": "en-GB", "Description": "South Africa"}], "Score": 0},
                    "MatchStatus": 0,
                }
            ]
        }

        matches = live_sync.parse_fifa_calendar(fifa_payload)
        merged, changed = live_sync.merge_fifa_scores(copy.deepcopy(base), matches)

        self.assertEqual(changed, 1)
        self.assertEqual(merged["schedule"][0]["home_score"], 2)
        self.assertEqual(merged["schedule"][0]["away_score"], 0)
        self.assertEqual(merged["schedule"][0]["status"], "played")
        self.assertEqual(merged["schedule"][0]["fifa_id"], "400021443")

    def test_build_snapshot_degrades_to_local_sources(self):
        base = {"updated": "2026-06-24", "schedule": []}
        rank = {"巴西": 5}
        ledger = {"days": [{"date": "2026-06-25", "stake": 80}]}

        snapshot = live_sync.build_snapshot(base, rank, ledger, [])

        self.assertTrue(snapshot["ok"])
        self.assertEqual(snapshot["data"], base)
        self.assertEqual(snapshot["rank"], rank)
        self.assertEqual(snapshot["ledger"], ledger)
        self.assertEqual(snapshot["odds"], {})
        self.assertEqual(snapshot["sourceStatus"][0]["name"], "local-data")
        self.assertEqual(snapshot["sourceStatus"][0]["status"], "fallback")


if __name__ == "__main__":
    unittest.main()
