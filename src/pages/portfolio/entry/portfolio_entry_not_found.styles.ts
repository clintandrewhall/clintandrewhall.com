import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  min-height: var(${vars.spacing.articleHeaderHeight});
`);

const notFound = toProps(css`
  ${decl.grid.area.byTwo}
`);

const grid = toProps(css`
  ${decl.grid.area.full}
`);

export default { root, grid, notFound };
