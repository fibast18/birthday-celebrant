PONO FAMILY BIRTHDAY HUB — v1.1.14 Family Tree
==============================================

NEW: Public Family Tree tab displays family branches from the existing Firebase
birthday groups. Tap a person to see birthday and confirmed connections.
Only the Firebase administrator can add/remove explicit Parent → Child and
Partner links. Linking does NOT modify birthdays or Birthday Funds.

DEPLOYMENT (GitHub Pages)
1. Extract this ZIP.
2. Upload index.html, sw.js, manifest.webmanifest, pono-family-icon.png
   to the SAME ROOT folder of your existing birthday-celebrant repository.
3. In Firebase Console > Firestore Database > Rules, merge or replace your
   existing rules with firestore.rules included here and click PUBLISH.
   The only NEW collection permission is familyTree/relationships.
   If this Firebase project hosts any other applications, MERGE their rules;
   do NOT discard unrelated permissions.
4. Reopen GitHub Pages online once to update the offline service worker.
5. Open FAMILY TREE; click a person to open their profile. Sign in as admin
   to click "Connect relatives" and enter verified relationships.

PRIVACY
The full birthday dates are already public under current site policy.
New confirmed parent-child and partner links will also be publicly readable.
Do not add connections you do not wish to publish. The tree does not infer
parentage from matching surnames or household labels.

OFFLINE
Previously synchronized family member info and relations remain available
read-only when offline on devices that have loaded the app online before.
Completely new devices still need an initial online visit to install the app.

PRESERVED
Firebase project birthday-celebrant-f5804; Firebase administrator UID;
birthday records, Birthday Funds, member contributions matrix, personalized
Birthday Song, PONO DAILY, 3D clown, PWA/offline, PONO icon, and developer credit.

GITHUB COMMIT MESSAGE
Pono Family Birthday Hub v1.1.14 - Interactive Family Tree
