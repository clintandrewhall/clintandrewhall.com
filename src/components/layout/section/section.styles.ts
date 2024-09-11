import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const root = (style?: React.CSSProperties) =>
  toProps(
    csa`
      padding-top: var(${vars.spacing.sectionTop});
      padding-bottom: var(${vars.spacing.sectionBottom});
    `,
    style,
  );

export default { root };
