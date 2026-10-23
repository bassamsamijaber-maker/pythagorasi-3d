/* Classora v247: deterministic offline math support. No eval. */
const dig={'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9','۰':'0','۱':'1','۲':'2','۳':'3','۴':'4','۵':'5','۶':'6','۷':'7','۸':'8','۹':'9'};
const words={صفر:0,واحد:1,واحده:1,اثنين:2,اثنان:2,اتنين:2,ثلاثه:3,ثلاث:3,اربعه:4,اربع:4,خمسه:5,خمس:5,سته:6,ست:6,سبعه:7,سبع:7,ثمانيه:8,ثمان:8,تسعه:9,تسع:9,عشره:10,عشر:10,عشرين:20,ثلاثين:30,اربعين:40,خمسين:50,ستين:60,سبعين:70,ثمانين:80,تسعين:90,مئه:100};
const norm=s=>String(s||'').toLowerCase().replace(/[إأآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[ً-ٟـ]/g,'');
const fmt=n=>String(Math.abs(n)<1e-10?0:Number(n.toPrecision(11)));
function clean(raw){
 let s=String(raw||'').replace(/²/g,'^2').replace(/³/g,'^3').normalize('NFKC').replace(/[٠-٩۰-۹]/g,c=>dig[c]||c)
 .replace(/[−–—]/g,'-').replace(/[×⋅·]/g,'*').replace(/÷/g,'/').replace(/٫/g,'.')
 .replace(/(\d),(\d{1,2})(?!\d)/g,'$1.$2');
 s=s.replace(/\b(?:multiplied by|multiply|times)\b|ضرب|مضروب في/gi,' * ')
 .replace(/\b(?:divided by|divide)\b|تقسيم|قسمه|قسمة|مقسوم على/gi,' / ')
 .replace(/\bplus\b|زائد|جمع|مجموع/gi,' + ')
 .replace(/\bminus\b|ناقص|اطرح|طرح/gi,' - ')
 .replace(/\bequals\b|\bis equal to\b|يساوي|تساوي/gi,' = ')
 .replace(/\b(?:to the power of|power of)\b|أُس/gi,' ^ ');
 s=s.replace(/[\p{L}]+/gu,w=>Object.prototype.hasOwnProperty.call(words,norm(w))?String(words[norm(w)]):w);
 s=s.replace(/(^|[^\p{L}])س(?=\s*[+\-*/^=()])/gu,'$1x').replace(/(?<=[0-9(])\s*س(?=\s*[+\-*/^=()])/gu,'x');
 return s.replace(/√/g,'sqrt');
}
function candidate(raw){
 const s=clean(raw).replace(/sqrt/gi,'√');
 let items=(s.match(/[0-9xX√.%+\-*/^=()\s]+/g)||[]).map(x=>x.trim()).filter(x=>/\d/.test(x)&&/[+\-*/^=%√]|\bx\b/i.test(x));
 items.sort((a,b)=>b.length-a.length);
 for(let c of items){
  c=c.replace(/^[+*/^=]+/,'').replace(/[+*/^=]+$/,'').trim();
  if(!/\d/.test(c)||!/[+\-*/^=%√]|\bx\b/i.test(c))continue;
  if(/[\+\-*/^]$/.test(c)||/^[*/^=%]/.test(c))continue;
  return c;
 }
 return '';
}
const number=n=>[n,0,0],variable=()=>[0,1,0];
const degree=a=>Math.abs(a[2])>1e-11?2:Math.abs(a[1])>1e-11?1:0;
const finite=n=>{if(!Number.isFinite(n)||Math.abs(n)>1e13)throw Error('range');return n};
const plus=(a,b,sgn=1)=>a.map((x,i)=>finite(x+b[i]*sgn));
function times(a,b){
 let v=[0,0,0,0,0];for(let i=0;i<3;i++)for(let j=0;j<3;j++)v[i+j]+=a[i]*b[j];
 if(Math.abs(v[3])>1e-10||Math.abs(v[4])>1e-10)throw Error('degree');
 return v.slice(0,3).map(finite);
}
function over(a,b){
 if(degree(b))throw Error('divisionVar');
 if(Math.abs(b[0])<1e-12)throw Error('zero');
 return a.map(x=>finite(x/b[0]));
}
function pow(a,b){
 if(degree(b))throw Error('power');
 const p=b[0];
 if(degree(a)===0)return number(finite(Math.pow(a[0],p)));
 if(!Number.isInteger(p)||p<0||p>2)throw Error('degree');
 let out=number(1);for(let i=0;i<p;i++)out=times(out,a);
 return out;
}
function tokenize(src){
 const chunks=src.match(/\s*(?:\d+(?:\.\d+)?|\.\d+|[xX]|sqrt|√|[()+*/^=%-])\s*/gy)||[];
 if(chunks.join('').replace(/\s/g,'')!==src.replace(/\s/g,''))throw Error('syntax');
 let out=[];
 for(const ch of chunks){
  let x=ch.trim();if(!x)continue;if(x==='√')x='sqrt';
  const prev=out.at(-1);
  if(prev&&/^(?:\d+(?:\.\d+)?|\.\d+|[xX]|\)|%)$/.test(prev)&&/^(?:\d+(?:\.\d+)?|\.\d+|[xX]|\(|sqrt)$/.test(x)){
   if(!/^\d/.test(prev)||!/^\d/.test(x))out.push('*');
  }out.push(x);
 }
 if(out.length>120)throw Error('range');
 return out;
}
function parse(src){
 const tokens=tokenize(src);let i=0;
 const next=()=>tokens[i],take=()=>tokens[i++];
 function primary(){
  const t=take();
  if(t==='('){const v=sum();if(take()!==')')throw Error('syntax');return v;}
  if(t==='sqrt'){
   if(take()!=='(')throw Error('syntax');
   const v=sum();if(take()!==')'||degree(v)||v[0]<0)throw Error('root');
   return number(finite(Math.sqrt(v[0])));
  }
  if(t==='x'||t==='X')return variable();
  if(t&&/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(t))return number(finite(Number(t)));
  throw Error('syntax');
 }
 function unary(){if(next()==='+'){take();return unary()}if(next()==='-'){take();return times(number(-1),unary())}return primary()}
 function exponent(){
  let a=unary();if(next()==='^'){take();a=pow(a,exponent())}
  while(next()==='%'){take();a=over(a,number(100))}
  return a;
 }
 function product(){let a=exponent();while(next()==='*'||next()==='/'){const op=take(),b=exponent();a=op==='*'?times(a,b):over(a,b)}return a}
 function sum(){let a=product();while(next()==='+'||next()==='-'){let op=take();a=plus(a,product(),op==='+'?1:-1)}return a}
 const result=sum();if(next()!==undefined)throw Error('syntax');return result;
}
function equation(expr,en){
 const pair=expr.split('=');
 if(pair.length!==2||!pair[0]?.trim()||!pair[1]?.trim())throw Error('syntax');
 const [c,b,a]=plus(parse(pair[0]),parse(pair[1]),-1);
 if(Math.abs(a)<1e-10){
  if(Math.abs(b)<1e-10)return Math.abs(c)<1e-10?(en?'Every real x is a solution.':'كل قيمة حقيقية لـ x تحقق المعادلة.'):(en?'No solution.':'لا يوجد حل.');
  return (en?'Linear equation':'معادلة خطية')+'\n'+expr+'\n'+fmt(b)+'x + ('+fmt(c)+') = 0\nx = '+fmt(finite(-c/b))+(en?'\nCheck by substitution.':'\nنتحقق بالتعويض في الطرفين.');
 }
 const d=finite(b*b-4*a*c);
 const head=(en?'Quadratic equation':'معادلة تربيعية')+'\n'+expr+'\n'+fmt(a)+'x² + ('+fmt(b)+')x + ('+fmt(c)+') = 0\nΔ = '+fmt(d);
 if(d<0)return head+'\n'+(en?'No real roots.':'لا يوجد حل حقيقي لأن المميّز سالب.');
 const x1=finite((-b+Math.sqrt(d))/(2*a));
 if(Math.abs(d)<1e-10)return head+'\nx = '+fmt(x1);
 return head+'\nx₁ = '+fmt(x1)+'\nx₂ = '+fmt(finite((-b-Math.sqrt(d))/(2*a)));
}
export function classoraMathAnswer(raw,language='ar'){
 const en=language==='en',s=candidate(raw);
 if(!s)return null;
 try{
  if(s.includes('='))return equation(s,en);
  const a=parse(s);if(degree(a))return null;
  return (en?'Let’s calculate:':'خلّينا نحسب:')+'\n'+s+' = '+fmt(a[0])+'\n'+(en?'Order: parentheses, powers/roots, multiply/divide, then add/subtract.':'الترتيب: الأقواس، القوى والجذور، الضرب والقسمة، ثم الجمع والطرح.');
 }catch(e){
  const errors={zero:['القسمة على صفر غير معرّفة.','Division by zero is undefined.'],degree:['أقدر أحل المعادلات لحد الدرجة الثانية بمتغيّر واحد.','I can solve one-variable equations up to degree 2.'],divisionVar:['القسمة على مجهول بحاجة لطريقة جبرية أوسع.','Dividing by a variable needs more advanced algebra.'],root:['الجذر المطلوب مش عددًا حقيقيًا مدعومًا هون.','That root is not supported in the real numbers.'],range:['النتيجة كبيرة جدًا أو غير معرّفة.','The result is too large or undefined.']};
  return (en?'I found a math expression, but: ':'عرفت إنها رياضيات، بس: ')+(errors[e.message]||['اكتب المعادلة بوضوح، مثل 2x + 3 = 11.','Write a clearer equation, like 2x + 3 = 11.'])[en?1:0];
 }
}
export function classoraMathTopic(raw){
 const s=norm(raw);const checks=[
 [/فيثاغورس|pythagoras|وتر مثلث/,'نظرية فيثاغورس'],
 [/نظام معادلتين|معادلتين|two equations/,'نظام معادلتين'],
 [/تربيعي|quadratic|x\^2|x²/,'المعادلات التربيعية'],
 [/معادله|معادلات|equation|المجهول/,'المعادلات'],
 [/كسر|كسور|fraction/,'الكسور الجبرية'],
 [/جذر|root|sqrt|√|اسس|قوي|powers/,'القوى والجذور'],
 [/نسبه مئويه|النسب المئويه|percent|%/,'النسب المئوية'],
 [/احتمال|probability/,'الاحتمال'],
 [/احصاء|متوسط|وسيط|منوال|statistics|average/,'الإحصاء'],
 [/محيط|مساحه|مساحات|perimeter|area/,'المحيط والمساحة'],
 [/زاويه|مثلث|angle|triangle/,'المثلثات'],
 [/حجم|مجسم|volume/,'الحجم'],
 [/ضرب|قسمه|قسمة|طرح|زائد|ناقص|جمع|plus|minus|multiply|division/,'ترتيب العمليات الحسابية']
 ];
 for(const [re,t] of checks)if(re.test(s))return t;
 return candidate(raw)?'ترتيب العمليات الحسابية':null;
}
