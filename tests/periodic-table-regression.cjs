const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.join(__dirname,'..'),js=fs.readFileSync(path.join(root,'chemistry/periodic-table.js'),'utf8'),html=fs.readFileSync(path.join(root,'chemistry/periodic-table.html'),'utf8');
const start=js.indexOf('const raw=')+'const raw='.length,end=js.indexOf(';\n\nconst catOrder',start),raw=JSON.parse(js.slice(start,end));
assert.equal(raw.length,118);assert.equal(new Set(raw.map(e=>e[0])).size,118);assert.equal(new Set(raw.map(e=>e[1])).size,118);
// Execute the real initialization and interaction handlers. A single-element query
// intentionally has no forEach, catching the original blank-screen regression.
class Element{
 constructor(){this.dataset={};this.children=[];this.style={setProperty(){}};this.attributes={};this.value='';this.textContent='';this.classes=new Set();this.classList={add:x=>this.classes.add(x),remove:x=>this.classes.delete(x),toggle:(x,on)=>{on=on===undefined?!this.classes.has(x):on;on?this.classes.add(x):this.classes.delete(x);return on}};this.listeners={}}
 set innerHTML(v){this.markup=v;this.children=[]}get innerHTML(){return this.markup||''}
 append(x){this.children.push(x)}setAttribute(k,v){this.attributes[k]=v}addEventListener(k,f){this.listeners[k]=f}focus(){}scrollIntoView(){}click(){this.onclick?.()}
}
function boot(stored='[]'){
 const ids=new Map(),groups=new Map();
 for(const m of html.matchAll(/<[^>]+>/g)){
  const e=new Element(),tag=m[0];for(const a of tag.matchAll(/data-([a-z-]+)="([^"]*)"/g)){const key=a[1].replace(/-([a-z])/g,(_,x)=>x.toUpperCase());e.dataset[key]=a[2];const sel='[data-'+a[1]+']';if(!groups.has(sel))groups.set(sel,[]);groups.get(sel).push(e)}
  const id=tag.match(/id="([^"]+)"/);if(id)ids.set('#'+id[1],e);
 }
 const doc={documentElement:{},body:new Element(),activeElement:new Element(),createElement:()=>new Element(),addEventListener(){},querySelector:s=>ids.get(s)||groups.get(s)?.[0]||new Element(),querySelectorAll:s=>groups.get(s)||[]};
 const messages=[],events={},win={addEventListener(k,f){events[k]=f},scrollTo(){},parent:{postMessage:m=>messages.push(m)}};
 vm.runInNewContext(js,{document:doc,window:win,location:{search:'',origin:'https://example.com'},localStorage:{getItem:k=>k==='classora_periodic_favorites'?stored:null,setItem(){}},sessionStorage:{setItem(){}},URLSearchParams,requestAnimationFrame:f=>{f();return 1},cancelAnimationFrame(){}});
 return{doc,ids,groups,messages,events};
}
for(const stored of ['[]','broken JSON','{}']){
 const {doc,ids,groups,messages,events}=boot(stored),grid=ids.get('#periodicGrid');
 assert.equal(grid.children.length,120);assert.equal(grid.children[2].style.gridColumn,"1");assert.equal(grid.children[3].style.gridColumn,"18");
 groups.get("[data-layout]").find(e=>e.dataset.layout==="gallery").click();
 assert.equal(grid.children.length,118,'all elements render even with corrupt favorites');
 assert(grid.children.every(e=>e.innerHTML.includes('data:image/svg+xml')),'every card has artwork');
 assert(grid.children[0].innerHTML.includes('Hydrogen'));
 events.message({origin:"https://example.com",data:{type:"classora-language",lang:"ar"}});assert.equal(doc.documentElement.dir,'rtl');assert(grid.children[0].innerHTML.includes('هيدروجين'));
 grid.children[0].click();assert.equal(ids.get('#detailName').textContent,'هيدروجين');assert(ids.get('#detailDescription').textContent.length>30);
 ids.get('#elementAnimationBtn').click();assert(ids.get('#elementVisualWrap').classes.has('paused'));
 events.message({origin:"https://example.com",data:{type:"classora-language",lang:"en"}});assert.equal(ids.get('#detailName').textContent,'Hydrogen');
 const input=ids.get('#searchInput');input.listeners.input({target:{value:'Oxygen'}});assert.equal(grid.children.length,1);assert(grid.children[0].innerHTML.includes('Oxygen'));
 input.listeners.input({target:{value:'does-not-exist'}});assert.equal(grid.children.length,0);assert.equal(ids.get('#emptyState').hidden,false);
 ids.get('#clearSearch').click();assert.equal(grid.children.length,118);
 groups.get('[data-layout]').find(e=>e.dataset.layout==='periodic').click();assert.equal(grid.children.length,120);
 ids.get('#propertyFilters').children.find(e=>e.textContent==='Liquid').click();assert.equal(ids.get('#visibleCount').textContent,2);
 ids.get('#backBtn').click();assert(messages.some(m=>m.type==='classora-close-subject'));
}
assert(!html.includes('data-lang='));
assert(html.includes('periodic-table.css?v=79')&&html.includes('periodic-table.js?v=79'));
console.log('PASS: actual initialization, 118 illustrated cards, bilingual names/details, search, empty state, layouts, animation pause, lobby message and corrupt-storage recovery.');

