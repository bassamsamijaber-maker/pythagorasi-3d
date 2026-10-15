/* Classora v148: graded, self-checking statistics questions with serializable charts. */
import {statisticsTableQuestion} from './classora-statistics-v147.js?v=148';
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[rnd(0,a.length-1)], sum=a=>a.reduce((v,x)=>v+x,0);
const fmt=x=>String(Number(Number(x).toFixed(2)));
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const fraction=(a,b)=>{const g=gcd(a,b);return a/g+'/'+(b/g)};
const lang=(ar,en,l)=>l==='en'?en:ar;
const shuffle=a=>{const v=[...a];for(let i=v.length-1;i>0;i--){const j=rnd(0,i);[v[i],v[j]]=[v[j],v[i]]}return v};
function choices(answer,wrong,kind='number'){
 const s=String(answer),result=[s];for(const x of wrong){const v=String(x);if(!result.includes(v))result.push(v);if(result.length===4)break}
 let base=Number.parseFloat(s);if(!Number.isFinite(base))base=8;
 for(let i=1;result.length<4&&i<100;i++){
  const x=kind==='fraction'?fraction(i,20):kind==='percent'?fmt(base+(i%2?-1:1)*5*Math.ceil(i/2))+'%':
   kind==='degree'?fmt(base+(i%2?-1:1)*18*Math.ceil(i/2))+'°':
   kind==='label'?'Other '+i:fmt(base+(i%2?-1:1)*Math.ceil(i/2)*(String(s).includes('.')?.25:1));
  if(!result.includes(x))result.push(x);
 }
 return shuffle(result.slice(0,4));
}
const catContexts=[
 {ar:'جرى عدّ الأقلام في صندوق أدوات مدرسية.',en:'Pens in a school supply box were counted.',headerAr:'لون القلم',headerEn:'Pen color',arLabels:['أحمر','أزرق','أسود','أخضر','بنفسجي'],enLabels:['Red','Blue','Black','Green','Purple']},
 {ar:'استطلاع عن الرياضة المفضلة للطلاب.',en:'Students were surveyed about their favorite sport.',headerAr:'الرياضة',headerEn:'Sport',arLabels:['كرة قدم','كرة سلة','سباحة','تنس','دراجات'],enLabels:['Football','Basketball','Swimming','Tennis','Cycling']},
 {ar:'استطلاع عن لون حقائب الطلاب.',en:'A survey recorded school bag colors.',headerAr:'لون الحقيبة',headerEn:'Bag color',arLabels:['أسود','أزرق','أحمر','أخضر','أبيض'],enLabels:['Black','Blue','Red','Green','White']}
];
function catData(l){
 const context=pick(catContexts);
 const cuts=shuffle(Array.from({length:19},(_,i)=>i+1)).slice(0,4).sort((a,b)=>a-b);
 const pieces=[cuts[0],cuts[1]-cuts[0],cuts[2]-cuts[1],cuts[3]-cuts[2],20-cuts[3]];
 const total=pick([20,40,60,80,100]),counts=pieces.map(v=>v*total/20);
 return {labels:l==='en'?context.enLabels:context.arLabels,counts,percent:pieces.map(x=>x*5),total,
   intro:lang(context.ar,context.en,l),heading:lang(context.headerAr,context.headerEn,l)};
}
function numericData(l){
 const counts=Array.from({length:5},()=>rnd(1,8)),values=[0,1,2,3,4];
 const n=sum(counts),weighted=sum(counts.map((count,i)=>count*i));
 const list=values.flatMap((value,i)=>Array(counts[i]).fill(value));
 const median=n%2?list[Math.floor(n/2)]:(list[n/2-1]+list[n/2])/2;
 const mode=counts.indexOf(Math.max(...counts));
 return {counts,values,n,weighted,mean:weighted/n,median,mode,intro:lang('سُئل الطلاب عن عدد الكتب التي قرأوها خلال شهر.','Students were surveyed on books read during one month.',l)};
}
function chart(type,labels,values,xlabel,langCode,ylabel){
 return '[[STAT_CHART:'+type+']]\n'+xlabel+' | '+(ylabel||lang('التكرار','Frequency',langCode))+'\n'+labels.map((v,i)=>v+' | '+fmt(values[i])).join('\n')+'\n[[/STAT_CHART]]';
}
function table(labels,counts,heading,l,hidden=-1){
 const total=sum(counts);
 return '[[STAT_TABLE]]\n'+heading+' | '+lang('التكرار','Frequency',l)+' | '+lang('التكرار النسبي','Relative frequency',l)+'\n'+
  labels.map((v,i)=>v+' | '+(i===hidden?'?':counts[i])+' | '+fmt(100*counts[i]/total)+'%').join('\n')+
  '\n'+lang('الإجمالي','Total',l)+' | '+total+' | 100%\n[[/STAT_TABLE]]';
}
function make(intro,visual,ask,answer,wrong,explain,kind,level,optionKind='number'){
 return {prompt:intro+'\n'+visual+'\n'+ask,options:choices(answer,wrong,optionKind),answer:String(answer),explanation:String(explain),
 statisticsWorksheet:true,statisticsComplete:true,statisticsQuestionType:kind,statisticsLevel:level};
}
function basic(serial,l){
 const q=statisticsTableQuestion(null,'easy',serial,l);
 const m=q.prompt.match(/\[\[STAT_TABLE\]\]\n([\s\S]*?)\n\[\[\/STAT_TABLE\]\]/);
 if(m && serial%2===0 && q.statisticsQuestionType!==7){
  const rows=m[1].split('\n').map(r=>r.split('|').map(s=>s.trim()));
  const body=rows.slice(1,-1),freq=body.map(x=>Number(x[1]));
  if(body.length>=3&&freq.every(Number.isFinite)){
   const newChart=chart('bar',body.map(x=>x[0]),freq,rows[0][0],l);
   q.prompt=q.prompt.replace('[[/STAT_TABLE]]','[[/STAT_TABLE]]\n'+newChart);
  }
 }
 return {...q,statisticsComplete:true,statisticsLevel:'easy',statisticsQuestionType:'frequency-'+q.statisticsQuestionType};
}
function statisticsCompleteQuestion(topic,difficulty='medium',serial=0,l='ar'){
 const level=['easy','medium','hard','expert'].includes(difficulty)?difficulty:'medium';
 const c=catData(l),d=numericData(l),a=rnd(0,4),b=(a+rnd(1,4))%5;
 const numericLabels=d.values.map(String);
 const ct=table(c.labels,c.counts,c.heading,l),nt=table(numericLabels,d.counts,lang('عدد الكتب','Books',l),l);
 const pie=chart('pie',c.labels,c.counts,c.heading,l),bar=chart('bar',c.labels,c.counts,c.heading,l);
 const nbar=chart('bar',numericLabels,d.counts,lang('عدد الكتب','Books',l),l);
 const nline=chart('line',numericLabels,d.counts,lang('عدد الكتب','Books',l),l);
 const mean=fmt(d.mean),percentage=c.percent[a],relative=fmt(d.counts[a]/d.n*100);
 const cumulative=sum(d.counts.slice(0,3)),combined=c.counts[a]+c.counts[b];
 const bins=['0–9','10–19','20–29','30–39','40–49'],hist=Array.from({length:5},()=>rnd(2,12));
 const hidx=rnd(0,3),hsum=hist[hidx]+hist[hidx+1];
 const histogram=chart('histogram',bins,hist,lang('مجال العلامات','Score interval',l),l);
 const hIntro=lang('يعرض المدرّج التكراري توزيع العلامات على مجالات.','A histogram shows frequencies for score intervals.',l);
 const easy=[
  ()=>basic(serial,l),
  ()=>make(c.intro,bar,lang('ما تكرار الفئة «','What is the frequency of ',l)+c.labels[a]+'»؟',c.counts[a],[c.counts[b],c.total,c.counts[a]+c.total/20],lang('نقرأ ارتفاع العمود في الرسم.','Read the bar height.',l),'bar-read',level),
  ()=>make(d.intro,nt,lang('كم عدد الطلاب بالإجمال؟','What is the total number of students?',l),d.n,[d.n+2,d.n-3,d.weighted],d.counts.join('+')+'='+d.n,'total',level),
  ()=>make(d.intro,nbar,lang('ما القيمة الأكثر تكرارًا (منوال واحد)؟','What is one most frequent value (a mode)?',l),d.mode,d.values.filter(x=>x!==d.mode),lang('القيمة صاحبة العمود الأعلى هي المنوال.','The highest bar shows a mode.',l),'mode',level),
  ()=>make(d.intro,nt,lang('ما المعدل الحسابي؟ قرّب إلى منزلتين عشريتين.','Find the arithmetic mean rounded to 2 decimals.',l),mean,[fmt(d.mean+1),fmt(d.mean-.5),fmt(d.weighted)],d.weighted+'/'+d.n+' = '+mean,'mean',level),
  ()=>make(d.intro,nline,lang('ما المدى للبيانات؟','What is the data range?',l),4,[3,5,d.n,2],'4 − 0 = 4','range',level),
  ()=>make(c.intro,pie,lang('ما النسبة المئوية للفئة «','What percentage does ',l)+c.labels[a]+'»؟',percentage+'%',[c.percent[b]+'%',(100-percentage)+'%',(percentage+5)+'%'],c.counts[a]+'/'+c.total+' ×100 = '+percentage+'%','pie-percent',level,'percent')
 ];
 const medium=[
  ()=>make(d.intro,nt,lang('ما الوسيط بعد ترتيب القيم حسب تكرارها؟','Find the median from the frequency table.',l),d.median,[d.mode,fmt(d.mean),d.median+.5,d.median-1],lang('الوسيط القيمة الوسطى بعد تكرار كل قيمة حسب عدد مرات ظهورها.','Expand the frequencies and take the middle value(s).',l),'median',level),
  ()=>make(d.intro,nbar,lang('احسب المعدّل الحسابي إلى منزلتين عشريتين.','Calculate the mean to 2 decimals.',l),mean,[fmt(d.mean+1),fmt(d.mean-.5),fmt(d.weighted/5)],d.weighted+'/'+d.n+' = '+mean,'mean',level),
  ()=>make(c.intro,ct,lang('ما التكرار النسبي للفئة «','Find the relative frequency for ',l)+c.labels[a]+lang('» ككسر مبسّط؟',' as a simplified fraction.',l),fraction(c.counts[a],c.total),[fraction(c.counts[b],c.total),fraction(c.total-c.counts[a],c.total),fraction(combined,c.total)],c.counts[a]+'/'+c.total+' = '+fraction(c.counts[a],c.total),'relative-fraction',level,'fraction'),
  ()=>make(d.intro,nline,lang('كم عدد الطلاب الذين قرأوا 0 أو 1 أو 2 كتاب؟','How many students read 0, 1 or 2 books?',l),cumulative,[d.n,cumulative+d.counts[3],cumulative-d.counts[2]],d.counts.slice(0,3).join('+')+'='+cumulative,'cumulative',level),
  ()=>make(c.intro,pie,lang('ما زاوية قطاع «','What is the sector angle for ',l)+c.labels[a]+'»؟',fmt(percentage*3.6)+'°',[percentage+'°',fmt(percentage*3.6+18)+'°',fmt((100-percentage)*3.6)+'°'],percentage+' ×3.6 = '+fmt(percentage*3.6)+'°','pie-angle',level,'degree'),
  ()=>make(d.intro,nt,lang('ما التكرار النسبي للقيمة ','What is the relative percentage for ',l)+a+lang(' بالنسبة المئوية؟','?',l),relative+'%',[fmt(d.counts[b]/d.n*100)+'%',fmt(100-relative)+'%',fmt(relative+10)+'%'],d.counts[a]+'/'+d.n+' ×100 = '+relative+'%','relative-percent',level,'percent'),
  ()=>make(hIntro,histogram,lang('ما مجموع التكرارين في المجالين ','What is the total frequency in intervals ',l)+bins[hidx]+lang(' و',' and ',l)+bins[hidx+1]+'؟',hsum,[sum(hist),hist[hidx],hist[hidx+1]],hist[hidx]+'+'+hist[hidx+1]+'='+hsum,'histogram',level)
 ];
 const hard=[
  ()=>make(d.intro,nt,lang('احسب المعدّل المرجح بالتكرارات، إلى منزلتين عشريتين.','Compute the frequency-weighted average, to 2 decimals.',l),mean,[fmt(sum(d.values)/5),fmt(d.weighted/5),fmt(d.mean+.75)],d.weighted+'/'+d.n+' = '+mean,'weighted-mean',level),
  ()=>make(c.intro,pie,lang('ما زاوية القطاع للفئة «','Find the pie chart sector angle for ',l)+c.labels[a]+'»؟',fmt(percentage*3.6)+'°',[percentage+'°',fmt(percentage*3.6+36)+'°',fmt(percentage*3.6-18)+'°'],percentage+' × 360/100 = '+fmt(percentage*3.6)+'°','pie-angle',level,'degree'),
  ()=>make(hIntro,histogram,lang('ما نسبة الطلاب في المجالين ','What percentage fall in intervals ',l)+bins[hidx]+lang(' و',' and ',l)+bins[hidx+1]+lang(' معًا؟ قرّب إلى منزلتين.',' combined? Round to 2 decimals.',l),fmt(hsum/sum(hist)*100)+'%',[fmt((sum(hist)-hsum)/sum(hist)*100)+'%',fmt(hsum/sum(hist)*10)+'%',fmt((hsum+3)/sum(hist)*100)+'%'],hsum+'/'+sum(hist)+' ×100 = '+fmt(hsum/sum(hist)*100)+'%','histogram-percent',level,'percent'),
  ()=>make(c.intro,ct,lang('ما النسبة المئوية المشتركة للفئتين «','What is the combined percentage of ',l)+c.labels[a]+lang('» و«',' and ',l)+c.labels[b]+'»؟',(c.percent[a]+c.percent[b])+'%',[c.percent[a]+'%',c.percent[b]+'%',(100-c.percent[a]-c.percent[b])+'%'],c.percent[a]+'% + '+c.percent[b]+'%','combined-relative',level,'percent'),
  ()=>make(d.intro,nt,lang('ما التكرار النسبي التراكمي للقيم 0 حتى 2؟','What is the cumulative relative frequency through 2?',l),fmt(cumulative/d.n*100)+'%',[fmt(cumulative/d.n*10)+'%',fmt((cumulative+d.counts[3])/d.n*100)+'%',fmt(d.counts[2]/d.n*100)+'%'],cumulative+'/'+d.n+' ×100','cumulative-relative',level,'percent'),
  ()=>make(c.intro,table(c.labels,c.counts,c.heading,l,a),lang('ما التكرار المفقود في الفئة «','Find the missing frequency of ',l)+c.labels[a]+'»؟',c.counts[a],[c.total-c.counts[a],c.counts[a]+c.total/20,c.counts[b]],c.total+' − '+(c.total-c.counts[a])+' = '+c.counts[a],'missing-frequency',level),
  ()=>make(d.intro,nline,lang('كم عدد الطلاب الذين قرأوا أكثر من كتابين؟','How many students read more than 2 books?',l),d.counts[3]+d.counts[4],[cumulative,d.n,d.counts[2]+d.counts[3]],d.counts[3]+'+'+d.counts[4],'line-interpretation',level)
 ];
 const expert=[
  ()=>{const m1=rnd(2,8),m2=rnd(9,16),n1=rnd(8,22),n2=rnd(11,26),avg=fmt((m1*n1+m2*n2)/(n1+n2));
   return make(lang('لدينا مجموعتان مختلفتان من الطلاب.','Two student groups have different means.',l),
     lang('المجموعة الأولى: ','Group A: ',l)+n1+lang(' طالبًا، معدلها ',' students with mean ',l)+m1+'.\n'+lang('المجموعة الثانية: ','Group B: ',l)+n2+lang(' طالبًا، معدلها ',' students with mean ',l)+m2+'.',
     lang('كم المعدّل المشترك للمجموعتين (منزلتان عشريتان)؟','Find the combined mean, to 2 decimals.',l),avg,
     [fmt((m1+m2)/2),fmt(Number(avg)+1),fmt(Number(avg)-1)],'('+n1+'×'+m1+'+'+n2+'×'+m2+')/('+n1+'+'+n2+') = '+avg,'combined-mean',level)},
  ()=>{const vals=Array.from({length:4},()=>rnd(2,13)),rem=((5-sum(vals)%5)%5),missing=rem+5,avg=(sum(vals)+missing)/5;
   return make(lang('خمسة قياسات، إحداها غير معروفة.','Five measurements include one unknown value.',l),lang('القيم المعروفة: ','Known values: ',l)+vals.join(', ')+'.\n'+lang('المعدل الكلي: ','Overall mean: ',l)+avg+'.',
    lang('أوجد القيمة المفقودة.','Find the missing value.',l),missing,[missing+1,missing-2,missing+5],avg+'×5 − '+sum(vals)+' = '+missing,'missing-from-mean',level)},
  ()=>{const vals=[2,3,4,5,6],outlier=rnd(25,50),newMean=fmt((20+outlier)/6);
   return make(lang('مجموعة 2، 3، 4، 5، 6 أُضيفت إليها قيمة متطرفة.','An outlier was added to 2, 3, 4, 5, 6.',l),
    lang('القيمة الجديدة: ','New value: ',l)+outlier+'.',lang('ما المعدّل الجديد، إلى منزلتين عشريتين؟','What is the new mean to 2 decimals?',l),newMean,
    [fmt(20/5),fmt((20+outlier)/5),fmt(Number(newMean)+1)],'(20+'+outlier+')/6 = '+newMean,'outlier',level)},
  ()=>make(hIntro,histogram,lang('ما نسبة التكرار التراكمي حتى نهاية المجال ','What percentage is cumulative through ',l)+bins[hidx+1]+lang('؟ إلى منزلتين.','? Round to 2 decimals.',l),
    fmt(sum(hist.slice(0,hidx+2))/sum(hist)*100)+'%',
    [fmt(hsum/sum(hist)*100)+'%',fmt(sum(hist.slice(0,hidx+1))/sum(hist)*100)+'%',fmt(hist[hidx+1]/sum(hist)*100)+'%'],
    sum(hist.slice(0,hidx+2))+'/'+sum(hist)+' ×100','histogram-cumulative',level,'percent'),
  ()=>make(c.intro,pie,lang('ما الفرق المطلق بين زاويتي القطاعين «','What is the absolute difference in angles between ',l)+c.labels[a]+lang('» و«',' and ',l)+c.labels[b]+'»؟',fmt(Math.abs(c.percent[a]-c.percent[b])*3.6)+'°',
    [fmt((c.percent[a]+c.percent[b])*3.6)+'°',fmt(Math.abs(c.percent[a]-c.percent[b]))+'°',fmt(Math.abs(c.percent[a]-c.percent[b])*3.6+18)+'°'],Math.abs(c.percent[a]-c.percent[b])+' ×3.6 = '+fmt(Math.abs(c.percent[a]-c.percent[b])*3.6)+'°','pie-compare',level,'degree'),
  ()=>make(c.intro,table(c.labels,c.counts,c.heading,l,a),lang('التكرار مفقود، لكن التكرار النسبي موجود. كم التكرار الناقص؟','The frequency is missing but its relative percentage is known. Find the count.',l),c.counts[a],
    [c.percent[a],c.total-c.counts[a],c.counts[a]+c.total/20],c.total+' × '+percentage+'/100 = '+c.counts[a],'missing-relative',level),
  ()=>make(d.intro,nt,lang('ما الفرق بين المعدّل الحسابي والوسيط، إلى منزلتين عشريتين؟','What is the absolute difference between mean and median, to 2 decimals?',l),fmt(Math.abs(d.mean-d.median)),
    [fmt(d.mean+d.median),fmt(d.mean),fmt(d.median)],'|'+mean+' − '+d.median+'| = '+fmt(Math.abs(d.mean-d.median)),'mean-vs-median',level)
 ];
 const cases=level==='easy'?easy:level==='medium'?medium:level==='hard'?hard:expert;
 return cases[((serial|0)%cases.length+cases.length)%cases.length]();
}
export {statisticsCompleteQuestion};
