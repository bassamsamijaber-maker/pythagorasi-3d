# Classora learning studios, v119

The existing grade 7–10 catalog is preserved. Its 90 mathematics entries now use 59 topic definitions; 26 geometry entries move into a separate Geometry subject, keeping their original IDs, bookmarks and progress. The other subjects, authentication, teacher services, intro and bottom dock are retained.

## Teaching approach and sources

The teaching sequence is exploration → short rule → worked example with the current inputs → topic-specific practice. Explanations, examples, models, code and artwork are original Classora work. This release references public publisher contents and activities; it does not reproduce book pages or claim to be a complete edition-specific Mishbetzet course. Existing grades and their requested topics remain the scope. The grade 10 catalog is foundational coverage rather than a complete 3/4/5-unit course.

Primary reference pages reviewed:

- Mishbetzet grade 7: https://mishbetzet.co.il/?id=553
- Grade 7 digital activities: https://mishbetzet.co.il/?id=564 — substitution, angle construction, triangle angle sums, area and cuboid nets.
- Grade 8: https://www.mishbetzet.co.il/?id=143
- Grade 8 activities: https://www.mishbetzet.co.il/?id=467 — slope, intercepts, function signs, similarity and Pythagoras.
- Grade 9: https://www.mishbetzet.co.il/?id=144
- Grade 10 four-unit references: https://mishbetzet.co.il/?id=389
- Arabic grammar reference index: https://learning.aljazeera.net/ar/grammar
- Subject/doer: https://learning.aljazeera.net/ar/node/19675
- Nominal subject/predicate: https://learning.aljazeera.net/ar/node/19682
- Iḍāfa: https://learning.aljazeera.net/ar/node/19501
- Categorical negation: https://learning.aljazeera.net/ar/node/19642
- Distinguishing fixed and accusative lā constructions: https://learning.aljazeera.net/ar/node/473
- Number agreement: https://learning.aljazeera.net/es/node/19761
- Arabic grade 7–9 curriculum reference: https://meyda.education.gov.il/files/Mazkirut_Pedagogit/ArabicToArabs/curriculum/Minhaj_arabic_7_9_february_2014.pdf

## Models and language

Math models use numerical 3D projection into SVG so they work without WebGL. Coordinate graphs remain mathematical planes; cuboids, unit volumes, tiles and bars have real depth. Rotation changes the view, not the answer. Invalid and degenerate cases are identified instead of producing invalid numeric output. Models share primitives where mathematically appropriate but use the current topic's geometry and calculations.

Arabic models visualize syntactic relationships with raised word tiles, agreement links, clause containment, tense progression, derivation and before/after examples. These are grammatical diagrams, not physical simulations. Arabic examples stay in Arabic in both locales; all instructional UI, rules and role descriptions are bilingual, with English sentence meanings. Only curated examples are parsed. There is no claim to automatically parse arbitrary user sentences. Finite grammar question banks advertise their actual unique question counts.

The calculator uses a bounded expression parser, not eval. It supports keyboard input, parentheses, powers, roots, trigonometry, degrees/radians, logarithms, percentages, Ans and a session-local history. Its input is retained between math and geometry tabs.

## Verification

Run pure calculations, model, question, catalog and parser checks:

    node tests/studio-v119.mjs

Run DOM interaction checks with jsdom installed in a temporary dependency directory:

    CLASSORA_TEST_NODE_MODULES=/path/to/node_modules node tests/studio-dom-v119.mjs

Coverage includes all 90 mathematics entries and all existing Arabic titles in both languages, stable IDs and legacy geometry routes, live controls, actual quiz answers, guest gates, passive-voice transformation and calculator persistence. Checks do not exercise real Firebase teacher accounts or remote competition sessions.
