# Classora eight-language localization — V155

Supported UI locales: Arabic (ar), English (en), Spanish (es), Korean (ko), German (de), Italian (it), Hindi (hi), Turkish (tr).

## Verified coverage
- 474 curriculum lesson placements, representing 354 distinct English topic titles.
- All 354 topic titles have authored entries in every six extended-language dictionaries.
- Over 1,000 dictionary source keys per extended language, including common navigation, interactive lesson guidance, assessments, scientific labs, study tools, progress and student-facing messages.
- 487 literal bilingual label references in the reviewed educational JavaScript modules resolve to dictionary entries.
- Grade labels are formatted for each language, including Korean and Turkish ordering.
- Selected locale is respected in interactive mathematics, Arabic and English grammar, history, geography, study and shared tools. Exercises retain their original learning-language words when necessary to preserve educational correctness.
- Numeric progress messages and the ladder example have vetted pattern-specific translations; unknown personal content is left unchanged.
- Automated regression test: tests/full-language-coverage-v154.cjs.

## Still requiring translation or review
- Some long lesson-specific explanations and event descriptions in authored bilingual catalogues still use the English source when a translated paragraph is not available.
- Portions of generated question prompts, distractors, and answer explanations are not authored in all six extended languages. These must be reviewed together so answers remain correct.
- Remaining standalone help, support, privacy, and periodic-table passages need a page-by-page audit. Legal text must be professionally reviewed for accuracy.
- User-provided names, messages, passwords, and submissions should not be translated silently or sent to external translation APIs.

Full-site 100% translation is NOT claimed until all remaining authored strings, independent pages, generated content and live UI states are audited across every language and device.
