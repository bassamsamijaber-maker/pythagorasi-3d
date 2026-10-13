import {normalizeTopic,topicMatches} from './learning-content.js?v=89';
const stop=new Set('مش مو فاهم فاهمه فهمت بدي اريد اشرح اشرحلي شرح عن موضوع درس كيف شو ما هو هي معنى معني ال please help understand explain confused about what is are i dont do not the a an me with'.split(' '));
const aliases=[
['ميل slope gradient steep rise run','الميل slope'],['معادله مجهول unknown equation solve حل x','معادلات equation'],['مثلث وتر triangle hypotenuse pythagoras','فيثاغورس مثلث pythagoras triangle'],['خصم تخفيض discount percent percentage','النسب المئويه percentages'],['حامض حموضه قاعده صابون ph acidity alkaline','الأحماض والقواعد ph'],['ذره بروتون إلكترون proton electron atom','بنيه الذره atoms'],['كثافه يطفو يغرق density float sink','الكثافه density'],['فاعل فعل subject doer','الفاعل subject'],['مفعول object recipient','المفعول object'],['نفي negative negation doesnt dont','Present Simple Verb To Be'],['ماضي yesterday past','Past Simple'],['مناخ climate warming weather','المناخ climate'],['خريطه map longitude latitude','الخرائط خطوط الطول دوائر العرض maps coordinates'],['سكان population migration هجره','السكان الهجره population migration']
].map(([a,b])=>[normalizeTopic(a).split(' '),normalizeTopic(b)]);
export function smartTopicMatch(query,text){
 const raw=normalizeTopic(query);if(!raw)return true;if(topicMatches(raw,text))return true;
 const tokens=raw.split(' ').filter(w=>!stop.has(w));if(!tokens.length)return false;const clean=tokens.join(' ');if(topicMatches(clean,text))return true;
 const normalized=normalizeTopic(text);return aliases.some(([words,targets])=>tokens.some(t=>words.includes(t))&&targets.split(' ').filter(w=>w.length>2).some(w=>normalized.includes(w)));
}
