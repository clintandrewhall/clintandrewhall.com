import { csa, cx, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css, vars } = theme;

export const DATA_ATTR_NAME = 'section-header-name';
export const DATA_ATTR_TITLE = 'section-header-title';
export const DATA_ATTR_SUBTITLE = 'section-header-subtitle';

const LETTER_SPACING_FACTOR = 0.075;

const name = toProps(
  cx(
    csa`
      ${css.font.sansSerif.semiBold}
      ${css.font.size.step1}
      ${css.font.color.accent}
      ${css.font.weight.normal}
      letter-spacing: calc(var(${vars.font.size.step1}) * ${LETTER_SPACING_FACTOR});
      text-transform: uppercase;
      margin-bottom: var(${vars.spacing.step2});
    `,
    'sectionHeader',
  ),
  {},
  DATA_ATTR_NAME,
);

const title = toProps(
  csa`
    ${css.font.serif.bold}
    ${css.font.size.step5}
  `,
  {},
  DATA_ATTR_TITLE,
);

const subtitle = toProps(
  csa`
    ${css.font.sansSerif.regular}
    ${css.font.size.step1}
    margin-top: var(${vars.spacing.step2});
  `,
  {},
  DATA_ATTR_SUBTITLE,
);

const root = toProps(csa`
  position: relative;
  text-align: center;

  // Only display the divider if all elements are present.
  &
    [data-component='${DATA_ATTR_NAME}']
    + [data-component='${DATA_ATTR_TITLE}']
    + [data-component='${DATA_ATTR_SUBTITLE}'] {
    & ::after {
      background-color: var(${vars.color.border.separator});
      bottom: 0;
      content: '';
      display: inline-block;
      height: 1px;
      left: 25%;
      text-align: center;
      width: 50%;
      position: absolute;
    }
  }
`);

export default { root, name, title, subtitle };
