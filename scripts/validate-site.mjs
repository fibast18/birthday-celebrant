// Checks before a PONO Family Birthday Hub GitHub Pages deployment.
// Zero dependencies; run with: node scripts/validate-site.mjs
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const siteFiles = [
  'index.html',
  'sw.js',
  'manifest.webmanifest',
  'pono-family-icon.png',
  'bag.webp',
  'auto-update.js',
];

for (const file of siteFiles) {
  assert.ok(statSync(file).isFile(), `Missing required website file: ${file}`);
  assert.ok(statSync(file).size > 0, `Empty website file: ${file}`);
}

const html = readFileSync('index.html', 'utf8');
const workerScript = readFileSync('sw.js', 'utf8');
const manifest = JSON.parse(readFileSync('manifest.webmanifest', 'utf8'));

assert.match(html, /<!doctype html>/i, 'index.html must be HTML');
assert.match(html, /<title>.*Pono Family Birthday Hub.*<\/title>/i, 'App title missing');
assert.match(html, /bag\.webp/, 'The handbag picture must be referenced');
assert.match(workerScript, /bag\.webp/, 'The PWA service worker must cache the handbag picture');
assert.ok(workerScript.includes('auto-update.js'), 'Offline cache must include the updater');
assert.ok(workerScript.includes('__PONO_BUILD__'), 'SW must have a per-release cache marker');
assert.ok(html.includes('<meta name="pono-build" content="__PONO_BUILD__">'), 'Build marker missing');
assert.ok(html.includes('<script defer src="./auto-update.js"></script>'), 'Update checker not loaded');
assert.ok(readFileSync('auto-update.js', 'utf8').includes('version.json'), 'Update checker must check release version');
assert.equal(manifest.start_url, './index.html', 'Unexpected PWA start URL');
assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0, 'PWA icon missing');

const configuredWorker = html.match(/\bWHEEL_API_BASE\s*=\s*['"]([^'"]+)['"]/);
assert.ok(configuredWorker, 'Missing WHEEL_API_BASE setting');
assert.match(
  configuredWorker[1],
  /^https:\/\/[a-z0-9.-]+(?:\/[^\s?#]*)?\/?$/i,
  'WHEEL_API_BASE must be an HTTPS URL without a placeholder'
);
assert.ok(!configuredWorker[1].includes('PASTE_'), 'Unconfigured WHEEL_API_BASE URL');
assert.ok(!html.includes('WHEEL_BUDGET_CENTS'), 'Private wheel budget must not appear in public HTML');
assert.ok(!/\bsk-(?:proj-)?[A-Za-z0-9_-]{16,}/.test(html), 'Potential OpenAI secret found in HTML');

const png = readFileSync('pono-family-icon.png');
assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'PONO logo is not a PNG');
const webp = readFileSync('bag.webp');
assert.equal(webp.toString('ascii', 0, 4), 'RIFF', 'Bag photo is not RIFF/WebP');
assert.equal(webp.toString('ascii', 8, 12), 'WEBP', 'Bag photo is not WebP');

console.log('PASS: All 6 website source files exist and are valid.');
console.log('PASS: Cloudflare Worker URL is configured (no private budget in public HTML).');
console.log('PASS: PWA manifest, service worker and handbag asset checks passed.');
