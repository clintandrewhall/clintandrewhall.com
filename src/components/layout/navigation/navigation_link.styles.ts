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

  ${decl.media.between.comfortableAndExpanded} {
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
    ${decl.color.background.light};
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    right: 50%;
    transition:
      left 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      right 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  ${decl.media.greaterThan.comfortable} {
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
