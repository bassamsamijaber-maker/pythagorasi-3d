import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let window,document,dom;
if(process.env.CLASSORA_TEST_DOM_MODULE){
 const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE);({window,document}=parseHTML('<html lang="en"><body><div id="platformLobby"><div class="lobby-shell"><div class="learning-hub"></div></div></div></body></html>'));
 Object.defineProperty(window.HTMLSelectElement.prototype,'value',{configurable:true,get(){return (this.querySelector('option[selected]')||this.querySelector('option'))?.getAttribute('value')??(this.querySelector('option[selected]')||this.querySelector('option'))?.textContent??''},set(value){for(const o of this.querySelectorAll('option')){if((o.getAttribute('value')??o.textContent)===String(value))o.setAttribute('selected','');else o.removeAttribute('selected')}}});
 window.Element.prototype.scrollIntoView=function(){};window.Element.prototype.scrollTo=function({top=0}={}){this.scrollTop=top};
}else{
 const {JSDOM}=require(process.env.CLASSORA_TEST_NODE_MODULES?process.env.CLASSORA_TEST_NODE_MODULES+'/jsdom':'jsdom');dom=new JSDOM('<html lang="en"><body><div id="platformLobby"><div class="lobby-shell"><div class="learning-hub"></div></div></div></body></html>',{url:'https://classora.study/',pretendToBeVisual:true});({window}=dom);({document}=window);
}
const memory=()=>{const data=new Map();return {getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,String(v)),removeItem:k=>data.delete(k)}};
for(const [key,value] of Object.entries({window,document,localStorage:memory(),sessionStorage:memory(),MutationObserver:window.MutationObserver,Event:window.Event,CustomEvent:window.CustomEvent,requestAnimationFrame:f=>setTimeout(()=>f(Date.now()),0),cancelAnimationFrame:clearTimeout,getComputedStyle:()=>({})}))globalThis[key]=value;
const frames=new Map();let frameSeq=0;
globalThis.requestAnimationFrame=fn=>{frames.set(++frameSeq,fn);return frameSeq};globalThis.cancelAnimationFrame=id=>frames.delete(id);
if(!window.HTMLInputElement.prototype.checkValidity)window.HTMLInputElement.prototype.checkValidity=function(){return this.value!==''&&Number.isFinite(+this.value)&&(this.min===''||+this.value>=+this.min)&&(this.max===''||+this.value<=+this.max)};
const {CURRICULUM_DATA:G,mountCurriculum}=await import('../assets/curriculum-v97.js?v=129');
let language='ar';const curriculum=mountCurriculum({language:()=>language,profile:()=>null,isGuest:()=>false,isTeacher:()=>false,toast:()=>{}}),root=document.querySelector('#classoraCurriculumModal');
const warn=console.warn;console.warn=(...a)=>{if(a[0]!=='Classora topic question bank incomplete')warn(...a)};
let pages=0,steps=0;const subjects=new Set(),englishKinds=new Set();
for(const lang of ['ar','en']){language=lang;for(const [grade,groups]of Object.entries(G))for(const [subject,topics]of Object.entries(groups))for(const raw of topics){
 const title=typeof raw==='string'?raw:raw.title;curriculum.openAt(grade,subject,title);const studio=root.querySelector('.cm-studio');assert(studio,`${subject}: ${title}`);assert(studio.querySelector('.cl-workbench'),`${subject}: ${title} missing workbench`);
 const guide=studio.querySelector('[data-wb="guide"]');guide.click();assert.equal(guide.getAttribute('aria-expanded'),'true');assert(studio.querySelector('.cl-highlight'),title);assert(studio.querySelector('.cl-guide-detail').textContent.trim(),title);
 const buttons=[...studio.querySelectorAll('[data-wb-step]')];for(let i=0;i<buttons.length;i++){studio.querySelector(`[data-wb-step="${i}"]`).click();await Promise.resolve();assert(studio.querySelector('.cl-highlight'));assert(!/undefined|NaN/.test(studio.querySelector('.cl-guide-detail').textContent),title);steps++}
 studio.querySelector('[data-wb="end"]').click();assert(studio.querySelector('.cl-guide').hidden);assert.equal(studio.querySelectorAll('.cl-highlight').length,0);
 const count=studio.querySelectorAll('[data-token],[data-part],[data-event]').length;studio.querySelector('[data-wb="save"]').click();assert.equal(studio.querySelector('.cl-comparison').children.length,2);assert.equal(studio.querySelectorAll('[data-token],[data-part],[data-event]').length,count,'snapshot must not copy live hooks');
 const saved=studio.querySelector('.cl-comparison').children[0].innerHTML;
 const preset=studio.querySelector('[data-wb-preset="1"]')||studio.querySelector('[data-wb-preset="0"]');if(preset){preset.click();await Promise.resolve();assert.equal(studio.querySelector('.cl-comparison').children[0].innerHTML,saved,'saved state must stay immutable')}
 studio.querySelector('[data-wb="clear"]').click();assert(studio.querySelector('.cl-comparison').hidden);assert.equal(studio.querySelector('.cl-comparison').children.length,0);
 assert(!/NaN/.test(studio.textContent)&&!/>undefined</.test(studio.innerHTML),`${subject}: ${title}`);const kind=studio.querySelector('[data-language-model]')?.dataset.languageModel;if(kind)englishKinds.add(kind);pages++;subjects.add(subject);
}}
assert.equal(subjects.size,7);assert(englishKinds.size>=14,`Only ${englishKinds.size} English model types`);
// Numeric entry changes the actual displayed scientific quantity, including scaled controls.
for(const [title,quantity,expect]of [['الرقم الهيدروجيني pH',7,/pH 7 .*Neutral/],['بنية الذرة',18,/Z = 18/],['الضوء',40,/40°/],['البروتينات',15,/15 amino acids/],['القدرة',20,/10 W/],['الدارات الكهربائية',20,/0.6 A/]]){
 const grade=['الرقم الهيدروجيني pH','البروتينات','القدرة'].includes(title)?10:8;curriculum.openAt(grade,'science',title);const input=root.querySelector('[data-cs-number]');assert(input,title);input.value=String(quantity);input.dispatchEvent(new Event('input',{bubbles:true}));assert.match(root.querySelector('output').textContent,expect);input.value='999';input.dispatchEvent(new Event('input',{bubbles:true}));assert.equal(input.getAttribute('aria-invalid'),'true');assert.match(root.querySelector('output').textContent,expect);
}
// Globe appears above topic cards, rotates, pauses and disposes its animation.
curriculum.openAt(8,'geography');assert(root.querySelector('.cg-globe-hero'));assert.equal(root.querySelector('.classora-curriculum-body').firstElementChild.className,'cg-globe-hero');const svg=root.querySelector('.cg-globe');const initial=svg.innerHTML;
for(const t of [100,170,240]){const pending=[...frames.entries()];frames.clear();for(const [,fn]of pending)fn(t)}assert.notEqual(svg.innerHTML,initial);root.querySelector('[data-globe-toggle]').click();assert.equal(frames.size,0);assert.equal(root.querySelector('[data-globe-toggle]').getAttribute('aria-pressed'),'true');root.querySelector('[data-globe-toggle]').click();assert(frames.size>0);curriculum.openAt(8,'math');assert.equal(frames.size,0);
const {mountGlobe,globeMarkup,projectGlobe}=await import('../assets/geography-globe-v129.js?v=129');let mediaHandler;
globalThis.matchMedia=()=>({matches:true,addEventListener:(t,f)=>{mediaHandler=f},removeEventListener:()=>{mediaHandler=null}});const globeHost=document.createElement('div');globeHost.innerHTML=globeMarkup('en');document.body.append(globeHost);const dispose=mountGlobe(globeHost,'en');assert.equal(frames.size,0);assert.equal(globeHost.querySelector('button').textContent,'Resume rotation');dispose();assert.equal(mediaHandler,null);globeHost.remove();
for(const lon of [-180,-90,0,90,180])for(const lat of [-90,0,90]){const p=projectGlobe(lon,lat,30);assert(Number.isFinite(p.x+p.y+p.z));assert(p.x>=40&&p.x<=280&&p.y>=40&&p.y<=280)}
const sw=fs.readFileSync(new URL('../service-worker.js',import.meta.url),'utf8');for(const name of ['geography-globe-v129.js','lesson-workbench-v129.js','lesson-explorer-v129.js','language-models-v129.js','lesson-explorer-v129.css'])assert(new RegExp(name.replaceAll('.', '\\.')+'\\?v=(129|130)').test(sw));assert.equal(JSON.parse(fs.readFileSync(new URL('../release.json',import.meta.url),'utf8')).version,'130.0');
console.warn=warn;console.log(`PASS: ${pages} bilingual lesson workbenches; ${steps} guided steps; immutable comparisons; ${englishKinds.size} English model families; numeric science controls; globe placement, rotation, pause, reduced motion and cleanup; PWA assets.`);dom?.window.close();
