import { csa, toProps } from '@lib/css';
import { theme } from '@theme';

const { css, vars } = theme;

const root = toProps(csa`
  grid-area: auto / 4 / auto / 10;
  margin-top: var(${vars.spacing.step4});
`);

const link = toProps(csa`
  a& {
    ${css.font.color.light}
    ${css.font.size.stepN1}
    ${css.color.background.dark}

    display: block;
    text-transform: uppercase;
    letter-spacing: calc(var(${vars.font.size.stepN1}) * .25);
    text-align: center;
    padding: var(${vars.spacing.step4}) var(${vars.spacing.step9});
    line-height: var(${vars.font.size.step3});
  }

  a&:hover, a&:focus {
    ${css.font.color.light}
    ${css.color.background.accent}
  }
`);

export default { root, link };
