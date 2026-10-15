const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const dictCode=read('assets/classora-locales-v140.js');
const context={};
const api=new Function('window','localStorage','document',dictCode+';return window.ClassoraLocale;')(
 context,{getItem:()=> 'en'},{querySelectorAll:()=>[]});
const periodic=read('chemistry/periodic-table.js');
const html=read('chemistry/periodic-table.html');
const uiCode=periodic.slice(periodic.indexOf('const ui={'),periodic.indexOf('function readStorage('));
assert(uiCode.startsWith('const ui={'));
const ui=new Function(uiCode+';return ui;')();
const names=['Hydrogen','Helium','Lithium','Beryllium','Boron','Carbon','Nitrogen','Oxygen','Fluorine','Neon','Sodium','Magnesium','Aluminium','Silicon','Phosphorus','Sulfur','Chlorine','Argon','Potassium','Calcium','Scandium','Titanium','Vanadium','Chromium','Manganese','Iron','Cobalt','Nickel','Copper','Zinc'];
const phrases=[...Object.values(ui.en),...names,'Your assignments','Teacher workspace','Student workspace','What is the total number of students?','This is home: your recent lessons, announcements and priority tasks.'];
let tested=0;
for(const language of ['es','ko','de','it','hi','tr']){
 const dictionary=api.dictionaries[language];
 for(const phrase of phrases){
  assert(Object.hasOwn(dictionary,phrase),language+' missing: '+phrase);
  assert(api.tFor(language,phrase).trim(),'Empty translated text: '+phrase);
  tested++;
 }
}
assert.equal(api.tFor('ko','Grade 8'),'8학년');
assert.equal(api.tFor('tr','Grade 8'),'8. sınıf');
assert(periodic.includes('acceptedLocales.has(event.data.lang)?event.data.lang:"en"'),'Language messages must preserve eight locales');
assert(html.indexOf('classora-locales-v140.js')<html.indexOf('periodic-table.js'),'Load locale dictionary before periodic table script');
new Function(periodic);
for(const name of ['assets/classora-home-v112.js','assets/classora-teacher-dashboard.js','assets/classora-student-dashboard.js','assets/classora-entrance-v116.js','assets/classora-guided-tour-v117.js','assets/classora-legal-v124.js','assets/math-scenes-v119.js','assets/science-scenes-v128.js','assets/geography-scenes-v128.js','assets/arabic-scenes-v128.js']){
 const text=read(name).replace(/^import [^\n]+\n/gm,'').replace(/\bexport (const|function|class)\b/g,'$1 ');
 new Function(text);
}
console.log('PASS: '+tested+' translated core interface and element-name references across six additional languages');
