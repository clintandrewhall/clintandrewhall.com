import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const root = toProps(css`
  display: grid;
  ${decl.color.border.grid}
  border-style: solid;
  border-width: 1px 0 0 1px;

  @media (max-width: 975px) and (min-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }

  grid-template-columns: repeat(3, auto);

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
`);

export default { root };
