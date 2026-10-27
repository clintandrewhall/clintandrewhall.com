import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

// Scroll-driven reveal — pure CSS, no JS gate. The hidden start state lives in
// the keyframe's 0% and is applied only where a view() timeline exists, so the
// resting state is always the final, visible frame: reduced-motion users, older
// browsers, and headless/SSR renders all get fully-visible content and never a
// blank section. `--reveal-i` staggers items as the band scrolls into view.
const reveal = `
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      will-change: transform, opacity;
      animation: aboutReveal var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo}) both;
      animation-timeline: view();
      animation-range: entry calc(var(--reveal-i, 0) * 4%) entry calc(50% + var(--reveal-i, 0) * 4%);
    }
  }
`;

const root = toProps(css`
  ${decl.anchor}

  @keyframes aboutReveal {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`);

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

// WHO — the warm, personal narrative. Default ink (not muted) keeps it fully
// readable; the serif carries the humanity.
const summary = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step1}
  ${decl.grid.area.byOne}
  line-height: var(${vars.spacing.step8});
  text-wrap: pretty;
  ${reveal}

  & p {
    margin-bottom: var(${vars.spacing.step4});
  }

  & p:last-child {
    margin-bottom: 0;
  }
`);

// The bound "how I think + what I build with" unit. A wider gap above marks the
// turn from personal narrative to conviction; principles and skills sit in one
// column, joined to each other by a single hairline so they read as one idea.
// The turn from personal narrative to work. A full-width centered header in the
// same grammar as the section header — kicker → serif title → subtitle — so both
// halves of About share one heading system instead of switching alignment.
const workHeader = toProps(css`
  ${decl.grid.area.full}
  text-align: center;
  margin-top: var(${vars.spacing.step9});
  margin-bottom: var(${vars.spacing.step7});
  ${reveal}
`);

const workKicker = toProps(css`
  ${decl.font.sansSerif.bold}
  ${decl.font.size.step1}
  ${decl.color.font.accent}
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.075);
  text-transform: uppercase;
  margin-bottom: var(${vars.spacing.step2});
`);

const workTitle = toProps(css`
  ${decl.font.serif.display}
  ${decl.font.size.step4}
  ${decl.color.font.dark}
  line-height: 1.1;
  text-wrap: balance;
  margin-block: 0;
`);

const workSubtitle = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step1}
  ${decl.color.font.muted}
  text-wrap: pretty;
  margin-top: var(${vars.spacing.step2});
`);

const beliefs = toProps(css`
  ${decl.grid.area.byOne}
`);

// WHAT I BELIEVE — an editorial credo, not a card grid. Each principle is a
// statement (serif) answered by a gloss (sans); on wide viewports the two align
// into a definition-list two-column rhythm, stacking on narrow ones.
const principles = toProps(css`
  display: flex;
  flex-direction: column;
  gap: var(${vars.spacing.step6});
  margin-block: 0;
`);

const principle = toProps(css`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(${vars.spacing.step2});
  ${reveal}

  @container section (min-width: 640px) {
    align-items: baseline;
    gap: 0 var(${vars.grid.gutter});
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  }
`);

const statement = toProps(css`
  ${decl.font.serif.display}
  ${decl.font.size.step3}
  ${decl.color.font.dark}
  line-height: 1.15;
  text-wrap: balance;
  margin-block: 0;
`);

// The substance behind each statement. Larger and set as real prose (not a
// caption) so the "meat" reads with weight, then a proof link resolves it to
// something concrete.
const detail = toProps(css`
  ${decl.font.sansSerif.regular}
  ${decl.font.size.step1}
  ${decl.color.font.muted}
  line-height: 1.5;
  text-wrap: pretty;
  max-width: 46ch;
  margin-block: 0;
  margin-inline: 0;
`);

// Proof link — the concrete artifact behind the words. Sits on its own line, in
// the section's one accent, with an arrow that nudges on hover/focus.
const proof = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}
  ${decl.color.font.accent}
  display: flex;
  align-items: center;
  gap: var(${vars.spacing.step0});
  width: fit-content;
  margin-top: var(${vars.spacing.step3});
  letter-spacing: 0.02em;
  text-decoration: none;

  & > span {
    transition: transform var(${vars.motion.duration.fast}) var(${vars.motion.easing.expo});
  }

  &:hover > span,
  &:focus-visible > span {
    transform: translateX(0.15em);
  }

  @media (prefers-reduced-motion: reduce) {
    & > span {
      transition: none;
    }
  }
`);

// WHAT I BUILD WITH — the concrete vocabulary behind the beliefs. The hairline
// above binds it to the principles; the shared two-column geometry keeps the
// group labels aligned under the statements, so the whole band reads as belief
// → vocabulary rather than two stacked lists.
const skills = toProps(css`
  display: flex;
  flex-direction: column;
  gap: var(${vars.spacing.step4});
  margin-top: var(${vars.spacing.step8});
  margin-bottom: 0;
  padding-top: var(${vars.spacing.step8});
  border-top: 1px solid var(${vars.color.border.separator});
`);

const skillGroup = toProps(css`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(${vars.spacing.step1});
  ${reveal}

  @container section (min-width: 640px) {
    align-items: baseline;
    gap: 0 var(${vars.grid.gutter});
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  }
`);

const groupLabel = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}
  ${decl.color.font.muted}
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1;
  margin-block: 0;
`);

const groupItems = toProps(css`
  ${decl.font.sansSerif.regular}
  ${decl.font.size.step0}
  ${decl.color.font.dark}
  line-height: 1.6;
  margin-block: 0;
  margin-inline: 0;
`);

// The one sparing thread of oxblood in the skills — a whisper of the brand
// through the vocabulary, well under the One Voice Rule's 10%.
const separator = toProps(css`
  ${decl.color.font.accent}
  margin-inline: 0.15em;
  user-select: none;
`);

export default {
  root,
  header,
  summary,
  workHeader,
  workKicker,
  workTitle,
  workSubtitle,
  beliefs,
  principles,
  principle,
  statement,
  detail,
  proof,
  skills,
  skillGroup,
  groupLabel,
  groupItems,
  separator,
};
