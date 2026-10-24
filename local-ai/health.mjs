/* Readiness checks never generate text and never accept a remote model URL. */
export async function inspectModel(model, request=fetch) {
  try {
    const response=await request('http://127.0.0.1:11434/api/tags',{signal:AbortSignal.timeout(2500)});
    if(!response.ok)throw Error('ollama-unavailable');
    const data=await response.json();
    if(!Array.isArray(data?.models))throw Error('invalid-model-list');
    const canonical=name=>String(name).includes(':')?String(name):String(name)+':latest';
    const available=data.models.some(row=>canonical(row?.name||row?.model||'')===canonical(model));
    return {modelAvailable:available,modelState:available?'available':'model-missing'};
  }catch{
    return {modelAvailable:false,modelState:'ollama-offline'};
  }
}
export function cachedModelInspector(model,request=fetch,clock=Date.now){
  let value,expires=0,pending;
  return async()=>{
    if(value&&clock()<expires)return value;
    if(pending)return pending;
    pending=inspectModel(model,request).then(result=>{value=result;expires=clock()+10000;return result}).finally(()=>{pending=null});
    return pending;
  };
}
