import {escapeMath as E} from './math-scenes-v119.js?v=119';
export function englishModel(d,e,selected=0,language='ar'){
 const en=language==='en',T=(a,b)=>en?b:a,focus=e.parts.find(p=>p.role[1]!== 'Context')||e.parts[0],name=d.title;
 const words=(cls='')=>`<div class="ce129-words ${cls}">${e.parts.map((p,i)=>`<div class="${i===selected?'selected':''}"><span>${E(T(...p.role))}</span><b>${E(p.text)}</b></div>`).join('')}</div>`;
 const ribbon=`<div class="ce129-focus"><small>${T('الجزء الذي يوضح القاعدة','THE GRAMMAR FOCUS')}</small><b lang="en">${E(focus.text)}</b></div>`;
 let art='',kind=d.kind;
 if(d.kind==='timeline'){
  const period=e.time||(/Past/.test(name)?'past':/Future|Going/.test(name)?'future':'present');
  art=`<div class="ce129-time">${['past','present','future'].map((t,i)=>`<section class="${t===period?'active':''}"><span>${T(...[['الماضي','PAST'],['الحاضر','PRESENT'],['المستقبل','FUTURE']][i])}</span><div class="ce129-time-rail">${t===period?`<i class="${/Continuous/.test(name)?'duration':/Perfect/.test(name)?'connection':'event'}"></i>`:''}</div></section>`).join('')}</div>${ribbon}<p>${E(d.pattern)}</p>`;
 }else if(d.kind==='conditional'){
  const split=e.sentence.split(/,\s*/);art=`<div class="ce129-flow"><div><small>${T('الشرط','CONDITION')}</small><b>${E(split[0])}</b></div><i aria-hidden="true">→</i><div><small>${T('النتيجة','RESULT')}</small><b>${E(split.slice(1).join(', ')||focus.text)}</b></div></div><p>${E(d.pattern)}</p>`;
 }else if(d.kind==='speech')art=`<div class="ce129-speech">${words()}<p>${E(d.pattern)}</p></div>`;
 else if(d.kind==='passive')art=`<div class="ce129-passive"><span>${T('التركيز على متلقّي الفعل','FOCUS ON THE RECIPIENT')}</span>${words()}<p>${E(d.pattern)}</p></div>`;
 else if(d.kind==='compare'){
  art=`<div class="ce129-measures">${[45,75,105].map((h,i)=>`<div><i style="height:${h}px"></i><span>${['A','B','C'][i]}</span></div>`).join('')}</div>${ribbon}<p>${T('أحجام للمقارنة التوضيحية. الجملة تحدّد ما نقارنه.','Illustrative sizes. The sentence identifies what is compared.')}</p>`;
 }else if(/Singular|Plural/.test(name)){
  kind='count';const count=/\b(two|three|five)\b/i.exec(e.sentence)?.[1]?.toLowerCase();const n=({two:2,three:3,five:5})[count]||1;
  art=`<div class="ce129-count" aria-hidden="true">${Array.from({length:n},()=>'<i></i>').join('')}</div>${ribbon}<p>${E(e.sentence)}</p>`;
 }else if(/Articles/.test(name)){
  kind='articles';art=`<div class="ce129-choices">${['a','an','the'].map(x=>`<span class="${focus.text.trim().toLowerCase()===x?'active':''}">${x}</span>`).join('')}</div>${words()}<p>${E(d.pattern)}</p>`;
 }else if(/Pronouns|Possessive/.test(name)){
  kind='substitution';art=`<div class="ce129-substitution"><div class="ce129-slot">${E(focus.text)}</div><div class="ce129-context">${E(e.sentence)}</div></div><p>${E(d.pattern)}</p>`;
 }else if(/Question/.test(name)){
  kind='question';art=`<div class="ce129-question"><span aria-hidden="true">?</span>${ribbon}</div>${words()}<p>${E(d.pattern)}</p>`;
 }else if(/Modal|Can|Could|Must|Should|May|Might|Have to/.test(name)){
  kind='modal';art=`<div class="ce129-modal"><div class="ce129-slot">${E(focus.text)}</div><span>+</span><div>${E(d.pattern)}</div></div>${words()}`;
 }else if(d.kind==='quantity')art=`<div class="ce129-quantity"><div class="ce129-jar" aria-hidden="true"><i></i></div>${ribbon}</div><p>${E(d.pattern)}</p>`;
 else if(d.kind==='position')art=`<div class="ce129-position">${words()}<div class="ce129-link" aria-hidden="true"></div></div><p>${E(d.pattern)}</p>`;
 else if(/Adjective|Adverb/.test(name)){kind='modifier';art=`<div class="ce129-modifier">${ribbon}<div class="ce129-context">${E(e.sentence)}</div></div><p>${E(d.pattern)}</p>`}
 else if(/Gerund|Infinitive/.test(name)){kind='forms';art=`<div class="ce129-choices"><span>-ing</span><span>to + verb</span></div>${ribbon}<p>${E(d.pattern)}</p>`}
 else{kind=/Noun|Parts of Speech/.test(name)?'classification':'structure';art=`${words('ce129-structure')}<p>${E(d.pattern)}</p>`}
 return `<div class="ce129-model ce129-${kind}" data-language-model="${kind}" dir="ltr">${art}</div>`;
}
export function historyModel(d,selected=0,language='ar'){
 const en=language==='en',T=(a,b)=>en?b:a;
 const events=d.events.map((e,i)=>`<button type="button" data-event="${i}" aria-pressed="${selected===i}"><small>${String(i+1).padStart(2,'0')}</small><span>${E(T(...e.date))}</span><b>${E(T(...e.title))}</b>${selected===i?`<p>${E(T(...e.detail))}</p>`:''}</button>`).join('');
 if(d.kind==='cause')return `<div class="ch129-cause"><aside><span>${T('السياق','CONTEXT')}</span>${d.causes.map(p=>`<p>${E(T(...p))}</p>`).join('')}</aside><div class="ch129-events">${events}</div><aside><span>${T('التحوّلات','CHANGES')}</span>${d.effects.map(p=>`<p>${E(T(...p))}</p>`).join('')}</aside></div>`;
 if(d.kind==='routes')return `<div class="ch129-route"><span class="ch129-caption">${T('مسار المحطات عبر الزمن • ليس خريطة جغرافية','Milestones through time • not a geographical map')}</span><div class="ch129-events">${events}</div></div>`;
 if(d.kind==='society')return `<div class="ch129-archive"><div class="ch129-spine">${E(en?d.titleEn:d.title)}</div><div class="ch129-events">${events}</div></div>`;
 return `<div class="ch129-ribbon"><div class="ch129-events">${events}</div></div>`;
}
