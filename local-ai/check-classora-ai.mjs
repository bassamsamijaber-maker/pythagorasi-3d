/* Run on the Windows PC that hosts Ollama. Prints no tokens or personal data. */
import {inspectModel} from './health.mjs';
const model=process.env.CLASSORA_AI_MODEL||'qwen2.5:3b';
const modelState=await inspectModel(model);
console.log('Classora AI connection check\n');
let passed=true;
if(modelState.modelAvailable)console.log('PASS 1/4: Ollama is running and the selected model is installed.');
else {
  passed=false;
  console.log(modelState.modelState==='model-missing'
    ?'FAIL 1/4: Selected model is missing. Check CLASSORA_AI_MODEL and run ollama list.'
    :'FAIL 1/4: Ollama is not reachable. Open the Ollama application, then run this check again.');
}
async function health(url){
  try{const response=await fetch(url,{signal:AbortSignal.timeout(10000),cache:'no-store'});if(!response.ok)return {ok:false,status:response.status};const data=await response.json();return {...data,ok:data?.ok===true&&data.service==='Classora Local AI'}}
  catch{return {ok:false}}
}
const local=await health('http://127.0.0.1:8765/health');
if(local.ok){console.log('PASS 2/4: Classora gateway is running.');if(local.protocol!==255)console.log('NOTE: Restart the gateway using the updated local-ai folder.');}
else {passed=false;console.log('FAIL 2/4: Gateway is not running. Open start-classora-ai.cmd and leave its window open.');}
const remote=await health('https://ai.classora.study/health');
if(remote.ok){console.log('PASS 3/4: The public gateway is reachable.');if(remote.protocol!==255)console.log('NOTE: The public gateway has not loaded the newest server version.');}
else {passed=false;console.log('FAIL 3/4: Public gateway is unreachable'+(remote.status?' (HTTP '+remote.status+')':'')+'. Check the existing Cloudflare Tunnel route to http://127.0.0.1:8765.');}
if(modelState.modelAvailable){
 console.log('Checking actual text generation (up to 90 seconds)...');
 try{
  const response=await fetch('http://127.0.0.1:11434/api/chat',{
   method:'POST',headers:{'Content-Type':'application/json'},signal:AbortSignal.timeout(90000),
   body:JSON.stringify({model,messages:[{role:'user',content:'Reply with one short greeting.'}],stream:false,options:{num_predict:64,temperature:0}})
  });
  const data=await response.json();
  if(!response.ok||!data?.message?.content?.trim())throw Error('no-answer');
  console.log('PASS 4/4: Model produced an answer.');
 }catch{passed=false;console.log('FAIL 4/4: Model could not generate an answer within 90 seconds. Check Ollama and available memory.');}
}else{passed=false;console.log('SKIP 4/4: Generation requires the installed model.');}
console.log('\n'+(passed?'Connection checks passed. Sign in to Classora, enable AI in Settings, and send a question.':'Fix the failed checks, then run this file again.'));
console.log('This check does not verify a signed-in website request or response quality.');
process.exitCode=passed?0:1;
