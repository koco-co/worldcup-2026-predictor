#!/usr/bin/env bash
# 一键同步世界杯平台数据。
# 真源： .claude/skills/football-match-analysis/assets/tournament.json   （赛程 / 赛果）
#        .claude/skills/football-match-analysis/assets/betting-ledger.json（押注台账）
# 动作： 重新生成 data/worldcup-data.js，并内联进 index.html（页面自包含，离线可开）。
# 用法： ./init.sh   —— 改完上面两个真源后跑一次即可。
set -euo pipefail
cd "$(dirname "$0")"

echo "▶ 同步赛事数据与押注台账 → data/worldcup-data.js + index.html …"
python3 scripts/build_worldcup_data.py
echo "✓ 已同步。直接用浏览器打开 index.html 查看最新数据。"
