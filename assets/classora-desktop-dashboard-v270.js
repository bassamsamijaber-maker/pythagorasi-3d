/* Classora v270 — clean desktop dashboard. Native app routes and actions remain authoritative. */
(() => {
  "use strict";
  const get = id => document.getElementById(id);
  const icons = {
    home:'<path d="m3 11 9-8 9 8v10H3V11z"/><path d="M9 21v-8h6v8"/>',
    book:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1z"/><path d="M12 6v14"/>',
    class:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 11h18"/>',
    chat:'<path d="M20 11a8 8 0 0 1-8 8 9 9 0 0 1-4-.9L3 20l1.9-5A8 8 0 1 1 20 11z"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 9h18c0-1-3-2-3-9M10 21h4"/>',
    search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
    exam:'<path d="M8 4h12v16H4V8zM8 4v4H4"/><path d="m9 14 2 2 4-5"/>',
    trophy:'<path d="M7 4h10v8a5 5 0 0 1-10 0zM7 7H4v3a4 4 0 0 0 4 4M17 7h3v3a4 4 0 0 1-4 4M12 17v4m-4 0h8"/>',
    arrow:'<path d="m9 5 7 7-7 7"/>',
    play:'<path d="m9 6 9 6-9 6z"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    resume:'<path d="M4 19 14 5l6 5-10 9z"/><path d="M14 5l6 5"/>',
    spark:'<path d="m12 3 1.5 6.5L20 12l-6.5 2.5L12 21l-1.5-6.5L4 12l6.5-2.5z"/>'
  };
  const ico=(name,cls="")=>'<svg class="'+cls+'" viewBox="0 0 24 24" aria-hidden="true">'+icons[name]+'</svg>';
  const strings={
    ar:{
      workspace:"مساحة التعلّم",dashboard:"اللوبي",subjects:"المواد",classes:"صفوفي",chat:"الشات",settings:"الإعدادات",assistant:"مساعد كلاسورا",
      search:"ابحث عن قسم أو أداة...",notifications:"الإشعارات",account:"حسابي",guest:"ضيف",guestAccount:"حساب ضيف",
      welcome:"أهلًا بك في كلاسورا",salutation:"أهلًا",subtitle:"كل اللي بتحتاجه للتعلّم والتدريب والتطور، بمكان واحد.",
      headline:"تقدّم كل يوم.",heroDescription:"كمّل من وين وقفت، أو اكتشف موضوع جديد.",explore:"استكشف المواد",
      quick:"الوصول السريع",allFeatures:"كل المميزات",mySubjects:"موادي",subjectsDetail:"تصفّح الدروس والمواضيع",
      competitions:"المسابقات",competitionsDetail:"تحدّى أصحابك مباشرة",exams:"الامتحانات",examsDetail:"اختبر معلوماتك",
      assistantDetail:"مساعدة وشرح لأي سؤال",continue:"كمّل تعلّمك",lesson:"آخر درس",noLesson:"اختار مادة وابدأ رحلتك التعليمية.",
      needHelp:"محتاج مساعدة؟",helpDescription:"اسأل مساعد كلاسورا بأي وقت.",moreTools:"المزيد من الأدوات والأنشطة",
      moreDescription:"افتح باقي أقسام اللوبي والأدوات التعليمية.",showTools:"عرض كل الأدوات",hideTools:"إخفاء الأدوات الإضافية",
      noMatches:"ما لقينا قسم بهذا الاسم",close:"إغلاق",admin:"الإدارة",learning:"ابدأ التعلّم",searchResults:"نتائج البحث",
      morning:"صباح الخير",afternoon:"مساء الخير",evening:"مساء الخير"
    },
    en:{
      workspace:"WORKSPACE",dashboard:"Dashboard",subjects:"Subjects",classes:"My Classes",chat:"Chat",settings:"Settings",assistant:"Classora Assistant",
      search:"Search sections and tools...",notifications:"Notifications",account:"My account",guest:"Guest",guestAccount:"Guest account",
      welcome:"WELCOME TO CLASSORA",salutation:"Hello",subtitle:"Everything you need to learn, practice and improve — in one place.",
      headline:"Make progress every day.",heroDescription:"Pick up where you left off or explore something new.",explore:"Explore subjects",
      quick:"Quick access",allFeatures:"All features",mySubjects:"My subjects",subjectsDetail:"Browse your lessons and topics",
      competitions:"Competitions",competitionsDetail:"Play and challenge friends",exams:"Practice exams",examsDetail:"Test your knowledge",
      assistantDetail:"Get help with your studies",continue:"Continue learning",lesson:"Last lesson",noLesson:"Choose a subject and start learning.",
      needHelp:"Need a little help?",helpDescription:"Ask the Classora Assistant anytime.",moreTools:"More learning tools and activities",
      moreDescription:"Access all the existing Classora tools and sections.",showTools:"Show all tools",hideTools:"Hide extra tools",
      noMatches:"No matching section found",close:"Close",admin:"Admin",learning:"Start learning",searchResults:"Search results",
      morning:"Good morning",afternoon:"Good afternoon",evening:"Good evening"
    }
  };
  let lobby,shell,sidebar,board,extra,searchPanel,input,mq;
  let more=false;
  function lang(){return String(document.documentElement.lang||"en").toLowerCase().split("-")[0]||"en"}
  function t(key){
    const current=lang(),value=strings[current]?.[key];
    if(value)return value;
    if(current==="ar")return strings.ar[key]||key;
    const english=strings.en[key]||key;
    try{return window.ClassoraLocale?.tFor?.(current,english)||english}catch{return english}
  }
  function roleName(){
    const p=window.PythagorasiUser;
    const candidate=p?.displayName||p?.name||get("lobbyProfileName")?.textContent||"";
    const name=String(candidate).trim();
    if(!name||/^(my account|guest|حسابي|ضيف)$/i.test(name))return t("guest");
    return name.slice(0,45);
  }
  function actionBtn(key,icon,label,moreClass=""){
    return '<button type="button" class="cl270-nav '+moreClass+'" data-cl270-go="'+key+'">'+ico(icon)+'<span data-cl270-key="'+label+'"></span></button>';
  }
  function tile(key,icon,title,description,accent=""){
    return '<button class="cl270-tile" type="button" data-cl270-go="'+key+'"><span class="cl270-tile-icon '+accent+'">'+ico(icon)+'</span><b data-cl270-key="'+title+'"></b><small data-cl270-key="'+description+'"></small></button>';
  }
  function build(){
    lobby=get("platformLobby");shell=lobby?.querySelector(".lobby-shell");
    if(!lobby||!shell||get("cl270Dashboard"))return;
    mq=window.matchMedia("(min-width:1000px)");
    sidebar=document.createElement("aside");sidebar.id="cl270Sidebar";
    sidebar.className="cl270-sidebar";
    sidebar.setAttribute("aria-label","Classora navigation");
    sidebar.innerHTML=
      '<div class="cl270-logo"><span class="cl270-mark" aria-hidden="true">C</span><strong>Classora</strong></div>'+
      '<span class="cl270-sidebar-label" data-cl270-key="workspace"></span>'+
      '<nav class="cl270-navgroup" aria-label="Navigation">'+
      actionBtn("dashboard","home","dashboard","is-active")+
      actionBtn("subjects","book","subjects")+
      actionBtn("classes","class","classes")+
      actionBtn("chat","chat","chat")+
      actionBtn("settings","settings","settings")+
      actionBtn("assistant","chat","assistant")+
      '</nav>'+
      '<button class="cl270-side-profile" type="button" data-cl270-go="profile">'+
        '<span class="cl270-avatar">G</span><span><b class="cl270-account-name"></b><small data-cl270-key="account"></small></span></button>';
    lobby.append(sidebar);
    board=document.createElement("section");board.id="cl270Dashboard";board.className="cl270-dashboard";
    board.setAttribute("aria-label","Classora dashboard");
    board.innerHTML=
      '<header class="cl270-head"><h2 data-cl270-key="dashboard"></h2><div class="cl270-tools">'+
        '<div class="cl270-search-wrap"><label class="cl270-search">'+ico("search")+
        '<input id="cl270Search" type="search" autocomplete="off" spellcheck="false" aria-label="Search" /></label>'+
        '<div class="cl270-search-panel" id="cl270SearchPanel" hidden><strong data-cl270-key="searchResults"></strong><div id="cl270SearchOptions"></div></div></div>'+
        '<button class="cl270-icon-button" type="button" data-cl270-go="notifications" aria-label="Notifications">'+ico("bell")+'</button>'+
        '<span class="cl270-top-divider"></span>'+
        '<button class="cl270-top-profile" type="button" data-cl270-go="profile" aria-label="Profile"><span class="cl270-avatar">G</span></button>'+
        '</div></header>'+
      '<div class="cl270-intro"><div class="cl270-eyebrow" data-cl270-key="welcome"></div>'+
      '<h1 id="cl270Greeting"></h1><p data-cl270-key="subtitle"></p></div>'+
      '<section class="cl270-hero"><div class="cl270-hero-copy">'+
        '<h2 data-cl270-key="headline"></h2><p data-cl270-key="heroDescription"></p>'+
        '<button type="button" class="cl270-primary" data-cl270-go="subjects">'+ico("play")+'<span data-cl270-key="explore"></span></button>'+
        '</div><div class="cl270-hero-art" aria-hidden="true"><div class="cl270-art-circle"><div class="cl270-art-sheet">'+
          '<span class="cl270-art-icon">'+ico("book")+'</span><i></i><i class="short"></i><span class="cl270-art-progress"><i></i></span>'+
        '</div></div></div></section>'+
      '<div class="cl270-section-head"><h3 data-cl270-key="quick"></h3><button type="button" data-cl270-go="more" data-cl270-key="allFeatures"></button></div>'+
      '<div class="cl270-quick-grid">'+
        tile("subjects","book","mySubjects","subjectsDetail")+
        tile("competitions","trophy","competitions","competitionsDetail","gold")+
        tile("exams","exam","exams","examsDetail")+
        tile("assistant","chat","assistant","assistantDetail")+
        '</div>'+
      '<div class="cl270-lower">'+
        '<section class="cl270-panel"><h3 data-cl270-key="continue"></h3><button class="cl270-learning-row" type="button" data-cl270-go="resume">'+
          '<span class="cl270-lower-icon">'+ico("resume")+'</span><span class="cl270-learning-text"><b data-cl270-key="lesson"></b><small id="cl270LastLesson"></small></span>'+ico("arrow")+
        '</button></section>'+
        '<section class="cl270-panel"><h3 data-cl270-key="needHelp"></h3><button class="cl270-learning-row" type="button" data-cl270-go="assistant">'+
          '<span class="cl270-lower-icon">'+ico("chat")+'</span><span class="cl270-learning-text"><b data-cl270-key="assistant"></b><small data-cl270-key="helpDescription"></small></span>'+ico("arrow")+
        '</button></section></div>'+
      '<section class="cl270-more-card"><div><h3 data-cl270-key="moreTools"></h3><p data-cl270-key="moreDescription"></p></div>'+
        '<button class="cl270-more-button" type="button" data-cl270-go="more" aria-expanded="false" data-cl270-key="showTools"></button></section>';
    shell.insertBefore(board,shell.firstChild);
    const close=document.createElement("button");
    close.id="cl270AssistantClose";close.type="button";close.className="cl270-assistant-close";
    close.setAttribute("aria-label","Close Assistant");
    close.innerHTML=ico("close");
    close.addEventListener("click",closeAssistant);
    lobby.append(close);
    lobby.classList.add("cl270-mode");
    extra=Array.from(shell.children).filter(child=>child!==board&&!["accountActionRequests"].includes(child.id)&&
      !child.classList.contains("cl268-header")&&!child.classList.contains("lobby-topbar"));
    toggleMore(false);
    new MutationObserver(records=>{
      for(const record of records)for(const node of record.addedNodes){
        if(node.nodeType!==1||node===board||node.id==="accountActionRequests"||node.classList.contains("cl268-header")||node.classList.contains("lobby-topbar"))continue;
        if(!extra.includes(node))extra.push(node);
        node.classList.toggle("cl270-collapsed",!more);
      }
    }).observe(shell,{childList:true});
    input=get("cl270Search");
    searchPanel=get("cl270SearchPanel");
    input?.addEventListener("focus",showSearch);
    input?.addEventListener("input",showSearch);
    input?.addEventListener("keydown",event=>{
      if(event.key==="Escape"){searchPanel.hidden=true;input.blur()}
      if(event.key==="Enter"){const first=searchPanel.querySelector("button");if(first){event.preventDefault();first.click()}}
    });
    document.addEventListener("pointerdown",event=>{
      if(!event.target.closest(".cl270-search-wrap")&&searchPanel)searchPanel.hidden=true;
    });
    document.addEventListener("keydown",event=>{
      if(event.key==="Escape"&&lobby.classList.contains("cl270-assistant-open"))closeAssistant();
    });
    sidebar.addEventListener("click",handleClick);
    board.addEventListener("click",handleClick);
    new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
    const pname=get("lobbyProfileName");
    if(pname)new MutationObserver(refresh).observe(pname,{subtree:true,childList:true,characterData:true});
    new MutationObserver(visibility).observe(lobby,{attributes:true,attributeFilter:["class"]});
    mq.addEventListener?.("change",visibility);
    document.addEventListener("classora-auth-settled",refresh);
    window.addEventListener("pageshow",refresh);
    refresh();visibility();
  }
  function toggleMore(open){
    more=open;
    for(const child of extra||[])child.classList.toggle("cl270-collapsed",!open);
    const button=board?.querySelector(".cl270-more-button");
    button?.setAttribute("aria-expanded",String(open));
    if(button)button.textContent=t(open?"hideTools":"showTools");
  }
  function showSearch(){
    if(!searchPanel||!input)return;
    const keys=["subjects","classes","chat","settings","competitions","exams","assistant"];
    const query=input.value.trim().toLocaleLowerCase();
    const results=keys.filter(k=>(t(k)+" "+(strings.en[k]||"")+" "+(strings.ar[k]||"")).toLocaleLowerCase().includes(query));
    const container=get("cl270SearchOptions");
    container.replaceChildren();
    results.forEach(k=>{
      const btn=document.createElement("button");btn.type="button";btn.textContent=t(k);
      btn.addEventListener("click",()=>{searchPanel.hidden=true;input.value="";run(k)});
      container.append(btn);
    });
    if(!results.length){
      const hint=document.createElement("p");hint.textContent=t("noMatches");container.append(hint);
    }
    searchPanel.hidden=false;
  }
  function activate(key){
    sidebar?.querySelectorAll(".cl270-nav").forEach(b=>b.classList.toggle("is-active",b.dataset.cl270Go===key));
  }
  function clickFirst(selectors){
    for(const selector of selectors){
      const found=document.querySelector(selector);
      if(found){found.click();return true}
    }
    return false;
  }
  function assistant(open){
    const panel=lobby.querySelector(".cl250-left");
    if(!panel){toggleMore(true);get("lobbyAIInput")?.focus();return}
    lobby.classList.toggle("cl270-assistant-open",open);
    const close=get("cl270AssistantClose");
    close?.setAttribute("aria-label",t("close"));
    if(open)get("lobbyAIInput")?.focus({preventScroll:true});
  }
  function closeAssistant(){lobby?.classList.remove("cl270-assistant-open")}
  function run(key){
    if(key!=="assistant")closeAssistant();
    if(key==="more"){
      toggleMore(!more);
      if(more){
        const destination=extra.find(el=>!el.hidden&&getComputedStyle(el).display!=="none");
        destination?.scrollIntoView?.({behavior:"smooth",block:"start"});
      }
      return;
    }
    if(key==="assistant"){activate("assistant");assistant(true);return}
    if(key==="dashboard"){
      activate("dashboard");
      if(lobby.classList.contains("hidden"))clickFirst(["#classoraMobileLobbyBtn"]);
      shell.scrollTo({top:0,behavior:"smooth"});
      return;
    }
    const lookup={
      subjects:["#classoraMobileSubjectsBtn","#classoraLearningFront [data-cl-action='subjects']"],
      classes:["#lobbyClassBtn","#classoraMobileClassesBtn","#lobbyJoinClassBtn"],
      chat:["#lobbyChatBtn","#classoraMobileChatBtn"],
      settings:["#lobbySettingsBtn","#classoraMobileSettingsBtn"],
      notifications:["#lobbyNotificationsBtn"],
      profile:["#lobbyProfileBtn"],
      competitions:["#competitionBtn","#classoraLearningFront [data-cl-action='live']"],
      exams:["#lobbyExamBtn","#classoraLearningFront [data-cl-action='exam']"],
      resume:["#classoraLearningFront [data-cl-action='resume']"]
    };
    if(key==="resume"&&!document.querySelector("#classoraLearningFront [data-cl-action='resume']"))return run("subjects");
    if(key==="admin")return clickFirst(["#adminPanelBtn"]);
    if(!clickFirst(lookup[key]||[])){
      if(["subjects","classes","chat","settings","competitions","exams"].includes(key)){
        toggleMore(true);
        shell.scrollTo({top:0,behavior:"smooth"});
      }
    }
    if(["subjects","classes","chat","settings"].includes(key))activate(key);
  }
  function handleClick(event){
    const button=event.target.closest("[data-cl270-go]");
    if(!button)return;
    event.preventDefault();
    run(button.dataset.cl270Go);
  }
  function refresh(){
    if(!board)return;
    document.querySelectorAll("#cl270Dashboard [data-cl270-key],#cl270Sidebar [data-cl270-key]").forEach(node=>{
      const key=node.dataset.cl270Key;
      if(key==="showTools")node.textContent=t(more?"hideTools":"showTools");
      else node.textContent=t(key);
    });
    const name=roleName();
    const hour=new Date().getHours();
    const salutation=t(hour<12?"morning":hour<18?"afternoon":"evening");
    get("cl270Greeting").textContent=salutation+", "+name+".";
    const userLabel=sidebar?.querySelector(".cl270-account-name");
    if(userLabel)userLabel.textContent=name;
    document.querySelectorAll("#cl270Sidebar .cl270-avatar,#cl270Dashboard .cl270-avatar").forEach(e=>{
      e.textContent=(name===t("guest")?"G":name.slice(0,1)).toUpperCase();
    });
    const last=get("cl214LastLesson")?.textContent?.trim();
    const lastNode=get("cl270LastLesson");
    if(lastNode)lastNode.textContent=last||t("noLesson");
    if(input)input.placeholder=t("search");
    if(searchPanel&&!searchPanel.hidden)showSearch();
  }
  function visibility(){
    const shown=lobby&&!lobby.classList.contains("hidden")&&!lobby.hidden;
    document.body.classList.toggle("cl270-lobby-visible",Boolean(shown&&mq?.matches));
    if(!shown)closeAssistant();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build,{once:true});
  else build();
})();