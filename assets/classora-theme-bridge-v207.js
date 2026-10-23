/* Theme bridge for Classora pages outside the main single-page application. */
(()=>{'use strict';
const KEY='classora-site-theme';
const css=document.createElement('link');css.rel='stylesheet';css.href=new URL('./classora-appearance-v207.css?v=243',document.currentScript?.src||location.href).href;document.head.append(css);
function apply(){
let v='original';try{v=localStorage.getItem(KEY)||'original'}catch{};
if(v!=='original'&&v!=='morning'){v='original';try{localStorage.setItem(KEY,'original')}catch{}}
document.documentElement.dataset.classoraTheme=v;if(document.body)document.body.dataset.classoraTheme=v;
}
const digits=document.createElement('script');digits.src=new URL('./classora-western-digits-v203.js?v=203',document.currentScript?.src||location.href).href;digits.defer=true;document.head.append(digits);
apply();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});
window.addEventListener('pageshow',apply);window.addEventListener('storage',e=>{if(e.key===KEY)apply()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
try{if(window.parent!==window&&window.parent.location.origin===location.origin){
const parentBody=window.parent.document.body;
if(parentBody){new MutationObserver(apply).observe(parentBody,{attributes:true,attributeFilter:['data-classora-theme']});}
}}catch{}
})();
