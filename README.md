# Paredo website

A small static public website for Paredo for QuickBooks Online, by Spring Harbor Studios. No build step, JavaScript, external fonts, tracking, or application dependencies.

## Preview

Run `python3 -m http.server 8080 --directory public` and open http://localhost:8080.

## GitHub Pages

In repository Settings → Pages, select **GitHub Actions** as the source. Pushing to `main` runs `.github/workflows/pages.yml`, publishing only `public/`. The workflow can also be run manually. Relative asset links work under a project URL such as `https://dvansickle.github.io/paredo-site/`; no custom domain is configured.

## Content

Edit `public/index.html` and `public/style.css`. Privacy, terms, and support link to the existing Spring Harbor Studios pages. The site intentionally has no unverified Store install link. Add the verified public listing after publication is confirmed. Pricing reflects the project's documented 14-day no-card trial and US$24/year plan. No product screenshots are included, consistent with the owner's prior preference.

The extension is maintained separately in `dvansickle/simplify-qbo`. This repository contains no extension code, financial captures, or billing integration.
