/* Classora Heritage collaborative artwork gallery (opt-in). No names or emails are published.
 * Cloud writes require the companion Firestore security rules to be deployed.
 */
const FIREBASE="https://www.gstatic.com/firebasejs/12.19.0";
const pick=(t,ar,en)=>t(ar,en);
function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n}
function control(label,fn,cls="hw-btn"){const b=node("button",cls,label);b.type="button";b.onclick=fn;return b}
async function pngFromSvg(svg){
 const blob=new Blob([svg],{type:"image/svg+xml;charset=utf-8"});
 const url=URL.createObjectURL(blob);
 try{
  const img=new Image();img.decoding="async";img.src=url;
  await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject});
  const c=document.createElement("canvas");c.width=640;c.height=480;
  const ctx=c.getContext("2d");if(!ctx)throw Error("canvas unavailable");
  ctx.fillStyle="#fffaf0";ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,640,480);
  return c.toDataURL("image/png");
 }finally{URL.revokeObjectURL(url)}
}
export async function saveHeritagePng(svg,name="classora-heritage.png"){
 const png=await pngFromSvg(svg);
 const link=node("a");link.href=png;link.download=name;document.body.append(link);
 // Mobile Safari sometimes ignores downloads of data URLs; offer the native share sheet when supported.
 try{
  if(navigator.canShare && navigator.share && typeof File!=="undefined"){
   const response=await fetch(png);const file=new File([await response.blob()],name,{type:"image/png"});
   if(navigator.canShare({files:[file]})){await navigator.share({files:[file],title:"Classora • Heritage"});return}
  }
 }catch(error){if(error?.name==="AbortError")return}
 link.click();link.remove();
}
let servicesPromise;
async function services(){
 if(!servicesPromise)servicesPromise=Promise.all([
   import(FIREBASE+"/firebase-app.js"),
   import(FIREBASE+"/firebase-auth.js"),
   import(FIREBASE+"/firebase-firestore.js")
 ]).then(([app,auth,fs])=>({auth:auth.getAuth(app.getApp()),fs,db:fs.getFirestore(app.getApp())}));
 return servicesPromise;
}
export function showSharedHeritageGallery({target,t,drawings=[]}){
 const title=node("section","hw-community");
 title.append(node("h2","",pick(t,"معرض رسومات كلاسورا","Classora art gallery")),node("p","hw-muted",pick(t,"شوف رسومات المشاركين، صوّت لرسمة واحدة، وشارك رسمتك باختيارك. أسماء الطلاب الحقيقية مش معروضة.","See other artwork, vote once, and choose whether to submit yours. Real student names are not shown.")));
 const message=node("p","hw-gallery-message",pick(t,"رسوماتك محفوظة عندك، وما بتنشر إلا إذا ضغطت نشر.","Your artwork remains private unless you choose to publish it."));message.setAttribute("role","status");
 const list=node("div","hw-community-grid");
 const board=node("div","hw-rankings");
 const actions=node("div","hw-actions");
 const select=node("select","hw-gallery-select");select.setAttribute("aria-label",pick(t,"اختَر رسمة للنشر","Choose a drawing to publish"));
 drawings.forEach((d,i)=>{const opt=node("option","",pick(t,"رسمة ","Drawing ")+(i+1)+" • "+(d.title||""));opt.value=String(i);select.append(opt)});
 const publish=control(pick(t,"انشر رسمتي بالمعرض","Publish my drawing"),async()=>{
  const item=drawings[Number(select.value)];if(!item)return;
  publish.disabled=true;
  try{
   const {auth,fs,db}=await services();const uid=auth.currentUser?.uid;if(!uid)throw Error("signed-out");
   const png=await pngFromSvg(item.svg);
   if(png.length>215000)throw Error("too-large");
   const prompt=String(item.art||"stitch");const seconds=Math.min(120,Math.max(1,Math.round(Number(item.elapsedSeconds)||120)));
   await fs.setDoc(fs.doc(db,"heritageArts2026",uid),{uid,image:png,prompt,elapsedSeconds:seconds,createdAt:fs.serverTimestamp()});
   message.textContent=pick(t,"نشرت رسمتك! بقدر كل شخص مسجّل يشوفها ويصوّت إلها.","Your artwork is published. Signed-in members can see and vote for it.");
  }catch(error){message.textContent=pick(t,"النشر الجماعي مش متاح حاليًا. رسمتك لسا عندك، وبتقدر تحفظها على الهاتف.","Community publishing is currently unavailable. Your drawing stays private and can still be saved.");console.warn("Heritage artwork upload:",error?.code||error?.message)}
  finally{publish.disabled=false}
 },"hw-btn");
 const leave=control(pick(t,"احذف رسمتي المنشورة","Remove my published artwork"),async()=>{
  leave.disabled=true;try{const {auth,fs,db}=await services();if(!auth.currentUser)throw Error("signed-out");await fs.deleteDoc(fs.doc(db,"heritageArts2026",auth.currentUser.uid));message.textContent=pick(t,"تم حذف رسمتك من المعرض.","Your artwork has been removed from the gallery.")}
  catch{message.textContent=pick(t,"تعذّر الحذف. حاول مرة ثانية.","Could not remove the artwork. Try again.")}finally{leave.disabled=false}
 },"hw-btn hw-secondary");
 if(drawings.length){actions.append(select,publish,leave)}
 const refresh=control(pick(t,"اعرض رسومات المشاركين","View community artwork"),async()=>{
  refresh.disabled=true;message.textContent=pick(t,"جارِ تحميل المعرض...","Loading gallery...");
  try{
   const {auth,fs,db}=await services();if(!auth.currentUser)throw Error("signed-out");
   const artworks=fs.collection(db,"heritageArts2026"),votes=fs.collection(db,"heritageVotes2026");
   let results=[],ballots=[],me=auth.currentUser.uid;
   const draw=()=>{
    list.replaceChildren();board.replaceChildren();
    const counts=new Map();ballots.forEach(v=>counts.set(v.artUid,(counts.get(v.artUid)||0)+1));
    const all=results.filter(v=>typeof v.image==="string"&&v.image.startsWith("data:image/png;base64,"));
    if(!all.length){list.append(node("p","hw-muted",pick(t,"لسا ما في رسومات منشورة. كن أول رسّام!","No public drawings yet. Be the first artist!")));return}
    const voted=ballots.find(v=>v.uid===me)?.artUid;
    const fastest=[...all].sort((a,b)=>(a.elapsedSeconds||120)-(b.elapsedSeconds||120))[0];
    const favorite=[...all].sort((a,b)=>(counts.get(b.uid)||0)-(counts.get(a.uid)||0))[0];
    if(fastest)board.append(node("p","",pick(t,"الأسرع بالرسم: ","Fastest drawing: ")+pick(t,"رسّام #","Artist #")+fastest.uid.slice(0,4)+" • "+fastest.elapsedSeconds+" "+pick(t,"ثانية","sec")));
    if(favorite)board.append(node("p","",pick(t,"الأكثر تصويتًا: ","Most loved: ")+pick(t,"رسّام #","Artist #")+favorite.uid.slice(0,4)+" • "+(counts.get(favorite.uid)||0)+" "+pick(t,"صوت","votes")));
    all.sort((a,b)=>(counts.get(b.uid)||0)-(counts.get(a.uid)||0)).forEach(entry=>{
     const figure=node("article","hw-community-art");const img=node("img");img.src=entry.image;img.alt=pick(t,"رسمة من التراث الفلسطيني","Palestinian heritage drawing");img.loading="lazy";img.width=320;img.height=240;
     figure.append(img,node("strong","",pick(t,"رسّام #","Artist #")+entry.uid.slice(0,4)),node("span","",entry.elapsedSeconds+" "+pick(t,"ثانية للرسم","seconds to draw")+" · "+(counts.get(entry.uid)||0)+" "+pick(t,"أصوات","votes")));
     const vote=control(voted===entry.uid?pick(t,"صوّتّت لها","Your vote"):pick(t,"صوّت لهذه الرسمة","Vote for this artwork"),async()=>{
      vote.disabled=true;
      try{await fs.setDoc(fs.doc(db,"heritageVotes2026",me),{uid:me,artUid:entry.uid,createdAt:fs.serverTimestamp()});message.textContent=pick(t,"تم تسجيل صوتك! بتقدر تغيّره.","Your vote was saved! You can change it.")}
      catch{message.textContent=pick(t,"تعذّر التصويت. جرّب مرة ثانية.","Voting is unavailable right now. Please retry.")}finally{vote.disabled=false}
     },"hw-btn hw-secondary");
     if(entry.uid!==me){figure.append(vote)}
     list.append(figure);
    });
   };
   const unsubArt=fs.onSnapshot(fs.query(artworks,fs.orderBy("createdAt","desc"),fs.limit(40)),snapshot=>{results=snapshot.docs.map(d=>d.data());draw()},()=>{message.textContent=pick(t,"تعذّر عرض المعرض الجماعي.","Could not load the community gallery.")});
   const unsubVotes=fs.onSnapshot(fs.query(votes,fs.limit(300)),snapshot=>{ballots=snapshot.docs.map(d=>d.data());draw()},()=>{});
   const stop=()=>{unsubArt();unsubVotes()};
   target.addEventListener("heritage:close",stop,{once:true});
   refresh.remove();message.textContent=pick(t,"السرعة للمتعة، والأجمل يختاره المشاركون بالتصويت، بدون تقييم آلي.","Speed is for fun; people choose their favorite artwork by voting. No AI judging.");
  }catch(error){refresh.disabled=false;message.textContent=pick(t,"المعرض الجماعي مش متاح هسا. جرّب بعد تفعيل صلاحيات المعرض.","Community gallery is unavailable. Try after gallery permissions are enabled.");console.warn("Heritage gallery:",error?.code||error?.message)}
 },"hw-btn hw-secondary");
 actions.append(refresh);title.append(actions,message,board,list);target.append(title);
}
