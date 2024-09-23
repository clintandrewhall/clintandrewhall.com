import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  --spacing-sectionTop: calc(var(${vars.spacing.step8}) * 2);
  --spacing-sectionDivider: var(${vars.spacing.step1});
  ${decl.color.background.dark}
`);

const header = toProps(css`
  ${decl.color.font.light}
  grid-area: auto / 2 / auto / span 10;
`);

const link = toProps(css`
  ${decl.color.border.light}

  border-style: solid;
  border-width: 2px;

  & > a {
    &:hover,
    &:focus,
    &:active {
      ${decl.color.font.dark}
      ${decl.color.background.light}
    }
  }
`);

export default { root, header, link };
