/* Classora v243: presentation only. Existing IDs, listeners and access checks stay intact. */
(()=>{'use strict';
const scene=`<svg viewBox="0 0 540 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cl243-learning-art">
<defs><linearGradient id="cl243-slab" x1="125" y1="230" x2="390" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="#8873E7"/><stop offset="1" stop-color="#43346F"/></linearGradient><linearGradient id="cl243-book" x1="185" y1="110" x2="334" y2="310" gradientUnits="userSpaceOnUse"><stop stop-color="#FCF8EF"/><stop offset="1" stop-color="#D7D3EC"/></linearGradient><linearGradient id="cl243-cover" x1="138" y1="183" x2="355" y2="331" gradientUnits="userSpaceOnUse"><stop stop-color="#B9A2F8"/><stop offset="1" stop-color="#7860BF"/></linearGradient><linearGradient id="cl243-card" x1="350" y1="95" x2="445" y2="195"><stop stop-color="#DDC9FF"/><stop offset="1" stop-color="#9B80DA"/></linearGradient></defs>
<ellipse cx="280" cy="361" rx="180" ry="21" fill="#080B18" opacity=".22"/>
<g class="cl243-art-orbits" stroke="#B7A2F0" stroke-opacity=".25"><ellipse cx="270" cy="231" rx="221" ry="124" transform="rotate(-18 270 231)"/><ellipse cx="270" cy="231" rx="185" ry="100" transform="rotate(24 270 231)" stroke-dasharray="3 10"/></g>
<g class="cl243-art-book"><path d="m113 282 160-91 164 94v20l-161 93-163-94z" fill="url(#cl243-slab)"/><path d="m113 282 162 93 162-90-164-94z" fill="#A38ADB" fill-opacity=".3" stroke="#D9C8FF" stroke-opacity=".3"/><path d="m142 247 136-76 122 71v17l-136 80-122-73z" fill="#55457D"/><path d="m142 247 136-76 122 71-136 79z" fill="url(#cl243-cover)"/>
<path d="m157 234 113 65 114-66v16l-114 66-113-65z" fill="#BDB5D0"/><path d="m160 242 110 64 112-65m-222 6 110 64 112-65" stroke="#F4EEFA" stroke-opacity=".8"/>
<path d="M269 296 155 230v-77c42 7 79 27 114 57 33-30 68-47 112-54v77z" fill="url(#cl243-book)"/><path d="M269 296v-86c34-29 69-47 112-54v77z" fill="#EEEBF8"/><path d="M269 210v86" stroke="#BFB7D7" stroke-width="2"/><path d="m172 178 71 40m-71-27 71 41m-71-27 51 29" stroke="#9A8CB9" stroke-width="3" stroke-linecap="round"/>
<path d="m297 225 18 12 37-50" stroke="#8B70C9" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="m294 260 60-34" stroke="#C2B8DA" stroke-width="3" stroke-linecap="round"/>
</g>
<g class="cl243-art-float cl243-art-card"><path d="m352 95 70-20 34 100-71 21z" fill="#372B5B" transform="translate(4 5)"/><path d="m352 95 70-20 34 100-71 21z" fill="url(#cl243-card)" stroke="#F0E7FF" stroke-opacity=".65"/><path d="m380 147 11 11 23-35" stroke="#44305F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="m387 178 43-13" stroke="#68518F" stroke-width="3" stroke-linecap="round"/></g>
<g class="cl243-art-float cl243-art-cube"><path d="m81 131 37-21 36 21v43l-36 21-37-21z" fill="#BA9970"/><path d="m81 131 37 22 36-22-36-21z" fill="#F6D9A4"/><path d="m118 153 36-22v43l-36 21z" fill="#CEAA78"/><path d="M118 153v42m-37-64 37 22 36-22" stroke="#FFF0CD" stroke-opacity=".6"/></g>
<g class="cl243-art-float cl243-art-star" stroke="#D5BA81" stroke-width="2"><path d="m296 63 5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="#D5BA8122"/><path d="m453 258 3 10 10 3-10 3-3 10-3-10-10-3 10-3z"/></g>
<circle cx="65" cy="259" r="5" fill="#C8B2FF"/><circle cx="443" cy="219" r="3" fill="#DEC895"/><circle cx="209" cy="88" r="3" fill="#BCA7EB"/>
</svg>`;
function mount(){
 const front=document.getElementById('classoraLearningFront');if(!front||front.dataset.premium243)return;
 front.dataset.premium243='1';
 const visual=front.querySelector('.cl214-orbit-art');if(visual){visual.className='cl243-hero-scene';visual.innerHTML=scene}
 // Move existing nodes, preserving real actions, counters and their listeners.
 const hero=front.querySelector('.cl214-hero'),quick=front.querySelector('.cl214-quick'),tabs=front.querySelector('.cl214-tabs');
 if(hero)front.prepend(hero);if(quick&&hero)hero.after(quick);if(tabs&&quick)quick.after(tabs);
 const promo=document.getElementById('classoraPromoCenter');if(promo&&tabs)tabs.after(promo);
 const name=document.getElementById('cl214StudentName');if(name)name.dataset.noTranslate='';
 const arrange=()=>{
  const boost=document.getElementById('classoraLearningBoost'),preview=document.getElementById('cl223Preview'),map=document.getElementById('cl223MapPanel');
  if(boost&&preview&&boost.parentElement===front&&preview.parentElement===front&&boost.nextElementSibling!==preview)boost.after(preview);
  if(preview&&map&&map.parentElement===front&&preview.nextElementSibling!==map)preview.after(map);
 };
 arrange();new MutationObserver(arrange).observe(front,{childList:true});
 document.body.classList.add('classora-premium-ui');
}
mount();document.addEventListener('classora:learning-front-ready',mount,{once:true});
})();
