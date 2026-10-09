/* Classora Global Mix v110 — optional, lightweight polish.
 * There are no timers, data fetching, Firebase listeners or 3D scene updates here.
 * All features work unchanged if this script does not load.
 */
(() => {
  "use strict";
  const root=document.documentElement;
  const minimal=() => Boolean(
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ||
    navigator.connection?.saveData ||
    (typeof navigator.deviceMemory==="number"&&navigator.deviceMemory<=2)
  );
  function init(){
    const lowMotion=minimal();
    root.classList.toggle("classora-minimal-motion",lowMotion);
    root.classList.toggle("classora-page-hidden",document.hidden);
    document.addEventListener("visibilitychange",()=>{
      root.classList.toggle("classora-page-hidden",document.hidden);
    },{passive:true});

    // Trigger a single short entrance when an existing section first appears.
    // Does not hide content, preventing blank regions if an observer is delayed.
    if(lowMotion||!window.IntersectionObserver)return;
    const lobby=document.getElementById("platformLobby");
    if(!lobby)return;
    const candidate=[
      ".classora-mix-hero",".student-dash-hero",".tw-hero",
      ".hub-curriculum-shelf",".student-dash-insights",
      ".tw-metrics",".tw-subpanel"
    ];
    const items=candidate.flatMap(selector=>Array.from(lobby.querySelectorAll(selector))).slice(0,30);
    if(!items.length)return;
    const watcher=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(!entry.isIntersecting)continue;
        entry.target.classList.add("classora-v110-visible");
        watcher.unobserve(entry.target);
      }
    },{root:lobby,threshold:0.12});
    for(const item of items)watcher.observe(item);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();
