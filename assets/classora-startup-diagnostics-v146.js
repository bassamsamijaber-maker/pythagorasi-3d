/* Classora startup trace v146. Local-only error details; does not collect account data. */
(function(){
"use strict";
const startedAt=Date.now(),steps=["html-ready"],errors=[];
let current="html-ready";
function short(input){
  return String(input==null?"":input).replace(/https?:\/\/\S+/g,"[url]").replace(/[\r\n]+/g," ").slice(0,190);
}
function step(value){
  const name=short(value);
  current=name;
  steps.push(name+" +"+Math.round((Date.now()-startedAt)/1000)+"s");
  if(steps.length>18)steps.shift();
}
function fault(value){
  const message=short(value);
  if(!message)return;
  errors.push(message);
  if(errors.length>8)errors.shift();
  if(document.getElementById("classora-boot-trace"))paint();
}
window.__classoraBoot={step,error:fault,report};
window.addEventListener("error",function(e){
  if(e.target && e.target!==window){
    const url=e.target.getAttribute?.("src")||e.target.getAttribute?.("href")||"resource";
    fault("Asset load failed: "+url.split("?")[0].split("/").pop());
  }else if(e.message)fault("JavaScript: "+e.message+" (line "+(e.lineno||"?")+")");
},true);
window.addEventListener("unhandledrejection",function(e){
  const why=e.reason?.message||e.reason?.name||"Rejected startup task";
  fault("Async: "+why);
});
function report(){
 const body=document.body;
 return [
  "Classora Boot Diagnostic V146",
  "Elapsed: "+Math.round((Date.now()-startedAt)/1000)+"s",
  "Current: "+current,
  "HTML ready: "+Boolean(body?.classList.contains("auth-ready")),
  "Session restoring: "+Boolean(body?.classList.contains("classora-session-restoring")),
  "Signed-in UI: "+Boolean(body?.classList.contains("classora-authenticated")),
  "Steps: "+steps.join(" | "),
  "Errors: "+(errors.join(" | ")||"none captured"),
  "Browser: "+navigator.userAgent.slice(0,115)
 ].join("\n");
}
function isWaiting(){
 const el=document.getElementById("cw116Wait");
 if(!el||!document.body)return false;
 try{return getComputedStyle(el).display!=="none"}catch{return false}
}
function paint(){
 const el=document.getElementById("classora-boot-trace");if(!el)return;
 const last=errors[errors.length-1]||"No JavaScript error captured; startup may be waiting for account data.";
 const t=el.querySelector("[data-trace-status]");
 if(t)t.textContent="Stage: "+current+" · "+last;
}
function addReport(){
 if(!isWaiting())return;
 const wait=document.getElementById("cw116Wait");
 if(!wait||document.getElementById("classora-boot-trace")){paint();return}
 const lang=document.documentElement.lang==="ar"?"ar":"en";
 const box=document.createElement("div");
 box.id="classora-boot-trace";
 box.style.cssText="width:min(380px,94vw);margin:8px auto 0;padding:12px;border:1px solid #75d0b0;border-radius:14px;background:#103229;color:#edfff6;font:600 12px system-ui;line-height:1.7;white-space:normal;text-align:center";
 const hint=document.createElement("div");hint.textContent=lang==="ar"?"التطبيق تأخر بالتشغيل، وهذا تقرير يساعدنا نصلحه.":"Startup is delayed. Copy a diagnostic to help find the cause.";
 const state=document.createElement("div");state.dataset.traceStatus="";state.style.cssText="margin:7px 0;color:#b4d2c4;overflow-wrap:anywhere;font-size:11px";
 const buttons=document.createElement("div");buttons.style.cssText="display:flex;flex-wrap:wrap;justify-content:center;gap:8px";
 const copy=document.createElement("button");copy.type="button";copy.textContent=lang==="ar"?"نسخ تقرير التعليق":"Copy startup report";
 copy.style.cssText="border:1px solid #80e8bd;border-radius:10px;padding:10px;background:#1c6351;color:white;font:700 12px system-ui;cursor:pointer";
 copy.addEventListener("click",async()=>{
   const content=report();
   try{await navigator.clipboard.writeText(content);copy.textContent=lang==="ar"?"تم النسخ":"Copied"}catch{
     const input=document.createElement("textarea");input.value=content;input.rows=7;
     input.style.cssText="display:block;width:100%;margin-top:10px";
     box.append(input);input.focus();input.select();
   }
 });
 const recovery=document.createElement("a");
 recovery.textContent=lang==="ar"?"إصلاح التخزين":"Repair cache";
 recovery.href="./recovery.html";
 recovery.style.cssText="display:inline-block;padding:10px;border:1px solid #6ca792;border-radius:10px;color:#e1faee;text-decoration:none;font:700 12px system-ui";
 buttons.append(copy,recovery);box.append(hint,state,buttons);wait.append(box);paint();
}
function schedule(){
 [11000,19000,35000].forEach(ms=>setTimeout(addReport,ms));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",schedule,{once:true});else schedule();
})();
