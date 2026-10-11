/* Classora policy and privacy first-run viewer.
   Shows to newly created accounts, and on first installed-app launch, once per account and device.
   Acknowledgement is local UX state, not a server-side legal/parental consent record. */
export function installClassoraLegal(){
 const VERSION='2026-10-11';
 const DEVICE_KEY='classora_legal_review_'+VERSION+'_device';
 const SNOOZE_KEY='classora_legal_snooze_'+VERSION;
 const modal=document.createElement('div');modal.id='classoraLegalModal';
 modal.className='classora-legal-overlay';modal.hidden=true;
 modal.dataset.noTranslate='';
 modal.innerHTML='<section class="classora-legal-card" role="dialog" aria-modal="true" aria-labelledby="classoraLegalTitle">'+
 '<div class="classora-legal-header"><span class="classora-legal-logo">CLASSORA</span><button class="classora-legal-later" type="button" aria-label="Remind me later">×</button></div>'+
 '<div class="classora-legal-art" aria-hidden="true"><svg viewBox="0 0 150 70" width="150" height="70" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M12 24q26-13 50 3v35Q35 47 12 59ZM62 27q25-16 50-3v35Q89 47 62 62Z"/><path d="M122 14l11 8v14l-11 8-11-8V22Z"/><path d="m117 30 4 5 7-9"/></svg></div>'+
 '<h2 id="classoraLegalTitle"></h2><p id="classoraLegalText"></p>'+
 '<div class="classora-legal-links"><a id="classoraLegalPrivacy" href="./privacy.html" target="_blank" rel="noopener noreferrer"></a><a id="classoraLegalTerms" href="./terms.html" target="_blank" rel="noopener noreferrer"></a></div>'+
 '<label class="classora-legal-check"><input id="classoraLegalRead" type="checkbox"/><span id="classoraLegalCheckText"></span></label>'+
 '<div class="classora-legal-actions"><button type="button" class="classora-legal-continue" disabled></button><button type="button" class="classora-legal-later-action"></button></div>'+
 '</section>';
 document.body.append(modal);
 const byId=id=>modal.querySelector('#'+id);
 const en=()=>document.documentElement.lang==='en';
 const phrase=(ar,english)=>en()?english:ar;
 let currentKey='';
 let previousFocus=null;
 function localize(){
  modal.dir=en()?'ltr':'rtl';
  byId('classoraLegalTitle').textContent=phrase('قبل ما تبدأ مع Classora','Before you get started with Classora');
  byId('classoraLegalText').textContent=phrase('تعرّف على شروط الاستخدام وكيف بنحمي بياناتك. تقدر ترجع للصفحتين في أي وقت من الإعدادات.',
  'Please review our terms and how we handle your data. You can always revisit both pages from Settings.');
  byId('classoraLegalPrivacy').textContent=phrase('سياسة الخصوصية','Privacy Policy');
  byId('classoraLegalTerms').textContent=phrase('شروط الاستخدام','Terms of Use');
  byId('classoraLegalPrivacy').href='./privacy.html?lang='+(en()?'en':'ar');
  byId('classoraLegalTerms').href='./terms.html?lang='+(en()?'en':'ar');
  byId('classoraLegalCheckText').textContent=phrase('اطّلعت على سياسة الخصوصية وشروط الاستخدام، أو راجعتهما مع وليّ أمري عند الحاجة.','I have reviewed the Privacy Policy and Terms of Use, or reviewed them with my parent/guardian if appropriate.');
  modal.querySelector('.classora-legal-continue').textContent=phrase('متابعة إلى Classora','Continue to Classora');
  modal.querySelector('.classora-legal-later-action').textContent=phrase('ذكرني لاحقًا','Remind me later');
  modal.querySelector('.classora-legal-later').setAttribute('aria-label',phrase('ذكرني لاحقًا','Remind me later'));
 }
 function dismiss(acknowledged=false){
  if(acknowledged)try{
    if(currentKey)localStorage.setItem(currentKey,new Date().toISOString());
    localStorage.setItem(DEVICE_KEY,new Date().toISOString());
  }catch{}
  else try{sessionStorage.setItem(SNOOZE_KEY,'1')}catch{}
  modal.hidden=true;document.body.classList.remove('classora-legal-active');
  const target=previousFocus;previousFocus=null;if(target?.isConnected)target.focus({preventScroll:true});
 }
 function maybeShow(options={}){
  if(!modal.hidden)return;
  const uid=String(options.uid||window.PythagorasiUser?.uid||'');
  if(!uid||uid==='guest-local')return;
  const standalone=window.matchMedia?.('(display-mode: standalone)')?.matches||navigator.standalone===true;
  const newUser=options.newUser===true||window.PythagorasiUser?.classoraOnboardingEligible===true;
  if(!newUser&&!standalone)return;
  currentKey='classora_legal_review_'+VERSION+'_'+uid;
  try{if(localStorage.getItem(currentKey)||localStorage.getItem(DEVICE_KEY)||sessionStorage.getItem(SNOOZE_KEY))return}catch{}
  previousFocus=document.activeElement;localize();
  byId('classoraLegalRead').checked=false;
  modal.querySelector('.classora-legal-continue').disabled=true;
  modal.hidden=false;document.body.classList.add('classora-legal-active');
  modal.querySelector('.classora-legal-later').focus({preventScroll:true});
 }
 byId('classoraLegalRead').addEventListener('change',e=>{modal.querySelector('.classora-legal-continue').disabled=!e.target.checked});
 modal.querySelector('.classora-legal-continue').onclick=()=>dismiss(true);
 modal.querySelector('.classora-legal-later').onclick=()=>dismiss(false);
 modal.querySelector('.classora-legal-later-action').onclick=()=>dismiss(false);
 modal.addEventListener('keydown',e=>{
  if(e.key==='Escape'){e.preventDefault();dismiss(false)}
  if(e.key!=='Tab')return;
  const focusable=[...modal.querySelectorAll('a,button,input')].filter(el=>!el.disabled);
  if(!focusable.length)return;
  const i=focusable.indexOf(document.activeElement);
  if(e.shiftKey&&i===0){e.preventDefault();focusable[focusable.length-1].focus()}
  else if(!e.shiftKey&&i===focusable.length-1){e.preventDefault();focusable[0].focus()}
 });
 new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 localize();
 if(window.matchMedia?.('(display-mode: standalone)')?.matches||navigator.standalone===true){
  window.addEventListener('load',()=>window.setTimeout(()=>maybeShow({uid:'installed-device'}),2800),{once:true});
 }
 return {maybeShow,open:()=>{currentKey='';previousFocus=document.activeElement;modal.hidden=false;localize();byId('classoraLegalRead').checked=false;modal.querySelector('.classora-legal-continue').disabled=true;modal.querySelector('.classora-legal-later').focus();}};
}
