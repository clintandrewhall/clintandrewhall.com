import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css, vars } = theme;

export const TOP_PADDING = `var(${vars.spacing.step9})`;
export const IMAGE_SIZE = `var(${vars.spacing.step5})`;
export const BULLET_PADDING = `var(${vars.spacing.step1})`;
export const BULLET_SIZE_EQ = `(${IMAGE_SIZE} + (${BULLET_PADDING} * 2))`;

// Bullet top position
// 1. Top padding
// 2. Timeframe text height
// 3. Timeframe margin
// 4. Half of the title height
const BULLET_TOP_EQ = `(
  ${TOP_PADDING} + 
  var(${vars.font.lineHeight.step0}) + 
  var(${vars.spacing.step1}) + 
  (var(${vars.spacing.step2}) / 2)
)`;

const LOGO_VAR = '--timeline-item-logo';

const root = (logo?: string) =>
  toProps(
    csa` 
      padding-left: calc(${BULLET_SIZE_EQ} + (var(${vars.grid.gutter}) / 2));
      padding-top: ${TOP_PADDING};
      position: relative;
      break-inside: avoid;
    `,
    { [LOGO_VAR]: logo ? `url('${logo}')` : 'inherit' },
  );

const header = toProps(csa`
  ${css.font.sansSerif.medium}
  ${css.font.color.dark}
  ${css.font.weight.normal}

  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    border-radius: 50%;
    display: block;
    height: ${IMAGE_SIZE};
    width: ${IMAGE_SIZE};
    position: absolute;
    z-index: 2;
    left: ${BULLET_PADDING};
    background-image: var(--timeline-item-logo);
    background-size: ${IMAGE_SIZE};
    background-position: center;
    top: calc(${BULLET_TOP_EQ});
  }

  &::after {
    background: var(${vars.color.background.subtler});
    content: "";
    display: block;
    height: calc(${BULLET_SIZE_EQ});
    width: calc(${BULLET_SIZE_EQ});
    left: 0;
    top: calc((${BULLET_TOP_EQ}) - ${BULLET_PADDING});
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }
`);

const timeframe = toProps(csa`
  ${css.font.sansSerif.medium}
  ${css.font.size.stepN1}
  ${css.font.color.text}

  letter-spacing: calc(var(${vars.font.size.step0}) * .1);
  text-transform: uppercase;
  order: 1;
  margin-bottom: var(${vars.spacing.step0});
`);

const title = toProps(csa`
  ${css.font.size.step2}
  ${css.font.lineHeight.step2}
  ${css.font.weight.normal}

  order: 2;
  margin: 0;
  margin-bottom: var(${vars.spacing.step0});
`);

const subtitle = toProps(csa`
  ${css.font.size.stepN1}
  ${css.font.lineHeight.step1}
  ${css.font.weight.normal}

  order: 3;
  margin: 0;
  margin-top: var(${vars.spacing.step0});
  margin-bottom: var(${vars.spacing.step4});
`);

const content = toProps(csa`
  ${css.font.serif.regular}
  ${css.font.color.text}
  ${css.font.size.step0}
  ${css.font.lineHeight.step3}

  p {
    padding-bottom: var(${vars.spacing.step6});
  }
`);

export default { root, title, header, subtitle, content, timeframe };
