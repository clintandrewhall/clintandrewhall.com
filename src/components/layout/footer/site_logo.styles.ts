import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(css`
  padding-top: var(${vars.spacing.step2});
  padding-bottom: var(${vars.spacing.step2});
  margin-top: var(${vars.spacing.step5});
  margin-bottom: var(${vars.spacing.step5});
  text-align: center;
`);

export default { root };
