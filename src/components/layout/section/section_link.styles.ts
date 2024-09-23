import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  grid-area: auto / 4 / auto / 10;
  margin-top: var(${vars.spacing.step4});
`);

const link = toProps(css`
  a& {
    ${decl.color.font.light}
    ${decl.font.size.stepN1}
    ${decl.color.background.dark}

    display: block;
    text-transform: uppercase;
    letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.25);
    text-align: center;
    padding-top: var(${vars.spacing.step4});
    padding-bottom: var(${vars.spacing.step4});
    padding-left: var(${vars.spacing.step9});
    padding-right: var(${vars.spacing.step9});
    line-height: var(${vars.font.size.step3});
  }

  a&:hover,
  a&:focus {
    ${decl.color.font.light}
    ${decl.color.background.accent}
  }
`);

export default { root, link };
