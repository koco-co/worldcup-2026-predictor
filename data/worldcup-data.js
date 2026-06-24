/* worldcup-data.js — 2026 世界杯 · 对阵全景平台数据契约
 *
 *   WORLDCUP_DATA          赛事元信息 + 104 场赛程（自动生成，勿手改）
 *   WORLDCUP_FLAGS         球队 → 国旗 emoji（手工维护）
 *   WORLDCUP_VENUE_OFFSET  球场 → UTC 时区偏移（手工维护，缺省 -5）
 *   WORLDCUP_PREDICTIONS   每日 预测/复盘 报告链接登记（手工维护）
 *
 * WORLDCUP_DATA 的唯一真源是
 *   .claude/skills/football-match-analysis/assets/tournament.json
 * 改了赛果/赛程后重新生成下方区块：
 *   python3 scripts/build_worldcup_data.py
 */

/* === WORLDCUP_DATA:BEGIN (auto-generated — 勿手改) === */
window.WORLDCUP_DATA = {
 "name_en": "2026 FIFA World Cup",
 "name_zh": "2026年美加墨世界杯",
 "name_full_zh": "2026年国际足联世界杯",
 "hosts": [
  "美国",
  "加拿大",
  "墨西哥"
 ],
 "start": "2026-06-11",
 "end": "2026-07-19",
 "teams": 48,
 "matches": 104,
 "final_venue_zh": "大都会人寿球场",
 "opening_venue_zh": "阿兹特克体育场",
 "updated": "2026-06-24",
 "source": "维基百科 2026 FIFA World Cup（逐组 + 淘汰赛），赛果随赛事推进更新",
 "venues": [
  {
   "stadium_en": "Estadio Azteca",
   "stadium_zh": "阿兹特克体育场",
   "city": "Mexico City",
   "city_zh": "墨西哥城",
   "country": "墨西哥"
  },
  {
   "stadium_en": "Estadio Akron",
   "stadium_zh": "阿克伦体育场",
   "city": "Guadalajara",
   "city_zh": "瓜达拉哈拉",
   "country": "墨西哥"
  },
  {
   "stadium_en": "Estadio BBVA",
   "stadium_zh": "BBVA体育场",
   "city": "Monterrey",
   "city_zh": "蒙特雷",
   "country": "墨西哥"
  },
  {
   "stadium_en": "BC Place",
   "stadium_zh": "卑诗体育馆",
   "city": "Vancouver",
   "city_zh": "温哥华",
   "country": "加拿大"
  },
  {
   "stadium_en": "BMO Field",
   "stadium_zh": "BMO球场",
   "city": "Toronto",
   "city_zh": "多伦多",
   "country": "加拿大"
  },
  {
   "stadium_en": "MetLife Stadium",
   "stadium_zh": "大都会人寿球场",
   "city": "East Rutherford",
   "city_zh": "东卢瑟福",
   "country": "美国"
  },
  {
   "stadium_en": "AT&T Stadium",
   "stadium_zh": "AT&T体育场",
   "city": "Arlington",
   "city_zh": "阿灵顿",
   "country": "美国"
  },
  {
   "stadium_en": "SoFi Stadium",
   "stadium_zh": "SoFi体育场",
   "city": "Inglewood",
   "city_zh": "英格尔伍德",
   "country": "美国"
  },
  {
   "stadium_en": "Arrowhead Stadium",
   "stadium_zh": "箭头体育场",
   "city": "Kansas City",
   "city_zh": "堪萨斯城",
   "country": "美国"
  },
  {
   "stadium_en": "Levi's Stadium",
   "stadium_zh": "李维斯球场",
   "city": "Santa Clara",
   "city_zh": "圣克拉拉",
   "country": "美国"
  },
  {
   "stadium_en": "NRG Stadium",
   "stadium_zh": "NRG体育场",
   "city": "Houston",
   "city_zh": "休斯顿",
   "country": "美国"
  },
  {
   "stadium_en": "Lincoln Financial Field",
   "stadium_zh": "林肯金融球场",
   "city": "Philadelphia",
   "city_zh": "费城",
   "country": "美国"
  },
  {
   "stadium_en": "Mercedes-Benz Stadium",
   "stadium_zh": "梅赛德斯-奔驰体育场",
   "city": "Atlanta",
   "city_zh": "亚特兰大",
   "country": "美国"
  },
  {
   "stadium_en": "Lumen Field",
   "stadium_zh": "卢门球场",
   "city": "Seattle",
   "city_zh": "西雅图",
   "country": "美国"
  },
  {
   "stadium_en": "Hard Rock Stadium",
   "stadium_zh": "硬石体育场",
   "city": "Miami Gardens",
   "city_zh": "迈阿密花园",
   "country": "美国"
  },
  {
   "stadium_en": "Gillette Stadium",
   "stadium_zh": "吉列体育场",
   "city": "Foxborough",
   "city_zh": "福克斯堡",
   "country": "美国"
  }
 ],
 "schedule": [
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-11",
   "time_local": "13:00",
   "round": 1,
   "venue_en": "Estadio Azteca",
   "city": "Mexico City",
   "country": "Mexico",
   "home_en": "Mexico",
   "home_zh": "墨西哥",
   "away_en": "South Africa",
   "away_zh": "南非",
   "home_score": 2,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-11",
   "time_local": "20:00",
   "round": 1,
   "venue_en": "Estadio Akron",
   "city": "Zapopan",
   "country": "Mexico",
   "home_en": "South Korea",
   "home_zh": "韩国",
   "away_en": "Czech Republic",
   "away_zh": "捷克",
   "home_score": 2,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-18",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "Czech Republic",
   "home_zh": "捷克",
   "away_en": "South Africa",
   "away_zh": "南非",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-18",
   "time_local": "19:00",
   "round": 2,
   "venue_en": "Estadio Akron",
   "city": "Zapopan",
   "country": "Mexico",
   "home_en": "Mexico",
   "home_zh": "墨西哥",
   "away_en": "South Korea",
   "away_zh": "韩国",
   "home_score": 1,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-24",
   "time_local": "19:00",
   "round": 3,
   "venue_en": "Estadio Azteca",
   "city": "Mexico City",
   "country": "Mexico",
   "home_en": "Czech Republic",
   "home_zh": "捷克",
   "away_en": "Mexico",
   "away_zh": "墨西哥",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "A",
   "date": "2026-06-24",
   "time_local": "19:00",
   "round": 3,
   "venue_en": "Estadio BBVA",
   "city": "Guadalupe",
   "country": "Mexico",
   "home_en": "South Africa",
   "home_zh": "南非",
   "away_en": "South Korea",
   "away_zh": "韩国",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-12",
   "time_local": "15:00",
   "round": 1,
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "Canada",
   "home_zh": "加拿大",
   "away_en": "Bosnia and Herzegovina",
   "away_zh": "波斯尼亚和黑塞哥维那",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-13",
   "time_local": "12:00",
   "round": 1,
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "Qatar",
   "home_zh": "卡塔尔",
   "away_en": "Switzerland",
   "away_zh": "瑞士",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-18",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "Switzerland",
   "home_zh": "瑞士",
   "away_en": "Bosnia and Herzegovina",
   "away_zh": "波斯尼亚和黑塞哥维那",
   "home_score": 4,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-18",
   "time_local": "15:00",
   "round": 2,
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "Canada",
   "home_zh": "加拿大",
   "away_en": "Qatar",
   "away_zh": "卡塔尔",
   "home_score": 6,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-24",
   "time_local": "12:00",
   "round": 3,
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "Switzerland",
   "home_zh": "瑞士",
   "away_en": "Canada",
   "away_zh": "加拿大",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "B",
   "date": "2026-06-24",
   "time_local": "12:00",
   "round": 3,
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "Bosnia and Herzegovina",
   "home_zh": "波斯尼亚和黑塞哥维那",
   "away_en": "Qatar",
   "away_zh": "卡塔尔",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-13",
   "time_local": "18:00",
   "round": 1,
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "Brazil",
   "home_zh": "巴西",
   "away_en": "Morocco",
   "away_zh": "摩洛哥",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-13",
   "time_local": "21:00",
   "round": 1,
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "Haiti",
   "home_zh": "海地",
   "away_en": "Scotland",
   "away_zh": "苏格兰",
   "home_score": 0,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-19",
   "time_local": "18:00",
   "round": 2,
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "Scotland",
   "home_zh": "苏格兰",
   "away_en": "Morocco",
   "away_zh": "摩洛哥",
   "home_score": 0,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-19",
   "time_local": "20:30",
   "round": 2,
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "Brazil",
   "home_zh": "巴西",
   "away_en": "Haiti",
   "away_zh": "海地",
   "home_score": 3,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-24",
   "time_local": "18:00",
   "round": 3,
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "Scotland",
   "home_zh": "苏格兰",
   "away_en": "Brazil",
   "away_zh": "巴西",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "C",
   "date": "2026-06-24",
   "time_local": "18:00",
   "round": 3,
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "Morocco",
   "home_zh": "摩洛哥",
   "away_en": "Haiti",
   "away_zh": "海地",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-12",
   "time_local": "18:00",
   "round": 1,
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "United States",
   "home_zh": "美国",
   "away_en": "Paraguay",
   "away_zh": "巴拉圭",
   "home_score": 4,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-13",
   "time_local": "21:00",
   "round": 1,
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "Australia",
   "home_zh": "澳大利亚",
   "away_en": "Turkey",
   "away_zh": "土耳其",
   "home_score": 2,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-19",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "United States",
   "home_zh": "美国",
   "away_en": "Australia",
   "away_zh": "澳大利亚",
   "home_score": 2,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-19",
   "time_local": "20:00",
   "round": 2,
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "Turkey",
   "home_zh": "土耳其",
   "away_en": "Paraguay",
   "away_zh": "巴拉圭",
   "home_score": 0,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-25",
   "time_local": "19:00",
   "round": 3,
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "Turkey",
   "home_zh": "土耳其",
   "away_en": "United States",
   "away_zh": "美国",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "D",
   "date": "2026-06-25",
   "time_local": "19:00",
   "round": 3,
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "Paraguay",
   "home_zh": "巴拉圭",
   "away_en": "Australia",
   "away_zh": "澳大利亚",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-14",
   "time_local": "12:00",
   "round": 1,
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "Germany",
   "home_zh": "德国",
   "away_en": "Curaçao",
   "away_zh": "库拉索",
   "home_score": 7,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-14",
   "time_local": "19:00",
   "round": 1,
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "Côte d'Ivoire",
   "home_zh": "科特迪瓦",
   "away_en": "Ecuador",
   "away_zh": "厄瓜多尔",
   "home_score": 1,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-20",
   "time_local": "16:00",
   "round": 2,
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "Germany",
   "home_zh": "德国",
   "away_en": "Côte d'Ivoire",
   "away_zh": "科特迪瓦",
   "home_score": 2,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-20",
   "time_local": "19:00",
   "round": 2,
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "Ecuador",
   "home_zh": "厄瓜多尔",
   "away_en": "Curaçao",
   "away_zh": "库拉索",
   "home_score": 0,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-25",
   "time_local": "16:00",
   "round": 3,
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "Curaçao",
   "home_zh": "库拉索",
   "away_en": "Côte d'Ivoire",
   "away_zh": "科特迪瓦",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "E",
   "date": "2026-06-25",
   "time_local": "16:00",
   "round": 3,
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "Ecuador",
   "home_zh": "厄瓜多尔",
   "away_en": "Germany",
   "away_zh": "德国",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-14",
   "time_local": "15:00",
   "round": 1,
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "Netherlands",
   "home_zh": "荷兰",
   "away_en": "Japan",
   "away_zh": "日本",
   "home_score": 2,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-14",
   "time_local": "20:00",
   "round": 1,
   "venue_en": "Estadio BBVA",
   "city": "Guadalupe",
   "country": "Mexico",
   "home_en": "Sweden",
   "home_zh": "瑞典",
   "away_en": "Tunisia",
   "away_zh": "突尼斯",
   "home_score": 5,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-20",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "Netherlands",
   "home_zh": "荷兰",
   "away_en": "Sweden",
   "away_zh": "瑞典",
   "home_score": 5,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-20",
   "time_local": "22:00",
   "round": 2,
   "venue_en": "Estadio BBVA",
   "city": "Guadalupe",
   "country": "Mexico",
   "home_en": "Tunisia",
   "home_zh": "突尼斯",
   "away_en": "Japan",
   "away_zh": "日本",
   "home_score": 0,
   "away_score": 4,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-25",
   "time_local": "18:00",
   "round": 3,
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "Japan",
   "home_zh": "日本",
   "away_en": "Sweden",
   "away_zh": "瑞典",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "F",
   "date": "2026-06-25",
   "time_local": "18:00",
   "round": 3,
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "Tunisia",
   "home_zh": "突尼斯",
   "away_en": "Netherlands",
   "away_zh": "荷兰",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-15",
   "time_local": "12:00",
   "round": 1,
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "Belgium",
   "home_zh": "比利时",
   "away_en": "Egypt",
   "away_zh": "埃及",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-15",
   "time_local": "18:00",
   "round": 1,
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "Iran",
   "home_zh": "伊朗",
   "away_en": "New Zealand",
   "away_zh": "新西兰",
   "home_score": 2,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-21",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "Belgium",
   "home_zh": "比利时",
   "away_en": "Iran",
   "away_zh": "伊朗",
   "home_score": 0,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-21",
   "time_local": "18:00",
   "round": 2,
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "New Zealand",
   "home_zh": "新西兰",
   "away_en": "Egypt",
   "away_zh": "埃及",
   "home_score": 1,
   "away_score": 3,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-26",
   "time_local": "20:00",
   "round": 3,
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "Egypt",
   "home_zh": "埃及",
   "away_en": "Iran",
   "away_zh": "伊朗",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "G",
   "date": "2026-06-26",
   "time_local": "20:00",
   "round": 3,
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "New Zealand",
   "home_zh": "新西兰",
   "away_en": "Belgium",
   "away_zh": "比利时",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-15",
   "time_local": "12:00",
   "round": 1,
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "Spain",
   "home_zh": "西班牙",
   "away_en": "Cape Verde",
   "away_zh": "佛得角",
   "home_score": 0,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-15",
   "time_local": "18:00",
   "round": 1,
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "Saudi Arabia",
   "home_zh": "沙特阿拉伯",
   "away_en": "Uruguay",
   "away_zh": "乌拉圭",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-21",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "Spain",
   "home_zh": "西班牙",
   "away_en": "Saudi Arabia",
   "away_zh": "沙特阿拉伯",
   "home_score": 4,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-21",
   "time_local": "18:00",
   "round": 2,
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "Uruguay",
   "home_zh": "乌拉圭",
   "away_en": "Cape Verde",
   "away_zh": "佛得角",
   "home_score": 2,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-26",
   "time_local": "19:00",
   "round": 3,
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "Cape Verde",
   "home_zh": "佛得角",
   "away_en": "Saudi Arabia",
   "away_zh": "沙特阿拉伯",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "H",
   "date": "2026-06-26",
   "time_local": "18:00",
   "round": 3,
   "venue_en": "Estadio Akron",
   "city": "Zapopan",
   "country": "Mexico",
   "home_en": "Uruguay",
   "home_zh": "乌拉圭",
   "away_en": "Spain",
   "away_zh": "西班牙",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-16",
   "time_local": "15:00",
   "round": 1,
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "France",
   "home_zh": "法国",
   "away_en": "Senegal",
   "away_zh": "塞内加尔",
   "home_score": 3,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-16",
   "time_local": "18:00",
   "round": 1,
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "Iraq",
   "home_zh": "伊拉克",
   "away_en": "Norway",
   "away_zh": "挪威",
   "home_score": 1,
   "away_score": 4,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-22",
   "time_local": "17:00",
   "round": 2,
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "France",
   "home_zh": "法国",
   "away_en": "Iraq",
   "away_zh": "伊拉克",
   "home_score": 3,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-22",
   "time_local": "20:00",
   "round": 2,
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "Norway",
   "home_zh": "挪威",
   "away_en": "Senegal",
   "away_zh": "塞内加尔",
   "home_score": 3,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-26",
   "time_local": "15:00",
   "round": 3,
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "Norway",
   "home_zh": "挪威",
   "away_en": "France",
   "away_zh": "法国",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "I",
   "date": "2026-06-26",
   "time_local": "15:00",
   "round": 3,
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "Senegal",
   "home_zh": "塞内加尔",
   "away_en": "Iraq",
   "away_zh": "伊拉克",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-16",
   "time_local": "20:00",
   "round": 1,
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "Argentina",
   "home_zh": "阿根廷",
   "away_en": "Algeria",
   "away_zh": "阿尔及利亚",
   "home_score": 3,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-16",
   "time_local": "21:00",
   "round": 1,
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "Austria",
   "home_zh": "奥地利",
   "away_en": "Jordan",
   "away_zh": "约旦",
   "home_score": 3,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-22",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "Argentina",
   "home_zh": "阿根廷",
   "away_en": "Austria",
   "away_zh": "奥地利",
   "home_score": 2,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-22",
   "time_local": "20:00",
   "round": 2,
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "Jordan",
   "home_zh": "约旦",
   "away_en": "Algeria",
   "away_zh": "阿尔及利亚",
   "home_score": 1,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-27",
   "time_local": "21:00",
   "round": 3,
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "Algeria",
   "home_zh": "阿尔及利亚",
   "away_en": "Austria",
   "away_zh": "奥地利",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "J",
   "date": "2026-06-27",
   "time_local": "21:00",
   "round": 3,
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "Jordan",
   "home_zh": "约旦",
   "away_en": "Argentina",
   "away_zh": "阿根廷",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-17",
   "time_local": "12:00",
   "round": 1,
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "Portugal",
   "home_zh": "葡萄牙",
   "away_en": "DR Congo",
   "away_zh": "刚果(金)",
   "home_score": 1,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-17",
   "time_local": "20:00",
   "round": 1,
   "venue_en": "Estadio Azteca",
   "city": "Mexico City",
   "country": "Mexico",
   "home_en": "Uzbekistan",
   "home_zh": "乌兹别克斯坦",
   "away_en": "Colombia",
   "away_zh": "哥伦比亚",
   "home_score": 1,
   "away_score": 3,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-23",
   "time_local": "12:00",
   "round": 2,
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "Portugal",
   "home_zh": "葡萄牙",
   "away_en": "Uzbekistan",
   "away_zh": "乌兹别克斯坦",
   "home_score": 5,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-23",
   "time_local": "20:00",
   "round": 2,
   "venue_en": "Estadio Akron",
   "city": "Zapopan",
   "country": "Mexico",
   "home_en": "Colombia",
   "home_zh": "哥伦比亚",
   "away_en": "DR Congo",
   "away_zh": "刚果(金)",
   "home_score": 1,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-27",
   "time_local": "19:30",
   "round": 3,
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "Colombia",
   "home_zh": "哥伦比亚",
   "away_en": "Portugal",
   "away_zh": "葡萄牙",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "K",
   "date": "2026-06-27",
   "time_local": "19:30",
   "round": 3,
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "DR Congo",
   "home_zh": "刚果(金)",
   "away_en": "Uzbekistan",
   "away_zh": "乌兹别克斯坦",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-17",
   "time_local": "15:00",
   "round": 1,
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "England",
   "home_zh": "英格兰",
   "away_en": "Croatia",
   "away_zh": "克罗地亚",
   "home_score": 4,
   "away_score": 2,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-17",
   "time_local": "19:00",
   "round": 1,
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "Ghana",
   "home_zh": "加纳",
   "away_en": "Panama",
   "away_zh": "巴拿马",
   "home_score": 1,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-23",
   "time_local": "16:00",
   "round": 2,
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "England",
   "home_zh": "英格兰",
   "away_en": "Ghana",
   "away_zh": "加纳",
   "home_score": 0,
   "away_score": 0,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-23",
   "time_local": "19:00",
   "round": 2,
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "Panama",
   "home_zh": "巴拿马",
   "away_en": "Croatia",
   "away_zh": "克罗地亚",
   "home_score": 0,
   "away_score": 1,
   "status": "played"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-27",
   "time_local": "17:00",
   "round": 3,
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "Panama",
   "home_zh": "巴拿马",
   "away_en": "England",
   "away_zh": "英格兰",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "stage": "group",
   "group": "L",
   "date": "2026-06-27",
   "time_local": "17:00",
   "round": 3,
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "Croatia",
   "home_zh": "克罗地亚",
   "away_en": "Ghana",
   "away_zh": "加纳",
   "home_score": null,
   "away_score": null,
   "status": "upcoming"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-28",
   "time_local": "12:00 PT",
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-29",
   "time_local": "16:30 ET",
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "Germany",
   "home_zh": "德国",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-29",
   "time_local": "19:00 CT",
   "venue_en": "Estadio BBVA",
   "city": "Guadalupe",
   "country": "Mexico",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-29",
   "time_local": "12:00 CT",
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-30",
   "time_local": "17:00 ET",
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-30",
   "time_local": "12:00 ET",
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-06-30",
   "time_local": "19:00 CT",
   "venue_en": "Estadio Azteca",
   "city": "Mexico City",
   "country": "Mexico",
   "home_en": "Mexico",
   "home_zh": "墨西哥",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-01",
   "time_local": "12:00 ET",
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-01",
   "time_local": "17:00 PT",
   "venue_en": "Levi's Stadium",
   "city": "Santa Clara",
   "country": "USA",
   "home_en": "United States",
   "home_zh": "美国",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-01",
   "time_local": "13:00 PT",
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-02",
   "time_local": "19:00 ET",
   "venue_en": "BMO Field",
   "city": "Toronto",
   "country": "Canada",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-02",
   "time_local": "12:00 PT",
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-02",
   "time_local": "20:00 PT",
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-03",
   "time_local": "18:00 ET",
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "Argentina",
   "home_zh": "阿根廷",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-03",
   "time_local": "20:30 ET",
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r32",
   "date": "2026-07-03",
   "time_local": "13:00 ET",
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-04",
   "time_local": "17:00 ET",
   "venue_en": "Lincoln Financial Field",
   "city": "Philadelphia",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-04",
   "time_local": "12:00 ET",
   "venue_en": "NRG Stadium",
   "city": "Houston",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-05",
   "time_local": "16:00 ET",
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-05",
   "time_local": "18:00 CT",
   "venue_en": "Estadio Azteca",
   "city": "Mexico City",
   "country": "Mexico",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-06",
   "time_local": "14:00 ET",
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-06",
   "time_local": "17:00 PT",
   "venue_en": "Lumen Field",
   "city": "Seattle",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-07",
   "time_local": "12:00 ET",
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "r16",
   "date": "2026-07-07",
   "time_local": "13:00 PT",
   "venue_en": "BC Place",
   "city": "Vancouver",
   "country": "Canada",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "qf",
   "date": "2026-07-09",
   "time_local": "16:00 ET",
   "venue_en": "Gillette Stadium",
   "city": "Foxborough",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "qf",
   "date": "2026-07-10",
   "time_local": "12:00 PT",
   "venue_en": "SoFi Stadium",
   "city": "Inglewood",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "qf",
   "date": "2026-07-11",
   "time_local": "17:00 ET",
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "qf",
   "date": "2026-07-11",
   "time_local": "20:00 ET",
   "venue_en": "Arrowhead Stadium",
   "city": "Kansas City",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "sf",
   "date": "2026-07-14",
   "time_local": "14:00 ET",
   "venue_en": "AT&T Stadium",
   "city": "Arlington",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "sf",
   "date": "2026-07-15",
   "time_local": "15:00 ET",
   "venue_en": "Mercedes-Benz Stadium",
   "city": "Atlanta",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "third",
   "date": "2026-07-18",
   "time_local": "17:00 ET",
   "venue_en": "Hard Rock Stadium",
   "city": "Miami Gardens",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  },
  {
   "group": null,
   "round": null,
   "stage": "final",
   "date": "2026-07-19",
   "time_local": "15:00 ET",
   "venue_en": "MetLife Stadium",
   "city": "East Rutherford",
   "country": "USA",
   "home_en": "TBD",
   "home_zh": "待定",
   "away_en": "TBD",
   "away_zh": "待定",
   "home_score": null,
   "away_score": null,
   "status": "未赛"
  }
 ]
};
/* === WORLDCUP_DATA:END === */

/* === WORLDCUP_LEDGER:BEGIN (auto-generated — 勿手改) === */
window.WORLDCUP_LEDGER = {
 "title": "本届世界杯战绩",
 "currency": "¥",
 "updated": "2026-06-24",
 "note": "6.16–6.22 仅留每日投入/收入金额，具体票面未留存；6.23 起留存完整投注明细。净盈亏 = 已兑奖收入 − 总投入；待开奖日按收入 0 计入，开奖后回填。",
 "days": [
  {
   "date": "2026-06-16",
   "stake": 100,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-17",
   "stake": 144,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-18",
   "stake": 50,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-19",
   "stake": 80,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-20",
   "stake": 0,
   "payout": 0,
   "status": "nobet",
   "tickets": []
  },
  {
   "date": "2026-06-21",
   "stake": 92,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-22",
   "stake": 92,
   "payout": 0,
   "status": "settled",
   "tickets": []
  },
  {
   "date": "2026-06-23",
   "stake": 124,
   "payout": 244.8,
   "status": "settled",
   "note": "按当日推荐 3 卡比分金字塔下注（I/J 组凌晨 4 场）。",
   "tickets": [
    {
     "name": "保底层 · 比分复式 2串1",
     "way": "2串1",
     "mult": 4,
     "bets": 9,
     "stake": 72,
     "max": 740,
     "rec": true,
     "legs": [
      {
       "home": "阿根廷",
       "away": "奥地利",
       "scores": [
        {
         "s": "2:0",
         "o": 6.0
        },
        {
         "s": "2:1",
         "o": 6.5
        },
        {
         "s": "3:1",
         "o": 9.25
        }
       ]
      },
      {
       "home": "法国",
       "away": "伊拉克",
       "scores": [
        {
         "s": "3:0",
         "o": 5.1
        },
        {
         "s": "3:1",
         "o": 10.0
        },
        {
         "s": "4:0",
         "o": 6.0
        }
       ]
      }
     ]
    },
    {
     "name": "中层 · 比分复式 3串1",
     "way": "3串1",
     "mult": 2,
     "bets": 8,
     "stake": 32,
     "max": 1820,
     "legs": [
      {
       "home": "阿根廷",
       "away": "奥地利",
       "scores": [
        {
         "s": "2:0",
         "o": 6.0
        },
        {
         "s": "2:1",
         "o": 6.5
        }
       ]
      },
      {
       "home": "法国",
       "away": "伊拉克",
       "scores": [
        {
         "s": "3:1",
         "o": 10.0
        },
        {
         "s": "3:0",
         "o": 5.1
        }
       ]
      },
      {
       "home": "挪威",
       "away": "塞内加尔",
       "scores": [
        {
         "s": "2:1",
         "o": 6.75
        },
        {
         "s": "2:0",
         "o": 7.0
        }
       ]
      }
     ]
    },
    {
     "name": "封顶层 · 比分单式 4串1",
     "way": "4串1",
     "mult": 10,
     "bets": 1,
     "stake": 20,
     "max": 23133.6,
     "legs": [
      {
       "home": "阿根廷",
       "away": "奥地利",
       "scores": [
        {
         "s": "2:0",
         "o": 6.0
        }
       ]
      },
      {
       "home": "法国",
       "away": "伊拉克",
       "scores": [
        {
         "s": "3:0",
         "o": 5.1
        }
       ]
      },
      {
       "home": "挪威",
       "away": "塞内加尔",
       "scores": [
        {
         "s": "2:1",
         "o": 6.75
        }
       ]
      },
      {
       "home": "约旦",
       "away": "阿尔及利亚",
       "scores": [
        {
         "s": "0:1",
         "o": 5.6
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "date": "2026-06-24",
   "stake": 144,
   "payout": 0,
   "status": "settled",
   "note": "实际赛果:葡5-0乌、英0-0加、巴0-1克、哥1-0刚。3 场胜负方向对(葡/克/哥)但精确比分全未命中,推荐3卡+自购4串1全灭 → 收 0、当日净 -144。",
   "tickets": [
    {
     "name": "保底层 · 比分复式 2串1",
     "way": "2串1",
     "mult": 4,
     "bets": 9,
     "stake": 72,
     "max": 752.4,
     "rec": true,
     "legs": [
      {
       "home": "葡萄牙",
       "away": "乌兹别克斯坦",
       "scores": [
        {
         "s": "2:1",
         "o": 7.0
        },
        {
         "s": "3:1",
         "o": 9.5
        },
        {
         "s": "2:0",
         "o": 8.0
        }
       ]
      },
      {
       "home": "英格兰",
       "away": "加纳",
       "scores": [
        {
         "s": "2:1",
         "o": 7.9
        },
        {
         "s": "3:1",
         "o": 9.9
        },
        {
         "s": "2:0",
         "o": 6.9
        }
       ]
      }
     ]
    },
    {
     "name": "中层 · 比分复式 3串1",
     "way": "3串1",
     "mult": 2,
     "bets": 8,
     "stake": 32,
     "max": 3009.6,
     "legs": [
      {
       "home": "葡萄牙",
       "away": "乌兹别克斯坦",
       "scores": [
        {
         "s": "2:1",
         "o": 7.0
        },
        {
         "s": "3:1",
         "o": 9.5
        }
       ]
      },
      {
       "home": "英格兰",
       "away": "加纳",
       "scores": [
        {
         "s": "2:1",
         "o": 7.9
        },
        {
         "s": "3:1",
         "o": 9.9
        }
       ]
      },
      {
       "home": "巴拿马",
       "away": "克罗地亚",
       "scores": [
        {
         "s": "1:2",
         "o": 6.5
        },
        {
         "s": "0:2",
         "o": 8.0
        }
       ]
      }
     ]
    },
    {
     "name": "封顶层 · 比分单式 4串1",
     "way": "4串1",
     "mult": 10,
     "bets": 1,
     "stake": 20,
     "max": 50323,
     "legs": [
      {
       "home": "葡萄牙",
       "away": "乌兹别克斯坦",
       "scores": [
        {
         "s": "2:1",
         "o": 7.0
        }
       ]
      },
      {
       "home": "英格兰",
       "away": "加纳",
       "scores": [
        {
         "s": "2:1",
         "o": 7.9
        }
       ]
      },
      {
       "home": "巴拿马",
       "away": "克罗地亚",
       "scores": [
        {
         "s": "1:2",
         "o": 6.5
        }
       ]
      },
      {
       "home": "哥伦比亚",
       "away": "刚果(金)",
       "scores": [
        {
         "s": "2:1",
         "o": 7.0
        }
       ]
      }
     ]
    },
    {
     "name": "额外自购 · 4串1",
     "way": "4串1",
     "mult": null,
     "bets": 1,
     "stake": 20,
     "max": null,
     "self": true,
     "note": "前两场让球负、后两场打平。",
     "legs": [
      {
       "home": "葡萄牙",
       "away": "乌兹别克斯坦",
       "play": "让球负"
      },
      {
       "home": "英格兰",
       "away": "加纳",
       "play": "让球负"
      },
      {
       "home": "巴拿马",
       "away": "克罗地亚",
       "play": "平"
      },
      {
       "home": "哥伦比亚",
       "away": "刚果(金)",
       "play": "平"
      }
     ]
    }
   ]
  }
 ]
};
/* === WORLDCUP_LEDGER:END === */

window.WORLDCUP_FLAGS = {"墨西哥":"🇲🇽","南非":"🇿🇦","韩国":"🇰🇷","捷克":"🇨🇿","加拿大":"🇨🇦","波斯尼亚和黑塞哥维那":"🇧🇦","卡塔尔":"🇶🇦","瑞士":"🇨🇭","巴西":"🇧🇷","摩洛哥":"🇲🇦","海地":"🇭🇹","苏格兰":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","美国":"🇺🇸","巴拉圭":"🇵🇾","澳大利亚":"🇦🇺","土耳其":"🇹🇷","德国":"🇩🇪","库拉索":"🇨🇼","科特迪瓦":"🇨🇮","厄瓜多尔":"🇪🇨","荷兰":"🇳🇱","日本":"🇯🇵","瑞典":"🇸🇪","突尼斯":"🇹🇳","比利时":"🇧🇪","埃及":"🇪🇬","伊朗":"🇮🇷","新西兰":"🇳🇿","西班牙":"🇪🇸","佛得角":"🇨🇻","沙特阿拉伯":"🇸🇦","乌拉圭":"🇺🇾","法国":"🇫🇷","塞内加尔":"🇸🇳","伊拉克":"🇮🇶","挪威":"🇳🇴","阿根廷":"🇦🇷","阿尔及利亚":"🇩🇿","奥地利":"🇦🇹","约旦":"🇯🇴","葡萄牙":"🇵🇹","刚果(金)":"🇨🇩","乌兹别克斯坦":"🇺🇿","哥伦比亚":"🇨🇴","英格兰":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","克罗地亚":"🇭🇷","加纳":"🇬🇭","巴拿马":"🇵🇦","待定":"⚪"};
window.WORLDCUP_VENUE_OFFSET = {"Estadio Azteca":-6,"Estadio Akron":-6,"Estadio BBVA":-6,"BC Place":-7,"SoFi Stadium":-7,"Levi's Stadium":-7,"Lumen Field":-7,"BMO Field":-4,"MetLife Stadium":-4,"Lincoln Financial Field":-4,"Mercedes-Benz Stadium":-4,"Hard Rock Stadium":-4,"Gillette Stadium":-4,"AT&T Stadium":-5,"NRG Stadium":-5,"Arrowhead Stadium":-5};

// ---- 每日赛前预测报告清单（编辑此处登记你的报告；url 相对平台文件路径）----
window.WORLDCUP_PREDICTIONS = [
 { date:'2026-06-24', url:'predictions/2026-06-24/index.html' },
 { date:'2026-06-23', url:'predictions/2026-06-23/index.html', reviewUrl:'reviews/2026-06-23/复盘-周二4场.md',
   // picks: 单场预测(算命中率)；score 比分、wdl 胜平负(主胜/平/客胜)。
   // picks: 单场预测；score/wdl 算命中率；an = 该场分析图表(信心/推荐/胜平负/xG/Top比分/总进球/让球/方案)。概率为分析师定性估计或赔率去水，示例值。
   picks:[
    { home:'阿根廷', away:'奥地利', score:'2:0', wdl:'主胜', an:{
        conf:'高', rec:'让球主胜（阿根廷 -1）',
        wdlQual:[62,22,16], wdlOdds:[58,24,18], xg:[2.1,0.7],
        scoreTop:[{s:'2:0',p:13.5,pick:true},{s:'2:1',p:11.2,pick:true},{s:'1:0',p:10.4},{s:'3:1',p:8.1,pick:true},{s:'3:0',p:7.6}],
        ttg:[4,14,24,26,18,9,3,2], hhad:{line:'阿根廷 -1', probs:[52,26,22]},
        plans:[
          {name:'稳健',tag:'推荐',play:'让球主胜·单关',cover:'让胜',odds:1.80,stake:50,max:90,note:'命中率优先'},
          {name:'中庸',play:'比分复式',cover:'2:0 / 2:1 / 3:1',odds:6.0,stake:36,max:222},
          {name:'搏大',play:'比分单式',cover:'2:0',odds:6.0,stake:20,max:120}
        ] } },
    { home:'法国', away:'伊拉克', score:'3:0', wdl:'主胜', an:{
        conf:'高', rec:'让球主胜（法国 -2）',
        wdlQual:[70,18,12], wdlOdds:[66,20,14], xg:[2.6,0.5],
        scoreTop:[{s:'3:0',p:12.8,pick:true},{s:'2:0',p:12.1},{s:'3:1',p:9.4,pick:true},{s:'4:0',p:7.2,pick:true},{s:'1:0',p:8.0}],
        ttg:[3,10,20,26,21,12,5,3], hhad:{line:'法国 -2', probs:[46,28,26]},
        plans:[
          {name:'稳健',tag:'推荐',play:'让球主胜·单关',cover:'让胜',odds:1.95,stake:50,max:97.5,note:'实力差明显'},
          {name:'搏大',play:'比分复式',cover:'3:0 / 3:1 / 4:0',odds:10.0,stake:36,max:360}
        ] } },
    { home:'挪威', away:'塞内加尔', score:'2:1', wdl:'主胜', an:{
        conf:'中', rec:'主胜 + 总进球 3 档',
        wdlQual:[48,26,26], wdlOdds:[45,27,28], xg:[1.8,1.3],
        scoreTop:[{s:'2:1',p:11.0,pick:true},{s:'2:0',p:9.2,pick:true},{s:'1:1',p:9.0},{s:'3:2',p:6.5},{s:'2:2',p:6.0}],
        ttg:[3,9,18,24,21,14,7,4], hhad:{line:'挪威 -1', probs:[40,28,32]},
        plans:[
          {name:'稳健',tag:'推荐',play:'不让球主胜·单关',cover:'主胜',odds:2.05,stake:40,max:82},
          {name:'中庸',play:'比分复式',cover:'2:1 / 2:0',odds:6.75,stake:18,max:121.5}
        ] } },
    { home:'约旦', away:'阿尔及利亚', score:'0:1', wdl:'客胜', an:{
        conf:'中', rec:'客胜（阿尔及利亚）',
        wdlQual:[30,30,40], wdlOdds:[32,29,39], xg:[0.9,1.4],
        scoreTop:[{s:'0:1',p:11.5,pick:true},{s:'1:1',p:10.2},{s:'1:2',p:9.0},{s:'0:2',p:7.8},{s:'2:1',p:6.4}],
        ttg:[8,20,26,22,13,7,3,1], hhad:{line:'阿尔及利亚 -1（客）', probs:[34,30,36]},
        plans:[
          {name:'稳健',tag:'推荐',play:'不让球客胜·单关',cover:'客胜',odds:2.30,stake:40,max:92},
          {name:'搏大',play:'比分单式',cover:'0:1',odds:5.60,stake:20,max:112}
        ] } }
   ],
   // combos: 串关票面(算盈亏)；按竞彩规则结算 投入=2×注数×倍数, 最高奖金=2×倍数×∏命中赔率, 全中才派奖
   stakeTotal:124,
   combos:[
    { name:'保底层 · 比分复式 2串1', way:'2×1', mult:4, tag:'推荐', bets:9, stake:72, max:740,
      hit:'两场各命中所选比分之一', risk:'三档里命中率最高；两场须全中',
      legs:[
       { no:1, home:'阿根廷', away:'奥地利', scores:[{s:'2:0',o:6.0},{s:'2:1',o:6.5},{s:'3:1',o:9.25}] },
       { no:2, home:'法国',   away:'伊拉克', scores:[{s:'3:0',o:5.1},{s:'3:1',o:10.0},{s:'4:0',o:6.0}] }
      ] },
    { name:'中层 · 比分复式 3串1', way:'3×1', mult:2, bets:8, stake:32, max:1820,
      hit:'三场各命中所选比分之一', risk:'比 2 串 1 多一场，命中率下降',
      legs:[
       { no:1, home:'阿根廷', away:'奥地利',   scores:[{s:'2:0',o:6.0},{s:'2:1',o:6.5}] },
       { no:2, home:'法国',   away:'伊拉克',   scores:[{s:'3:1',o:10.0},{s:'3:0',o:5.1}] },
       { no:3, home:'挪威',   away:'塞内加尔', scores:[{s:'2:1',o:6.75},{s:'2:0',o:7.0}] }
      ] },
    { name:'封顶层 · 比分单式 4串1', way:'4×1', mult:10, bets:1, stake:20, max:45360,
      hit:'四场比分全中（倍率极高）', risk:'命中＜0.1%，愿亏彩票',
      legs:[
       { no:1, home:'阿根廷', away:'奥地利',   scores:[{s:'2:0',o:6.0}] },
       { no:2, home:'法国',   away:'伊拉克',   scores:[{s:'3:1',o:10.0}] },
       { no:3, home:'挪威',   away:'塞内加尔', scores:[{s:'2:1',o:6.75}] },
       { no:4, home:'约旦',   away:'阿尔及利亚', scores:[{s:'0:1',o:5.6}] }
      ] }
   ] },
 { date:'2026-06-22', url:'predictions/2026-06-22/index.html' },
 { date:'2026-06-21', url:'predictions/2026-06-21/index.html' }
];
