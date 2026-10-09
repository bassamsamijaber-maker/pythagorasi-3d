/* Classora v117: interactive site tour, using actual Classora navigation and screens. */
(()=>{"use strict";
const $=id=>document.getElementById(id),english=()=>document.documentElement.lang==="en";
const steps=[
 {id:"lobby",nav:"classoraMobileLobbyBtn",target:"#classoraWelcomeCard,#platformLobby .lobby-topbar",title:["اللوبي","Lobby"],body:["هاي صفحة كلاسورا الفعلية: الترحيب، آخر درس، والإعلانات.","This is the real Classora dashboard with your greeting, recent lessons and news."]},
 {id:"subjects",nav:"classoraMobileSubjectsBtn",target:"#classoraMobileSubjectsBtn",title:["المواد","Subjects"],body:["فتحنا المواد. بتقدر تختار موضوع وتغيّر المعطيات وتتعلّم بالتجربة.","We opened Subjects. Choose a topic and explore interactive lessons."]},
 {id:"classes",nav:"classoraMobileClassesBtn",target:"#classoraMobileClassesBtn",title:["صفوفي","My classes"],body:["فتحنا صفوفك الحقيقية. هون الوظائف والأنشطة.","Your real class area is open. Find your assignments and activities here."]},
 {id:"exams",nav:"classoraMobileLobbyBtn",target:"#lobbyExamBtn,#classoraMobileLobbyBtn",title:["الامتحانات","Exams"],body:["من اللوبي بتقدر تدخل مركز الامتحانات والمسابقات.","From the Lobby, you can access exams and quizzes."]},
 {id:"chat",nav:"classoraMobileChatBtn",target:"#classoraMobileChatBtn",title:["الشات","Chat"],body:["هاي محادثات كلاسورا الحقيقية، للطلاب والمعلمين والدعم.","This is Classora's real chat, for classmates, teachers and support."]},
 {id:"settings",nav:"classoraMobileSettingsBtn",target:"#classoraSettingsShortcuts,#classoraMobileSettingsBtn",title:["الإعدادات والمساعدة","Settings & help"],body:["هون تقدر تغيّر اللغة والحساب وتعيد الجولة من زر التعليم.","Manage language and your account, or replay this tour from Settings."]}
];
let el=null,open=false,stage=-1,uid="",eligible=false,completed=false,waiting=false,doneIntro=false,saveDone=null,replayMode=false,seq=0;
const getTarget=selectors=>{
 for(const selector of selectors.split(",")){const node=document.querySelector(selector.trim());
   if(node){const r=node.getBoundingClientRect();if(r.width>4&&r.height>4)return node}}
 return null;
};
function markup(){
 if(el)return;
 el=document.createElement("div");el.id="classoraTour117";el.hidden=true;
 el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.setAttribute("aria-label","Classora tour");
 el.innerHTML='<div class="ct117-shade" data-edge="top"></div><div class="ct117-shade" data-edge="bottom"></div><div class="ct117-shade" data-edge="left"></div><div class="ct117-shade" data-edge="right"></div><div class="ct117-ring" aria-hidden="true"></div><section class="ct117-card"><div class="ct117-kicker"><span id="ct117-step"></span><button id="ct117-skip" class="ct117-exit" type="button">Skip</button></div><div class="ct117-track"><span id="ct117-progress"></span></div><h2 id="ct117-title"></h2><p id="ct117-text"></p><div class="ct117-actions"><button id="ct117-back" type="button">Back</button><button id="ct117-next" class="ct117-next" type="button">Next</button></div><small id="ct117-hint" class="ct117-hint"></small></section>';
 document.body.append(el);
 $("ct117-skip").addEventListener("click",finish);
 $("ct117-back").addEventListener("click",()=>stage<=0?finish():advance(stage-1));
 $("ct117-next").addEventListener("click",()=>stage===-1?advance(0):stage===steps.length-1?finish():advance(stage+1));
 document.addEventListener("keydown",e=>{if(open&&e.key==="Escape"){e.preventDefault();finish()}});
 window.addEventListener("resize",()=>{if(open)place()},{passive:true});
 window.addEventListener("orientationchange",()=>{if(open)place()},{passive:true});
 document.addEventListener("scroll",()=>{if(open)place()},{passive:true,capture:true});
}
function place(){
 if(!open)return;
 const vw=window.innerWidth,vh=window.innerHeight,margin=8;
 const stepData=steps[Math.max(0,stage)];
 const target=getTarget(stepData.target),r=target?.getBoundingClientRect();
 const x1=r?Math.max(9,r.left-margin):18,y1=r?Math.max(9,r.top-margin):18;
 const x2=r?Math.min(vw-9,r.right+margin):vw-18,y2=r?Math.min(vh-9,r.bottom+margin):Math.min(vh*.25,170);
 const draw=(edge,l,t,w,h)=>{const node=el.querySelector('[data-edge="'+edge+'"]');
 node.style.left=l+"px";node.style.top=t+"px";node.style.width=Math.max(0,w)+"px";node.style.height=Math.max(0,h)+"px"};
 draw("top",0,0,vw,y1);draw("bottom",0,y2,vw,vh-y2);
 draw("left",0,y1,x1,y2-y1);draw("right",x2,y1,vw-x2,y2-y1);
 const ring=el.querySelector(".ct117-ring");
 ring.style.left=x1+"px";ring.style.top=y1+"px";
 ring.style.width=Math.max(4,x2-x1)+"px";ring.style.height=Math.max(4,y2-y1)+"px";
 const card=el.querySelector(".ct117-card"),w=Math.min(382,vw-28),h=card.getBoundingClientRect().height||265;
 const y=vh-y2>=h+22?y2+12:y1>=h+22?y1-h-12:Math.max(12,(vh-h)/2);
 card.style.top=Math.max(10,Math.min(vh-h-10,y))+"px";
 card.style.left=Math.max(14,Math.min(vw-w-14,(x1+x2-w)/2))+"px";
}
function render(){
 if(!open)return;
 const i=english()?1:0,question=stage<0,data=steps[Math.max(0,stage)];
 el.querySelector(".ct117-card").dir=english()?"ltr":"rtl";
 $("ct117-step").textContent=question?(english()?"WELCOME":"أهلًا وسهلًا"):(english()?"STEP ":"الخطوة ")+(stage+1)+" / "+steps.length;
 $("ct117-title").textContent=question?(english()?"Want a tour of Classora?":"بدك جولة داخل كلاسورا؟"):data.title[i];
 $("ct117-text").textContent=question?(english()?"We'll open the actual pages together and highlight their controls.":"رح نفتح صفحات الموقع نفسها ونفرجيك الأزرار خطوة بخطوة."):data.body[i];
 $("ct117-skip").textContent=english()?"Skip":"تخطي";
 $("ct117-back").textContent=question?(english()?"No, thanks":"لا، شكرًا"):(english()?"Back":"السابق");
 $("ct117-next").textContent=question?(english()?"Start tour":"ابدأ الجولة"):stage===steps.length-1?(english()?"Finish":"إنهاء"):(english()?"Next":"التالي");
 $("ct117-hint").textContent=question?(english()?"This appears automatically only for newly created accounts. Replay anytime from Settings.":"بتظهر تلقائيًا للحسابات الجديدة بس، وبتقدر تعيدها من الإعدادات."):
   (english()?"These are the real Classora pages. You can tap their highlighted buttons.":"هاي الصفحات الحقيقية في كلاسورا. بتقدر تكبس على الأزرار المضيئة.");
 $("ct117-progress").style.width=(question?4:((stage+1)/steps.length)*100)+"%";
 place();
}
function goTo(index,token){
 try{sessionStorage.removeItem("classora_subject_origin")}catch{}
 $("classoraMobileLobbyBtn")?.click();
 if(index===0||index===3){setTimeout(place,180);return}
 setTimeout(()=>{
   if(!open||token!==seq)return;
   $(steps[index].nav)?.click();
   setTimeout(()=>{if(open&&token===seq){render();place()}},320);
 },130);
}
function advance(to){
 if(!open)return;
 stage=Math.max(0,Math.min(steps.length-1,to));
 const token=++seq;goTo(stage,token);render();
}
function persist(){
 if(replayMode||!uid)return;
 completed=true;try{localStorage.setItem("classora_tour_v117_"+uid,"done")}catch{}
 Promise.resolve().then(()=>saveDone?.()).catch(e=>console.warn("Classora tour state",e));
}
function finish(){
 if(!open)return;
 ++seq;open=false;el.hidden=true;document.body.classList.remove("classora-tour117-active");
 persist();
 try{sessionStorage.removeItem("classora_subject_origin")}catch{}
 $("classoraMobileLobbyBtn")?.click();
 stage=-1;replayMode=false;
}
function start(replay=false){
 if(!document.body.classList.contains("classora-authenticated"))return;
 if($("classoraIntro")){waiting=!replay;return}
 markup();open=true;replayMode=replay;stage=replay?0:-1;el.hidden=false;
 document.body.classList.add("classora-tour117-active");
 if(replay){++seq;goTo(0,seq)}
 render();$("ct117-next")?.focus({preventScroll:true});
}
function startIfNew(){
 if(!waiting||!eligible||completed||open||!doneIntro)return;
 if($("classoraIntro")){setTimeout(startIfNew,250);return}
 waiting=false;start(false);
}
function profileReady(details){
 if(!details?.uid)return;
 if(uid!==details.uid&&open)finish();
 uid=details.uid;eligible=details.eligible===true;completed=details.completed===true;
 saveDone=details.saveCompletion;
 try{if(localStorage.getItem("classora_tour_v117_"+uid)==="done")completed=true}catch{}
 waiting=eligible&&!completed;
 if(doneIntro)setTimeout(startIfNew,320);
}
function replay(){
 if($("settingsModal")?.classList.contains("open"))$("closeSettingsModal")?.click();
 setTimeout(()=>start(true),200);
}
function init(){
 markup();
 doneIntro=!$("classoraIntro")&&!document.body.classList.contains("classora-intro-active");
 if(doneIntro&&waiting)startIfNew();
 window.addEventListener("classora-intro-finished",()=>{doneIntro=true;setTimeout(startIfNew,280)});
}
window.classoraGuidedTourV117={profileReady,start:replay,close:finish};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();