import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const {window,document}=parseHTML(html.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,''));
const storage=new Map([['pythagorasi_language','ko']]);
const context=vm.createContext({window,document,Element:window.Element,Node:window.Node,console,currentUILanguage:'en',latinDigits:s=>String(s),localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},setTimeout:()=>{},syncV99LanguageLabels:()=>{}});
vm.runInContext(fs.readFileSync(new URL('../assets/classora-locales-v140.js',import.meta.url),'utf8'),context);
assert.equal(window.ClassoraLocale.language,'ko');
vm.runInContext(html.slice(html.indexOf('const uiExactTranslations='),html.indexOf('function syncV99LanguageLabels()')),context);
vm.runInContext(html.slice(html.indexOf('function applySiteLanguage('),html.indexOf("document.addEventListener('click',event=>{",html.indexOf('function applySiteLanguage('))),context);
const set=language=>vm.runInContext(`applySiteLanguage('${language}')`,context);
for(const container of ['.auth-language-switch','#settingsLanguageTitle + .settings-choice-row']){
 assert.deepEqual([...document.querySelector(container).querySelectorAll('[data-classora-language]')].map(b=>b.dataset.classoraLanguage).sort(),['ar','de','en','es','hi','it','ko','tr']);
}
const button=document.createElement('button');button.textContent='  الإعدادات  ';button.setAttribute('title','Settings');document.body.append(button);
const name=document.createElement('b');name.dataset.noTranslate='';name.textContent='Settings';document.body.append(name);
const message=document.createElement('span');message.dataset.noTranslate='';message.textContent='Sign out';document.body.append(message);
const input=document.createElement('textarea');input.textContent='Settings';input.setAttribute('placeholder','Enter your answer');document.body.append(input);
const labels={tr:'Ayarlar',es:'Configuración',ko:'설정',de:'Einstellungen',it:'Impostazioni',hi:'सेटिंग्स',en:'Settings',ar:'الإعدادات'};
for(const language of ['tr','es','ko','de','it','hi','en','ar','tr','hi','es','ar']){
 set(language);assert.equal(button.textContent.trim(),labels[language]);assert.equal(document.documentElement.lang,language);assert.equal(document.documentElement.dir,language==='ar'?'rtl':'ltr');assert.equal(storage.get('pythagorasi_language'),language);
 assert.equal(name.textContent,'Settings');assert.equal(message.textContent,'Sign out');assert.equal(input.textContent,'Settings');
 assert.equal(document.querySelectorAll('[data-classora-language][aria-pressed="true"]').length,2);
 assert([...document.querySelectorAll('[data-classora-language][aria-pressed="true"]')].every(b=>b.dataset.classoraLanguage===language));
}
set('es');button.firstChild.nodeValue='Sign out';vm.runInContext('translateSubtree(document.body)',context);assert.equal(button.textContent,'Cerrar sesión');assert.equal(input.getAttribute('placeholder'),'Escribe tu respuesta');
assert.equal(window.ClassoraLocale.t('Unknown authored lesson content'),'Unknown authored lesson content');
for(const [lang,dict] of Object.entries(window.ClassoraLocale.dictionaries)){
 assert.deepEqual(Object.keys(dict),Object.keys(window.ClassoraLocale.dictionaries.es));assert(Object.keys(dict).length>200);assert(Object.values(dict).every(value=>typeof value==='string'&&value.length>0));
}
const sw=fs.readFileSync(new URL('../service-worker.js',import.meta.url),'utf8');for(const file of ['classora-locales-v140.js','classora-locales-v140.css','classora-dock-stable-v140.css'])assert(sw.includes(file));
const css=fs.readFileSync(new URL('../assets/classora-dock-stable-v140.css',import.meta.url),'utf8');assert(css.includes('dialog[open]:has(#classoraMobilePageNav)'));assert(css.includes('transform: none !important'));assert(css.includes('inset: auto 0 0 0 !important'));assert(css.includes('env(safe-area-inset-bottom'));
console.log('PASS: eight locale selectors, saved preference, repeated language switches, RTL/LTR, dynamic labels, input placeholders, protected user content, offline assets. '+Object.keys(window.ClassoraLocale.dictionaries.es).length+' translated source labels per new language.');
