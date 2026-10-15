/* Classora: construct harder assessment questions only from checked, topic-specific source items.
   No filler, no remote AI and no mixing content from unrelated lessons. */
const unique=items=>[...new Set(items.map(x=>String(x)))];
const valid=q=>q&&typeof q.prompt==='string'&&q.prompt.trim().length>=12&&Array.isArray(q.options)&&q.options.length>=3&&q.options.includes(q.answer)&&new Set(q.options).size===q.options.length;
const rotate=(arr,n)=>arr.slice(n%arr.length).concat(arr.slice(0,n%arr.length));
const wrong=q=>q.options.find(x=>x!==q.answer);
const text=(ar,en,lang)=>lang==='ar'?ar:en;
export function combineTopicQuestions(bank,level='medium',language='ar',count=10){
 const max=Math.min(30,Math.max(1,Math.floor(Number(count)||10)));
 const base=bank.filter(valid);
 if(!base.length)return [];
 const mode=['easy','medium','hard','expert'].includes(level)?level:'medium';
 if(mode==='easy'||mode==='medium'){
  return base.slice(0,max).map((q,i)=>({
   ...q,options:mode==='easy'&&q.options.length>3?q.options.filter(x=>x===q.answer).concat(q.options.filter(x=>x!==q.answer).slice(0,2)):q.options.slice(),
   difficulty:mode,
   prompt:q.prompt,
   explanation:q.explanation||''
  }));
 }
 const size=mode==='expert'?3:2;
 if(base.length<size)return [];
 const result=[];
 const seen=new Set();
 // Ordered combinations rotate which concepts are combined, without inventing any facts.
 for(let i=0;i<base.length&&result.length<max;i++){
  for(let step=1;step<base.length&&result.length<max;step++){
   const indices=[i,(i+step)%base.length];
   if(size===3)indices.push((i+step+1)%base.length);
   if(new Set(indices).size!==size)continue;
   const key=indices.join('-');if(seen.has(key))continue;seen.add(key);
   const chosen=indices.map(j=>base[j]);
   const answers=chosen.map(q=>q.answer);
   const correct=answers.join('  |  ');
   const options=[correct];
   for(let k=0;k<3;k++){
    const candidate=[...answers];
    const target=k%size;
    candidate[target]=wrong(chosen[target]);
    options.push(candidate.join('  |  '));
   }
   if(unique(options).length!==4)continue;
   const lead=mode==='expert'?text('تحدّي خبير: اختر الإجابات الصحيحة للأسئلة الثلاثة بنفس الترتيب.','Expert challenge: choose the three correct answers in order.',language):
    text('اختر الإجابتين الصحيحتين بالترتيب.','Choose the two correct answers in order.',language);
   const prompt=lead+'\n'+chosen.map((q,j)=>(j+1)+') '+q.prompt).join('\n');
   const explanation=chosen.map((q,j)=>(j+1)+') '+(q.explanation||q.answer)).join(' · ');
   const rotation=(i*3+step)%4;
   result.push({prompt,options:rotate(options,rotation),answer:correct,explanation,difficulty:mode});
  }
 }
 return result;
}
