# Classora design refresh v243

This release builds on remote main a35a58b820bea330ab1875aeac7c8c812faa767e, preserving the newer membership role filtering, owner preview/cancel flow and settings changes.

- Removes the seasonal heritage mount, event promotion and event stylesheet from the application. Retires the standalone drawing page to the main site. Removes seasonal assets from SW precache. Existing saved drawings, purchases, learning history and other cultural curriculum content are not deleted.
- Appearance offers original and morning themes. A previously saved embroidery preference migrates to original, including standalone pages using the theme bridge. The motif is no longer created by theme scripts.
- Introduces shared ink/violet/gold and light palettes across home, settings, profile, chat, shop, membership and sign-in surfaces. New book/cube/orbit illustration is original SVG. Animation respects OS reduced motion and the in-app motion switch.
- Reorders existing hero/quick actions/announcements without cloning interactive controls; existing listeners and authorization stay authoritative. Review and quest panels share a desktop row and stack on phones.
- Completes the learning-home strings in eight languages, including teacher variants, navigation labels and last-lesson text. User names, messages, lesson contents and scores are not rewritten.
- Supports narrow screens, safe areas and existing keyboard viewport handling; native device verification remains necessary for device-specific issues.

Validation:
- `CLASSORA_TEST_DOM_MODULE=<linkedom esm entry> node tests/premium-refresh-v243.mjs`: locale coverage, theme migration, real exam button delegation, layout idempotence, event retirement and mobile/motion declarations.
- Parsed changed JavaScript, inline main modules and CSS. Regression tests for five-question missions, policy acceptance, member grants and profile effects.
- Browser checks after deployment: public subscription/sign-in pages. No acceptance of account Terms or private-account changes for QA.
