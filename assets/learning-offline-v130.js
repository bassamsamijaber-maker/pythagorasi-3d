export const UNIT_CACHE='classora-study-units-v130';
export function downloadedUnits(){try{return JSON.parse(localStorage.getItem('classora_downloaded_units_v130')||'{}')}catch{return {}}}
export async function downloadUnit(unit,onProgress=()=>{}){
 if(!globalThis.caches||!navigator.serviceWorker)throw Error('offline-unavailable');
 let readyTimer;try{await Promise.race([navigator.serviceWorker.ready,new Promise((_,reject)=>{readyTimer=setTimeout(()=>reject(Error('worker-not-ready')),12000)})])}finally{clearTimeout(readyTimer)}
 const response=await fetch('./assets/offline-manifest-v130.json',{cache:'no-store'});if(!response.ok)throw Error('manifest-unavailable');const manifest=await response.json();
 const cache=await caches.open(UNIT_CACHE);let done=0;
 for(const path of manifest.files){
  const url=new URL(path,location.href);if(url.origin!==location.origin)throw Error('invalid-package');
  if(!await cache.match(url.href)){const r=await fetch(url.href,{cache:'reload',signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('download-failed');await cache.put(url.href,r)}
  onProgress(++done,manifest.files.length);
 }
 const all=downloadedUnits();all[unit.id]={...unit,version:manifest.version,downloadedAt:Date.now()};localStorage.setItem('classora_downloaded_units_v130',JSON.stringify(all));return all[unit.id];
}
export async function removeUnit(id){const all=downloadedUnits();delete all[id];localStorage.setItem('classora_downloaded_units_v130',JSON.stringify(all));if(!Object.keys(all).length&&globalThis.caches)await caches.delete(UNIT_CACHE)}
