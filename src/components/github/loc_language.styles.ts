import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.font.sansSerif.regular}
  height: var(${vars.spacing.step9});
`);

const header = toProps(css`
  ${decl.font.sansSerif.extraBold}
  ${decl.font.size.stepN1}
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.14);
  margin-top: var(${vars.spacing.step3});
  text-transform: uppercase;
`);

const definition = toProps(css`
  ${decl.color.background.shade}
  height: var(${vars.spacing.step1});
  margin-top: var(${vars.spacing.step0});
  position: relative;

  & dt {
    position: absolute;
    visibility: hidden;
  }
`);

const repoCount = toProps(css`
  position: absolute;
  visibility: hidden;
`);

const totalLines = (percent: string) =>
  toProps(
    css`
      ${decl.font.sansSerif.regular}
      ${decl.font.size.stepN1}
      ${decl.color.font.light}
      ${decl.color.background.dark}
      border-radius: 3px;
      display: inline-block;
      line-height: var(${vars.spacing.step5});
      margin-left: var(${vars.spacing.step2});
      padding-bottom: 0;
      padding-left: var(${vars.spacing.step1});
      padding-right: var(${vars.spacing.step1});
      padding-top: 0;

      position: absolute;
      top: calc(((var(${vars.spacing.step5}) - var(${vars.spacing.step1})) / 2) * -1);

      &::after {
        border-bottom: 5px solid transparent;
        border-right: 5px solid #000;
        border-top: 5px solid transparent;
        content: '';
        left: 0;
        margin-left: -5px;
        margin-top: -5px;
        position: absolute;
        top: 50%;
        z-index: 1;
      }
    `,
    {
      left: percent,
    },
  );

const percent = (width: string, background: string) =>
  toProps(
    css`
      ${decl.color.border.outline}
      border-radius: 0 5px 5px 0;
      border-style: solid;
      border-width: 1px;
      height: var(${vars.spacing.step1});
      line-height: var(${vars.spacing.step1});
      position: absolute;
      text-indent: -10000px;
    `,
    {
      background,
      width,
    },
  );

export default { root, header, definition, repoCount, totalLines, percent };
