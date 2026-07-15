import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

// Oxblood tint for the "current" halo — the accent at low alpha. Kept inline (no
// token) because it is the only soft-accent use in the system.
const ACCENT_SOFT = 'rgba(134, 33, 33, 0.14)';

const root = (enterIndex: number) =>
  toProps(
    css`
      position: relative;
      padding-top: var(${vars.spacing.step3});
      padding-bottom: var(${vars.spacing.step7});
      padding-left: calc(var(--bullet-size) + (var(${vars.grid.gutter}) / 2));

      /* First-load reveal — pure CSS, no JS gate. The hidden start lives in the
         keyframe's 0% and is applied via fill-mode:both from first paint, so the
         resting state is already the final, visible frame. --enter-i staggers the
         nodes; reduced motion drops the animation entirely. */
      @media (prefers-reduced-motion: no-preference) {
        animation: timelineRise var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo})
          both;
        animation-delay: calc(var(--enter-i, 0) * 0.09s);
        will-change: transform, opacity;
      }

      @keyframes timelineRise {
        from {
          opacity: 0;
          transform: translateY(1rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* The connecting rail, behind the bullets. */
      &:before {
        background-color: var(${vars.color.background.surfaceMutedStrong});
        bottom: 0;
        content: '';
        left: var(--rail-x);
        position: absolute;
        top: 0;
        width: 1px;
        z-index: 0;
      }

      /* Start the rail at the first company's logo — which centers on the name,
         one kicker line below the content top — not the section top. */
      &:first-child:before {
        top: calc(
          var(${vars.spacing.step3}) + var(${vars.font.lineHeight.stepN1}) +
            var(${vars.spacing.step1}) + (var(${vars.font.lineHeight.step2}) / 2)
        );
      }

      /* The rail dissolves after the last node instead of stopping hard. */
      &:last-child {
        padding-bottom: 0;

        &:before {
          background-color: transparent;
          background-image: linear-gradient(
            to bottom,
            var(${vars.color.background.surfaceMutedStrong}) 0%,
            transparent 100%
          );
        }
      }
    `,
    { '--enter-i': `${enterIndex}` },
  );

const header = toProps(css`
  display: flex;
  flex-direction: column;
`);

// The timeframe + shared location kicker, sitting above the company name.
const span = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}
  ${decl.color.font.muted}

  margin-top: 0;
  margin-right: 0;
  margin-bottom: var(${vars.spacing.step1});
  margin-left: 0;
  line-height: var(${vars.font.lineHeight.stepN1});
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.1);
  text-transform: uppercase;

  & b {
    ${decl.color.font.accent}
    font-weight: inherit;
  }
`);

// Positioning context for the logo, which is centered on the name's first line.
const name = toProps(css`
  ${decl.font.serif.display}
  ${decl.color.font.dark}
  ${decl.font.size.step3}
  ${decl.font.lineHeight.step2}

  position: relative;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  letter-spacing: normal;
  text-wrap: balance;
`);

const bullet = toProps(css`
  position: absolute;
  top: calc(var(${vars.font.lineHeight.step2}) / 2);
  left: calc(-1 * var(--rail-offset));
  display: grid;
  place-items: center;
  width: var(--bullet-size);
  height: var(--bullet-size);
  border-radius: var(${vars.radius.full});
  background-color: var(${vars.color.background.surface});
  box-shadow: 0 0 0 1px var(${vars.color.background.surfaceMutedStrong});
  transform: translate(-50%, -50%);
  z-index: 1;

  & img {
    ${decl.dropShadow.sm}
    width: var(--logo-size);
    border-radius: var(${vars.radius.full});
    height: var(--logo-size);
    object-fit: cover;
  }
`);

// The current company's logo wears the oxblood accent — the one place the accent
// earns a spot on the rail.
const bulletPresent = toProps(css`
  box-shadow:
    0 0 0 2px var(${vars.color.background.accent}),
    0 0 0 6px ${ACCENT_SOFT};
`);

const roles = toProps(css`
  display: flex;
  flex-direction: column;
  gap: var(${vars.spacing.step5});
  margin-top: var(${vars.spacing.step4});
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  list-style: none;
`);

const role = toProps(css`
  display: flex;
  flex-direction: column;
`);

// The timeframe + location kicker, sitting above the role title.
const when = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}
  ${decl.color.font.muted}

  margin-top: 0;
  margin-right: 0;
  margin-bottom: var(${vars.spacing.step0});
  margin-left: 0;
  line-height: var(${vars.font.lineHeight.stepN1});
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.1);
  text-transform: uppercase;

  & b {
    ${decl.color.font.accent}
    font-weight: inherit;
  }
`);

// The role title. It branches off the trunk: a short connector back to the rail,
// capped with a dot where it meets the line. Both pin to the title's first line
// (--tick), so the kicker above never drags them out of alignment.
const position = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.color.font.dark}
  ${decl.font.size.step0}
  ${decl.font.lineHeight.step1}

  --tick: calc(var(${vars.font.lineHeight.step1}) / 2);

  position: relative;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  /* The branch line. 
  &:before {
    background-color: var(${vars.color.background.surfaceMutedStrong});
    content: '';
    height: 1px;
    left: calc(-1 * var(--rail-offset));
    position: absolute;
    top: var(--tick);
    transform: translateY(-50%);
    width: var(--rail-offset);
  }*/

  /* The dot on the rail. */
  &:after {
    background-color: var(${vars.color.background.surface});
    border-radius: var(${vars.radius.full});
    box-shadow: 0 0 0 1px var(${vars.color.background.surfaceMutedStrong});
    content: '';
    height: 7px;
    left: calc(-1 * var(--rail-offset));
    position: absolute;
    top: var(--tick);
    transform: translate(-50%, -50%);
    width: 7px;
  }
`);

// The current role's dot wears the oxblood accent, echoing its logo.
const positionPresent = toProps(css`
  &:after {
    background-color: var(${vars.color.background.accent});
    box-shadow: 0 0 0 3px ${ACCENT_SOFT};
  }
`);

const tagline = toProps(css`
  ${decl.font.sansSerif.regular}
  ${decl.color.font.muted}
  ${decl.font.size.step0}
  ${decl.font.lineHeight.step2}

  max-width: 60ch;
  margin-top: var(${vars.spacing.step1});
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  text-wrap: pretty;
`);

export default {
  root,
  header,
  span,
  name,
  bullet,
  bulletPresent,
  roles,
  role,
  when,
  position,
  positionPresent,
  tagline,
};
