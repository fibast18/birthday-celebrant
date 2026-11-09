PONO FAMILY BIRTHDAY HUB — v1.1.15 Generations Family Tree
========================================================

WHAT'S NEW
- Billy Pono (deceased, in loving memory) and Monica Pono appear together at the top.
- Seven household branches, in the exact requested order: Maridel/Julito,
  Resty/Narvee, Resty/Shyrel, Monilly/James, Bernardo/Maricar,
  Bernardo/Analyn, Rico/Mary Ann.
- Children, known partners and grandchildren are visually grouped beneath
  their household. Current birthday records are matched by exact name.
- People not yet in birthday records (e.g., Shyrel if missing) appear as
  placeholders, NOT newly created Firebase records.
- Additional relatives not placed in the above seven branches are still listed.
- Existing administrator-confirmed relationships remain under an expandable
  saved-connections diagram. New visual arrangement does not automatically
  write new connections to Firebase.

GITHUB PAGES
Upload index.html, sw.js, manifest.webmanifest, pono-family-icon.png
to the same repository folder, replacing the previous app shell.

FIREBASE SECURITY RULES — IMPORTANT
Open Firestore Database > Rules and publish the supplied firestore.rules
(or merge its familyTree rules into your existing project rules if you host
other apps). Version v1.1.14 Family Tree had two different packages; one
restricted familyTree/{id} to a single document even though the app
reads a collection of relationship documents. This v1.1.15 rules file
correctly permits public read/list and owner-only write for the familyTree
collection. No database deletion or migration is needed.

PRIVACY
The family birthdays and names are already public, and the family tree
layout and confirmed relationships are also public on GitHub Pages.

PRESERVED FEATURES
Birthday Fund contribution matrix, birthday song, Daily Surprise gift
opening animation, daily quizzes, 3D clown, search, offline viewing,
Firebase config/admin UID, original logo and neon-yellow developer credit.

GITHUB COMMIT MESSAGE
Pono Family Birthday Hub v1.1.15 - Generations Family Tree and Founders
