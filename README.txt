PONO FAMILY BIRTHDAY HUB — v1.1.19 · ASK PONO

NEW IN THIS CUMULATIVE UPDATE
- Floating "✦ Ask Pono" at the bottom right of phone and laptop screens.
- Mobile-friendly chat panel, question box, instant responses, sample questions,
  and accessible close/Escape controls.
- Built-in, read-only family-data question answering using the SAME records already
  loaded by the app (or its saved offline copies). No paid AI subscription,
  API key, extra Firestore reads, or new Firestore collection required.
- Questions supported include upcoming birthdays, current ages, full birthdates,
  countdowns, who celebrates this month, family totals and groups, Family Tree
  relationships in the displayed branches, birthday fund totals and donors,
  PONO DAILY surprises and quizzes, and the local Lucky Wheel outcome.
- Responses are grounded in available app data and make no Firebase changes.
- Questions and chat messages are held in memory only during the open app session.

IMPORTANT AI LIMITATION
Ask Pono is a locally coded natural-language family data assistant, not a full
ChatGPT-style large language model. It may not understand every wording or answer
questions requiring facts outside the app. It responds with a helpful limitation
rather than inventing data. To support genuinely unrestricted generative answers,
a separate AI model/service would be needed.

DEPLOY TO GITHUB PAGES
1) Extract the ZIP.
2) Upload these FOUR files to the root of your existing Github repository:
   index.html, sw.js, manifest.webmanifest, pono-family-icon.png.
3) Replace previous versions and commit directly to main.
4) Suggested commit message:
   Pono Family Birthday Hub v1.1.19 - Add Floating Ask Pono Family Data Assistant
5) Open the published app online once to update the cached offline PWA.
6) Tap the Ask Pono floating button and try "Whose birthday is next?".

FIREBASE
- No Security Rules change or database migration needed for Ask Pono.
- Existing Firebase config and administrator UID are already in index.html.
- Existing public-read/administrator-write restrictions continue unchanged.
- Questions do not modify records or call a third-party AI endpoint.

EVERYTHING ELSE REMAINS
All v1.1.18 family-tree corrections, birthdays, Birthday Fund and contribution
matrix, Daily Lucky Wheel, PONO DAILY, birthday music and voice, dancing 3D
clown, family logo, offline PWA, and neon-yellow footer developer credit.

PUBLIC DATA NOTICE
The website's current public-view policy exposes full names, dates of birth,
family relationships and birthday fund contributions. Ask Pono reflects that
existing policy; it does not make previously private data public.
