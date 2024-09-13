import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  --spacing-sectionTop: calc(var(${vars.spacing.step8}) * 2);
  --spacing-sectionDivider: var(${vars.spacing.step1});
  ${decl.color.background.dark}
`);

const header = toProps(css`
  ${decl.font.color.light}
  grid-area: auto / 2 / auto / span 10;
`);

const link = toProps(css`
  border: 2px solid var(${vars.color.background.light});

  & > a {
    &:hover,
    &:focus,
    &:active {
      ${decl.font.color.dark}
      ${decl.color.background.light}
    }
  }
`);

export default { root, header, link };
