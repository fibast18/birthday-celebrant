/* PONO Family Birthday Hub v1.1.9 – offline-first shell and read-only cached birthdays.
   Hosted on HTTPS GitHub Pages. First installation requires internet.
   Firebase API requests, user account information and Firestore responses are NEVER cached here. */
const VERSION='v1.1.9';
const CACHE_NAME='pono-birthday-shell-'+VERSION;
const APP_URL=new URL('./index.html',self.registration.scope).href;
const SHELL=['./index.html','./manifest.webmanifest','./pono-family-icon.png'];
const MODULES=[
  'https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js',
  'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js'
];
const permittedModuleURL=(url)=>{
  try{const u=new URL(url);return (u.protocol==='https:'&&(
    (u.hostname==='www.gstatic.com'&&u.pathname.startsWith('/firebasejs/13.1.0/'))||
    (u.hostname==='cdn.jsdelivr.net'&&u.pathname.startsWith('/npm/three@0.180.0/'))
  ))}catch{return false}
};
const cacheModuleGraph=async(url,seen,depth=0)=>{
 if(seen.has(url)||seen.size>100||depth>12||!permittedModuleURL(url))return;
 seen.add(url);
 const store=await caches.open(CACHE_NAME);
 try{
   let response=await store.match(url);
   if(!response){
     response=await fetch(url,{mode:'cors',cache:'reload'});
     if(!response.ok || response.type==='opaque')return;
     await store.put(url,response.clone());
   }
   const js=await response.text();
   // Discover any transitive ESM dependencies (Firebase often provides bundled modules).
   const re=/(?:\bimport\s*(?:[\w\s{},*]+\s+from\s*)?|\bexport\s*(?:[\w\s{},*]+\s+from\s*))['"]([^'"]+)['"]|\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/gm;
   let match;const next=[];
   while((match=re.exec(js))){
     try{
       const spec=match[1]||match[2];
       const resolved=new URL(spec,url).href;
       if(permittedModuleURL(resolved)&&!seen.has(resolved))next.push(resolved);
     }catch{}
   }
   await Promise.allSettled(next.map(dep=>cacheModuleGraph(dep,seen,depth+1)));
 }catch(e){console.warn('Optional offline module cache unavailable',url,e)}
};
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
   const store=await caches.open(CACHE_NAME);
   // The HTML shell is the minimum guaranteed offline asset once online installation succeeds.
   await store.add(new Request(APP_URL,{cache:'reload'}));
   await Promise.allSettled(SHELL.slice(1).map(path=>store.add(new URL(path,self.registration.scope).href)));
   // Warm Firebase and 3D module dependencies on the FIRST online installation.
   // The app falls back to its bundled SVG clown and saved birthday snapshot if unavailable.
   await Promise.allSettled(MODULES.map(url=>cacheModuleGraph(url,new Set())));
   await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith('pono-birthday-shell-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 const local=url.origin===self.location.origin&&url.pathname.startsWith(new URL(self.registration.scope).pathname);
 const isDocument=req.mode==='navigate';
 const isModule=permittedModuleURL(req.url);
 const isStatic=local&&(url.pathname.endsWith('/index.html')||url.pathname.endsWith('/manifest.webmanifest')||url.pathname.endsWith('/pono-family-icon.png'));
 if(!isDocument&&!isModule&&!isStatic)return; // NEVER cache Firebase APIs or auth network responses.
 if(!local&&!isModule)return;
 event.respondWith((async()=>{
   const cache=await caches.open(CACHE_NAME);
   const cacheKey=isDocument?APP_URL:req;
   // Prefer cached app during outages; get latest copy when online.
   if(isDocument){
     try{
       const live=await fetch(req);
       if(live.ok&&local)await cache.put(APP_URL,live.clone());
       return live;
     }catch{const saved=await cache.match(APP_URL);if(saved)return saved;return Response.error()}
   }
   const cached=await cache.match(cacheKey);
   if(cached)return cached;
   try{
     const response=await fetch(req);
     if(response.ok&&response.type!=='opaque')await cache.put(cacheKey,response.clone());
     return response;
   }catch{return Response.error()}
 })());
});
