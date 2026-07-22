# The Tape — Pure Text Trading Journal & Blog

A minimalist, high-typography, dark-mode focused Trading Journal & Blog web application for documenting daily trading thoughts, market recaps, risk management rules, and trade post-mortems.

---

## Features

- ✍️ **Dual Post Publishing Workflows**:
  1. **Built-in Web Editor**: Click **"+ New Entry"** to write, preview, and publish posts directly from your browser.
  2. **File-based Markdown (`posts/`)**: Add `.md` files to the `posts/` folder and push to GitHub for automatic deployment.
- 🎯 **Trading Metadata & Filtering**:
  - Filter posts by category (*Daily Recap*, *Post-Mortem*, *Strategy & Rules*, *Psychology*, *Market Outlook*).
  - Filter by trade tickers (`$EURUSD`, `$BTC`, `$SPX`, `$GOLD`).
  - Filter by outcome (*Win*, *Loss*, *Break-Even*, *N/A*).
- 📰 **Editorial Reading Experience**:
  - High-legibility Newsreader & Inter typography.
  - Reader drawer modal with reading progress indicator bar.
  - Word count & estimated read time.
  - One-click copy post Markdown or download `.md` file.
- 💾 **Data Persistence & Backups**:
  - Auto-saves browser entries in `localStorage`.
  - Full JSON backup export & import capability.
- 🚀 **100% Vercel Ready**: Free zero-config deployment.

---

## 🚀 How to Deploy to Vercel

### Method 1: Deploying via Vercel CLI (Fastest — 1 Minute)

1. Open PowerShell or Terminal in the project directory:
   ```bash
   cd C:\Users\hp\.gemini\antigravity\scratch\trading-journey-blog
   ```
2. Run the Vercel deployment command:
   ```bash
   npx vercel
   ```
3. Follow the quick on-screen prompts (accept default settings).
4. Vercel will output your live URL (e.g. `https://trading-journey-blog.vercel.app`)!

---

### Method 2: Deploying via GitHub + Vercel (Auto-Deploys on New Markdown Files)

1. Initialize git and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Trading blog"
   git remote add origin https://github.com/YOUR_USERNAME/trading-journey-blog.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `trading-journey-blog` repository from GitHub.
4. Click **Deploy**. Vercel will host your site automatically!

> 💡 **Pro-Tip**: Every time you commit a new Markdown post to `posts/` and push to GitHub, Vercel will automatically publish your new post live in 30 seconds!

---

## ✍️ How to Add Daily Posts

### Option A: Using the Live Web App
1. Open your live blog.
2. Click **"+ New Entry"** in the header.
3. Fill in your post title, select category and trade outcome.
4. Write your post in Markdown format.
5. Click **Publish Entry**. Your post appears instantly on the feed!

### Option B: Writing `.md` Files in `posts/`
Create a file inside `posts/` (e.g., `posts/2026-07-23-gold-scalp.md`) with frontmatter metadata:

```markdown
---
title: Daily Recap: High-Probability Scalp on $GOLD
date: 2026-07-23
category: Daily Recap
tickers: $GOLD
outcome: Win
readTime: 3 min
excerpt: Brief summary of entry and exit points.
---

# Your Heading

Write your trading log here...
```

---

## Project Structure

```
trading-journey-blog/
├── index.html          # Main application structure & modals
├── styles.css          # Dark-mode editorial design system & typography
├── app.js              # State engine, search, filters & markdown renderer
├── vercel.json         # Vercel deployment configuration
├── README.md           # Documentation & deployment guide
└── posts/              # Markdown trading journal posts
    ├── posts.json
    ├── 2026-07-20-day-1-trading-rules.md
    ├── 2026-07-21-fomc-post-mortem.md
    └── 2026-07-22-discipline-and-pnl.md
```
