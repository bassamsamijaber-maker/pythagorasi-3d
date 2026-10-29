const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const src=fs.readFileSync('assets/curriculum-v97.js','utf8');
class Element {constructor(){this.children=[];this.dataset={}}appendChild(el){this.children.push(el)}querySelector(){return this.grid??=new Element()}querySelectorAll(){return []}}
const host=new Element(),body=new Element();body.querySelector=()=>host;
const subjects=['math','geometry','science','arabic','english','history','geography'];let renders=0;
const c={state:{grade:8},api:{},body,document:{createElement:()=>new Element()},subjectList:()=>subjects,topicsFor:()=>[1,2,3],txt:(_,a)=>a,gradeLabel:g=>'Grade '+g,svg:()=>'<svg></svg>',S:Object.fromEntries(subjects.map(s=>[s,{icon:'book'}])),subjectName:(_,s)=>s,render:()=>renders++,rememberGrade(){}};vm.createContext(c);
vm.runInContext(src.slice(src.indexOf(' function gradeSwitcher(){'),src.indexOf(' function filteredTopics(){')),c);c.renderSubjects();
assert.equal(host.children.length,3);const cards=host.children.flatMap(x=>x.grid.children);assert.deepEqual(cards.map(x=>x.dataset.subject).sort(),subjects.slice().sort());assert(body.innerHTML.includes('21'));
for(const card of cards){card.onclick();assert.equal(c.state.subject,card.dataset.subject);assert.equal(c.state.view,'topics');assert.equal(c.state.query,'')}
const gradeButton={dataset:{grade:'10'}};body.querySelectorAll=()=>[gradeButton];c.bindGradeSwitcher();gradeButton.onclick();assert.equal(c.state.grade,10);assert.equal(c.state.view,'subjects');assert.equal(c.state.subject,null);
const css=fs.readFileSync('assets/classora-learning-design-v289.css','utf8');assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length);assert(css.includes('prefers-reduced-motion'));assert(css.includes('max-width:600px'));assert(css.includes('max-width:999px'));assert(css.includes(':not(.lesson-open)'));
console.log('PASS: every subject appears once, real counts, all cards open topics, grade switch resets context, responsive styles scoped away from lessons.');
