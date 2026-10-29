/* Search and categories for existing settings controls; no account mutations. */
(()=>{'use strict';
 const modal=document.getElementById('settingsModal'),grid=modal?.querySelector('.settings-grid');if(!grid)return;
 const tools=document.createElement('div');tools.className='cv290-settings-tools';
 const search=document.createElement('input');search.type='search';search.autocomplete='off';
 const empty=document.createElement('p');empty.className='cv290-settings-empty';empty.setAttribute('role','status');empty.hidden=true;
 let category='all';const labels={all:['الكل','All'],account:['الحساب والأمان','Account & security'],appearance:['المظهر والتفضيلات','Appearance & preferences'],help:['الدعم والخدمات','Help & services']};
 const translate=(ar,en)=>{const lang=document.documentElement.lang||'ar';return lang.startsWith('ar')?ar:lang.startsWith('en')?en:window.ClassoraLocale?.tFor?.(lang,en)||en};
 const buttons=Object.entries(labels).map(([key,label])=>{const b=document.createElement('button');b.type='button';b.dataset.category=key;b.onclick=()=>{category=key;filter()};tools.append(b);return b});tools.prepend(search);grid.before(tools);grid.after(empty);
 function classify(card){const text=card.id+' '+(card.querySelector('h3')?.textContent||'');if(/password|security|account|name|اسم|حساب|سر|أمان/i.test(text))return 'account';if(/support|privacy|notification|pwa|install|دعم|خصوصية|إشعار|تثبيت/i.test(text))return 'help';return 'appearance'}
 function filter(){const q=search.value.trim().toLocaleLowerCase();let visible=0;for(const card of grid.querySelectorAll(':scope > .settings-card')){const match=(category==='all'||classify(card)===category)&&(!q||card.textContent.toLocaleLowerCase().includes(q));card.classList.toggle('cv290-filtered',!match);if(match&&!card.hidden&&!card.classList.contains('hidden'))visible++}buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));empty.hidden=visible>0}
 function localize(){search.placeholder=translate('ابحث في الإعدادات…','Search settings…');search.setAttribute('aria-label',search.placeholder);empty.textContent=translate('ما لقينا إعداد مطابق. جرّب كلمة ثانية أو اختار الكل.','No matching settings. Try another word or choose All.');buttons.forEach(b=>b.textContent=translate(...labels[b.dataset.category]));filter()}
 search.addEventListener('input',filter);new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});new MutationObserver(filter).observe(grid,{childList:true});let wasOpen=false;new MutationObserver(()=>{const open=modal.classList.contains('open');if(open&&!wasOpen){category='all';search.value='';filter()}wasOpen=open}).observe(modal,{attributes:true,attributeFilter:['class']});localize();
})();
