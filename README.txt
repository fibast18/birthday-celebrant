PONO FAMILY BIRTHDAY HUB v1.1.13 — PONO DAILY
================================================

Upload these four files to your existing GitHub Pages repository root:
  index.html
  sw.js
  manifest.webmanifest
  pono-family-icon.png

Keep your GitHub Pages URL unchanged. To update an installed offline Home Screen
app, visit the website online once and reload after the service worker updates.
No Firestore Security Rules change is required for this release. firestore.rules
is included for reference only; birthday and fund records retain their schema.

NEW:
* PONO DAILY tab, usable without login on phone or laptop.
* Deterministic, Asia/Manila daily family surprise with 48 curated prompts.
* One daily multiple-choice family quiz generated from the existing birthdates.
* A private, local-only answer/check-in history (not shared/synced across devices).
* Share buttons for sending the day's prompt and quiz challenge via phone share
  sheet or copying a message for the family chat.
* Offline availability after at least one successful online app + birthday sync.
* Accessible keyboard navigation, mobile-responsive layout, reduced motion.

EXISTING FEATURES PRESERVED:
* Firebase Firestore project birthday-celebrant-f5804 and admin UID unchanged.
* Public-read birthdays and fund; only existing admin can edit.
* Birthday Fund matrix and year-specific contributions (unchanged).
* Birthday music / personalized spoken-name greeting (user taps play).
* Existing 3D clown and 2D fallback.
* PONO logo, birthday countdowns, calendar alerts, imports/exports,
  search-clear, neon-yellow developer credit, Firebase sync and offline PWA.

NOTES:
* Daily challenges are identical for everyone who has the same date and synced
  family birthdays, without publishing daily documents to Firestore.
* Visitor answers and opened-surprise history are stored ONLY locally in that
  browser. Clearing browser/app storage resets them; other devices don't sync.
* No personal comments, photos, votes or other public user-generated data are
  collected in this release.
* The browser must load the site successfully online once before offline use.
* A birthday quiz cannot generate without at least four saved family records.

COMMIT MESSAGE:
Pono Family Birthday Hub v1.1.13 - Add PONO Daily Surprise and Family Quiz
