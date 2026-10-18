/* Original textbook-style exercises. No publisher text or artwork is reproduced. */
const F=x=>String(Number(Number(x).toFixed(4)));
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const eq=s=>'\u2066'+s+'\u2069';
export function worksheetQuestion(d,v,r,level,serial,language,random){
 const T=(a,b)=>language==='ar'?a:b, key=d.key, tier=({easy:0,medium:1,hard:2,expert:3}[level]??1), variant=Math.abs(serial)%3;
 let {a=0,b=0,c=0,h=0,x=0,k=0,p=0,angle=0,beta=0}=v;
 if(key==='powers')a=2+Math.abs(serial)%20;
 const coeff=1+Math.floor(Math.abs(serial)/3)%6;
 let prompt='',answer=typeof r.answer==='number'?F(r.answer):r.answer,wrong=[],explanation=r.steps.join('\n'),figure=null;
 const set=(ar,en,ans,steps,others=[])=>{prompt=T(ar,en);if(ans!==undefined)answer=String(ans);if(steps)explanation=steps;wrong=others.map(String)};
 const calc=s=>T('احسب: ','Evaluate: ')+eq(s);
 const solve=s=>T('حل المعادلة، ثم اختر قيمة x: ','Solve the equation and choose x: ')+eq(s);
 const line=(m,b)=>`${F(m)}x + (${F(b)})`;
 const poly=`${a}x² + (${b})x + (${c})`;
 const graph=(curves,points=[])=>{figure={kind:'graph',curves,points};};
 const shape=(kind,labels)=>{figure={kind,labels,caption:T('رسم توضيحي غير مرسوم بمقياس؛ استعمل المعطيات المكتوبة.','Schematic, not to scale; use the written measurements.')};};
 if(key==='signed'){
  const val=tier<2?a+b:a-b*c;
  set(calc(tier<2?`${a} + (${b})`:`${a} − (${b}) × (${c||2})`),calc(tier<2?`${a} + (${b})`:`${a} − (${b}) × (${c||2})`),F(tier<2?val:a-b*(c||2)),T('نراعي الإشارات؛ نحسب الضرب قبل الجمع والطرح.','Respect signs; multiply before adding or subtracting.')+'\n'+F(tier<2?val:a-b*(c||2)));
 }else if(key==='order'){
  const s=tier===0?`${a} + ${b} × ${c}`:tier===1?`(${a} + ${b}) × ${c}`:tier===2?`${a}² + ${b} × ${c}`:`(${a} + ${b})² − ${c} × ${b}`;
  const val=tier===0?a+b*c:tier===1?(a+b)*c:tier===2?a*a+b*c:(a+b)**2-c*b;
  set(calc(s),calc(s),F(val),T('الأقواس أولًا، ثم القوى، ثم الضرب، وأخيرًا الجمع والطرح.','Parentheses, powers, multiplication, then addition and subtraction.')+'\n'+eq(s+' = '+F(val)));
 }else if(key==='powers'){
  const root=variant===1, val=root?a:a**p;
  const s=root?`${p===2?'√':'∛'}(${a**p})`:`${a}^${p}`;
  set(calc(s),calc(s),F(val),root?`${a}^${p} = ${a**p}`:Array(p).fill(a).join(' × ')+' = '+val);
 }else if(['expressions','variables'].includes(key))set(`إذا كان ${eq('x = '+x)}، احسب ${eq(line(a,b))}.`,`For ${eq('x = '+x)}, evaluate ${eq(line(a,b))}.`);
 else if(key==='terms'){
  const ans=`${a+b}x + (${c})`;
  set('بسّط التعبير بجمع الحدود المتشابهة: '+eq(`${a}x + (${b})x + (${c})`),'Collect like terms: '+eq(`${a}x + (${b})x + (${c})`),ans,`${a} + (${b}) = ${a+b}\n${ans}`,[`${a-b}x + (${c})`,`${a+b+1}x + (${c})`,`${a+b}x + (${c+1})`]);
 }else if(['distribution','common','factor','identity','difference','algebra-fractions'].includes(key)){
  let s,ans,others,why;
  if(key==='distribution'){s=`${a}(x + ${c})`;ans=`${a}x + ${a*c}`;others=[`${a}x + ${c}`,`${a+c}x`,`${a}x + ${a*c+1}`];why=`${a} × x + ${a} × ${c}`;}
  if(key==='common'){s=`${a}x + ${a*c}`;ans=`${a}(x + ${c})`;others=[`${a}(x + ${c+1})`,`${a}(x − ${c})`,`${a+1}(x + ${c})`];why=`${a}x ÷ ${a} = x; ${a*c} ÷ ${a} = ${c}`;}
  if(key==='factor'){const prefix=coeff===1?'':String(coeff);s=`${coeff}x² + ${coeff*(a+b)}x + ${coeff*a*b}`;ans=`${prefix}(x + ${a})(x + ${b})`;others=[`${prefix}(x − ${a})(x − ${b})`,`${prefix}(x + ${a+1})(x + ${b})`,`${prefix}(x + ${a})(x + ${b+1})`];why=`${coeff}[x² + ${a+b}x + ${a*b}]\n${a} + ${b} = ${a+b}; ${a} × ${b} = ${a*b}`;}
  if(key==='identity'){s=`(${coeff}x + ${b})²`;ans=`${coeff*coeff}x² + ${2*coeff*b}x + ${b*b}`;others=[`${coeff*coeff}x² + ${b*b}`,`${coeff*coeff}x² + ${coeff*b}x + ${b*b}`,`${coeff*coeff+1}x² + ${2*coeff*b}x + ${b*b}`];why=`(u+v)² = u² + 2uv + v²; u = ${coeff}x, v = ${b}`;}
  if(key==='difference'){s=`${coeff*coeff}x² − ${a*a}`;ans=`(${coeff}x − ${a})(${coeff}x + ${a})`;others=[`(${coeff}x − ${a})²`,`(${coeff}x + ${a})²`,`(${coeff}x − ${a+1})(${coeff}x + ${a+1})`];why='u² − v² = (u − v)(u + v)';}
  if(key==='algebra-fractions'){s=`((x + ${a})(x + ${b})) / (x + ${a})`;ans=`x + ${b}; x ≠ ${-a}`;others=[`x + ${b}; x ≠ ${-b-1}`,`x + ${a}; x ≠ ${-a-1}`,`x + ${b+1}; x ≠ ${-a}`];why=T('نستبعد صفر المقام الأصلي ثم نختصر العامل المشترك، وليس حدود الجمع.','Exclude the original denominator’s zero, then cancel the common factor, not additive terms.');}
  set((['common','factor','difference'].includes(key)?'حلّل إلى عوامل: ':key==='algebra-fractions'?'بسّط وحدّد القيمة الممنوعة: ':'انشر وبسّط: ')+eq(s),(['common','factor','difference'].includes(key)?'Factor: ':key==='algebra-fractions'?'Simplify and state the excluded value: ':'Expand and simplify: ')+eq(s),ans,why+'\n'+ans,others);
 }else if(['linear','multi','brackets','fractions','both'].includes(key)){
  // Construct from an exact solution. Complexity changes operations, not merely the label.
  const sol=(Math.abs(serial)%17)- (tier===0?0:8), m=Math.abs(a)||2, n=Math.abs(b)+1, z=tier+2;
  let s,steps;
  if(key==='brackets'){s=tier<2?`${m}(x + ${n}) = ${m*(sol+n)}`:`${m}(x + ${n}) − ${z}(x − ${n}) = ${(m-z)*sol+(m+z)*n}`;if(m===z&&tier>=2){s=`${m+1}(x + ${n}) − ${z}(x − ${n}) = ${(m+1-z)*sol+(m+1+z)*n}`;} }
  else if(key==='fractions')s=tier<2?`x/${m} + ${n} = ${F(sol/m+n)}`:`(x + ${n})/${m} = (${z*sol+z*n})/${m*z}`;
  else if(key==='both')s=`${m+z}x + ${n} = ${z}x + ${m*sol+n}`;
  else if(key==='multi')s=tier<2?`${m}x + ${n} + ${z}x = ${(m+z)*sol+n}`:`${m}(x + ${n}) + ${z}x = ${(m+z)*sol+m*n}`;
  else s=tier<2?`${m}x + ${n} = ${m*sol+n}`:`${m+z}x + ${n} = ${z}x + ${m*sol+n}`;
  // Fractional easy equations use a divisible numerator to avoid rounded input.
  if(key==='fractions'&&tier<2)s=`x/${m} + ${n} = ${sol+n}`;
  const result=key==='fractions'&&tier<2?sol*m:sol;
  steps=T('نفك الأقواس أو نزيل المقامات عند وجودها، ثم نجمع الحدود المتشابهة. ننقل حدود x لطرف والثوابت للطرف الآخر، ونقسم على معامل x.','Expand or clear denominators, combine like terms, collect x terms on one side and constants on the other, then divide by the coefficient.');
  let reduced;
  if(key==='fractions')reduced=tier<2?`x/${m} = ${sol}\nx = ${sol} × ${m}`:`x + ${n} = ${sol+n}\nx = ${sol+n} − ${n}`;
  else if(key==='brackets'){const coef=tier<2?m:(m===z?m+1:m)-z;reduced=`${coef}x = ${coef*sol}\nx = ${coef*sol}/${coef}`;}
  else {const coef=key==='multi'?m+z:m;reduced=`${coef}x = ${coef*sol}\nx = ${coef*sol}/${coef}`;}
  set(solve(s),solve(s),'x = '+F(result),steps+'\n'+s+'\n'+reduced+'\nx = '+F(result),[result+1,result-1,-result,result+2].map(v=>'x = '+F(v)));
 }else if(key==='inequality')set('حل المتباينة: '+eq(r.original),'Solve the inequality: '+eq(r.original),r.formula,explanation,[`x ${a>0?'>':'<'} ${F(r.answer)}`,`x < ${F(r.answer+1)}`,`x > ${F(r.answer-1)}`]);
 else if(key==='word')set(`اشترى طالب ${a} دفاتر بالسعر نفسه، ودفع ${b} شيكل رسم توصيل. المجموع ${c} شيكل. ما ثمن الدفتر بالشيكل؟`,`A student buys ${a} equally priced notebooks and pays a ${b}-shekel delivery fee. The total is ${c} shekels. Find the price of one notebook in shekels.`,answer,T('نرمز لثمن الدفتر بـ x، فنكتب:','Let x be the price of one notebook:')+'\n'+r.steps.join('\n'));
 else if(key==='ratio')set(`نسبة الأحمر إلى الأزرق ${eq(a+':'+b)}. استُعمل ${b*k} لترًا من الأزرق. كم لترًا من الأحمر نحتاج؟`,`The ratio of red to blue is ${eq(a+':'+b)}. There are ${b*k} liters of blue. How many liters of red are needed?`);
 else if(key==='percent'){
  const discount=tier>=2,ans=discount?a*(1-p/100):a*p/100;
  set(discount?`ثمن حقيبة ${a} شيكل. خُفّض سعرها بنسبة ${p}%. احسب السعر بعد التخفيض.`:`في مدرسة ${a} طالبًا، ${p}% منهم يشاركون في نشاط. احسب عدد المشاركين.`,discount?`A bag costs ${a} shekels. Its price is reduced by ${p}%. Find the sale price.`:`Find ${p}% of ${a}.`,F(ans),`${a} × ${p}/100 = ${F(a*p/100)}`+(discount?`\n${a} − ${F(a*p/100)} = ${F(ans)}`:''));
  // Use a continuous quantity when the computed part is not an integer.
  if(!discount)prompt=T(`خزان سعته ${a} لترًا، امتلأ بنسبة ${p}%. كم لترًا فيه؟`,`A ${a}-liter tank is ${p}% full. How many liters does it contain?`);
 }else if(key==='motion')set(`يتحرك جسم بسرعة ثابتة ${v.v} م/ث لمدة ${v.t} ثانية. احسب المسافة بالمتر.`,`An object travels at ${v.v} m/s for ${v.t} seconds. Find its distance in meters.`);
 else if(key==='coordinates'){graph([],[[x,v.y,'P']]);set('اقرأ الرسم وحدّد الزوج المرتب للنقطة P.','Read the graph and identify the ordered pair P.',`(${x}, ${v.y})`,T('نقرأ x أفقيًا ثم y رأسيًا.','Read horizontal x, then vertical y.')+`\nP = (${x}, ${v.y})`,[`(${x+1}, ${v.y})`,`(${x}, ${v.y+1})`,`(${x-1}, ${v.y-1})`]);}
 else if(['function-intro','read-graphs','line','intercepts'].includes(key)){
  graph([[0,a,b]]);
  if(key==='intercepts'){const useX=tier>=2&&a!==0;set(`للمستقيم ${eq('y = '+line(a,b))}، ما إحداثي ${useX?'x عند تقاطعه مع محور x':'y عند تقاطعه مع محور y'}؟`,`For ${eq('y = '+line(a,b))}, find the ${useX?'x-intercept':'y-intercept'}.`,F(useX?-b/a:b),useX?`y = 0 → ${a}x = ${-b} → x = ${F(-b/a)}`:`x = 0 → y = ${b}`);}
  else set(`يمثل الرسم الدالة ${eq('f(x) = '+line(a,b))}. أوجد ${eq('f('+x+')')}.`,`The graph represents ${eq('f(x) = '+line(a,b))}. Find ${eq('f('+x+')')}.`);
 }else if(['slope','distance','midpoint','coord-geometry'].includes(key)){
  graph([],[[v.x1,v.y1,'A'],[v.x2,v.y2,'B']]);
  const giv=`A(${v.x1}, ${v.y1}), B(${v.x2}, ${v.y2})`;
  if(key==='midpoint')set(`النقطتان ${eq(giv)} طرفا قطعة. أوجد إحداثيي منتصفها.`,`Find the midpoint of the segment with endpoints ${eq(giv)}.`,`(${F(r.mid[0])}, ${F(r.mid[1])})`,explanation,[`(${F(r.mid[0]+1)}, ${F(r.mid[1])})`,`(${F(r.mid[0])}, ${F(r.mid[1]+1)})`,`(${F(r.mid[0]-1)}, ${F(r.mid[1]-1)})`]);
  else set(`النقطتان ${eq(giv)}. احسب ${key==='slope'?'ميل المستقيم المار بهما':'المسافة بينهما'}.`,`Given ${eq(giv)}, find ${key==='slope'?'the slope of their line':'the distance between them'}.`);
 }else if(key==='system'){graph([[0,a,b],[0,c,v.d]]);const [sx,sy]=r.solution;set(`حل نظام المعادلتين وحدّد نقطة التقاطع: ${eq('y = '+line(a,b))}، ${eq('y = '+line(c,v.d))}.`,`Solve the system and identify its intersection: ${eq('y = '+line(a,b))}; ${eq('y = '+line(c,v.d))}.`,`(${F(sx)}, ${F(sy)})`,explanation,[`(${F(sx+1)}, ${F(sy)})`,`(${F(sx)}, ${F(sy+1)})`,`(${F(sx-1)}, ${F(sy-1)})`]);}
 else if(['quadratic-eq','quadratic','parabola','vertex','symmetry','zeros','sign','increase'].includes(key)){
  graph([[a,b,c]]);
  if(['zeros','quadratic-eq'].includes(key)){
   const ans=r.roots.length?r.roots.map(z=>'x = '+F(z)).join(' ; '):T('لا توجد حلول حقيقية','No real solutions');
   set(`${key==='zeros'?'أوجد نقاط الصفر للدالة':'حل المعادلة'} ${eq(poly+' = 0')}.`,`${key==='zeros'?'Find the zeros':'Solve'}: ${eq(poly+' = 0')}.`,ans,explanation,[`x = ${F(r.vertex[0]+1)}`,`x = ${F(r.vertex[0]-1)}`,`x = ${F(r.vertex[0]+2)}`]);
  }else if(key==='vertex'){const [vx,vy]=r.vertex;set('أوجد إحداثيي رأس القطع المكافئ '+eq('y = '+poly)+'.','Find the vertex of '+eq('y = '+poly)+'.',`(${F(vx)}, ${F(vy)})`,explanation,[`(${F(vx+1)}, ${F(vy)})`,`(${F(vx)}, ${F(vy+1)})`,`(${F(vx-1)}, ${F(vy-1)})`]);}
  else if(key==='symmetry')set('اكتب معادلة محور تماثل الدالة '+eq('y = '+poly)+'.','Find the axis of symmetry of '+eq('y = '+poly)+'.','x = '+F(r.vertex[0]),explanation,[1,-1,2].map(z=>'x = '+F(r.vertex[0]+z)));
  else if(key==='increase'){
   const vx=F(r.vertex[0]), inc=variant!==0, direction=(a>0)===inc?'>':'<',ans=`x ${direction} ${vx}`;
   set(`للدالة ${eq('y = '+poly)}، حدّد مجال ${inc?'التزايد':'التناقص'} المفتوح.`,`For ${eq('y = '+poly)}, identify its open ${inc?'increasing':'decreasing'} interval.`,ans,explanation+'\n'+r.direction,[`x ${direction==='>'?'<':'>'} ${vx}`,`x > ${F(r.vertex[0]+1)}`,`x < ${F(r.vertex[0]-1)}`]);
  }else if(key==='sign')set(`للدالة ${eq('f(x) = '+poly)}، ما إشارة ${eq('f('+x+')')}؟`,`For ${eq('f(x) = '+poly)}, what is the sign of ${eq('f('+x+')')}?`,answer,explanation,r.choices);
  else set(`للدالة ${eq('f(x) = '+poly)}، احسب ${eq('f('+x+')')}.`,`For ${eq('f(x) = '+poly)}, calculate ${eq('f('+x+')')}.`);
 }else if(key==='angle'||key==='parallel'){
  shape(key,[angle+'°','x°']);
  set(key==='angle'?`زاويتان متجاورتان على مستقيم، إحداهما ${angle}°. أوجد x.`:`مستقيمان متوازيان يقطعهما قاطع. زاويتان داخليتان من الجهة نفسها قياسهما ${angle}° وx°. أوجد x.`,key==='angle'?`Two adjacent angles form a straight line. One is ${angle}°. Find x.`:`A transversal crosses two parallel lines. Same-side interior angles measure ${angle}° and x°. Find x.`, 'x = '+(180-angle),`${angle} + x = 180\nx = 180 − ${angle} = ${180-angle}`,[angle,180-angle+5,180-angle-5].map(z=>'x = '+z));
 }else if(key==='triangle'){shape('triangle',[angle+'°',beta+'°','x°']);set(`في المثلث ABC: الزاوية A تساوي ${angle}° والزاوية B تساوي ${beta}°. أوجد الزاوية C = x.`,`In triangle ABC, angle A = ${angle}° and B = ${beta}°. Find C = x.`, 'x = '+answer,explanation,[+answer+5,+answer-5,angle+beta].map(z=>'x = '+z));}
 else if(key==='isosceles'){
  const apex=15+(Math.abs(serial)%50)*3,base=(180-apex)/2;shape('isosceles',[apex+'°','x°','x°']);set(`في المثلث ABC، الساقان AB وAC متساويان وزاوية الرأس A تساوي ${apex}°. أوجد زاوية القاعدة B = x.`,`In triangle ABC, AB = AC and apex angle A = ${apex}°. Find base angle B = x.`,F(base),`B = C\nB + C = 180 − ${apex}\nx = ${180-apex}/2 = ${base}`,[apex,180-apex,base+5]);
 }else if(key==='congruence'){
  const side=3+Math.abs(serial)%40;shape('pair',[side+' cm','x cm']);set(`المثلثان ABC وDEF متطابقان بالترتيب. طول AB يساوي ${side} سم. أوجد طول DE = x بالسم.`,`Triangles ABC and DEF are congruent in that order. AB = ${side} cm. Find DE = x in cm.`,String(side),T('حسب ترتيب التطابق: A ↔ D، B ↔ E، C ↔ F. الأضلاع المتناظرة متساوية، إذًا DE = AB.','The order gives A ↔ D, B ↔ E, C ↔ F. Corresponding sides are equal, so DE = AB.')+'\nx = '+side);
 }else if(key==='similarity'){
  shape('pair',[a+' cm',F(a*k)+' cm']);
  const area=tier>=2,ans=area?a*h/2*k*k:h*k;
  set(`المثلثان ABC وDEF متشابهان بالترتيب. AB = ${a} سم وDE = ${F(a*k)} سم. ${area?`مساحة ABC تساوي ${F(a*h/2)} سم². أوجد مساحة DEF بالسم².`:`BC = ${h} سم. أوجد EF بالسم.`}`,`Triangles ABC and DEF are similar in that order. AB = ${a} cm and DE = ${F(a*k)} cm. ${area?`The area of ABC is ${F(a*h/2)} cm². Find the area of DEF in cm².`:`BC = ${h} cm. Find EF in cm.`}`,F(ans),`k = ${F(a*k)}/${a} = ${k}\n`+(area?`A₂ = ${F(a*h/2)} × ${k}² = ${F(ans)}`:`EF = ${h} × ${k} = ${F(ans)}`));
 }else if(key==='pythagoras'){
  shape('right',[a+' cm',b+' cm','x cm']);set(`مثلث قائم الزاوية، طولا ضلعيه القائمين ${a} سم و${b} سم. أوجد طول الوتر x بالسم.`,`A right triangle has legs ${a} cm and ${b} cm. Find the hypotenuse x in cm.`);
 }else if(['area','solid','volume','area-volume','quadri','scale'].includes(key)){
  if(key==='scale'){shape('segment',[a+' cm']);set(`مقياس الرسم ${eq('1:'+k)}. طول قطعة على الرسم ${a} سم. احسب طولها الحقيقي بالمتر.`,`The scale is ${eq('1:'+k)}. A segment measures ${a} cm on the drawing. Find its real length in meters.`);}
  else if(key==='quadri'){shape('quadri',[a+' cm',h+' cm']);set(`متوازي أضلاع قاعدته ${a} سم وارتفاعه العمودي ${h} سم. احسب مساحته بالسم².`,`A parallelogram has base ${a} cm and perpendicular height ${h} cm. Find its area in cm².`);}
  else if(key==='area'){shape('rectangle',[a+' cm',b+' cm']);const per=variant===1;set(`مستطيل طوله ${a} سم وعرضه ${b} سم. احسب ${per?'محيطه بالسم':'مساحته بالسم²'}.`,`A rectangle is ${a} cm long and ${b} cm wide. Find its ${per?'perimeter in cm':'area in cm²'}.`,F(per?2*(a+b):a*b),per?`P = 2(${a}+${b}) = ${2*(a+b)}`:`A = ${a} × ${b} = ${a*b}`);}
  else {shape('cuboid',[a+' cm',b+' cm',h+' cm']);const surface=key==='solid'||key==='area-volume'&&variant===1;set(`متوازي مستطيلات أبعاده ${a} سم، ${b} سم، ${h} سم. احسب ${surface?'مساحة سطحه بالسم²':'حجمه بالسم³'}.`,`A cuboid measures ${a} cm by ${b} cm by ${h} cm. Find its ${surface?'surface area in cm²':'volume in cm³'}.`,F(surface?2*(a*b+a*h+b*h):a*b*h));}
 }else if(key==='probability')set(`كيس فيه ${a} كرات زرقاء و${b} كرات حمراء متماثلة الحجم. نسحب كرة عشوائيًا. ما احتمال أن تكون زرقاء؟`,`A bag contains ${a} blue and ${b} red equally sized balls. One is chosen at random. What is the probability it is blue?`);
 else if(key==='stats')set(`علامات أربعة طلاب هي ${eq([a,b,c,v.d].join(', '))}. احسب المتوسط الحسابي.`,`Four scores are ${eq([a,b,c,v.d].join(', '))}. Find their arithmetic mean.`);
 else if(['trig','sin','cos','tan'].includes(key)){
  const fn=key==='trig'?'sin':key;shape('right',[F(r.adjacent)+' cm',F(r.opposite)+' cm',a+' cm']);set(`في مثلث قائم، الزاوية θ = ${angle}°. احسب ${eq(fn+'('+angle+'°)')} باستعمال الآلة الحاسبة بوضع الدرجات.`,`In a right triangle, θ = ${angle}°. Calculate ${eq(fn+'('+angle+'°)')} using degree mode.`);
 }else throw Error('Missing worksheet for '+key);
 if(!prompt)throw Error('Empty worksheet '+key);
 if(figure)prompt+='\n[[MATH_FIGURE]]\n'+JSON.stringify(figure)+'\n[[/MATH_FIGURE]]';
 const options=[String(answer)];
 for(const item of wrong)if(!options.includes(item))options.push(item);
 if(options.length<4&&Number.isFinite(Number(answer))){for(const delta of [1,-1,2,-2,3]){const s=F(Number(answer)+delta);if(!options.includes(s))options.push(s);if(options.length>=4)break;}}
 if(options.length<3)throw Error('Insufficient choices '+key);
 const selected=options.slice(0,4);for(let i=selected.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[selected[i],selected[j]]=[selected[j],selected[i]];}
 if(String(answer).includes('.')||wrong.some(s=>s.includes('.')))prompt+='\n'+T('عند الحاجة، قرّب إلى 4 منازل عشرية.','When necessary, round to 4 decimal places.');
 return {prompt,answer:String(answer),options:selected,explanation, sample:v,worksheet:true,skillKey:key,difficulty:level};
}

// Only structured coordinates and escaped labels are accepted; raw HTML is never rendered.
let figureSequence=0;
export function renderMathFigure(raw){
 let d;try{d=JSON.parse(raw)}catch{return ''}if(!d||typeof d!=='object')return '';
 let body='';
 const text=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#17324d" font-size="15" font-family="Arial,sans-serif">${E(s)}</text>`;
 const path=(points,color='#2463a6',dash=false)=>`<polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="2.5" ${dash?'stroke-dasharray="5 4"':''}/>`;
 const L=Array.isArray(d.labels)?d.labels.slice(0,6).map(String):[];
 if(d.kind==='graph'){
  const curves=(Array.isArray(d.curves)?d.curves:[]).slice(0,2).filter(c=>Array.isArray(c)&&c.length===3&&c.every(Number.isFinite));
  const pts=(Array.isArray(d.points)?d.points:[]).slice(0,5).filter(p=>Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1]));
  let extent=6;for(const p of pts)extent=Math.max(extent,Math.abs(p[0])+1,Math.abs(p[1])+1);
  extent=Math.min(1000,Math.ceil(extent));const step=Math.max(1,Math.ceil(extent/6));extent=step*6;
  const X=x=>210+x*24/step,Y=y=>180-y*24/step;
  for(let i=-6;i<=6;i++){body+=path([[66,180+i*24],[354,180+i*24]],'#dde5ed')+path([[210+i*24,36],[210+i*24,324]],'#dde5ed');if(i)body+=text(X(i*step),Y(0)+18,i*step)+text(X(0)-18,Y(i*step)+5,i*step);}
  body+=path([[60,180],[365,180]],'#334e68')+path([[210,330],[210,28]],'#334e68')+text(377,184,'x')+text(210,18,'y')+text(198,197,'0');
  const curveBody=curves.map((c,i)=>{const points=[];for(let j=0;j<=240;j++){const x=-extent+2*extent*j/240,y=c[0]*x*x+c[1]*x+c[2];points.push([X(x),Y(y)]);}return path(points,i?'#bb3d6a':'#2463a6');}).join('');
  // A per-render ID keeps the clip independent across questions.
  const clipId="ca-math-clip-"+(++figureSequence);
  body+=`<defs><clipPath id="${clipId}"><rect x="66" y="36" width="288" height="288"/></clipPath></defs><g clip-path="url(#${clipId})">${curveBody}</g>`;
  if(pts.length===2)body+=path(pts.map(p=>[X(p[0]),Y(p[1])]),'#bb3d6a');
  for(const p of pts)body+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4" fill="#bb3d6a"/>`+text(X(p[0])+12,Y(p[1])-10,p[2]||'P');
 }else if(['triangle','isosceles','pair','right'].includes(d.kind)){
  if(d.kind==='pair'){
   body+=path([[40,260],[100,90],[170,260],[40,260]])+path([[235,260],[290,90],[375,260],[235,260]]);
   for(const [x,y,s] of [[88,75,'A'],[29,280,'B'],[180,280,'C'],[290,75,'D'],[225,280,'E'],[385,280,'F'],[48,166,L[0]],[245,166,L[1]]])body+=text(x,y,s||'');
  }else if(d.kind==='right'){
   body+=path([[75,270],[335,270],[75,70],[75,270]])+path([[75,250],[95,250],[95,270]]);
   body+=text(205,295,L[0]||'')+text(42,165,L[1]||'')+text(228,158,L[2]||'');
  }else{
   body+=path([[210,65],[70,280],[350,280],[210,65]]);
   const labels=d.kind==='isosceles'?L:[L[2],L[0],L[1]];
   for(const [x,y,s] of [[210,45,d.kind==='isosceles'?'A':'C'],[55,300,d.kind==='isosceles'?'B':'A'],[365,300,d.kind==='isosceles'?'C':'B'],[210,110,labels[0]],[110,260,labels[1]],[310,260,labels[2]]])body+=text(x,y,s||'');
   if(d.kind==='isosceles')body+=path([[130,165],[150,178]])+path([[270,178],[290,165]]);
  }
 }else if(d.kind==='rectangle'||d.kind==='cuboid'){
  body+=path([[85,120],[320,120],[320,275],[85,275],[85,120]])+text(205,300,L[0]||'')+text(345,210,L[d.kind==='cuboid'?2:1]||'');
  if(d.kind==='cuboid')body+=path([[85,120],[135,70],[370,70],[320,120]])+path([[370,70],[370,225],[320,275]])+text(355,95,L[1]||'');
 }else if(d.kind==='quadri'){
  body+=path([[75,270],[305,270],[350,100],[120,100],[75,270]])+path([[120,100],[120,270]],'#bb3d6a',true)+path([[120,250],[140,250],[140,270]])+text(210,295,L[0]||'')+text(150,185,L[1]||'');
 }else if(d.kind==='angle'){
  body+=path([[55,260],[365,260]])+path([[210,260],[140,80]])+text(160,235,L[0]||'')+text(255,220,L[1]||'');
 }else if(d.kind==='parallel'){
  body+=path([[45,115],[375,115]])+path([[45,260],[375,260]])+path([[105,310],[295,65]])+text(270,155,L[0]||'')+text(195,240,L[1]||'')+text(62,100,'ℓ₁')+text(62,245,'ℓ₂');
 }else if(d.kind==='segment'){body+=path([[65,180],[350,180]])+text(210,160,L[0]||'');}
 else return '';
 return `<figure class="ca-math-figure" style="margin:12px auto;max-width:420px;width:100%;background:#fff;border:1px solid #b9cbdc;border-radius:12px;overflow:hidden;color:#17324d;direction:ltr"><svg viewBox="0 0 420 350" style="display:block;width:100%;height:auto" role="img" aria-label="${E(d.caption||'Coordinate graph: x horizontal, y vertical')}" xmlns="http://www.w3.org/2000/svg">${body}</svg>${d.caption?`<figcaption dir="auto" style="font-size:12px;padding:6px 12px;text-align:center">${E(d.caption)}</figcaption>`:''}</figure>`;
}
export function formatMathPrompt(value){
 const source=String(value??'');let out='',cursor=0,m;const pattern=/\[\[MATH_FIGURE\]\]\s*\n([^\n]+)\n\[\[\/MATH_FIGURE\]\]/g;
 const prose=s=>`<span dir="auto" style="white-space:pre-line">${E(s)}</span>`;
 while((m=pattern.exec(source))){out+=prose(source.slice(cursor,m.index))+renderMathFigure(m[1]);cursor=pattern.lastIndex;}
 return out+prose(source.slice(cursor));
}
