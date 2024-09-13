import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

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
    css`
      padding-left: calc(${BULLET_SIZE_EQ} + (var(${vars.grid.gutter}) / 2));
      padding-top: ${TOP_PADDING};
      position: relative;
      break-inside: avoid;
    `,
    { [LOGO_VAR]: logo ? `url('${logo}')` : 'inherit' },
  );

const header = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.color.font.dark}
  ${decl.font.weight.normal}

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
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
    content: '';
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

const timeframe = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.font.size.stepN1}
  ${decl.color.font.text}

  letter-spacing: calc(var(${vars.font.size.step0}) * .1);
  text-transform: uppercase;
  order: 1;
  margin-bottom: var(${vars.spacing.step0});
`);

const title = toProps(css`
  ${decl.font.size.step2}
  ${decl.font.lineHeight.step2}
  ${decl.font.weight.normal}

  order: 2;
  margin: 0;
  margin-bottom: var(${vars.spacing.step0});
`);

const subtitle = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.font.lineHeight.step1}
  ${decl.font.weight.normal}

  order: 3;
  margin: 0;
  margin-top: var(${vars.spacing.step0});
  margin-bottom: var(${vars.spacing.step4});
`);

const content = toProps(css`
  ${decl.font.serif.regular}
  ${decl.color.font.text}
  ${decl.font.size.step0}
  ${decl.font.lineHeight.step3}

  p {
    padding-bottom: var(${vars.spacing.step6});
  }
`);

export default { root, title, header, subtitle, content, timeframe };
