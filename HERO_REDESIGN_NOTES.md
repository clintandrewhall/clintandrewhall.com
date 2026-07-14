# Hero Redesign — Session Handoff Notes

Working notes from an `/impeccable` session redesigning the homepage **hero** on the `vite` branch. Written so the work can continue in Claude Code Desktop.

---

## 1. Goal

Redesign / elevate the homepage hero (`src/site/pages/home/hero/`). It's a full-viewport, drench-dark photographic hero built on the TEDx speaking photo. Register: **brand** (design is the product). Audience: time-pressed hiring managers/recruiters.

**Core creative thesis:** the TEDx photo already contains the brand — the monumental **red X** and oxblood stage curtains sit on `#862121`, the site's oxblood accent. So the single oxblood UI element on the fold (the primary CTA) is made to *rhyme* with the red X in the photograph, tying the accent to the image instead of competing with it.

---

## 2. What was built (all shipped, verified)

### Composition
- Formalized the "accidental letterbox" into an intentional **two-field "stage as frame"**: photo anchored left/top (`object-fit: contain`, its baked-in negative space carrying the type), a refined dark scrim (bottom-rise on portrait; slight-diagonal `100deg` sweep on landscape) seating the type in the dark field.
- Full `100dvh`, container-query driven (`container-name: hero`).

### Copy (current, live)
- **h1** (Newsreader serif, display bold, two line-spans): `I make the web beautiful, / on its surface and beneath.`
- **subtitle** (`<p>` in `<hgroup>`, **Newsreader serif** regular, near-white): `Technical Lead & Senior UI Engineer`
- **CTAs**: `Selected work` (oxblood-filled primary — rhymes with the red X) + `More about me` (ghost secondary). Stack full-width on phones (`< comfortable` = 630px), side-by-side above.
- **alt text**: `Clint Andrew Hall mid-talk on a TEDx stage, beside a towering red X`

### Motion — pure-CSS entrance (no JS gate)
- Single clean fade+rise entrance, staggered (image settle → headline → subtitle → CTAs → social).
- **Hidden start state comes from each keyframe's `0%` under `animation-fill-mode: both`**, present from the first server paint → fades in exactly **once**, no "appears-then-fades" flash, no hydration/`data-play` gate.
- Reduced motion drops the animation via `@media (prefers-reduced-motion: no-preference)`; a non-animating renderer just shows the visible resting state (never blank).
- Added `expo` easing + `entrance` (1.1s) duration tokens to the theme.

### Typography system change (site-wide)
- Swapped the UI/body **sans from Geist → Hanken Grotesk** (humanist grotesque). Reason: Geist read as a cold/geometric "default" that clashed with Newsreader's warmth; Hanken shares the warmth. Geist package removed.

---

## 3. Files changed

| File | Change |
|---|---|
| `src/theme/motion.ts` | Added `expo` easing (`cubic-bezier(0.16,1,0.3,1)`) + `entrance` duration (`1.1s`) |
| `src/site/pages/home/hero/hero.tsx` | Simplified — removed the JS `useMotionPreferences` motion gate |
| `src/site/pages/home/hero/static_hero.tsx` | Removed `play`/`data-play`; upgraded alt text |
| `src/site/pages/home/hero/static_hero.styles.ts` | Two-field composition, refined scrim, `@keyframes heroImageSettle`/`heroRiseIn`, pure-CSS autoplay entrance on image + social |
| `src/site/pages/home/hero/hero_header.tsx` | New copy, line-span headline, differentiated CTAs |
| `src/site/pages/home/hero/hero_header.styles.ts` | Serif subtitle (near-white), oxblood primary CTA (`ctaPrimary`), phone-stacked CTAs, pure-CSS `enter` |
| `src/theme/fonts.css` | `@font-face` Geist → Hanken Grotesk variable woff2 |
| `src/theme/font/sans_serif.ts` | family stack → `'Hanken Grotesk', system-ui, …` |
| `DESIGN.md` | Geist → Hanken Grotesk everywhere + rationale (humanist warmth) |
| `package.json` / yarn | `+ @fontsource-variable/hanken-grotesk`, `- @fontsource-variable/geist` |

Also written to project memory (`.claude/.../memory/`): `type-taste`, `evaluate-with-visual-comparisons`, `entrance-motion-no-js-gate`.

---

## 4. Feedback rounds (how we got here)

1. **First build** rejected: "typography feels off" + "page loads, type loads, then a fade-in of content."
   - Fixed the fade (JS-hydration-gated reveal → pure-CSS, hidden-from-first-paint).
   - Subtitle moved from **gray Geist sans → Newsreader serif** (the sans read like a fallback).
2. **"Still feel like the sans-serif is a poor match."**
   - Diagnosed: Geist is a cold/geometric tech sans; no shared voice with Newsreader.
   - Built side-by-side font comparisons (rendered HTML screenshots) of Geist / Hanken Grotesk / Libre Franklin / Schibsted Grotesk, then Hanken vs Schibsted in reading context.
   - User chose **Hanken Grotesk** ("by a nose, based on the paragraph text"). Wired in site-wide.
3. **"Double-check the body copy — I'm seeing a lot of serif there."** → led to the open questions below.

---

## 5. ⚠️ Important correction — the real type split

I earlier claimed "the sans carries the body reading text." **That was wrong.** Actual split:

- **Newsreader (serif)** carries **long-form reading copy**, by design (DESIGN.md: *"Prose Font: Newsreader for long-form About and article reading"*):
  - About **summary** + work-block **descriptions** (`about.styles.ts` → `serif.regular`)
  - Timeline **role descriptions**, **references/quotes** (`person.styles`), portfolio **article bodies** (`portfolio_entry_markdown`)
- **Hanken (sans)** carries the **UI/chrome layer only**: nav, buttons, section kickers, work-block **subheads**, card titles, metadata, Medium items, stats labels.

So the sans does **not** carry long paragraphs — meaning the "readability over long body" rationale that tipped the Hanken-vs-Schibsted decision was aimed at the wrong layer.

---

## 6. Open questions (where we stopped — user's call)

1. **Reading prose:** keep it **Newsreader serif** (the documented editorial intent — elegant for long-form) or move the body copy to the **sans**? ("Seeing a lot of serif" may be exactly right, or not to taste.)
2. **Sans choice revisited:** since the sans is really **UI-chrome-only** (short strings, not paragraphs), the "fatigue over paragraphs" worry that favored Hanken doesn't apply. **Schibsted Grotesk** (more character) is back on the table for the chrome role if desired. Hanken is still fine.

---

## 7. State / verification

- `yarn typecheck` — **passes**.
- Dev server: the original was on `:5173`; a fresh one was started on **`:5174`** during the session (5173 died mid-session, unrelated to edits). Restart cleanly as needed.
- **`yarn build` was NOT run** after the font swap — it runs `yarn clean` and would disrupt a running dev server. Recommend running it once as the final prod check (validates the Hanken woff2 bundles; the path mirrors the working Geist pattern, so risk is low).
- Screenshots verified across desktop 1440 / laptop 1280 / tablet 834 / mobile 390 / narrow 360. Fixed a real 360px **CTA overflow** bug (CTAs now stack full-width below 630px).
- Comparison fixtures live in the session scratchpad (`font_compare.html`, `font_compare2.html`) — throwaway, not in the repo.

---

## 8. Suggested next steps

1. Decide the two open questions in §6 (serif prose vs sans; confirm/revisit Hanken).
2. If prose moves to sans, update: `about.styles.ts`, `timeline_item.styles.ts`, `person.styles.ts`, `portfolio_entry_markdown.styles.ts`, `portfolio_entry_header.styles.ts` (swap `serif.regular` → `sansSerif.*`), and DESIGN.md.
3. Run `yarn build` as the final production check.
4. Scroll About/Career on the running site to judge Hanken (chrome) + Newsreader (prose) together in situ.
