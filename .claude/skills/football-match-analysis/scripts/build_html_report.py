#!/usr/bin/env python3
"""
把某一天 赛前预测/<日期>/ 目录下所有 md 赛前分析报告，注入固定的 Claude 风格模板，
生成该目录下唯一的 index.html（自包含单文件：md 文本 + marked 渲染器 + CSS 全内联）。

用法：
    python3 build_html_report.py 赛前预测/2026-06-21        # 重建该日的 index.html
    python3 build_html_report.py 赛前预测/2026-06-21/德国-vs-科特迪瓦.md  # 传 md 也行，取其父目录
    python3 build_html_report.py                            # 扫描 赛前预测/*/ 全部重建

每篇 md 顶部可带一小段 frontmatter（用于卡片摘要 chip），缺了也能跑：
    ---
    match: 德国 vs 科特迪瓦
    league: 世界杯小组赛
    kickoff: 2026-06-21 04:00
    result: 主胜（德国胜）
    confidence: 中
    score: 2:1
    recommend: 让球让平
    ---
    <正文 markdown...>

另可在 md 末尾追加 <!--FB-DATA {json} --> 数据块，驱动卡片折叠态图表（胜平负 / 预期进球 /
Top 比分 / 总进球 / 让球 / 押注方案）；type:"combo" 的块渲染成顶部置顶综合串关卡。
字段见 references/report-data.md。无数据块则退化成纯文本卡。
"""
import sys, os, json, re, glob, datetime

SKILL_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE = os.path.join(SKILL_DIR, "assets", "report-template.html")
MARKED = os.path.join(SKILL_DIR, "assets", "marked.min.js")
# 跨批次数据：本届世界杯个人战绩台账 + 真实赛程/元信息（驱动头部大标题、净盈亏按钮、两个弹窗）。
# 二者均私有（assets 在 .claude/ 内、不入公开仓库），构建时把渲染所需数据烤进每个 index.html。
LEDGER = os.path.join(SKILL_DIR, "assets", "betting-ledger.json")
TOURNAMENT = os.path.join(SKILL_DIR, "assets", "tournament.json")
FM_KEYS = ("match", "date", "league", "kickoff", "result", "confidence", "score", "recommend")


def load_json_embed(path):
    """读取数据文件，返回可安全嵌入 <script type=application/json> 的字符串；缺失/坏档退化为 'null'（前端据此隐藏对应功能）。"""
    if not os.path.exists(path):
        return "null"
    try:
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print("  ⚠ 数据文件解析失败，按无数据处理：%s（%s）" % (path, e))
        return "null"
    return json.dumps(data, ensure_ascii=False).replace("</", "<\\/")


def parse_front_matter(text):
    """解析顶部 --- ... --- 的简单 key: value frontmatter，返回 (meta, body)。无 PyYAML 依赖。"""
    meta = {}
    m = re.match(r"^﻿?---\s*\n(.*?)\n---\s*\n?(.*)$", text, re.S)
    if not m:
        return meta, text.lstrip("﻿")
    block, body = m.group(1), m.group(2)
    for line in block.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        k, _, v = line.partition(":")
        v = v.strip().strip('"').strip("'")
        meta[k.strip().lower()] = v
    return meta, body


FB_RE = re.compile(r"<!--\s*FB-DATA\s*(\{.*?\})\s*-->", re.S)


def extract_fb(text):
    """提取 md 末尾的 <!--FB-DATA {json} --> 图表数据块，返回 (data_or_None, text_without_block)。"""
    m = FB_RE.search(text)
    if not m:
        return None, text
    body = text[:m.start()] + text[m.end():]
    try:
        return json.loads(m.group(1)), body
    except Exception as e:
        print("  ⚠ FB-DATA JSON 解析失败，按无图表处理：%s" % e)
        return None, body


def _row(body, *labels):
    """从 md 表格里抓 `| <label> | <value> |` 的值，去掉 ** 与反引号。"""
    for lab in labels:
        m = re.search(r"^\|\s*" + re.escape(lab) + r"\s*\|\s*(.+?)\s*\|", body, re.M)
        if m:
            return re.sub(r"\*\*?|`", "", m.group(1)).strip()
    return ""


def _clip(s, n):
    s = (s or "").strip()
    return s if len(s) <= n else s[: n - 1] + "…"


def extract_from_body(body):
    """frontmatter 缺失时，从报告正文（尤其最终结论汇总表）回退提取卡片摘要字段。"""
    out = {}
    result = _row(body, "胜负倾向")
    if result:
        out["result"] = _clip(result, 16)
    conf = _row(body, "置信度")
    if conf:
        out["confidence"] = conf
    score = _row(body, "首选比分")
    if score:
        out["score"] = _clip(score, 14)
    rec = _row(body, "推荐押注方案", "推荐方案", "推荐")
    if rec:
        rec = re.split(r"——|—|（推荐）|\(推荐\)", rec)[0].strip()
        out["recommend"] = _clip(rec, 22)
    league = _row(body, "赛事", "赛事类型")
    if league:
        out["league"] = _clip(league, 22)
    kick = _row(body, "时间", "比赛时间", "比赛日期")
    if kick:
        m = re.search(r"\d{4}-\d{2}-\d{2}\s*\d{2}:\d{2}", kick)
        out["kickoff"] = m.group(0) if m else _clip(kick, 22)
    return out


def load_report(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    fb, text = extract_fb(text)
    meta, body = parse_front_matter(text)
    body = body.strip()
    fname = os.path.basename(path)
    stem = re.sub(r"\.md$", "", fname)
    is_combo = bool(fb) and fb.get("type") == "combo"
    rec = {"file": stem, "body": body, "_combo": is_combo}
    if fb and is_combo:
        fb["_body"] = body          # 串关正文，供置顶卡「展开完整分析」
        rec["_combo_data"] = fb
    elif fb:
        rec["chart"] = fb           # 单场图表数据
    fallback = extract_from_body(body)
    for k in FM_KEYS:
        val = (fb.get(k) if (fb and not is_combo) else None) or meta.get(k) or fallback.get(k)
        if val:
            rec[k] = val
    rec.setdefault("match", stem.replace("-vs-", " vs ").replace("_", " "))
    return rec


def build_dir(date_dir):
    date_dir = os.path.normpath(date_dir)
    mds = sorted(
        p for p in glob.glob(os.path.join(date_dir, "*.md"))
        if os.path.basename(p).lower() != "readme.md"
    )
    if not mds:
        print("  跳过（无 md）：%s" % date_dir)
        return False

    all_reports = [load_report(p) for p in mds]
    combo = None
    matches = []
    for r in all_reports:
        if r.pop("_combo", False):
            cd = r.pop("_combo_data", None)
            if combo is None:
                combo = cd
            else:
                print("  ⚠ 当天有多个 combo 数据块，仅用第一个")
        else:
            r.pop("_combo_data", None)
            matches.append(r)
    # 按 kickoff 时间排序（无则按文件名）
    matches.sort(key=lambda r: (r.get("kickoff") or "", r.get("match") or r["file"]))

    with open(TEMPLATE, encoding="utf-8") as f:
        html = f.read()
    with open(MARKED, encoding="utf-8") as f:
        marked_src = f.read()

    title = os.path.basename(date_dir.rstrip("/")) or "赛前分析"
    # 防止 md 里出现 </script 截断数据块（在 <script type=application/json> 内）
    data_json = json.dumps(matches, ensure_ascii=False).replace("</", "<\\/")
    combo_json = (json.dumps(combo, ensure_ascii=False).replace("</", "<\\/")
                  if combo else "null")
    build_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    tournament_json = load_json_embed(TOURNAMENT)
    ledger_json = load_json_embed(LEDGER)

    out = (html
           .replace("__DATE_TITLE__", title)
           .replace("__MATCH_COUNT__", str(len(matches)))
           .replace("__BUILD_TIME__", build_time)
           .replace("/*__MARKED_JS__*/", marked_src)
           .replace("__TOURNAMENT_JSON__", tournament_json)
           .replace("__LEDGER_JSON__", ledger_json)
           .replace("__COMBO_JSON__", combo_json)
           .replace("__REPORTS_JSON__", data_json))

    out_path = os.path.join(date_dir, "index.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out)
    extra = " + 综合串关置顶卡" if combo else ""
    print("  ✓ %s  （%d 场%s）" % (out_path, len(matches), extra))
    return True


def main(argv):
    for p in (TEMPLATE, MARKED):
        if not os.path.exists(p):
            sys.exit("缺少资源文件：%s" % p)

    if len(argv) >= 2:
        target = argv[1]
        if target.endswith(".md"):
            target = os.path.dirname(target) or "."
        if not os.path.isdir(target):
            sys.exit("目录不存在：%s" % target)
        ok = build_dir(target)
        sys.exit(0 if ok else 1)

    # 无参数：扫描 赛前预测/*/ 全部重建
    base = "赛前预测"
    if not os.path.isdir(base):
        sys.exit("未找到 赛前预测/ 目录；请在项目根运行，或传入具体日期目录。")
    dirs = sorted(d for d in glob.glob(os.path.join(base, "*")) if os.path.isdir(d))
    if not dirs:
        sys.exit("赛前预测/ 下没有日期子目录。")
    print("重建 %d 个日期目录：" % len(dirs))
    built = sum(build_dir(d) for d in dirs)
    print("完成：%d 个 index.html。" % built)


if __name__ == "__main__":
    main(sys.argv)
