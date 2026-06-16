import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const divider = toProps(css`
  ${decl.grid.area.byFour}
  background-color: var(${vars.color.border.separator});
  height: 1px;
  margin-bottom: var(${vars.spacing.sectionDivider});
  margin-top: var(${vars.spacing.sectionDivider});
`);

export default { divider };
