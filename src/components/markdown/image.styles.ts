import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const root = toProps(css`
  ${decl.color.border.outline}
  border-width: 1px;
  border-style: solid;
  width: 100%;
  max-width: 100%;
`);

export default { root };
