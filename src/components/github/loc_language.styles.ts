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
  text-transform: uppercase;
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.14);
  margin-top: var(${vars.spacing.step3});
`);

const definition = toProps(css`
  ${decl.color.background.shade}
  position: relative;
  height: var(${vars.spacing.step1});
  margin-top: var(${vars.spacing.step0});

  & dt {
    visibility: hidden;
    position: absolute;
  }
`);

const repoCount = toProps(css`
  visibility: hidden;
  position: absolute;
`);

const totalLines = (percent: string) =>
  toProps(
    css`
      ${decl.font.sansSerif.regular}
      ${decl.font.size.stepN1}
      ${decl.color.font.light}
      ${decl.color.background.dark}

      position: absolute;
      display: inline-block;
      border-radius: 3px;
      line-height: var(${vars.spacing.step5});
      padding-top: 0;
      padding-bottom: 0;
      padding-left: var(${vars.spacing.step1});
      padding-right: var(${vars.spacing.step1});
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
    css`
      ${decl.color.border.outline}
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
