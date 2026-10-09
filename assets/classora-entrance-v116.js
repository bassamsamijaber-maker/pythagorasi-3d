/* Classora v116: no changes to Firebase, role checks, or original navigation handlers. */
(() => {
 "use strict";
 const $=id=>document.getElementById(id);
 const icons={
 brand:'<svg viewBox="0 0 48 48"><path d="M12 15 24 7l12 8v18l-12 8-12-8Z"/><path d="m31 17-8 7 8 7M17 15v18"/></svg>',
 student:'<svg viewBox="0 0 24 24"><path d="M4 8h16v12H4zM8 8V5a4 4 0 0 1 8 0v3M4 13h16M9 17h6"/></svg>',
 teacher:'<svg viewBox="0 0 24 24"><path d="M4 5h16v12H4zM7 9h6M7 12h9M12 17v4m-4 0h8"/></svg>',
 welcome:'<svg viewBox="0 0 64 64"><path d="M9 19 32 8l23 11v28L32 58 9 47Z"/><path d="M9 19 32 31l23-12M32 31v27M21 23h23"/></svg>',
 lobby:'<svg viewBox="0 0 64 64"><path d="M9 29 32 10l23 19v27H9zM24 56V36h16v20M8 29h48"/></svg>',
 subjects:'<svg viewBox="0 0 64 64"><path d="M32 16C22 10 14 11 7 15v38c9-3 18-1 25 4 7-5 16-7 25-4V15c-7-4-15-5-25 1ZM32 16v41M16 25h9m13 0h9"/></svg>',
 classes:'<svg viewBox="0 0 64 64"><path d="M7 55V21l25-13 25 13v34M7 55h50M19 55V31h26v24M25 39h14"/></svg>',
 chat:'<svg viewBox="0 0 64 64"><path d="M54 29c0 13-10 22-23 22H12l6-11a21 21 0 1 1 36-11ZM21 28h22M21 36h14"/></svg>',
 exams:'<svg viewBox="0 0 64 64"><path d="M18 12h28v43H18zM25 12v-5h14v5M25 27h13M25 35h13m-13 8h6m6 1 4 4 8-9"/></svg>',
 settings:'<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="9"/><path d="M29 8h6l3 8 6 3 8-3 4 5-5 7v8l5 7-4 5-8-3-6 3-3 8h-6l-3-8-6-3-8 3-4-5 5-7v-8l-5-7 4-5 8 3 6-3z"/></svg>'
 };
 const steps=[
 ["lobby","اللوبي","Lobby","هون بتلاقي آخر دروسك وإعلانات الموقع والمهام المهمة.","This is home: your recent lessons, announcements and priority tasks."],
 ["subjects","المواد الدراسية","Subjects","اختار مادة وموضوع، وجرّب النماذج التفاعلية وعدّل المعطيات.","Choose a lesson, interact with its models and change the values."],
 ["classes","صفوفي","My classes","شوف الصفوف والوظائف والأنشطة اللي أرسلها المعلم.","See classes, assignments and activities assigned by your teacher."],
 ["exams","الامتحانات والمسابقات","Exams & quizzes","جاوب على الأسئلة وتابع نتيجتك. بعض الأنشطة تحتاج حساب مسجّل.","Answer questions and see results. Some activities require an account."],
 ["chat","شات كلاسورا","Classora Chat","تواصل مع زملائك ومعلمك، واطلب مساعدة الدعم.","Chat with classmates and teachers, or contact support."],
 ["settings","الإعدادات","Settings","غيّر اللغة وشوف حسابك، ورجّع هذه الجولة بأي وقت.","Change language, manage your account and replay this guide anytime."]
 ];
 let overlay,mode="question",step=0,seenAccount="",introReady=false,preferred="classoraMobileLobbyBtn",frame=0;
 const english=()=>document.documentElement.lang==="en";
 const authed=()=>document.body.classList.contains("classora-authenticated")&&!$("authGate")?.classList.contains("show");
 const storageKey=()=>window.PythagorasiUser?.uid?"classora_guide_v116_"+String(window.PythagorasiUser.uid):"";
 function platform(){
   const raw=(navigator.userAgentData?.platform||navigator.platform||"")+" "+(navigator.userAgent||"");
   const native=/iPhone|iPad|iPod|Macintosh|MacIntel|Windows|Win32|Win64/i.test(raw);
   const supported=Boolean(window.CSS&&(CSS.supports("backdrop-filter","blur(8px)")||CSS.supports("-webkit-backdrop-filter","blur(8px)")));
   document.body.classList.toggle("classora-platform-glass",native&&supported);
   document.body.classList.toggle("classora-platform-solid",!native||!supported);
 }
 function loginDesign(){
   const logo=$("authPanel")?.querySelector(".auth-logo");
   if(logo)logo.innerHTML=icons.brand;
   [["chooseStudent","student"],["chooseTeacher","teacher"]].forEach(pair=>{
     const node=$(pair[0])?.querySelector(".ico");if(node)node.innerHTML=icons[pair[1]];
   });
   const title=$("authPanel")?.querySelector("h2");
   if(title)title.textContent=title.textContent.replace(/👋/g,"").trim();
   const panel=$("authPanel");
   if(panel&&!panel.querySelector(".cw116-auth-orbits")){
     const ornament=document.createElement("div");
     ornament.className="cw116-auth-orbits";ornament.setAttribute("aria-hidden","true");
     ornament.innerHTML='<svg viewBox="0 0 190 190"><circle cx="95" cy="95" r="76" stroke-dasharray="5 14"/><circle cx="95" cy="95" r="55"/><circle cx="95" cy="95" r="38" stroke-dasharray="3 12"/></svg>';
     panel.prepend(ornament);
   }
 }
 function selectDock(){
   const bar=$("classoraMobilePageNav");if(!bar)return;
   const isOpen=id=>$(id)?.classList.contains("open");
   let selected=preferred;
   if(isOpen("settingsModal"))selected="classoraMobileSettingsBtn";
   else if(isOpen("chatModal"))selected="classoraMobileChatBtn";
   else if(isOpen("classModal"))selected="classoraMobileClassesBtn";
   else if(isOpen("classoraCurriculumModal")||location.hash==="#periodic-table")selected="classoraMobileSubjectsBtn";
   else if(preferred!=="classoraMobileSubjectsBtn")selected="classoraMobileLobbyBtn";
   bar.querySelectorAll("button").forEach(button=>{
     const active=button.id===selected;
     button.classList.toggle("is-active",active);
     if(active)button.setAttribute("aria-current","page");else button.removeAttribute("aria-current");
   });
   const button=$(selected);
   if(button&&button.offsetWidth){
     bar.style.setProperty("--classora-active-x",button.offsetLeft+"px");
     bar.style.setProperty("--classora-active-w",button.offsetWidth+"px");
   }
 }
 function syncDock(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;selectDock()})}
 function setupDock(){
   const bar=$("classoraMobilePageNav");if(!bar)return;
   bar.addEventListener("click",event=>{
     const button=event.target.closest("button");if(button){preferred=button.id;syncDock()}
   },true);
   window.addEventListener("click",event=>{
     if(event.target?.closest?.("#classoraMobileLobbyBtn,#mobileReturnLobbyBtn,#returnLobbyBtn,[data-return-control][data-return-target='lobby'],#closeSettingsModal,#closeChatModal,#closeClassModal,.modalhead .close")){
       preferred="classoraMobileLobbyBtn";setTimeout(syncDock,170);
     }
   },true);
   ["settingsModal","chatModal","classModal","classoraCurriculumModal"].forEach(id=>{
     const el=$(id);if(el)new MutationObserver(()=>{
       if(!el.classList.contains("open"))preferred="classoraMobileLobbyBtn";
       syncDock();
     }).observe(el,{attributes:true,attributeFilter:["class"]});
   });
   new MutationObserver(syncDock).observe(document.body,{attributes:true,attributeFilter:["class"]});
   window.addEventListener("popstate",()=>{preferred="classoraMobileLobbyBtn";syncDock()});
   ["hashchange","pageshow","resize","orientationchange","classora-auth-settled"].forEach(event=>window.addEventListener(event,syncDock,{passive:true}));
   syncDock();
 }
 function ensureWelcome(){
   if(overlay)return;
   overlay=document.createElement("div");overlay.id="cw116-welcome";overlay.hidden=true;
   overlay.setAttribute("role","dialog");overlay.setAttribute("aria-modal","true");overlay.setAttribute("aria-labelledby","cw116-title");
   overlay.innerHTML='<section class="cw116-card" dir="rtl"><button type="button" class="cw116-close" id="cw116-close" aria-label="Skip">×</button><div class="cw116-art" aria-hidden="true"></div><small class="cw116-step-count"></small><h2 id="cw116-title"></h2><p id="cw116-text"></p><div class="cw116-progress"></div><div class="cw116-actions"><button type="button" class="cw116-secondary" id="cw116-back"></button><button type="button" class="cw116-primary" id="cw116-primary"></button></div><label><input type="checkbox" id="cw116-remember" checked><span id="cw116-remember-text"></span></label></section>';
   document.body.append(overlay);
   $("cw116-close").addEventListener("click",closeWelcome);
   $("cw116-back").addEventListener("click",()=>{
     if(mode==="tour"){if(step>0)step--;else mode="question";render()}else closeWelcome();
   });
   $("cw116-primary").addEventListener("click",()=>{
     if(mode==="question"){mode="tour";step=0;render();return}
     if(step<steps.length-1){step++;render()}else closeWelcome();
   });
   overlay.addEventListener("click",event=>{if(event.target===overlay)closeWelcome()});
 }
 function render(){
   const en=english(),item=steps[step];
   overlay.querySelector(".cw116-card").dir=en?"ltr":"rtl";
   $("cw116-close").setAttribute("aria-label",en?"Skip guide":"تخطي التعليم");
   const question=mode==="question";
   $("cw116-title").textContent=question?(en?"Would you like to learn how to use Classora?":"هل تحتاج لتعليم كيفية استخدام كلاسورا؟"):item[en?2:1];
   $("cw116-text").textContent=question?(en?"Get a quick tour of subjects, classes, exams, chat and settings.":"جولة قصيرة بتشرح لك المواد والصفوف والامتحانات والشات والإعدادات."):item[en?4:3];
   overlay.querySelector(".cw116-art").innerHTML=icons[question?"welcome":item[0]];
   overlay.querySelector(".cw116-step-count").textContent=question?"":(en?"Step "+(step+1)+" of "+steps.length:"الخطوة "+(step+1)+" من "+steps.length);
   overlay.querySelector(".cw116-progress").replaceChildren(...(question?[]:steps.map((_,i)=>{
     const dot=document.createElement("span");if(i<=step)dot.classList.add("on");return dot;
   })));
   $("cw116-back").textContent=question?(en?"No, thanks":"لا، شكرًا"):(step===0?(en?"Back":"رجوع"):(en?"Previous":"السابق"));
   $("cw116-primary").textContent=question?(en?"Yes, show me":"نعم، علّمني"):(step===steps.length-1?(en?"Start learning":"ابدأ التعلم"):(en?"Next":"التالي"));
   $("cw116-remember-text").textContent=en?"Don't show this automatically again":"لا تظهر هذه الشاشة تلقائيًا مرة ثانية";
 }
 function closeWelcome(){
   if(!overlay||overlay.hidden)return;
   if($("cw116-remember")?.checked){
     const k=storageKey();if(k)try{localStorage.setItem(k,"done")}catch{}
   }
   overlay.hidden=true;document.body.classList.remove("classora-onboarding-open");syncDock();
 }
 function openWelcome(next="question",replay=false){
   if(!authed()||!introReady||$("classoraIntro"))return;
   ensureWelcome();mode=next;step=0;$("cw116-remember").checked=!replay;
   overlay.hidden=false;document.body.classList.add("classora-onboarding-open");
   render();$("cw116-primary").focus({preventScroll:true});
 }
 function askOnce(){
   if(!introReady||!authed()||(overlay&&!overlay.hidden))return;
   const k=storageKey();if(!k||seenAccount===k)return;
   seenAccount=k;try{if(localStorage.getItem(k)==="done")return}catch{}
   openWelcome("question");
 }
 function onAuth(){setTimeout(askOnce,240);syncDock()}
 function replay(){
   $("closeSettingsModal")?.click();
   setTimeout(()=>openWelcome("tour",true),180);
 }
 function replayLink(){
   const grid=$("classoraSettingsShortcuts")?.querySelector(".classora-quick-grid");
   if(!grid||$("cw116-replay-tour"))return;
   const btn=document.createElement("button");btn.type="button";btn.id="cw116-replay-tour";
   btn.innerHTML=icons.welcome+"<span></span>";grid.append(btn);
   const label=()=>{btn.querySelector("span").textContent=english()?"How to use Classora":"تعليم استخدام كلاسورا"};
   label();new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
   btn.addEventListener("click",replay);
 }
 function init(){
   platform();loginDesign();setupDock();replayLink();ensureWelcome();
   introReady=!$("classoraIntro")&&!document.body.classList.contains("classora-intro-active");
   window.addEventListener("classora-intro-finished",()=>{introReady=true;onAuth()});
   window.addEventListener("classora-auth-settled",onAuth);
   setTimeout(()=>{if(!$("classoraIntro"))introReady=true;askOnce()},3900);
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
 window.classoraReplayOnboarding=()=>{if(authed()&&introReady)openWelcome("tour",true)};
})();