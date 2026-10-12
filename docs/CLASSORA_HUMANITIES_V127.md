# English and history studios

Extends the existing curriculum without changing topic IDs, roles or the recent navigation, calculator, legal and flashcard updates.

## Scope

- English: all 119 grade-specific curriculum entries in grades 7–10, backed by 85 recognized topic titles. Original bilingual rule explanations, three curated examples/questions per lesson, an optional Arabic translation, annotated sentence pieces, sentence reconstruction and topic-specific conceptual diagrams.
- History: all 32 existing entries in grades 7–9. Dated milestones, selectable timeline, context/consequence view, original bilingual summaries and five questions per lesson. Grade 10 has no history curriculum in the existing data; this release does not invent one.
- The same reviewed banks feed practice, exams and teacher competitions. Counts stay within the finite bank; requests exceeding the bank are rejected by the existing assessment guard. The new questions are general review, not separate validated difficulty banks.
- Existing flashcards and the study assistant use the new explanations through `curriculumTopicGuide`.

## Educational limits

Visuals are conceptual CSS depth diagrams, not reconstructed historical sites. Timeline spacing is ordinal, not a scale of elapsed time. English timelines highlight a broad time reference; notes explain perfect forms and unreal time. Sentence reconstruction asks learners to reproduce a displayed example and does not judge arbitrary free-form writing. Curated examples avoid invalid automatic word substitutions.

History distinguishes chronology from causation, includes Indigenous presence in the Americas, and avoids treating minority communities as having uniform experiences. Sources are linked in each lesson: British Council LearnEnglish for grammar; museums, university resources and historical archives for history. Content and examples are original, not copied exercises.

## Verification

`CLASSORA_TEST_NODE_MODULES=/tmp/classora-test/node_modules node tests/humanities-v127.mjs`

Checks 302 Arabic/English lesson mounts, 1,034 question cases, full existing curriculum coverage, unique answers/options, bank limits, dates in order, guest gates, translation toggle, reconstruction, live event selection, and exam/competition metadata. Browser QA covers the deployed guest learning interface. Authenticated Firebase classroom delivery is not tested with a real teacher/student account.

The service-worker cache and all changed module imports are advanced together to version 127. Release metadata is synchronized.
