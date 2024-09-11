import { csa, toProps } from '@lib/css';
import { theme } from '@theme';

const outer = toProps(
  csa`
    ${theme.css.grid.container}
  `,
);

const inner = toProps(
  csa`
    ${theme.css.grid.root}
  `,
);

export default { outer, inner };
