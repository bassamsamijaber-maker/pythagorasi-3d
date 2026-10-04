/* THREE is supplied by the host so the lab uses the existing renderer version. */
export function mountPHScene(host,THREE,onFallback){
 let renderer,observer,disposed=false;const resources=[];
 try{
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));host.append(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,.1,100);camera.position.set(4,3.8,7);camera.lookAt(0,.25,0);
  scene.add(new THREE.HemisphereLight(0xc9eaff,0x273046,3));const light=new THREE.DirectionalLight(0xffffff,4);light.position.set(4,6,4);scene.add(light);
  const group=new THREE.Group();scene.add(group);
  function mesh(geometry,material,x=0,y=0,z=0){resources.push(geometry,material);const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);group.add(m);return m}
  mesh(new THREE.CylinderGeometry(1.02,1.02,2,64,1,true),new THREE.MeshPhysicalMaterial({color:0xb9edff,transparent:true,opacity:.15,roughness:.1,side:THREE.DoubleSide,depthWrite:false}),-.9,.4,0);
  mesh(new THREE.CylinderGeometry(1.02,1.02,.06,64),new THREE.MeshStandardMaterial({color:0x7895b0,transparent:true,opacity:.45}),-.9,-.61,0);
  const rim=mesh(new THREE.TorusGeometry(1.02,.025,8,64),new THREE.MeshStandardMaterial({color:0xbdeeff}),-.9,1.4,0);rim.rotation.x=Math.PI/2;
  const liquid=mesh(new THREE.CylinderGeometry(.98,.98,1.25,64),new THREE.MeshStandardMaterial({color:0x22cc88,transparent:true,opacity:.82,roughness:.25}),-.9,.055,0);
  const scale=[];for(let i=0;i<15;i++){const col=new THREE.Color().setHSL(i*20/360,.78,.53);scale.push(mesh(new THREE.BoxGeometry(.34,.13,.45),new THREE.MeshStandardMaterial({color:col}),1.15,-.6+i*.14,0))}
  const marker=mesh(new THREE.ConeGeometry(.12,.3,3),new THREE.MeshStandardMaterial({color:0xffffff}),1.75,.38,0);marker.rotation.z=Math.PI/2;
  mesh(new THREE.CylinderGeometry(2.65,2.65,.12,64),new THREE.MeshStandardMaterial({color:0x132238,metalness:.35,roughness:.7}),0,-.74,0);
  function draw(){if(!disposed){renderer.render(scene,camera)}}
  function resize(){const w=Math.max(1,host.clientWidth),h=Math.max(240,Math.min(380,w*.75));renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();draw()}
  if(typeof ResizeObserver!=='undefined'){observer=new ResizeObserver(resize);observer.observe(host)}else window.addEventListener('resize',resize);
  let startX=0,startY=0,dragging=false;const canvas=renderer.domElement;canvas.setAttribute('aria-hidden','true');canvas.style.touchAction='pan-y';
  canvas.onpointerdown=e=>{dragging=true;startX=e.clientX;startY=group.rotation.y;canvas.setPointerCapture(e.pointerId)};
  canvas.onpointermove=e=>{if(dragging){group.rotation.y=startY+(e.clientX-startX)*.008;draw()}};canvas.onpointerup=canvas.onpointercancel=()=>dragging=false;
  resize();
  return {setPH(p){liquid.material.color.setHSL(p*20/360,.78,.53);marker.position.y=-.6+p*.14;draw()},dispose(){disposed=true;observer?.disconnect();window.removeEventListener('resize',resize);resources.forEach(r=>r.dispose());renderer.dispose();canvas.remove()}};
 }catch(e){renderer?.dispose();host.replaceChildren();onFallback?.(e);return {setPH(){},dispose(){}}}
}
