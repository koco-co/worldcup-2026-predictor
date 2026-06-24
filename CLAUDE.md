# worldcup-2026-predictor — 项目约定

本项目专注 **2026 FIFA 世界杯**的赛前预测、赛后复盘与策略量化优化。只针对世界杯积累数据,不处理其它联赛。

## 分析方法(必须)

- 所有**赛前预测、赛后复盘、回测**一律走 `football-match-analysis` skill(位于 `.claude/skills/`,**随仓库公开**,方法论开源)。
- 不要绕过 skill 自行临时分析;规则与口径以 SKILL.md 为准。

## 目录结构

```
.
├── index.html                # 对阵全景平台(站点入口 / GitHub Pages 根)。自包含:数据已内联,离线可开
├── init.sh                   # 一键同步数据(见下)
├── data/
│   └── worldcup-data.js      # 数据契约。DATA/LEDGER 自动生成;FLAGS/OFFSET/PREDICTIONS 手工维护
├── scripts/
│   └── build_worldcup_data.py# 从真源生成 worldcup-data.js 并内联进 index.html
├── 赛前预测/<YYYY-MM-DD>/      # 每场一个 .md 深度分析 + index.html 可视化卡片(被首页链接)
├── 赛后复盘/<YYYY-MM-DD>/      # 该批次赛后复盘
├── 赛后复盘/回测/             # 跨批次回测报告(.md)与 dc 输入(.json)
└── .claude/skills/football-match-analysis/   # 方法论 skill + 数据真源
    └── assets/
        ├── tournament.json   # 真源①:赛程 / 赛果(48 队 · 104 场)
        └── betting-ledger.json # 真源②:押注台账(战绩 / 净盈亏的唯一真源)
```

## 对阵全景平台与数据流

- 平台是单个自包含 `index.html`(4 视图:对阵全景 / 每日预测 / 积分榜 / 数据中心)。
- 数据流:`tournament.json` + `betting-ledger.json`(真源)→ `scripts/build_worldcup_data.py` → `data/worldcup-data.js` → **内联进 `index.html`**(页面不在运行时 fetch 同级文件,任何环境直接出数据)。
- **改完真源跑一次** `./init.sh`(等价 `python3 scripts/build_worldcup_data.py`),再用浏览器打开 `index.html`。
- 战绩 / 净盈亏口径**与复盘报告一致**:`净盈亏 = 已兑奖 − 总投入`,待开奖日收入按 0 计入、开奖后回填。改这口径要同时改报告生成器,保持一致。
- 手工维护项在 `data/worldcup-data.js`:`WORLDCUP_FLAGS`(国旗)/`WORLDCUP_VENUE_OFFSET`(球场时区)/`WORLDCUP_PREDICTIONS`(每日报告链接 + 逐场预测明细)。

## 量化回测

- 跨批次验证新规则准不准:`python3 .claude/skills/football-match-analysis/scripts/dc_backtest.py <批次json>`
- 输入 json 放 `赛后复盘/回测/<日期>-dc输入.json`,含每场 `actual` / `old` λ / `new` λ。

## 发布约定(公开仓库)

- 仓库:https://github.com/koco-co/worldcup-2026-predictor
- **公开**:`index.html`、`data/`、`scripts/`、`init.sh`、`赛前预测/`、`赛后复盘/` 与 `.claude/skills/`(分析方法论开源)。
- **不入库**(见 `.gitignore`):本地工具/配置(`.claude/launch.json`、`settings.local.json`)、Codex 旧镜像(`.agents/`、`AGENTS.md`)、设计稿 handoff 包(`*-handoff.zip`)、系统垃圾(`.DS_Store`/`__pycache__`)。
- 仓库内**不得含任何密钥/凭据**;个人战绩台账(`betting-ledger.json`)与渲染结果均为用户自愿公示——提交前核验无敏感信息。
