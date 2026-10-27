# Paredo website

A small static public website for Paredo for QuickBooks Online, by Spring Harbor Studios. No build step, JavaScript, external fonts, tracking, or application dependencies.

## Preview

Run `python3 -m http.server 8080` and open http://localhost:8080.

## GitHub Pages

GitHub Pages deploys directly from **main / (root)** using **Deploy from a branch** in Settings → Pages. Push to `main` to update the site; no custom Actions workflow or build step is needed. `.nojekyll` serves the static files directly. `CNAME` preserves the custom domain **getparedo.app**.

## Content

Edit `index.html` and `style.css`. Privacy, terms, and support link to the existing Spring Harbor Studios pages. The site intentionally has no unverified Store install link. Add the verified public listing after publication is confirmed. Pricing reflects the project's documented 14-day no-card trial and US$24/year plan. No product screenshots are included, consistent with the owner's prior preference.

The extension is maintained separately in `dvansickle/simplify-qbo`. This repository contains no extension code, financial captures, or billing integration.
