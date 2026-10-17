/* Theme bridge for Classora pages outside the main single-page application. */
(()=>{'use strict';
const KEY='classora-site-theme',START=Date.parse('2026-10-17T00:00:00+03:00'),END=Date.parse('2026-10-25T00:00:00+03:00');
const css=document.createElement('link');css.rel='stylesheet';css.href=new URL('./classora-appearance-v198.css?v=198',document.currentScript?.src||location.href).href;document.head.append(css);
const motif='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110"><g fill="none" stroke="#a73745" stroke-width="2" opacity=".12"><path d="M15 15l12 12-12 12L3 27zM95 15l12 12-12 12-12-12zM55 55l12 12-12 12-12-12zM15 95l12 12-12 12-12-12z"/><path d="M15 6v42M0 27h39M95 6v42M75 27h35M55 44v46M32 67h46"/></g></svg>';
document.documentElement.style.setProperty('--cl-embroidered-pattern','url("data:image/svg+xml,'+encodeURIComponent(motif)+'")');
function apply(){
let v='original';try{v=localStorage.getItem(KEY)||'original'}catch{};
if(v!=='original'&&v!=='morning'&&v!=='embroidery')v='original';
if(v==='embroidery'&&(Date.now()<START||Date.now()>=END)){v='original';try{localStorage.setItem(KEY,'original')}catch{}}
document.documentElement.dataset.classoraTheme=v;if(document.body)document.body.dataset.classoraTheme=v;
}
apply();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});
window.addEventListener('pageshow',apply);window.addEventListener('storage',e=>{if(e.key===KEY)apply()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
try{if(window.parent!==window&&window.parent.location.origin===location.origin){
const parentBody=window.parent.document.body;
if(parentBody){new MutationObserver(apply).observe(parentBody,{attributes:true,attributeFilter:['data-classora-theme']});}
}}catch{}
setInterval(()=>{if(document.documentElement.dataset.classoraTheme==='embroidery'&&Date.now()>=END)apply()},60000);
})();