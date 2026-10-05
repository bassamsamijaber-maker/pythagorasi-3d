export function mountReturnNavigation(language){
 const L=(a,e)=>language()==='ar'?a:e;
 const arrow='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="m10 5-7 7 7 7M4 12h17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 function refresh(root=document){
  root.querySelectorAll('button.close,button[id*="Close"],button[id*="close"],[data-close-modal],button[data-return-control]').forEach(b=>{
   if(!b.matches('button'))return;
   if(!b.dataset.returnControl&&!/^[\s×✕✖✗xX❌]+$/.test(b.textContent))return;
   b.dataset.returnControl='1';b.dataset.noTranslate='';const label=L('رجوع','Back');
   if(b.getAttribute('aria-label')===label&&b.querySelector('svg'))return;
   b.innerHTML=arrow;const s=document.createElement('span');s.textContent=label;b.append(s);b.setAttribute('aria-label',label);b.title=label;
  });
 }
 let origin=null;
 document.addEventListener('click',e=>{
  const back=e.target.closest('[data-return-control]'),modal=e.target.closest('.modal.open');
  if(back&&modal){const id=modal.dataset.returnOrigin;delete modal.dataset.returnOrigin;if(id){const target=document.getElementById(id);if(target)queueMicrotask(()=>{target.classList.add('open');target.scrollTop=Number(target.dataset.returnScroll)||0})}return}
  origin=modal?.id||null;if(modal)modal.dataset.returnScroll=String(modal.scrollTop);
 },true);
 const observer=new MutationObserver(records=>{for(const r of records){if(r.type==='attributes'&&r.target.matches('.modal.open')&&origin&&origin!==r.target.id)r.target.dataset.returnOrigin=origin;}refresh()});
 observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});refresh();return {refresh};
}
