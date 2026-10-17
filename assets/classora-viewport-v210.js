// Keep installed Safari's layout viewport explicit after launch and rotation.
(()=>{
 let frame=0;
 const update=()=>{frame=0;document.documentElement.style.setProperty('--classora-viewport-height',window.innerHeight+'px')};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
 update();
 window.addEventListener('resize',schedule,{passive:true});
 window.addEventListener('pageshow',schedule,{passive:true});
 window.visualViewport?.addEventListener('resize',schedule,{passive:true});
})();
