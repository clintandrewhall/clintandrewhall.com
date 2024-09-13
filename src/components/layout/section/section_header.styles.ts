import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

export const DATA_ATTR_NAME = 'section-header-name';
export const DATA_ATTR_TITLE = 'section-header-title';
export const DATA_ATTR_SUBTITLE = 'section-header-subtitle';

const LETTER_SPACING_FACTOR = 0.075;

const name = toProps(
  cx(
    css`
      ${decl.font.sansSerif.semiBold}
      ${decl.font.size.step1}
      ${decl.color.font.accent}
      ${decl.font.weight.normal}
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
  css`
    ${decl.font.serif.bold}
    ${decl.font.size.step5}
  `,
  {},
  DATA_ATTR_TITLE,
);

const subtitle = toProps(
  css`
    ${decl.font.sansSerif.regular}
    ${decl.font.size.step1}
    margin-top: var(${vars.spacing.step2});
  `,
  {},
  DATA_ATTR_SUBTITLE,
);

const root = toProps(css`
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
