---
name: Clint Andrew Hall
description: Personal portfolio where interface craft is the hiring argument—warm, confident, and inspectable.
colors:
  ink: "#0D0A0B"
  accent: "#862121"
  link: "#862121"
  muted: "#5f5f5f"
  dim: "#999999"
  light: "#FFFFFF"
  light-accent: "#CCCCCC"
  surface: "#FFFFFF"
  surface-muted: "#F1F1F1"
  surface-muted-strong: "#E9E9E9"
  inverse: "#000000"
  inverse-muted: "#404040"
  shade: "#C9C9C9"
  border-separator: "#E5E5E5"
  border-outline: "#7F7F7F"
typography:
  display:
    fontFamily: "'Hedvig Letters Serif', ui-serif, 'Times New Roman', Times, serif"
    fontSize: "clamp(1.8662rem, 1.3212rem + 2.7252vw, 3.4332rem)"
    fontWeight: 400
    lineHeight: "clamp(2.0528rem, 1.4533rem + 2.9977vw, 3.7765rem)"
    letterSpacing: "normal"
  headline:
    fontFamily: "'Hedvig Letters Serif', ui-serif, 'Times New Roman', Times, serif"
    fontSize: "clamp(1.5552rem, 1.1408rem + 2.072vw, 2.7466rem)"
    fontWeight: 400
    lineHeight: "clamp(1.8662rem, 1.3212rem + 2.7252vw, 3.4332rem)"
    letterSpacing: "normal"
  title:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.08rem, 0.8442rem + 1.1788vw, 1.7578rem)"
    fontWeight: 500
    lineHeight: "clamp(1.6875rem, 1.3832rem + 1.5217vw, 2.5625rem)"
    letterSpacing: "normal"
  body:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(0.9rem, 0.7239rem + 0.8804vw, 1.4063rem)"
    fontWeight: 400
    lineHeight: "clamp(1.6875rem, 1.3832rem + 1.5217vw, 2.5625rem)"
    letterSpacing: "normal"
  label:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(0.625rem, 0.5293rem + 0.4783vw, 0.9rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "calc(0.625rem * 0.25)"
rounded:
  sm: "4px"
  md: "8px"
  pill: "999px"
  full: "50%"
spacing:
  step-3: "clamp(0.75rem, 0.6196rem + 0.6522vw, 1.125rem)"
  step-4: "clamp(0.9375rem, 0.7636rem + 0.8696vw, 1.4375rem)"
  step-7: "clamp(1.5rem, 1.2391rem + 1.3043vw, 2.25rem)"
  step-9: "clamp(1.875rem, 1.5489rem + 1.6304vw, 2.8125rem)"
components:
  button-primary:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.light}"
    rounded: "{rounded.md}"
    padding: "clamp(0.9375rem, 0.7636rem + 0.8696vw, 1.4375rem) clamp(1.875rem, 1.5489rem + 1.6304vw, 2.8125rem)"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.light}"
    rounded: "{rounded.md}"
    padding: "clamp(0.9375rem, 0.7636rem + 0.8696vw, 1.4375rem) clamp(1.875rem, 1.5489rem + 1.6304vw, 2.8125rem)"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.light}"
    rounded: "{rounded.sm}"
    padding: "clamp(0.75rem, 0.6196rem + 0.6522vw, 1.125rem) clamp(0.9375rem, 0.7636rem + 0.8696vw, 1.4375rem)"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "clamp(0.75rem, 0.6196rem + 0.6522vw, 1.125rem) clamp(0.9375rem, 0.7636rem + 0.8696vw, 1.4375rem)"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.light}"
    typography: "{typography.label}"
---

# Design System: Clint Andrew Hall

## Overview

**Creative North Star: "The Craft Portfolio"**

This system treats the browser as proof of senior UI engineering—not a template wrapper around a PDF résumé. Typography carries warmth (Hedvig Letters Serif display voice), structure carries confidence (Hanken Grotesk UI rhythm), and the oxblood accent appears rarely enough to feel intentional. Surfaces stay true neutral (chroma 0 white and gray ramps), letting photography, portfolio imagery, and the accent carry personality instead of a warm-tinted body background.

The site rejects generic SaaS landing grammar, flashy dev-portfolio theatrics, résumé-as-webpage density, and startup hype aesthetics (per PRODUCT.md). Motion is responsive, not choreographed: state transitions and scroll-aware navigation, wired through theme motion tokens and `useMotionPreferences`. The repo is part of the brand—Linaria discipline, Utopia fluid scales, and inspectable component patterns should match what visitors see.

**Key Characteristics:**

- Restrained palette: true neutrals + oxblood accent used sparingly on links, section labels, and primary-button hover
- Serif display (Hedvig Letters Serif, single-weight) + humanist sans UI (Hanken Grotesk): a warm, readable grotesque chosen over a cold geometric/tech sans so the sans shares the serif's warmth rather than reading as a default
- Utopia fluid type and spacing from 320px–1240px; 12-column grid capped at 74rem
- Tonal layering over decorative shadows; shadows reserved for interactive lift (buttons, portfolio overlays)
- Uppercase tracked section labels as the one deliberate kicker system—not eyebrow kickers on every block
- WCAG 2.1 AA contrast and first-class reduced-motion behavior

## Colors

A restrained strategy: tinted neutrals at chroma 0 with one committed accent. Warmth comes from typography, photography, and copy—not from cream body backgrounds.

### Primary

- **Deep Oxblood** (#862121): Accent for inline links, section kicker labels, primary-button hover fill, and focus outlines. Rare enough to read as voice, not decoration.

### Neutral

- **Ink** (#0D0A0B): Primary dark text on light surfaces; hover state for global anchor treatment.
- **Muted Gray** (#5f5f5f): Long-form body copy on light sections (About prose).
- **Dim Gray** (#999999): De-emphasized metadata (portfolio tag links at rest).
- **True White** (#FFFFFF): Primary surface, hero secondary-button hover fill, nav underline accent.
- **Surface Muted** (#F1F1F1): Subtle section differentiation.
- **Surface Muted Strong** (#E9E9E9): Stronger neutral step for dividers and panels.
- **Inverse Black** (#000000): Fixed header when scrolled, hero backdrop, primary buttons, footer band, mobile nav drawer.
- **Inverse Muted** (#404040): Dark-surface secondary tone.
- **Shade** (#C9C9C9): Mid neutral for borders and inactive chrome.
- **Light Accent** (#CCCCCC): Footer link hover on inverse band.

### Named Rules

**The One Voice Rule.** The oxblood accent occupies ≤10% of any screen. Its scarcity is the brand; spreading it across backgrounds, icons, and eyebrows dilutes hiring credibility into template noise.

**The True Neutral Rule.** Body backgrounds stay at chroma 0 (white and gray ramps). Warmth is carried by accent, serif display type, and photography—not by cream, sand, or parchment tints.

## Typography

**Display Font:** Hedvig Letters Serif (ui-serif fallback), single weight (400), optical size axis at maximum (opsz 24) for hero and section titles  
**Body Font:** Hanken Grotesk (humanist grotesque, system-ui fallback stack) for navigation, labels, buttons, body copy, and UI chrome  
**Prose Font:** Hedvig Letters Serif at text optical size (opsz 12) for long-form About and article reading

**Character:** Literary calm in display lines—confidence through set width and size, not weight; precise, technical sans rhythm in navigation and controls. The pairing says "engineer who cares about type," not "generic developer portfolio."

### Hierarchy

- **Display** (400, fluid clamp up to ~3.4rem / step5–step7, tighter line-height ~1.1): Hero h1, full-bleed image overlays with text-shadow for legibility
- **Headline** (400, step4–step5): Section titles centered in grid
- **Title** (500–600 Hanken, step2): In-section subheads (About work blocks)
- **Body** (400, step1, line-height via spacing step8 ≈ 65–75ch rhythm): About summary and content; muted color on long prose
- **Label** (600–800, stepN1–step1, uppercase, positive letter-spacing): Section kicker names, navigation, button caps

### Named Rules

**The Single Weight Rule.** Hedvig Letters Serif ships one weight. Display hierarchy comes from size, color, and space—never `font-weight` above 400 on the serif, and never faux bold. If an element needs weight-based emphasis, it belongs to Hanken, not the serif.

**The Optical Size Rule.** Hedvig display styles use the top of the optical size axis (opsz 24); long-form text uses opsz 12. Do not flatten both to a single optical size—it collapses the editorial/engineering contrast.

**The Balance Rule.** Apply `text-wrap: balance` to h1–h3 in new work; long About prose uses comfortable line length via grid inset (`byOne` / `byTwo`), not edge-to-edge measure.

## Elevation

This system is **flat by default**. Depth comes from photography, full-bleed hero gradients, inverse footer bands, and portfolio tile scrims—not from ever-present card shadows. Shadows appear as **state responses**: button hover lift, portfolio hover overlay darkening, and the GitHub corner's playful wave.

### Shadow Vocabulary

- **Tinted dark rest** (`rgba(0,0,0,0.18) 0 1px 2px, rgba(0,0,0,0.12) 0 2px 6px`): Primary and icon buttons at rest
- **Tinted dark hover** (deeper multi-layer stack): Primary button hover, slight `translateY(-1px)`
- **Portfolio scrim** (linear gradient + `opacity: 0.4` base, `0.8` on hover): Image tiles; text revealed on interaction
- **Hero legibility gradient** (transparent → 45% → 85% black): Static hero content panel over photography

### Named Rules

**The Flat Surface Rule.** Do not add box-shadow to content sections, cards, or list rows at rest. If it looks like a SaaS card grid, remove the shadow.

**The Gradient Scrim Rule.** Photography overlays use directional linear gradients for text contrast—not glassmorphism, not gradient text, not decorative blur panels.

## Components

Character: **tactile where interactive, editorial where narrative, flat everywhere else.**

### Buttons

- **Shape:** 8px radius primary (md), 4px secondary (sm), pill/full for icon variant
- **Primary:** Inverse black fill, white uppercase semi-bold label, wide horizontal padding (step9), full-width in section CTAs; hover shifts to oxblood with lifted shadow and `-1px` translate
- **Secondary:** Transparent with 2px white border on hero; hover fills white surface with ink text—used for hero anchors ("Latest Projects", "More About Me")
- **Icon:** Circular inverse fill, compact step7 square; accent hover; disabled at 35% opacity
- **Focus:** 2px oxblood outline, 2px offset—never remove for aesthetic minimalism

### Cards / Containers

- **Portfolio tile:** 8px radius, 4:3 padding-bottom aspect box, persistent bottom gradient scrim, hover darkens overlay and animates title/metadata into view; uppercase tracked title on image
- **Section grid:** 12-column Utopia grid, max-width 74rem, gutter step7; content often inset via `byOne`–`byThree` for readable measure
- **Hero panel:** Full viewport height (`100dvh`), container-query-aware gradient axis (vertical portrait, horizontal landscape)

### Navigation

- **Desktop:** Fixed header, transparent until scroll threshold (80vh) or reduced-motion immediate opaque; uppercase bold Hanken Grotesk links with white underline grow animation (center-out white bar)
- **Mobile (≤820px):** Hamburger morphs to X; drawer slides from header with inverse fill and grid-line separators; same link typography at step2
- **Active section:** Current nav link stays extra-bold with full-width underline (no animation needed)

### Section Headers

- **Kicker:** Uppercase bold Hanken Grotesk, oxblood, tracked (`0.075 × step1`)—one label per section (e.g., "ABOUT", "PORTFOLIO"), not repeated eyebrows on sub-blocks
- **Title:** Hedvig Letters Serif display (single weight), step5, centered
- **Subtitle:** Hedvig Letters Serif at text optical size, step1, optional, centered below title

### Signature: Portfolio Project Link

- Circular icon control on tile footer: inverse fill, 1px white ring, hover to white surface + ink icon—compact affordance distinct from primary CTAs

## Do's and Don'ts

### Do:

- **Do** use Hanken Grotesk for UI chrome and Hedvig Letters Serif for display/prose—the pairing is committed brand identity on this branch.
- **Do** route all spacing and type through Utopia theme tokens (`--spacing-step*`, `--font-size-step*`)—no magic-number padding in components.
- **Do** respect `useMotionPreferences`: instant or opaque alternatives when `prefers-reduced-motion` is set (header background, future Motion integration).
- **Do** let photography and portfolio imagery carry visual richness on the homepage hero and tiles.
- **Do** keep body text at muted (#5f5f5f) or ink (#0D0A0B) on white—verify ≥4.5:1 contrast before shipping.

### Don't:

- **Don't** ship generic SaaS landing pages: hero metrics, identical icon+heading+text card grids, cream backgrounds, or eyebrow kickers on every section.
- **Don't** adopt flashy dev portfolio tropes: particle effects, terminal cosplay, or dark-mode-by-default theatrics.
- **Don't** dump résumé-as-webpage density—narrative sections and scroll hierarchy carry the hiring argument.
- **Don't** use startup hype aesthetics: gradient text, glassmorphism panels, loud CTAs, or urgency theater.
- **Don't** use side-stripe borders (`border-left` >1px colored accents) on cards, alerts, or list items.
- **Don't** add nested cards or shadowed card grids where flat grid + imagery suffices.
- **Don't** animate layout properties for reveal entrances—transform and opacity only; content must be visible before animation fires.
