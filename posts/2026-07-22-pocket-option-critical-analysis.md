---
title: Critical Deep Dive: Quantitative Analysis of 2,836 Pocket Option Executions
date: 2026-07-22
category: Post-Mortem
tickers: $POCKETOPTION, $AUDCHF, $CADCHF, $CADJPY, $EURUSD
outcome: Loss
readTime: 8 min
excerpt: A comprehensive data analysis of 2,836 binary trades uncovering hidden statistical edges, money-draining assets, and the 5-minute expiry breakthrough.
---

# Critical Deep Dive: Quantitative Analysis of 2,836 Pocket Option Executions

> **Analysis Scope:** 2,836 real trade executions extracted directly from Pocket Option export history logs.

---

### Executive Performance Summary

* **Total Executions Analyzed:** 2,836 trades
* **Wins:** 1,399 | **Losses:** 1,421 | **Refunds/Ties:** 16
* **Overall Win Rate:** **49.61%**
* **Total Volume Staked:** **$5,354.62**
* **Net Realized PnL:** **-$334.88**

While a 49.61% win rate is slightly below the ~54% needed to overcome binary options payout odds (80-92%), **deeper statistical segmentation reveals a profitable core trading strategy hidden under execution noise.**

---

### 1. The Expiration Breakthrough: 60-Sec Noise vs. 5-Min Edge

The data reveals a stark contrast between short-duration 60-second noise and longer-duration market structure setups:

| Expiration | Trade Count | Win Rate % | Net PnL ($) | Strategy Impact |
|---|---|---|---|---|
| **S60 (60 Seconds)** | **1,902** (67.1%) | **49.47%** | <span style="color:#f43f5e">-$246.69</span> | Heavy Noise & Payout Drag |
| **S180 (3 Minutes)** | 337 | 38.87% | <span style="color:#f43f5e">-$141.46</span> | Poor Timing Window |
| **S120 (2 Minutes)** | 316 | 45.57% | <span style="color:#f43f5e">-$84.14</span> | Sub-Optimal Retests |
| **S300 (5 Minutes)** | **170** | <strong style="color:#10b981">71.76%</strong> | <strong style="color:#10b981">+$101.86</strong> | 🔥 **High-Confluence Edge** |
| **S240 (4 Minutes)** | 28 | <strong style="color:#10b981">85.71%</strong> | <strong style="color:#10b981">+$31.56</strong> | 🔥 **High-Confluence Edge** |
| **S480 (8 Minutes)** | 12 | <strong style="color:#10b981">100.00%</strong> | <strong style="color:#10b981">+$26.08</strong> | Perfect Structural Follow-through |

#### 💡 Critical Finding:
When trading **60-second hyper-scalps**, market micro-whipsaws cause your win rate to hover at **49.47%**, creating a net drawdown. 
However, when you extend your expiration to **5 minutes (S300)**, your win rate surges to **71.76%** with **+$101.86 profit**!

---

### 2. Asset Profitability: The Winners vs. Money Drains

Your trade history spans 20+ pairs. The performance split between pairs is staggering:

#### 🏆 Top Goldmine Assets (Keep Trading These):
1. **CAD/CHF OTC**: 236 trades | **73.31% Win Rate** | <strong style="color:#10b981">+$171.92 Profit</strong>
2. **AUD/CHF OTC**: 139 trades | **76.26% Win Rate** | <strong style="color:#10b981">+$115.70 Profit</strong>
3. **AED/CNY OTC**: 185 trades | **59.46% Win Rate** | <strong style="color:#10b981">+$57.56 Profit</strong>
4. **EUR/GBP OTC**: 132 trades | **54.55% Win Rate** | <strong style="color:#10b981">+$13.48 Profit</strong>

#### ⚠️ Top Money-Draining Assets (Blacklist or Eliminate):
1. **CAD/JPY OTC**: 497 trades | **37.22% Win Rate** | <span style="color:#f43f5e">-$275.07 Loss</span>
2. **EUR/USD OTC**: 300 trades | **36.00% Win Rate** | <span style="color:#f43f5e">-$195.36 Loss</span>
3. **AUD/NZD OTC**: 349 trades | **43.55% Win Rate** | <span style="color:#f43f5e">-$141.85 Loss</span>
4. **AUD/CAD OTC**: 370 trades | **47.03% Win Rate** | <span style="color:#f43f5e">-$56.75 Loss</span>

> **Action Item:** Eliminating `CAD/JPY OTC` and `EUR/USD OTC` alone instantly erases **-$470.43 of losses**, turning your entire account net positive!

---

### 3. Directional Bias: Bearish Edge (PUT) vs Bullish (CALL)

* **PUT (Short) Executions:** 1,837 trades | **51.71% Win Rate** | -$90.56 Net
* **CALL (Long) Executions:** 983 trades | **45.68% Win Rate** | -$244.32 Net

You exhibit significantly higher accuracy when trading **PUTs** (following downtrends or resistance rejections) than when attempting counter-trend CALL reversals.

---

### 4. Behavior & Execution Hygiene: Rapid Button-Smashing

The timestamp analysis identified frequent instances of **rapid-fire multi-click sequences**:
* Example (2026-07-22 19:33:00 to 19:33:10): **12 CALL trades placed in under 10 seconds** on EUR/USD OTC.
* When price moves against a position, placing 5 to 10 identical orders within seconds turns a single $2 loss into a **$24 loss sequence**.

---

### 🛠️ Strategic Action Plan & Optimization Rules

To immediately turn this dataset into a consistent profit curve:

1. **Mandatory 5-Minute Expiration Rule (`S300`)**: Ban 60-second trades completely. Your 5-minute trades yield a **71.8% win rate**.
2. **Asset Focus & Blacklist**:
   - **Allowed Pairs:** `AUD/CHF OTC`, `CAD/CHF OTC`, `AED/CNY OTC`.
   - **Blacklisted Pairs:** `CAD/JPY OTC`, `EUR/USD OTC`, `AUD/NZD OTC`.
3. **Single Order Entry Lock**: Max 1 trade per setup level. No multi-clicking or rapid re-entries within 60 seconds.
4. **Focus on PUT (Short) Setups**: Align entries with 5-minute bearish structure sweeps.
