import {cp,rm,mkdir,copyFile,access} from "node:fs/promises";
import {resolve,join} from "node:path";

const root=resolve(process.cwd());
const out=join(root,"app-store","www");
const files=["index.html","offline.html","recovery.html","privacy.html","support.html","manifest.webmanifest","service-worker.js","release.json"];
const dirs=["assets","chemistry","icons"];

await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});

for(const name of files){
  const src=join(root,name);
  try{await access(src);await copyFile(src,join(out,name));}
  catch{console.warn("Skipped missing file:",name);}
}
for(const name of dirs){
  const src=join(root,name);
  try{await access(src);await cp(src,join(out,name),{recursive:true});}
  catch{console.warn("Skipped missing directory:",name);}
}
console.log("Classora mobile web bundle prepared at app-store/www");
