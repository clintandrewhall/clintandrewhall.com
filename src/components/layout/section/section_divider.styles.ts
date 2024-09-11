import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const divider = toProps(csa`
  background-color: var(${vars.color.border.separator});
  height: 1px;
  grid-area: auto/5/auto/span 4;
  margin-bottom: var(${vars.spacing.sectionDivider});
  margin-top: var(${vars.spacing.sectionDivider});
`);

export default { divider };
