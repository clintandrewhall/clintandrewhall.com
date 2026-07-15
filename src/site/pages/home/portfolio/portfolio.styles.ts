import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.background.surfaceMuted}
`);

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

/**
 * Uniform Daylight card grid: 1 → 2 → 3 columns keyed off the section's
 * inline size (never more than 3, so the images stay substantial). The
 * min-width:0 on cards plus explicit tracks keep long titles from forcing
 * horizontal overflow at ≤390px, which the v2 mockup clipped.
 */
const content = toProps(css`
  ${decl.grid.area.full}

  display: grid;
  gap: var(${vars.spacing.step4});
  grid-template-columns: 1fr;

  @container section (min-width: 36rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @container section (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`);

export default { header, content, root };
