# Brylle's Team — Midterm Project in PC223

A multi-page web application built as a midterm requirement for **PC223 (Integrative Programming)**. The project features a team dashboard, an interactive programming portfolio, and a movie favorites page with a live comment system — all wrapped in a custom dark/light theme engine.

---

## 👥 Team Members

| Name | Course & Section | Email |
|---|---|---|
| Brylle Banquil | BSIT 2B Pseudocode | — |
| Rob Dustine Galeos | BSIT 2B Pseudocode | robrob6969@gmail.com |
| Ivan Lingo | BSIT 2B Pseudocode | ivnlngoo09@gmail.com |

---

## 📁 Project Structure

```
root/
├── pages/
│   ├── dashboard.html      # Home — team intro
│   ├── portfolio.html      # Programming activities
│   └── favorites.html      # Movie favorites + comments
│
├── style/
│   ├── dashboard.css       # Global theme, layout, components
│   └── favorites.css       # Favorites & comments page styles
│
├── function/
│   ├── data.js             # Theme engine, navigation, animations
│   ├── script.js           # Portfolio activity logic
│   └── favorites.js        # Heart toggle & comment system
│
└── source/
    └── images/
        └── logo/           # Team photos and movie posters
```

---

## 🌐 Pages

### Dashboard (`dashboard.html`)
The landing page of the application. Introduces the team with animated scroll-in member cards, a typewriter title effect, and a cycling role ticker.

### Portfolio (`portfolio.html`)
Hosts five interactive Integrative Programming activities launched via buttons:

| # | Activity | Description |
|---|---|---|
| 1 | **Temperature Converter** | Converts between Celsius and Fahrenheit |
| 2 | **Word Length Checker** | Compares the length of two input words |
| 3 | **Birthstone Finder** | Returns the birthstone for a given month |
| 4 | **Basic Calculator** | Performs addition, subtraction, multiplication, and division |
| 5 | **Acceleration Calculator** | Computes acceleration using `a = (v - u) / t` |

### Favorites (`favorites.html`)
Displays a grid of eight movie cards. Users can heart/un-heart movies and submit comments per movie. All selections and comments persist via `localStorage`.

---

## ✨ Features

**Theme System**
- Dark and light mode toggle using a custom BB8-style animated switch
- Theme preference saved to `localStorage` and restored on every page load
- All colors driven by CSS custom properties (`--bg-body`, `--accent`, `--card-border`, etc.) so both themes update automatically

**Navigation**
- Slide-in sidebar with overlay and logo spin animation
- Keyboard accessible — `Enter` / `Space` open the menu, `Esc` closes it
- `?` key opens a keyboard shortcuts help dialog

**Scroll Animations**
- Team member cards fade and slide in as they enter the viewport using `IntersectionObserver`
- Cards fade out when scrolled past

**Mouse Spotlight**
- A radial highlight follows the cursor inside `.main` sections, giving a subtle depth effect

**Favorites & Comments**
- Heart buttons toggle favorited state per movie, persisted in `localStorage`
- Comment form with movie dropdown, textarea, and submit button
- Submitted comments appear below the form showing the movie title as a colored pill badge
- Each comment has a delete (✕) button with a fade-out animation
- All comments persist across page refreshes via `localStorage`

**Typing Effects**
- Page titles use a typewriter character-by-character animation
- Hero section cycles through role labels with a typewriter + backspace loop
- Both effects respect `prefers-reduced-motion` and skip animation if enabled

---

## 🎨 Design

The visual design uses a **purple gradient dark theme** as its default, with a clean light theme as the alternate.

| Token | Dark | Light |
|---|---|---|
| `--bg-body` | `#0c0a14` | `#f8f6fc` |
| `--accent` | `#a855f7` | `#7c3aed` |
| `--card-bg` | `rgba(255,255,255,0.04)` | `rgba(255,255,255,0.9)` |
| `--card-border` | `rgba(168,85,247,0.2)` | `rgba(124,58,237,0.2)` |

Typography is set in **Poppins** (Google Fonts), weights 300–700.

---

## 🛠️ Technologies Used

- **HTML5** — semantic markup across all pages
- **CSS3** — custom properties, CSS Grid, Flexbox, keyframe animations, `IntersectionObserver`-driven transitions
- **Vanilla JavaScript** — no frameworks or libraries; all logic written in plain JS
- **localStorage** — client-side persistence for theme preference, favorited movies, and comments
- **Google Fonts** — Poppins font family

---

## 🚀 Running the Project

No build tools or installations required. Just open with a live server:

1. Clone or download the repository
2. Open the project folder in **VS Code**
3. Right-click `pages/dashboard.html` and select **Open with Live Server**

Or open `pages/dashboard.html` directly in any modern browser.

> **Note:** Some features (localStorage, smooth scroll) require a browser environment. The project works best in Chrome, Edge, or Firefox.

---

## 📝 Notes

- Movie poster images should be placed in `source/images/logo/` and follow the filenames referenced in `favorites.html` (e.g. `inception.jpg`, `tdk.jpg`, `interstellar.jpg`, etc.)
- The team logo/photo should be placed at `source/images/logo/image.jpg`
- All JavaScript is fully external — no inline scripts remain in the HTML files

---

*Brylle's Team © 2026 — BSIT 2B Pseudocode, PC223 Midterm Project*
