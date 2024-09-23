import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const root = toProps(css`
  ${decl.color.border.grid}
  border-style: solid;
  border-width: 1px 0 0 1px;
  display: grid;

  grid-template-columns: repeat(3, auto);

  & > * {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
  }

  @media (max-width: 975px) and (min-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`);

export default { root };
