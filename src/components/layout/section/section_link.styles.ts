import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  grid-area: auto / 4 / auto / 10;
  margin-top: var(${vars.spacing.step4});

  @media (max-width: 400px) {
    grid-area: auto / 2 / auto / 12;
  }
`);

const link = toProps(css`
  a& {
    ${decl.color.font.light}
    ${decl.font.size.stepN1}
    ${decl.color.background.dark}

    display: block;
    letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.25);
    line-height: var(${vars.font.size.step3});
    padding-bottom: var(${vars.spacing.step4});
    padding-left: var(${vars.spacing.step9});
    padding-right: var(${vars.spacing.step9});
    padding-top: var(${vars.spacing.step4});
    text-align: center;
    text-transform: uppercase;
  }

  a&:hover,
  a&:focus {
    ${decl.color.font.light}
    ${decl.color.background.accent}
  }
`);

export default { root, link };
