import {normalizeTopic} from './learning-content.js?v=89';
const P=(ar,en)=>[ar,en];
export const GLOSSARY=[
[P('الميل','Slope'),P('مقدار تغيّر y لكل وحدة تغيّر في x على مستقيم غير رأسي.','Change in y per unit change in x on a nonvertical line.'),P('ارتفاع 6 وحدات خلال 3 وحدات أفقيًا: الميل 2.','A rise of 6 over a run of 3 gives slope 2.')],
[P('الكثافة','Density'),P('كتلة المادة لكل وحدة حجم.','Mass per unit volume.'),P('40 غرامًا في 20 سم³: الكثافة 2 غ/سم³.','40 g in 20 cm³ gives a density of 2 g/cm³.')],
[P('المفعول به','Direct object'),P('الاسم الذي وقع عليه فعل الفاعل، ويكون منصوبًا.','The noun receiving the action; in Arabic it is accusative.'),P('قرأ الطالبُ الكتابَ: الكتابَ مفعول به.','قرأ الطالبُ الكتابَ: الكتابَ is the direct object.')],
[P('الفاعل','Subject'),P('اسم يدل على من قام بالفعل أو اتصف به، ويكون مرفوعًا.','In Arabic, a nominative noun naming the doer or experiencer of the verb.'),P('نجح الطالبُ: الطالبُ فاعل.','نجح الطالبُ: الطالبُ is the subject.')],
[P('المضاف إليه','Possessor in idafa'),P('الاسم الثاني في تركيب الإضافة، ويكون مجرورًا.','The second noun in an Arabic idafa construction; it is genitive.'),P('كتابُ الطالبِ: الطالبِ مضاف إليه.','كتابُ الطالبِ: الطالبِ is the genitive second noun.')],
[P('النسبة المئوية','Percentage'),P('نسبة تُعبَّر عنها من مئة.','A proportion expressed out of one hundred.'),P('25% من 80 تساوي 20.','25% of 80 is 20.')],
[P('المحيط','Perimeter'),P('مجموع أطوال الحدود الخارجية لشكل مستوٍ.','The total length around a plane shape.'),P('مربع طول ضلعه 3 سم، محيطه 12 سم.','A square with side 3 cm has perimeter 12 cm.')],
[P('المساحة','Area'),P('مقدار السطح داخل حدود شكل، بوحدات مربعة.','The size of a region, measured in square units.'),P('مستطيل 4 × 3 سم: مساحته 12 سم².','A 4 by 3 cm rectangle has area 12 cm².')],
[P('الحجم','Volume'),P('الحيز الذي يشغله جسم، بوحدات مكعبة.','Space occupied by an object, measured in cubic units.'),P('مكعب طول حرفه 2 سم حجمه 8 سم³.','A cube with side 2 cm has volume 8 cm³.')],
[P('السرعة','Speed'),P('المسافة المقطوعة لكل وحدة زمن.','Distance travelled per unit time.'),P('100 متر في 20 ثانية: 5 م/ث.','100 m in 20 s gives 5 m/s.')],
[P('التسارع','Acceleration'),P('معدل تغيّر السرعة المتجهة مع الزمن.','The rate of change of velocity with time.'),P('زيادة السرعة 6 م/ث خلال ثانيتين: متوسط التسارع 3 م/ث².','A velocity increase of 6 m/s in 2 s gives average acceleration 3 m/s².')],
[P('المقاومة','Resistance'),P('مقدار معارضة مرور التيار الكهربائي، ووحدتها الأوم.','Opposition to electric current, measured in ohms.'),P('عند 12 فولت ومقاومة 6 أوم، التيار 2 أمبير.','At 12 V across 6 Ω, current is 2 A.')],
[P('البروتون','Proton'),P('جسيم موجب الشحنة في نواة الذرة.','A positively charged particle in an atomic nucleus.'),P('ذرة الكربون تحتوي 6 بروتونات.','A carbon atom has 6 protons.')],
[P('المناخ','Climate'),P('أنماط الطقس وتوزّعها عبر مدة طويلة.','Weather patterns and their distribution over a long period.'),P('وصف الصيف المعتاد يختلف عن توقع طقس الغد.','Describing a typical summer differs from forecasting tomorrow.')],
[P('التعرية','Erosion'),P('نقل فتات الصخور أو التربة بعوامل مثل الماء والرياح.','Transport of rock fragments or soil by agents such as water and wind.'),P('قد ينقل ماء النهر الرواسب إلى مكان آخر.','River water may move sediment elsewhere.')],
[P('خطوط الطول','Longitude'),P('تحدّد الموضع شرق خط غرينتش أو غربه.','Location east or west of the prime meridian.'),P('طول 30° شرقًا هو موقع شرقي خط غرينتش.','30° E is east of the prime meridian.')],
[P('دوائر العرض','Latitude'),P('تحدّد الموضع شمال خط الاستواء أو جنوبه.','Location north or south of the equator.'),P('خط الاستواء عند دائرة عرض 0°.','The equator is at latitude 0°.')],
[P('مصدر تاريخي','Historical source'),P('أثر أو نص أو شهادة نستخدمها لدراسة الماضي مع فحص سياقها.','An object, text or testimony used to study the past in context.'),P('نفحص من كتب الرسالة ومتى ولماذا.','Ask who wrote a letter, when and why.')],
[P('الماضي البسيط','Past simple'),P('صيغة تُستخدم عادةً لحدث مكتمل في وقت ماضٍ.','A form commonly used for a completed past event.'),P('I visited my friend yesterday.','I visited my friend yesterday.')],
[P('المضارع البسيط','Present simple'),P('صيغة للعادات والحقائق العامة وغيرها من الاستعمالات.','A form used for habits, general truths and other uses.'),P('She walks to school every day.','She walks to school every day.')],
[P('صفة','Adjective'),P('كلمة تصف اسمًا أو ضميرًا.','A word describing a noun or pronoun.'),P('a blue bag: blue تصف bag.','In “a blue bag”, blue describes bag.')],
[P('ضمير','Pronoun'),P('كلمة تستعمل للإشارة إلى اسم أو تحل محله بحسب السياق.','A word that refers to or takes the place of a noun in context.'),P('Maya is here. She is ready.','Maya is here. She is ready.')]
];
const applications=[
[/نسب|تناسب|مئوي|percent|ratio/i,P('عدّل كمية المكونات لوصفة أو احسب قيمة التخفيض قبل الشراء.','Scale a recipe or calculate a discount before buying.')],
[/ميل|دالة|دوال|مستقيم|خطية|function|slope/i,P('مثّل أجرة رحلة فيها مبلغ ثابت ومبلغ لكل كيلومتر، وافصل بينهما في الرسم.','Graph a trip fare with a fixed fee plus a price per kilometre.')],
[/مساح|محيط|حجم|مجسم|area|volume/i,P('قدّر مساحة أرضية تحتاج بلاطًا أو حجم صندوق قبل تعبئته.','Estimate the floor area needing tiles or a box’s capacity before packing.')],
[/مثلث|فيثاغورس|تشابه|triangle/i,P('قدّر طولًا يصعب قياسه مباشرة باستخدام أطوال أو أشكال تعرفها.','Estimate a hard-to-measure length using known lengths or shapes.')],
[/إحصا|احتمال|statistics|probability/i,P('اقرأ نتائج استبيان الصف وميّز بين ما تقوله البيانات وما تتوقّعه.','Read a class survey and distinguish its data from your predictions.')],
[/سرع|حرك|تسارع|قوة|قوى|نيوتن/i,P('قارن مسافة رحلتين خلال الزمن نفسه، أو فسّر تغيّر حركة عربة عند دفعها.','Compare trip distances over the same time or explain a cart’s motion when pushed.')],
[/كهرب|تيار|مقاوم/i,P('استكشف كيف تتغيّر شدة إضاءة مصباح في دائرة نموذجية عند تغيير المقاومة.','Explore a model lamp circuit as resistance changes.')],
[/حموض|أحماض|قاعد|هيدروجيني/i,P('اقرأ مقياس pH على منتج، وميّز بين الحمضي والمتعادل والقاعدي.','Read a product’s pH and distinguish acidic, neutral and basic values.')],
[/كثاف|كتلة|حجم/i,P('قارن عينتين لهما الحجم نفسه، وفسّر لماذا قد تختلف كتلتهما.','Compare equal-volume samples and explain why their masses can differ.')],
[/طاقة|حرار|قدرة|شغل/i,P('تتبّع أين تذهب الطاقة في جهاز، وقارن أداء المهمة نفسها خلال أزمنة مختلفة.','Track energy in a device and compare doing the same task over different times.')],
[/ضوء|صوت/i,P('فسّر انعكاس صورتك في مرآة أو اختلاف حدة صوتين.','Explain a mirror reflection or why two sounds have different pitches.')],
[/خلية|وراث|جين|DNA|تكاثر|بروتين|حيوي|تنفس|جسم/i,P('اربط تركيبًا في الكائن الحي بوظيفته، واقرأ مخططًا علميًا بدل حفظ الأسماء فقط.','Connect a biological structure to its function and interpret a scientific diagram.')],
[/ذرة|ذرات|عنصر|دوري|مركب|تفاعل|روابط|أيون/i,P('اقرأ رموز العناصر في صيغة مادة، وميّز عدد الذرات عن عدد الجزيئات.','Read element symbols in a formula and distinguish atoms from molecules.')],
[/ماء|مياه|زراع|ري/i,P('قارن الطلب على الماء بالموارد المتاحة، واقترح كيف تقلّل الهدر.','Compare water demand with available supply and consider how to reduce waste.')],
[/مناخ|طقس|غلاف|احتباس/i,P('ميّز توقعات طقس يوم واحد عن أنماط المناخ، واقرأ الرسم قبل الاستنتاج.','Distinguish a daily forecast from climate patterns and read a chart before concluding.')],
[/خريط|خرائط|عرض|طول|نظام.*جغراف/i,P('حدّد موقعًا على خريطة واربط الرموز والمقياس بما تمثله على الأرض.','Locate a place on a map and relate symbols and scale to the ground.')],
[/سكان|هجرة|تحضر|مدن|تنمية|تجارة|اقتصاد/i,P('قارن بين مناطق من حيث السكان والخدمات، وحدّد المعلومات الناقصة قبل اتخاذ قرار.','Compare population and services across places and identify missing information.')],
[/صخر|تعرية|تجوية|صفائح|زلازل|براكين|تضاريس/i,P('فسّر شكلًا أرضيًا من العمليات التي كوّنته، مع التمييز بين النموذج والقياس الحقيقي.','Explain a landform through the processes shaping it, distinguishing models from measurements.')]
];
export function lessonKnowledge(topic,model,language){
 const selectedLanguage=document.documentElement.lang||language,en=language!=='ar',ix=en?1:0,T=(a,b)=>selectedLanguage==='ar'?a:(window.ClassoraLocale?.tFor?.(selectedLanguage,b)||b),d=model.lesson;
 const title=en?(d.en||d.titleEn||d.title||topic.title):topic.title;
 let application=applications.find(([re])=>re.test(topic.title))?.[1]?.[ix];let example=model.draw(model.read()).result;
 if(topic.subject==='arabic'){application=T('اكتب رسالة واضحة وحدّد العلاقات بين كلماتها حتى لا يتغيّر المعنى.','Write a clear message and identify word relationships to preserve meaning.');example=d.examples[0].tokens.map(t=>t.word).join(' ')}
 if(topic.subject==='english'){application=T('استخدم القاعدة في رسالة أو محادثة، ثم بدّل المثال مع الحفاظ على تركيب صحيح.','Use the rule in a message or conversation, then change the example while keeping the structure correct.');example=d.examples[0].sentence}
 if(topic.subject==='history'){application=T('افحص خبرًا أو رواية: من صاحبها؟ ما سياقها؟ وما الدليل على السبب والنتيجة؟','Examine a report or account: who made it, in what context, and what supports its causal claims?');example=d.events[0].title[ix]+' — '+d.events[0].date[ix]}
 application=application||T('حوّل موقفًا واقعيًا إلى معطيات وعلاقة قابلة للفحص، ثم فسّر النتيجة بدل حفظها.','Turn a real situation into inputs and a testable relationship, then explain the result.');
 const content=normalizeTopic(topic.title+' '+model.rule);let terms=GLOSSARY.filter(g=>g[0].some(name=>content.includes(normalizeTopic(name)))).slice(0,5);
 if(!terms.length)terms=GLOSSARY.filter(g=>topic.subject==='history'?g[0][1]==='Historical source':['math','geometry'].includes(topic.subject)?['Area','Percentage'].includes(g[0][1]):false).slice(0,2);
 return {application,example,terms:[[ [topic.title,title],[model.rule,model.rule],[example,example] ],...terms]};
}
