/* Stages only approved public assets for GitHub Pages, then embeds a
 * content-addressed build id into the served HTML. A source-only documentation
 * change does not trigger needless PWA refreshes.
 */
import {createHash} from 'node:crypto';
import {copyFileSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

const publicFiles = [
  'index.html', 'sw.js', 'manifest.webmanifest',
  'pono-family-icon.png', 'bag.webp', 'auto-update.js'
];
const hash = createHash('sha256');
for (const name of publicFiles) {
  hash.update(name + '\0');
  hash.update(readFileSync(name));
}
const build = hash.digest('hex').slice(0, 24);
const site = '_site';
mkdirSync(site, {recursive:true});
for (const name of publicFiles) copyFileSync(name, join(site,name));
const index = readFileSync(join(site,'index.html'), 'utf8');
const marker = '<meta name="pono-build" content="__PONO_BUILD__">';
if (!index.includes(marker)) throw new Error('Missing version marker in index.html');
const rendered = index.replace(marker, '<meta name="pono-build" content="' + build + '">');
writeFileSync(join(site,'index.html'), rendered);
// Stamp the service worker on EVERY public release, not just on SW edits.
// This guarantees new offline caches for updated HTML, images and scripts.
const worker = readFileSync(join(site,'sw.js'), 'utf8');
if (!worker.includes('__PONO_BUILD__')) throw new Error('SW build marker missing');
writeFileSync(join(site,'sw.js'), worker.replace('__PONO_BUILD__', build));
writeFileSync(join(site,'version.json'), JSON.stringify({build}, null, 2) + '\n');
writeFileSync(join(site,'.nojekyll'), '');
if (!rendered.includes('<meta name="pono-build" content="' + build + '">')) {
  throw new Error('Failed to stamp the public HTML');
}
console.log('PONO website staged with automatic update build ' + build);
console.log('Published assets: ' + publicFiles.join(', ') + ', version.json');
