// Run with CLASSORA_TEST_DOM_MODULE pointing to linkedom's module entry.
// These are DOM + mocked persistence checks, not Firebase emulator tests.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE);
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8');
const {window,document}=parseHTML('<html lang="ar"><body class="classora-authenticated"><div id="lobbyAvatar"></div><div id="settingsModal"><div class="settings-profile-row"><div id="settingsAvatar"></div></div><input id="settingsMotionToggle" type="checkbox"></div><div id="profileModal"><div class="profile-hero"><div class="profile-photo-wrap"></div></div></div></body></html>');
Object.defineProperty(document,'readyState',{value:'complete'});
document.getElementById('settingsMotionToggle').checked=true;
window.HTMLElement.prototype.showModal=function(){this.open=true;this.setAttribute('open','')};
window.HTMLElement.prototype.close=function(){this.open=false;this.removeAttribute('open');queueMicrotask(()=>this.dispatchEvent(new window.Event('close')))};
const timers=new Map();let timerId=0,reduced=false;
const context=vm.createContext({window,document,console,Event:window.Event,MutationObserver:window.MutationObserver,
 matchMedia:()=>({matches:reduced}),setTimeout:fn=>{timers.set(++timerId,fn);return timerId},clearTimeout:id=>timers.delete(id),URL,
 Image:class{set src(value){queueMicrotask(()=>this.onload?.())}},localStorage:{getItem:()=>null}});
window.PythagorasiUser={uid:'owner',displayName:'<b>Fire</b>',role:'student',xp:1000,questShop:{spent:70,owned:['flame'],equipped:'flame'}};
const flush=async()=>{for(let i=0;i<6;i++)await Promise.resolve()};
for(const p of ['assets/classora-locales-v140.js','assets/classora-quest-i18n-v233.js','assets/classora-style-i18n-v237.js'])vm.runInContext(read(p),context);
for(const [,en] of window.ClassoraStyleTranslations.pairs)for(const lang of ['es','ko','de','it','hi','tr'])assert(window.ClassoraLocale.dictionaries[lang][en.trim()]||window.ClassoraLocale.dictionaries[lang][en],lang+': '+en);
for(const lang of ['es','ko','de','it','hi','tr'])assert(window.ClassoraLocale.tFor(lang,'Login name: Ada').endsWith(' Ada'));
console.log('PASS all added settings/shop labels covered in six extra locales; user names preserved');
for(const p of ['assets/classora-fx-settings-v228.js','assets/classora-profile-scenes-v237.js','assets/classora-profile-studio-v232.js'])vm.runInContext(read(p),context);
const host=document.querySelector('.profile-hero');
window.ClassoraProfileScenes.play(host,'supernova');assert.equal(host.querySelectorAll('.cl237-scene').length,1);assert.equal(host.querySelectorAll('.cl237-particle').length,18);
window.ClassoraProfileScenes.play(host,'tatreez');assert.equal(host.querySelectorAll('.cl237-scene').length,1);assert(host.querySelector('.stitch'));
window.ClassoraProfileScenes.stop(host);assert.equal(host.querySelector('.cl237-scene'),null);
for(const mode of ['system','setting','body']){reduced=mode==='system';document.getElementById('settingsMotionToggle').checked=mode!=='setting';document.body.classList.toggle('reduce-motion',mode==='body');window.ClassoraProfileScenes.play(host,'flame');assert.equal(host.querySelector('.cl237-scene'),null)}
reduced=false;document.getElementById('settingsMotionToggle').checked=true;document.body.classList.remove('reduce-motion');
window.ClassoraProfileScenes.play(host,'invalid');assert.equal(host.querySelector('.cl237-scene'),null);
document.getElementById('profileModal').classList.add('open');await flush();assert(host.querySelector('.cl237-scene'));document.getElementById('profileModal').classList.remove('open');await flush();assert.equal(host.querySelector('.cl237-scene'),null);
console.log('PASS opening effects, replay cleanup, close cleanup and reduced-motion settings');
let watcher,detached=0;window.classoraWatchPublicProfile=(uid,cb)=>{watcher=cb;return ()=>detached++};
window.ClassoraProfileScenes.openPublic('friend');watcher({uid:'friend',displayName:'<img src=x>',profileId:'123',profileEffect:'vortex',role:'student'});
let dialog=document.querySelector('.cl237-public-dialog');assert.equal(dialog.querySelector('h3').textContent,'<img src=x>');assert.equal(dialog.querySelector('h3 img'),null);assert(dialog.querySelector('.fx-vortex'));assert(dialog.querySelector('.scene-vortex'));
window.ClassoraProfileScenes.openPublic('second');await flush();assert.equal(document.querySelectorAll('.cl237-public-dialog').length,1);assert.equal(detached,1);
watcher({uid:'second',displayName:'Second',profileEffect:'none',role:'student'});dialog=document.querySelector('.cl237-public-dialog');dialog.close();await flush();assert.equal(detached,2);assert.equal(document.querySelector('.cl237-public-dialog'),null);
console.log('PASS public profile rendering, safe names and snapshot cleanup');
let saves=0;window.classoraSetProfileGif=async()=>{saves++};window.classoraGifStudio.open();dialog=document.getElementById('cl236GifDialog');assert.equal(dialog.querySelectorAll('.cl236-gif-choice').length,14);
dialog.querySelectorAll('.cl236-gif-choice')[6].click();await flush();assert.equal(saves,0);assert(!dialog.querySelector('footer .cl236-action').disabled);dialog.querySelector('footer .cl236-action').click();await flush();assert.equal(saves,1);assert.equal(document.getElementById('cl236GifDialog'),null);
window.classoraGifStudio.open();document.getElementById('cl236GifDialog').close();await flush();assert.equal(document.getElementById('cl236GifDialog'),null);console.log('PASS 14 GIF choices, preview without writes, explicit save and close');
// Exercise actual bridge functions with transactional storage and rejected-public-write mocks.
const html=read('index.html');const extract=(from,to)=>html.slice(html.indexOf(from),html.indexOf(to,html.indexOf(from)));
let stored=structuredClone(window.PythagorasiUser),publicAllowed=false,writes=[],publicCallback;
Object.assign(context,{auth:{currentUser:{uid:'owner'}},db:{},isTeacherLikeProfile:()=>false,normalizeStudentNameKey:n=>n.toLowerCase(),serverTimestamp:()=>123,
 doc:(_db,col,uid)=>col+'/'+uid,setDoc:async(ref,data)=>{if(ref.startsWith('publicProfiles/')){writes.push(data);if('profileEffect'in data&&!publicAllowed)throw Error('permission-denied')}},
 onSnapshot:(_ref,cb)=>{publicCallback=cb;return ()=>{}},classoraShopAuth:()=>window.PythagorasiUser,isSuperAdminProfile:()=>false,
 runTransaction:async(_db,callback)=>{let pending;const out=await callback({get:async()=>({exists:()=>true,data:()=>structuredClone(stored)}),update:(_ref,data)=>{pending=data}});if(pending)stored={...stored,...pending};return out}});
vm.runInContext(extract('function classoraSetPublicStyleReady(','async function securityPhraseHashV2'),context);
vm.runInContext(extract('const arenaShopCatalog=','function classoraArenaAuth'),context);
vm.runInContext(extract('async function classoraArenaBuy(','/* Safe GIF avatar selector'),context);
await vm.runInContext('syncPublicProfile()',context);assert.equal(window.classoraPublicStyleReady,false);assert.equal(writes.length,2);assert(!('profileEffect'in writes[1]));
await assert.rejects(()=>vm.runInContext('classoraArenaBuy("supernova")',context),/style-sync-pending/);assert.equal(stored.questShop.spent,70);
publicAllowed=true;await vm.runInContext('syncPublicProfile()',context);assert.equal(window.classoraPublicStyleReady,true);
await vm.runInContext('classoraArenaBuy("supernova")',context);assert.equal(stored.questShop.spent,420);assert.equal(stored.xp,1000);
await vm.runInContext('classoraArenaBuy("supernova")',context);assert.equal(stored.questShop.spent,420);
await vm.runInContext('classoraArenaEquip("supernova")',context);assert.equal(writes.at(-1).profileEffect,'supernova');
await assert.rejects(()=>vm.runInContext('classoraArenaEquip("vortex")',context),/not-owned/);
stored.xp=420;await assert.rejects(()=>vm.runInContext('classoraArenaBuy("vortex")',context),/insufficient-xp/);
context.auth.currentUser={uid:'second'};document.dispatchEvent(new window.Event('classora-auth-settled'));assert.equal(window.classoraPublicStyleReady,false);
console.log('PASS public-write fallback, purchase gating, price accounting, duplicate protection, ownership and account switching');
