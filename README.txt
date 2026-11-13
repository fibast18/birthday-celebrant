PONO FAMILY BIRTHDAY HUB — v1.1.31
AUTO-HIDE HANDBAG + CENTER BUTTON + MIXED WHEEL OPTIONS
=====================================================

WHAT IS NEW
* Tapping the PONO center button triggers exactly the same spin as the large SPIN button; keyboard Enter and Space also work.
* Five cash prizes and five fun surprises are interleaved around the wheel instead of grouped in two halves.
* The bag's 11th wedge AND handbag teaser disappear for everyone when the Worker confirms the handbag has been awarded on eligible global spin #25.
* The wheel then automatically redraws as 10 options, using a public status endpoint returning only `bagAvailable` (never your confidential budget, spin progress, cash amount, or winning code).
* The bag remains visible in the WINNER'S saved result panel and screenshot even after its wedge disappears.
* Other open devices refresh the bag state when returning to the page and periodically while viewing the wheel (internet needed).
* Your original orange-red handbag photo is added to the Lucky Wheel as an ELEVENTH prize option.
* Only the 25TH eligible, ONLINE, FAMILY-WIDE spin starting November 14, 2026 (Asia/Manila) wins the bag.
* If fewer than 25 total family spins happen November 14, the counter continues the following days until spin #25. The bag has no December 31 expiry if it still hasn't been won.
* One winner only: Cloudflare D1 issues each spin a unique global sequence number and identifies sequence #25.
* The winner gets a 6-digit code with the bag picture to screenshot and send to the family GC.
* The bag is separate from the previously planned PHP 1,000 cash prize budget. Neither pool total, remaining balance, nor daily allocations are shown to visitors.
* Administrator-only wheel panel now also shows progress toward the 25th spin (or the winning date/code).
* The existing public birthday viewing, administrator-only editing, Firebase/Gemini Ask Pono, Birthday Fund, family tree, PONO DAILY, 3D clown, songs, and offline app remain in place.

VERY IMPORTANT — GLOBAL SPIN COUNT
* The bag count begins only on November 14, 2026, Philippine time.
* ONLY online spins using this updated website AND updated Cloudflare Worker count. An old cached version cannot claim the bag.
* The count is shared across phones and laptops; it is NOT per user and NOT one person's 25th spin.
* One spin per browser each Philippine day remains (different devices are allowed).
* An offline fun spin does NOT count toward the 25 online spins. Prize awards require the Worker to respond.
* If a request is interrupted, the same browser retries its original request ID. This helps ensure the 25th result isn't lost or counted twice.
* The screenshot code isn't legal proof of ownership; family members still send their winning screenshot in the family group chat for manual prize delivery.

IMPORTANT DEPLOYMENT SEPARATION
1. GITHUB WEBSITE ZIP — Contains 5 files for your PUBLIC GitHub Pages birthday-celebrant repository:
    index.html, sw.js, manifest.webmanifest, pono-family-icon.png, bag.webp
   Upload all five together to the ROOT of your GitHub Pages repository.
2. CLOUDFLARE WORKER ZIP — PRIVATE deployment folder, not for public GitHub:
    worker.mjs, schema.sql, migration.sql, wrangler.toml, package.json, PRIVATE-SETUP.txt
   This performs the shared 25th-spin selection and protects cash-budget details.

CLOUDFLARE SETUP — IF YOU NEVER DEPLOYED THE PREVIOUS PRIVATE-BUDGET WORKER
A. Open the private Worker folder in Mac Terminal.
B. npm install
C. npx wrangler login
D. npx wrangler d1 create pono-family-wheel-2026
E. Open wrangler.toml and paste the returned database_id in place of REPLACE_WITH_ID_RETURNED_BY_WRANGLER_D1_CREATE
F. npm run db:apply            (initializes all cash/bag tables and seeded cash allocations ONCE)
G. npm run deploy              (outputs an HTTPS URL ending in .workers.dev)
H. Open the public index.html and replace PASTE_YOUR_CLOUDFLARE_WORKER_HTTPS_URL with that exact HTTPS URL.
I. Upload the FIVE website files to GitHub Pages. Test the /api/health route first.

CLOUDFLARE SETUP — IF YOU ALREADY DEPLOYED THE OLDER v1.1.29 PRIVATE-BUDGET WORKER
A. Download or extract the new private Worker ZIP.
B. Preserve the SAME existing D1 database ID in wrangler.toml. DO NOT create a new D1 database.
C. npm install
D. npx wrangler login
E. If upgrading from v1.1.29 (before v1.1.30), run `npm run db:migrate` ONCE.
   If upgrading from an already working v1.1.30 backend, DO NOT run any SQL migration.
F. npm run deploy             (upgrades the Worker without resetting old budget/spin history)
G. Keep the existing real Worker URL in your public index.html, then upload all FIVE files to GitHub Pages.
DO NOT run schema.sql again if you want to preserve an older deployment. Do not run migration.sql on a freshly initialized v1.1.31 database.

TEST BEFORE THE GAME STARTS
* Open the website once ONLINE and confirm the header/footer show v1.1.31.
* Open Lucky Wheel; confirm the 11th 'PONO Bag' option and original bag photo appear.
* Sign in as the administrator and confirm that the cash budget and bag progress are private.
* Open the same website in a non-signed-in browser: no cash total or remaining budget should be visible.
* Cash pool remains exactly the same as previous private-budget v1.1.29. No Firestore rules change required.
* The special bag is awarded at spin 25 on or after November 14, not before.

NOTES
* The private budget will NOT be active if you upload only index.html; deploy/connect the Worker and D1.
* If the Cash Wheel service is unavailable during an online spin, the app will prompt a retry instead of silently losing a possible 25th-spin handbag award.
* GitHub Pages cannot open on a device for the first-ever time offline. Visit online once to populate the service-worker cache.
* Do not put the Worker SQL schema or its private budget allocations in your PUBLIC GitHub repository.
* No automated money transfers, claim payment register, or hard device identity rules were added.
* The final cloud deployment has not been tested from this environment; run a real trial before telling relatives the bag challenge has started.

GITHUB COMMIT MESSAGE
Pono Family Birthday Hub v1.1.31 - Auto-Hide Bag, Center Spin Button and Mixed Wheel Prizes

UPGRADING FROM AN INSTALLED v1.1.30 WORKER
* Keep the same D1 database ID and worker name in wrangler.toml. Do not rerun schema.sql or migration.sql.
* Deploy worker.mjs using `npm run deploy`, then deploy the new public GitHub files (version 1.1.31).
* Test the read-only public endpoint `https://YOUR-WORKER.workers.dev/api/wheel-state`. It should output only `{"bagAvailable":true}` before the bag is awarded or false afterward.
* Refresh the public website to make sure the 10-option wheel appears after a claimed handbag.
* A browser that is fully offline cannot learn that the handbag was awarded on another device until it reconnects.
* The account's cash budget and daily allocation remain administrator-only under `/api/admin`.
