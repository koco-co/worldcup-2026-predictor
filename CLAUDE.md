# worldcup-2026-predictor — 项目约定

本项目专注 **2026 FIFA 世界杯**的赛前预测、赛后复盘与策略量化优化。只针对世界杯积累数据,不处理其它联赛。

## 分析方法(必须)

- 所有**赛前预测、赛后复盘、回测**一律走 `football-match-analysis` skill(位于 `.claude/skills/`,**随仓库公开**,方法论开源)。
- 不要绕过 skill 自行临时分析;规则与口径以 SKILL.md 为准。

## 目录规范

- `赛前预测/<YYYY-MM-DD>/` — 每场一个 `.md` 深度分析 + `index.html` 可视化卡片
- `赛后复盘/<YYYY-MM-DD>/` — 该批次赛后复盘
- `赛后复盘/回测/` — 跨批次回测报告(`.md`)与 dc 输入(`.json`)

## 量化回测

- 跨批次验证新规则准不准:`python3 .claude/skills/football-match-analysis/scripts/dc_backtest.py <批次json>`
- 输入 json 放 `赛后复盘/回测/<日期>-dc输入.json`,含每场 `actual` / `old` λ / `new` λ。

## 发布约定(公开仓库)

- 仓库:https://github.com/koco-co/worldcup-2026-predictor
- **公开**:`赛前预测/`、`赛后复盘/` 与 `.claude/skills/`(分析方法论开源)。
- **不入库**(见 `.gitignore`):本地工具/配置(`.claude/launch.json`、`settings.local.json`)、Codex 旧镜像(`.agents/`、`AGENTS.md`)、系统垃圾(`.DS_Store`/`__pycache__`)。
- 仓库内**不得含任何密钥/凭据**;个人战绩台账(`betting-ledger.json`)与渲染结果均为用户自愿公示——提交前核验无敏感信息。
