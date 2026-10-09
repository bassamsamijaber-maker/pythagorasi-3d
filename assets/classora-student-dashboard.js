/* Classora UI 2.0, phase 2: student-only dashboard.
   Uses the existing authenticated profile and the existing lobby actions.
   Does not write to Firebase, grant roles or fabricate progress. */
(() => {
  "use strict";
  const byId = id => document.getElementById(id);
  const locale = () => document.documentElement.lang === "en" ? "en" : "ar";
  const set = (id, value) => {
    const el = byId(id);
    if (el && el.textContent !== String(value)) el.textContent = String(value);
  };
  function start() {
    const board = byId("classoraStudentDashboard");
    const lobby = byId("platformLobby");
    if (!board || !lobby) return;
    const upcoming = byId("studentUpcomingList");
    const upcomingSection = byId("studentUpcomingEvents");
    const profileLabel = byId("lobbyProfileName");
    const number = n => new Intl.NumberFormat(locale() === "ar" ? "ar" : "en-US").format(n);
    let lastUserId = null;

    function refresh() {
      const profile = window.PythagorasiUser;
      const isStudent = profile?.role === "student" &&
        document.body.classList.contains("classora-authenticated") &&
        document.body.dataset.userRole === "student" &&
        !byId("authGate")?.classList.contains("show");
      board.hidden = !isStudent;
      document.body.classList.toggle("classora-student-mode", Boolean(isStudent));
      if (!isStudent) { lastUserId = null; return; }
      const lang = locale();
      board.lang = lang;
      board.dir = lang === "ar" ? "rtl" : "ltr";
      board.querySelectorAll("[data-student-ar][data-student-en]").forEach(el => {
        const label = el.getAttribute("data-student-" + lang);
        if (label !== null && el.textContent !== label) el.textContent = label;
      });
      const name = String(profile.displayName || "").trim();
      const first = name.split(/\s+/)[0] || (lang === "en" ? "student" : "يا بطل");
      set("studentDashName", first);

      // Exact XP level formula already used by Classora's profile.
      const x = profile.xp;
      const xp = x !== null && x !== undefined && x !== "" ? Number(x) : NaN;
      const validXp = Number.isFinite(xp) && xp >= 0;
      const progress = byId("studentDashMeterFill");
      const track = byId("studentDashMeter");
      if (validXp) {
        const level = Math.max(1, Math.floor(Math.sqrt(xp / 120)) + 1);
        const lower = 120 * (level - 1) ** 2;
        const upper = 120 * level ** 2;
        const percent = Math.min(100, Math.max(0, ((xp - lower) / (upper - lower)) * 100));
        set("studentDashLevel", (lang === "en" ? "Level " : "المستوى ") + number(level));
        set("studentDashXP", number(xp) + " XP");
        set("studentDashNext", (lang === "en" ? "XP to the next level: " : "نقطة للمستوى التالي: ") + number(Math.max(0, upper - xp)));
        if (progress) progress.style.width = percent + "%";
        if (track) {
          track.setAttribute("aria-valuenow", String(Math.round(percent)));
          track.setAttribute("aria-valuetext", Math.round(percent) + "%");
          track.setAttribute("aria-label", lang === "en" ? "Progress towards the next XP level" : "التقدم نحو مستوى XP التالي");
        }
      } else {
        set("studentDashLevel", lang === "en" ? "Your progress" : "تقدمك");
        set("studentDashXP", "— XP");
        set("studentDashNext", lang === "en" ? "Your points will appear after your first activity." : "نقاطك بتظهر بعد أول نشاط.");
        if (progress) progress.style.width = "0%";
        if (track) track.setAttribute("aria-valuenow", "0");
      }

      const ids = Array.isArray(profile.classIds) ? profile.classIds.filter(Boolean) : [];
      const classCount = new Set(ids).size;
      const exams = Number(profile.examCount);
      const upcomingCount = upcomingSection && !upcomingSection.classList.contains("hidden")
        ? (upcoming?.querySelectorAll(".student-upcoming-card").length || 0) : 0;
      set("studentDashClasses", number(classCount));
      set("studentDashExams", number(Number.isFinite(exams) && exams >= 0 ? exams : 0));
      set("studentDashUpcoming", number(upcomingCount));
      lastUserId = profile.uid || null;
    }

    const jumpToSubjects = () => {
      const target = lobby.querySelector(".hub-curriculum-shelf")
        || lobby.querySelector(".learning-hub")
        || lobby.querySelector(".pythag-action-grid");
      if (!target) return;
      target.scrollIntoView({
        block:"start",
        behavior:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ? "auto" : "smooth"
      });
    };
    board.addEventListener("click", event => {
      const trigger = event.target.closest("button[data-student-action]");
      if (!trigger || !board.contains(trigger)) return;
      const action = trigger.dataset.studentAction;
      if (action === "subjects") { jumpToSubjects(); return; }
      const linked = {
        classes:"lobbyJoinClassBtn",
        exams:"lobbyExamBtn",
        practice:"lobbyQuestionBtn",
        profile:"lobbyProfileQuick"
      }[action];
      if (linked) byId(linked)?.click();
    });

    const observe = (target, options) => { if (!target) return; const ob = new MutationObserver(refresh); ob.observe(target, options); };
    observe(document.body, {attributes:true,attributeFilter:["class","data-user-role"]});
    observe(document.documentElement, {attributes:true,attributeFilter:["lang","dir"]});
    observe(lobby, {attributes:true,attributeFilter:["class"]});
    observe(profileLabel, {childList:true,characterData:true,subtree:true});
    observe(upcomingSection, {attributes:true,attributeFilter:["class"]});
    observe(upcoming, {childList:true});
    document.addEventListener("visibilitychange", () => { if (!document.hidden) refresh(); });
    window.addEventListener("pageshow", refresh);
    window.classoraStudentDashboard = {refresh};
    refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, {once:true});
  else start();
})();
