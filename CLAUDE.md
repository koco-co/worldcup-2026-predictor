# worldcup-2026-predictor — 项目约定

本项目专注 **2026 FIFA 世界杯**的赛前预测、赛后复盘与策略量化优化。只针对世界杯积累数据,不处理其它联赛。

## 分析方法(必须)

- 所有**赛前预测、赛后复盘、回测**一律走 `football-match-analysis` skill(位于 `.claude/skills/`,本地私有、**不入公开仓库**)。
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
- **只公开** `赛前预测/` 与 `赛后复盘/`;`.claude/`(方法论实现)**永不入库**(见 `.gitignore`)。
- 提交 / 推送前务必核验 `.claude/` 未被暂存。
