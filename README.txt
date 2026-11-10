PONO FAMILY BIRTHDAY HUB v1.1.25 — UNLIMITED LOCAL QUESTION COUNTER REMOVED

This is a cumulative update from v1.1.24. All old features are preserved.

UPDATED
1. Removed the artificial 12 Gemini-requests-per-day limit and its usage counter.
2. Removed the additional 9-second cooldown imposed by the app.
3. Removed large Ask Pono introduction, Gemini status toolbar and expandable explanation from chat layout.
4. Chat messages now take that reclaimed space; a small Gemini/Local control sits in the Ask Pono header.
5. An info icon in the header opens privacy disclosure in an overlay only when requested.
6. First-time enabling Gemini still requires opt-in; previously accepted consent remains saved.
7. Google Gemini/Firebase free-tier usage/rate quotas still apply and may refuse requests.
8. The existing local assistant remains available offline or if Gemini is unavailable.

GITHUB PAGES DEPLOYMENT
Replace these four files in the root of your existing birthday-celebrant repository:
  index.html
  sw.js
  manifest.webmanifest
  pono-family-icon.png
Commit directly to main. Open the website online to refresh the offline PWA cache.

COMMIT MESSAGE
Pono Family Birthday Hub v1.1.25 - Remove Ask Pono Daily Limit and Expand Chat

FIREBASE
No Firestore rules or database changes are required.
Firebase project: birthday-celebrant-f5804
Public App Check Site Key remains preconfigured, as in v1.1.24.
Never put a private Gemini API key or Firebase service-account credential in public code.

IMPORTANT COST NOTE
The app no longer limits daily requests. Google/Firebase may still impose free-tier quotas, and free-tier data handling applies. Remain on a no-billing Spark plan if you want to avoid enabling paid API usage. Browser UI cannot enforce project-wide quotas.

DATA SAFETY
No changes to Firestore birthday/fund/tree collection IDs, existing backup compatibility,
public-view/admin-edit permissions, PONO logo, 3D clown, personalized birthday song,
Daily Lucky Wheel, or the developer credit.
