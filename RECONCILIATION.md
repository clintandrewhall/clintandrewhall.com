# Reconciliation — Three Redesign Tracks

There are **three** parallel redesign efforts in this repo right now. This document maps them so a decision can be made about which is canonical, and what to carry forward from each. Written after reading all three in full.

> **TL;DR:** Two independent processes both landed on **Hanken Grotesk + an expressive display face + a warm-red accent + the "I make the web beautiful…" line as the hero** — that convergence is high-confidence signal. The real forks are **theme (dark vs light vs two-world)**, **exact accent (oxblood vs ember vs terracotta)**, and **display font (Newsreader vs Bricolage vs Hedvig)**. Both `.redesign` mockups also quietly **drift off two committed brand rules** (true-neutral surfaces; the oxblood accent) — that's the thing to decide consciously, not by accident.

---

## The three tracks

### Track 1 — In-`src` hero refinement (this session) · **shipping code**
Incremental elevation of the **live** hero, inside the real React Router + Linaria app. Scope: hero only; the rest of the site is untouched.
- **Theme:** dark photographic hero inside an otherwise light, **true-neutral** (chroma-0) site.
- **Type:** Newsreader (serif display) + **Hanken Grotesk** (sans UI/body) — Geist removed this session.
- **Accent:** **oxblood `#862121`** (the committed brand accent; the oxblood CTA rhymes with the red X in the photo).
- **Hero:** full-bleed `contain`-fit TEDx photo; tagline as **h1**, role ("Technical Lead & Senior UI Engineer") as serif **subtitle**; CTAs **"Selected work" / "More about me"**; pure-CSS entrance (no JS gate).
- **Status:** real, typechecks, documented in `HERO_REDESIGN_NOTES.md`. Not yet production-built.

### Track 2 — `.redesign/index.html` · "The Retrospective" · **static mockup**
A full-page, standalone HTML **career monograph**. Ambitious and complete, but not wired into the app.
- **Concept:** two worlds — **STAGE (dark ink)** and **WORKBENCH (paper)** — alternating per section.
- **Theme:** warm-tinted dark `#17120e` + warm-tinted paper `#f2f1ee`.
- **Accent:** **ember orange `#dd4a26`** (+ glow `#ff6a40`).
- **Type:** **Bricolage Grotesque** (display) + **Geist** (sans) + **Geist Mono** (data/labels).
- **System:** heavily **numbered / indexed** (01–04 in nav, kickers, index rail, work list) — deliberate "25 years, indexed" monograph device; mono spec-sheets ("field notes"), sticky-company timeline "spine", masonry references, a **sales CTA** ("Let's make something worth inspecting").
- **Hero:** full-bleed photo (`cover`, slow 18s zoom); **name as h1**, tagline as lede.

### Track 3 — `.redesign/v2.html` · "Daylight" · **static mockup**
Explicitly a **refinement of Track 2** ("No numbered scaffolding, no mono spec-sheets, no sales CTA — it's a playground and a portfolio"). Warmer, lighter, more personal. Also standalone HTML.
- **Theme:** mostly **light "Daylight"** (`#f4f2ee` paper) with **one** dark band (references, non-photographic ember-glow gradient).
- **Accent:** **terracotta `#b4482e`** (+ bright `#e58a6f` on dark).
- **Type:** **type-switcher prototype** — Hedvig Letters Serif (default) / **Hanken Grotesk** / Familjen Grotesk for display; **Hanken Grotesk body**; Geist for small meta.
- **Hero:** light, 2-column — text + a **portrait crop** (placeholder for a real portrait, currently the stage shot); tagline as **h1** with "beautiful" in accent; CTAs **"See the work" / "More about me"**.
- **Sections:** about (sticky lead + chips), work (**card grid** with images), career ("A journey, never a destination", logo timeline), words ("In good company"), **playful colophon** ("This site is a playground — view the source").
- **Craft:** sticky blur header, mobile hamburger, focus-visible rings, and a reveal **safety-net** (`setTimeout` reveals all if the observer never fires) — the most robust motion of the three.

---

## Side-by-side

| Dimension | Track 1 (in-`src`) | Track 2 (Retrospective) | Track 3 (Daylight) |
|---|---|---|---|
| **Status** | Shipping code (Linaria/React) | Static HTML mockup | Static HTML mockup |
| **Scope** | Hero only | Whole page | Whole page |
| **Theme** | Dark hero / true-neutral site | Two-world dark ↔ paper | Mostly light + 1 dark band |
| **Surfaces** | **Chroma-0 neutral** | Warm-tinted ink + paper | Warm-tinted paper |
| **Accent** | Oxblood `#862121` | Ember `#dd4a26` | Terracotta `#b4482e` |
| **Display font** | Newsreader (serif) | Bricolage Grotesque | Hedvig serif / Hanken / Familjen |
| **Body/UI font** | **Hanken Grotesk** | Geist + Geist Mono | **Hanken Grotesk** |
| **Hero headline** | Tagline as h1 | Name as h1 | Tagline as h1 |
| **Hero image** | Full-bleed `contain` | Full-bleed `cover` + zoom | Portrait crop in grid |
| **Primary CTA** | "Selected work" | (index rail) | "See the work" |
| **Numbered system** | No | Yes (core device) | No (rejected) |
| **Motion** | Pure-CSS entrance, no JS gate | IO reveals via `.js` class | IO reveals + safety-net |
| **Close** | — | Sales CTA | "View the source" colophon |

---

## Where they agree (high-confidence — treat as settled)

Independent processes converging is the strongest signal in the room:

1. **Hanken Grotesk** for the sans — chosen in Track 1 *and* Track 3. This is now well-supported.
2. **Expressive display + humanist-sans body** structure — Track 1 (Newsreader+Hanken) and Track 3-default (Hedvig+Hanken) are the same instinct. (Track 2 is the outlier with an all-grotesque, no-serif system.)
3. **"I make the web beautiful, on its surface and beneath."** is *the* hero line — all three feature it prominently.
4. **`cubic-bezier(0.16, 1, 0.3, 1)`** (ease-out-expo) is the motion curve everywhere (Track 1 added it as the `expo` token; both mockups use it as `--ease`).
5. **A warm red in the accent family** — all three, just at three different values.
6. **"More about me"** as the secondary CTA label — Track 1 and Track 3.
7. **Reveals must enhance an already-visible default** — all three honor reduced-motion and avoid blank-ship (Track 3's safety-net is the best implementation).

---

## Where they conflict (decisions needed)

1. **Theme direction (the big one).** Dark-hero-in-light-site (T1) vs two-world dark/light (T2) vs mostly-light "Daylight" (T3). This cascades into everything else.
2. **The accent value.** `#862121` oxblood (committed brand) vs `#dd4a26` ember vs `#b4482e` terracotta. All warm-red, but visibly different. Pick one and commit.
3. **Display typeface.** Newsreader (committed) vs Bricolage Grotesque vs Hedvig serif. (Body = Hanken is settled.)
4. **Geist.** Removed in Track 1 (user rejected it as "cold/default"); **still used in Track 2** (+ mono). Track 2's type system conflicts with that decision.
5. **Hero framing.** Full-bleed dramatic photo (T1/T2) vs portrait-in-grid (T3). T3's is a **placeholder for a real portrait** that doesn't exist yet.
6. **Primary CTA copy.** "Selected work" (T1 — user explicitly chose this) vs "See the work" (T3 — user explicitly *rejected* this earlier). Keep **"Selected work."**
7. **Voice / close.** Monograph + sales CTA (T2) vs playful "view the source" colophon (T3). PRODUCT.md's "inspectable architecture / site is the evidence" favors **T3's colophon**.

---

## My honest impressions

- **Both mockups are strong, complete, and genuinely useful** — full IA, real copy, real content wiring (they reference `../src/content/*` and `../public/images/portfolio/*`), motion, responsive, a11y. Even if neither visual direction is adopted wholesale, they are excellent **content + information-architecture references** that Track 1 (hero-only) doesn't have.
- **Track 3 ("Daylight") is the closest to a coherent whole** and the closest in spirit to where Track 1 landed (serif display + Hanken, tagline-as-h1, warm restraint). Its craft details (safety-net reveals, focus rings, sticky blur header, mobile nav) are production-minded. The **type switcher** is a smart way to keep the display-font decision open.
- **Track 2 ("Retrospective") is the boldest and most distinctive**, but it's also the biggest departure: an all-grotesque type system, a mono/numbered "indexed" device on every section, and it **re-introduces Geist** — which was just removed for feeling like a cold default. The numbered scaffolding is a known AI-tell *unless* the "25 years, indexed" concept is genuinely the brand — decide that on purpose.
- **⚠️ Both mockups quietly break two committed brand rules** (see `DESIGN.md`), and this is the most important thing to notice consciously:
  1. **True-Neutral Rule.** DESIGN.md commits to **chroma-0 surfaces** ("warmth comes from accent + type + imagery, not a warm-tinted body bg"). Both mockups use **warm-tinted paper** (`#f2f1ee`, `#f4f2ee`) — which is exactly the warm-neutral "paper/cream" default the brand guidance warns against. Not wrong, but it's a **reversal of a stated principle**, so make it deliberately.
  2. **One-Voice oxblood.** The committed accent is oxblood `#862121`; both mockups drift **warmer/oranger** (ember, terracotta). Pick the real accent and update DESIGN.md, or pull the mockups back to oxblood.
- **Neither mockup is wired into the app.** They're standalone HTML/CSS. Adopting either means **porting to the Linaria theme + React components** (tokens → `src/theme`, sections → `src/site/pages/home/*`), which is real work — Track 1's changes are already in that system.

---

## Suggested path

1. **Decide the theme fork first** (dark-refine vs Daylight-light vs two-world). Everything else follows.
2. **If a mockup wins:** treat it as the new **north-star comp**, then (a) reconcile it against DESIGN.md — either update the True-Neutral + oxblood rules on purpose, or pull the comp back onto them; (b) port it into `src/theme` + components; (c) fold in the settled wins (Hanken, expo, tagline hero, "Selected work"/"More about me", safety-net reveals).
3. **If Track 1 (in-`src`) stays canonical:** keep the mockups as **content/IA references** — their About copy, field notes, full timeline, references, and work lists are more complete than what's shipped, and worth harvesting section by section.
4. **Regardless:** carry the **convergent decisions** (Hanken, expo easing, tagline-as-hero, "More about me", visible-default reveals) into whatever wins — they're already agreed by two independent processes.

---

## Open decisions checklist

- [ ] Theme: dark-refine (T1) / Daylight-light (T3) / two-world (T2)?
- [ ] Accent: oxblood `#862121` / ember `#dd4a26` / terracotta `#b4482e`?
- [ ] Display font: Newsreader / Bricolage Grotesque / Hedvig serif? (Body = **Hanken**, settled.)
- [ ] Keep Geist anywhere (Track 2 uses it) or hold it removed?
- [ ] Hero: full-bleed photo or portrait-crop (needs a real portrait asset)?
- [ ] Update DESIGN.md's True-Neutral + oxblood rules, or hold the mockups to them?
- [ ] Canonical track = in-`src` refinement, or adopt/port a mockup?

---

### Cross-references
- `HERO_REDESIGN_NOTES.md` — full detail on the in-`src` (Track 1) hero work.
- `.redesign/index.html` — Track 2 "The Retrospective".
- `.redesign/v2.html` — Track 3 "Daylight".
- `DESIGN.md` / `PRODUCT.md` — the committed brand system the tracks should be judged against.

---

## Visual pass (rendered)

Both mockups were rendered across breakpoints (desktop 1440 + mobile 390). Screenshots are in the session scratchpad: `t2_retro_hero.png`, `t2_retro_mobile.png`, `t3_daylight_hero.png`, `t3_daylight_scroll.png`, `t3_daylight_mobile.png`.

- **Track 2 "Retrospective" (desktop):** delivers on its concept — dramatic dark stage, full-bleed photo, a very large Bricolage Grotesque "Clint Andrew Hall" with "Andrew" dropped to a light weight, ember-orange mono meta, and the numbered index rail. Confident and distinctive; reads as an editorial-brutalist monograph. Its hero is `100svh`.
- **Track 3 "Daylight" (desktop):** the more refined and cohesive of the two — light warm paper, an elegant Hedvig serif headline ("beautiful" in terracotta), a rounded portrait crop of the stage shot, Hanken body, pill CTAs, and a clean image **card grid** for projects. Structurally the closest to where the in-`src` work landed (serif display + Hanken body), just lighter/warmer.
- **⚠️ Mobile (both):** at 390px the display headlines **overflow and clip** under `overflow-x: hidden` ("…Andrew Ha[ll]" in T2; "surface and benea[th]" in T3). Both are **comps, not responsive-production** — the clamp maxes are too large for phones. Porting either would need the same responsive hardening the in-`src` hero already got (see the 360px CTA/headline fix in `HERO_REDESIGN_NOTES.md`).

**Visual verdict:** Track 2 is the bolder identity but the bigger brand departure (grotesque, Geist, ember, numbered); Track 3 is the safer, warmer, more coherent whole and the natural evolution of the in-`src` direction — if it can be reconciled with the True-Neutral and oxblood rules (or those rules are consciously changed).
