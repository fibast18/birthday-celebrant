PONO FAMILY BIRTHDAY HUB v1.1.26 — GEMINI BY DEFAULT, AUTOMATIC LOCAL FALLBACK

CUMULATIVE RELEASE based on v1.1.25. Preserves all existing family data,
birthdays, Birthday Funds, Family Tree, PONO DAILY, Lucky Wheel, 3D clown,
birthday music, offline support, Firebase public-view/admin-only write permissions,
PONO branding, and neon-yellow developer footer.

CHANGES
- Gemini is the default Ask Pono answer engine for ONLINE chats once the user
  has granted the existing privacy/data-sharing consent.
- Prior consent is remembered on the same browser, so Gemini is selected
  automatically at every fresh launch (no manual selection required).
- First-time users see a one-time-per-session consent prompt before any data
  reaches Google; choosing "Use local instead" remains available.
- Explicit Local toggle stays available for privacy. A new app launch once
  again prefers Gemini by default (with prior consent).
- If offline, Gemini is inaccessible, or Google returns quota/rate-limit errors,
  Ask Pono automatically answers using the local family-data engine.
- Real Google 429/quota responses trigger temporary exponential retry backoff,
  starting at 60 seconds, capped at 30 minutes. Automatically retries later.
  This is NOT a per-day app question limit. Google free-tier quota still applies.
- Version bumped in HTML and service worker cache.

PRIVACY
Firebase Gemini generative AI receives selected public family information
only after the user's consent. It is never used for database writes; birth
records remain public-read/admin-write via existing Firestore rules.
The reCAPTCHA Enterprise website site key is public configuration, NOT a
private AI Studio Gemini API key.

DEPLOY
1. Extract the ZIP.
2. Replace index.html, sw.js, manifest.webmanifest and pono-family-icon.png
   in the existing birthday-celebrant GitHub Pages repository.
3. Commit the files to main, then visit the website online to refresh the PWA.
4. Open Ask Pono. With existing consent, Gemini should be selected by default.
5. Ask a family question. Switch to Local only if desired.
No Firebase Security Rules changes are needed.

COMMIT MESSAGE
Pono Family Birthday Hub v1.1.26 - Default Gemini Answers with Automatic Local Fallback

TEST NOTES
JavaScript syntax, Firebase SDK import checks, package integrity and code-path
checks performed locally. Live Firebase/Gemini connectivity must be verified
on the published HTTPS website.
