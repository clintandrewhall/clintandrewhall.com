import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const root = toProps(css`
  ${theme.decl.font.sansSerif.regular}
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(${theme.vars.color.background.dark});
  align-items: flex-end;

  ${theme.decl.media.orientation.portrait} {
    flex-direction: row;
  }
`);

const imageLayer = toProps(css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: 100vh 100%;
  background-position: center left;
  background-repeat: no-repeat;

  ${theme.decl.media.orientation.portrait} {
    background-position: top center;
    background-size: 100% 100vw;
  }
`);

const content = toProps(css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 0;
  justify-content: center;
  position: relative;
  z-index: 1;
  gap: var(${theme.vars.spacing.step5});
  padding-bottom: var(${theme.vars.spacing.step7});
  padding-left: var(${theme.vars.spacing.step7});
  padding-right: var(${theme.vars.spacing.step7});
  padding-top: var(${theme.vars.spacing.step7});

  background-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.75) 75%,
    rgba(0, 0, 0, 0.9) 100%
  );

  ${theme.decl.media.orientation.portrait} {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.75) 75%,
      rgba(0, 0, 0, 0.9) 100%
    );

    height: auto;
    width: 100vw;
  }

  ${theme.decl.media.lessThan.comfortable} {
    & br {
      display: none;
    }
  }
`);

const socialProfiles = toProps(css`
  flex-grow: 0;
  & li svg {
    font-size: ${theme.util.font.fluidSize(0.9, 5.25, 'step4')};
  }
`);

export default { root, content, imageLayer, socialProfiles };
