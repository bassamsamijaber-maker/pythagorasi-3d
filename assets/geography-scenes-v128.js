import {escapeMath as E} from './math-scenes-v119.js?v=119';
const palette=['#65e1b7','#73bfff','#f6b96e','#b89bf8'];
const text=(x,y,s,size=17)=>`<text x="${x}" y="${y}" fill="#e6f1f6" font-size="${size}" text-anchor="middle">${E(s)}</text>`;
const line=(x,y,a,b,color='#73bfff',w=4)=>`<path d="M${x} ${y}L${a} ${b}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
const circle=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const rect=(x,y,w,h,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}"/>`;
const cube=(x,y,w,h,c)=>`<path d="M${x} ${y}l${w} -${w*.35}v${-h}l-${w} ${w*.35}Z" fill="${c}"/><path d="M${x+w} ${y-w*.35}l${w*.45} ${w*.3}v-${h}l-${w*.45} -${w*.3}Z" fill="${c}" opacity=".65"/><path d="M${x} ${y-h}l${w} -${w*.35}l${w*.45} ${w*.3}l-${w} ${w*.35}Z" fill="${c}" opacity=".85"/>`;
const arrow=(x,y,a,b)=>line(x,y,a,b)+'<path d="M'+(a-7)+' '+(b-8)+'L'+a+' '+b+'L'+(a+7)+' '+(b-8)+'" fill="none" stroke="#73bfff" stroke-width="3"/>';
const num=n=>String(Math.round(n*10)/10);
export const GEO_CONTROLS={
 impact:['المساحة المعبّدة %','Paved land %'],population:['الولادات في السنة','Births during the year'],density:['السكان بالمئات','Population in hundreds'],migration:['عدد المغادرين','Departures'],settlement:['حجم التجمع','Settlement size'],sectors:['حصة الصناعة %','Industry share %'],trade:['تقدم الشحنة %','Shipment progress %'],resources:['الاستهلاك %','Consumption %'],pollution:['تقليل الملوث عند المصدر %','Pollution reduction at source %'],sustainability:['حصة المساحات الخضراء %','Green-space share %'],orbit:['موضع الأرض في المدار %','Orbital progress %'],layers:['فصل الطبقات','Separate the layers'],plates:['الحركة النسبية','Relative motion'],seismic:['انتشار الموجة','Wave propagation'],volcano:['صعود الصهارة %','Magma ascent %'],rockcycle:['تقدم التحول %','Transformation progress %'],crystal:['حجم الشبكة البلورية','Crystal lattice size'],weathering:['تقدم تفتيت الصخر','Rock breakdown'],erosion:['المسافة المنقولة','Transport distance'],atmosphere:['الارتفاع في النموذج','Model altitude'],weather:['درجة الحرارة + 20','Temperature + 20'],climate:['شهر السنة','Month of year'],zones:['دائرة العرض','Latitude'],watercycle:['تقدم مرحلة الدورة','Cycle-stage progress'],energy:['الطاقة المفيدة %','Useful energy %'],renewables:['شدة المصدر النسبية %','Relative source strength %'],fossil:['النسبة المستخرجة %','Extracted share %'],greenhouse:['الاحتباس النسبي في الرسم','Relative heat retention in the diagram'],region:['موضع على المسار الساحلي','Position on the coastal route'],coordinates:['دائرة العرض','Latitude'],terrain:['ارتفاع التضاريس النسبي','Relative landform height'],water:['الطلب على الماء','Water demand'],city:['حصة السكان الحضريين %','Urban population share %'],industry:['عدد وحدات المدخلات','Input units'],farming:['كمية الري النسبية','Relative irrigation'],transport:['السرعة كم/ساعة','Speed in km/h'],maps:['إزاحة الطبقات','Separate map layers'],growth:['معدل النمو: القيمة ÷ 10','Growth rate: value ÷ 10'],development:['الوصول إلى الخدمات %','Access to services %'],risk:['عدد المباني في منطقة الفيضان','Buildings in the flood zone']};
export function geographyScene(model,value=45,phase=0,language='ar'){
 const en=language==='en',T=(a,b)=>en?b:a,v=Math.max(0,Math.min(100,Number(value)||0)),p=((phase%3)+3)%3;
 let art='',result='',note=T('رسم تعليمي مبسّط؛ القيم أمثلة وليست إحصاءات حقيقية.','Simplified learning model; values are examples, not real-world statistics.');
 const base=`<ellipse cx="350" cy="299" rx="270" ry="39" fill="#071824"/><path d="M70 255L330 167 638 253 376 335Z" fill="#204650" stroke="#396671"/>`;
 if(['impact','settlement','city','sustainability','density'].includes(model)){
  art=base;const count=model==='density'?Math.max(1,Math.round(v/4)):model==='settlement'?Math.max(1,Math.round(v/5)):20;
  for(let i=0;i<25;i++){const x=125+(i%5)*80+(Math.floor(i/5))*15,y=205+Math.floor(i/5)*21;const built=model==='impact'?i<v/4:model==='sustainability'?i>v/4:i<count;art+=built?cube(x,y,24,15+(i%4)*16,'#73bfff'):circle(x+15,y-10,12,'#65e1b7')}
  if(model==='density')result=`${v*100} ÷ 10 = ${v*10} `+T('نسمة/كم²','people/km²');
  else if(model==='city')result=`${v}% `+T('حضريون','urban')+` · ${100-v}% `+T('ريفيون','rural');
  else result=num(v)+'% · '+T(...GEO_CONTROLS[model]);
  if(model==='city'){art+=rect(130,305,v*4,12,'#73bfff')+rect(130+v*4,305,(100-v)*4,12,'#65e1b7')}
 }else if(model==='population'||model==='growth'){
  const total=model==='population'?1000+v-20+5:Math.round(1000*Math.pow(1+v/1000,p+1));
  art=cube(130,285,100,100,'#73bfff')+cube(425,285,100,total/10,'#65e1b7')+arrow(285,185,395,185)+text(180,315,'1000')+text(490,315,String(total));
  result=model==='population'?`1000 + ${v} − 20 + 5 = ${total}`:`1000 × (1 + ${num(v/10)}%)^${p+1} ≈ ${total}`;
  note=model==='population'?T('الأساس 1000؛ الوفيات 20؛ صافي الهجرة +5. بدّل الولادات.','Start: 1,000; deaths: 20; net migration: +5. Change births.'):T('معدل سنوي ثابت مفترض؛ لا يمثل توقعًا لدولة.','Assumed constant annual rate; not a forecast for any country.');
 }else if(model==='migration'){
  art=cube(80,240,100,110,'#73bfff')+cube(480,240,100,110,'#65e1b7')+arrow(245,150,430,150)+arrow(430,230,245,230)+text(338,130,'60')+text(338,265,String(v));
  result=`60 − ${v} = ${60-v} `+T('صافي الهجرة إلى التجمع الأزرق','net migration into the blue settlement');
  note=T('السهم العلوي يمثل 60 وافدًا إلى التجمع الأخضر؛ صافي هجرة الأخضر = 60 ناقص المغادرين.','The upper arrow represents 60 arrivals at the green settlement; its net migration is 60 minus departures.');
  result=`60 − ${v} = ${60-v} `+T('صافي الهجرة إلى التجمع الأخضر','net migration into the green settlement');
 }else if(['sectors','development'].includes(model)){
  const vals=model==='sectors'?[Math.round((100-v)*.4),v,100-v-Math.round((100-v)*.4)]:[v,75,55];
  art=vals.map((a,i)=>cube(120+i*180,285,65,a*1.8+6,palette[i])+text(165+i*180,325,a+'%')).join('');
  result=model==='sectors'?T(`أولي ${vals[0]}% · ثانوي ${v}% · ثالثي ${vals[2]}%`,`Primary ${vals[0]}% · Secondary ${v}% · Tertiary ${vals[2]}%`):T(`خدمات ${v}% · تعليم 75% · ماء آمن 55%`,`Services ${v}% · Education 75% · Safe water 55%`);
 }else if(['trade','transport','region'].includes(model)){
  const points=[[100,100],[350,75],[590,170],[390,280],[135,255]];art=points.map(([x,y],i)=>line(x,y,...points[(i+1)%5])).join('');art+=line(100,100,590,170,'#65e1b7',7);
  art+=points.map(([x,y],i)=>circle(x,y,22,palette[i%4])+text(x,y+6,String(i+1),18)).join('');const x=100+v*4.9,y=100+v*.7;art+=cube(x-12,y,18,18,'#f6b96e');
  result=model==='transport'?`120 ÷ ${Math.max(5,v)} = ${num(120/Math.max(5,v))} `+T('ساعة','hours'):T('تقدّم المسار: ','Route progress: ')+v+'%';
  note=model==='region'?T('مخطط روابط إقليمي، لا خريطة حدود أو مقياس مسافات.','Regional links schematic, not a border map or distance scale.'):model==='transport'?T('طول الطريق 120 كم. الزمن = المسافة ÷ السرعة.','Route length: 120 km. Time = distance ÷ speed.'):note;
 }else if(['resources','fossil','water'].includes(model)){
  const stored=model==='water'?Math.max(0,100+50-v):100-v;art=rect(160,70,365,220,'#304956')+rect(168,280-Math.min(200,stored*1.4),349,Math.min(200,stored*1.4),model==='fossil'?'#d59c57':'#73bfff')+line(95,120,160,120,'#65e1b7',15)+line(525,240,620,240,'#f6b96e',15);
  result=model==='water'?`100 + 50 − ${v} = ${stored} `+T('وحدة ماء مخزّنة','stored water units'):`100 − ${v} = ${stored}% `+T('متبقٍ','remaining');
  note=model==='water'?T('مخزون أولي 100، إمداد 50، ونغيّر الطلب.','Initial storage 100, supply 50; change demand.'):note;
 }else if(model==='pollution'){
  art=base+cube(105,225,60,100,'#b89bf8')+rect(115,78,15,75,'#a2a5ad')+`<path d="M170 200Q330 110 580 230" fill="none" stroke="#73bfff" stroke-width="35"/>`;
  for(let i=0;i<Math.round((100-v)/5);i++)art+=circle(205+i*17,184+Math.sin(i)*12,5,'#f6b96e');result=T('المتبقي من الملوث في المثال: ','Pollutant remaining in this example: ')+(100-v)+'%';
 }else if(model==='orbit'){
  const a=v*2*Math.PI/100,x=350+240*Math.cos(a),y=185+100*Math.sin(a);art='<ellipse cx="350" cy="185" rx="240" ry="100" fill="none" stroke="#487185" stroke-width="2"/>'+circle(350,185,48,'#f6b96e')+circle(x,y,26,'url(#cg-sphere)')+line(x-11,y-40,x+11,y+40,'#fff',2);
  result=T('تقدّم مداري: ','Orbital progress: ')+v+'%';note=T('الحجوم والمسافات غير مقياسية. المحور مائل وثابت الاتجاه تقريبًا خلال الدورة.','Sizes and distances are not to scale. The tilted axis maintains approximately the same direction during one orbit.');
 }else if(model==='layers'){
  art=[125,96,60,32].map((r,i)=>`<g transform="translate(${(i-1.5)*v*.6},${i*v*.1})">${circle(350,185,r,palette[i])}${text(350,185-r+20,String(i+1),13)}</g>`).join('');
  result=T('1 القشرة · 2 الوشاح · 3 اللب الخارجي · 4 اللب الداخلي','1 Crust · 2 Mantle · 3 Outer core · 4 Inner core');
 }else if(model==='plates'){
  const gap=p===0?v*.6:p===1?-v*.35:0;art=cube(110-gap,265,190,50,'#65e1b7')+cube(360+gap,265+(p===2?v*.45:0),190,50,'#73bfff');if(p===1)art+=`<path d="M340 260L465 ${270+v*.65}" stroke="#f6b96e" stroke-width="15"/>`;if(p===0)art+=line(337,315,337,255,'#f6b96e',12);
  result=T(['تباعد','تقارب واندساس','انزلاق'][p],['Divergence','Convergence and subduction','Transform motion'][p]);
 }else if(model==='seismic'){
  art=base+`<path d="M290 140L345 310" stroke="#f6b96e" stroke-width="7"/>`;
  for(let i=0;i<4;i++)art+=`<ellipse cx="325" cy="240" rx="${8+(v+i*23)%120}" ry="${5+((v+i*23)%120)*.6}" fill="none" stroke="#73bfff" opacity="${1-i*.19}"/>`;
  art+=circle(325,240,7,'#f6b96e')+line(325,240,325,135,'#fff',2)+circle(325,135,8,'#65e1b7');result=T('برتقالي: البؤرة · أخضر: المركز السطحي','Orange: focus · Green: epicentre');
 }else if(model==='volcano'){
  art=base+`<path d="M170 275L300 115 395 115 550 275Z" fill="#53636b"/><path d="M170 275L300 115 342 273Z" fill="#82928e"/>`+circle(350,275,43,'#f6b96e')+rect(337,270-v*1.55,24,v*1.55+8,'#ff8867');if(v>85)art+=`<path d="M346 116Q425 170 476 232" fill="none" stroke="#ff8867" stroke-width="${(v-85)*.9}"/>`;result=v>85?T('الصهارة وصلت السطح: لابة','Magma reaches the surface: lava'):T('الصهارة تصعد تحت السطح','Magma rises below the surface');
 }else if(model==='rockcycle'){
  const pts=[[140,245],[350,100],[560,245]];art=arrow(190,208,295,128)+arrow(395,131,510,206)+arrow(505,295,200,295);art+=pts.map(([x,y],i)=>cube(x-35,y,55,i===p?75+v*.2:55,palette[i])+text(x,y+35,T(['نارية','رسوبية','متحولة'][i],['Igneous','Sedimentary','Metamorphic'][i]))).join('');result=T(['تبرد مادة منصهرة','تراكم الرواسب وتماسكها','حرارة وضغط دون انصهار كامل'][p],['Molten material cools','Sediments accumulate and cement','Heat and pressure without complete melting'][p]);
 }else if(model==='crystal'){
  const n=2+Math.floor(v/26);for(let z=0;z<2;z++)for(let y=0;y<n;y++)for(let x=0;x<n;x++){const px=185+x*58+z*32,py=100+y*42-z*25;if(x<n-1)art+=line(px,py,px+58,py,'#487185',2);if(y<n-1)art+=line(px,py,px,py+42,'#487185',2);art+=circle(px,py,9,z?'#73bfff':'#65e1b7')};result=T('شبكة منتظمة · عدد العقد: ','Ordered lattice · nodes: ')+n*n*2;
 }else if(model==='weathering'||model==='erosion'){
  art=base+cube(130,230,90,120,'#82928e');if(model==='weathering'){for(let i=0;i<8;i++)art+=line(145+i*10,100+i*7,150+i*10+v*.14,110+i*7+v*.65,'#132d3d',3);result=T('تفتيت في المكان؛ لا ننقل الفتات','Breakdown in place; fragments are not transported');}else{art+=`<path d="M240 220Q400 165 585 272" fill="none" stroke="#73bfff" stroke-width="22"/>`;for(let i=0;i<10;i++)art+=circle(230+v*2.7+i*4,224+Math.sin(i)*12,5,'#f6b96e');result=T('يتحرك الفتات بعيدًا عن الصخر','Fragments move away from the rock')}
 }else if(model==='atmosphere'){
  art=rect(110,245,480,70,'#355856')+rect(110,155,480,90,'#397995')+rect(110,65,480,90,'#315b8b');const altitude=v*.3;art+=circle(350,285-altitude*6,14,'#f6b96e')+text(565,225,'1')+text(565,140,'2');result=num(altitude)+' '+T('كم ارتفاعًا','km altitude');note=T('طبقات تخطيطية؛ سماكتها الفعلية تختلف، وحدودها ليست جدرانًا.','Schematic layers; actual thickness varies, and their boundaries are not walls.');
 }else if(model==='weather'){
  art=circle(230,140,55,'#f6b96e')+circle(370,150,40,'#b2ccdc')+circle(420,135,52,'#b2ccdc')+circle(470,155,40,'#b2ccdc');for(let i=0;i<(p+1)*4;i++)art+=line(340+i*12,215,333+i*12,240,'#73bfff',3);art+=rect(120,90,22,190,'#2c485b')+rect(124,267-v*1.6,14,v*1.6+5,'#ff8867');result=(v-20)+' °C · '+T(['مطر خفيف','مطر متوسط','مطر غزير'][p],['Light rain','Moderate rain','Heavy rain'][p]);
 }else if(model==='climate'){
  const temperatures=[[12,13,15,19,23,26,28,28,26,22,18,14],[15,17,21,27,32,35,37,36,32,26,20,16],[-3,-1,5,12,18,22,24,23,18,11,4,-1]][p],rain=[[85,70,55,25,8,2,0,0,5,30,55,80],[5,4,3,2,1,0,0,0,1,2,3,5],[35,30,40,45,65,80,75,65,55,45,40,35]][p],month=Math.min(11,Math.floor(v*12/101));
  art=line(75,290,625,290);for(let i=0;i<12;i++){art+=rect(85+i*44,290-rain[i]*1.4,22,rain[i]*1.4,i===month?'#65e1b7':'#397995')+text(95+i*44,317,String(i+1),13);if(i)art+=line(95+(i-1)*44,230-temperatures[i-1]*3,95+i*44,230-temperatures[i]*3,'#f6b96e',3)}art+=circle(95+month*44,230-temperatures[month]*3,7,'#fff');result=T('الشهر ','Month ')+(month+1)+` · ${temperatures[month]} °C · ${rain[month]} mm`;note=T('أعمدة: مطر بالملم. خط: حرارة مئوية. بيانات تعليمية مفترضة.','Bars: rain in mm. Line: temperature in °C. Illustrative data.');
 }else if(model==='zones'||model==='coordinates'){
  const lat=Math.round(v*1.8-90),y=190-lat*1.2;art=circle(350,185,135,'url(#cg-sphere)');for(let i=-2;i<=2;i++)art+=`<ellipse cx="350" cy="${185+i*45}" rx="${125-Math.abs(i)*15}" ry="12" fill="none" stroke="#b8e4e5" opacity=".6"/>`;art+=`<ellipse cx="350" cy="185" rx="${35+p*35}" ry="130" fill="none" stroke="#f6b96e"/>`+line(225,y,475,y,'#fff',3);result=T('دائرة العرض: ','Latitude: ')+Math.abs(lat)+'° '+(lat>=0?T('شمال','N'):T('جنوب','S'));if(model==='coordinates')result+=' · '+T('خط الطول: ','Longitude: ')+[0,30,60][p]+'° E';
 }else if(model==='watercycle'){
  art=base+`<path d="M415 260L480 110 600 263Z" fill="#6d8789"/>`+rect(100,250,230,32,'#73bfff')+circle(305,105,35,'#b2ccdc')+circle(350,110,45,'#b2ccdc');const pts=[[200,250-v*1.3],[230+v*1.4,110],[400+v,130+v*1.1]];art+=arrow(170,240,240,120)+arrow(265,98,390,98)+arrow(420,130,490,245);art+=circle(...pts[p],10,'#65e1b7');result=T(['تبخر: من السطح إلى الجو','تكاثف: قطرات تتشكل','هطول: ماء يعود إلى السطح'][p],['Evaporation: surface to atmosphere','Condensation: droplets form','Precipitation: water returns to the surface'][p]);
 }else if(model==='energy'){
  art=cube(100,260,85,160,'#73bfff')+arrow(240,180,350,180)+cube(390,260,70,v*1.6+1,'#65e1b7')+cube(515,260,60,(100-v)*1.6+1,'#f6b96e');result=T(`100 وحدة داخلة → ${v} مفيدة + ${100-v} غير مفيدة للمهمة`,`100 input units → ${v} useful + ${100-v} not useful for the task`);
 }else if(model==='renewables'){
  art=base+circle(150,80,30+v*.2,'#f6b96e')+`<path d="M140 205L275 165 305 245 172 278Z" fill="#397995" stroke="#73bfff" stroke-width="4"/>`+line(490,260,490,130,'#b2ccdc',9)+`<g transform="rotate(${v*3.6} 490 130)">${line(490,130,490,60,'#65e1b7',8)}${line(490,130,550,165,'#65e1b7',8)}${line(490,130,430,165,'#65e1b7',8)}</g>`;result=T('مصدر أقوى في المثال → خرج محتمل أعلى','Stronger source in this example → potentially greater output');note=T('لا تحوّل سرعة المروحة هنا إلى قدرة حقيقية؛ الإنتاج له حدود تقنية.','Rotor motion here is not a real power calculation; output has technical limits.');
 }else if(model==='greenhouse'){
  art=circle(350,220,100,'url(#cg-sphere)')+`<path d="M160 240A195 195 0 0 1 540 240" fill="none" stroke="#b89bf8" opacity="${.2+v*.007}" stroke-width="18"/>`+arrow(140,80,280,205)+arrow(370,160,420,80)+arrow(420,80,475,210);result=T('زيادة الغازات الدفيئة تغيّر انتقال الإشعاع الحراري','More greenhouse gas changes thermal-radiation transfer');note=T('الأشعة تمثيلية؛ النموذج لا يحسب درجة حرارة الأرض.','Rays are schematic; this model does not calculate Earth’s temperature.');
 }else if(model==='terrain'){
  art=base;for(let i=0;i<5;i++)art+=`<ellipse cx="355" cy="${262-i*v*.35}" rx="${180-i*31}" ry="${50-i*8}" fill="${palette[i%4]}" stroke="#12303d" stroke-width="3"/>`;result=T('نفس الفاصل الرأسي: تقارب الخطوط يعني انحدارًا أشد','Same contour interval: closer contours mean a steeper slope');
 }else if(model==='industry'){
  art=cube(285,270,100,150,'#b89bf8')+arrow(100,200,260,200)+arrow(440,200,600,200);for(let i=0;i<Math.ceil(v/10);i++)art+=cube(85+i*12,260,12,15,'#f6b96e');result=`${v} `+T('وحدة خام → ','raw units → ')+Math.floor(v*.8)+T(' منتج + ',' products + ')+(v-Math.floor(v*.8))+T(' مخلفات',' waste');note=T('سيناريو تعليمي: 80% من المدخلات تصبح منتجًا.','Learning scenario: 80% of inputs become product.');
 }else if(model==='farming'){
  art=base;for(let i=0;i<12;i++){const x=160+i%4*100,y=215+Math.floor(i/4)*30;art+=line(x,y,x,y-15-Math.min(v,60)*.5,'#65e1b7',4)+circle(x-7,y-20-Math.min(v,60)*.5,8,'#65e1b7')}art+=line(100,280,610,280,'#73bfff',Math.max(2,v/8));result=v<30?T('ماء قليل في هذا السيناريو','Too little water in this scenario'):v>70?T('ماء زائد؛ افحص الصرف والهدر','Excess water; check drainage and waste'):T('مجال ري مناسب في المثال','Suitable irrigation range in this example');note=T('حدود توضيحية فقط؛ حاجة النبات الفعلية تختلف حسب المحصول والتربة والطقس.','Illustrative thresholds only; actual need depends on crop, soil and weather.');
 }else if(model==='maps'){
  for(let i=0;i<3;i++)art+=`<g transform="translate(0,${-i*v*.55})"><path d="M110 270L335 180 600 255 365 345Z" fill="${palette[i]}" fill-opacity=".25" stroke="${palette[i]}" stroke-width="3"/>${i===1?line(175,265,500,240):i===2?circle(350,255,12,'#fff'):''}</g>`;result=T('تضاريس + طرق + خدمات → تحليل موقع','Terrain + roads + services → location analysis');
 }else if(model==='risk'){
  art=base+rect(90,245,530,50,'#397995');for(let i=0;i<10;i++)art+=cube(120+i*47,230+(i<v/10?35:-55),22,35,i<v/10?'#f6b96e':'#65e1b7');result=Math.round(v/10)+T(' مبانٍ معرضة في النموذج',' exposed buildings in the model');
 }
 if(!art)throw new Error('Unknown geography model: '+model);
 return {svg:`<svg viewBox="0 0 700 370" role="img" aria-label="${E(result)}"><defs><radialGradient id="cg-sphere" cx="32%" cy="25%"><stop stop-color="#65e1b7"/><stop offset=".55" stop-color="#337f9a"/><stop offset="1" stop-color="#163754"/></radialGradient></defs>${art}</svg>`,result,note};
}
