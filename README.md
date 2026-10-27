# Paredo website

A small static public website for Paredo for QuickBooks Online, by Spring Harbor Studios. No build step, JavaScript, external fonts, tracking, or application dependencies.

## Preview

Run `python3 -m http.server 8080` and open http://localhost:8080.

## GitHub Pages

GitHub Pages deploys directly from **main / (root)** using **Deploy from a branch** in Settings → Pages. Push to `main` to update the site; no custom Actions workflow or build step is needed. `.nojekyll` serves the static files directly. `CNAME` preserves the custom domain **getparedo.app**.

## Content

Edit `index.html` and `style.css`. Privacy, terms, and support link to the existing Spring Harbor Studios pages. The hero and pricing buttons link to the [Chrome Web Store listing](https://chromewebstore.google.com/detail/paredo-for-quickbooks-onl/edfmgjiomglckbgdeckoifindgncdonn) supplied by the owner. Pricing reflects the project's documented 14-day no-card trial and US$24/year plan. No product screenshots are included, consistent with the owner's prior preference.

The extension is maintained separately in `dvansickle/simplify-qbo`. This repository contains no extension code, financial captures, or billing integration.

## Search pages

- `/righttool-alternative/`: comparison for visitors considering a narrower alternative; acknowledges RightTool’s broader workflow capabilities and free edition.
- `/quickbooks-online-too-complicated/`: problem-led guide distinguishing clutter, navigation, and accounting questions.

Shared editorial styles live in `articles.css`. Both articles are linked from the homepage and each other, have unique titles/descriptions and canonical URLs, and appear in `sitemap.xml`. `robots.txt` points to the sitemap. No ranking, keyword-volume, or conversion claims are made.

Comparison research checked October 27, 2026: https://righttool.app/free-vs-pro-features/ and https://righttool.app/pro/. The former carries an older version date, disclosed on the page. Competitor scope comes from published documentation, not hands-on testing. Review these facts when updating the comparison. The linked Dulait X post could not be retrieved; page order follows the owner’s supplied summary, with no attributed quotes or claimed keyword research.
