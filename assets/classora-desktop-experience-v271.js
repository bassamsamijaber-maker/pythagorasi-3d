/* Classora v271 — desktop Liquid Glass, material navigation/search, verified requests.
   Hooks existing dashboard and curriculum; only confirms requests after Firestore acknowledges. */
(() => {
 "use strict";
 const LANGS=["ar","en","es","ko","de","it","hi","tr"];
 const L={
 ar:{lobby:"اللوبي",subjects:"المواد",all:"كل الأدوات",welcome:"المواد الدراسية",intro:"اختار صفك والمادة اللي بدك تتعلمها.",grade:"الصف",topic:"مواضيع",open:"افتح المادة",search:"ابحث عن مادة أو درس...",searchTitle:"المواد والدروس",available:"المواد الموجودة",missing:"المادة مش موجودة؟",request:"اطلب إضافة هذه المادة",sending:"جاري إرسال الطلب...",sent:"تم إرسال طلب باسم هذه المادة: {name}",failed:"تعذّر إرسال طلب المادة. جرّب مرة ثانية.",minimum:"اكتب اسم المادة أولًا.",noResults:"هذه المادة غير متوفرة حاليًا.",subjectReq:"طلب إضافة مادة",notReady:"المادة قيد التحميل، حاول مرة ثانية.",topicGroup:"الدروس",gradeName:"الصف {n}",back:"الرجوع للّوبي"},
 en:{lobby:"Lobby",subjects:"Subjects",all:"All tools",welcome:"Your subjects",intro:"Choose your grade and the subject you want to learn.",grade:"Grade",topic:"topics",open:"Open subject",search:"Search subjects or lessons...",searchTitle:"Subjects and lessons",available:"Available subjects",missing:"Can't find your subject?",request:"Request this subject",sending:"Sending request...",sent:"A request for this subject was sent: {name}",failed:"We couldn't send your subject request. Please retry.",minimum:"Enter a subject name first.",noResults:"This subject isn't available yet.",subjectReq:"Subject request",notReady:"Subjects are loading. Try again.",topicGroup:"Lessons",gradeName:"Grade {n}",back:"Back to Lobby"},
 es:{lobby:"Inicio",subjects:"Materias",all:"Todas las herramientas",welcome:"Tus materias",intro:"Elige tu curso y la materia que quieres aprender.",grade:"Curso",topic:"temas",open:"Abrir materia",search:"Buscar materias o lecciones...",searchTitle:"Materias y lecciones",available:"Materias disponibles",missing:"¿No encuentras tu materia?",request:"Solicitar esta materia",sending:"Enviando solicitud...",sent:"Se envió una solicitud para esta materia: {name}",failed:"No se pudo enviar la solicitud. Inténtalo de nuevo.",minimum:"Escribe el nombre de una materia.",noResults:"Esta materia aún no está disponible.",subjectReq:"Solicitud de materia",notReady:"Las materias se están cargando.",topicGroup:"Lecciones",gradeName:"Curso {n}",back:"Volver al inicio"},
 ko:{lobby:"홈",subjects:"과목",all:"모든 도구",welcome:"내 과목",intro:"학년과 공부할 과목을 선택하세요.",grade:"학년",topic:"주제",open:"과목 열기",search:"과목이나 수업 검색...",searchTitle:"과목과 수업",available:"이용 가능한 과목",missing:"찾는 과목이 없나요?",request:"이 과목 추가 요청",sending:"요청 전송 중...",sent:"다음 과목에 대한 요청이 전송되었습니다: {name}",failed:"요청을 전송하지 못했습니다. 다시 시도하세요.",minimum:"과목 이름을 입력하세요.",noResults:"아직 제공되지 않는 과목입니다.",subjectReq:"과목 추가 요청",notReady:"과목을 불러오는 중입니다.",topicGroup:"수업",gradeName:"{n}학년",back:"홈으로"},
 de:{lobby:"Startseite",subjects:"Fächer",all:"Alle Werkzeuge",welcome:"Deine Fächer",intro:"Wähle deine Klasse und das Fach.",grade:"Klasse",topic:"Themen",open:"Fach öffnen",search:"Fächer oder Lektionen suchen...",searchTitle:"Fächer und Lektionen",available:"Verfügbare Fächer",missing:"Fach nicht gefunden?",request:"Dieses Fach anfragen",sending:"Anfrage wird gesendet...",sent:"Anfrage für dieses Fach gesendet: {name}",failed:"Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.",minimum:"Gib einen Fachnamen ein.",noResults:"Dieses Fach ist noch nicht verfügbar.",subjectReq:"Fachanfrage",notReady:"Fächer werden geladen.",topicGroup:"Lektionen",gradeName:"Klasse {n}",back:"Zur Startseite"},
 it:{lobby:"Home",subjects:"Materie",all:"Tutti gli strumenti",welcome:"Le tue materie",intro:"Scegli la classe e la materia da studiare.",grade:"Classe",topic:"argomenti",open:"Apri materia",search:"Cerca materie o lezioni...",searchTitle:"Materie e lezioni",available:"Materie disponibili",missing:"Non trovi la materia?",request:"Richiedi questa materia",sending:"Invio della richiesta...",sent:"Richiesta inviata per questa materia: {name}",failed:"Impossibile inviare la richiesta. Riprova.",minimum:"Inserisci il nome della materia.",noResults:"Questa materia non è ancora disponibile.",subjectReq:"Richiesta materia",notReady:"Le materie si stanno caricando.",topicGroup:"Lezioni",gradeName:"Classe {n}",back:"Torna alla home"},
 hi:{lobby:"होम",subjects:"विषय",all:"सभी टूल",welcome:"आपके विषय",intro:"अपनी कक्षा और पढ़ने का विषय चुनें।",grade:"कक्षा",topic:"पाठ",open:"विषय खोलें",search:"विषय या पाठ खोजें...",searchTitle:"विषय और पाठ",available:"उपलब्ध विषय",missing:"विषय नहीं मिल रहा?",request:"इस विषय का अनुरोध करें",sending:"अनुरोध भेजा जा रहा है...",sent:"इस विषय के लिए अनुरोध भेज दिया गया है: {name}",failed:"अनुरोध नहीं भेज पाए। फिर कोशिश करें।",minimum:"पहले विषय का नाम लिखें।",noResults:"यह विषय अभी उपलब्ध नहीं है।",subjectReq:"विषय अनुरोध",notReady:"विषय लोड हो रहे हैं।",topicGroup:"पाठ",gradeName:"कक्षा {n}",back:"होम पर वापस"},
 tr:{lobby:"Ana sayfa",subjects:"Dersler",all:"Tüm araçlar",welcome:"Derslerin",intro:"Sınıfını ve öğrenmek istediğin dersi seç.",grade:"Sınıf",topic:"konu",open:"Dersi aç",search:"Ders veya konu ara...",searchTitle:"Dersler ve konular",available:"Mevcut dersler",missing:"Dersi bulamadın mı?",request:"Bu dersi talep et",sending:"Talep gönderiliyor...",sent:"Bu ders için talep gönderildi: {name}",failed:"Talep gönderilemedi. Tekrar dene.",minimum:"Önce ders adı yaz.",noResults:"Bu ders henüz mevcut değil.",subjectReq:"Ders talebi",notReady:"Dersler yükleniyor.",topicGroup:"Konular",gradeName:"{n}. sınıf",back:"Ana sayfaya dön"}
 };
 const SUBJECTS={
  geometry:{ar:"الهندسة",en:"Geometry",es:"Geometría",ko:"기하학",de:"Geometrie",it:"Geometria",hi:"ज्यामिति",tr:"Geometri"},
  math:{ar:"الرياضيات",en:"Mathematics",es:"Matemáticas",ko:"수학",de:"Mathematik",it:"Matematica",hi:"गणित",tr:"Matematik"},
  science:{ar:"العلوم",en:"Science",es:"Ciencias",ko:"과학",de:"Naturwissenschaften",it:"Scienze",hi:"विज्ञान",tr:"Fen Bilimleri"},
  arabic:{ar:"العربي — قواعد",en:"Arabic Grammar",es:"Gramática árabe",ko:"아랍어 문법",de:"Arabische Grammatik",it:"Grammatica araba",hi:"अरबी व्याकरण",tr:"Arapça Dilbilgisi"},
  english:{ar:"الإنجليزي — قواعد",en:"English Grammar",es:"Gramática inglesa",ko:"영어 문법",de:"Englische Grammatik",it:"Grammatica inglese",hi:"अंग्रेज़ी व्याकरण",tr:"İngilizce Dilbilgisi"},
  history:{ar:"التاريخ",en:"History",es:"Historia",ko:"역사",de:"Geschichte",it:"Storia",hi:"इतिहास",tr:"Tarih"},
  geography:{ar:"الجغرافيا",en:"Geography",es:"Geografía",ko:"지리",de:"Geografie",it:"Geografia",hi:"भूगोल",tr:"Coğrafya"}
 };
 const get=id=>document.getElementById(id);
 const iconPaths={
  book:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1z"/><path d="M12 6v14"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  home:'<path d="m3 11 9-8 9 8v10H3V11z"/><path d="M9 21v-8h6v8"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 9h18c0-1-3-2-3-9M10 21h4"/>',
  search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>'
 };
 const svg=k=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+iconPaths[k]+'</svg>';
 let dashboard,subjectPanel,searchWrap,searchInput,searchPanel,subjectList,gradeChoice=8,data={},currentView="lobby",busy=false,activeQuery="",materialsLoaded=false;
 const language=()=>{const l=String(document.documentElement.lang||"en").toLowerCase().split("-")[0];return L[l]?l:"en"};
 const t=(key)=>L[language()][key]||L.en[key]||key;
 const format=(str,name)=>str.replace("{name}",name);
 const subjTitle=k=>SUBJECTS[k]?.[language()]||SUBJECTS[k]?.en||k;
 const norm=x=>String(x||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase().trim();
 function available(){return Object.keys(data[gradeChoice]||{}).filter(k=>SUBJECTS[k]&&Array.isArray(data[gradeChoice][k]));}
 function rawName(topic){return typeof topic==="string"?topic:String(topic?.title||"")}
 function allMatches(query){
   const q=norm(query),out=[];
   if(!q)return [];
   for(const grade of [7,8,9,10])for(const key of Object.keys(data[grade]||{})){
     if(!SUBJECTS[key])continue;
     const labels=Object.values(SUBJECTS[key]);
     if(labels.some(name=>norm(name).includes(q))){
       out.push({grade,key,topic:"",label:subjTitle(key),count:(data[grade][key]||[]).length});
     }
     for(const topic of data[grade][key]||[]){
       const name=rawName(topic);
       if(norm(name).includes(q))out.push({grade,key,topic:name,label:name,count:0});
     }
   }
   const uniq=new Set();
   return out.filter(item=>{
     const id=[item.grade,item.key,item.topic].join(":");
     if(uniq.has(id))return false;
     uniq.add(id);return true;
   }).slice(0,22);
 }
 function getGrade(){
   const saved=Number(localStorage.getItem("classora_curriculum_grade")||8);
   return [7,8,9,10].includes(saved)?saved:8;
 }
 function updateActive(){
   const root=get("cl270Sidebar");
   root?.querySelectorAll(".cl270-nav").forEach(n=>{
     n.classList.toggle("is-active",n.dataset.cl270Go===(currentView==="subjects"?"subjects":"dashboard"));
   });
   const tabs=dashboard.querySelectorAll(".cl271-tabs button");
   tabs.forEach(b=>{const yes=b.dataset.cl271View===currentView;b.classList.toggle("is-active",yes);b.setAttribute("aria-current",yes?"page":"false")});
 }
 function show(view){
   if(view==="all"){
     currentView="lobby";
     dashboard.classList.remove("cl271-subjects-view");
     dashboard.querySelector(".cl270-more-button")?.click();
   } else {
     currentView=view==="subjects"?"subjects":"lobby";
     dashboard.classList.toggle("cl271-subjects-view",currentView==="subjects");
   }
   updateActive();
   const pageHeading=dashboard.querySelector(".cl270-head h2");
   if(pageHeading)pageHeading.textContent=t(currentView==="subjects"?"subjects":"lobby");
   if(currentView==="subjects")renderSubjects();
   const shell=dashboard.closest(".lobby-shell");
   shell?.scrollTo({top:0,behavior:"smooth"});
 }
 function openItem(key,grade,topic){
   localStorage.setItem("classora_curriculum_grade",String(grade));
   const curriculum=window.classoraCurriculum;
   if(curriculum?.openAt){
     try{curriculum.openAt(grade,key,topic||"");return}catch(e){console.warn("Classora subject open",e)}
   }
   const hub=window.classoraLearningHub;
   if(hub?.openSubject){hub.openSubject(key);return}
   const button=get("classoraMobileSubjectsBtn");
   if(button){button.click();return}
   status(t("notReady"),false);
 }
 function renderSubjects(){
   if(!subjectPanel)return;
   const cards=get("cl271SubjectCards"),grades=get("cl271GradeChoices"),description=get("cl271SubjectIntro");
   if(!cards||!grades)return;
   description.textContent=t("intro");
   get("cl271SubjectTitle").textContent=t("welcome");
   get("cl271Available").textContent=t("available");
   grades.replaceChildren();
   for(const grade of [7,8,9,10]){
     const b=document.createElement("button");b.type="button";b.className="cl271-grade"+(grade===gradeChoice?" is-active":"");
     b.textContent=t("gradeName").replace("{n}",grade);
     b.setAttribute("aria-pressed",String(grade===gradeChoice));
     b.addEventListener("click",()=>{
       gradeChoice=grade;localStorage.setItem("classora_curriculum_grade",String(grade));renderSubjects();
     });
     grades.append(b);
   }
   cards.replaceChildren();
   available().forEach(key=>{
     const b=document.createElement("button");
     b.type="button";b.className="cl271-subject-card";
     const symbol=document.createElement("span");symbol.className="cl271-subject-icon";symbol.innerHTML=svg("book");
     const info=document.createElement("span");info.className="cl271-subject-info";
     const name=document.createElement("strong");name.textContent=subjTitle(key);
     const sub=document.createElement("small");
     sub.textContent=(data[gradeChoice][key]||[]).length+" "+t("topic");
     info.append(name,sub);const arrow=document.createElement("span");arrow.className="cl271-arrow";arrow.textContent="›";
     b.append(symbol,info,arrow);b.addEventListener("click",()=>openItem(key,gradeChoice));
     cards.append(b);
   });
 }
 function status(message,success){
   const el=get("cl271Status");if(!el)return;
   el.textContent=message;el.hidden=false;el.dataset.success=success?"true":"false";
 }
 function makeSearchOption(item){
   const b=document.createElement("button");b.type="button";b.className="cl271-search-option";
   const name=document.createElement("span");name.textContent=item.label;
   const meta=document.createElement("small");meta.textContent=t("gradeName").replace("{n}",item.grade)+" · "+subjTitle(item.key);
   b.append(name,meta);
   b.addEventListener("click",()=>{searchPanel.hidden=true;searchInput.value="";openItem(item.key,item.grade,item.topic)});
   return b;
 }
 function search(){
   const query=searchInput.value.trim();
   activeQuery=query;
   searchPanel.hidden=false;
   const host=get("cl270SearchOptions");
   host.replaceChildren();
   const heading=searchPanel.querySelector("[data-cl270-key='searchResults']");
   if(heading)heading.textContent=t("searchTitle");
   const rows=allMatches(query);
   if(!query){
     const label=document.createElement("span");label.className="cl271-hint";label.textContent=t("available");
     host.append(label);
     for(const key of available().slice(0,7))host.append(makeSearchOption({key,grade:gradeChoice,topic:"",label:subjTitle(key)}));
     return;
   }
   if(rows.length)rows.forEach(x=>host.append(makeSearchOption(x)));
   else{
     const empty=document.createElement("p");empty.className="cl271-hint";empty.textContent=t("noResults");host.append(empty);
     addRequestButton(host,query);
   }
 }
 function addRequestButton(host,query){
   if(query.length<2)return;
   const button=document.createElement("button");button.type="button";button.className="cl271-request-button";
   button.textContent=t("request")+" · "+query;
   button.addEventListener("click",async()=>{await submitRequest(query,button)});
   host.append(button);
 }
 function safeMessageName(name){
   // Existing Firestore support rules only allow English/Arabic and a subset of punctuation.
   // Percent-encode unsupported characters so the original UTF-8 subject stays recoverable.
   const allowed=/^[\x20-\x7E\u0621-\u063A\u0641-\u0652\u0671\u0660-\u0669\u061F\u060C\u061B]*$/u;
   return allowed.test(name)?name:encodeURIComponent(name);
 }
 async function submitRequest(requested,button){
   const name=String(requested||"").trim().slice(0,80);
   if(name.length<2){status(t("minimum"),false);return}
   if(busy)return;
   busy=true;if(button)button.disabled=true;
   const previous=button?.textContent;if(button)button.textContent=t("sending");
   try{
     const [{getApp},{getAuth},{getFirestore,collection,addDoc,serverTimestamp}]=await Promise.all([
       import("https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"),
       import("https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js"),
       import("https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js")
     ]);
     const app=getApp(),auth=getAuth(app);
     if(auth.authStateReady)await auth.authStateReady();
     const uid=auth.currentUser?.uid||"";
     const msg="Subject request: "+safeMessageName(name)+" (original UTF-8; percent encoded if required).";
     await addDoc(collection(getFirestore(app),"supportRequests"),{
       type:"suggestion",accountIdentifier:"",claimedUid:"",securityProofHash:"",
       createdBy:uid,createdByName:String(window.PythagorasiUser?.displayName||"").slice(0,80),
       createdByProfileId:String(window.PythagorasiUser?.profileId||"").slice(0,40),
       message:msg.slice(0,1500),status:"open",createdAt:serverTimestamp(),updatedAt:serverTimestamp()
     });
     status(format(t("sent"),name),true);
     const inline=get("cl271SubjectRequestFeedback");if(inline){inline.textContent=format(t("sent"),name);inline.dataset.success="true"}
     if(searchPanel)searchPanel.hidden=true;
     if(searchInput)searchInput.value="";
   }catch(e){
     console.warn("Classora subject request failed",e?.code||e);
     status(t("failed"),false);
     const inline=get("cl271SubjectRequestFeedback");if(inline){inline.textContent=t("failed");inline.dataset.success="false"}
   }finally{
     busy=false;if(button){button.disabled=false;button.textContent=previous||t("request")}
   }
 }
 function renderLanguage(){
   if(!dashboard)return;
   dashboard.querySelectorAll("[data-cl271-i18n]").forEach(n=>n.textContent=t(n.dataset.cl271I18n));
   searchInput.placeholder=t("search");
   const pageHeading=dashboard.querySelector(".cl270-head h2");
   if(pageHeading)pageHeading.textContent=t(currentView==="subjects"?"subjects":"lobby");
   if(currentView==="subjects")renderSubjects();
   if(searchPanel&&!searchPanel.hidden)search();
   const close=get("cl271Status");if(close?.dataset.success==="true"&&close.textContent){} 
 }
 function subjectArea(){
   subjectPanel=document.createElement("section");
   subjectPanel.id="cl271Subjects";
   subjectPanel.className="cl271-subjects";
   subjectPanel.innerHTML=
    '<div class="cl271-subject-top"><div><span class="cl271-kicker">CLASSORA / <span data-cl271-i18n="subjects"></span></span>'+
    '<h2 id="cl271SubjectTitle"></h2><p id="cl271SubjectIntro"></p></div>'+
    '<button type="button" class="cl271-back" data-cl271-view="lobby">'+svg("home")+'<span data-cl271-i18n="back"></span></button></div>'+
    '<div class="cl271-grades"><span data-cl271-i18n="grade"></span><div id="cl271GradeChoices"></div></div>'+
    '<div class="cl271-subject-heading"><h3 id="cl271Available"></h3></div>'+
    '<div class="cl271-subject-cards" id="cl271SubjectCards"></div>'+
    '<div class="cl271-request-area"><div><h3 data-cl271-i18n="missing"></h3><p data-cl271-i18n="intro"></p></div>'+
    '<div class="cl271-request-form"><input id="cl271RequestName" type="text" maxlength="80" autocomplete="off"/>'+
    '<button id="cl271RequestSubmit" type="button" data-cl271-i18n="request"></button></div>'+
    '<p id="cl271SubjectRequestFeedback" role="status" aria-live="polite"></p></div>';
   dashboard.append(subjectPanel);
   get("cl271RequestSubmit").addEventListener("click",()=>submitRequest(get("cl271RequestName").value,get("cl271RequestSubmit")));
   get("cl271RequestName").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();get("cl271RequestSubmit").click()}});
 }
 function init(){
   dashboard=get("cl270Dashboard");
   if(!dashboard||get("cl271Subjects"))return;
   gradeChoice=getGrade();
   const oldInput=get("cl270Search");
   if(!oldInput)return;
   // Replace the desktop-only search input to detach the old generic-search listeners.
   searchInput=oldInput.cloneNode(true);
   oldInput.replaceWith(searchInput);
   searchWrap=dashboard.querySelector(".cl270-search-wrap");
   searchPanel=get("cl270SearchPanel");
   const head=dashboard.querySelector(".cl270-head");
   const tools=dashboard.querySelector(".cl270-tools");
   if(head&&tools){
     const bar=document.createElement("div");bar.className="cl271-topglass";
     const logo=document.createElement("span");logo.className="cl271-topbrand";
     logo.innerHTML='<span class="cl271-topmark" aria-hidden="true">C</span><b>Classora</b>';
     while(tools.firstChild)bar.append(tools.firstChild);
     bar.append(logo);tools.append(bar);
   }
   const tabs=document.createElement("nav");tabs.className="cl271-tabs";tabs.setAttribute("aria-label","Dashboard sections");
   tabs.innerHTML=
     '<button type="button" data-cl271-view="lobby">'+svg("home")+'<span data-cl271-i18n="lobby"></span></button>'+
     '<button type="button" data-cl271-view="subjects">'+svg("book")+'<span data-cl271-i18n="subjects"></span></button>'+
     '<button type="button" data-cl271-view="all">'+svg("grid")+'<span data-cl271-i18n="all"></span></button>';
   head.insertAdjacentElement("afterend",tabs);
   subjectArea();
   const st=document.createElement("p");st.id="cl271Status";st.className="cl271-status";st.hidden=true;st.setAttribute("role","status");st.setAttribute("aria-live","polite");
   head.insertAdjacentElement("afterend",st);
   dashboard.addEventListener("click",event=>{
     const tab=event.target.closest("[data-cl271-view]");
     if(tab){event.preventDefault();event.stopImmediatePropagation();show(tab.dataset.cl271View)}
   },true);
   // Handle subject clicks before original v270 navigation handler runs.
   for(const root of [dashboard,get("cl270Sidebar")]){
     root?.addEventListener("click",event=>{
       const anchor=event.target.closest("[data-cl270-go]");
       if(!anchor)return;
       const key=anchor.dataset.cl270Go;
       if(key==="subjects"||key==="dashboard"){
         event.preventDefault();event.stopImmediatePropagation();
         show(key==="subjects"?"subjects":"lobby");
       }
     },true);
   }
   document.addEventListener("click",event=>{
     if(!event.target.closest(".cl270-search-wrap"))searchPanel.hidden=true;
   });
   searchInput.addEventListener("focus",search);
   searchInput.addEventListener("input",search);
   searchInput.addEventListener("keydown",event=>{
     if(event.key==="Escape"){searchPanel.hidden=true;searchInput.blur()}
     if(event.key==="Enter"){
       event.preventDefault();const first=get("cl270SearchOptions")?.querySelector("button");first?.click();
     }
   });
   new MutationObserver(renderLanguage).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
   renderLanguage();show("lobby");
   import("./curriculum-v97.js?v=213").then(module=>{
     data=module.CURRICULUM_DATA||{};materialsLoaded=true;
     renderSubjects();if(searchPanel&&!searchPanel.hidden)search();
   }).catch(err=>{console.warn("Classora subjects unavailable",err);status(t("notReady"),false)});
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();