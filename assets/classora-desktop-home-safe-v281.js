/* Classora v281 — safe, reversible desktop home.
   Original curriculum, learning hub, Firebase, navigation and mobile DOM remain intact.
   No structural replacement or reparenting of any legacy app node. */
(() => {
  "use strict";
  const $=id=>document.getElementById(id);
  const root=$("platformLobby");
  const shell=root?.querySelector(".lobby-shell");
  if(!root||!shell||$("cl281Dashboard"))return;
  const desktop=window.matchMedia("(min-width:1000px)");
  const symbols={
    home:'<path d="m3 11 9-8 9 8v10H3V11z"/><path d="M9 21v-8h6v8"/>',
    book:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v14"/>',
    class:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 11h18"/>',
    chat:'<path d="M20 11a8 8 0 0 1-8 8 9 9 0 0 1-4-.9L3 20l1.9-5A8 8 0 1 1 20 11z"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/></svg>',
    trophy:'<path d="M7 4h10v8a5 5 0 0 1-10 0zM7 7H4v3a4 4 0 0 0 4 4M17 7h3v3a4 4 0 0 1-4 4M12 17v4m-4 0h8"/>',
    exams:'<path d="M8 4h12v16H4V8zM8 4v4H4"/><path d="m9 14 2 2 4-5"/>',
    arrow:'<path d="m9 5 7 7-7 7"/>',
    play:'<path d="m9 6 9 6-9 6z"/>',
    spark:'<path d="m12 3 1.5 6.5L20 12l-6.5 2.5L12 21l-1.5-6.5L4 12l6.5-2.5z"/>'
  };
  symbols.settings=symbols.settings.replace('</svg>','');
  const icon=(key)=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+symbols[key]+'</svg>';
  const labels={
    ar:{workspace:"مساحة التعلّم",lobby:"اللوبي",subjects:"المواد",classes:"صفوفي",chat:"الشات",settings:"الإعدادات",assistant:"مساعد كلاسورا",
      welcome:"أهلًا بك في كلاسورا",goodMorning:"صباح الخير",goodAfternoon:"مساء الخير",goodEvening:"مساء الخير",
      subtitle:"كل اللي بتحتاجه للتعلّم والتدريب والتطور، بمكان واحد.",
      hero:"تقدّم كل يوم.",heroDesc:"كمّل من وين وقفت، أو اكتشف موضوع جديد.",explore:"استكشف المواد",
      quick:"الوصول السريع",allTools:"كل الأدوات",mySubjects:"موادي",subjectsDesc:"تصفّح الدروس والمواضيع",
      competitions:"المسابقات",competitionsDesc:"تحدّى أصحابك مباشرة",exams:"الامتحانات",examsDesc:"اختبر معلوماتك",
      assistantDesc:"مساعدة وشرح لأي سؤال",continue:"كمّل تعلّمك",last:"آخر درس",
      noLast:"اختار مادة وابدأ رحلتك التعليمية.",help:"محتاج مساعدة؟",helpDesc:"اسأل مساعد كلاسورا بأي وقت.",
      account:"حسابي",guest:"ضيف",search:"ابحث عن الدروس والمواد…"},
    en:{workspace:"WORKSPACE",lobby:"Dashboard",subjects:"Subjects",classes:"My Classes",chat:"Chat",settings:"Settings",assistant:"Classora Assistant",
      welcome:"WELCOME TO CLASSORA",goodMorning:"Good morning",goodAfternoon:"Good afternoon",goodEvening:"Good evening",
      subtitle:"Everything you need to learn, practice and improve — in one place.",
      hero:"Make progress every day.",heroDesc:"Pick up where you left off or explore something new.",explore:"Explore subjects",
      quick:"Quick access",allTools:"All features",mySubjects:"My subjects",subjectsDesc:"Browse your lessons and topics",
      competitions:"Competitions",competitionsDesc:"Play and challenge friends",exams:"Practice exams",examsDesc:"Test your knowledge",
      assistantDesc:"Get help with your studies",continue:"Continue learning",last:"Last lesson",
      noLast:"Choose a subject and start learning.",help:"Need a little help?",helpDesc:"Ask the Classora Assistant anytime.",
      account:"My account",guest:"Guest",search:"Search lessons or subjects…"}
  };
  function language(){return String(document.documentElement.lang||"en").toLowerCase().split("-")[0]}
  function translate(key){
    const lang=language(),english=labels.en[key]||key;
    if(lang==="ar")return labels.ar[key]||english;
    if(lang==="en")return english;
    try{return window.ClassoraLocale?.tFor?.(lang,english)||english}catch{return english}
  }
  function name(){
    let n=String(window.PythagorasiUser?.displayName||window.PythagorasiUser?.name||$("lobbyProfileName")?.textContent||"").trim();
    if(!n||/^(my account|guest|حسابي|ضيف)$/i.test(n))n=translate("guest");
    return n.slice(0,42);
  }
  function nav(key,kind,label){
    return '<button type="button" class="cl281-nav'+(key==="lobby"?" is-active":"")+'" data-cl281-route="'+key+'">'+icon(kind)+'<span data-cl281-t="'+label+'"></span></button>';
  }
  function tile(key,kind,title,description,gold=false){
    return '<button type="button" class="cl281-tile" data-cl281-route="'+key+'">'+
       '<span class="cl281-tile-icon'+(gold?" is-gold":"")+'">'+icon(kind)+'</span>'+
       '<b data-cl281-t="'+title+'"></b><small data-cl281-t="'+description+'"></small></button>';
  }
  const aside=document.createElement("aside");
  aside.id="cl281Sidebar";
  aside.className="cl281-sidebar";
  aside.setAttribute("aria-label","Classora navigation");
  aside.innerHTML=
    '<div class="cl281-logo"><span class="cl281-mark">C</span><b>Classora</b></div>'+
    '<span class="cl281-caption" data-cl281-t="workspace"></span>'+
    '<nav class="cl281-nav-list">'+
       nav("lobby","home","lobby")+nav("subjects","book","subjects")+
       nav("classes","class","classes")+nav("chat","chat","chat")+
       nav("settings","settings","settings")+nav("assistant","chat","assistant")+
    '</nav>'+
    '<button type="button" class="cl281-account" data-cl281-route="profile">'+
       '<span class="cl281-avatar" id="cl281SidebarAvatar">G</span><span><b id="cl281SidebarName"></b><small data-cl281-t="account"></small></span></button>';
  const dash=document.createElement("section");
  dash.id="cl281Dashboard";
  dash.className="cl281-dashboard";
  dash.setAttribute("aria-label","Classora dashboard");
  dash.innerHTML=
    '<div class="cl281-pagebar"><b data-cl281-t="lobby"></b>'+
      '<button type="button" class="cl281-search-prompt" data-cl281-route="search">'+icon("book")+'<span data-cl281-t="search"></span></button>'+
    '</div>'+
    '<div class="cl281-intro"><span data-cl281-t="welcome" class="cl281-kicker"></span>'+
      '<h1 id="cl281Greeting"></h1><p data-cl281-t="subtitle"></p></div>'+
    '<div class="cl281-hero"><div class="cl281-hero-main"><h2 data-cl281-t="hero"></h2>'+
      '<p data-cl281-t="heroDesc"></p>'+
      '<button type="button" class="cl281-primary" data-cl281-route="subjects">'+icon("play")+'<span data-cl281-t="explore"></span></button></div>'+
      '<div class="cl281-hero-art" aria-hidden="true"><div class="cl281-art-disc"><div class="cl281-art-paper">'+
        '<span class="cl281-art-icon">'+icon("book")+'</span><i></i><i></i><span class="cl281-art-progress"><i></i></span>'+
      '</div></div></div></div>'+
    '<div class="cl281-section-title"><h3 data-cl281-t="quick"></h3>'+
      '<button type="button" data-cl281-route="tools" data-cl281-t="allTools"></button></div>'+
    '<div class="cl281-quick">'+
       tile("subjects","book","mySubjects","subjectsDesc")+
       tile("competitions","trophy","competitions","competitionsDesc",true)+
       tile("exams","exams","exams","examsDesc")+
       tile("assistant","chat","assistant","assistantDesc")+
    '</div>'+
    '<div class="cl281-lower"><div class="cl281-panel"><h3 data-cl281-t="continue"></h3>'+
      '<button type="button" class="cl281-panel-action" data-cl281-route="resume">'+
       '<span class="cl281-mini">'+icon("book")+'</span><span class="cl281-panel-text">'+
       '<b data-cl281-t="last"></b><small id="cl281LastLesson"></small></span>'+icon("arrow")+'</button></div>'+
      '<div class="cl281-panel"><h3 data-cl281-t="help"></h3>'+
      '<button type="button" class="cl281-panel-action" data-cl281-route="assistant">'+
       '<span class="cl281-mini">'+icon("chat")+'</span><span class="cl281-panel-text">'+
       '<b data-cl281-t="assistant"></b><small data-cl281-t="helpDesc"></small></span>'+icon("arrow")+'</button></div></div>';
  let mode="home";
  function isDesktop(){return desktop.matches}
  function chooseDock(id){
    const dock=$("classoraMobilePageNav");if(!dock)return;
    dock.querySelectorAll("button").forEach(b=>{
      const selected=b.id===id;
      b.classList.toggle("is-active",selected);
      if(selected)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");
    });
  }
  function updateLabels(){
    for(const element of [aside,dash])element.querySelectorAll("[data-cl281-t]").forEach(el=>{
      el.textContent=translate(el.dataset.cl281T);
    });
    const display=name();
    $("cl281SidebarName").textContent=display;
    $("cl281SidebarAvatar").textContent=(display===translate("guest")?"G":display[0]).toUpperCase();
    const hour=new Date().getHours();
    $("cl281Greeting").textContent=translate(hour<12?"goodMorning":hour<18?"goodAfternoon":"goodEvening")+", "+display+".";
    const last=String($("cl214LastLesson")?.textContent||"").trim();
    $("cl281LastLesson").textContent=last||translate("noLast");
  }
  function setHome(){
    if(!isDesktop())return;
    mode="home";
    root.classList.add("cl281-home");
    root.classList.remove("cl281-original");
    chooseDock("classoraMobileLobbyBtn");
    aside.querySelectorAll(".cl281-nav").forEach(b=>b.classList.toggle("is-active",b.dataset.cl281Route==="lobby"));
    updateLabels();
    root.scrollTo({top:0,behavior:"instant"});
  }
  function revealOriginal(){
    if(!isDesktop())return;
    mode="subjects";
    root.classList.remove("cl281-home");
    root.classList.add("cl281-original");
    chooseDock("classoraMobileSubjectsBtn");
    const target=root.querySelector(".learning-hub .hub-search:not([hidden])")||
       root.querySelector(".learning-hub .hub-subject-tabs")||
       root.querySelector(".learning-hub .hub-curriculum-shelf")||
       root.querySelector(".learning-hub");
    if(!target)return;
    const doScroll=()=>{
      if(mode!=="subjects"||!desktop.matches)return;
      const top=Math.max(0,root.scrollTop+target.getBoundingClientRect().top-root.getBoundingClientRect().top-16);
      root.scrollTo({top,behavior:window.matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});
    };
    requestAnimationFrame(()=>requestAnimationFrame(doScroll));
  }
  function useNative(id){
    const btn=$(id);
    if(btn&&btn.isConnected){btn.click();return true}
    return false;
  }
  function navigate(key){
    if(key==="lobby"){setHome();return}
    if(key==="subjects"){revealOriginal();return}
    if(key==="search"){useNative("classoraGlassSearchBtn");return}
    if(key==="classes"){useNative("lobbyClassBtn");return}
    if(key==="chat"){useNative("lobbyChatBtn");return}
    if(key==="settings"){useNative("lobbySettingsBtn");return}
    if(key==="profile"){useNative("lobbyProfileBtn");return}
    if(key==="competitions"){useNative("competitionBtn");return}
    if(key==="exams"){useNative("lobbyExamBtn");return}
    if(key==="assistant"){
      // Switch to native materials view so the original live assistant, 
      // chat history, permissions and sending continue working.
      revealOriginal();
      requestAnimationFrame(()=>{
        const input=$("lobbyAIInput");
        input?.focus({preventScroll:true});
      });
      return;
    }
    if(key==="resume"){
      const uid=window.PythagorasiUser?.uid;
      let lesson=null;
      try{lesson=JSON.parse(localStorage.getItem("classora_last_topic_v112_"+uid)||"null")}catch{}
      if(lesson?.grade&&lesson?.subject&&window.classoraCurriculum?.openAt){
        window.classoraCurriculum.openAt(lesson.grade,lesson.subject,lesson.topic||"");return;
      }
      revealOriginal();return;
    }
    if(key==="tools"){revealOriginal();return}
  }
  function onClick(event){
    const button=event.target.closest("[data-cl281-route]");
    if(!button)return;
    event.preventDefault();
    navigate(button.dataset.cl281Route);
  }
  function desktopChange(){
    if(desktop.matches){
      if(mode==="home")setHome();
      else{
        root.classList.remove("cl281-home");
        root.classList.add("cl281-original");
      }
    }else{
      root.classList.remove("cl281-home","cl281-original");
    }
  }
  try{
    aside.addEventListener("click",onClick);
    dash.addEventListener("click",onClick);
    root.append(aside);
    const header=shell.querySelector(".cl268-header");
    if(header)header.insertAdjacentElement("afterend",dash);
    else shell.prepend(dash);
    // Native navigation remains authoritative outside the new home UI.
    const dockHome=$("classoraMobileLobbyBtn");
    if(dockHome){
      dockHome.addEventListener("click",()=>{
        if(!desktop.matches)return;
        // The legacy home handler may close other app routes first.
        queueMicrotask(()=>{
          const current=$("classoraMobileLobbyBtn");
          if(current?.classList.contains("is-active")&&mode!=="home")setHome();
        });
      });
      new MutationObserver(()=>{
        if(!desktop.matches||mode!=="subjects")return;
        if(dockHome.classList.contains("is-active")&&!$("classoraCurriculumModal")?.classList.contains("open")){
          // A legacy navigation action selected Lobby; return to redesigned home.
          setHome();
        }
      }).observe(dockHome,{attributes:true,attributeFilter:["class","aria-current"]});
    }
    const dockSubjects=$("classoraMobileSubjectsBtn");
    dockSubjects?.addEventListener("click",()=>{
      if(desktop.matches)revealOriginal();
    });
    new MutationObserver(updateLabels).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
    const pname=$("lobbyProfileName");
    if(pname)new MutationObserver(updateLabels).observe(pname,{characterData:true,childList:true,subtree:true});
    desktop.addEventListener?.("change",desktopChange);
    window.addEventListener("pageshow",updateLabels);
    desktopChange();
  }catch(error){
    // Safe failure: do not leave any legacy component hidden if setup fails.
    root.classList.remove("cl281-home","cl281-original");
    console.error("Classora home setup",error);
  }
})();