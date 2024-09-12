import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css } = theme;

const root = toProps(csa`
  ${css.color.background.subtlest}
`);

const header = toProps(csa`
  grid-area: auto / 2 / auto / span 10;
`);

const content = toProps(csa`
  grid-area: auto / 1 / auto / span 12;
`);

export default { header, content, root };
