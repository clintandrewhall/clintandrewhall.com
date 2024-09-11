import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const root = toProps(
  csa`
    background-color: var(${vars.color.background.dark});
    padding: var(${vars.spacing.step4}) 0;
  `,
);

export default { root };
