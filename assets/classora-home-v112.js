/* Classora Home v112 — announcements, class tasks, and admin composer.
 * Uses the existing siteControls/main document and its Firestore rules:
 * only authorized admins can write. No new collection or permissions.
 * Announcements: maximum 5 items, four-second automatic rotation.
 */
export function mountClassoraHomeV112(api){
 "use strict";
 const get=id=>document.getElementById(id);
 const lang=()=>document.documentElement.lang==="en"?"en":"ar";
 const t=(ar,en)=>lang()==="en"?en:ar;
 const svg=(type)=>{
  const paths={
   arabic:'<path d="M4 6q4-2 8 1 4-3 8-1v13q-4-2-8 1-4-3-8-1zM12 7v13"/><path d="M6 11h3m6 0h3M6 14h3"/>',
   pythagoras:'<path d="M4 20V4l16 16H4Z"/><path d="M4 14h6v6M13 13l3 3"/><circle cx="17" cy="5" r="2"/>',
   periodic:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-45 12 12)"/>',
   topic:'<path d="M3 6c3-1.8 6-1.7 9 0 3-1.7 6-1.8 9 0v13c-3-1.6-6-1.7-9 0-3-1.7-6-1.6-9 0V6ZM12 6v13"/>',
   info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/>'
  };
  return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" stroke-linecap="round">'+(paths[type]||paths.info)+'</svg>';
 };
 const defaultPromos=[
  {id:"default-arabic",kind:"arabic",titleAr:"المفعول به",titleEn:"Arabic: The object",bodyAr:"درس جديد بالقواعد: شرح واضح مع أمثلة وتمارين تفاعلية.",bodyEn:"Explore the object in Arabic grammar with examples and interactive exercises.",target:"all",grade:7,active:true},
  {id:"default-pythagoras",kind:"pythagoras",titleAr:"عجلة فيثاغورس التفاعلية",titleEn:"Interactive Pythagoras wheel",bodyAr:"جرّب تحريك العجلة والرمل واكتشف علاقة أضلاع المثلث القائم.",bodyEn:"Explore the wheel, sand and right-triangle relationships.",target:"all",active:true},
  {id:"default-periodic",kind:"periodic",titleAr:"الجدول الدوري للعناصر",titleEn:"Periodic table of elements",bodyAr:"استكشف 118 عنصرًا بخصائصها ورسوماتها.",bodyEn:"Explore the elements, their properties and interactive models.",target:"all",active:true}
 ];
 let stored=null,items=[],selected=0,timer=null,paused=false,loadedTasksFor="",taskLoading=false,lastTaskRead=0,tasks=[],classNames=[];
 const center=get("classoraPromoCenter"),slides=get("classoraPromoSlides"),dots=get("classoraPromoDots");
 const status=get("classoraPromoAdminStatus"),adminList=get("classoraPromoAdminList");
 const role=()=>api.profile()?.role||"";
 const isAdmin=()=>Boolean(api.isAdmin());
 function normalize(row){
  if(!row||typeof row!=="object")return null;
  const kind=["arabic","pythagoras","periodic","topic","info"].includes(row.kind)?row.kind:"info";
  return {
   id:String(row.id||"").slice(0,80),kind,
   titleAr:String(row.titleAr||"").slice(0,85),titleEn:String(row.titleEn||"").slice(0,85),
   bodyAr:String(row.bodyAr||"").slice(0,260),bodyEn:String(row.bodyEn||"").slice(0,260),
   target:["all","student","teacher","admin","class"].includes(row.target)?row.target:"all",
   classId:String(row.classId||"").slice(0,110),
   grade:Math.max(7,Math.min(10,Number(row.grade)||8)),
   subject:["math","science","arabic","english","history","geography"].includes(row.subject)?row.subject:"arabic",
   topicRef:String(row.topicRef||"").slice(0,110),
   active:row.active!==false
  };
 }
 function allowed(p){
  const profile=api.profile();
  if(!profile||!p.active)return false;
  if(p.target==="admin")return isAdmin();
  if(p.target==="student")return role()==="student";
  if(p.target==="teacher")return role()==="teacher"||isAdmin();
  if(p.target==="class")return isAdmin()||(Array.isArray(profile.classIds)&&profile.classIds.includes(p.classId));
  return true;
 }
 function allRows(){return stored===null?defaultPromos:stored;}
 function localTitle(p){return (lang()==="en"?p.titleEn:p.titleAr)||p.titleAr||p.titleEn||t("جديد على كلاسورا","New on Classora");}
 function localBody(p){return (lang()==="en"?p.bodyEn:p.bodyAr)||p.bodyAr||p.bodyEn||"";}
 const newNode=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!=null)x.textContent=text;return x};
 function goTo(p){
  if(p.kind==="pythagoras"){get("lobbyLabBtn")?.click();return}
  if(p.kind==="periodic"){get("periodicTableBtn")?.click();return}
  if(p.kind==="arabic"||p.kind==="topic"){
   if(!window.classoraCurriculum?.openAt)return;
   window.classoraCurriculum.openAt(p.kind==="arabic"?7:p.grade,p.kind==="arabic"?"arabic":p.subject,p.kind==="arabic"?"المفعول به":p.topicRef);
   return;
  }
  // Informational announcements intentionally have no external navigation.
 }
 function render(){
  if(!center||!slides||!dots)return;
  const langNow=lang(),welcome=get("classoraWelcomeCard"),name=String(api.profile()?.displayName||"").trim().split(/\s+/)[0];
  if(welcome){
   welcome.hidden=!api.profile();
   welcome.querySelector(".cw-name").textContent=name||t("أهلًا فيك","Welcome");
   welcome.querySelector(".cw-role").textContent=role()==="student"?t("مساحة الطالب","Student workspace"):role()==="teacher"?t("مساحة المعلم","Teacher workspace"):isAdmin()?t("مساحة الأدمن","Admin workspace"):t("أهلًا في كلاسورا","Welcome to Classora");
   const ids=api.profile()?.classIds||[];
   welcome.querySelector(".cw-grade").textContent=classNames.length?t("صفّي: ","My class: ")+classNames.slice(0,2).join("، "):api.profile()?.grade?t("الصف ","Grade ")+api.profile().grade:Array.isArray(ids)&&ids.length?t("صفوفي: ","Classes: ")+ids.length:t("تعلّم وجرّب واكتشف","Learn. Explore. Create.");
  }
  center.querySelector(".cp-section-heading").textContent=t("آخر الإضافات","What's new");
  center.querySelector(".cp-section-description").textContent=t("إعلانات كلاسورا التعليمية","Classora learning highlights");
  center.querySelector(".cp-prev").setAttribute("aria-label",t("الإعلان السابق","Previous announcement"));
  center.querySelector(".cp-next").setAttribute("aria-label",t("الإعلان التالي","Next announcement"));
  items=allRows().filter(allowed).slice(0,5);
  center.hidden=!items.length||!api.profile();
  slides.replaceChildren();dots.replaceChildren();
  if(!items.length){stop();renderTasks();return}
  if(selected>=items.length)selected=0;
  for(const [idx,p] of items.entries()){
   const slide=newNode("article","cp-slide cp-"+p.kind);
   slide.dataset.index=String(idx);
   const art=newNode("div","cp-illustration");art.innerHTML=svg(p.kind);
   const caption=newNode("div","cp-copy");
   caption.append(newNode("div","cp-eyebrow",t("اكتشف شيئًا جديدًا","DISCOVER SOMETHING NEW")),newNode("h3","cp-title",localTitle(p)),newNode("p","cp-description",localBody(p)));
   const button=newNode("button","cp-enter",t("ادخل عليه","Explore"));
   button.type="button";
   if(p.kind==="info"){button.textContent=t("إعلان","Announcement");button.disabled=true}
   else button.addEventListener("click",()=>goTo(p));
   caption.append(button);slide.append(art,caption);slides.append(slide);
   const dot=newNode("button","cp-dot");dot.type="button";dot.setAttribute("aria-label",t("انتقل إلى إعلان ","Go to announcement ")+(idx+1));dot.addEventListener("click",()=>show(idx));dots.append(dot);
  }
  center.querySelector(".cp-controls").hidden=items.length===1;
  show(selected);
  renderTasks();
  run();
 }
 function show(index){
  if(!items.length)return;
  selected=(index+items.length)%items.length;
  slides?.querySelectorAll(".cp-slide").forEach((slide,i)=>{
   const active=i===selected;slide.classList.toggle("active",active);slide.hidden=!active;
   slide.setAttribute("aria-hidden",String(!active));
  });
  dots?.querySelectorAll(".cp-dot").forEach((dot,i)=>dot.classList.toggle("active",i===selected));
  const counter=get("classoraPromoCounter");if(counter)counter.textContent=(selected+1)+" / "+items.length;
 }
 function stop(){if(timer){clearInterval(timer);timer=null}}
 function run(){
  stop();if(items.length<=1)return;
  timer=setInterval(()=>{
   if(paused||document.hidden||document.body.classList.contains("classora-overlay-open")||document.body.classList.contains("classora-mobile-typing"))return;
   show(selected+1);
  },4000);
 }
 function renderTasks(){
  const section=get("classoraStudentTasks"),list=get("classoraStudentTasksList");
  if(!section||!list)return;
  const student=role()==="student"&&!isAdmin();
  section.hidden=!student;
  if(!student)return;
  section.querySelector("h2").textContent=t("المطلوب منك","Your assignments");
  list.replaceChildren();
  const visible=tasks.filter(x=>!x.submitted).slice(0,4);
  if(!visible.length){
   const empty=newNode("div","ct-empty",taskLoading?t("جاري التحقق من وظائف صفوفك...","Checking class assignments..."):t("ما في وظائف غير مسلّمة حاليًا.","No unfinished assignments right now."));
   list.append(empty);
  }else{
   for(const task of visible){
    const row=newNode("div","ct-task");
    const label=newNode("div","ct-task-copy");
    label.append(newNode("b","",task.title||t("وظيفة مدرسية","Assignment")),newNode("small","",task.className+(task.dueDate?t(" • التسليم: "," • Due: ")+task.dueDate:"")));
    const btn=newNode("button","ct-enter",t("ابدأ الآن","Start now"));
    btn.type="button";
    btn.addEventListener("click",()=>{
     get("lobbyClassBtn")?.click();
     setTimeout(()=>get("studentAssignmentsList")?.scrollIntoView({behavior:"smooth",block:"start"}),250);
    });
    row.append(label,btn);list.append(row);
   }
  }
  const last=lastLesson();
  if(last){
   const b=newNode("button","ct-resume",t("كمّل آخر درس: ","Continue: ")+last.topic);
   b.type="button";
   b.addEventListener("click",()=>window.classoraCurriculum?.openAt(last.grade,last.subject,last.topic));
   list.append(b);
  }
 }
 function lastLesson(){
  try{
   const uid=api.auth.currentUser?.uid;
   const value=uid?JSON.parse(localStorage.getItem("classora_last_topic_v112_"+uid)||"null"):null;
   if(!value||!value.topic||!Number.isFinite(Number(value.grade)))return null;
   return value;
  }catch{return null}
 }
 async function refreshTasks(force=false){
  const profile=api.profile(),uid=api.auth.currentUser?.uid;
  if(!profile||profile.role!=="student"||!uid){tasks=[];renderTasks();return}
  if(taskLoading||(!force&&loadedTasksFor===uid&&Date.now()-lastTaskRead<300000))return;
  taskLoading=true;renderTasks();
  try{
   const out=[],names=[],ids=[...new Set(Array.isArray(profile.classIds)?profile.classIds:[])].slice(0,12);
   // Fetch a lightweight summary, not the full classmates/answers UI.
   for(const classId of ids){
    if(!/^[\w-]{5,100}$/.test(classId))continue;
    try{
     const member=await api.getDoc(api.doc(api.db,"classes",classId,"members",uid));
     if(!member.exists())continue;
     const c=await api.getDoc(api.doc(api.db,"classes",classId));
     if(!c.exists())continue;
     names.push(String(c.data().name||"").slice(0,70));
     const snaps=await api.getDocs(api.collection(api.db,"classes",classId,"assignments"));
     const recent=snaps.docs.map(d=>({id:d.id,...d.data()})).filter(a=>a.active!==false&&a.hidden!==true).sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0)).slice(0,8);
     const checks=await Promise.all(recent.map(async a=>{
      try{
       const sub=await api.getDoc(api.doc(api.db,"classes",classId,"assignments",a.id,"submissions",uid));
       if(sub.exists())return null;
       return {id:a.id,title:String(a.title||"").slice(0,100),className:String(c.data().name||"").slice(0,70),dueDate:String(a.dueDate||"").slice(0,30),submitted:false,createdAt:a.createdAt?.seconds||0};
      }catch{return null}
     }));
     out.push(...checks.filter(Boolean));
    }catch(err){console.warn("Classora task summary unavailable",err?.message)}
   }
   if(api.auth.currentUser?.uid!==uid)return;
   tasks=out.sort((a,b)=>b.createdAt-a.createdAt);classNames=names;loadedTasksFor=uid;lastTaskRead=Date.now();render();
  }catch(err){console.warn("Classora task summary",err)}
  finally{taskLoading=false;renderTasks()}
 }
 function renderAdmin(){
  const page=get("adminViewPromos"),list=adminList;
  if(!page||!list)return;
  page.querySelector(".cp-admin-count").textContent=t("الإعلانات: ","Announcements: ")+allRows().filter(x=>x.active).length+" / 5";
  list.replaceChildren();
  for(const p of allRows()){
   const row=newNode("div","cp-admin-row");
   const name=newNode("div","cp-admin-details");
   name.append(newNode("b","",p.titleAr||p.titleEn||"—"),newNode("small","",p.active?t("مفعّل","Active"):t("متوقف","Paused")));
   const actions=newNode("div","cp-admin-actions");
   for(const [action,label] of [["toggle",p.active?t("إيقاف","Pause"):t("تشغيل","Enable")],["remove",t("حذف","Delete")]]){
    const button=newNode("button","cp-admin-"+action,label);button.type="button";
    button.addEventListener("click",()=>changePromo(action,p.id));actions.append(button);
   }
   row.append(name,actions);list.append(row);
  }
  if(!allRows().length)list.append(newNode("p","ct-empty",t("ما في إعلانات بعد.","No announcements yet.")));
 }
 function message(ar,en){if(status)status.textContent=t(ar,en)}
 async function updatePromos(compute){
  if(!isAdmin()||!api.auth.currentUser){message("ليس لديك صلاحية الإدارة.","No administrator access.");return}
  const ref=api.doc(api.db,"siteControls","main");
  try{
   await api.runTransaction(api.db,async transaction=>{
    const snap=await transaction.get(ref);
    const old=Array.isArray(snap.data()?.homePromos)?snap.data().homePromos.map(normalize).filter(Boolean):defaultPromos.map(normalize);
    const next=compute(old);
    if(next.length>5||next.filter(p=>p.active).length>5)throw Error("limit-five");
    transaction.set(ref,{homePromos:next,updatedBy:api.auth.currentUser.uid,updatedAt:api.serverTimestamp()},{merge:true});
   });
   message("تم الحفظ بنجاح.","Saved successfully.");
  }catch(err){
   console.error("Classora announcement save",err);
   message(err?.message==="limit-five"?"الحد الأقصى 5 إعلانات. احذف إعلان قبل الإضافة.":"تعذّر الحفظ. افحص اتصالك وصلاحيات الأدمن.",
     err?.message==="limit-five"?"Maximum 5 announcements. Remove one first.":"Couldn't save. Check your connection and admin permissions.");
  }
 }
 function changePromo(action,id){
  if(!isAdmin())return;
  updatePromos(old=>action==="remove"?old.filter(p=>p.id!==id):old.map(p=>p.id===id?{...p,active:!p.active}:p));
 }
 function addPromo(){
  const form=get("classoraPromoAdminForm");
  if(!form||!isAdmin())return;
  const pick=name=>String(form.elements.namedItem(name)?.value||"").trim();
  const kind=pick("kind"),titleAr=pick("titleAr"),bodyAr=pick("bodyAr");
  if(titleAr.length<2||bodyAr.length<5){message("اكتب عنوانًا ووصفًا واضحين.","Enter a title and description.");return}
  const promo=normalize({id:"home_"+Date.now()+"_"+Math.random().toString(36).slice(2,7),kind,titleAr,bodyAr,titleEn:pick("titleEn"),bodyEn:pick("bodyEn"),target:pick("target"),classId:pick("classId"),grade:pick("grade"),subject:pick("subject"),topicRef:pick("topicRef"),active:true});
  if(promo.target==="class"&&!promo.classId){message("أدخل معرّف الصف المستهدف.","Enter the target class ID.");return}
  updatePromos(old=>[...old,promo]).then(()=>{if(status?.textContent?.includes(t("بنجاح","successfully")))form.reset()});
 }
 const setPromos=rows=>{stored=Array.isArray(rows)?rows.map(normalize).filter(Boolean).slice(0,5):null;render();renderAdmin()};
 get("classoraPromoPrev")?.addEventListener("click",()=>show(selected-1));
 get("classoraPromoNext")?.addEventListener("click",()=>show(selected+1));
 center?.addEventListener("mouseenter",()=>{paused=true});
 center?.addEventListener("mouseleave",()=>{paused=false});
 center?.addEventListener("focusin",()=>{paused=true});
 center?.addEventListener("focusout",()=>{paused=false});
 const refresh=()=>{
  render();
  if(role()==="student"&&!isAdmin())refreshTasks();
 };
 new MutationObserver(refresh).observe(document.body,{attributes:true,attributeFilter:["class","data-user-role"]});
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
 document.addEventListener("visibilitychange",()=>{if(!document.hidden&&role()==="student")refreshTasks()});
 get("classoraPromoAdminForm")?.addEventListener("submit",event=>{event.preventDefault();addPromo()});
 const curriculum=window.classoraCurriculum;
 if(curriculum?.openAt&&!curriculum.__classoraV112Tracked){
  const original=curriculum.openAt.bind(curriculum);
  curriculum.__classoraV112Tracked=true;
  curriculum.openAt=(grade,subject,topic)=>{
   const result=original(grade,subject,topic);
   try{
    const uid=api.auth.currentUser?.uid;
    if(uid&&topic&&Number(grade)>=7&&Number(grade)<=10){
     localStorage.setItem("classora_last_topic_v112_"+uid,JSON.stringify({grade:Number(grade),subject:String(subject||"").slice(0,24),topic:String(topic).slice(0,90)}));
    }
   }catch{}
   renderTasks();
   return result;
  };
 }
 render();renderAdmin();
 return {setPromos,refresh,refreshAdmin:renderAdmin,refreshTasks};
}
