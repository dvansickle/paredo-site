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
- `/customize-quickbooks-bank-transactions/`: native column settings, account/tab/filter context, and Paredo’s supported banking display options.

Shared editorial styles live in `articles.css`. The comparison remains linked from the problem guide and related articles; the homepage focuses on Paredo and links to the problem guides. Both original articles have unique titles/descriptions and canonical URLs, and appear in `sitemap.xml`. `robots.txt` points to the sitemap. No ranking, keyword-volume, or conversion claims are made.

Comparison research checked October 27, 2026: https://righttool.app/free-vs-pro-features/ and https://righttool.app/pro/. The former carries an older version date, disclosed on the page. Competitor scope comes from published documentation, not hands-on testing. Review these facts when updating the comparison. The full Dulait article was supplied October 27. Its software sequence puts alternatives and comparisons first; problem pages come later. Existing URLs remain; there is no basis to claim measured demand, low difficulty, rankings, or results.

## Homepage checklist and remaining inputs

Audience and offer, product evidence immediately after the hero, three setup steps, consolidated read/store/transmit explanation, pricing, nine practical FAQs, a final installation CTA, and compact support and guide links are implemented. All homepage install buttons say Add to Chrome. RightTool comparison content and links are removed from the homepage; the separate comparison URL remains unchanged.

The owner rejected an email-based signup workaround. No signup form, email-capture service, or pretend subscription has been added. A real signup needs an owner-selected provider/form endpoint and matching privacy disclosures.

Screenshots: `assets/paredo-home.png`, `assets/paredo-banking.png`, and `assets/paredo-menu.png` are the approved metadata-free 1280×800 illustrative Chrome Web Store captures from October 23 (Paredo 0.23.1). The source is the extension project’s ignored `captures/2026-10-23/illustrative/01-home.png`. It shows a real captured layout with fictional replacements, not a generated UI. Never present another screen or fabricated clutter as its “before.” Capture the same screen, viewport, state, and fictional/sample data with Paredo off/on for the requested comparison. No live QBO tab was available during this update.

October 27: owner requested using the Store screenshots for now. All three are displayed as product views; a before/after comparison is deferred. No raw or rejected masked images are published.

## Website analytics

Owner-authorized Google Analytics 4 tag `G-GZ1MDJ3MHT` is installed once in the head of all eight HTML pages. Add the same tag to any new public page. The homepage summary and privacy policy distinguish website measurement from extension-local QBO processing. There are no custom analytics events, form capture, or extension changes in this setup. Verify incoming visits in the property’s Realtime report after deployment; blockers and browser settings may prevent collection.

October 28: added homepage install links in the navigation, after the screenshot gallery, and after related reading. Existing hero/pricing links and trial terms are preserved. All install links use the same Chrome Web Store listing; no new tracking or extension behavior.

October 28: added ads/pop-ups and Home dashboard guides, with official Intuit sources, approved illustrative screenshots, install/trial calls to action, homepage links and sitemap entries. Updated the existing problem guide to address simplifying QuickBooks without changing its URL. Native instructions are documentation-based, not fresh live QBO validation; no rankings, volume or conversion outcomes established.

Validation: all eight pages pass local asset/link/fragment, single H1/canonical, single existing analytics tag, sitemap and whitespace checks. New guide previews were inspected at 375px and 1280px; neither had horizontal overflow. Publication does not establish indexing or search performance.

## October 28, 2026 — Landing page refinement

Applied the supplied landing-page-design framework selectively, retaining Paredo’s paper/green palette, system sans serif and italic serif accent. Homepage refinements live in `home.css` so shared policy/article layouts are unaffected. Increased small explanatory copy and labels, added balanced headings, standardized install buttons, moved approved screenshots directly below the shortened hero, and consolidated privacy disclosures. Added setup steps verified against the extension’s trial menu labels, nine native details/summary FAQs, homepage Open Graph/Twitter metadata using the approved illustrative Home screenshot, and branded `404.html` with absolute recovery links and noindex. Existing website analytics remains present, including on the new 404 page. No new tracker or extension change.

The primary argument ends with installation, followed by compact guides/support. The separate RightTool comparison page is retained and remains discoverable through the problem guide, other articles, and sitemap. No fabricated testimonial, metric, or before/after evidence was added. A true matched before/after still requires new approved captures.

Validation: all nine HTML pages passed 165 local link/asset/fragment checks, unique ID checks, existing analytics presence, homepage section order and comparison retention checks. Browser review covered 375px, 768px and 1440px widths without horizontal overflow, FAQ expansion, and the branded 404 recovery page. Full install/payment flows and social-platform preview caches were not exercised. No extension files changed.

## October 29, 2026 — Bank Transactions guide

Added `/customize-quickbooks-bank-transactions/` with native column guidance linked to Intuit’s banking-page documentation, practical account/tab/filter checks, the approved illustrative banking screenshot, exact Paredo account-card/toolbar/restore control labels, scope and privacy answers, and existing install/trial terms. Linked from the homepage banking caption and the general simplification guide; added to the sitemap. Unique title, description, canonical, Open Graph and Twitter image metadata are included. The existing website analytics tag is retained. Native guidance is documentation-based, not fresh live QBO validation; matching before/after captures remain deferred. No extension changes or new tracking.

Validation: all ten HTML pages passed 189 local link/asset/fragment checks, plus single H1/description/analytics checks and nine unique canonical sitemap entries. The new guide was reviewed at 375px and 1280px without horizontal overflow; the approved banking image loaded and its full-size link worked. `git diff --check` passed. Publication does not establish indexing or search performance.

## October 30, 2026 — Before/after carousel

Replaced the standalone Home gallery screenshot with the reviewed manual comparison carousel: lending offers, suggestions/add-ons, and overall Home. Only five owner-approved illustrative PNG exports are included in `assets/comparisons/`. Raw QBO captures, replacement scripts, private records, and local capture logs are not included. Names, financial figures, chart marks, and lending limits are fictional replacements on captured UI, labeled Illustrative data.

`comparisons.js` and `comparisons.css` provide explicit example and off/on controls, keyboard operation, a short opacity transition, reduced-motion support, full-size image links, and a no-script comparison link. No autoplay, sound, network calls, or additional analytics. Existing Banking/settings screenshots, article links, installation actions, terms and privacy content are retained. Lower-page comparison endpoints are not pixel-aligned: lending and suggestions share the same clean endpoint, disclosed in context. No popup was captured or fabricated.

Validation: ten HTML pages passed 192 local link/asset/fragment checks; carousel JavaScript syntax and whitespace checks passed. Browser checks covered 1280px and 375px layouts without horizontal overflow, example navigation, off/on activation via mouse and Space, correct full-size URLs, and loaded 1280×800 images. PNG exports were inspected locally and verified metadata-free. This validates the demonstration, not every QBO interface or workflow.

## October 30, 2026 — Close-up removal examples

Owner found the off/on comparison unconvincing and requested examples of removed elements instead. Replaced the toggle with three cropped, observed Home cards: lending, payroll add-on, and product suggestion. Crops come from the already approved illustrative captures and preserve the original promotional UI. Lending limits remain fictional and disclosed. The retained clean Home image sits separately below, followed by the existing Banking/settings examples. Removed four superseded full-screen comparison assets; no raw captures added.

The carousel uses native horizontal scrolling and scroll snap for touch/no-script operation, plus explicit previous/next and example buttons and keyboard Left/Right controls. Scroll updates are batched through requestAnimationFrame; viewport resizing retains the selected slide. No autoplay, sound, off/on toggle, new tracking, or extension changes. The website’s unrelated uncommitted analytics edits remain untouched in the owner’s checkout.

Validation: JavaScript syntax, whitespace, and 194 local asset/link/fragment checks across ten HTML pages passed. Browser review at 1280px and 375px showed no page overflow; arrows, example buttons, keyboard navigation, horizontal scrolling, and resize alignment worked. Cropped assets were visually inspected and retain no image metadata. Physical-device touch gestures were not separately tested.

October 30 follow-up: trimmed another 10px from each edge of all three close-ups to remove the captured outer card borders/corners. Text and actions remain intact; image dimensions and cache revisions updated. Crops visually inspected, local link/asset checks and git diff --check passed.

October 30 crop refinement: reduced the extra trim from 10px to 4px per edge after owner feedback, restoring space around labels and actions. An 8px display radius masks the remaining edge artifacts. Visual inspection and local link/asset checks passed.

October 30 menu walkthrough: added an illustrative Paredo Home menu beside the removal examples, using labels verified in the extension source and captured menu. The relevant row follows carousel arrows, example buttons, keyboard navigation, and horizontal scrolling. Lending maps to Show Lending offers; payroll and product tips both map to Show Suggestions for you. Selecting either example-capable menu row jumps to its example. Switch drawings are illustrative, not live settings. Other verified Home settings provide context on desktop; phone layouts show the two demonstrated options. Gentle image crops and clean Home view retained. No extension/analytics changes.

Validation: local asset/link/fragment checks (195 across ten HTML pages), JavaScript syntax and whitespace passed. Browser checks at 1280px and 375px covered menu selection, Space activation, carousel-driven highlight changes, shared Suggestions mapping, and no horizontal overflow. Publication does not establish broader live QBO compatibility.

October 30 approved refinement: replaced the full interactive menu with the discussed two-row, annotated excerpt. All three captured examples remain: lending, payroll, and suggestions. Lending highlights Show Lending offers; the other two highlight Show Suggestions for you, with an annotation explaining that it controls the whole section. Menu switches/rows are non-interactive illustrations; arrows, swipe, keyboard and example buttons remain the navigation. Removed unrelated menu rows and repeated per-slide setting copy. Browser checks confirmed all three mappings, no menu buttons, and no horizontal overflow at desktop/phone widths. Syntax, link/asset and whitespace checks passed.

October 30 unique-example refinement: replaced the second Suggestions example (product tip) with a crop of Home’s native app-shortcut row. The three examples now map one-to-one to Show Lending offers, Show Suggestions for you (payroll offer), and Show apps. The third crop shows the captured Accounting and Expenses & Pay Bills shortcuts; it is not a recreated interface. Added the corresponding third illustrated menu row and unique annotation, retaining non-interactive menu switches. Removed the superseded product-tip crop. All three mappings were verified in the browser, with no horizontal page overflow at 1280px/375px. Link/asset, JavaScript syntax, and whitespace checks passed. No extension or analytics changes.
