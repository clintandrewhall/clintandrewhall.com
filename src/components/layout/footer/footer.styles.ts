import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.background.dark}
  padding: var(${vars.spacing.step4}) 0;
`);

export default { root };
