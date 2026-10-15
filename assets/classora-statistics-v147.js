/* Classora v147 — frequency and relative-frequency worksheet questions for Statistics.
 * Pure, stateless generation; shared by generated exams and live competitions.
 * A prompt remains readable even without enhanced table rendering.
 */
const contexts=[
 {ar:"في محل قرطاسية، جرى عدّ أقلام بحسب اللون.",en:"A stationery shop counted pens by color.",headAr:"لون القلم",headEn:"Pen color",arLabels:["أحمر","أزرق","أسود","أخضر","بنفسجي"],enLabels:["Red","Blue","Black","Green","Purple"]},
 {ar:"أُجري استطلاع عن عدد الأفلام التي شاهدها الطلاب في الشهر الماضي.",en:"A survey recorded how many movies students watched last month.",headAr:"عدد الأفلام",headEn:"Movies watched",arLabels:["0","1","2","3","4"],enLabels:["0","1","2","3","4"]},
 {ar:"أُجري استطلاع عن عدد الكتب التي قرأها الطلاب في الشهر الماضي.",en:"A survey recorded how many books students read last month.",headAr:"عدد الكتب",headEn:"Books read",arLabels:["0","1","2","3","4"],enLabels:["0","1","2","3","4"]},
 {ar:"في أحد الصفوف، سألنا الطلاب عن لون حقيبتهم المدرسية.",en:"A class survey recorded school bag colors.",headAr:"لون الحقيبة",headEn:"Bag color",arLabels:["أسود","أزرق","أحمر","أخضر","أبيض"],enLabels:["Black","Blue","Red","Green","White"]},
 {ar:"سألنا مجموعة من الطلاب عن الرياضة المفضّلة لديهم.",en:"Students were surveyed about their favorite sport.",headAr:"الرياضة",headEn:"Sport",arLabels:["كرة قدم","كرة سلة","سباحة","تنس","دراجات"],enLabels:["Football","Basketball","Swimming","Tennis","Cycling"]}
];
const rand=(max)=>Math.floor(Math.random()*max);
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const frac=(a,b)=>{const d=gcd(a,b);return (a/d)+"/"+(b/d)};
const shuffle=(items)=>{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=rand(i+1);[copy[i],copy[j]]=[copy[j],copy[i]]}return copy};
function distinctOptions(correct,extras,kind='number'){
 const opts=[String(correct)];
 for(const item of extras){const v=String(item);if(v&&v!==opts[0]&&!opts.includes(v))opts.push(v);if(opts.length>=4)break}
 for(let n=1;opts.length<4&&n<300;n++){
  const v=kind==='fraction'?frac(n,20):kind==='percent'?((n*5)%105)+"%":String(n);
  if(!opts.includes(v))opts.push(v);
 }
 return shuffle(opts.slice(0,4));
}
function shares(){
 // Five positive frequencies, each a multiple of 5%: easy to simplify into fractions.
 const cuts=shuffle(Array.from({length:19},(_,i)=>i+1)).slice(0,4).sort((a,b)=>a-b);
 return [cuts[0],cuts[1]-cuts[0],cuts[2]-cuts[1],cuts[3]-cuts[2],20-cuts[3]];
}
export function statisticsTableQuestion(topic,difficulty='medium',serial=0,language='ar'){
 const en=language==='en',context=contexts[rand(contexts.length)];
 const labels=en?context.enLabels:context.arLabels,total=[20,40,60,80,100][rand(5)];
 const units=shares(),freq=units.map(u=>u*total/20),pct=units.map(u=>u*5);
 const first=rand(5),second=(first+1+rand(4))%5;
 const easy=[0,1,2,5],medium=[0,1,2,3,4,5,6,7,8],hard=[1,2,3,4,6,7,8];
 const modes=difficulty==='easy'?easy:difficulty==='hard'||difficulty==='expert'?hard:medium;
 const mode=modes[(Math.abs(serial)+rand(modes.length))%modes.length];
 const head=en?context.headEn:context.headAr,rel=en?'Relative frequency':'التكرار النسبي',frequency=en?'Frequency':'التكرار';
 const rows=[[head,frequency,rel]];
 for(let i=0;i<5;i++)rows.push([labels[i],mode===7&&i===first?'?':freq[i],mode===7&&i===first?pct[i]+'%':'?']);
 rows.push([en?'Total':'الإجمالي',mode===0?'?':total,en?'100%':'100%']);
 const table='[[STAT_TABLE]]\n'+rows.map(row=>row.join(' | ')).join('\n')+'\n[[/STAT_TABLE]]';
 const scope=en?context.en:context.ar;
 const statement=(i,p)=>en?('The relative frequency of '+labels[i]+' is '+p+'%.'):('التكرار النسبي لـ«'+labels[i]+'» هو '+p+'%.');
 let ask,answer,distractors=[],explanation,kind='number';
 const sum=freq[first]+freq[second],part=pct[first]+pct[second];
 switch(mode){
  case 0:
   ask=en?'How many observations are there in total?':'كم عدد الأفراد أو الأقلام في الجدول بالإجمال؟';
   answer=String(total);distractors=[total-5,total+5,total-10,total+10,total/2,total+20];
   explanation=en?'Add the frequencies: '+freq.join(' + ')+' = '+total+'.':'نجمع التكرارات: '+freq.join(' + ')+' = '+total+'.';break;
  case 1:
   kind='fraction';
   ask=en?'What is the relative frequency of '+labels[first]+' as a simplified fraction?':'ما التكرار النسبي لـ«'+labels[first]+'» على شكل كسر مبسّط؟';
   answer=frac(freq[first],total);
   distractors=[...freq.filter((_,i)=>i!==first).map(x=>frac(x,total)),frac(total-freq[first],total),frac(freq[first],total+freq[first]),frac(freq[first]+1,total)];
   explanation=en?'Relative frequency = frequency / total = '+freq[first]+'/'+total+' = '+answer+'.':'التكرار النسبي = التكرار ÷ الإجمالي = '+freq[first]+'/'+total+' = '+answer+'.';break;
  case 2:
   kind='percent';
   ask=en?'What percentage does '+labels[first]+' represent?':'كم النسبة المئوية لـ«'+labels[first]+'»؟';
   answer=pct[first]+'%';
   distractors=[...pct.filter((_,i)=>i!==first).map(p=>p+'%'),(100-pct[first])+'%',(pct[first]+5)+'%',Math.max(0,pct[first]-5)+'%'];
   explanation=en?freq[first]+'/'+total+' × 100 = '+answer+'.':freq[first]+'/'+total+' × 100 = '+answer+'.';break;
  case 3:
   ask=en?'How many observations belong to '+labels[first]+' and '+labels[second]+' together?':'كم عدد «'+labels[first]+'» و«'+labels[second]+'» معًا؟';
   answer=String(sum);
   distractors=[freq[first],freq[second],Math.abs(freq[first]-freq[second]),sum+total/20,sum-total/20,total-sum];
   explanation=en?freq[first]+' + '+freq[second]+' = '+sum+'.':freq[first]+' + '+freq[second]+' = '+sum+'.';break;
  case 4:
   kind='percent';
   ask=en?'What percentage do '+labels[first]+' and '+labels[second]+' make together?':'كم النسبة المئوية لـ«'+labels[first]+'» و«'+labels[second]+'» معًا؟';
   answer=part+'%';distractors=[pct[first]+'%',pct[second]+'%',(100-part)+'%',Math.max(0,part-5)+'%',Math.min(100,part+5)+'%'];
   explanation=en?sum+'/'+total+' × 100 = '+answer+'.':sum+'/'+total+' × 100 = '+answer+'.';break;
  case 5:{
   const greatest=rand(2)===0,ordered=freq.map((f,i)=>[f,i]).sort((a,b)=>greatest?b[0]-a[0]:a[0]-b[0]);
   const idx=ordered[0][1],ties=ordered.filter(x=>x[0]===ordered[0][0]).length;
   if(ties>1){ // Avoid ambiguous extrema: ask for the frequency of the chosen category.
    ask=en?'How many observations are recorded for '+labels[first]+'?':'ما تكرار «'+labels[first]+'»؟';
    answer=String(freq[first]);distractors=[...freq.filter((_,i)=>i!==first),freq[first]+total/20,total-freq[first]];
    explanation=en?'Read the frequency column for '+labels[first]+': '+answer+'.':'نقرأ التكرار في سطر «'+labels[first]+'»: '+answer+'.';
   }else{
    kind='label';ask=en?'Which category has the '+(greatest?'highest':'lowest')+' frequency?':'أي فئة تكرارها '+(greatest?'الأكبر':'الأصغر')+'؟';
    answer=labels[idx];distractors=labels.filter((_,i)=>i!==idx);
    explanation=en?labels[idx]+' has frequency '+freq[idx]+'.':'تكرار «'+labels[idx]+'» هو '+freq[idx]+'.';
   }
   break;
  }
  case 6:{
   kind='label';const mistakes=[(pct[first]+5)%105,(pct[first]+10)%105,(pct[first]+15)%105];
   ask=en?'Which of the following statements is correct?':'أيّ عبارة من العبارات التالية صحيحة؟';
   answer=statement(first,pct[first]);distractors=mistakes.map(p=>statement(first,p));
   explanation=en?freq[first]+'/'+total+' × 100 = '+pct[first]+'%.':freq[first]+'/'+total+' × 100 = '+pct[first]+'%.';break;
  }
  case 7:
   ask=en?'The frequency of '+labels[first]+' is missing. Use its percentage and the total to calculate it.':'تكرار «'+labels[first]+'» ناقص من الجدول. احسبه من النسبة المئوية والإجمالي.';
   answer=String(freq[first]);distractors=[freq[first]+total/20,Math.max(0,freq[first]-total/20),total-freq[first],pct[first],freq[second]];
   explanation=en?total+' × '+pct[first]+'/100 = '+freq[first]+'.':total+' × '+pct[first]+'/100 = '+freq[first]+'.';break;
  default:
   kind='fraction';
   ask=en?'What is the simplified relative-frequency fraction for '+labels[first]+' and '+labels[second]+' combined?':'ما التكرار النسبي للفئتين «'+labels[first]+'» و«'+labels[second]+'» معًا، ككسر مبسّط؟';
   answer=frac(sum,total);distractors=[frac(freq[first],total),frac(freq[second],total),frac(total-sum,total),frac(sum,total+sum),frac(Math.max(1,sum-1),total)];
   explanation=en?'('+freq[first]+' + '+freq[second]+') / '+total+' = '+answer+'.':'('+freq[first]+' + '+freq[second]+') / '+total+' = '+answer+'.';break;
 }
 const options=distinctOptions(answer,distractors,kind);
 if(!options.includes(String(answer))||new Set(options).size!==4)throw Error('Invalid statistics choices');
 return {prompt:scope+'\n'+table+'\n'+ask,answer:String(answer),options,explanation,statisticsWorksheet:true,statisticsQuestionType:mode};
}
