import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.font.sansSerif.regular}
`);

const title = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.step1}
  margin-bottom: var(${vars.spacing.step4});
  text-transform: uppercase;
`);

const paragraph = toProps(css`
  ${decl.font.sansSerif.light}
  ${decl.font.size.step0}
  ${decl.font.lineHeight.step2}
  margin-bottom: var(${vars.spacing.step2});
`);

export default { root, title, paragraph };
