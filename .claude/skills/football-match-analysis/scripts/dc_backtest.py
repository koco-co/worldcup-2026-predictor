#!/usr/bin/env python3
"""
DC 比分矩阵量化回测工具（可复用；prototype/dc_validation.py 的参数化升级版）。
对一批已结束比赛各跑两套 λ 对照：OLD=旧框架 λ，NEW=新框架纪律(对手类型分级/λ差≥1/
开放对攻升档/碾压净胜)λ，看 NEW 能否把尾部比分(0-0、5-1)的矩阵概率/排名提上来。
诚实约束：λ 只用赛前信息推，不拿结果反推。
用法：python3 dc_backtest.py <批次数据.json>   （数据放 reviews/backtests/）
数据 JSON 格式：
{
  "title": "2026-06-21 E/F组4场",
  "rho": -0.13,
  "matches": [
    {"name":"德国 vs 科特迪瓦","actual":[2,1],"old":[1.8,1.0],"new":[1.9,0.9],"note":"..."}
  ]
}
"""
import sys, os, json, math
DEFAULT_RHO = -0.13
N = 10


def pois(k, lam):
    return math.exp(-lam) * lam ** k / math.factorial(k)


def tau(x, y, lh, la, rho):
    if x == 0 and y == 0: return 1 - lh * la * rho
    if x == 0 and y == 1: return 1 + lh * rho
    if x == 1 and y == 0: return 1 + la * rho
    if x == 1 and y == 1: return 1 - rho
    return 1.0


def dc_matrix(lh, la, rho):
    M = [[pois(i, lh) * pois(j, la) * tau(i, j, lh, la, rho) for j in range(N + 1)] for i in range(N + 1)]
    s = sum(sum(r) for r in M)
    return [[v / s for v in r] for r in M]


def agg(M):
    hw = dw = aw = etot = 0.0
    tot = [0.0] * 8
    hb2 = hb3 = ab2 = ab3 = 0.0
    for i in range(N + 1):
        for j in range(N + 1):
            p = M[i][j]
            if i > j: hw += p
            elif i == j: dw += p
            else: aw += p
            tot[min(i + j, 7)] += p
            etot += (i + j) * p
            if i - j >= 2: hb2 += p
            if i - j >= 3: hb3 += p
            if j - i >= 2: ab2 += p
            if j - i >= 3: ab3 += p
    pge4 = sum(tot[4:])
    return dict(hw=hw, dw=dw, aw=aw, pge4=pge4, etot=etot, hb2=hb2, hb3=hb3, ab2=ab2, ab3=ab3)


def top_scores(M, k=4):
    cells = [((i, j), M[i][j]) for i in range(6) for j in range(6)]
    cells.sort(key=lambda x: -x[1])
    return cells[:k]


def actual_prob_rank(M, ah, aa):
    p = M[ah][aa]
    allc = sorted([((i, j), M[i][j]) for i in range(8) for j in range(8)], key=lambda x: -x[1])
    rank = next((idx + 1 for idx, (s, _) in enumerate(allc) if s == (ah, aa)), 99)
    return p, rank


def show(actual, lh, la, rho, tag):
    M = dc_matrix(lh, la, rho)
    a = agg(M)
    ah, aa = actual
    pact, rank = actual_prob_rank(M, ah, aa)
    tops = ", ".join("%d-%d %.0f%%" % (i, j, p * 100) for (i, j), p in top_scores(M))
    print("  [%-3s] lambda=(%s,%s)  W/D/L=%.0f/%.0f/%.0f  E[tot]=%.2f  P(tot>=4)=%.0f%%  P(0-0)=%.1f%%"
          % (tag, lh, la, a['hw'] * 100, a['dw'] * 100, a['aw'] * 100, a['etot'],
             a['pge4'] * 100, M[0][0] * 100))
    print("        Top: %s" % tops)
    print("        net>=2/>=3: home %.0f/%.0f%% . away %.0f/%.0f%%"
          % (a['hb2'] * 100, a['hb3'] * 100, a['ab2'] * 100, a['ab3'] * 100))
    print("        >> actual %d-%d prob=%.1f%%  (rank %d)" % (ah, aa, pact * 100, rank))
    return pact, rank


def main(argv):
    if len(argv) < 2:
        sys.exit("usage: python3 dc_backtest.py <batch.json>  (data under reviews/backtests/)")
    path = argv[1]
    if not os.path.exists(path):
        sys.exit("file not found: %s" % path)
    data = json.load(open(path, encoding="utf-8"))
    rho = data.get("rho", DEFAULT_RHO)
    matches = data.get("matches", [])
    if not matches:
        sys.exit("no matches in data")
    print("=" * 78)
    print("DC score-matrix backtest . %s  (rho=%.2f)" % (data.get("title", ""), rho))
    print("OLD(old lambda) vs NEW(new-framework lambda); lambda from pre-match info only")
    print("=" * 78)
    sop = snp = 0.0
    sor = snr = 0
    n = nb = 0
    for m in matches:
        ah, aa = m["actual"]
        print("\n### %s  actual %d-%d   [%s]" % (m["name"], ah, aa, m.get("note", "")))
        op, orank = show((ah, aa), m["old"][0], m["old"][1], rho, "OLD")
        np_, nrank = show((ah, aa), m["new"][0], m["new"][1], rho, "NEW")
        sop += op; snp += np_; sor += orank; snr += nrank; n += 1
        if np_ > op: nb += 1
    print("\n" + "=" * 78)
    print("SUMMARY (NEW vs OLD):")
    print("  avg matrix prob of actual score: OLD %.2f%%  ->  NEW %.2f%%  (higher=better)"
          % (sop / n * 100, snp / n * 100))
    print("  avg rank of actual score:        OLD %.1f    ->  NEW %.1f    (lower=better)"
          % (sor / n, snr / n))
    print("  NEW raises actual-score prob in: %d/%d matches" % (nb, n))


if __name__ == "__main__":
    main(sys.argv)
