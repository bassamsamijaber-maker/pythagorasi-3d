/* Classora numbers v199 — view-layer only; no account data or input values changed. */
(()=>{'use strict';
 if(window.__classoraWesternDigits199Loaded)return;
 window.__classoraWesternDigits199Loaded=true;
 const ARABIC_DIGITS=/[\u0660-\u0669\u06F0-\u06F9]/g;
 const hasArabic=/[\u0660-\u0669\u06F0-\u06F9]/;
 const toWestern=value=>String(value).replace(ARABIC_DIGITS,c=>String(c.charCodeAt(0) - (c.charCodeAt(0)<=0x0669?0x0660:0x06F0)));
 const ignore='script,style,template,noscript,code,pre,textarea,input,[contenteditable]:not([contenteditable="false"]),[data-no-number-normalization]';
 const readable=['placeholder','title','aria-label','alt'];
 const pending=new Set();
 let scheduled=false;
 function blocked(el){return Boolean(el?.closest?.(ignore))}
 function fixText(n){if(!n?.isConnected||!hasArabic.test(n.nodeValue||'')||blocked(n.parentElement))return;
  const normalized=toWestern(n.nodeValue);if(normalized!==n.nodeValue)n.nodeValue=normalized;
 }
 function fixAttributes(el){if(!el?.isConnected||blocked(el))return;
  for(const attr of readable){const v=el.getAttribute(attr);if(v&&hasArabic.test(v))el.setAttribute(attr,toWestern(v))}
 }
 function visit(node){if(!node?.isConnected)return;
  if(node.nodeType===Node.TEXT_NODE){fixText(node);return}
  if(node.nodeType!==Node.ELEMENT_NODE||blocked(node))return;
  fixAttributes(node);
  const walker=document.createTreeWalker(node,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{
    acceptNode(current){
      if(current.nodeType===Node.ELEMENT_NODE&&current!==node&&current.matches?.(ignore))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let current;while(current=walker.nextNode()){
    if(current.nodeType===Node.TEXT_NODE)fixText(current);else fixAttributes(current);
  }
 }
 function flush(){scheduled=false;let count=0;for(const node of pending){pending.delete(node);visit(node);if(++count>=350){queueSchedule();break}}}
 function queueSchedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(flush)}
 function enqueue(node){if(!node)return;pending.add(node);queueSchedule()}
 function begin(){
  enqueue(document.body);
  const observer=new MutationObserver(mutations=>{
    for(const record of mutations){
      if(record.type==='characterData')enqueue(record.target);
      else if(record.type==='attributes')enqueue(record.target);
      else for(const node of record.addedNodes)enqueue(node);
    }
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:readable});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)enqueue(document.body)});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',begin,{once:true});else begin();
})();