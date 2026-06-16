import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(css`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 100%;
  overflow: hidden;
  background-color: var(${vars.color.background.dark});
  container-type: size;
  container-name: hero;
  isolation: isolate;
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
`);

const content = toProps(css`
  position: absolute;
  inset: min(100cqw, 55cqh) 0 0 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(${vars.spacing.step5});
  padding-bottom: var(${vars.spacing.step7});
  padding-left: var(${vars.spacing.step7});
  padding-right: var(${vars.spacing.step7});
  padding-top: var(${vars.spacing.step7});
  color: var(${vars.color.font.light});
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.45) 30%,
    rgba(0, 0, 0, 0.85) 75%
  );

  @container hero (min-aspect-ratio: 1/1) {
    background-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.45) 30%,
      rgba(0, 0, 0, 0.85) 75%
    );
    inset: 0 0 0 min(100cqh, 55cqw);
  }
`);

const socialProfiles = toProps(css`
  flex-grow: 0;
  & li svg {
    font-size: ${theme.util.font.fluidSize(0.9, 5.25, 'step4')};
  }
`);

export default { root, image, content, socialProfiles };
