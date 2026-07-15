import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.full}

  /* Logo bullet geometry — shared by every company node on the rail. */
  --logo-size: var(${vars.spacing.step5});
  --bullet-padding: var(${vars.spacing.step1});
  --bullet-size: calc(var(--logo-size) + (var(--bullet-padding) * 2));
  --rail-x: calc(var(--bullet-size) / 2);

  /* Horizontal distance from a role's content edge back to the rail — used to
     draw each role's branch connector and dot. */
  --rail-offset: calc((var(--bullet-size) / 2) + (var(${vars.grid.gutter}) / 2));

  position: relative;
  display: flex;
  flex-direction: column;

  /* A timeline reads as a sequence: one rail, top to bottom. Cap the measure so
     the prose never runs long; the rail widens on larger sections to give the
     desktop two-up role rows room to breathe. */
  margin-inline: auto;
  max-width: 46rem;

  @container section (min-width: 900px) {
    max-width: 54rem;
  }
`);

export default { root };
