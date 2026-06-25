from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


class FrontendThirdPlaceTests(unittest.TestCase):
    def test_group_view_has_best_third_modal_entry(self):
        html = INDEX.read_text(encoding="utf-8")

        self.assertIn("function bestThirdRows", html)
        self.assertIn("function thirdPlaceStatus", html)
        self.assertIn("maxPts", html)
        self.assertIn("thirdPlaceRows:", html)
        self.assertIn('data-action="third-ranking"', html)
        self.assertIn("function openThirdRankingModal", html)
        self.assertIn("小组第三排名", html)
        self.assertIn("待定", html)
        self.assertIn("必定淘汰", html)
        self.assertIn("最高", html)
        self.assertIn("仅数学锁定才显示出线/淘汰", html)
        self.assertIn("前八出线", html)
        self.assertIn("openThirdRankingModal()", html)


if __name__ == "__main__":
    unittest.main()
