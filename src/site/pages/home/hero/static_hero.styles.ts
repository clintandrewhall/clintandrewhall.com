import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(css`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 100%;
  overflow: hidden;
  background-color: var(${vars.color.background.inverse});
  container-type: size;
  container-name: hero;
  isolation: isolate;

  /* Global keyframes (this project emits @keyframes names globally; see
     components/github/corner.styles.ts for the established pattern). The
     entrance is pure CSS: no JS gate, no hydration flag. The hidden start
     state comes from each keyframe's 0% under animation-fill-mode both, so
     it is present from the very first server paint and fades in exactly once.
     A renderer that ignores animations simply shows the visible resting state. */
  @keyframes heroImageSettle {
    from {
      opacity: 0;
      transform: scale(1.06);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

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

const image = toProps(css`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left top;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform, opacity;
    animation: heroImageSettle var(${vars.motion.duration.entrance})
      var(${vars.motion.easing.expo}) both;
  }
`);

// The dark scrim is the "stage edge": on portrait it rises from the bottom, on
// landscape it sweeps in on a slight diagonal to seat the type in the negative
// space the photograph already carries. Values are tuned so white text clears
// AA against the darkest band regardless of what's behind it.
const content = toProps(css`
  position: absolute;
  inset: min(100cqw, 55cqh) 0 0 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(${vars.spacing.step5});
  padding: var(${vars.spacing.step7});
  padding-bottom: var(${vars.spacing.step9});
  color: var(${vars.color.font.light});
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.12) 20%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.9) 82%
  );

  @container hero (min-aspect-ratio: 1/1) {
    inset: 0 0 0 min(100cqh, 50cqw);
    justify-content: center;
    background-image: linear-gradient(
      100deg,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 26%,
      rgba(0, 0, 0, 0.72) 52%,
      rgba(0, 0, 0, 0.94) 74%
    );
  }
`);

const socialProfiles = toProps(css`
  flex-grow: 0;

  & li svg {
    font-size: ${theme.util.font.fluidSize(0.9, 5.25, 'step4')};
  }

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform, opacity;
    animation: heroRiseIn var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo}) both;
    animation-delay: 0.5s;
  }
`);

export default { root, image, content, socialProfiles };
