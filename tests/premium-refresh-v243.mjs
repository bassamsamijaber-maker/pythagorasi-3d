import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE),read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const {window,document}=parseHTML('<html lang="ar"><head></head><body><div id="platformLobby"><div id="classoraPromoCenter"></div><div id="classoraStudentDashboard"></div></div><div id="settingsModal"><div class="modalbox"><div class="settings-profile-row"></div></div></div></body></html>');
Object.defineProperty(document,'readyState',{value:'complete'});
const memory=new Map([['classora-site-theme','embroidery']]);const storage={getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)};
window.matchMedia=()=>({matches:false});window.requestAnimationFrame=fn=>fn();window.PythagorasiUser={uid:'qa',displayName:'Test Learner',role:'student'};let clicked=0;
const target=document.createElement('button');target.id='lobbyExamBtn';target.onclick=()=>clicked++;document.body.append(target);
const ctx=vm.createContext({window,document,console,localStorage:storage,MutationObserver:window.MutationObserver,Event:window.Event,requestAnimationFrame:fn=>fn(),setInterval:()=>0,clearInterval:()=>{},setTimeout:()=>0,clearTimeout:()=>{},NodeFilter:{SHOW_TEXT:4},URL,location:{href:'https://classora.study/'}});
for(const f of ['assets/classora-locales-v140.js','assets/classora-style-i18n-v237.js','assets/classora-quest-i18n-v233.js','assets/classora-premium-i18n-v243.js'])vm.runInContext(read(f),ctx);
for(const pair of window.ClassoraPremiumWords.pairs)for(const lang of ['es','ko','de','it','hi','tr'])assert(window.ClassoraLocale.dictionaries[lang][pair[1]],lang+': '+pair[1]);
vm.runInContext(read('assets/classora-learning-front-v214.js'),ctx);vm.runInContext(read('assets/classora-premium-v243.js'),ctx);
assert.equal(document.querySelectorAll('.cl243-learning-art').length,1);
assert.equal(document.getElementById('classoraLearningFront').firstElementChild.className,'cl214-hero');
assert(document.getElementById('classoraLearningFront').contains(document.getElementById('classoraPromoCenter')));
document.querySelector('.cl214-hero [data-cl-action="exam"]').click();assert.equal(clicked,1);
vm.runInContext(read('assets/classora-premium-v243.js'),ctx);assert.equal(document.querySelectorAll('.cl243-learning-art').length,1);
console.log('PASS eight-language home copy, new hero, retained existing exam handler and idempotent layout');
// Retired theme migrates, with exactly two accessible appearance choices.
let appearance=read('assets/classora-appearance-v207.js').replace(/^import .*;\n/gm,'').replaceAll('import.meta.url',"'https://classora.study/assets/classora-appearance-v207.js'");
// Avoid walking decorative icons: not part of preference migration under test.
appearance=appearance.replace(' attachIcons();','');vm.runInContext(appearance,ctx);
assert.equal(memory.get('classora-site-theme'),'original');assert.equal(document.body.dataset.classoraTheme,'original');
assert.equal(document.querySelectorAll('[data-cl-theme]').length,2);assert.equal(document.querySelector('[data-cl-theme="embroidery"]'),null);
document.querySelector('[data-cl-theme="morning"]').click();assert.equal(document.body.dataset.classoraTheme,'morning');
assert(!document.getElementById('classoraAppearanceSettings').textContent.includes('24'));
console.log('PASS retired seasonal preference migration, no seasonal control, working morning option');
const index=read('index.html'),sw=read('service-worker.js'),home=read('assets/classora-home-v112.js');assert(!index.includes('mountHeritage'));assert(!index.includes('classora-heritage-v191.css'));assert(!sw.includes('heritage-needle-background'));assert(!home.includes('classoraHeritage'));assert(!read('heritage-draw.html').includes('<canvas'));
const css=read('assets/classora-premium-v243.css');assert(css.includes('prefers-reduced-motion'));assert(css.includes('@media(max-width:600px)'));assert(css.includes('safe-area-inset-bottom'));assert(css.includes('pointer-events:none'));
console.log('PASS seasonal event removed from app/promo/precache, retired standalone route, reduced-motion and mobile styles');
