import { css, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { decl } = theme;

const root = toProps(css`
  ${decl.color.background.subtlest}
`);

const header = toProps(css`
  grid-area: auto / 2 / auto / span 10;
`);

const content = toProps(css`
  grid-area: auto / 1 / auto / span 12;
`);

export default { header, content, root };
