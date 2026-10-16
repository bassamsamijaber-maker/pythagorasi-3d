/* Classora Global Mix UI — safe presentation-only behaviors. */
(() => {
  "use strict";
  const isEnglish = () => document.documentElement.lang !=="ar";
  function localizeHero() {
    const hero = document.getElementById("classoraMixHero");
    if (!hero) return;
    const locale = document.documentElement.lang || "en";
    hero.querySelectorAll("[data-mix-ar][data-mix-en]").forEach(el => {
      const english = el.getAttribute("data-mix-en") || "";
      const arabic = el.getAttribute("data-mix-ar") || "";
      const value = locale==="ar" ? arabic : (window.ClassoraLocale?.tFor?.(locale,english) || english);
      if (el.textContent !== value) el.textContent = value;
    });
    hero.setAttribute("lang", locale);
    hero.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
  }
  function onReady() {
    localizeHero();
    const observer = new MutationObserver(localizeHero);
    observer.observe(document.documentElement, { attributes:true, attributeFilter:["lang","dir"] });
    const discover = document.getElementById("classoraMixDiscoverBtn");
    const openLab = document.getElementById("classoraMixLabBtn");
    discover?.addEventListener("click", () => {
      const subjectList = document.querySelector("#platformLobby .pythag-action-grid");
      const target = subjectList?.closest(".lobby-section") || subjectList;
      if (target) target.scrollIntoView({ block:"start", behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth" });
    });
    openLab?.addEventListener("click", () => {
      document.getElementById("lobbyLabBtn")?.click();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", onReady, { once:true });
  else onReady();
})();
