PONO FAMILY BIRTHDAY HUB v1.1.22 — ASK PONO CONTEXTUAL RELATIONSHIP FOLLOW-UPS

DEPLOYMENT TO GITHUB PAGES
1. Extract the ZIP. Upload and replace index.html, sw.js, manifest.webmanifest, and pono-family-icon.png at the root of your existing GitHub Pages repository.
2. Commit to main. Open your website online once, then refresh to update the offline cache.
3. No Firebase changes, data migrations, or security-rule changes are required; firestore.rules is included only as a reference copy.

FIXED IN v1.1.22
- Ask Pono now understands consecutive relationship comparisons without requiring the word “related” in every follow-up.
- Examples after “How are Adrian and Resty related?” include “How about Mary Ann and Narvee?”, “How about Rico and Narvee?”, “How about Resty and Narvee?”, and “How about Rico and Mary Ann?”.
- Relationship reasoning recognizes partners, siblings of partners, spouses/partners of siblings, and connections between two relatives whose partners are siblings.
- In-law explanations describe what the displayed Family Tree shows without making unverified assertions about legally recognized marriages or biological relationships.
- Follow-up questions about ages, birthdays, and Birthday Funds continue using their existing handlers and must not be mistaken for relationship questions.
- Questions use live or cached family data and remain local/read-only; no external AI endpoint or API key. This is not a retrained or generative language model.

UNCHANGED
- PONO Firebase project configuration, administrator UID, public-view/admin-only editing, all birthday data and funds, previously corrected Family Tree, 3D clown, birthday song, PONO DAILY, Lucky Wheel, offline PWA, logo, and neon-yellow “Developed by: Engr. Rico J. Pono” credit.

GITHUB COMMIT MESSAGE
Pono Family Birthday Hub v1.1.22 - Fix Ask Pono Relationship Follow-Ups and In-Laws
