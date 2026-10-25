/* Classora v268: accessible interactive quick search for screenshot-matched header.
   Does not replace existing navigation / notification listeners. */
(function(){
  "use strict";
  function init(){
    var header=document.querySelector("#platformLobby .cl268-header");
    var trigger=document.getElementById("classoraGlassSearchBtn");
    if(!header||!trigger||header.dataset.cl268Bound==="1")return;
    header.dataset.cl267Bound="1";

    var dictionary={
      ar:{title:"بحث في كلاسورا",placeholder:"ابحث عن قسم أو أداة...",empty:"ما لقينا نتيجة.",subjects:"المواد",exams:"الامتحانات",classes:"صفوفي",chat:"الشات",settings:"الإعدادات",assistant:"مساعد كلاسورا"},
      en:{title:"Search Classora",placeholder:"Search sections and tools...",empty:"No matching results.",subjects:"Subjects",exams:"Exams",classes:"Classes",chat:"Chat",settings:"Settings",assistant:"Ask Classora"},
      es:{title:"Buscar en Classora",placeholder:"Buscar secciones y herramientas...",empty:"Sin resultados.",subjects:"Materias",exams:"Exámenes",classes:"Clases",chat:"Chat",settings:"Ajustes",assistant:"Asistente Classora"},
      de:{title:"Classora durchsuchen",placeholder:"Bereiche und Tools suchen...",empty:"Keine Ergebnisse.",subjects:"Fächer",exams:"Prüfungen",classes:"Klassen",chat:"Chat",settings:"Einstellungen",assistant:"Classora Assistent"},
      it:{title:"Cerca in Classora",placeholder:"Cerca sezioni e strumenti...",empty:"Nessun risultato.",subjects:"Materie",exams:"Esami",classes:"Classi",chat:"Chat",settings:"Impostazioni",assistant:"Assistente Classora"},
      tr:{title:"Classora'da ara",placeholder:"Bölüm veya araç ara...",empty:"Sonuç bulunamadı.",subjects:"Dersler",exams:"Sınavlar",classes:"Sınıflar",chat:"Sohbet",settings:"Ayarlar",assistant:"Classora Asistan"},
      ko:{title:"Classora 검색",placeholder:"섹션 또는 도구 검색...",empty:"검색 결과가 없습니다.",subjects:"과목",exams:"시험",classes:"수업",chat:"채팅",settings:"설정",assistant:"Classora 도우미"},
      hi:{title:"Classora में खोजें",placeholder:"सेक्शन या टूल खोजें...",empty:"कोई परिणाम नहीं मिला।",subjects:"विषय",exams:"परीक्षाएं",classes:"कक्षाएं",chat:"चैट",settings:"सेटिंग्स",assistant:"Classora सहायक"},
      he:{title:"חיפוש בקלאסורה",placeholder:"חיפוש אזורים וכלים...",empty:"לא נמצאו תוצאות.",subjects:"מקצועות",exams:"מבחנים",classes:"כיתות",chat:"צ׳אט",settings:"הגדרות",assistant:"עוזר Classora"}
    };
    function getLanguage(){
      var lang=String(document.documentElement.lang||document.body.lang||"").toLowerCase().split("-")[0];
      if(!dictionary[lang]){
        lang=document.body.classList.contains("lang-ar")?"ar":"en";
      }
      return lang;
    }
    var popover=document.createElement("section");
    popover.id="classoraGlassSearchPopover";
    popover.className="cl267-search-popover";
    popover.hidden=true;
    popover.setAttribute("role","dialog");
    popover.setAttribute("aria-modal","false");
    var label=document.createElement("label");
    label.htmlFor="classoraGlassSearchInput";
    var input=document.createElement("input");
    input.id="classoraGlassSearchInput";
    input.className="cl267-search-input";
    input.type="search";
    input.autocomplete="off";
    input.enterKeyHint="search";
    var results=document.createElement("div");
    results.className="cl267-search-results";
    results.id="classoraGlassSearchResults";
    popover.append(label,input,results);
    header.appendChild(popover);
    trigger.setAttribute("aria-haspopup","dialog");
    trigger.setAttribute("aria-controls",popover.id);
    trigger.setAttribute("aria-expanded","false");

    var actions=[
      {name:"subjects",aliases:["subject","topic","lesson","math","science","مادة","مواد","مواضيع","رياضيات","علوم"],ids:["classoraMobileSubjectsBtn","lobbySubjectsBtn","lobbySubjectBtn"]},
      {name:"exams",aliases:["exam","quiz","اختبار","امتحان","امتحانات","مسابقة"],ids:["lobbyExamBtn","classoraMobileExamsBtn"]},
      {name:"classes",aliases:["class","school","صف","صفوف","صفوفي"],ids:["classoraMobileClassesBtn","lobbyClassBtn"]},
      {name:"chat",aliases:["chat","message","شات","دردشة","رسالة"],ids:["classoraMobileChatBtn","lobbyChatBtn"]},
      {name:"settings",aliases:["settings","preferences","إعدادات","اعدادات"],ids:["classoraMobileSettingsBtn","lobbySettingsBtn"]},
      {name:"assistant",aliases:["assistant","ai","help","مساعد","ذكاء"],ids:["lobbyAIInput"]}
    ];
    function targetFor(action){
      for(var i=0;i<action.ids.length;i++){
        var element=document.getElementById(action.ids[i]);
        if(element)return element;
      }
      return null;
    }
    function close(){
      if(popover.hidden)return;
      popover.hidden=true;
      trigger.setAttribute("aria-expanded","false");
    }
    function open(){
      var lang=getLanguage(),copy=dictionary[lang];
      popover.dir=lang==="ar"||lang==="he"?"rtl":"ltr";
      label.textContent=copy.title;
      input.placeholder=copy.placeholder;
      input.setAttribute("aria-label",copy.title);
      input.value="";
      popover.hidden=false;
      trigger.setAttribute("aria-expanded","true");
      render();
      input.focus({preventScroll:true});
    }
    function runAction(action){
      close();
      var element=targetFor(action);
      if(!element)return;
      if(action.name==="assistant"){
        var assistant=document.querySelector("#platformLobby .cl250-left");
        assistant?.scrollIntoView?.({block:"nearest",behavior:"smooth"});
        element.focus({preventScroll:true});
      }else{
        element.click();
      }
    }
    function render(){
      var lang=getLanguage(),copy=dictionary[lang];
      var q=input.value.trim().toLocaleLowerCase();
      results.replaceChildren();
      var shown=0;
      actions.forEach(function(action){
        if(!targetFor(action))return;
        var terms=[copy[action.name],dictionary.en[action.name],dictionary.ar[action.name]].concat(action.aliases);
        if(q&&!terms.some(function(t){return String(t).toLocaleLowerCase().includes(q)}))return;
        var button=document.createElement("button");
        button.type="button";
        button.textContent=copy[action.name];
        button.addEventListener("click",function(){runAction(action)});
        results.appendChild(button);
        shown++;
      });
      if(!shown){
        var empty=document.createElement("span");
        empty.className="cl267-search-empty";
        empty.textContent=copy.empty;
        results.appendChild(empty);
      }
    }
    trigger.addEventListener("click",function(event){
      event.stopPropagation();
      if(popover.hidden)open();else close();
    });
    input.addEventListener("input",render);
    input.addEventListener("keydown",function(event){
      if(event.key==="Enter"){
        var first=results.querySelector("button");
        if(first){event.preventDefault();first.click()}
      }
    });
    document.addEventListener("pointerdown",function(event){
      if(!popover.hidden&&!header.contains(event.target))close();
    });
    document.addEventListener("keydown",function(event){
      if(event.key==="Escape"&&!popover.hidden){
        event.stopPropagation();close();trigger.focus({preventScroll:true});
      }
    },true);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();