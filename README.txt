Pono Family Birthday Hub v1.1.12 — Birthday Song & Personalized Greeting

CUMULATIVE UPDATE from v1.1.11. Upload these 4 files from the ZIP to your existing GitHub Pages repository root, replacing the previous versions:
  index.html
  sw.js
  manifest.webmanifest
  pono-family-icon.png

The matching firestore.rules file is provided for reference; its PERMISSIONS HAVE NOT CHANGED from v1.1.11. You do not need to republish Firestore rules for this version. The existing birthdayFunds, birthdays and legacy optional family collections are unchanged.

New: When the app detects one or more birthdays today (Asia/Manila date, including previously synced offline records), it shows a prominent Birthday Surprise panel. A visitor taps 'Play Birthday Surprise' to hear an instrumental birthday melody made by the browser with Web Audio and an optional SPOKEN personalized birthday greeting using the browser's built-in text-to-speech. The greeting is not a studio-quality sung-name recording. Multiple celebrants each receive a greeting and tune in turn. Stop and Replay controls are available. The existing 3D clown continues dancing. No paid APIs, song MP3s or remote sound assets are used.

IMPORTANT: Browsers such as Safari/iOS and Chrome typically block automatically playing sound until a user interacts with the webpage. Accordingly the music requires one tap; no audio plays on page load. To support offline sound, first open this GitHub-hosted app ONCE while ONLINE on each device to save the shell and synced birthday data. Offline music uses browser-generated tones. Spoken names depend on the voices available on that device, which can vary offline. If voices are missing or unavailable, music still works.

The app remains public-read / administrator-write. The Firebase configuration, admin UID, birthday funds, contribution matrix, existing data schema, service worker offline assets, PONO branding, 3D clown, and neon-yellow footer credit are retained. Contributions are recorded values, not transferred funds.

GitHub commit message:
Pono Family Birthday Hub v1.1.12 - Personalized Birthday Music and Greeting
