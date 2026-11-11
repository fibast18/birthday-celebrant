PONO FAMILY BIRTHDAY HUB v1.1.28 — VERIFIED FAMILY DATA + UNIVERSAL GEMINI AI

What's fixed
- Ask Pono reads the actual family birthday records loaded from Firestore or offline snapshots.
- It calculates exact age differences in DAYS locally using full stored birthdates and leap years.
- Short follow-ups such as “In days?” inherit the previous family calculation.
- Gemini receives verified calculations, and cannot override them with approximate years or falsely say the dates are missing.
- It can also calculate an individual member's age in days.
- Full DOBs are not automatically sent to the external AI for calculations. Only explicit DOB questions send the requested named person's date, after the existing AI consent.
- General science/history/writing/translation chat still uses Gemini by default (with consent), and family queries use existing Firestore data. No live web-search, real-time current news tool, or Google Search grounding is enabled.
- Birthdays, funds, family tree, song, Lucky Wheel, PONO Daily, 3D clown, original PONO logo, developer footer, offline support and public-view/admin-edit access remain unchanged.

Test question
  How many days is the age difference between Adrian and Monica?
  Expected: 26,222 days (February 17, 2023 minus May 4, 1951).
  Then: In days?
  Expected: same exact 26,222 days.

Deploy
1. Extract ZIP and upload index.html, sw.js, manifest.webmanifest and pono-family-icon.png to the root of your existing birthday-celebrant GitHub repository.
2. Commit to main. Open the live Pages app online to refresh its offline cache.
3. Keep Firebase App Check and existing Firestore rules unchanged; no database migrations.
4. Ask Pono with Gemini enabled and use the above test questions.

Note
- A first ever offline install on a device is impossible; it must be opened online once to cache the app.
- Family records are PUBLIC for reading, admin-only for writing, as in previous releases.
- Google Gemini free-tier request/rate limits still apply; local read-only fallback remains.
- External AI can use general learned knowledge, but does not have live browser access or verified breaking-news feeds.

Suggested commit: Pono Family Birthday Hub v1.1.28 - Fix Exact Family Date Calculations and Gemini Context
