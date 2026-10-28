# Paredo website

A small static public website for Paredo for QuickBooks Online, by Spring Harbor Studios. No build step, external fonts, or application dependencies. The public website uses Google Analytics; the extension remains free of analytics.

## Preview

Run `python3 -m http.server 8080` and open http://localhost:8080.

## GitHub Pages

GitHub Pages deploys directly from **main / (root)** using **Deploy from a branch** in Settings → Pages. Push to `main` to update the site; no custom Actions workflow or build step is needed. `.nojekyll` serves the static files directly. `CNAME` preserves the custom domain **getparedo.app**.

## Content

Edit `index.html` and `style.css`. Privacy, terms, and support are separate local pages, adapted from the publisher’s existing policies without changing subscription commitments. The hero and pricing buttons link to the [Chrome Web Store listing](https://chromewebstore.google.com/detail/paredo-for-quickbooks-onl/edfmgjiomglckbgdeckoifindgncdonn) supplied by the owner. Pricing reflects the project's documented 14-day no-card trial and US$24/year plan. The homepage uses the three approved Chrome Web Store screenshots, labeled as illustrative data, with links to full-size originals.

The extension is maintained separately in `dvansickle/simplify-qbo`. This repository contains no extension code, financial captures, or billing integration.

## Search pages

- `/righttool-alternative/`: comparison for visitors considering a narrower alternative; acknowledges RightTool’s broader workflow capabilities and free edition.
- `/quickbooks-online-too-complicated/`: problem-led guide distinguishing clutter, navigation, and accounting questions.

Shared editorial styles live in `articles.css`. Both articles are linked from the homepage and each other, have unique titles/descriptions and canonical URLs, and appear in `sitemap.xml`. `robots.txt` points to the sitemap. No ranking, keyword-volume, or conversion claims are made.

Comparison research checked October 27, 2026: https://righttool.app/free-vs-pro-features/ and https://righttool.app/pro/. The former carries an older version date, disclosed on the page. Competitor scope comes from published documentation, not hands-on testing. Review these facts when updating the comparison. The full Dulait article was supplied October 27. Its software sequence puts alternatives and comparisons first; problem pages come later. Existing URLs remain; there is no basis to claim measured demand, low difficulty, rankings, or results.

## Homepage checklist and remaining inputs

Audience sentence, near-top read/store/transmit explanation, price/trial/install CTA, explicit support email, suitability guidance with RightTool referral, and separate policy/support pages are implemented.

The owner rejected an email-based signup workaround. No signup form, email-capture service, or pretend subscription has been added. A real signup needs an owner-selected provider/form endpoint and matching privacy disclosures.

Screenshots: `assets/paredo-home.png`, `assets/paredo-banking.png`, and `assets/paredo-menu.png` are the approved metadata-free 1280×800 illustrative Chrome Web Store captures from October 23 (Paredo 0.23.1). The source is the extension project’s ignored `captures/2026-10-23/illustrative/01-home.png`. It shows a real captured layout with fictional replacements, not a generated UI. Never present another screen or fabricated clutter as its “before.” Capture the same screen, viewport, state, and fictional/sample data with Paredo off/on for the requested comparison. No live QBO tab was available during this update.

October 27: owner requested using the Store screenshots for now. All three are displayed as product views; a before/after comparison is deferred. No raw or rejected masked images are published.

## Website analytics

Owner-authorized Google Analytics 4 tag `G-GZ1MDJ3MHT` is installed once in the head of all six HTML pages. Add the same tag to any new public page. The homepage summary and privacy policy distinguish website measurement from extension-local QBO processing. There are no custom analytics events, form capture, or extension changes in this setup. Verify incoming visits in the property’s Realtime report after deployment; blockers and browser settings may prevent collection.
