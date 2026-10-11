/* Subject and lesson-specific, lightweight SVG background art for Classora. */
const SUBJECTS={
 math:{c:'#62aafa',accent:'#71ddc2',marks:['π','x²','∑','√']},
 geometry:{c:'#67bbff',accent:'#8bdac9',marks:['△','∠','a²','π']},
 science:{c:'#63dac2',accent:'#85b8fa',marks:['H₂O','pH','O₂','DNA']},
 arabic:{c:'#b99cff',accent:'#d6b8fa',marks:['ض','ع','ف','ـُ']},
 english:{c:'#ffc286',accent:'#8dc5ff',marks:['Aa','?','!','Abc']},
 history:{c:'#ddae8b',accent:'#ead1a9',marks:['I','II','III','IV']},
 geography:{c:'#6cd7c6',accent:'#8fc6f7',marks:['N','S','°','↗']},
 all:{c:'#8ebde8',accent:'#7cdeca',marks:['✦','π','Aa','◯']}
};
const MOTIFS={
 triangle:'<path d="M22 146L126 26l113 120Z"/><path d="M126 26v120M22 146h217"/><path d="M22 146v-18h18v18"/><path d="M96 60h60M110 45v32"/>',
 graph:'<path d="M22 12v173M10 164h252"/><path d="M38 142L92 121l48-64 54 27 54-67"/><circle cx="38" cy="142" r="6"/><circle cx="140" cy="57" r="6"/><circle cx="248" cy="17" r="6"/><path d="m22 12-8 11m8-11 8 11m232 152-11-8m11 8-11 8"/>',
 fraction:'<rect x="25" y="30" width="190" height="110" rx="16"/><path d="M25 85h190M120 30v110"/><path d="M25 85h95V30H25Z" fill="currentColor" fill-opacity=".13"/><circle cx="245" cy="85" r="16"/>',
 cube:'<path d="M40 65l84-45 84 45v98l-84 45-84-45Z"/><path d="m40 65 84 50 84-50m-84 50v93M124 20v95"/><path d="m82 42 84 45m-84-1 84-45" opacity=".35"/>',
 circle:'<circle cx="130" cy="105" r="83"/><path d="M130 105 130 22A83 83 0 0 1 200 146Z" fill="currentColor" fill-opacity=".12"/><path d="M130 105h83m-83 0V22"/><path d="M45 105h170m-85-87v180" opacity=".3"/>',
 atom:'<ellipse cx="130" cy="105" rx="115" ry="42"/><ellipse cx="130" cy="105" rx="115" ry="42" transform="rotate(60 130 105)"/><ellipse cx="130" cy="105" rx="115" ry="42" transform="rotate(120 130 105)"/><circle cx="130" cy="105" r="12" fill="currentColor"/><circle cx="218" cy="111" r="7" fill="currentColor"/>',
 dna:'<path d="M72 10C200 48 44 90 186 126S85 201 205 211M205 10C84 50 230 94 72 126S205 198 72 211"/><path d="M90 27h96M93 65h94M82 105h120M91 142h96M91 184h96"/>',
 flask:'<path d="M98 20h90m-75 0v61L53 181a16 16 0 0 0 14 24h145a16 16 0 0 0 14-24l-60-100V20M78 146h121"/><circle cx="130" cy="161" r="8"/><circle cx="165" cy="182" r="7"/>',
 circuit:'<rect x="30" y="55" width="210" height="110" rx="18"/><path d="M30 105h45m0 0v-35m0 35v35m0-35h48m27 0h90M125 87v36m24-25v15"/><circle cx="75" cy="70" r="5"/><circle cx="75" cy="140" r="5"/>',
 book:'<path d="M130 42q-60-45-111-13v148q62-31 111 17 52-48 111-17V29q-56-32-111 13Z"/><path d="M130 42v152M40 66q36-14 72 12M148 78q36-24 74-12M40 110q37-15 72 12M148 122q34-24 74-12"/>',
 words:'<rect x="10" y="25" width="106" height="62" rx="18"/><rect x="148" y="122" width="106" height="62" rx="18"/><path d="M116 58h40v96h-8M144 144l5 10 8-10"/><path d="M33 53h60m-60 13h39m100 85h59m-59 13h39"/>',
 columns:'<path d="m30 49 100-32 100 32v16H30Zm16 16v114m34-114v114m32-114v114m34-114v114m32-114v114m34-114v114M20 179h220v20H20Z"/><path d="M34 65h190M34 179h190"/>',
 scroll:'<path d="M80 35h155c26 0 26 37 0 37H66q-28 0-28 31v92m0 0c0 23 31 23 31 0V58c0-31 37-31 37 0v136h130"/><path d="M105 95h103M105 120h83M105 145h97"/>',
 earth:'<circle cx="130" cy="105" r="89"/><ellipse cx="130" cy="105" rx="40" ry="89"/><path d="M42 105h176M57 60h145M57 150h145"/><path d="M120 20v171" opacity=".3"/>',
 mountain:'<path d="M10 183 95 42l55 92 36-57 70 106Z"/><path d="m68 87 27-45 31 52-30-10-16 19m89 0 17-26 26 42-24-8-9 11"/><path d="M10 196h246"/>',
 cloud:'<path d="M71 140h147c46 0 39-66-5-66-16-66-99-70-122-7-54-7-70 73-20 73Z"/><path d="m103 159-14 29m56-29-14 29m56-29-14 29"/>'
};
function choose(subject,title){
 const t=(title||'').toLowerCase();
 if(subject==='math'||subject==='geometry'){
  if(/فيثاغورس|زاوي|مثلث|تطابق|تشابه|triangle|angle|pythag/.test(t))return 'triangle';
  if(/مساح|محيط|حجم|مجسم|مكعب|مسطح|solid|cube|volume|area/.test(t))return 'cube';
  if(/احتمال|نسب مئوية|نسبة|مئة|percent|probab/.test(t))return 'circle';
  if(/كسور|كسر|fraction|نصف/.test(t))return 'fraction';
  return 'graph';
 }
 if(subject==='science'){
  if(/وراثة|dna|جين|خلية|تكاثر|cell|genetic/.test(t))return 'dna';
  if(/كهرب|دارة|تيار|circuit|electr/.test(t))return 'circuit';
  if(/حمض|قاعد|كيمياء|تفاعل|ph|chem|acid|base/.test(t))return 'flask';
  return 'atom';
 }
 if(subject==='arabic')return /مضاف|إعراب|عطف|جملة|فاعل|مفعول/.test(t)?'words':'book';
 if(subject==='english')return /question|sentence|pronoun|conditional/.test(t)?'words':'book';
 if(subject==='history')return /عصر|دولة|إمبراط|civil|empire|century|renaissance/.test(t)?'columns':'scroll';
 if(subject==='geography')return /زلازل|بركان|جبال|صخور|تضاريس|earthquake|mountain/.test(t)?'mountain':/مناخ|طقس|مطر|weather|climate/.test(t)?'cloud':'earth';
 return 'atom';
}
function xml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]))}
function art(subject,topic){
 const p=SUBJECTS[subject]||SUBJECTS.all,kind=choose(subject,topic),shape=MOTIFS[kind];
 const seed=Array.from(String(topic||subject)).reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
 const second=MOTIFS[Object.keys(MOTIFS)[seed%Object.keys(MOTIFS).length]];
 const mark=p.marks[seed%p.marks.length],mark2=p.marks[(seed+2)%p.marks.length];
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="630" viewBox="0 0 1100 630" fill="none">'+
 '<defs><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" stroke="'+p.c+'" stroke-opacity=".095" stroke-width="1"/></pattern></defs>'+
 '<rect width="1100" height="630" fill="url(#grid)" opacity=".6"/>'+
 '<circle cx="940" cy="140" r="255" fill="'+p.c+'" opacity=".045"/><circle cx="160" cy="520" r="220" fill="'+p.accent+'" opacity=".035"/>'+
 '<g transform="translate(655 74) scale(1.55)" stroke="'+p.c+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" opacity=".24" color="'+p.c+'">'+shape+'</g>'+
 '<g transform="translate(80 345) scale(.72) rotate(-14 130 105)" stroke="'+p.accent+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".20" color="'+p.accent+'">'+second+'</g>'+
 '<g font-family="Georgia,serif" font-weight="700" fill="'+p.c+'" opacity=".19"><text x="555" y="140" font-size="60">'+xml(mark)+'</text><text x="945" y="490" font-size="68">'+xml(mark2)+'</text></g>'+
 '<path d="M520 510l30-30m-15 0 15 0 0 15M365 170h75m-38-24v48" stroke="'+p.accent+'" stroke-width="3" opacity=".18"/>'+
 '</svg>';
 return 'url("data:image/svg+xml,'+encodeURIComponent(svg)+'")';
}
let scheduled=false;
function sync(){
 scheduled=false;
 const modal=document.getElementById('classoraCurriculumModal');
 if(modal&&modal.classList.contains('open')){
  const subject=modal.dataset.subject||'all',body=modal.querySelector('.classora-curriculum-body');
  if(body){
   const title=modal.classList.contains('lesson-open')?
    (body.querySelector('.cm-studio h1,.curriculum-lesson-copy h2,.curriculum-lesson-copy h1,.curriculum-heading h2')?.textContent||''):'';
   const key=subject+'|'+title;
   if(body.dataset.classoraArtKey!==key){
    body.dataset.classoraArtKey=key;modal.dataset.classoraArtSubject=subject;
    body.style.setProperty('--classora-page-art',art(subject,title));
   }
  }
 }
 const hub=document.querySelector('.learning-hub');
 if(hub){
  const subject=hub.dataset.selectedSubject||'all';
  if(hub.dataset.classoraArtSubject!==subject){
   hub.dataset.classoraArtSubject=subject;
   hub.style.setProperty('--classora-page-art',art(subject,''));
  }
 }
}
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(sync)}
document.addEventListener('classora:math-context',schedule);
document.addEventListener('DOMContentLoaded',schedule,{once:true});
window.addEventListener('classora-intro-finished',schedule);
if(document.readyState!=='loading')schedule();
