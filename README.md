# The Tape — Pure Text Trading Journal

A minimalist, high-typography, passcode-protected Trading Journal & Blog web application for documenting daily trading thoughts, market recaps, risk management rules, and trade post-mortems.

---

## 🔒 Security & Passcode Protection

The journal features **Master Passcode Authentication**:
- Visitors can freely read, search, filter, copy, and download journal posts.
- **Posting & Editing are Protected**: Anyone clicking **"+ New Entry"**, **"Edit Entry"**, **"Delete"**, or modifying backup settings MUST enter your **Admin Passcode**.
- **Default Master Passcode**: `trader123` (Can be updated anytime inside the Security Settings modal).

---

## ✍️ How to Add Daily Posts

### Option A: Using the In-Browser Studio (Passcode Protected)
1. Open your blog.
2. Click **"+ New Entry"** (or click **🔒 Locked** in the top navigation).
3. Enter your Passcode (`trader123`).
4. Fill in title, select category (*Daily Recap*, *Post-Mortem*, *Strategy & Rules*, *Psychology*), trade outcome, and tickers (`$EURUSD`, `$BTC`).
5. Write your post in Markdown with live preview and click **Publish Entry**.

---

### Option B: Adding `.md` Files to GitHub
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

Push to GitHub:
```bash
git add .
git commit -m "Add post for 2026-07-23"
git push origin main
```

---

## 📁 Project Structure

```
trading-journey-blog/
├── index.html          # Main application layout & passcode modal
├── styles.css          # Dark-mode editorial design system & typography
├── app.js              # State engine, passcode authentication & renderer
├── README.md           # Documentation & passcode guide
└── posts/              # Markdown trading journal posts
    ├── posts.json
    ├── 2026-07-20-day-1-trading-rules.md
    ├── 2026-07-21-fomc-post-mortem.md
    └── 2026-07-22-discipline-and-pnl.md
```
