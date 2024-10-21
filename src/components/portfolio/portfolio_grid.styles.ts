import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.border.grid}
  display: grid;
  grid-gap: var(${vars.spacing.step2});

  grid-template-columns: repeat(3, auto);

  & > * {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
  }

  ${decl.media.mediumToWide} {
    grid-template-columns: repeat(2, auto);
  }

  ${decl.media.medium} {
    grid-template-columns: repeat(1, auto);
  }
`);

export default { root };
