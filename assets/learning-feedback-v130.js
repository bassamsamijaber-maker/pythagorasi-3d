export function answerFeedback(q,selected,language='ar'){
 const en=language==='en',correct=String(selected)===String(q.answer),why=String(q.explanation||'');
 return correct?(en?'Correct. ':'صحيح. ')+why:(en?`You chose “${selected}”. The answer is “${q.answer}”. Why: `:`اخترت «${selected}». الإجابة «${q.answer}». السبب: `)+why;
}
