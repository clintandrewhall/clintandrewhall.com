import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.full}
  display: grid;
  grid-gap: var(${vars.grid.gutter});
  grid-template-columns: 1fr;

  /* Single column: cap the measure so prose doesn't run long on wide containers.
     Threshold matches the timeline and testimonials (editorial two-column). */
  margin-inline: auto;
  max-width: 42rem;

  @container section (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    max-width: none;
  }
`);

export default { root };
