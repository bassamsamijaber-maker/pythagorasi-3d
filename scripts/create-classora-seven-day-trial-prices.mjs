/* Classora Paddle Live TRIAL price creator — operator-run only.
 * Does not open checkout, charge customers, or store an API secret.
 * Node 20+. Run: node scripts/create-classora-seven-day-trial-prices.mjs
 * Then: PADDLE_LIVE_API_KEY set privately; node ... --apply
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";
import {fileURLToPath} from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const catalogPath=path.join(root,"assets/classora-paddle-live-catalog.json");
const output=path.join(root,"assets/classora-paddle-live-trial-ids.json");
const base=JSON.parse(await fs.readFile(catalogPath,"utf8"));
if(base.environment!=="live"||base.currency!=="ILS")throw Error("Expected Paddle Live ILS catalog");
const keys=["student_plus","student_premium","teacher_plus","teacher_premium","class_plus","class_premium","school_plus","school_premium","extra_student","extra_teacher"];
const entries=keys.map(key=>{
 const p=base.products[key],row=p?.monthly;
 if(!p||!row||!/^pro_[a-z0-9]{26}$/.test(p.productId)||!/^pri_[a-z0-9]{26}$/.test(row.priceId))throw Error("Bad catalog "+key);
 const cents=String(Math.round(row.amountIls*100));
 if(Math.abs(Number(cents)/100-row.amountIls)>0.001)throw Error("Amount rounded unexpectedly");
 return {key,productId:p.productId,originalMonthlyPriceId:row.priceId,
  currency:"ILS",minorUnits:cents,quantity:row.quantity,marker:"Classora trial 7 days card required: "+key};
});
console.log("Classora seven-day card-required free trial (monthly only)");
for(const x of entries)console.log(x.key.padEnd(18),("₪"+(Number(x.minorUnits)/100).toFixed(2)).padEnd(10),"after 7 days");
console.log("Annual prices are NOT changed. No checkout is activated by this script.");
if(!process.argv.includes("--apply")){console.log("PREVIEW ONLY: no API requests or changes made.");process.exit(0);}
const key=process.env.PADDLE_LIVE_API_KEY||"";
if(!/^pdl_live_apikey_/.test(key))throw Error("Provide a Paddle Live API secret in PADDLE_LIVE_API_KEY on your own machine, never in code, chat or GitHub.");
const rl=readline.createInterface({input:process.stdin,output:process.stdout});
const confirmation=await rl.question("Type CREATE 7 DAY TRIAL PRICES to continue: ");
rl.close();
if(confirmation!=="CREATE 7 DAY TRIAL PRICES")throw Error("Cancelled");
async function api(method,uri,data){
 const response=await fetch("https://api.paddle.com"+uri,{method,
  headers:{Authorization:"Bearer "+key,"Content-Type":"application/json"},
  body:data?JSON.stringify(data):undefined});
 let body;try{body=await response.json()}catch{body={}};
 if(!response.ok)throw Error("Paddle "+response.status+": "+JSON.stringify(body.error||body).slice(0,400));
 return body;
}
async function existingPrices(productId){
 let cursor=null,result=[];
 for(let n=0;n<30;n++){
  const u=new URLSearchParams({product_id:productId,per_page:"100"});
  if(cursor)u.set("after",cursor);
  const response=await api("GET","/prices?"+u.toString());
  result.push(...(response.data||[]));
  if(!response.meta?.pagination?.has_more)break;
  const next=response.meta.pagination.next;
  const after=next?new URL(next,"https://api.paddle.com").searchParams.get("after"):null;
  if(!after||after===cursor)throw Error("Paddle pagination could not advance");
  cursor=after;
 }
 return result;
}
let results={environment:"live",currency:"ILS",durationDays:7,requiresPaymentMethod:true,createdAt:new Date().toISOString(),monthly:{}};
try{const saved=JSON.parse(await fs.readFile(output,"utf8"));if(saved.environment==="live")results=saved;}catch{}
for(const e of entries){
 if(results.monthly[e.key]?.trialPriceId){console.log("KEEP ",e.key,results.monthly[e.key].trialPriceId);continue;}
 const remote=await existingPrices(e.productId);
 let match=remote.find(x=>x.description===e.marker&&x.status==="active"&&x.trial_period?.frequency===7&&
  x.trial_period?.interval==="day"&&x.trial_period?.requires_payment_method!==false&&
  x.trial_period?.unit_price==null&&x.unit_price?.amount===e.minorUnits&&x.unit_price?.currency_code==="ILS");
 if(!match){
  const request={description:e.marker,name:"Monthly — 7-day free trial",product_id:e.productId,
   unit_price:{amount:e.minorUnits,currency_code:"ILS"},
   billing_cycle:{interval:"month",frequency:1},
   trial_period:{interval:"day",frequency:7,requires_payment_method:true},
   tax_mode:"account_setting",quantity:{minimum:e.quantity.min||1,maximum:e.quantity.max||1}};
  match=(await api("POST","/prices",request)).data;
  console.log("CREATE",e.key,match.id);
 }else console.log("FOUND ",e.key,match.id);
 results.monthly[e.key]={trialPriceId:match.id,originalMonthlyPriceId:e.originalMonthlyPriceId,
  minorUnits:e.minorUnits};
 await fs.writeFile(output,JSON.stringify(results,null,2)+"\n",{mode:0o600});
}
console.log("SUCCESS. Saved",output);
console.log("NOT LIVE CHECKOUT: hook up verified Paddle webhooks and trial price IDs separately.");
