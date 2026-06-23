import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.anchor}

  --image-size: var(${vars.spacing.step5});
  --bullet-padding: var(${vars.spacing.step1});
  --bullet-size: calc(var(--image-size) + (var(--bullet-padding) * 2));

  ${decl.grid.area.full}

  /* Single column: cap the measure so wide containers don't run lines long. */
  column-count: 1;
  column-width: revert;
  margin-inline: auto;
  max-width: 42rem;

  position: relative;

  @container section (min-width: 900px) {
    column-count: 2;
    column-gap: var(${vars.grid.gutter});
    column-width: calc(50% - var(${vars.grid.gutter}) / 2);
    max-width: none;
  }
`);

export default { root };
