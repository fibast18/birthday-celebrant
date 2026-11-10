CONFIGURED RELEASE — PUBLIC RECAPTCHA ENTERPRISE SITE KEY PREINSTALLED
PONO FAMILY BIRTHDAY HUB v1.1.24 — ASK PONO WITH OPTIONAL GEMINI AI

ABOUT THIS UPDATE
- Retains every v1.1.22 feature and Firebase birthday, family-tree and fund data.
- New optional Firebase AI Logic connection to Google Gemini 3.5 Flash-Lite (Gemini Developer API).
- Ask Pono remains read-only. Fallback to its older rule-based family-data engine when Gemini is off, unavailable, quota limited, or offline.
- Explicit first-use consent before sending app context to Google. Free-tier submissions may be used by Google to improve its products.
- No Google Gemini API key or paid AI account is embedded in the public GitHub HTML.
- Requests to Gemini include names, calculated ages, birthday month/day, family groups, displayed tree branches, saved connections, and requested public Birthday Fund data; NOT full DOBs from the database, Firebase UIDs, passwords or personal email addresses. Visitors should not type private information into questions.
- Local per-device convenience limit: 12 Gemini requests per Philippine day, at least 9 seconds between requests. IMPORTANT: This is NOT a security boundary. Also configure Firebase API per-user/project quotas and monitoring; the free tier can be exhausted by other visitors.

FIREBASE SETUP (REQUIRED FOR LIVE GEMINI)
1. Keep your Firebase project birthday-celebrant-f5804 on the SPARK (free) plan. Do not upgrade billing if you want a strictly no-cost trial.
2. Open Firebase Console > AI Logic (under Build/AI) > Get started. Choose the GEMINI DEVELOPER API, NOT Agent Platform/Vertex AI. Confirm the API is enabled for this project.
3. DONE by app owner: Firebase Console > Security > App Check shows Birthday Celebrant registered with Fraud Defense (reCAPTCHA Enterprise), for the fibast18.github.io domain. No need to create another site key.
4. DONE: The public reCAPTCHA Enterprise site key supplied by the app owner has already been inserted into index.html:
   const AI_APP_CHECK_SITE_KEY = '6LdPkhkuAAAAAGQHdb1cwLXAASGoksIWIDcKqy-6';
   You DO NOT need to edit index.html to add this key. It is a PUBLIC website site key, not a Gemini API secret.
5. DONE by app owner: Firebase Console > App Check > APIs shows Firebase AI Logic Basic — Enforced. Verify this remains enabled; test from the published HTTPS website (not file:// or localhost). App Check can reject unsupported browser environments and ad blockers.
6. IMPORTANT: Leave Firestore rules as currently published. Gemini AI Logic uses App Check and its AI gateway, not new Firestore read/write rules. Do NOT enforce App Check on Firestore or Authentication until you have tested your current sign-in and birthday features with every device.
7. Upload index.html, sw.js, manifest.webmanifest, and pono-family-icon.png from this ZIP to your GitHub repository root; commit to main. Open the published website online and refresh. Firebase App Check setup can take time to propagate.
8. Open Ask Pono, select Enable Gemini AI, read and agree to the data-sharing explanation, and ask: "How is Adrian related to Resty?" Then ask "How about Mary Ann and Narvee?" Offline or when unavailable, Ask Pono falls back to the existing local engine.
9. Firebase Console > AI Logic / Usage and Google Cloud quotas: monitor usage and configure appropriate limits. Check pricing and Google data processing terms before inviting everyone.

ACTIVATION STATUS
The public website key is now INCLUDED in the source. The owner's Firebase screenshots show that the app was registered with Fraud Defense and Firebase AI Logic Basic App Check was enforced. Gemini remains user-opt-in; after deployment, choose Enable Gemini AI and consent before asking a question. Actual live Gemini success has not yet been verified; local Ask Pono remains functional as a fallback.

PRIVACY
Gemini free-tier content may be used by Google to improve its products. The app does not automatically include email addresses, account identifiers, full dates of birth or passwords; user-entered questions are sent as written. However names, family links, ages and selected public contribution amounts may still be personal information, including for minors. Choose the local-only mode if this is not acceptable. Google responses are not guaranteed correct; verify important relationship data. The family Firestore database remains public-read as in prior releases.

GITHUB COMMIT MESSAGE
Pono Family Birthday Hub v1.1.24 - Configure App Check Site Key for Gemini AI

REFERENCE DOCUMENTATION
https://firebase.google.com/docs/ai-logic/get-started?platform=web
https://firebase.google.com/docs/ai-logic/app-check
https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider
https://ai.google.dev/gemini-api/docs/pricing
