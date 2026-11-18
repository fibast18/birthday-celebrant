/* PONO Family Birthday Hub · v1.1.32
 * Small, privacy-preserving release checker. No Firebase, Cloudflare, or personal
 * data is read or transmitted. Only same-origin version.json and index.html are fetched.
 * Avoid reloading during a Lucky Wheel spin, Ask Pono chat, or unfinished edits.
 */
(() => {
  'use strict';
  const marker = document.querySelector('meta[name="pono-build"]');
  const runningBuild = marker?.getAttribute('content')?.trim();
  const validBuild = value => typeof value === 'string' && /^[0-9a-f]{24}$/.test(value);
  // Raw GitHub source and local development have an unstamped marker: no polling.
  if (!validBuild(runningBuild)) return;

  const siteRoot = new URL('./', document.baseURI);
  const versionURL = new URL('version.json', siteRoot);
  const pageURL = new URL('index.html', siteRoot);
  let newBuild = '';
  let checking = false;
  let installing = false;
  let lastTry = 0;
  let lastInteraction = Date.now();

  const markInteraction = () => { lastInteraction = Date.now(); };
  for (const type of ['pointerdown', 'keydown', 'input']) {
    document.addEventListener(type, markInteraction, {passive: true});
  }

  function safeToRefresh() {
    if (!navigator.onLine || document.visibilityState !== 'visible') return false;
    // Do not interrupt someone who is currently interacting with the app.
    if (Date.now() - lastInteraction < 45000) return false;
    // A pending spin or AI answer is explicitly protected by the main app.
    try {
      if (window.__ponoCanAutoRefresh?.() === false) return false;
    } catch { return false; }
    if (document.querySelector('dialog[open], .wheel-disk.is-spinning')) return false;
    if (document.getElementById('askPonoPanel')?.hidden === false) return false;
    if (document.getElementById('askPonoAiConsent')?.hidden === false) return false;
    if (document.getElementById('search')?.value?.trim()) return false;
    if (document.getElementById('askPonoInput')?.value?.trim()) return false;
    if (document.activeElement?.matches?.('input, textarea, select, [contenteditable="true"]')) return false;
    return true;
  }

  async function applyWhenSafe() {
    if (!validBuild(newBuild) || installing || !safeToRefresh()) return;
    if (Date.now() - lastTry < 30000) return;
    installing = true;
    lastTry = Date.now();
    try {
      // Confirm the NEW HTML is already on the public site. Prevents an update
      // loop while GitHub Pages/CDN rollout is still in progress.
      const checkURL = new URL(pageURL);
      checkURL.searchParams.set('pono_release_check', newBuild);
      const response = await fetch(checkURL.href, {cache: 'no-store'});
      if (!response.ok) return;
      const nextHTML = await response.text();
      if (!nextHTML.includes('<meta name="pono-build" content="' + newBuild + '">')) return;

      // Update the offline worker too. Do not delay the website refresh if an
      // iOS/Safari worker update is unavailable or takes longer.
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration()
          .then(reg => reg?.update()).catch(() => {});
      }

      const destination = new URL(location.href);
      destination.searchParams.set('pono_release', newBuild);
      location.replace(destination.href);
    } catch (error) {
      console.warn('PONO automatic update will retry after reconnection.', error);
    } finally {
      installing = false;
    }
  }

  async function checkForUpdate() {
    if (checking || !navigator.onLine) return;
    checking = true;
    try {
      const request = new URL(versionURL);
      request.searchParams.set('check', String(Date.now()));
      const response = await fetch(request.href, {cache: 'no-store'});
      if (!response.ok) return;
      const data = await response.json();
      if (validBuild(data.build) && data.build !== runningBuild) {
        newBuild = data.build;
        await applyWhenSafe();
      }
    } catch {
      // No network, offline-first mode, or an older deployment without the
      // version marker: retain the current app and try again later.
    } finally {
      checking = false;
    }
  }

  // Detect changes at launch, on connection recovery, and when returning to
  // the app from another iPhone or Mac app. Use a light two-minute poll while open.
  window.addEventListener('load', () => setTimeout(() => { void checkForUpdate(); }, 2000), {once: true});
  window.addEventListener('online', () => { void checkForUpdate(); });
  window.addEventListener('pageshow', () => { void checkForUpdate(); });
  window.addEventListener('focus', () => { void checkForUpdate(); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      void checkForUpdate();
      void applyWhenSafe();
    }
  });
  setInterval(() => { void checkForUpdate(); }, 2 * 60 * 1000);
  setInterval(() => { void applyWhenSafe(); }, 15 * 1000);
})();
