import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.border.grid}
  display: grid;
  grid-gap: var(${vars.spacing.step2});

  grid-template-columns: repeat(1, auto);

  & > * {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
  }

  @container section (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);

    & > *:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`);

export default { root };
