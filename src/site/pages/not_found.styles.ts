import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.byOne}
  align-items: center;
  display: flex;
  min-height: calc(100vh - var(${vars.header['content-height']}));
`);

export default { root };
