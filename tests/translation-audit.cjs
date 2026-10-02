const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const periodicHtml=fs.readFileSync(path.join(root,"chemistry","periodic-table.html"),"utf8");
const periodicJs=fs.readFileSync(path.join(root,"chemistry","periodic-table.js"),"utf8");

const arabic=/[\u0600-\u06FF]/;
const pairRe=/\[\s*"((?:\\.|[^"\\])*)"\s*,\s*"((?:\\.|[^"\\])*)"\s*\]/g;
const keys=new Set();
let m;
while((m=pairRe.exec(index))){
  const ar=m[1].replace(/\\\"/g,'"').replace(/\\\\/g,"\\").trim();
  if(arabic.test(ar))keys.add(ar);
}

const htmlEnd=index.indexOf('<script type="module">');
assert(htmlEnd>0,"main module script not found");
const html=index.slice(0,htmlEnd);

const staticTexts=[...new Set([...html.matchAll(/>([^<>]+)</g)]
  .map(x=>x[1].replace(/\s+/g," ").trim())
  .filter(x=>x&&arabic.test(x)))];
const staticAttrs=[...new Set([...html.matchAll(/\b(?:placeholder|title|aria-label)="([^"]*[\u0600-\u06FF][^"]*)"/g)]
  .map(x=>x[1].trim()))];

assert.deepEqual(staticTexts.filter(x=>!keys.has(x)),[],"untranslated static Arabic UI text found");
assert.deepEqual(staticAttrs.filter(x=>!keys.has(x)),[],"untranslated static Arabic attribute found");

const script=index.slice(index.indexOf('<script type="module">'));
function collect(re){
  const out=[];let x;
  while((x=re.exec(script))){
    const s=x[1].trim();
    if(s&&arabic.test(s))out.push(s);
  }
  return [...new Set(out)];
}

const direct=[
  ...collect(/(?:textContent|innerText)\s*=\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g),
  ...collect(/showToast\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g),
  ...collect(/setAuthError\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g)
];
assert.deepEqual([...new Set(direct)].filter(x=>!x.includes("${")&&!keys.has(x)),[],"untranslated direct dynamic Arabic UI text found");

const dynamicAttrs=[...new Set([...script.matchAll(/\b(?:placeholder|title|aria-label)=["']([^"']*[\u0600-\u06FF][^"']*)["']/g)]
  .map(x=>x[1].trim()))];
assert.deepEqual(dynamicAttrs.filter(x=>!x.includes("${")&&!keys.has(x)),[],"untranslated dynamic Arabic attributes found");

assert.equal(collect(/(?<!ui)confirm\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g).length,0,"raw Arabic confirm() must use uiConfirm");
assert.equal(collect(/(?<!ui)prompt\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g).length,0,"raw Arabic prompt() must use uiPrompt");

assert.equal([...periodicHtml.matchAll(/>([^<>]*[\u0600-\u06FF][^<>]*)</g)].length,0,"periodic table HTML must not hard-code Arabic UI text");
new Function(periodicJs);

console.log("PASS: Classora bilingual UI translation audit passed.");
