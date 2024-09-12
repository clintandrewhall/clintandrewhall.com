import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css, vars } = theme;

const root = toProps(
  csa`
    ${css.color.background.dark}
    padding: var(${vars.spacing.step4}) 0;
  `,
);

export default { root };
