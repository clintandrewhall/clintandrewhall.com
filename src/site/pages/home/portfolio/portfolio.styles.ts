import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const root = toProps(css`
  ${decl.color.background.surfaceMuted}
`);

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

const content = toProps(css`
  ${decl.grid.area.full}
`);

export default { header, content, root };
