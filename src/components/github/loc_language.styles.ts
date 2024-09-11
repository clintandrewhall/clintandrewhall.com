import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars, css } = theme;

const root = toProps(csa`
  ${css.font.sansSerif.regular}
  height: var(${vars.spacing.step9});
`);

const header = toProps(csa`
  ${css.font.sansSerif.extraBold}
  ${css.font.size.stepN1}
  text-transform: uppercase;
  letter-spacing: calc(var(${vars.font.size.stepN1}) * .14);
  margin-top: var(${vars.spacing.step3});
`);

const definition = toProps(csa`
  ${css.color.background.shade}
  position: relative;
  height: var(${vars.spacing.step1});
  margin-top: var(${vars.spacing.step0});

  & dt {
    visibility: hidden;
    position: absolute;
  }
`);

const repoCount = toProps(csa`
  visibility: hidden;
  position: absolute;
`);

const totalLines = (percent: string) =>
  toProps(
    csa`
      ${css.font.sansSerif.regular}
      ${css.font.size.stepN1}
      ${css.font.color.light}
      ${css.color.background.dark}

      position: absolute;
      display: inline-block;
      border-radius: 3px;
      line-height: var(${vars.spacing.step5});
      padding: 0 var(${vars.spacing.step1});
      top: calc(((var(${vars.spacing.step5}) - var(${vars.spacing.step1})) / 2) * -1);
      margin-left: var(${vars.spacing.step2});

      &::after {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -5px;
        margin-left: -5px;
        border-bottom: 5px solid transparent;
        border-top: 5px solid transparent;
        border-right: 5px solid #000;
        content: '';
        z-index: 1;
      }
    `,
    {
      left: percent,
    },
  );

const percent = (width: string, background: string) =>
  toProps(
    csa`
      ${css.color.border.outline}
      position: absolute;
      height: var(${vars.spacing.step1});
      line-height: var(${vars.spacing.step1});
      text-indent: -10000px;
      border-radius: 0 5px 5px 0;
      border-width: 1px;
      border-style: solid;
  `,
    {
      background,
      width,
    },
  );

export default { root, header, definition, repoCount, totalLines, percent };
