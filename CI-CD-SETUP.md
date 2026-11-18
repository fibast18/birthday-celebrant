# PONO Family Birthday Hub — Git-based CI/CD

This repository contains only the public GitHub Pages application. Your Firebase family
data and the private Cloudflare Worker/D1 cash-prize system remain untouched.

## One-time GitHub Pages switch

1. Open https://github.com/fibast18/birthday-celebrant/settings/pages
2. Under **Build and deployment > Source**, choose **GitHub Actions**.
3. Open https://github.com/fibast18/birthday-celebrant/actions
4. Run **PONO Family Birthday Hub — Validate and Deploy** using **Run workflow**,
   or push a commit to main. Wait for both jobs to succeed.
5. Verify the site at https://fibast18.github.io/birthday-celebrant/

The workflow runs automatic validation and stages ONLY:
- index.html (stamped with the current public asset build hash)
- sw.js
- manifest.webmanifest
- pono-family-icon.png
- bag.webp
- auto-update.js
- version.json (generated automatically during deployment)

It never publishes firestore.rules, worker scripts, database SQL, keys, or development files.

## One-time Mac setup

In Mac Terminal:

```bash
cd ~/Documents
git clone https://github.com/fibast18/birthday-celebrant.git
cd birthday-celebrant
git status
```

If Git says the folder already exists, use that checked-out folder rather than cloning it twice.
This is your Git working directory for future app updates.

## Every later website update — no manual upload

Edit the files inside the Git working directory with your normal editor.
If you created an updated ZIP elsewhere, extract it FIRST and copy only its five
public website files into this Git working directory (never copy the private Worker
folder or SQL files).

```bash
cd ~/Documents/birthday-celebrant
git pull --ff-only origin main
node --check sw.js
node scripts/validate-site.mjs
git add index.html sw.js manifest.webmanifest pono-family-icon.png bag.webp
git commit -m "Update PONO Family Birthday Hub"
git push origin main
```

If you changed only some website files, git add still stages just their changes.
If there are no changes, Git will report nothing to commit.
If validation fails, fix the problem before pushing.
The GitHub Actions workflow automatically checks and publishes each push to main.
For a safer review process, push to a feature branch and open a pull request:
pull requests run validation but do NOT deploy until merged into main.

## Automatic updates on iPhone, Mac and installed PWA (v1.1.32)

After a successful GitHub Pages deployment, the hosted app checks its own release
marker on launch, reconnect, foreground/focus, and every two minutes while open.
When it sees updated public assets, it downloads/verifies the new HTML and
refreshes itself after 45 seconds without user interaction. It pauses automatic
refresh during a Lucky Wheel spin, unfinished text input, open edit dialog or
Ask Pono chat. The web app needs an internet connection to fetch an update; it
continues operating offline on the previously cached release.

Version values are hashes of the six PUBLIC assets only. README changes and
other metadata changes do not cause unnecessary website refreshes. This does NOT
monitor your local Mac files: you still need to save, commit and push changes
to GitHub (or merge a pull request). A local file cannot deploy itself without
a configured Mac-side watcher, which this project intentionally does not install.

Existing installed versions without the release checker need to reload the
website once after the v1.1.32 rollout. Future releases refresh automatically
when online and safe. No iPhone Home Screen removal/reinstallation is required.

Track progress at https://github.com/fibast18/birthday-celebrant/actions
Site: https://fibast18.github.io/birthday-celebrant/

**Important:** Update the PWA service worker cache version for app releases that
change cached files so installed phones receive the new version.

## Private Cloudflare backend — intentionally separate

Existing Worker URL:
https://pono-family-wheel-2026.rjpono.workers.dev

Keep the Worker source, D1 allocation logic, migration/schema files, Cloudflare
credentials and API secrets OUT of this public repository. Changing the public
website is now automatic; Cloudflare Worker code deployment is not automatically
changed by this workflow.

To automate private Worker code releases too, establish a SEPARATE **private**
GitHub repository containing only Worker source, connect a scoped Cloudflare API
token as a repository Actions secret, and deploy with Wrangler from that private
repository. Never put a Cloudflare API token or OpenAI API secret into public HTML,
committed source files, or workflow YAML.

## What stays the same

Firebase birthday records, tree and funds, Cloudflare D1 cash budget and awards,
and the 25th-spin handbag counter are not modified by this CI/CD setup.
