import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const defaultClass = css`
  a,
  a:focus {
    ${decl.color.font.light}

    &:hover,
    &:active {
      ${decl.color.font.accent}
    }
  }
`;

const currentClass = css`
  a,
  a:focus {
    ${decl.color.font.accent}

    &:hover,
    &:active {
      ${decl.color.font.accent}
    }
  }
`;

const root = (isCurrent: boolean) => toProps(isCurrent ? currentClass : defaultClass);

const link = toProps(css`
  display: inline-block;
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
`);

export default { root, link };
