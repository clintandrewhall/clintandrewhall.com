import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

// Bullet top position
// 1. Top padding
// 2. Timeframe text height
// 3. Timeframe margin
// 4. Half of the title height
const BULLET_TOP = `calc(
  var(${vars.font.lineHeight.step0}) + 
  var(${vars.spacing.step1}) + 
  (var(${vars.spacing.step2}) / 2)
)`;

const LOGO_VAR = '--timeline-item-logo';

// Bullet top position
// 1. Top padding
// 2. Timeframe text height
// 3. Timeframe margin
// 4. Half of the title height

const root = (logo?: string) =>
  toProps(
    css`
      --bullet-top: ${BULLET_TOP};
      break-inside: avoid;
      padding-bottom: var(${vars.spacing.step9});
      padding-left: calc(var(--bullet-size) + (var(${vars.grid.gutter}) / 2));
      position: relative;

      &:before {
        background-color: var(${vars.color.background.subtler});
        bottom: 0;
        content: '';
        display: block;
        left: calc(var(--bullet-size) / 2);
        position: absolute;
        top: 0;
        width: 1px;
        z-index: 0;
      }

      &:first-child:before {
        top: var(--bullet-size);
      }

      &:last-child {
        padding-bottom: 0;

        &:after {
          background-image: linear-gradient(
            to bottom,
            var(${vars.color.background.subtler}) 0%,
            transparent 100%
          );
          bottom: calc(0 - var(${vars.spacing.step9}));
          content: '';
          height: var(${vars.spacing.step9});
          left: calc(var(--bullet-size) / 2);
          position: absolute;
          width: 1px;
        }
      }

      &:last-child:before {
        bottom: 0;
      }
    `,
    { [LOGO_VAR]: logo ? `url('${logo}')` : 'inherit' },
  );

const header = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.color.font.dark}
  ${decl.font.weight.normal}

  display: flex;
  flex-direction: column;

  &:before {
    ${decl.shadow.medium}
    background-image: var(--timeline-item-logo);
    background-position: center;
    background-size: var(--image-size);
    border-radius: 50%;
    content: '';
    display: block;
    height: var(--image-size);
    left: var(--bullet-padding);
    position: absolute;
    top: var(--bullet-top);
    width: var(--image-size);
    z-index: 2;
  }

  &:after {
    ${decl.shadow.medium}
    background-color: var(${vars.color.background.subtler});
    border-radius: 50%;
    content: '';
    display: block;
    height: var(--bullet-size);
    left: 0;
    position: absolute;
    top: calc(var(--bullet-top) - var(--bullet-padding));
    width: var(--bullet-size);
    z-index: 1;
  }
`);

const timeframe = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.font.size.stepN1}
  ${decl.color.font.text}

  letter-spacing: calc(var(${vars.font.size.step0}) * .1);
  margin-bottom: var(${vars.spacing.step0});
  order: 1;
  text-transform: uppercase;
`);

const title = toProps(css`
  ${decl.font.size.step2}
  margin-bottom: var(${vars.spacing.step0});
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  ${decl.font.lineHeight.step2}
  ${decl.font.weight.normal}

  order: 2;
`);

const subtitle = toProps(css`
  ${decl.font.size.stepN1}
  margin-bottom: var(${vars.spacing.step4});
  margin-left: 0;
  margin-right: 0;
  margin-top: var(${vars.spacing.step0});
  ${decl.font.lineHeight.step1}
  ${decl.font.weight.normal}

  order: 3;
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
