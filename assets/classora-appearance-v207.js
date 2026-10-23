import './classora-periodic-lobby-v205.js?v=205';
import './classora-western-digits-v203.js?v=203';
/* classora appearance v207. Safe, client-side theme and illustrative UI icons. */
(()=>{
'use strict';
const KEY='classora-site-theme';
const txt={
ar:['مظهر الموقع','اختار شكل كلاسورا، والتغيير يظهر فورًا بكل الموقع.','الأصلي','الصباحي'],
en:['Site appearance','Choose a Classora look. Changes appear throughout the site instantly.','Original','Morning'],
es:['Aspecto del sitio','Elige el diseño de Classora. Los cambios se aplican al instante.','Original','Mañana'],
ko:['사이트 테마','클라소라의 테마를 선택하세요. 즉시 전체 사이트에 적용됩니다.','기본','아침'],
de:['Website-Darstellung','Wähle einen Classora-Look. Änderungen gelten sofort überall.','Original','Morgen'],
it:['Aspetto del sito','Scegli lo stile Classora. Le modifiche si applicano subito.','Originale','Mattina'],
hi:['साइट का रूप','Classora का रूप चुनें। बदलाव पूरी साइट पर तुरंत लागू होंगे।','मूल','सुबह'],
tr:['Site görünümü','Classora görünümünü seç. Değişiklik tüm siteye hemen uygulanır.','Orijinal','Sabah']
};
const style=document.createElement('link');style.rel='stylesheet';style.href=new URL('./classora-appearance-v207.css?v=243',import.meta.url).href;document.head.appendChild(style);
const settingIcon='<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.5"/><path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.7 5.7l2.1 2.1m8.4 8.4 2.1 2.1M18.3 5.7l-2.1 2.1m-8.4 8.4-2.1 2.1"/></svg>';
const preview={
original:'<svg viewBox="0 0 64 50" fill="none" aria-hidden="true"><rect x="2" y="3" width="60" height="44" rx="9" fill="#0d2231" stroke="#589c84"/><path d="M10 13h42M10 20h28" stroke="#67deb0" stroke-width="4" stroke-linecap="round"/><rect x="10" y="28" width="19" height="11" rx="3" fill="#173b45"/><rect x="34" y="28" width="19" height="11" rx="3" fill="#173b45"/></svg>',
morning:'<svg viewBox="0 0 64 50" fill="none" aria-hidden="true"><rect x="2" y="3" width="60" height="44" rx="9" fill="#fff" stroke="#c3d8d2"/><path d="M10 13h42M10 20h28" stroke="#36bd8b" stroke-width="4" stroke-linecap="round"/><rect x="10" y="28" width="19" height="11" rx="3" fill="#e4f4ef"/><rect x="34" y="28" width="19" height="11" rx="3" fill="#e4f4ef"/></svg>',
};
const lang=()=>{const val=(document.documentElement.lang||'ar').toLowerCase().split('-')[0];return txt[val]||txt.ar};
const valid=v=>['original','morning'].includes(v);
function getTheme(){let v='original';try{v=localStorage.getItem(KEY)||'original'}catch{}if(!valid(v)){v='original';try{localStorage.setItem(KEY,v)}catch{}}return v}
let ownsLight=false;
function apply(){const v=getTheme(),body=document.body;if(!body)return;
 if(v==='morning'){if(!body.classList.contains('light')){body.classList.add('light');ownsLight=true}}
 else if(ownsLight){body.classList.remove('light');ownsLight=false}
 if(body.dataset.classoraTheme!==v)body.dataset.classoraTheme=v;
 document.querySelectorAll('#classoraAppearanceSettings [data-cl-theme]').forEach(b=>{const selected=b.dataset.clTheme===v;if(b.getAttribute('aria-pressed')!==String(selected))b.setAttribute('aria-pressed',String(selected))});
}
function choose(v){if(!valid(v))return;try{localStorage.setItem(KEY,v)}catch{}apply()}
function setText(el,value){if(el&&el.textContent!==value)el.textContent=value}
function mount(){const root=document.getElementById('settingsModal');if(!root)return;
 const dialog=root.querySelector('.settings-modalbox')||root.querySelector('.modalbox')||root;
 let pane=document.getElementById('classoraAppearanceSettings');if(!pane){
 pane=document.createElement('section');pane.id='classoraAppearanceSettings';pane.setAttribute('aria-labelledby','classoraAppearanceHeading');
 const title=document.createElement('div');title.className='cl-appearance-head';title.innerHTML=settingIcon+'<h3 id="classoraAppearanceHeading"></h3>';pane.append(title);
 const desc=document.createElement('p');desc.className='cl-appearance-desc';pane.append(desc);
 const choices=document.createElement('div');choices.className='cl-appearance-options';pane.append(choices);
 for(const name of ['original','morning']){const button=document.createElement('button');button.type='button';button.className='cl-appearance-choice';button.dataset.clTheme=name;button.setAttribute('aria-pressed','false');button.innerHTML=preview[name]+'<span></span>';button.addEventListener('click',()=>choose(name));choices.append(button)}
 const note=document.createElement('p');note.className='cl-appearance-note';pane.append(note);
 }
 const profile=dialog.querySelector('.settings-profile-row')||dialog.querySelector('.settings-grid'),head=dialog.querySelector('.modalhead');
 if(profile&&profile.parentElement){if(pane.parentElement!==profile.parentElement||pane.nextElementSibling!==profile)profile.before(pane)}
 else if(head&&head.parentElement===dialog){if(head.nextElementSibling!==pane)head.after(pane)}
 else if(pane.parentElement!==dialog||dialog.firstElementChild!==pane)dialog.prepend(pane);
 const tr=lang();setText(pane.querySelector('h3'),tr[0]);setText(pane.querySelector('.cl-appearance-desc'),tr[1]);
 pane.querySelectorAll('[data-cl-theme]').forEach((b,i)=>{setText(b.querySelector('span'),tr[i+2])});
 pane.querySelector('.cl-appearance-note')?.remove();apply();
}
let mountQueued=false;function queueMount(){if(mountQueued)return;mountQueued=true;requestAnimationFrame(()=>{mountQueued=false;mount()})}
function init(){apply();queueMount();const settings=document.getElementById('settingsModal');if(settings)new MutationObserver(records=>{if(records.some(r=>r.addedNodes.length||r.removedNodes.length))queueMount()}).observe(settings,{childList:true,subtree:true});
 const langObserver=new MutationObserver(queueMount);langObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 document.addEventListener('click',e=>{if(e.target.closest('#settingsModal,[id*="settingsBtn"],[id*="SettingsBtn"]'))queueMount()},{capture:true});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){apply();queueMount()}});
 window.addEventListener('storage',e=>{if(e.key===KEY)apply()});
 attachIcons();
}
/* Replace known decorative emoji icons in navigation and cards with original SVG line art.
   Never alter messages, student drawings, paragraphs, or user-generated content. */
const ink={
'📚':'<path d="M3 5.5c3-1.4 6-1.2 9 .7v14c-3-1.7-6-2-9-.7zM21 5.5c-3-1.4-6-1.2-9 .7v14c3-1.7 6-2 9-.7z"/>',
'📖':'<path d="M3 5.5c3-1.4 6-1.2 9 .7v14c-3-1.7-6-2-9-.7zM21 5.5c-3-1.4-6-1.2-9 .7v14c3-1.7 6-2 9-.7z"/>',
'🧪':'<path d="M9 3h6M10 3v7l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3M7 17h10"/>',
'🧬':'<path d="M7 2c12 6-2 14 10 20M17 2C5 8 19 16 7 22M8 6h8M7 12h10M8 18h8"/>',
'🔬':'<path d="m10 3 5 5-3 3-5-5zM11 10 7 15M4 18h13M12 15a6 6 0 0 1 6 6H3"/>',
'📐':'<path d="M4 20V5l15 15zM9 16h4l-4-4z"/>',
'🧮':'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2"/>',
'📊':'<path d="M4 20V13h4v7m4 0V5h4v15m4 0v-9h2v9M2 20h21"/>',
'✏️':'<path d="m4 20 5-1 11-11-4-4L5 15zM13 7l4 4"/>',
'✍️':'<path d="m3 20 5-1L20 7l-4-4L4 15zM4 23h17"/>',
'🎨':'<path d="M12 2a10 10 0 1 0 0 20h2a2 2 0 0 0 1-4 2 2 0 0 1 1-3c5-2 7-13-4-13z"/><circle cx="7" cy="10" r="1"/><circle cx="10" cy="6" r="1"/><circle cx="16" cy="8" r="1"/>',
'🖼️':'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m4 17 6-5 4 3 3-3 3 5"/>',
'🏆':'<path d="M8 3h8v8a4 4 0 0 1-8 0zM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 15v4m-5 2h10"/>',
'⚙️':'<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>',
'💬':'<path d="M20 11a8 8 0 0 1-8 8 10 10 0 0 1-4-.8L3 20l1.8-4A8 8 0 1 1 20 11z"/>',
'🔔':'<path d="M5 18h14l-2-3V9a5 5 0 0 0-10 0v6zM10 21h4"/>',
'🌍':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18"/>',
'🌎':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18"/>',
'🌐':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18"/>',
'🏠':'<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>',
'🎓':'<path d="m2 9 10-5 10 5-10 5zM6 12v5c4 3 8 3 12 0v-5M22 9v8"/>',
'🎯':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
'🤖':'<rect x="4" y="7" width="16" height="14" rx="3"/><path d="M12 3v4m-8 5H2m20 0h-2M8 15h1m6 0h1M9 18h6"/>',
'📣':'<path d="M3 10h5l11-6v16L8 14H3zM8 14l2 7h4M21 9v6"/>',
'📅':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v5m8-5v5M3 10h18"/>',
'👋':'<path d="M8 21c-5-4-6-8-5-10 1-2 3-1 5 1V5a2 2 0 0 1 4 0V3a2 2 0 0 1 4 0v2a2 2 0 0 1 4 0v11c0 4-3 6-7 6z"/>',
'🇵🇸':'<path d="M3 4h18v5H3z" fill="#151515" stroke="none"/><path d="M3 9h18v6H3z" fill="#fff" stroke="none"/><path d="M3 15h18v5H3z" fill="#26774e" stroke="none"/><path d="m3 4 10 8-10 8z" fill="#c03745" stroke="none"/><path d="M3 4h18v16H3z"/>'
};
const iconKeys=Object.keys(ink).sort((a,b)=>b.length-a.length);
const targetSelector='#platformLobby button,#platformLobby h2,#platformLobby h3,#classoraMobilePageNav button,#settingsModal .settings-card h3,#settingsModal .modalhead h2,#competitionModal button,#examModal button,.hw-card h2,.hw-card button,.hw-dialog button,.cp-illustration,.lobby-quick-nav button';
const ignored='.chat-message,.message-text,.chat-bubble,[contenteditable],.user-message,.ai-message,.hw-body p';
function icon(emoji){const span=document.createElement('span');span.className='cl-drawn-symbol';span.setAttribute('role','img');span.setAttribute('aria-label',emoji);span.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ink[emoji]+'</svg>';return span}
function convert(el){if(el.closest(ignored))return;
 const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode()){const n=walker.currentNode;if(n.parentElement?.closest('.cl-drawn-symbol,svg,script,style,'+ignored))continue;if(iconKeys.some(k=>n.nodeValue.includes(k)))nodes.push(n)}
 nodes.forEach(n=>{const content=n.nodeValue,frag=document.createDocumentFragment();let pos=0;while(pos<content.length){let best=-1,key='';for(const emoji of iconKeys){const at=content.indexOf(emoji,pos);if(at>=0&&(best<0||at<best)){best=at;key=emoji}}if(best<0){frag.append(document.createTextNode(content.slice(pos)));break}if(best>pos)frag.append(document.createTextNode(content.slice(pos,best)));frag.append(icon(key));pos=best+key.length}n.replaceWith(frag)});
}
function scan(root){if(root.nodeType!==1)return;if(root.matches?.(targetSelector))convert(root);root.querySelectorAll?.(targetSelector).forEach(convert)}
function attachIcons(){for(const sel of ['#platformLobby','#settingsModal','#competitionModal','#examModal','#classoraMobilePageNav']){const root=document.querySelector(sel);if(!root)continue;scan(root);new MutationObserver(records=>{for(const record of records){for(const n of record.addedNodes){if(n.nodeType===1)scan(n)}}}).observe(root,{childList:true,subtree:true})}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

