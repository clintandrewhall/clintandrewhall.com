import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css, vars } = theme;

const BREAKPOINT = 600;

const header = toProps(csa`
  grid-area: auto / 2 / auto / span 10;
`);

const summary = toProps(csa`
  ${css.font.serif.regular}
  ${css.font.size.step1}
  grid-area: auto / 2 / auto / span 10;
  text-align: center;
  line-height: var(${vars.spacing.step8});

  & p {
    margin-bottom: var(${vars.spacing.step4});
  }
`);

const title = toProps(csa`
  ${css.font.sansSerif.medium}
  ${css.font.weight.normal}
  ${css.font.size.step2}
  margin-bottom: var(${vars.spacing.step4});    
`);

const content = toProps(csa`
  ${css.font.serif.regular}
  ${css.font.color.text}
  line-height: var(${vars.spacing.step6});

  & p {
    margin-bottom: var(${vars.spacing.step6});
  }
`);

const work = toProps(csa`
  @media (max-width: ${BREAKPOINT}px) {
    grid-area: auto / 1 / auto / span 12;
  }

  grid-area: auto / 1 / auto / span 6;
`);

const code = toProps(csa`
  @media (max-width: ${BREAKPOINT}px) {
    grid-area: auto / 1 / auto / span 12;
  }
  
  grid-area: auto / 7 / auto / span 6;
`);

export default { content, header, title, work, code, summary };
