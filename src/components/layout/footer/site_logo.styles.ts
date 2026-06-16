import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(css`
  margin-bottom: var(${vars.spacing.step5});
  margin-top: var(${vars.spacing.step5});
  padding-bottom: var(${vars.spacing.step2});
  padding-top: var(${vars.spacing.step2});
  text-align: center;
`);

export default { root };
