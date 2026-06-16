import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = (style?: React.CSSProperties) =>
  toProps(
    css`
      padding-bottom: var(${vars.spacing.sectionBottom});
      padding-top: var(${vars.spacing.sectionTop});
    `,
    style,
  );

export default { root };
