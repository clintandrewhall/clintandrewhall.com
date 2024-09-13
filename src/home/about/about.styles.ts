import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const BREAKPOINT = 600;

const header = toProps(css`
  grid-area: auto / 2 / auto / span 10;
`);

const summary = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step1}
  grid-area: auto / 2 / auto / span 10;
  text-align: center;
  line-height: var(${vars.spacing.step8});

  & p {
    margin-bottom: var(${vars.spacing.step4});
  }
`);

const title = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.font.weight.normal}
  ${decl.font.size.step2}
  margin-bottom: var(${vars.spacing.step4});
`);

const content = toProps(css`
  ${decl.font.serif.regular}
  ${decl.color.font.text}
  line-height: var(${vars.spacing.step6});

  & p {
    margin-bottom: var(${vars.spacing.step6});
  }
`);

const work = toProps(css`
  @media (max-width: ${BREAKPOINT}px) {
    grid-area: auto / 1 / auto / span 12;
  }

  grid-area: auto / 1 / auto / span 6;
`);

const code = toProps(css`
  @media (max-width: ${BREAKPOINT}px) {
    grid-area: auto / 1 / auto / span 12;
  }

  grid-area: auto / 7 / auto / span 6;
`);

export default { content, header, title, work, code, summary };
