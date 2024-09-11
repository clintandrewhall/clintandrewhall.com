import { csa, toProps } from '@/lib/css';

const header = toProps(csa`
  grid-area: auto / 2 / auto / span 10;
`);

export default { header };
