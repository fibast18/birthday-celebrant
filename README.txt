PONO FAMILY BIRTHDAY HUB v1.1.27 — ASK PONO UNIVERSAL AI

CUMULATIVE RELEASE based directly on v1.1.26. All previous features,
Firestore data, permissions, 3D clown, songs, birthday funds, family tree,
PONO DAILY, Lucky Wheel, offline support, logo and neon-yellow developer
footer are retained.

WHAT CHANGED
- Gemini 3.5 Flash-Lite now handles general knowledge, science, technology,
  explanations, math, writing, translations, and broad everyday questions,
  in addition to the PONO family data.
- Family-related requests include relevant app data and prior family context;
  unrelated general requests do NOT attach the family database or earlier
  family conversations to Google.
- Conversational context now includes relevant preceding user AND assistant
  messages, separated by topic for privacy and accuracy.
- Longer, more natural responses (up to 1,800 generated tokens).
- General-topic suggestion chips and welcoming chat prompt.
- IMPORTANT: No live web browsing, news-feed, Google Search grounding,
  real-time weather, or news verification in this free version. Ask Pono will
  disclose this rather than invent current headlines.
- Gemini remains the default after user consent; no app-imposed daily cap.
- If offline, Gemini fails, or free quotas are reached: Local assistant handles
  saved PONO family questions, but makes NO promise to answer general questions.

PRIVACY AND COST
- Firebase AI Logic Gemini Developer API with existing Spark project;
  no Blaze subscription or paid search grounding enabled.
- Existing public App Check key and Firebase web config are retained.
- Google free-tier limits and service terms still apply. Free-tier submissions
  may be used by Google to improve its products. Explicit consent is retained.
- The local-only mode remains available. AI cannot write to Firebase.

DEPLOYMENT
1. Extract ZIP and upload index.html, sw.js, manifest.webmanifest and
   pono-family-icon.png to your birthday-celebrant GitHub Pages repository.
2. Replace previous four files and commit to main.
3. Reopen your website ONLINE once for service-worker cache update.
4. Open Ask Pono and ask "Explain black holes in simple terms" and
   "How are Adrian and Resty related?" to test both paths.
5. For live news questions, verify results using an external news source.

No Firebase rule changes, data migrations or reCAPTCHA changes are necessary.

COMMIT MESSAGE
Pono Family Birthday Hub v1.1.27 - Ask Pono Universal AI General Knowledge

TESTS
JavaScript/static checks and simulated chatbot routing and fallbacks locally.
Live production Gemini calls cannot be performed inside this environment.
