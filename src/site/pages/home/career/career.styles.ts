import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

export default { header };
