# Handoff Document — Mingda Portfolio Refactor

## Goal

Refactor Mingda's personal design portfolio from a plain HTML/CSS/JS site to a **Vite + React 18** SPA, deployed on GitHub Pages, while keeping project detail pages as static HTML for now.

---

## Current State (as of 2026-06-20)

**All React implementation is complete but NOT committed.** The `redevelop-react` branch currently sits at the same commit as `main` (058c41d). Every file listed below under "What Has Been Done" exists only as local untracked/unstaged files.

Uncommitted local changes:
- `assets/css/otherpages.css` — CSS cleanup applied (unstaged modification to tracked file)
- `index.html` — converted to Vite entry point (unstaged modification to tracked file)
- `src/`, `public/`, `vite.config.js`, `package.json`, `package-lock.json`, `.github/workflows/deploy.yml`, `dist/` — all untracked (never committed)

**Immediate next step: stage and commit everything to `redevelop-react`, then open a PR to `main`.**

---

## What Has Been Done

### React Refactor (implemented, not committed)
- Created `package.json`, `vite.config.js` (`base: './'` for GitHub Pages subdirectory support)
- Replaced old `index.html` with Vite entry point (`<div id="root">`, `src/main.jsx`)
- `src/main.jsx` — mounts app inside `HashRouter` (required for GitHub Pages SPA routing)
- `src/App.jsx` — three routes: `/` → Home, `/projects` → Projects, `/about` → About
- `src/components/Navbar.jsx` — uses `useLocation()` for active link, hamburger menu for mobile
- `src/components/Footer.jsx` — desktop + mobile footer variants
- `src/components/BackToTop.jsx` — scroll listener + custom smooth scroll via `requestAnimationFrame`
- `src/pages/Home.jsx` — slogan rotation (`setInterval`), video modal (`useRef`), platform accordion (`useState`), download resume
- `src/pages/Projects.jsx` — project card grid, click → `window.location.href = './projects/Loan.html'`
- `src/pages/About.jsx` — self intro, timeline image, skills toolkit, outside work section
- `src/App.css` — slogan animation keyframes (`.slogan-enter`, `.slogan-exit`)

### Routing Strategy
- **HashRouter** used so GitHub Pages doesn't need server-side 404 handling
- URLs: `/#/`, `/#/about`, `/#/projects`
- Project detail pages remain static HTML in `public/projects/` (copied to `dist/projects/` by Vite)

### Asset Organization
- All images, fonts, video, PDFs moved to `public/assets/` so Vite copies them verbatim to `dist/`
- CSS kept in `public/assets/css/` (not imported as React modules) so project detail pages can reference them via relative paths (`../assets/css/insideproject.css`)

### GitHub Actions Deployment
- Created `.github/workflows/deploy.yml` replacing the old Jekyll workflow
- Builds with Node.js 20 + `npm ci` + `npm run build`, uploads `dist/` to GitHub Pages

### Bug Fix: Banner White Gap
- **Problem**: After React refactor, loading `otherpages.css` globally applied `.page-container { margin: 30px auto }` to the Home page, pushing the banner down ~30px
- **Fix**: Removed that dead rule from both `public/assets/css/otherpages.css` and `assets/css/otherpages.css`

### CSS Cleanup (applied locally, not committed)
Reduced total CSS significantly by removing duplication:

| File | Before | After | Reduction |
|------|--------|-------|-----------|
| `index.css` | 2013 lines | ~1208 lines | −40% |
| `otherpages.css` | 436 lines | ~259 lines | −41% |
| `insideproject.css` | 720 lines | ~479 lines | −34% |

**Changes made:**
- `index.css`: Removed large commented-out dead code block; removed duplicate `#myVideo` rule; merged 3 near-identical mobile breakpoints (~810 lines) into 1 shared `max-width: 992px` block + 3 small override blocks
- `otherpages.css`: Removed duplicate `@keyframes expand`; merged `max-width: 767px` + `width: 768px` + `769–922px` into one `max-width: 922px` block; merged `width: 1024px` + `1025–1146px` + `1047–1151px` into one `1024–1151px` block
- `insideproject.css`: Removed duplicate `@keyframes expand`; replaced repeated 11-class selector (`font-size: X`) in 5 breakpoints with CSS variable updates (`:root { --project-paragraph-font: X }`); added `--project-paragraph-line-height` variable; extracted shared `min-width: 1281px` rules into one block; removed redundant `font-family` from `.View-Prototype`
- `@keyframes expand` now lives **only** in `index.css`

---

## What Worked

- **HashRouter** for GitHub Pages — no 404 config needed, just works
- **`base: './'`** in `vite.config.js` — asset paths resolve correctly when deployed to a subdirectory
- Keeping CSS in `public/assets/css/` (not as React imports) — project detail pages continue to work unchanged
- CSS variable approach (`--project-paragraph-font`) to eliminate repeated 11-class selector in `insideproject.css`
- Keeping global CSS instead of CSS Modules — user's project cards are genuinely shared/reusable, so global styles are the right call for this portfolio

## What Didn't Work / Decisions Made

- **Project detail pages not converted to React** — intentional decision by user; deferred to a future task
- **CSS Modules not used** — intentional decision; global CSS is appropriate because project card styles are shared and the site is maintained by one person

---

## Next Steps

1. **Commit everything to `redevelop-react`** — stage all untracked files and the two modified files, commit in logical groups (e.g., "React app scaffolding", "CSS cleanup", "GitHub Actions deploy"):
   ```powershell
   git add src/ public/ vite.config.js package.json package-lock.json .github/workflows/deploy.yml
   git add assets/css/otherpages.css index.html
   git commit -m "React refactor: Vite + HashRouter SPA with CSS cleanup"
   ```
2. **Test the build locally** — run `npm run build` and confirm `dist/` looks correct
3. **Open a PR** — `redevelop-react` → `main`, verify GitHub Actions deploys correctly
4. **Convert project detail pages to React** (deferred) — `public/projects/Loan.html`, `RequestManagement.html`, `Repayment.html`, `DesignSystem.html`, `SharePoint.html`, `Inside9.html`
5. **Review `insideproject.css`** after the CSS variable refactor — confirm the `--project-paragraph-line-height: normal` default doesn't visually affect existing breakpoints that previously had no `line-height` set on those elements

---

## Key Files

```
d:\codes\Mingda_design\
├── index.html                        ← Vite entry point (not the old homepage)
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx                      ← HashRouter + ReactDOM.createRoot
│   ├── App.jsx                       ← Routes
│   ├── App.css                       ← Slogan animation keyframes
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Projects.jsx
│       └── About.jsx
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── index.css             ← Global styles (font-face, nav, banner, home, footer)
│   │   │   ├── otherpages.css        ← About/Projects page styles
│   │   │   └── insideproject.css     ← Project detail page styles
│   │   ├── images/
│   │   ├── fonts/
│   │   └── files/                    ← Resume PDF
│   └── projects/                     ← Static HTML project detail pages
│       ├── Loan.html
│       ├── RequestManagement.html
│       ├── Repayment.html
│       ├── DesignSystem.html
│       ├── SharePoint.html
│       └── Inside9.html
├── assets/css/                       ← Root CSS copies (kept in sync with public/assets/css/)
└── .github/workflows/deploy.yml      ← Node 20 + Vite build → GitHub Pages
```

---

## Branch

Current branch: `redevelop-react`  
Main branch: `main`  
Last shared commit: `058c41d` (Merge pull request #79)
