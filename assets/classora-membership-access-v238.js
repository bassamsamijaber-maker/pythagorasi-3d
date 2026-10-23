/* Pure resolver. Memberships come only from admin/backend-owned documents. */
export const FEATURES=Object.freeze(['focus','notes','planner','library','chatStyle']);
export function resolveMembership({uid,role,admin=false,grant=null,trial=null,now=Date.now()}){
 if(!uid||!['student','teacher'].includes(role))return {tier:'free',features:[],expiresAt:0};
 if(admin)return {tier:'premium',features:[...FEATURES],expiresAt:0,source:'admin'};
 const millis=v=>typeof v?.toMillis==='function'?v.toMillis():0;
 const valid=g=>g?.uid===uid&&g.revoked===false&&['plus','premium'].includes(g.tier)&&millis(g.expiresAt)>now&&(g.kind===role||(role==='teacher'&&['class','school'].includes(g.kind)));
 const sources=[['grant',grant],['trial',trial]].filter(([,g])=>valid(g));
 const features=new Set();let tier='free',expiresAt=0;
 for(const[source,g]of sources){
  const list=source==='grant'&&Array.isArray(g.features)?g.features:(g.tier==='premium'?FEATURES:FEATURES.filter(f=>!['library','chatStyle'].includes(f)));
  for(const f of list)if(FEATURES.includes(f))features.add(f);
  if(g.tier==='premium'||tier==='free')tier=g.tier;
  expiresAt=Math.max(expiresAt,millis(g.expiresAt));
 }
 return {tier,features:[...features],expiresAt,source:sources.map(x=>x[0]).join('+')};
}
