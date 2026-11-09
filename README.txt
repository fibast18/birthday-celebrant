Pono Family Birthday Hub v1.1.11 — Birthday Fund

Upload index.html, sw.js, manifest.webmanifest and pono-family-icon.png together to the root of your existing GitHub Pages repository.

IMPORTANT: Firebase Console > Firestore Database > Rules: paste firestore.rules and Publish. If this Firebase project contains other applications, MERGE the rules rather than overwriting their collections. Do NOT upload private birthday import files or Firebase user passwords to GitHub.

Birthday Fund: the public can view contributions, but only your preconfigured administrator login can change them. Gifts are shown in Philippine pesos with amounts kept in integer centavos. The app records amounts but does not receive or transfer money. The table has donors on rows and celebrants in columns, with self-contribution cells blank. On phones, selected celebrant mode is the default; use Full family matrix to see the cross-table.

Each birthday cycle has its own year. The card automatically shows the fund for the upcoming birthday, so the previous birthday year's amount is replaced by a fresh next-year total the day after the event; older funds remain in the matrix's year selector. Contributions are public like the birthday list, so do not store private financial details.

The offline feature requires at least one successful online load per device to cache the app. After online syncing, fund amounts can be read offline from the last cached snapshot; entries require internet. No changes to your existing birthdays collection or data are required.

Suggested GitHub commit message:
Pono Family Birthday Hub v1.1.11 - Birthday Fund and Family Contribution Matrix
