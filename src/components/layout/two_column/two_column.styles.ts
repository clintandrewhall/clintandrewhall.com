import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.full}
  display: grid;
  grid-gap: var(${vars.grid.gutter});
  grid-template-columns: 1fr;

  @container section (min-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }
`);

export default { root };
