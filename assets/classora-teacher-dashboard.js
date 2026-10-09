/* Classora Teacher Workspace (UI v106). Presentation only.
 * All privileged actions are delegated to established Classora controls.
 */
(() => {
  "use strict";
  const get = id => document.getElementById(id);
  const en = () => document.documentElement.lang === "en";
  const lang = (ar, english) => en() ? english : ar;
  function init(){
    const board=get("classoraTeacherDashboard");
    const lobby=get("platformLobby");
    if(!board||!lobby)return;
    const list=get("teacherDashClassList");
    const profileName=get("lobbyProfileName");
    let activeUid=null;
    let classRows=null;
    let examCount=null;
    const count = n => new Intl.NumberFormat(en()?"en-US":"ar").format(n);
    const safeInteger=n => Number.isInteger(n)&&n>=0;
    const title = (id,value) => {const el=get(id);if(el&&el.textContent!==value)el.textContent=value};

    function renderClasses(){
      if(!list)return;
      list.replaceChildren();
      if(classRows===null){
        const empty=document.createElement("div");
        empty.className="tw-empty";
        empty.textContent=lang("جاري جلب صفوفك من حسابك…","Loading your classes from your account…");
        list.append(empty);
        return;
      }
      if(classRows.length===0){
        const empty=document.createElement("div");
        empty.className="tw-empty";
        empty.textContent=lang("ما في صفوف ظاهرة حاليًا. افتح إدارة الصفوف لإنشاء صف أو مراجعته.","No classes to show yet. Open class management to create or review one.");
        list.append(empty);
        return;
      }
      for(const item of classRows.slice(0,6)){
        const button=document.createElement("button");
        button.type="button"; button.className="tw-class-item";
        button.dataset.twAction="classes";
        const name=document.createElement("b");
        // Text only — class names are user-controlled values.
        name.textContent=String(item.name||lang("صف بدون اسم","Unnamed class")).slice(0,100);
        const sub=document.createElement("small");
        sub.textContent=item.owner?lang("المعلم المسؤول","Class owner"):lang("معلم مساعد","Co-teacher");
        button.append(name,sub);list.append(button);
      }
    }
    function refresh(){
      const profile=window.PythagorasiUser;
      const teacher=Boolean(profile&&profile.uid&&profile.role==="teacher"&&
        document.body.classList.contains("classora-authenticated")&&
        document.body.dataset.userRole==="teacher"&&
        !get("authGate")?.classList.contains("show"));
      board.hidden=!teacher;
      document.body.classList.toggle("classora-teacher-mode",teacher);
      if(!teacher){activeUid=null;classRows=null;examCount=null;return}
      const uid=String(profile.uid);
      if(uid!==activeUid){activeUid=uid;classRows=null;examCount=null}
      board.lang=en()?"en":"ar";
      board.dir=en()?"ltr":"rtl";
      board.querySelectorAll("[data-teacher-ar][data-teacher-en]").forEach(el=>{
        const content=el.getAttribute(en()?"data-teacher-en":"data-teacher-ar");
        if(content!==null&&el.textContent!==content)el.textContent=content;
      });
      const first=String(profile.displayName||"").trim().split(/\s+/)[0]||lang("يا معلم","teacher");
      title("teacherDashName",first);
      title("teacherDashClasses",classRows===null?"—":count(classRows.length));
      title("teacherDashExams",safeInteger(examCount)?count(examCount):"—");
      renderClasses();
    }
    board.addEventListener("click",ev=>{
      const trigger=ev.target.closest("button[data-tw-action]");
      if(!trigger||!board.contains(trigger))return;
      const action=trigger.dataset.twAction;
      if(action==="subjects"){
        const target=lobby.querySelector(".hub-curriculum-shelf")||lobby.querySelector(".learning-hub");
        target?.scrollIntoView({block:"start",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
        return;
      }
      const ids={
        classes:"teacherClassesBtn",
        assignments:"teacherClassesBtn",
        exams:"lobbyExamBtn",
        results:"teacherResultsLobbyBtn",
        competitions:"teacherCompetitionsLobbyBtn",
        questionBank:"teacherQuestionBankBtn"
      };
      get(ids[action])?.click();
    });
    window.addEventListener("classora:teacher-overview",event=>{
      const data=event.detail;
      if(!data||!activeUid||String(data.uid)!==activeUid)return;
      if(Array.isArray(data.classes)){
        classRows=data.classes.filter(x=>x&&typeof x==="object").map(x=>({
          name:String(x.name||""),owner:Boolean(x.owner)
        }));
      }
      if(safeInteger(data.examCount))examCount=data.examCount;
      if(data.classesError)classRows=null;
      if(data.examsError)examCount=null;
      refresh();
      if(data.classesError&&list){
        list.replaceChildren();
        const error=document.createElement("div");
        error.className="tw-empty";
        error.textContent=lang("تعذّر تحميل الصفوف. بتقدر تفتح إدارة الصفوف مباشرة.","Unable to load class summary. You can still open class management.");
        list.append(error);
      }
    });
    const watch=(element,options)=>{
      if(!element)return;
      const observer=new MutationObserver(refresh);
      observer.observe(element,options);
    };
    watch(document.body,{attributes:true,attributeFilter:["class","data-user-role"]});
    watch(document.documentElement,{attributes:true,attributeFilter:["lang","dir"]});
    watch(profileName,{childList:true,characterData:true,subtree:true});
    watch(lobby,{attributes:true,attributeFilter:["class"]});
    watch(get("authGate"),{attributes:true,attributeFilter:["class"]});
    window.addEventListener("pageshow",refresh);
    document.addEventListener("visibilitychange",()=>{if(!document.hidden)refresh()});
    window.classoraTeacherDashboard={refresh};
    refresh();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();
