import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

// Shared first-load entrance — pure CSS, no JS gate. The hidden start state
// lives in the keyframe's 0% and is applied via `animation-fill-mode: both`
// from the very first server paint, so each element fades in exactly once (no
// server-render-then-reset flash). Reduced motion drops the animation entirely
// and the resting state is already the final, visible frame. `--enter-i`
// sequences the cascade.
const enter = `
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform, opacity;
    animation: heroRiseIn var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo}) both;
    animation-delay: calc(var(--enter-i, 0) * 0.08s);
  }
`;

const root = toProps(css`
  ${decl.color.font.light}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(${vars.spacing.step5});
  width: 100%;

  /* Defined here as well as in static_hero.styles so the reference resolves
     regardless of how @keyframes names are scoped across modules; identical
     definitions collapse to one global rule. */
  @keyframes heroRiseIn {
    from {
      opacity: 0;
      transform: translateY(1.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`);

const headerGroup = toProps(css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(${vars.spacing.step3});
  width: 100%;
  text-shadow: 0 1px 3px var(${vars.color.font.dropShadow});
`);

const title = toProps(css`
  ${decl.font.serif.displayBold}
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${theme.util.font.fluidSize(1.6, 5, 'step5')};
  line-height: var(${vars.font.lineHeight.step6});
  letter-spacing: -0.015em;
  text-wrap: balance;
  overflow-wrap: break-word;

  @container hero (min-aspect-ratio: 1/1) {
    font-size: ${theme.util.font.fluidSize(1.2, 3.25, 'step4')};
    line-height: var(${vars.font.lineHeight.step5});
  }
`);

// Each visual line reveals on its own beat; blocks so the two clauses stack,
// wrapping internally on narrow widths without clipping.
const titleLine = (index: number) =>
  toProps(
    css`
      display: block;
      ${enter}
    `,
    { '--enter-i': `${index}` },
  );

// The role line stays in the serif voice (near-white, not washed gray) so the
// hero reads as one editorial family; sans is reserved for the caps chrome
// (nav, buttons) where it clearly looks intentional rather than like a fallback.
const subtitle = toProps(
  css`
    ${decl.font.serif.regular}
    width: 100%;
    color: var(${vars.color.font.light});
    font-size: ${theme.util.font.fluidSize(1.05, 1.85, 'step2')};
    line-height: 1.3;
    text-shadow: 0 1px 3px var(${vars.color.font.dropShadow});
    ${enter}
  `,
  { '--enter-i': '3' },
);

const linkList = toProps(
  css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(${vars.spacing.step4});
    margin-top: var(${vars.spacing.step2});
    width: 100%;
    list-style: none;
    ${enter}

    /* On phones the two labels won't sit side by side without crowding the
       edge, so stack them full-width — bigger touch targets, no overflow. */
    ${decl.media.lessThan.comfortable} {
      flex-direction: column;
      align-items: stretch;
      gap: var(${vars.spacing.step3});
    }
  `,
  { '--enter-i': '5' },
);

const linkItem = toProps(css`
  flex-grow: 0;

  ${decl.media.lessThan.comfortable} {
    width: 100%;

    & > * {
      width: 100%;
    }
  }
`);

// Primary CTA: the one deliberate oxblood UI element on the fold, rhyming with
// the red X in the photograph. Layers over the `secondary` button base, so the
// atomic cascade only needs the fill, border, and hover overrides.
const ctaPrimary = css`
  background-color: var(${vars.color.background.accent});
  border-color: var(${vars.color.background.accent});
  color: var(${vars.color.font.light});
  box-shadow:
    rgba(0, 0, 0, 0.28) 0px 2px 8px,
    rgba(0, 0, 0, 0.18) 0px 6px 18px;

  &:hover,
  &:focus {
    background-color: var(${vars.color.background.accent});
    border-color: var(${vars.color.background.accent});
    color: var(${vars.color.font.light});
    filter: brightness(1.14);
    box-shadow:
      rgba(0, 0, 0, 0.32) 0px 4px 12px,
      rgba(0, 0, 0, 0.22) 0px 10px 28px;
    transform: translateY(-1px);
  }

  &:active {
    filter: brightness(1);
    transform: translateY(0);
  }
`;

export default {
  root,
  headerGroup,
  title,
  titleLine,
  subtitle,
  linkList,
  linkItem,
  ctaPrimary,
};
