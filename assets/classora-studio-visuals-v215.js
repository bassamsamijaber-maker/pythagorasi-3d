/* Real WebGL subject gallery + touch-friendly geometry drawing canvas for Classora Studio. */
let disposeWorld=null,canvas=null,ctx=null,strokes=[],drawing=null,mode='pen',color='#1664cf';
function cleanup(){if(disposeWorld){disposeWorld();disposeWorld=null}canvas=null;ctx=null;drawing=null;strokes=[]}
function board(target){
 if(!target)return;canvas=target;ctx=target.getContext('2d');strokes=[];drawing=null;mode='pen';color='#1664cf';paint();
 const coordinates=e=>{const r=canvas.getBoundingClientRect();return {x:Math.max(0,Math.min(960,(e.clientX-r.left)*960/r.width)),y:Math.max(0,Math.min(540,(e.clientY-r.top)*540/r.height))}};
 target.style.touchAction='none';
 target.addEventListener('pointerdown',e=>{e.preventDefault();target.setPointerCapture?.(e.pointerId);drawing={mode,color,points:[coordinates(e)]};paint()});
 target.addEventListener('pointermove',e=>{if(!drawing)return;e.preventDefault();const p=coordinates(e);if(drawing.mode==='pen')drawing.points.push(p);else drawing.points=[drawing.points[0],p];paint()});
 const finish=e=>{if(!drawing)return;e.preventDefault();if(drawing.points.length===1)drawing.points.push(coordinates(e));strokes.push(drawing);drawing=null;paint()};
 target.addEventListener('pointerup',finish);target.addEventListener('pointercancel',finish);
}
function paint(){
 if(!ctx||!canvas)return;ctx.clearRect(0,0,960,540);ctx.fillStyle='#ffffff';ctx.fillRect(0,0,960,540);
 ctx.lineWidth=1;ctx.strokeStyle='#e5edf5';for(let x=0;x<=960;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,540);ctx.stroke()}for(let y=0;y<=540;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(960,y);ctx.stroke()}
 ctx.lineWidth=2;ctx.strokeStyle='#b5c6d9';ctx.beginPath();ctx.moveTo(0,270);ctx.lineTo(960,270);ctx.moveTo(480,0);ctx.lineTo(480,540);ctx.stroke();
 const draw=s=>{if(!s?.points?.length)return;const a=s.points[0],b=s.points[s.points.length-1];ctx.strokeStyle=s.color;ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();
 if(s.mode==='pen'){ctx.moveTo(a.x,a.y);for(const p of s.points.slice(1))ctx.lineTo(p.x,p.y);if(s.points.length===1)ctx.lineTo(a.x+.2,a.y+.2)}
 else if(s.mode==='line'){ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y)}
 else if(s.mode==='rect'){ctx.rect(a.x,a.y,b.x-a.x,b.y-a.y)}
 else {ctx.moveTo((a.x+b.x)/2,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(a.x,b.y);ctx.closePath()}
 ctx.stroke()};
 strokes.forEach(draw);draw(drawing);
}
function action(name){
 if(name==='undo'){strokes.pop();paint()}
 if(name==='clear'){strokes=[];paint()}
 if(name==='save-png'&&canvas){const a=document.createElement('a');a.download='classora-whiteboard.png';a.href=canvas.toDataURL('image/png');a.click()}
}
function tool(name){if(['pen','line','rect','triangle'].includes(name)){mode=name;const pick=document.getElementById('stColor');color=pick?.value||color;const buttons=document.querySelectorAll('[data-st-action^="draw:"]');buttons.forEach(b=>b.classList.toggle('active',b.dataset.stAction==='draw:'+name))}}
async function world(container,subjects,onSelect){
 if(!container)return;
 container.textContent=document.documentElement.lang==='ar'?'جارٍ تحميل عالم 3D…':'Loading 3D world…';
 try{
  const T=await import('three');
  if(!container.isConnected||document.getElementById('stWorld')!==container||document.getElementById('classoraStudioRoot')?.hidden)return;
  const scene=new T.Scene();scene.background=new T.Color(0x0a1530);scene.fog=new T.Fog(0x0a1530,18,30);
  const camera=new T.PerspectiveCamera(55,1,.1,65);camera.position.set(13,11,14);camera.lookAt(0,1,0);
  const ren=new T.WebGLRenderer({antialias:true,powerPreference:'low-power'});
  ren.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));ren.outputColorSpace=T.SRGBColorSpace;ren.setSize(Math.max(200,container.clientWidth),Math.max(240,container.clientHeight));
  container.replaceChildren(ren.domElement);
  scene.add(new T.HemisphereLight(0xf4f7ff,0x11224d,2.2));
  const lamp=new T.DirectionalLight(0xffffff,2.6);lamp.position.set(-3,12,8);scene.add(lamp);
  const ground=new T.Mesh(new T.BoxGeometry(19,.3,13.5),new T.MeshStandardMaterial({color:0x213558,roughness:.8}));ground.position.y=-.2;scene.add(ground);
  const palette=[0x26cbb2,0x7c91f6,0xf5b84d,0xeb78ad,0x67c4fb,0xfe916a,0xb5dc78];
  const rooms=[];
  subjects.slice(0,8).forEach((subject,i)=>{
   const col=i%4,row=Math.floor(i/4),x=col*4.3-6.5,z=row*5.4-2.8;
   const pedestal=new T.Mesh(new T.BoxGeometry(3.5,.55,3.7),new T.MeshStandardMaterial({color:0x465674,roughness:.8}));pedestal.position.set(x,.15,z);scene.add(pedestal);
   const cube=new T.Mesh(new T.BoxGeometry(2.8,2.3,2.85),new T.MeshStandardMaterial({color:palette[i%palette.length],roughness:.46,metalness:.08}));
   cube.position.set(x,1.5,z);cube.userData.subject=subject;scene.add(cube);rooms.push(cube);
   const roof=new T.Mesh(new T.ConeGeometry(2.3,1.4,4),new T.MeshStandardMaterial({color:0xe9e5f6,roughness:.55}));roof.position.set(x,3.35,z);roof.rotation.y=Math.PI/4;scene.add(roof);
   const door=new T.Mesh(new T.PlaneGeometry(.9,1.55),new T.MeshStandardMaterial({color:0x192c53,side:T.DoubleSide}));door.position.set(x,1,z+1.435);scene.add(door);
   const handle=new T.Mesh(new T.SphereGeometry(.085,10,10),new T.MeshStandardMaterial({color:0xe4c383}));handle.position.set(x+.3,1,z+1.51);scene.add(handle);
  });
  const ray=new T.Raycaster(),pointer=new T.Vector2();let active=true,raf=0,rotation=.75,startX=0,dragged=false;
  const resize=()=>{if(!active||!container.isConnected)return;const w=container.clientWidth,h=Math.max(250,container.clientHeight);camera.aspect=w/h;camera.updateProjectionMatrix();ren.setSize(w,h)};
  const down=e=>{startX=e.clientX;dragged=false};
  const move=e=>{if(e.buttons!==1)return;const diff=e.clientX-startX;if(Math.abs(diff)>1){rotation+=diff*.005;startX=e.clientX;dragged=true}};
  const up=e=>{if(dragged)return;const b=ren.domElement.getBoundingClientRect();pointer.set(2*(e.clientX-b.left)/b.width-1,1-2*(e.clientY-b.top)/b.height);ray.setFromCamera(pointer,camera);const chosen=ray.intersectObjects(rooms)[0]?.object.userData.subject;if(chosen)onSelect(chosen)};
  ren.domElement.addEventListener('pointerdown',down);ren.domElement.addEventListener('pointermove',move);ren.domElement.addEventListener('pointerup',up);window.addEventListener('resize',resize);
  resize();function frame(){if(!active)return;raf=requestAnimationFrame(frame);camera.position.x=14*Math.sin(rotation);camera.position.z=14*Math.cos(rotation);camera.lookAt(0,1,0);ren.render(scene,camera)}frame();
  disposeWorld=()=>{active=false;cancelAnimationFrame(raf);window.removeEventListener('resize',resize);ren.domElement.removeEventListener('pointerdown',down);ren.domElement.removeEventListener('pointermove',move);ren.domElement.removeEventListener('pointerup',up);scene.traverse(o=>{o.geometry?.dispose?.();const m=o.material;if(m)(Array.isArray(m)?m:[m]).forEach(x=>x.dispose?.())});ren.dispose();ren.domElement.remove()};
 }catch(error){container.textContent=document.documentElement.lang==='ar'?'ميزة 3D غير متاحة على هالجهاز. اختَر الغرفة من الأزرار تحت.':'3D is not available on this device. Choose a room from the buttons below.'}
}
window.classoraStudioVisuals={world,board,tool,action,cleanup};