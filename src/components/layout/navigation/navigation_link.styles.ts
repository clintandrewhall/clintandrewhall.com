import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const underlinedLink = css`
  ${decl.font.sansSerif.extraBold}
  &:after {
    left: 0;
    right: 0;
  }
`;

const defaultLink = css`
  ${decl.color.font.light}
  display: inline-block;
  margin-left: var(${vars.spacing.step4});
  margin-right: var(${vars.spacing.step4});
  position: relative;

  ${decl.media.between.navAndExpanded} {
    margin-left: var(${vars.spacing.step3});
    margin-right: var(${vars.spacing.step3});
  }

  &:hover,
  &:active,
  &:focus,
  &:visited {
    ${decl.color.font.light}
  }

  &::after {
    bottom: -16px;
    content: '';
    ${decl.color.background.surface};
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    right: 50%;
    transition:
      left var(${vars.motion.duration.base}) var(${vars.motion.easing.standard}),
      right var(${vars.motion.duration.base}) var(${vars.motion.easing.standard});
  }

  ${decl.media.greaterThan.nav} {
    &:hover {
      ${decl.font.sansSerif.extraBold}
      &:after {
        left: 0;
        right: 0;
      }
    }
  }
`;

const link = (isCurrent: boolean) =>
  toProps(isCurrent ? cx(defaultLink, underlinedLink) : defaultLink);

const root = toProps(css``);

export default { root, link };
