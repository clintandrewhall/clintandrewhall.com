import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.byThree}
  ${decl.font.sansSerif.semiBold}
  margin-top: var(${vars.spacing.step4});

  ${decl.media.lessThan.comfortable} {
    ${decl.grid.area.byOne}
  }
`);

export default { root };
