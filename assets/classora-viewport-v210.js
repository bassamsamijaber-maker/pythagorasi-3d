/* V211: account for the iOS standalone status-bar overlay without
   changing desktop, iPad or browser-tab sizing. No timer or scroll hooks. */
(()=>{
 let frame=0;
 const root=document.documentElement;
 const isiOS=/iPad|iPhone|iPod/i.test(navigator.userAgent)||
   (navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
 const standalone=()=>navigator.standalone===true||
   !!window.matchMedia?.("(display-mode: standalone)")?.matches;
 const update=()=>{
  frame=0;
  const inside=Math.max(1,window.innerHeight);
  const vv=window.visualViewport;
  const typing=vv&&inside-vv.height>140;
  const screenHeight=Number(window.screen?.height)||0;
  const extra=isiOS&&standalone()&&window.innerWidth<=760&&!typing
    &&screenHeight>inside&&screenHeight-inside<160?screenHeight-inside:0;
  root.style.setProperty("--classora-viewport-height",(inside+extra)+"px");
  root.style.setProperty("--classora-viewport-extra",extra+"px");
 };
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
 update();
 window.addEventListener("resize",schedule,{passive:true});
 window.addEventListener("orientationchange",schedule,{passive:true});
 window.addEventListener("pageshow",schedule,{passive:true});
 window.visualViewport?.addEventListener("resize",schedule,{passive:true});
})();
