import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const list = toProps(css`
  ${decl.grid.area.full}
`);

export default { list };
