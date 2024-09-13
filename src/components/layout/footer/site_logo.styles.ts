import { css, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const root = toProps(
  css`
    padding: var(${vars.spacing.step2}) 0;
    margin: var(${vars.spacing.step5}) 0;
    text-align: center;
  `,
);

const link = toProps(
  css`
  `,
);

export default { root, link };
