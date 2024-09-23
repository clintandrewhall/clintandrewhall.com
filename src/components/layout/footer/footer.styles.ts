import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.background.dark}
  padding-top: var(${vars.spacing.step4});
  padding-bottom: var(${vars.spacing.step4});
`);

const social = toProps(css`
  justify-content: center;
`);

export default { root, social };
