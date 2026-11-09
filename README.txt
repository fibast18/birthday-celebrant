PONO FAMILY BIRTHDAY HUB — v1.1.17 · DAILY LUCKY WHEEL

GITHUB PAGES DEPLOYMENT
1) Extract this ZIP.
2) Upload / replace index.html, sw.js, manifest.webmanifest, pono-family-icon.png in the SAME repo folder.
3) Commit: Pono Family Birthday Hub v1.1.17 - Add Daily Lucky Wheel
4) Open the published site online once on each device, then refresh to update offline caches.

NO FIREBASE RULE CHANGES REQUIRED
The included firestore.rules is an unchanged copy of v1.1.16 for convenience only.
Do not republish it unless you have another reason to update rules.
Firebase project, administrator UID, birthday records, Birthday Fund and Family Tree remain unchanged.

LUCKY WHEEL
- New Lucky Wheel tab and PONO DAILY shortcut.
- Wheel shows 10 activities selected reproducibly from 36 fun family activities each Asia/Manila day.
- One randomly selected activity per device/browser per Philippine day; the spin is saved to localStorage
  before animation, avoiding duplicate spins after reload or offline restart.
- A result can be shared using the native share sheet or clipboard fallback.
- LocalStorage is not secure against resetting, incognito, clearing browser data or another device.
  There is no central per-person limit or activity history sync. No authentication is needed.
- No money, payments, odds-for-value, purchases, coupons or cash prizes.
- Works offline after initial online install, as long as the browser retains cached files.

PRESERVED FEATURES
Firebase public birthday read / administrator-only write; Birthday Funds/contribution matrix;
Family Tree hierarchy and corrected Resty / May Sheryl, Monilly / James relationships;
PONO DAILY animated gift and trivia; named birthday greeting/song; 3D clown;
notifications/calendars; neon-yellow Developed by credit; service-worker offline shell.

Note: Public view currently exposes stored family full birthdates and names to the internet.
