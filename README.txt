PONO FAMILY BIRTHDAY HUB — v1.1.18 · FAMILY TREE CORRECTIONS

CHANGELOG
- Corrected the Bernardo & Maricar branch: siblings Irish Ann Pono and Jhon Kyle Pono.
- Irish Ann Pono and Clint Silvano are partners with their child Thyme Silvano under them.
- Removed duplicate/missing Family Tree placeholder cards labeled "John Kyle Pono" and "Thyme".
- Safely matches older birthday record spellings ("John Kyle Pono" / "Thyme") to
  the corrected tree names, displaying actual birthday dates without adding new records.
- If an existing parent link uses the old name, the tree now deduplicates by identity.
- Birthday records in Firestore were not renamed or deleted. Change original data
  spelling later using administrator Edit if needed.

GITHUB PAGES DEPLOYMENT
1) Extract the ZIP and upload these four files to your current GitHub repository:
   index.html, sw.js, manifest.webmanifest, pono-family-icon.png.
2) Replace the existing files and commit directly to the main branch.
3) Commit message: Pono Family Birthday Hub v1.1.18 - Correct Bernardo and Maricar Family Tree
4) Load the published app online and refresh so the service worker updates.

FIREBASE
- No Firestore rules changes, migrations, or database edits needed.
- Keep existing public-view/admin-write permissions.
- The included firestore.rules is for reference, not mandatory to republish.

ALL OTHER FEATURES PRESERVED
Birthday records, funds and donor matrix, family tree relationships,
PONO DAILY, daily Lucky Wheel, birthday greeting/song, 3D clown,
logo and icon, offline PWA, Firebase config and administrator UID,
capitalized neon-yellow footer credit.

NOTE: Full names, dates of birth, family tree and donations remain publicly visible
because the app's public-view setting has not been changed.
