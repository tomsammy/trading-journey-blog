/**
 * THE TAPE — Trading Journal & Blog Application Logic
 * Integrated with Pocket Option Cashflow & Binary Executions Trade Analytics.
 */

const DEFAULT_PO_DEPOSITS = [
  { id: "14706497", date: "2026-07-22 18:48:22", amount: "$101.48", method: "Bank Transfer (NGN)", type: "Withdrawal", status: "Completed", bonus: "$0" },
  { id: "121227315", date: "2026-07-22 15:21:28", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "121115323", date: "2026-07-21 12:57:45", amount: "$500.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "121076287", date: "2026-07-21 01:44:10", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "121074930", date: "2026-07-21 01:09:53", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120943199", date: "2026-07-19 16:40:22", amount: "$15.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120941738", date: "2026-07-19 16:22:54", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120941064", date: "2026-07-19 16:15:28", amount: "$10.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "14663979", date: "2026-07-18 22:05:15", amount: "$83.28", method: "Bank Transfer (NGN)", type: "Withdrawal", status: "Completed", bonus: "$0" },
  { id: "14663969", date: "2026-07-18 22:03:57", amount: "$83.28", method: "Bank Transfer (NGN)", type: "Withdrawal", status: "Declined by client", bonus: "$0" },
  { id: "120875194", date: "2026-07-18 21:27:04", amount: "$40.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120875161", date: "2026-07-18 21:26:45", amount: "$10.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Expired", bonus: "$0" },
  { id: "120873459", date: "2026-07-18 21:03:14", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "14658267", date: "2026-07-18 11:56:00", amount: "$131.00", method: "Bank Transfer (NGN)", type: "Withdrawal", status: "Completed", bonus: "$0" },
  { id: "120813966", date: "2026-07-18 08:36:01", amount: "$40.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120813739", date: "2026-07-18 08:32:00", amount: "$20.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120812000", date: "2026-07-18 08:02:57", amount: "$10.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "14649681", date: "2026-07-17 16:47:02", amount: "$100.39", method: "Bank Transfer (NGN)", type: "Withdrawal", status: "Completed", bonus: "$0" },
  { id: "120721145", date: "2026-07-17 10:27:38", amount: "$10.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" },
  { id: "120720372", date: "2026-07-17 10:18:19", amount: "$10.00", method: "Bank Transfer (NGN)", type: "Deposit", status: "Completed", bonus: "$0" }
];

const DEFAULT_POSTS = [
  {
    id: "2026-07-22-pocket-option-critical-analysis",
    title: "Critical Deep Dive: Quantitative Analysis of 2,836 Pocket Option Executions",
    date: "2026-07-22",
    category: "Post-Mortem",
    tickers: ["$POCKETOPTION", "$AUDCHF", "$CADCHF", "$CADJPY", "$EURUSD"],
    outcome: "Loss",
    readTime: "8 min",
    excerpt: "A comprehensive data analysis of 2,836 binary trades uncovering hidden statistical edges, money-draining assets, and the 5-minute expiry breakthrough.",
    content: `# Critical Deep Dive: Quantitative Analysis of 2,836 Pocket Option Executions

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
| **S60 (60 Seconds)** | **1,902** (67.1%) | **49.47%** | -$246.69 | Heavy Noise & Payout Drag |
| **S180 (3 Minutes)** | 337 | 38.87% | -$141.46 | Poor Timing Window |
| **S120 (2 Minutes)** | 316 | 45.57% | -$84.14 | Sub-Optimal Retests |
| **S300 (5 Minutes)** | **170** | **71.76%** | **+$101.86** | 🔥 **High-Confluence Edge** |
| **S240 (4 Minutes)** | 28 | **85.71%** | **+$31.56** | 🔥 **High-Confluence Edge** |
| **S480 (8 Minutes)** | 12 | **100.00%** | **+$26.08** | Perfect Structural Follow-through |

#### 💡 Critical Finding:
When trading **60-second hyper-scalps**, market micro-whipsaws cause your win rate to hover at **49.47%**, creating a net drawdown. 
However, when you extend your expiration to **5 minutes (S300)**, your win rate surges to **71.76%** with **+$101.86 profit**!

---

### 2. Asset Profitability: The Winners vs. Money Drains

Your trade history spans 20+ pairs. The performance split between pairs is staggering:

#### 🏆 Top Goldmine Assets (Keep Trading These):
1. **CAD/CHF OTC**: 236 trades | **73.31% Win Rate** | **+$171.92 Profit**
2. **AUD/CHF OTC**: 139 trades | **76.26% Win Rate** | **+$115.70 Profit**
3. **AED/CNY OTC**: 185 trades | **59.46% Win Rate** | **+$57.56 Profit**
4. **EUR/GBP OTC**: 132 trades | **54.55% Win Rate** | **+$13.48 Profit**

#### ⚠️ Top Money-Draining Assets (Blacklist or Eliminate):
1. **CAD/JPY OTC**: 497 trades | **37.22% Win Rate** | -$275.07 Loss
2. **EUR/USD OTC**: 300 trades | **36.00% Win Rate** | -$195.36 Loss
3. **AUD/NZD OTC**: 349 trades | **43.55% Win Rate** | -$141.85 Loss
4. **AUD/CAD OTC**: 370 trades | **47.03% Win Rate** | -$56.75 Loss

> **Action Item:** Eliminating \`CAD/JPY OTC\` and \`EUR/USD OTC\` alone instantly erases **-$470.43 of losses**, turning your entire account net positive!

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

1. **Mandatory 5-Minute Expiration Rule (\`S300\`)**: Ban 60-second trades completely. Your 5-minute trades yield a **71.8% win rate**.
2. **Asset Focus & Blacklist**:
   - **Allowed Pairs:** \`AUD/CHF OTC\`, \`CAD/CHF OTC\`, \`AED/CNY OTC\`.
   - **Blacklisted Pairs:** \`CAD/JPY OTC\`, \`EUR/USD OTC\`, \`AUD/NZD OTC\`.
3. **Single Order Entry Lock**: Max 1 trade per setup level. No multi-clicking or rapid re-entries within 60 seconds.
4. **Focus on PUT (Short) Setups**: Align entries with 5-minute bearish structure sweeps.`
  },
  {
    id: "2026-07-21-pocket-option-funding",
    title: "Pocket Option Capital Flow: Scaling with $500 Deposit & System Discipline",
    date: "2026-07-21",
    category: "Pocket Option Log",
    tickers: ["$POCKETOPTION", "$EURUSD"],
    outcome: "Win",
    readTime: "4 min",
    excerpt: "Logging a major capital milestone on Pocket Option with a $500 bank transfer deposit and analyzing my capital flow metrics.",
    content: `# Pocket Option Capital Flow: Scaling with $500 Deposit & System Discipline

### Capital Milestone Summary
Today I executed a **$500.00 deposit** via NGN Bank Transfer into my Pocket Option account, bringing my cumulative funded capital to **$735.00** across 14 completed deposits.

* **Account Platform:** Pocket Option
* **Transaction ID:** \`#121115323\`
* **Payment Method:** Bank Transfer (NGN)
* **Net Funded Capital:** $318.85 ($735.00 Deposited - $416.15 Withdrawn)

---

### Why Scaling Capital Now?

Over the past week, I've proven consistency on lower stake sizes ($10–$40 trades). After reviewing my Pocket Option cashflow ledger:
- **Completed Withdrawals:** $416.15 (across 4 successful payout requests).
- **Withdrawal Reliability:** Payouts processed cleanly back to bank account.

With a solid cashflow baseline, increasing position sizing while maintaining a strict **1.5% max risk per binary trade** will accelerate account growth without risking emotional tilt.

\`\`\`
Pocket Option Cashflow Balance Sheet:
Total Deposited:  $735.00 (14 Transactions)
Total Withdrawn: -$416.15 (4 Transactions)
------------------------------------------
Net Equity In:    $318.85
\`\`\`

---

### Execution Plan for Pocket Option Trades
1. **Payout Safeguard:** Any session resulting in a +20% gain triggers an immediate $100 withdrawal request to lock in profits.
2. **OTC & News Rules:** Avoid 1-minute OTC volatility spikes; stick to 5-minute expiry market structure retests.
3. **Daily Loss Lockout:** 3 consecutive loss trades = immediate platform logoff.`
  },
  {
    id: "2026-07-22-discipline-and-pnl",
    title: "Daily Recap: Clean Execution on $BTC Breakout & PnL Disconnect",
    date: "2026-07-22",
    category: "Daily Recap",
    tickers: ["$BTC", "$ETH"],
    outcome: "Win",
    readTime: "3 min",
    excerpt: "Capturing a 1:2.8 R:R long on Bitcoin following a clean Asian session consolidation breakout. Reflecting on detachment from dollar amounts.",
    content: `# Daily Recap: Clean Execution on $BTC Breakout & PnL Disconnect

### Trade Metrics
* **Asset:** Bitcoin ($BTC / USD)
* **Direction:** Long
* **Risk/Reward:** 1 : 2.8 R:R
* **PnL Outcome:** +2.68% Account Growth (Win)
* **Session:** London Open (08:15 UTC)

---

### Trade Walkthrough

During the Asian session, $BTC established a tight 4-hour consolidation range between $64,200 and $64,800. Volume dropped significantly, building energy for an expansion move.

At London open:
1. **Sweep:** Price dipped down to $64,150, sweeping sell-side liquidity.
2. **Reversal:** A sharp 15-minute bullish engulfing candle closed back inside the range at $64,520.
3. **Entry:** Placed long limit at $64,480 on the minor retracement.
4. **Target:** $65,950 (Previous Daily High).

\`\`\`
Trade Flow:
[Sweep Liquidity @ $64,150] ---> [Engulfing Reversal @ $64,520] ---> [Target Hit @ $65,950]
Risk: $200 (Stop at $64,050) | Reward: $560
\`\`\`

The trade hit the target smoothly within 2 hours and 40 minutes.

---

### Psychological Note: Detaching from Money

Today I tried a new exercise suggested in *Trading in the Zone* by Mark Douglas: **Hiding the Open PnL Display** on the trading software.

Instead of staring at fluctuating dollar figures (which triggers fear and impulse to exit early), I only looked at **Price vs. Technical Levels**.

#### Results:
- Zero anxiety during minor pullbacks.
- Didn't feel tempted to move the take-profit closer.
- Executed the plan 100% mechanically.

> **Mindset Mantra:** Focus on flawless process execution. The profit curve is simply a trailing byproduct of discipline.`
  },
  {
    id: "2026-07-21-fomc-post-mortem",
    title: "Post-Mortem: Misjudging FOMC Volatility on $EURUSD",
    date: "2026-07-21",
    category: "Post-Mortem",
    tickers: ["$EURUSD"],
    outcome: "Loss",
    readTime: "5 min",
    excerpt: "A breakdown of taking an early short on EUR/USD ahead of rate commentary. Analyzing entry mistakes and emotional control under pressure.",
    content: `# Post-Mortem: Misjudging FOMC Volatility on $EURUSD

### Executive Summary
* **Ticker:** $EURUSD
* **Direction:** Short
* **Entry:** 1.08850 | **Stop Loss:** 1.09120 | **Take Profit:** 1.08200
* **Result:** Stopped Out (-$240 / -0.96% Risk)
* **Setup Confluence:** 4H Supply Zone + Bearish Divergence on RSI

---

### Trade Context & Setup
Ahead of the 14:00 EST FOMC Rate Decision, $EURUSD rallied into a key 4-hour resistance zone around 1.08850. The HTF trend had been consistently bearish, and I identified a liquidity pool resting above the previous daily high.

My thesis was that central bank guidance would remain hawkish, pushing the Euro lower towards 1.08200.

\`\`\`
4H Chart Structure:
1.09200 ----[ Liquidity Grab Target ]----
1.08850 ----[ My Short Entry ]----------- (STOPPED OUT HERE @ 1.09120)
1.08500 ----[ Fair Value Gap Support ]---
1.08200 ----[ Take Profit Target ]-------
\`\`\`

---

### What Went Wrong?

#### 1. Violating Pre-News Rules
Although my rule states *stay flat within 30 minutes of high-impact news*, I entered 12 minutes before the release. I fell into the trap of trying to "predict" the initial spike rather than waiting for post-news market structure confirmation.

#### 2. Spread Expansion & Whipsaw
The initial knee-jerk reaction pushed price UP 35 pips to 1.09180 (sweeping stops), before collapsing 90 pips straight down to 1.07950. 
Had I waited 15 minutes post-announcement, I could have caught the actual trend move downward with zero draw-down.

---

### Key Takeaways & Action Items

> **Lesson:** News events are designed to sweep liquidity on BOTH sides before revealing true direction. Never enter during the noise window.

1. **New Mandate:** Blackout window extended to 45 minutes pre/post FOMC and NFP releases.
2. **Order Type Shift:** Switch from Limit Orders to Stop-Limit or Confirmation Market Orders after price breaks structural pivots post-news.
3. **Psychology Grade: B-**. I accepted the loss cleanly without revenge trading, which is progress compared to last month.`
  },
  {
    id: "2026-07-20-day-1-trading-rules",
    title: "Day 1: Establishing Immutable Trading Rules & System Hygiene",
    date: "2026-07-20",
    category: "Strategy & Rules",
    tickers: ["$SPX", "$EURUSD"],
    outcome: "N/A",
    readTime: "4 min",
    excerpt: "Setting up the core framework for risk management, max daily loss limits, and execution discipline before placing another order.",
    content: `# Day 1: Establishing Immutable Trading Rules & System Hygiene

> "The goal of a successful trader is to make the best trades. Money is secondary." — Alexander Elder

Today marks the official beginning of documenting my trading journey publicly and transparently. For the past several months, my biggest stumbling block hasn't been market analysis—it has been **discipline execution**, **over-trading after a loss**, and **scaling size out of frustration**.

To eliminate emotional decisions, I am establishing five immutable trading rules that govern every single trade going forward.

---

### Rule 1: Fixed Risk Per Trade (1.0% Maximum)
No single trade will ever risk more than **1.0% of total equity**. 
* If account size is $25,000, max risk is **$250**.
* Stop-loss MUST be placed in the broker software BEFORE entry order submission.
* Moving a stop-loss wider after entry is an instant failure event and mandates shutting down trading for the day.

---

### Rule 2: Daily Max Drawdown Limit (-2.5%)
If cumulative net PnL reaches **-2.5%** in a single trading session:
1. All open positions must be market-closed immediately.
2. Cancel all pending orders.
3. Lock trading terminal for the remainder of the session.
4. Go for a 30-minute walk and complete a Post-Mortem entry.

---

### Rule 3: Quality Over Frequency (Max 3 Trades / Day)
Over-trading degrades edge. I will restrict myself to high-confluence setups matching my primary strategy:
- **Liquidity Sweep + Fair Value Gap (FVG) Retest** during London & NY Session Opens.
- Minimum Risk-to-Reward Ratio: **1:2.0**.

---

### Rule 4: Mandatory Pre-Trade Checklist
Before clicking \`BUY\` or \`SELL\`:
- [ ] Is high-impact news scheduled within 30 minutes? (If yes, stay flat).
- [ ] Is the stop-loss anchored to a structural swing high/low?
- [ ] Am I calm, focused, and free from revenge sentiment?

---

### Looking Ahead
Starting tomorrow, every execution will be logged here with entry reasons, chart context, and post-trade reflections. No exceptions.`
  }
];

class TradingJournalApp {
  constructor() {
    this.posts = [];
    this.poDeposits = [];
    this.poTradeHistory = [];
    this.currentPost = null;
    this.isAdminAuthenticated = false;
    this.pendingAdminAction = null;

    this.filters = {
      category: 'all',
      outcome: 'all',
      ticker: 'all',
      search: '',
      sort: 'newest'
    };

    this.init();
  }

  init() {
    this.loadPosts();
    this.loadPoDeposits();
    this.loadPoTradeHistory();
    this.loadPasscode();
    this.bindEvents();
    this.renderStats();
    this.renderPoStats();
    this.populateTickerDropdown();
    this.renderFeed();
    this.updateAdminStatusUI();
  }

  loadPasscode() {
    if (!localStorage.getItem('tape_admin_passcode')) {
      localStorage.setItem('tape_admin_passcode', 'trader123');
    }
  }

  getPasscode() {
    return localStorage.getItem('tape_admin_passcode') || 'trader123';
  }

  setPasscode(newCode) {
    localStorage.setItem('tape_admin_passcode', newCode);
  }

  loadPosts() {
    const stored = localStorage.getItem('tape_trading_posts');
    if (stored) {
      try {
        this.posts = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse local posts:', e);
        this.posts = DEFAULT_POSTS;
      }
    } else {
      this.posts = DEFAULT_POSTS;
      this.savePosts();
    }
  }

  savePosts() {
    localStorage.setItem('tape_trading_posts', JSON.stringify(this.posts));
    this.renderStats();
    this.populateTickerDropdown();
  }

  loadPoDeposits() {
    const stored = localStorage.getItem('tape_po_deposits');
    if (stored) {
      try {
        this.poDeposits = JSON.parse(stored);
      } catch (e) {
        this.poDeposits = DEFAULT_PO_DEPOSITS;
      }
    } else {
      this.poDeposits = DEFAULT_PO_DEPOSITS;
      this.savePoDeposits();
    }
  }

  savePoDeposits() {
    localStorage.setItem('tape_po_deposits', JSON.stringify(this.poDeposits));
    this.renderPoStats();
  }

  loadPoTradeHistory() {
    const stored = localStorage.getItem('tape_po_trade_history');
    if (stored) {
      try {
        this.poTradeHistory = JSON.parse(stored);
      } catch (e) {
        this.poTradeHistory = [];
      }
    }
  }

  savePoTradeHistory() {
    localStorage.setItem('tape_po_trade_history', JSON.stringify(this.poTradeHistory));
    this.renderPoTradeHistoryStats();
  }

  renderPoStats() {
    let totalDeposited = 0;
    let depositCount = 0;
    let totalWithdrawn = 0;
    let withdrawalCount = 0;

    this.poDeposits.forEach(item => {
      const numVal = parseFloat((item.amount || '$0').replace(/[^0-9.]/g, '')) || 0;
      if (item.type === 'Deposit' && item.status === 'Completed') {
        totalDeposited += numVal;
        depositCount++;
      } else if (item.type === 'Withdrawal' && item.status === 'Completed') {
        totalWithdrawn += numVal;
        withdrawalCount++;
      }
    });

    const netFunded = totalDeposited - totalWithdrawn;

    const pocketHeroStats = document.getElementById('pocketHeroStats');
    if (pocketHeroStats) {
      pocketHeroStats.innerHTML = `
        <div class="hero-stat-box"><span class="lbl">DEPOSITED</span><span class="val text-win">$${totalDeposited.toFixed(2)}</span></div>
        <div class="hero-stat-box"><span class="lbl">WITHDRAWN</span><span class="val text-loss">$${totalWithdrawn.toFixed(2)}</span></div>
        <div class="hero-stat-box"><span class="lbl">NET FUNDED</span><span class="val text-accent">$${netFunded.toFixed(2)}</span></div>
      `;
    }

    const elemDep = document.getElementById('poTotalDeposits');
    const elemDepCnt = document.getElementById('poDepositCount');
    const elemWith = document.getElementById('poTotalWithdrawals');
    const elemWithCnt = document.getElementById('poWithdrawalCount');
    const elemNet = document.getElementById('poNetFunded');

    if (elemDep) elemDep.textContent = `$${totalDeposited.toFixed(2)}`;
    if (elemDepCnt) elemDepCnt.textContent = `${depositCount} Completed`;
    if (elemWith) elemWith.textContent = `$${totalWithdrawn.toFixed(2)}`;
    if (elemWithCnt) elemWithCnt.textContent = `${withdrawalCount} Completed`;
    if (elemNet) elemNet.textContent = `$${netFunded.toFixed(2)}`;

    const tableBody = document.getElementById('poLedgerTableBody');
    if (tableBody) {
      tableBody.innerHTML = this.poDeposits.map(item => {
        const isDep = item.type === 'Deposit';
        const statusClass = item.status ? item.status.toLowerCase().split(' ')[0] : 'completed';

        return `
          <tr>
            <td style="color:var(--text-primary);">${item.date}</td>
            <td><strong style="color:${isDep ? 'var(--color-win)' : 'var(--color-loss)'}">${item.type}</strong></td>
            <td style="font-weight:600;">${item.amount}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
            <td style="color:var(--text-muted);">${item.method || 'Bank Transfer'}</td>
            <td style="color:var(--text-muted); font-size:0.75rem;">#${item.id}</td>
          </tr>
        `;
      }).join('');
    }

    this.renderPoTradeHistoryStats();
  }

  renderPoTradeHistoryStats() {
    const totalTrades = this.poTradeHistory.length;
    let wins = 0;
    let losses = 0;
    let calls = 0;
    let puts = 0;
    let totalVolume = 0;
    let netProfit = 0;

    this.poTradeHistory.forEach(t => {
      const stake = parseFloat(t.amount || 0) || 0;
      const profit = parseFloat(t.profit || 0) || 0;
      totalVolume += stake;
      netProfit += profit;

      if (profit > 0) wins++;
      else if (profit < 0) losses++;

      if ((t.direction || '').toLowerCase() === 'call') calls++;
      else if ((t.direction || '').toLowerCase() === 'put') puts++;
    });

    const winRate = (wins + losses) > 0 ? Math.round((wins / (wins + losses)) * 100) : 0;

    const elemTotalCount = document.getElementById('poTradeTotalCount');
    const elemWinsLosses = document.getElementById('poTradeWinsLosses');
    const elemWinRate = document.getElementById('poTradeWinRate');
    const elemCallPutRatio = document.getElementById('poTradeCallPutRatio');
    const elemTotalVolume = document.getElementById('poTradeTotalVolume');
    const elemNetProfit = document.getElementById('poTradeNetProfit');

    if (elemTotalCount) elemTotalCount.textContent = totalTrades.toLocaleString();
    if (elemWinsLosses) elemWinsLosses.textContent = `${wins}W / ${losses}L`;
    if (elemWinRate) elemWinRate.textContent = `${winRate}%`;
    if (elemCallPutRatio) elemCallPutRatio.textContent = `${calls} Calls / ${puts} Puts`;
    if (elemTotalVolume) elemTotalVolume.textContent = `$${totalVolume.toFixed(2)}`;
    if (elemNetProfit) {
      elemNetProfit.textContent = `${netProfit >= 0 ? '+' : ''}$${netProfit.toFixed(2)}`;
      elemNetProfit.style.color = netProfit >= 0 ? 'var(--color-win)' : 'var(--color-loss)';
    }

    const tableBody = document.getElementById('poTradeHistoryTableBody');
    if (tableBody) {
      if (totalTrades === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem; color:var(--text-muted);">No trade executions imported yet. Import export_history_*.csv file.</td></tr>`;
      } else {
        tableBody.innerHTML = this.poTradeHistory.slice(0, 100).map(t => {
          const isWin = parseFloat(t.profit) > 0;
          const isLoss = parseFloat(t.profit) < 0;

          return `
            <tr>
              <td style="color:var(--text-primary);">${t.closeTime || t.openTime}</td>
              <td style="font-weight:600; color:var(--accent-gold);">${t.asset}</td>
              <td><span style="color:${t.direction === 'call' ? 'var(--color-win)' : 'var(--color-loss)'}">${(t.direction || '').toUpperCase()}</span></td>
              <td style="color:var(--text-muted);">${t.expiration}</td>
              <td>${t.openPrice}</td>
              <td>${t.closePrice}</td>
              <td>$${t.amount}</td>
              <td style="font-weight:600; color:${isWin ? 'var(--color-win)' : isLoss ? 'var(--color-loss)' : 'var(--text-muted)'}">${t.profit >= 0 ? '+' : ''}$${t.profit}</td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  requireAdminAuth(onSuccessCallback) {
    if (this.isAdminAuthenticated) {
      onSuccessCallback();
    } else {
      this.pendingAdminAction = onSuccessCallback;
      this.openPasscodeModal();
    }
  }

  openPasscodeModal() {
    document.getElementById('passcodeModalOverlay').classList.remove('hidden');
    document.getElementById('passcodeInput').value = '';
    document.getElementById('passcodeError').classList.add('hidden');
    document.getElementById('passcodeInput').focus();
  }

  closePasscodeModal() {
    document.getElementById('passcodeModalOverlay').classList.add('hidden');
    document.getElementById('changePasscodeBox').classList.add('hidden');
    this.pendingAdminAction = null;
  }

  verifyPasscode(inputCode) {
    if (inputCode === this.getPasscode()) {
      this.isAdminAuthenticated = true;
      this.updateAdminStatusUI();
      this.closePasscodeModal();
      if (this.pendingAdminAction) {
        const action = this.pendingAdminAction;
        this.pendingAdminAction = null;
        action();
      }
      return true;
    } else {
      document.getElementById('passcodeError').classList.remove('hidden');
      return false;
    }
  }

  updateAdminStatusUI() {
    const lockBadge = document.getElementById('adminLockBadge');
    const securityBadge = document.getElementById('securityBadge');
    
    if (this.isAdminAuthenticated) {
      lockBadge.innerHTML = '🔓 Unlocked';
      lockBadge.style.color = 'var(--color-win)';
      securityBadge.innerHTML = 'AUTHOR MODE';
      securityBadge.style.color = 'var(--color-win)';
      document.body.classList.add('admin-unlocked');
    } else {
      lockBadge.innerHTML = '🔒 Locked';
      lockBadge.style.color = 'var(--text-muted)';
      securityBadge.innerHTML = 'SYNCED';
      securityBadge.style.color = 'var(--accent-gold)';
      document.body.classList.remove('admin-unlocked');
    }
  }

  bindEvents() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.filters.search = e.target.value.toLowerCase().trim();
      this.renderFeed();
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    document.getElementById('btnPocketOptionLedger').addEventListener('click', () => {
      document.getElementById('pocketLedgerModalOverlay').classList.remove('hidden');
    });
    document.getElementById('btnClosePocketLedger').addEventListener('click', () => {
      document.getElementById('pocketLedgerModalOverlay').classList.add('hidden');
    });

    const btnTabCashflow = document.getElementById('btnTabCashflow');
    const btnTabTradeHistory = document.getElementById('btnTabTradeHistory');
    const poTabCashflowContent = document.getElementById('poTabCashflowContent');
    const poTabTradeHistoryContent = document.getElementById('poTabTradeHistoryContent');

    btnTabCashflow.addEventListener('click', () => {
      btnTabCashflow.classList.add('active');
      btnTabTradeHistory.classList.remove('active');
      poTabCashflowContent.classList.remove('hidden');
      poTabTradeHistoryContent.classList.add('hidden');
    });

    btnTabTradeHistory.addEventListener('click', () => {
      btnTabTradeHistory.classList.add('active');
      btnTabCashflow.classList.remove('active');
      poTabTradeHistoryContent.classList.remove('hidden');
      poTabCashflowContent.classList.add('hidden');
    });

    document.getElementById('importPoCsvInput').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const lines = text.split(/\r?\n/).filter(Boolean);
        if (lines.length <= 1) return;

        const parsed = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',');
          if (cols.length >= 6) {
            parsed.push({
              id: cols[0].trim(),
              date: cols[1].trim(),
              amount: cols[2].trim(),
              method: cols[3].trim(),
              type: cols[4].trim(),
              status: cols[5].trim(),
              bonus: cols[6] ? cols[6].trim() : '$0'
            });
          }
        }

        if (parsed.length > 0) {
          this.poDeposits = parsed;
          this.savePoDeposits();
          alert(`Successfully imported ${parsed.length} Pocket Option cashflow records!`);
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('importPoTradeHistoryInput').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const lines = text.split(/\r?\n/).filter(Boolean);
        if (lines.length <= 1) return;

        const parsed = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',');
          if (cols.length >= 10) {
            parsed.push({
              direction: cols[0].trim(),
              order: cols[1].trim(),
              expiration: cols[2].trim(),
              asset: cols[3].trim(),
              openTime: cols[4].trim(),
              closeTime: cols[5].trim(),
              openPrice: cols[6].trim(),
              closePrice: cols[7].trim(),
              amount: cols[8].trim(),
              profit: cols[9].trim(),
              currency: cols[10] ? cols[10].trim() : 'USD'
            });
          }
        }

        if (parsed.length > 0) {
          this.poTradeHistory = parsed;
          this.savePoTradeHistory();
          alert(`Successfully imported ${parsed.length.toLocaleString()} Pocket Option trade executions!`);
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('brandHomeLink').addEventListener('click', (e) => {
      e.preventDefault();
      this.resetFilters();
    });

    document.getElementById('btnAdminAuth').addEventListener('click', () => {
      if (this.isAdminAuthenticated) {
        this.isAdminAuthenticated = false;
        this.updateAdminStatusUI();
      } else {
        this.requireAdminAuth(() => {});
      }
    });

    document.getElementById('passcodeForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('passcodeInput').value;
      this.verifyPasscode(input);
    });

    document.getElementById('btnClosePasscode').addEventListener('click', () => {
      this.closePasscodeModal();
    });

    document.getElementById('btnOpenChangePasscode').addEventListener('click', () => {
      this.requireAdminAuth(() => {
        document.getElementById('changePasscodeBox').classList.toggle('hidden');
      });
    });

    document.getElementById('btnSaveNewPasscode').addEventListener('click', () => {
      const newCode = document.getElementById('newPasscodeInput').value.trim();
      if (newCode.length < 4) {
        alert('Passcode must be at least 4 characters long.');
        return;
      }
      this.setPasscode(newCode);
      alert('Master passcode updated successfully!');
      document.getElementById('newPasscodeInput').value = '';
      document.getElementById('changePasscodeBox').classList.add('hidden');
    });

    const pills = document.querySelectorAll('#categoryPills .pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.filters.category = pill.dataset.category;
        this.renderFeed();
      });
    });

    document.getElementById('outcomeFilter').addEventListener('change', (e) => {
      this.filters.outcome = e.target.value;
      this.renderFeed();
    });

    document.getElementById('tickerFilter').addEventListener('change', (e) => {
      this.filters.ticker = e.target.value;
      this.renderFeed();
    });

    document.getElementById('sortOrder').addEventListener('change', (e) => {
      this.filters.sort = e.target.value;
      this.renderFeed();
    });

    document.getElementById('btnResetFilters').addEventListener('click', () => {
      this.resetFilters();
    });

    document.getElementById('btnCloseReader').addEventListener('click', () => {
      this.closeReader();
    });
    document.getElementById('btnCopyMarkdown').addEventListener('click', () => {
      this.copyCurrentMarkdown();
    });
    document.getElementById('btnDownloadMd').addEventListener('click', () => {
      this.downloadCurrentMarkdown();
    });

    document.getElementById('btnEditEntry').addEventListener('click', () => {
      if (this.currentPost) {
        this.requireAdminAuth(() => {
          this.closeReader();
          this.openEditor(this.currentPost);
        });
      }
    });

    document.getElementById('btnDeleteEntry').addEventListener('click', () => {
      if (this.currentPost) {
        this.requireAdminAuth(() => {
          if (confirm(`Are you sure you want to delete "${this.currentPost.title}"?`)) {
            this.posts = this.posts.filter(p => p.id !== this.currentPost.id);
            this.savePosts();
            this.closeReader();
            this.renderFeed();
          }
        });
      }
    });

    const readerDrawer = document.getElementById('readerDrawer');
    readerDrawer.addEventListener('scroll', () => {
      const scrollTop = readerDrawer.scrollTop;
      const scrollHeight = readerDrawer.scrollHeight - readerDrawer.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      document.getElementById('readerProgressBar').style.width = `${Math.min(100, Math.max(0, progress))}%`;
    });

    document.getElementById('btnOpenEditor').addEventListener('click', () => {
      this.requireAdminAuth(() => {
        this.openEditor();
      });
    });

    document.getElementById('btnCloseEditor').addEventListener('click', () => {
      this.closeEditor();
    });
    document.getElementById('btnCancelEditor').addEventListener('click', () => {
      this.closeEditor();
    });

    const btnEditTab = document.getElementById('btnEditTab');
    const btnPreviewTab = document.getElementById('btnPreviewTab');
    const postContent = document.getElementById('postContent');
    const editorPreview = document.getElementById('editorPreview');

    btnEditTab.addEventListener('click', () => {
      btnEditTab.classList.add('active');
      btnPreviewTab.classList.remove('active');
      postContent.classList.remove('hidden');
      editorPreview.classList.add('hidden');
    });

    btnPreviewTab.addEventListener('click', () => {
      btnPreviewTab.classList.add('active');
      btnEditTab.classList.remove('active');
      postContent.classList.add('hidden');
      editorPreview.classList.remove('hidden');
      editorPreview.innerHTML = this.renderMarkdown(postContent.value);
    });

    document.getElementById('editorToolbar').addEventListener('click', (e) => {
      const btn = e.target.closest('.tb-btn');
      if (!btn) return;
      this.insertSyntax(btn.dataset.syntax);
    });

    document.getElementById('editorForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.savePostForm();
    });

    document.getElementById('btnSettings').addEventListener('click', () => {
      this.requireAdminAuth(() => {
        document.getElementById('settingsModalOverlay').classList.remove('hidden');
      });
    });

    document.getElementById('btnCloseSettings').addEventListener('click', () => {
      document.getElementById('settingsModalOverlay').classList.add('hidden');
    });

    document.getElementById('btnExportJSON').addEventListener('click', () => {
      this.exportJSON();
    });

    document.getElementById('importJsonInput').addEventListener('change', (e) => {
      this.importJSON(e);
    });

    document.getElementById('btnResetSeed').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset to demo seed posts? Custom local entries will be overwritten.')) {
        this.posts = DEFAULT_POSTS;
        this.poDeposits = DEFAULT_PO_DEPOSITS;
        this.poTradeHistory = [];
        this.savePosts();
        this.savePoDeposits();
        this.savePoTradeHistory();
        this.renderFeed();
        document.getElementById('settingsModalOverlay').classList.add('hidden');
      }
    });
  }

  resetFilters() {
    this.filters = { category: 'all', outcome: 'all', ticker: 'all', search: '', sort: 'newest' };
    document.getElementById('searchInput').value = '';
    document.getElementById('outcomeFilter').value = 'all';
    document.getElementById('tickerFilter').value = 'all';
    document.getElementById('sortOrder').value = 'newest';
    
    const pills = document.querySelectorAll('#categoryPills .pill');
    pills.forEach(p => p.classList.remove('active'));
    pills[0].classList.add('active');

    this.renderFeed();
  }

  populateTickerDropdown() {
    const tickerSelect = document.getElementById('tickerFilter');
    const allTickers = new Set();

    this.posts.forEach(post => {
      if (post.tickers && Array.isArray(post.tickers)) {
        post.tickers.forEach(t => allTickers.add(t));
      }
    });

    tickerSelect.innerHTML = '<option value="all">All Tickers</option>';
    Array.from(allTickers).sort().forEach(ticker => {
      const opt = document.createElement('option');
      opt.value = ticker;
      opt.textContent = ticker;
      if (this.filters.ticker === ticker) opt.selected = true;
      tickerSelect.appendChild(opt);
    });
  }

  renderStats() {
    const totalPosts = this.posts.length;
    const wins = this.posts.filter(p => p.outcome === 'Win').length;
    const losses = this.posts.filter(p => p.outcome === 'Loss').length;
    const totalTraded = wins + losses;
    const winRate = totalTraded > 0 ? Math.round((wins / totalTraded) * 100) : 0;

    let totalWords = 0;
    this.posts.forEach(p => {
      if (p.content) totalWords += p.content.split(/\s+/).filter(Boolean).length;
    });

    const topStatsBar = document.getElementById('topStatsBar');
    topStatsBar.innerHTML = `
      <div class="stat-item"><span class="text-muted">ENTRIES:</span> <span class="stat-value">${totalPosts}</span></div>
      <div class="stat-item"><span class="text-muted">WIN RATE:</span> <span class="stat-value" style="color:${winRate >= 50 ? 'var(--color-win)' : 'var(--accent-gold)'}">${winRate}% (${wins}W/${losses}L)</span></div>
      <div class="stat-item"><span class="text-muted">WORDS LOGGED:</span> <span class="stat-value">${totalWords.toLocaleString()}</span></div>
    `;
  }

  getFilteredPosts() {
    return this.posts.filter(post => {
      if (this.filters.category !== 'all' && post.category !== this.filters.category) return false;
      if (this.filters.outcome !== 'all' && post.outcome !== this.filters.outcome) return false;
      if (this.filters.ticker !== 'all') {
        if (!post.tickers || !post.tickers.includes(this.filters.ticker)) return false;
      }
      if (this.filters.search) {
        const query = this.filters.search;
        const inTitle = post.title.toLowerCase().includes(query);
        const inExcerpt = post.excerpt ? post.excerpt.toLowerCase().includes(query) : false;
        const inContent = post.content ? post.content.toLowerCase().includes(query) : false;
        const inTickers = post.tickers ? post.tickers.some(t => t.toLowerCase().includes(query)) : false;
        if (!inTitle && !inExcerpt && !inContent && !inTickers) return false;
      }
      return true;
    }).sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return this.filters.sort === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }

  renderFeed() {
    const postsFeed = document.getElementById('postsFeed');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');
    const filtered = this.getFilteredPosts();

    resultsCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'}`;

    if (filtered.length === 0) {
      postsFeed.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    postsFeed.innerHTML = filtered.map(post => {
      const outcomeClass = post.outcome ? post.outcome.toLowerCase().replace(/[^a-z]/g, '') : 'na';
      const tickersHtml = (post.tickers || []).map(t => `<span class="ticker-tag">${t}</span>`).join('');
      const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : 0;
      const readTimeCalculated = post.readTime || `${Math.max(1, Math.ceil(wordCount / 200))} min`;

      return `
        <article class="post-card" data-id="${post.id}">
          <div class="card-top-meta">
            <div class="meta-badges">
              <span class="badge-category">${post.category}</span>
              <span class="badge-outcome ${outcomeClass}">${post.outcome || 'N/A'}</span>
            </div>
            <span class="post-date-read">${post.date} &bull; ${readTimeCalculated} read</span>
          </div>

          <h3 class="post-card-title">${post.title}</h3>
          <p class="post-card-excerpt">${post.excerpt || post.content.slice(0, 140) + '...'}</p>

          <div class="card-bottom-bar">
            <div class="tickers-list">${tickersHtml}</div>
            <span class="read-more-link">
              Read Journal Entry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12" 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll('.post-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const post = this.posts.find(p => p.id === id);
        if (post) this.openReader(post);
      });
    });
  }

  openReader(post) {
    this.currentPost = post;
    const readerOverlay = document.getElementById('readerModalOverlay');
    const readerMetaHeader = document.getElementById('readerMetaHeader');
    const readerArticleContent = document.getElementById('readerArticleContent');
    const readerFooterTags = document.getElementById('readerFooterTags');
    const readerDrawer = document.getElementById('readerDrawer');

    const outcomeClass = post.outcome ? post.outcome.toLowerCase().replace(/[^a-z]/g, '') : 'na';
    const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : 0;
    const readTimeCalculated = post.readTime || `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    readerMetaHeader.innerHTML = `
      <div class="meta-badges" style="margin-bottom: 0.5rem;">
        <span class="badge-category">${post.category}</span>
        <span class="badge-outcome ${outcomeClass}">${post.outcome || 'N/A'}</span>
      </div>
      <h1 class="reader-post-title">${post.title}</h1>
      <div class="reader-meta-row">
        <span>LOGGED: ${post.date}</span>
        <span>&bull;</span>
        <span>${readTimeCalculated}</span>
        <span>&bull;</span>
        <span>${wordCount} WORDS</span>
      </div>
    `;

    readerArticleContent.innerHTML = this.renderMarkdown(post.content);

    readerFooterTags.innerHTML = (post.tickers || []).map(t => `
      <span class="ticker-tag" style="font-size:0.85rem; padding: 0.25rem 0.65rem;">${t}</span>
    `).join(' ');

    readerOverlay.classList.remove('hidden');
    readerDrawer.scrollTop = 0;
    document.getElementById('readerProgressBar').style.width = '0%';
  }

  closeReader() {
    document.getElementById('readerModalOverlay').classList.add('hidden');
    this.currentPost = null;
  }

  copyCurrentMarkdown() {
    if (!this.currentPost) return;
    navigator.clipboard.writeText(this.currentPost.content).then(() => {
      const btn = document.getElementById('btnCopyMarkdown');
      const originalText = btn.innerHTML;
      btn.innerHTML = `✓ Copied!`;
      setTimeout(() => { btn.innerHTML = originalText; }, 2000);
    });
  }

  downloadCurrentMarkdown() {
    if (!this.currentPost) return;
    const blob = new Blob([this.currentPost.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.currentPost.id || 'journal-entry'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  openEditor(post = null) {
    const modal = document.getElementById('editorModalOverlay');
    const modalTitle = document.getElementById('editorModalTitle');
    const editingPostId = document.getElementById('editingPostId');

    const inputTitle = document.getElementById('postTitle');
    const inputCategory = document.getElementById('postCategory');
    const inputOutcome = document.getElementById('postOutcome');
    const inputTickers = document.getElementById('postTickers');
    const inputDate = document.getElementById('postDate');
    const inputExcerpt = document.getElementById('postExcerpt');
    const inputContent = document.getElementById('postContent');

    if (post) {
      modalTitle.textContent = 'Edit Journal Entry';
      editingPostId.value = post.id;
      inputTitle.value = post.title;
      inputCategory.value = post.category;
      inputOutcome.value = post.outcome || 'N/A';
      inputTickers.value = (post.tickers || []).join(', ');
      inputDate.value = post.date;
      inputExcerpt.value = post.excerpt || '';
      inputContent.value = post.content || '';
    } else {
      modalTitle.textContent = 'Create Daily Post';
      editingPostId.value = '';
      inputTitle.value = '';
      inputCategory.value = 'Daily Recap';
      inputOutcome.value = 'N/A';
      inputTickers.value = '';
      inputDate.value = new Date().toISOString().split('T')[0];
      inputExcerpt.value = '';
      inputContent.value = '';
    }

    document.getElementById('btnEditTab').click();
    modal.classList.remove('hidden');
  }

  closeEditor() {
    document.getElementById('editorModalOverlay').classList.add('hidden');
  }

  savePostForm() {
    const editingId = document.getElementById('editingPostId').value;
    const title = document.getElementById('postTitle').value.trim();
    const category = document.getElementById('postCategory').value;
    const outcome = document.getElementById('postOutcome').value;
    const tickersRaw = document.getElementById('postTickers').value;
    const date = document.getElementById('postDate').value;
    const excerpt = document.getElementById('postExcerpt').value.trim();
    const content = document.getElementById('postContent').value.trim();

    if (!title || !content || !date) {
      alert('Please complete all required fields.');
      return;
    }

    const tickers = tickersRaw.split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .map(t => t.startsWith('$') ? t : `$${t.toUpperCase()}`);

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min`;

    if (editingId) {
      const index = this.posts.findIndex(p => p.id === editingId);
      if (index !== -1) {
        this.posts[index] = {
          ...this.posts[index],
          title, category, outcome, tickers, date, excerpt, content, readTime
        };
      }
    } else {
      const newId = `${date}-${title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}`;
      const newPost = {
        id: newId,
        title, category, outcome, tickers, date, excerpt, content, readTime
      };
      this.posts.unshift(newPost);
    }

    this.savePosts();
    this.renderFeed();
    this.closeEditor();
  }

  insertSyntax(syntax) {
    const textarea = document.getElementById('postContent');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);

    let replacement = '';

    switch (syntax) {
      case 'h2': replacement = `\n## ${selection || 'Heading 2'}\n`; break;
      case 'h3': replacement = `\n### ${selection || 'Heading 3'}\n`; break;
      case 'bold': replacement = `**${selection || 'bold text'}**`; break;
      case 'italic': replacement = `*${selection || 'italic text'}*`; break;
      case 'quote': replacement = `\n> "${selection || 'Insert trading quote or rule'}"\n`; break;
      case 'checklist': replacement = `\n- [ ] ${selection || 'Checklist item 1'}\n- [ ] Checklist item 2\n`; break;
      case 'code': replacement = `\n\`\`\`\n${selection || '// Chart levels / Execution log\nEntry: 1.0850 | SL: 1.0820 | TP: 1.0920'}\n\`\`\`\n`; break;
      case 'table': replacement = `\n| Metric | Level | Notes |\n|---|---|---|\n| Entry | 1.08500 | Limit order |\n| Stop Loss | 1.08200 | Swing low |\n| Take Profit | 1.09200 | Liquidity target |\n`; break;
    }

    textarea.value = text.substring(0, start) + replacement + text.substring(end);
    textarea.focus();
  }

  exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.posts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `trading-journal-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          this.posts = imported;
          this.savePosts();
          this.renderFeed();
          alert(`Successfully imported ${imported.length} journal posts!`);
          document.getElementById('settingsModalOverlay').classList.add('hidden');
        } else {
          alert('Invalid backup file format.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  }

  closeAllModals() {
    this.closeReader();
    this.closeEditor();
    this.closePasscodeModal();
    document.getElementById('pocketLedgerModalOverlay').classList.add('hidden');
    document.getElementById('settingsModalOverlay').classList.add('hidden');
  }

  renderMarkdown(md) {
    if (!md) return '';

    let html = md
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(/```([\s\S]*?)```/g, function(match, p1) {
      return `<pre><code>${p1.trim()}</code></pre>`;
    });

    // Tables parsing
    html = html.replace(/^\|(.+)\|$/gim, function(match) {
      const cells = match.split('|').filter(c => c.trim() !== '');
      if (cells.every(c => c.includes('---'))) return '';
      const isHeader = match.includes('---');
      const cellTag = isHeader ? 'th' : 'td';
      const row = cells.map(c => `<${cellTag}>${c.trim()}</${cellTag}>`).join('');
      return `<tr>${row}</tr>`;
    });
    html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<div class="table-wrapper"><table class="ledger-table">$&</table></div>');

    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    html = html.replace(/^---$/gim, '<hr>');

    html = html.replace(/^&gt;\s?(.*$)/gim, '<blockquote>$1</blockquote>');

    html = html.replace(/^- \[ \] (.*$)/gim, '<li style="list-style:none;">🏽 $1</li>');
    html = html.replace(/^- \[x\] (.*$)/gim, '<li style="list-style:none;">✅ $1</li>');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    html = html.replace(/(\$[A-Z0-9]+)/g, '<span class="ticker-tag">$1</span>');

    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');

    const blocks = html.split(/\n\n+/);
    return blocks.map(block => {
      const trimmed = block.trim();
      if (trimmed.startsWith('<h') || trimmed.startsWith('<pre') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<hr') || trimmed.startsWith('<li') || trimmed.startsWith('<div class="table-wrapper"')) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new TradingJournalApp();
});
