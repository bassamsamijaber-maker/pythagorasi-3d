const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const js=fs.readFileSync(path.join(root,"chemistry","periodic-table.js"),"utf8");
const html=fs.readFileSync(path.join(root,"chemistry","periodic-table.html"),"utf8");
const sw=fs.readFileSync(path.join(root,"service-worker.js"),"utf8");

new Function(js);

const start=js.indexOf("const raw=")+"const raw=".length;
const end=js.indexOf(";\n\nconst catOrder",start);
assert(start>10&&end>start,"periodic element data block must exist");
const raw=JSON.parse(js.slice(start,end));

assert.equal(raw.length,118,"periodic table must contain 118 elements");
assert.equal(new Set(raw.map(x=>x[0])).size,118,"atomic numbers must be unique");
assert.equal(new Set(raw.map(x=>x[1])).size,118,"symbols must be unique");
assert.deepEqual(raw[0].slice(0,3),[1,"H","Hydrogen"]);
assert.deepEqual(raw.at(-1).slice(0,3),[118,"Og","Oganesson"]);
assert(html.includes('id="periodicGrid"'),"table host missing");
assert(html.includes('id="elementModal"'),"element details modal missing");
assert(html.includes('id="compareBtn"'),"comparison tool missing");
assert(html.includes('id="combineBtn"'),"combination tool missing");
assert(html.includes('id="quizView"'),"quiz mode missing");
assert(!html.includes('id="langEn"')&&!html.includes('id="langAr"'),"periodic page must use Classora settings language only");
assert(html.includes('id="elementAnimationBtn"'),"element animation control missing");
assert(html.includes('id="favoriteElementBtn"'),"favorite element control missing");
assert(html.includes('id="randomElementBtn"'),"random element button missing");
assert(js.includes('class="el-thumb"'),"element cards must include generated artwork");
assert(js.includes('classora_periodic_favorites'),"favorite persistence missing");
assert(js.includes('function animationType(e)'),"per-element animation mapping missing");
assert(js.includes('visualCache'),"generated element artwork cache missing");
assert(sw.includes("./chemistry/periodic-table.html"),"periodic table must be cached");
assert(sw.includes("cache.put(event.request,copy)"),"navigation cache must keep page identity");

console.log("PASS: periodic table has 118 unique elements, valid JavaScript and required Classora chemistry tools.");
