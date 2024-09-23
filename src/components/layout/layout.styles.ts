import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const outer = toProps(css`
  ${theme.decl.grid.container}
`);

const inner = toProps(css`
  ${theme.decl.grid.root}
  ${theme.decl.grid.children}
`);

export default { outer, inner };
