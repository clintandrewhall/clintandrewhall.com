import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const divider = toProps(css`
  background-color: var(${vars.color.border.separator});
  grid-area: auto/5/auto/span 4;
  height: 1px;
  margin-bottom: var(${vars.spacing.sectionDivider});
  margin-top: var(${vars.spacing.sectionDivider});
`);

export default { divider };
