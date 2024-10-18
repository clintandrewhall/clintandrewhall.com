import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const LETTER_SPACING_FACTOR = 0.075;

const name = toProps(
  cx(
    css`
      ${decl.font.sansSerif.semiBold}
      ${decl.font.size.step1}
      ${decl.color.font.accent}
      ${decl.font.weight.normal}
      letter-spacing: calc(var(${vars.font.size.step1}) * ${LETTER_SPACING_FACTOR});
      margin-bottom: var(${vars.spacing.step2});
      text-transform: uppercase;
    `,
    'sectionHeader',
  ),
);

const title = toProps(css`
  ${decl.font.serif.bold}
  ${decl.font.size.step5}
`);

const subtitle = toProps(css`
  ${decl.font.sansSerif.regular}
  ${decl.font.size.step1}
    margin-top: var(${vars.spacing.step2});
`);

const root = toProps(css`
  position: relative;
  text-align: center;
  ${decl.grid.area.full}
`);

export default { root, name, title, subtitle };
