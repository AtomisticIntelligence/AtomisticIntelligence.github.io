# 原子智能实验室 · Atomistic Intelligence Lab

Website of the Atomistic Intelligence Lab (PI: Bowen Deng), Institute of AI Innovation and Industry (AI³), Fudan University.

Plain static HTML/CSS/JS: no build step and no external fonts or CDNs, so it loads quickly from mainland China.
The language follows the visitor's system/browser language: Chinese systems get Chinese, everything else gets English. Visitors can switch with the 中/EN button, and their choice is remembered. `?lang=en` or `?lang=zh` in the URL forces a language.

## Pages

| Page | File |
|---|---|
| 首页 Home | `index.html` |
| 研究方向 Research | `research.html` |
| 论文成果 Publications | `publications.html` |
| 团队成员 People | `people.html` |
| 新闻动态 News | `news.html` |
| 加入我们 Join Us | `join.html` |

## Common edits

| What | Where |
|---|---|
| Add a paper | `assets/js/data/publications.js` (+ figure in `assets/img/papers/`) |
| Add news | `assets/js/data/news.js` (newest first; Home shows the top 4) |
| Add a lab member | `people.html`, copy the commented `.member` block |
| Nav / footer (all pages) | `assets/js/layout.js` |
| Contact email | `CONTACT_EMAIL` at the top of `assets/js/main.js` |
| Colors / layout | `assets/css/style.css` |
| Logos | `assets/img/logo/` (`*_whitepurple.svg` = white text + violet accent, made from `*_blackpurple.svg` for dark backgrounds; `mark.svg` = atom mark) |

Text on the pages has an `.l-en` and an `.l-zh` version side by side.

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy

Push to `main` on `AtomisticIntelligence/AtomisticIntelligence.github.io`, then enable
**Settings → Pages → Deploy from a branch → main / (root)**.
