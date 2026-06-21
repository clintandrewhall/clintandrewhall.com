import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.byThree}
  ${decl.font.sansSerif.semiBold}
  margin-top: var(${vars.spacing.step4});

  ${decl.media.lessThan.comfortable} {
    ${decl.grid.area.byOne}
  }
`);

const link = toProps(css`
  ${decl.boxShadow.sm}
  border-radius: var(${vars.spacing.step1});
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
