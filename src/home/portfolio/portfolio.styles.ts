import { csa, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(csa`
  background-color: var(${vars.color.background.subtlest});
`);

const header = toProps(csa`
  grid-area: auto / 2 / auto / span 10;
`);

const content = toProps(csa`
  grid-area: auto / 1 / auto / span 12;
`);

export default { header, content, root };
