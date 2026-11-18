// Smoke-test the shipped auto-update logic without third-party dependencies.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const program = readFileSync('auto-update.js', 'utf8');
const oldBuild = 'a'.repeat(24);
const newBuild = 'b'.repeat(24);

function createTest({release=newBuild,online=true,spin=false,search=''}={}) {
  const listeners = new Map();
  const timers = [];
  const intervals = [];
  const visited = [];
  let now = 1732000000000;
  let busySpin = spin;
  let searchValue = search;
  let fetchCount = 0;

  const event = (type, cb) => {
    if (!listeners.has(type)) listeners.set(type, []);
    listeners.get(type).push(cb);
  };
  const document = {
    baseURI:'https://example.test/birthday-celebrant/index.html',
    visibilityState:'visible',
    activeElement:{matches:()=>false},
    addEventListener:event,
    querySelector:selector => selector === 'meta[name="pono-build"]'
      ? {getAttribute:()=>oldBuild} : null,
    getElementById:id=>({
      search:{get value(){return searchValue;}},
      askPonoPanel:{hidden:true},
      askPonoAiConsent:{hidden:true},
      askPonoInput:{value:''}
    })[id]??null
  };
  const location = {
    href:'https://example.test/birthday-celebrant/index.html#lucky-wheel',
    replace: value => visited.push(value)
  };
  const navigator = {
    get onLine(){return online;},
    serviceWorker:{getRegistration:async()=>({update:async()=>{}})}
  };
  const window = {
    addEventListener:event,
    __ponoCanAutoRefresh:()=>!busySpin
  };
  const FakeDate = class extends Date {static now(){return now;}};
  const fetch = async url => {
    fetchCount++;
    if(String(url).includes('version.json'))return {ok:true,json:async()=>({build:release})};
    return {ok:true,text:async()=>'<meta name="pono-build" content="' + release + '">'};
  };
  runInNewContext(program,{
    window,document,location,navigator,URL,Date:FakeDate,
    fetch,
    setInterval:(fn,ms)=>{intervals.push({fn,ms});},
    setTimeout:(fn,ms)=>{timers.push({fn,ms});},
    console
  });
  const drain=async()=>{for(let n=0;n<12;n++)await new Promise(done=>setImmediate(done));};
  return {
    visited,
    get fetchCount(){return fetchCount;},
    advance(ms){now+=ms;},
    spin(value){busySpin=value;},
    search(value){searchValue=value;},
    async launch(){for(const cb of listeners.get('load')??[])cb();const timer=timers.find(t=>t.ms===2000);assert.ok(timer,'launch update checker missing');timer.fn();await drain();},
    async tick(){for(const job of intervals.filter(x=>x.ms===15000))job.fn();await drain();}
  };
}

const changed=createTest();
changed.advance(60000);
await changed.launch();
assert.equal(changed.visited.length,1,'Idle online app should automatically refresh');
assert.match(changed.visited[0], /pono_release=bbbb/);
assert.match(changed.visited[0], /#lucky-wheel$/, 'Preserve open app section');

const unchanged=createTest({release:oldBuild});
unchanged.advance(60000);
await unchanged.launch();
assert.equal(unchanged.visited.length,0,'Unchanged release must not refresh');

const spinning=createTest({spin:true});
spinning.advance(60000);
await spinning.launch();
assert.equal(spinning.visited.length,0,'Never interrupt the Lucky Wheel');
spinning.spin(false);
await spinning.tick();
assert.equal(spinning.visited.length,1,'Refresh when spin ends and app becomes safe');

const editing=createTest({search:'Rianne'});
editing.advance(60000);
await editing.launch();
assert.equal(editing.visited.length,0,'Do not overwrite active search');
editing.search('');
await editing.tick();
assert.equal(editing.visited.length,1,'Refresh when edit is cleared');

const offline=createTest({online:false});
offline.advance(60000);
await offline.launch();
assert.equal(offline.visited.length,0,'Offline app should not navigate');
assert.equal(offline.fetchCount,0,'Offline app should not query release network');

console.log('PASS: Release refresh, no-change, spin guard, form guard and offline guard.');
