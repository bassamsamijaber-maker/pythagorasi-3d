/* A transparent orthographic globe. Coastlines are deliberately simplified. */
const LAND=[
[[-168,70],[-145,72],[-125,60],[-125,49],[-115,32],[-98,16],[-84,9],[-77,8],[-82,23],[-65,45],[-53,52],[-65,60],[-95,75],[-130,72]],
[[-81,12],[-65,10],[-48,-2],[-35,-7],[-42,-23],[-53,-35],[-69,-55],[-76,-40],[-80,-10]],
[[-17,36],[10,37],[34,31],[44,12],[51,10],[42,-13],[32,-34],[18,-35],[10,-5],[-10,5],[-17,20]],
[[-10,36],[-9,44],[0,50],[8,55],[6,62],[24,71],[40,68],[65,73],[110,73],[145,63],[177,65],[155,48],[135,34],[122,22],[107,4],[99,15],[80,8],[69,24],[50,28],[43,12],[35,30],[25,40],[12,44]],
[[112,-11],[136,-12],[153,-26],[145,-39],[129,-33],[115,-35]],
[[-53,60],[-43,60],[-20,77],[-35,83],[-58,80]],
[[46,-13],[50,-17],[47,-26],[44,-22]],[[130,32],[141,43],[145,45],[140,35]],
[[166,-35],[178,-38],[172,-46],[166,-47]],[[95,5],[106,-6],[118,-9],[125,-8],[115,-3]],
[[-9,50],[-2,51],[0,59],[-5,59]],[[47,-13],[49,-22],[44,-25]]
];
function inside(x,y,p){let yes=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const [a,b]=p[i],[c,d]=p[j];if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)yes=!yes}return yes}
const points=[];for(let lat=-57;lat<=81;lat+=4)for(let lon=-178;lon<=178;lon+=4)if(LAND.some(p=>inside(lon,lat,p)))points.push([lon,lat]);
export function projectGlobe(lon,lat,angle=0){const a=(lon+angle)*Math.PI/180,b=lat*Math.PI/180;return {x:160+119*Math.cos(b)*Math.sin(a),y:160-119*Math.sin(b),z:Math.cos(b)*Math.cos(a)}}
export function globeArtwork(angle=0){
 let back='',front='';
 const stroke=(points)=>{let f='',b='',lastF=false,lastB=false;for(const [lon,lat]of points){const p=projectGlobe(lon,lat,angle),visible=p.z>=0;const s=p.x.toFixed(1)+' '+p.y.toFixed(1);if(visible){f+=(lastF?'L':'M')+s;lastF=true;lastB=false}else{b+=(lastB?'L':'M')+s;lastB=true;lastF=false}}return [`<path d="${b}"/>`,`<path d="${f}"/>`]};
 for(let lat=-60;lat<=60;lat+=30){const [b,f]=stroke(Array.from({length:121},(_,i)=>[-180+i*3,lat]));back+=b;front+=f}
 for(let lon=-180;lon<180;lon+=30){const [b,f]=stroke(Array.from({length:61},(_,i)=>[lon,-90+i*3]));back+=b;front+=f}
 let dots='';for(const [lon,lat]of points){const p=projectGlobe(lon,lat,angle);dots+=`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.z>=0?1.65:1.05}" fill="${p.z>=0?'#9aebcf':'#73bfff'}" opacity="${p.z>=0?.45+.5*p.z:.12}"/>`}
 return `<circle cx="160" cy="160" r="123" fill="#64d4b407" stroke="#84d8ca55"/><circle cx="160" cy="160" r="119" fill="#153c4822" stroke="#96efdc88"/><g fill="none" stroke="#73bfff" stroke-width=".6" opacity=".12">${back}</g><g fill="none" stroke="#8ae7cc" stroke-width=".7" opacity=".4">${front}</g>${dots}<ellipse cx="160" cy="160" rx="148" ry="35" fill="none" stroke="#73bfff55" transform="rotate(-22 160 160)"/>`;
}
export function globeMarkup(language='ar'){
 const en=language==='en';return `<section class="cg-globe-hero" dir="${en?'ltr':'rtl'}"><div class="cg-globe-copy"><span>CLASSORA / ${en?'GEOGRAPHY':'الجغرافيا'}</span><h2>${en?'One planet. So much to explore.':'كوكب واحد، وأفكار تستاهل الاكتشاف.'}</h2><p>${en?'From the inside of Earth to the places we call home. Choose a topic and explore what changes.':'من باطن الأرض للمدن اللي بنعيش فيها. اختار موضوع وجرّب كيف بتتغيّر الأشياء.'}</p><small>${en?'Simplified globe • coastlines are illustrative':'كرة أرضية مبسّطة • السواحل توضيحية'}</small></div><div class="cg-globe-wrap"><svg class="cg-globe" viewBox="0 0 320 320" role="img" aria-label="${en?'Transparent rotating globe':'كرة أرضية شفافة تدور'}">${globeArtwork(15)}</svg><button type="button" data-globe-toggle aria-pressed="false">${en?'Pause rotation':'إيقاف الدوران'}</button></div></section>`;
}
export function mountGlobe(root,language='ar'){
 const svg=root.querySelector('.cg-globe'),button=root.querySelector('[data-globe-toggle]');if(!svg||!button)return()=>{};
 const media=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');let paused=!!media?.matches||document.documentElement.dataset.learnMotion==='true',visible=true,disposed=false,frame=0,last=0,angle=15;
 const label=()=>{button.textContent=language==='en'?(paused?'Resume rotation':'Pause rotation'):(paused?'تشغيل الدوران':'إيقاف الدوران');button.setAttribute('aria-pressed',String(paused))};
 function stop(){cancelAnimationFrame(frame);frame=0;last=0}
 function tick(t){frame=0;if(disposed||paused||!visible||document.hidden)return;if(!last)last=t;if(t-last>=60){angle=(angle+Math.min(100,t-last)*.003)%360;svg.innerHTML=globeArtwork(angle);last=t}frame=requestAnimationFrame(tick)}
 function sync(){stop();if(!disposed&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick)}
 button.onclick=()=>{paused=!paused;label();sync()};const reduced=()=>{paused=!!media?.matches||document.documentElement.dataset.learnMotion==='true';label();sync()};media?.addEventListener?.('change',reduced);
 const observer=globalThis.IntersectionObserver?new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()}):null;observer?.observe(root);
 document.addEventListener('classora:display-settings',reduced);document.addEventListener('visibilitychange',sync);label();sync();
 return()=>{disposed=true;stop();observer?.disconnect();document.removeEventListener('classora:display-settings',reduced);document.removeEventListener('visibilitychange',sync);media?.removeEventListener?.('change',reduced);button.onclick=null};
}
