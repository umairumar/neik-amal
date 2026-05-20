# نیک عمل · Neik-Amal

> *"The best of people are those most beneficial to others."* — Prophet Muhammad ﷺ

**Neik-Amal** (Urdu: نیک عمل — "Pious Deeds") is a beautiful, open-source Islamic daily tracker that helps Muslims stay consistent with their spiritual routines. Think of it as the **iOS Fitness app** — but for your soul.

---

## ✨ Live Demo

🔗 **[Try it now → umairumar.github.io/neik-amal](https://umairumar.github.io/neik-amal)**

No install. No login. No data leaves your device.

---

## 📸 Screenshots

| Home | Daily Tasks | Awards |
|------|-------------|--------|
| Activity rings, streak, quote | 56 grouped tasks with search | 12 unlockable badges |

---

## 🌟 Features

- **🔵 iOS-style Activity Rings** — Daily, Weekly & Monthly progress at a glance
- **📋 56 Daily Deeds** — Grouped into Salah, Quran, Dhikr, Character, Sunnah, Dawah & more
- **🔥 Streak Tracker** — Keeps you motivated day after day
- **🏆 12 Unlockable Badges** — Week Warrior, Month Master, Year of Piety and more
- **⭐ Star Rating** — 1–5 stars based on your daily completion
- **🔍 Search & Filter** — Find any deed instantly by group
- **🌙 Dark / Light Theme** — Gorgeous in both
- **🔔 Per-task Notifications** — Toggle reminders individually
- **💾 Offline-first** — Everything stored in `localStorage`, no server needed
- **📱 Mobile-first** — Feels like a native app on your phone

---

## 🛠️ Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| UI | React 18 (CDN, no build step) | Zero setup, runs anywhere |
| Styling | Pure CSS with design tokens | No Tailwind, no bloat |
| State | `useState` + `localStorage` | Simple, offline-first |
| Deploy | GitHub Pages | Free, instant |

> **The entire app is a single `index.html` file.** No npm. No webpack. No dependencies to install. Just open it in a browser.

---

## 🚀 Getting Started

```bash
git clone https://github.com/umairumar/neik-amal.git
cd neik-amal
open index.html   # macOS
start index.html  # Windows
```

That's it. No `npm install`. No build step. It just works.

---

## 🤝 Why Contribute?

This app serves a global Muslim community of **1.8 billion people** who want to improve themselves spiritually every single day. Every line of code you write has the potential to earn you **Sadaqah Jariyah** — continuous reward that outlasts your lifetime.

> *"When a person dies, his deeds come to an end except for three: Sadaqah Jariyah (ongoing charity), knowledge which is benefited from, or a righteous child who prays for him."* — Prophet Muhammad ﷺ

**This is knowledge that benefits. This is charity that continues.**

---

## 💡 Ideas for Contributors

Here's what the app needs — pick anything that excites you:

### 🔥 High Impact
- [ ] **PWA support** — Add `manifest.json` + service worker so it installs like a native app
- [ ] **Push Notifications** — Remind users at Fajr, Dhuhr, Asr, Maghrib, Isha
- [ ] **Hijri Calendar** — Show Islamic date alongside Gregorian
- [ ] **Multilingual** — Urdu, Arabic, Turkish, Malay, Indonesian translations
- [ ] **Cloud Sync** — Optional login (Firebase/Supabase) to sync across devices

### 🎨 Design
- [ ] **Animated onboarding** — First-time user walkthrough
- [ ] **Custom themes** — User-selectable colour palettes
- [ ] **Widget-style home screen** — Shareable progress card image
- [ ] **Confetti & celebrations** — More milestone animations

### 📊 Data & Insights
- [ ] **Weekly report** — Beautiful summary of the week's deeds
- [ ] **Trend graphs** — Line charts showing progress over 30/90 days
- [ ] **Heatmap calendar** — GitHub-style contribution graph for deeds
- [ ] **Export to PDF** — Printable monthly deed record

### 🧪 Engineering
- [ ] **Migrate to Vite + React** — For a proper dev experience with HMR
- [ ] **Unit tests** — Jest tests for streak logic, badge checking, date resets
- [ ] **Accessibility audit** — WCAG 2.1 AA compliance
- [ ] **Keyboard navigation** — Full keyboard support

---

## 🏗️ Project Structure

```
index.html          ← The entire app (HTML + CSS + JS in one file)
README.md           ← You are here
```

### Key sections inside `index.html`

| Section | What it does |
|---------|-------------|
| `DAILY[]` | All 56 daily task definitions |
| `WEEKLY[]` | First 12 daily tasks tracked weekly (need 5/7 days) |
| `MONTHLY[]` | 4 monthly tasks |
| `LIFETIME[]` | 2 lifetime achievement tasks |
| `BADGES[]` | 12 badge definitions with unlock conditions |
| `QUOTES[]` | 12 motivational Arabic + English quotes |
| `calcStreak()` | Streak calculation from history |
| `checkBadges()` | Badge unlock logic |
| `HomeScreen` | Main dashboard with rings |
| `DailyScreen` | Grouped, searchable task list |
| `AwardsScreen` | Trophy room |
| `SettingsScreen` | Theme, notifications, stats |

---

## 📐 Architecture Decisions

**Why a single HTML file?**
The app is meant to be universally accessible — shared via WhatsApp, email, or USB. A single file opens everywhere with zero setup. No Node.js required on the user's machine.

**Why React via CDN?**
Familiar component model with zero build tooling. The tradeoff (no JSX, `createElement` instead) is worth the zero-friction deployment.

**Why localStorage?**
Privacy by design. No accounts, no servers, no data collection. Your spiritual journey stays on your device.

---

## 🌍 Contributing

1. Fork the repo
2. Make your changes to `index.html`
3. Test by opening the file in Chrome + Firefox
4. Open a Pull Request with a clear description

**First time contributing to open source?** This is a great place to start — the entire codebase is one file and there's no build system to learn.

All contributions welcome — code, design, translations, bug reports, and duas. 🤲

---

## 📜 License

MIT — free to use, modify, and distribute. Please keep it free for the Ummah.

---

<div align="center">

**Built with ❤️ for the Ummah**

*May Allah accept this effort and make it a source of benefit for every Muslim who uses it.*

⭐ Star this repo if it inspired you · 🍴 Fork it to make it your own · 📢 Share it with the Ummah

</div>
