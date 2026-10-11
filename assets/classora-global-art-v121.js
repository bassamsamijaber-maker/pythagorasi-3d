/* Classora contextual art across real, existing views. No new navigation/buttons. */
import {classoraTopicArt} from './classora-topic-art-v120.js?v=121';
const $=id=>document.getElementById(id);
let frame=0;
function refresh(){
 frame=0;
 const hub=document.querySelector('.learning-hub'),subject=hub?.dataset.selectedSubject||'all';
 const lobby=$('platformLobby');
 if(lobby){
  const art=classoraTopicArt(subject, '');
  if(lobby.dataset.classoraGlobalArt!==subject){
   lobby.dataset.classoraGlobalArt=subject;
   lobby.style.setProperty('--classora-site-art',art);
  }
 }
 const exam=$('examSubject')?.value||'math',competition=$('compQuickSubject')?.value||'math',builder=$('scienceExamTopic')?.value||'science';
 const assessmentValue=val=>val.startsWith('curr:')?(window.classoraAssessmentTopics?.find(x=>x.value===val)||null):null;
 const examTopic=assessmentValue(exam),liveTopic=assessmentValue(competition),builderTopic=assessmentValue(builder);
 function context(value,topic){
  return [topic?.subject||(/science|periodic|atoms|acids/.test(value)?'science':/arabic|idafa/.test(value)?'arabic':/equations|pythag|mixed/.test(value)?'math':'all'),topic?.title||value];
 }
 const [es,et]=context(exam,examTopic),[ls,lt]=context(competition,liveTopic),[bs,bt]=context(builder,builderTopic);
 const examBox=$('examModal')?.querySelector('.modalbox');
 if(examBox){
  const choice=$('examBuilder')&&!$('examBuilder').classList.contains('hidden')?bs+'|'+bt:es+'|'+et;
  if(examBox.dataset.classoraArtKey!==choice){
   examBox.dataset.classoraArtKey=choice;
   examBox.style.setProperty('--classora-panel-art',classoraTopicArt(choice.split('|')[0],choice.split('|')[1]));
  }
 }
 const liveBox=$('competitionModal')?.querySelector('.modalbox');
 if(liveBox){
  const choice=ls+'|'+lt;
  if(liveBox.dataset.classoraArtKey!==choice){
   liveBox.dataset.classoraArtKey=choice;liveBox.style.setProperty('--classora-panel-art',classoraTopicArt(ls,lt));
  }
 }
 const cards=[['settingsModal','all'],['adminPanel','science'],['classModal','english']];
 for(const [id,kind] of cards){
  const el=$(id)?.querySelector('.modalbox');if(el&&!el.dataset.classoraArtKey){
   el.dataset.classoraArtKey=kind;el.style.setProperty('--classora-panel-art',classoraTopicArt(kind,''));
  }
 }
 const grade=$('classoraCurriculumModal');
 if(grade?.classList.contains('open'))document.body.dataset.classoraSubjectContext=grade.dataset.subject||'all';
 else document.body.dataset.classoraSubjectContext=subject;
}
function schedule(){if(frame)return;frame=requestAnimationFrame(refresh)}
document.addEventListener('change',e=>{if(['examSubject','compQuickSubject','scienceExamTopic'].includes(e.target.id))schedule()});
document.addEventListener('classora:math-context',schedule);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule()});
window.addEventListener('load',schedule);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
setInterval(()=>{if(!document.hidden)window.classoraHomeV112?.refresh?.()},60*60*1000);
