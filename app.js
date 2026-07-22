/**
 * THE TAPE — Trading Journal & Blog Application Logic
 */

// Initial Seed Dataset (used if localStorage is empty)
const DEFAULT_POSTS = [
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

// App State Management
class TradingJournalApp {
  constructor() {
    this.posts = [];
    this.currentPost = null;
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
    this.bindEvents();
    this.renderStats();
    this.populateTickerDropdown();
    this.renderFeed();
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

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.filters.search = e.target.value.toLowerCase().trim();
      this.renderFeed();
    });

    // Search shortcut ⌘K or Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // Brand click home reset
    document.getElementById('brandHomeLink').addEventListener('click', (e) => {
      e.preventDefault();
      this.resetFilters();
    });

    // Category Pills
    const pills = document.querySelectorAll('#categoryPills .pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.filters.category = pill.dataset.category;
        this.renderFeed();
      });
    });

    // Outcome Filter
    document.getElementById('outcomeFilter').addEventListener('change', (e) => {
      this.filters.outcome = e.target.value;
      this.renderFeed();
    });

    // Ticker Filter
    document.getElementById('tickerFilter').addEventListener('change', (e) => {
      this.filters.ticker = e.target.value;
      this.renderFeed();
    });

    // Sort Order
    document.getElementById('sortOrder').addEventListener('change', (e) => {
      this.filters.sort = e.target.value;
      this.renderFeed();
    });

    // Reset Filters Button
    document.getElementById('btnResetFilters').addEventListener('click', () => {
      this.resetFilters();
    });

    // Reader Modal controls
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
        this.closeReader();
        this.openEditor(this.currentPost);
      }
    });

    // Reader Scroll Progress
    const readerDrawer = document.getElementById('readerDrawer');
    readerDrawer.addEventListener('scroll', () => {
      const scrollTop = readerDrawer.scrollTop;
      const scrollHeight = readerDrawer.scrollHeight - readerDrawer.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      document.getElementById('readerProgressBar').style.width = `${Math.min(100, Math.max(0, progress))}%`;
    });

    // Editor Modal controls
    document.getElementById('btnOpenEditor').addEventListener('click', () => {
      this.openEditor();
    });
    document.getElementById('btnCloseEditor').addEventListener('click', () => {
      this.closeEditor();
    });
    document.getElementById('btnCancelEditor').addEventListener('click', () => {
      this.closeEditor();
    });

    // Editor Tab Toggle (Edit vs Preview)
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

    // Editor Toolbar Buttons
    const toolbar = document.getElementById('editorToolbar');
    toolbar.addEventListener('click', (e) => {
      const btn = e.target.closest('.tb-btn');
      if (!btn) return;
      this.insertSyntax(btn.dataset.syntax);
    });

    // Save Form Submission
    document.getElementById('editorForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.savePostForm();
    });

    // Settings / Backup Modal
    document.getElementById('btnSettings').addEventListener('click', () => {
      document.getElementById('settingsModalOverlay').classList.remove('hidden');
    });
    document.getElementById('btnCloseSettings').addEventListener('click', () => {
      document.getElementById('settingsModalOverlay').classList.add('hidden');
    });

    // Export JSON
    document.getElementById('btnExportJSON').addEventListener('click', () => {
      this.exportJSON();
    });

    // Import JSON
    const importInput = document.getElementById('importJsonInput');
    importInput.addEventListener('change', (e) => {
      this.importJSON(e);
    });

    // Reset Seed
    document.getElementById('btnResetSeed').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset to demo seed posts? Custom local entries will be overwritten.')) {
        this.posts = DEFAULT_POSTS;
        this.savePosts();
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
      // Category Filter
      if (this.filters.category !== 'all' && post.category !== this.filters.category) {
        return false;
      }
      // Outcome Filter
      if (this.filters.outcome !== 'all' && post.outcome !== this.filters.outcome) {
        return false;
      }
      // Ticker Filter
      if (this.filters.ticker !== 'all') {
        if (!post.tickers || !post.tickers.includes(this.filters.ticker)) {
          return false;
        }
      }
      // Search Query
      if (this.filters.search) {
        const query = this.filters.search;
        const inTitle = post.title.toLowerCase().includes(query);
        const inExcerpt = post.excerpt ? post.excerpt.toLowerCase().includes(query) : false;
        const inContent = post.content ? post.content.toLowerCase().includes(query) : false;
        const inTickers = post.tickers ? post.tickers.some(t => t.toLowerCase().includes(query)) : false;
        if (!inTitle && !inExcerpt && !inContent && !inTickers) {
          return false;
        }
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
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers
    document.querySelectorAll('.post-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const post = this.posts.find(p => p.id === id);
        if (post) this.openReader(post);
      });
    });
  }

  // Open Article Reader
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

  // Open Editor Modal (Create or Edit)
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

    // Reset tabs
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
      // Update existing post
      const index = this.posts.findIndex(p => p.id === editingId);
      if (index !== -1) {
        this.posts[index] = {
          ...this.posts[index],
          title, category, outcome, tickers, date, excerpt, content, readTime
        };
      }
    } else {
      // Create new post
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
    document.getElementById('settingsModalOverlay').classList.add('hidden');
  }

  // Lightweight Markdown Renderer for pure text posts
  renderMarkdown(md) {
    if (!md) return '';

    let html = md
      // Escaping HTML characters
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Code blocks ```...```
    html = html.replace(/```([\s\S]*?)```/g, function(match, p1) {
      return `<pre><code>${p1.trim()}</code></pre>`;
    });

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');

    // Blockquotes
    html = html.replace(/^&gt;\s?(.*$)/gim, '<blockquote>$1</blockquote>');

    // Checklists - [ ] and - [x]
    html = html.replace(/^- \[ \] (.*$)/gim, '<li style="list-style:none;">🏽 $1</li>');
    html = html.replace(/^- \[x\] (.*$)/gim, '<li style="list-style:none;">✅ $1</li>');

    // Bold and Italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Inline Code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Dollar Tickers e.g. $EURUSD, $BTC
    html = html.replace(/(\$[A-Z0-9]+)/g, '<span class="ticker-tag">$1</span>');

    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');

    // Paragraph wrapping (split by double line breaks)
    const blocks = html.split(/\n\n+/);
    return blocks.map(block => {
      const trimmed = block.trim();
      if (trimmed.startsWith('<h') || trimmed.startsWith('<pre') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<hr') || trimmed.startsWith('<li')) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');
  }
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TradingJournalApp();
});
