PONO FAMILY BIRTHDAY HUB v1.1.21 — ASK PONO DEEP FOLLOW-UP UPDATE

GITHUB PAGES INSTALLATION
1. Extract this ZIP and replace the four website files in your existing GitHub repository:
   index.html, sw.js, manifest.webmanifest, pono-family-icon.png.
2. Commit to main. Load the app online once to update its offline service worker.
3. Open Ask Pono and try:
   “Who are Rico Pono's children?”
   “How old are their children?”
   “When are their birthdays?”
   “Who is the oldest among them?”
   “Compare Rianne and Adrian's ages.”
   “Tell me everything about Christopher Mastin.”

WHAT CHANGED
- Improved multi-turn context retention for groups of relatives, not just one name.
- Answers combined age, birthdate, next-birthday and fund questions for related members.
- Adds comparisons, comprehensive family profiles, years, relationship chaining.
- Answers use live Firebase public data, with last-saved offline fallback.
- No API subscription, external chatbot service, or Firestore writes.

LIMITS
This is a rule-based local family-data reasoning engine, not a re-trained generative large language model. It can answer many detailed structured questions, but not literally every natural-language expression; it will not invent unrecorded information. Date and fund data may be stale while offline.

DATA AND SECURITY
No change to Firestore collections, rules, Firebase config or administrator UID.
The existing birthday, family tree and Birthday Fund records remain unchanged.
Public viewers continue to have read-only access; only the configured administrator may edit.

GITHUB COMMIT
Pono Family Birthday Hub v1.1.21 - Improve Ask Pono Deep Questions and Context


v1.1.21 Ask Pono Family Relationship Intelligence:
- Explains two-person relationships (Adrian and Resty: uncle/nephew) from the displayed family generations and confirmed links.
- Supports siblings, parents, grandparents, first/second cousins, cousin removals and some partnership connections.
- Family root ancestry is inferred from the requested displayed founder-and-household layout; it is not automatically written to Firestore as independently confirmed fact.
- Remains an offline rule-based data assistant, not a newly trained generative model.
- No Firestore rules changes, collections or migrations.
