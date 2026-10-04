/* Hand-built Three.js pH scene; THREE is provided by the Classora host. */
export function mountPHScene(host,THREE,onFallback){
 let renderer,observer,disposed=false,frame=0;
 const resources=[];
 try{
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
  host.append(renderer.domElement);

  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(38,1,.1,100);
  camera.position.set(3.25,3.05,8.1);
  camera.lookAt(.15,.25,0);
  scene.add(new THREE.HemisphereLight(0xc9eaff,0x26314c,2.8));
  const key=new THREE.DirectionalLight(0xffffff,4.2);key.position.set(3.5,6,5);scene.add(key);
  const rimLight=new THREE.PointLight(0x51c9ff,13,9);rimLight.position.set(-2,2.7,1.4);scene.add(rimLight);

  const group=new THREE.Group();scene.add(group);
  function mesh(geometry,material,x=0,y=0,z=0){
   resources.push(geometry,material);
   const item=new THREE.Mesh(geometry,material);item.position.set(x,y,z);group.add(item);return item;
  }
  function textSprite(text,color="#e7f6ff"){
   const canvas=document.createElement("canvas");canvas.width=256;canvas.height=96;
   const ctx=canvas.getContext("2d");ctx.clearRect(0,0,256,96);
   ctx.font="800 42px system-ui, sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";
   ctx.shadowColor=color;ctx.shadowBlur=16;ctx.fillStyle=color;ctx.fillText(text,128,48);
   const texture=new THREE.CanvasTexture(canvas);resources.push(texture);
   const material=new THREE.SpriteMaterial({map:texture,transparent:true,depthWrite:false});resources.push(material);
   const sprite=new THREE.Sprite(material);group.add(sprite);return sprite;
  }

  // A clear glass beaker with a luminous, color-changing indicator solution.
  mesh(new THREE.CylinderGeometry(1.02,1.02,2,64,1,true),new THREE.MeshPhysicalMaterial({color:0xb9edff,transparent:true,opacity:.16,roughness:.12,metalness:.08,side:THREE.DoubleSide,depthWrite:false}),-.9,.4,0);
  mesh(new THREE.CylinderGeometry(1.02,1.02,.055,64),new THREE.MeshStandardMaterial({color:0x7895b0,transparent:true,opacity:.5,metalness:.25,roughness:.45}),-.9,-.61,0);
  const lip=mesh(new THREE.TorusGeometry(1.02,.035,10,72),new THREE.MeshStandardMaterial({color:0xbdeeff,metalness:.35,roughness:.2,emissive:0x143448}),-.9,1.4,0);lip.rotation.x=Math.PI/2;
  const liquidMaterial=new THREE.MeshPhysicalMaterial({color:0x22cc88,transparent:true,opacity:.78,roughness:.2,metalness:.02,clearcoat:.9,clearcoatRoughness:.08});
  mesh(new THREE.CylinderGeometry(.96,.96,1.24,64),liquidMaterial,-.9,.055,0);
  const surfaceMaterial=new THREE.MeshStandardMaterial({color:0x22cc88,transparent:true,opacity:.78,roughness:.18,metalness:.05,side:THREE.DoubleSide,emissive:0x062014});
  const surface=mesh(new THREE.CircleGeometry(.94,64),surfaceMaterial,-.9,.68,0);surface.rotation.x=-Math.PI/2;
  const rippleMaterial=new THREE.MeshBasicMaterial({color:0xa9fff0,transparent:true,opacity:.34,side:THREE.DoubleSide});
  const ripple=mesh(new THREE.TorusGeometry(.46,.012,8,56),rippleMaterial,-.9,.70,.01);ripple.rotation.x=Math.PI/2;

  const bubbles=[];
  for(let i=0;i<7;i++){
   const radius=.035+(i%3)*.012;
   const bubble=mesh(new THREE.SphereGeometry(radius,12,10),new THREE.MeshPhysicalMaterial({color:0xd8ffff,transparent:true,opacity:.55,roughness:.08,metalness:.08,clearcoat:1}),-.9+Math.sin(i*2.1)*.62,-.28+(i%4)*.23,Math.cos(i*1.7)*.62);
   bubbles.push({item:bubble,home:bubble.position.y,phase:i*1.4});
  }

  // A 15-step 3D pH ladder with number tags and an animated pointer.
  const scale=[];
  for(let i=0;i<=14;i++){
   const color=new THREE.Color().setHSL(i/14*.78,.78,.53);
   const block=mesh(new THREE.BoxGeometry(.39,.115,.48),new THREE.MeshStandardMaterial({color,metalness:.16,roughness:.34,emissive:color,emissiveIntensity:.08}),1.13,-.6+i*.14,0);
   block.userData.ph=i;scale.push(block);
   const tick=textSprite(String(i));tick.position.set(1.65,-.6+i*.14,.1);tick.scale.set(.27,.105,1);
  }
  const marker=mesh(new THREE.ConeGeometry(.13,.30,3),new THREE.MeshStandardMaterial({color:0xffffff,emissive:0x76dfff,emissiveIntensity:.55}),.78,.38,.12);
  marker.rotation.z=-Math.PI/2;
  const sideLabel=textSprite("pH", "#8fe8ff");sideLabel.position.set(1.15,1.68,.08);sideLabel.scale.set(.55,.20,1);
  const foot=mesh(new THREE.CylinderGeometry(2.7,2.82,.14,64),new THREE.MeshStandardMaterial({color:0x132238,metalness:.48,roughness:.5}),0,-.76,0);
  const footGlow=mesh(new THREE.TorusGeometry(2.55,.018,8,96),new THREE.MeshBasicMaterial({color:0x3978aa,transparent:true,opacity:.7}),0,-.675,0);footGlow.rotation.x=Math.PI/2;

  function render(){if(!disposed)renderer.render(scene,camera)}
  function resize(){
   const w=Math.max(1,host.clientWidth),h=Math.max(240,Math.min(380,w*.68));
   renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();render();
  }
  if(typeof ResizeObserver!=="undefined"){observer=new ResizeObserver(resize);observer.observe(host)}else window.addEventListener("resize",resize);
  let startX=0,startY=0,baseRotationX=0,baseRotationY=0,dragging=false;
  const canvas=renderer.domElement;canvas.setAttribute("aria-hidden","true");canvas.style.touchAction="pan-y";
  canvas.onpointerdown=e=>{dragging=true;startX=e.clientX;startY=e.clientY;baseRotationY=group.rotation.y;baseRotationX=group.rotation.x;canvas.setPointerCapture(e.pointerId)};
  canvas.onpointermove=e=>{if(dragging){group.rotation.y=baseRotationY+(e.clientX-startX)*.008;group.rotation.x=Math.max(-.35,Math.min(.35,baseRotationX+(e.clientY-startY)*.003));render()}};
  canvas.onpointerup=canvas.onpointercancel=()=>{dragging=false};
  const reducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  function animate(t){
   if(disposed)return;
   if(!reducedMotion&&!document.hidden){ripple.rotation.z=t*.00032;for(const b of bubbles)b.item.position.y=b.home+Math.sin(t*.0012+b.phase)*.045}
   render();frame=requestAnimationFrame(animate);
  }
  resize();frame=requestAnimationFrame(animate);
  return {
   setPH(value){
    const p=Math.max(0,Math.min(14,Math.round(value))),color=new THREE.Color().setHSL(p/14*.78,.78,.53);
    liquidMaterial.color.copy(color);surfaceMaterial.color.copy(color);surfaceMaterial.emissive.copy(color).multiplyScalar(.08);
    marker.position.y=-.6+p*.14;
    scale.forEach((block,i)=>{const active=i===p;block.material.emissiveIntensity=active?.36:.08;block.scale.setScalar(active?1.12:1)});
    render();
   },
   dispose(){disposed=true;cancelAnimationFrame(frame);observer?.disconnect();window.removeEventListener("resize",resize);resources.forEach(resource=>resource.dispose());renderer.dispose();canvas.remove()}
  };
 }catch(error){renderer?.dispose();host.replaceChildren();onFallback?.(error);return {setPH(){},dispose(){}}}
}
