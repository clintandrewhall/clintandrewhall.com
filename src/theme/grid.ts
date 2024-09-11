/* @link https://utopia.fyi/grid/calculator?c=320,10,1.2,1184,16,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=l,l,2xl,12 */

import { buildTheme } from '@/lib/css';
import { VAR_PREFIX_GRID as varPrefix } from '@/theme/common';

import { spacing } from './spacing';

const MAX_WIDTH = 74;
const GRID_COLUMS = 12;

// :root {
//   --grid-max-width: 74.00rem;
//   --grid-gutter: var(--space-l-l, clamp(1.25rem, 0.9722rem + 1.3889vw, 2rem));
//   --grid-columns: 12;
// }

const { vars, definitions } = buildTheme(
  {
    maxWidth: `${MAX_WIDTH}rem`,
    gutter: `var(${spacing.vars.step7})`,
    columns: GRID_COLUMS,
  },
  varPrefix,
);

const container = `
  padding-inline: var(${vars.gutter});
  margin-inline: auto;

  & & {
    padding-inline: 0;
  }
`;

const root = `
  max-width: var(${vars.maxWidth});
  margin: auto;
  display: grid;
  grid-gap: var(${vars.gutter});
  grid-template-columns: repeat(var(${vars.columns}), 1fr);

  & > * {
    grid-area: auto / auto / auto / span var(${vars.columns});
  }
`;

export const grid = {
  vars,
  definitions,
  css: {
    container,
    root,
  },
};
