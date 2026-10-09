/* Classora Global Mix / Phase 4
 * Progressive accessibility and navigation enhancements only.
 * Never takes ownership of 3D gestures, quiz results, inputs or user data.
 */
(() => {
 "use strict";
 function localize(ar,en){return document.documentElement.lang==="en"?en:ar}
 function initialize(modal){
  if(modal.dataset.classoraPhase4Ready==="1")return;
  modal.dataset.classoraPhase4Ready="1";
  const body=modal.querySelector("#cv97Body");
  const shell=modal.querySelector(".classora-curriculum-shell");
  const close=modal.querySelector(".classora-curriculum-close");
  if(!body||!close||!shell)return;
  let restoreFocus=null;
  function enhance(){
   const visible=modal.classList.contains("open");
   const lesson=modal.classList.contains("lesson-open");
   shell.setAttribute("aria-label",lesson?
     localize("درس تفاعلي في كلاسورا","Classora interactive lesson"):
     localize("المناهج الدراسية في كلاسورا","Classora curriculum"));
   if(!visible)return;
   const search=body.querySelector("#cv97Search");
   if(search&&!search.hasAttribute("aria-label"))search.setAttribute("aria-label",localize("ابحث عن موضوع","Search for a lesson"));
   const result=body.querySelector("#cvSimpleResult");
   if(result){
    result.setAttribute("aria-live","polite");
    result.setAttribute("aria-atomic","true");
   }
   const stage=body.querySelector(".curriculum-topic-stage");
   if(stage){
    const lessonTitle=body.querySelector(".curriculum-sidebar-brand h2")?.textContent?.trim();
    stage.setAttribute("role","group");
    stage.setAttribute("aria-label",lessonTitle?
      localize("نموذج تفاعلي: ","Interactive model: ")+lessonTitle:
      localize("نموذج الدرس التفاعلي","Interactive learning model"));
   }
   body.querySelectorAll(".curriculum-grade-card,.curriculum-subject-card,.curriculum-topic-card").forEach(b=>{
    if(b.tagName==="BUTTON"&&!b.hasAttribute("type"))b.setAttribute("type","button");
   });
  }
  const modalWatcher=new MutationObserver(()=>{
   const nowOpen=modal.classList.contains("open");
   if(nowOpen&&!restoreFocus&&document.activeElement instanceof HTMLElement&&!modal.contains(document.activeElement)){
    restoreFocus=document.activeElement;
   }
   if(!nowOpen&&restoreFocus){
    const target=restoreFocus;restoreFocus=null;
    if(target.isConnected&&typeof target.focus==="function")target.focus({preventScroll:true});
   }
   enhance();
  });
  modalWatcher.observe(modal,{attributes:true,attributeFilter:["class"]});
  const contentWatcher=new MutationObserver(enhance);
  contentWatcher.observe(body,{childList:true});
  document.addEventListener("keydown",event=>{
   if(event.key!=="Escape"||event.defaultPrevented||!modal.classList.contains("open")||document.fullscreenElement)return;
   // Follow the existing close button's handler instead of modifying navigation state.
   close.click();
  });
  enhance();
 }
 function start(){
  const found=document.getElementById("classoraCurriculumModal");
  if(found){initialize(found);return}
  const discover=new MutationObserver((records)=>{
   for(const record of records){
    for(const node of record.addedNodes){
     if(node.nodeType!==1)continue;
     const modal=node.id==="classoraCurriculumModal"?node:node.querySelector?.("#classoraCurriculumModal");
     if(modal){discover.disconnect();initialize(modal);return}
    }
   }
  });
  discover.observe(document.body,{childList:true,subtree:true});
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
 else start();
})();
