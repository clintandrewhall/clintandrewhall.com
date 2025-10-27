import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const underlinedLink = css`
  ${decl.color.font.light}
  position: relative;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    ${decl.color.font.light}
  }

  &::after {
    left: 0;
    right: 0;
  }
`;

const defaultLink = css`
  position: relative;
  ${decl.color.font.light}

  &:hover,
  &:active,
  &:focus,
  &:visited {
    ${decl.color.font.light}
  }

  &:hover {
    &::after {
      left: 0;
      right: 0;
    }
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
`;

const link = (isCurrent: boolean) =>
  toProps(isCurrent ? cx(defaultLink, underlinedLink) : defaultLink);

const root = toProps(css`
  display: inline-block;
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
`);

export default { root, link };
