import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { css, vars } = theme;

export const root = (image?: string) =>
  toProps(
    csa`
      ${css.font.sansSerif.medium}
      ${css.font.weight.normal}
      margin-bottom: var(${vars.spacing.step5});
      direction: ltr;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    `,
    { backgroundImage: image ? `url(${image})` : 'none' },
  );

export const header = toProps(csa`
  ${css.font.size.step0}
  margin-bottom: var(${vars.spacing.step2});
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  & a {
    ${css.font.weight.normal}
    ${css.font.color.dark}
  }
`);

export const date = toProps(csa`
  ${css.font.color.accent}
  line-height: var(${vars.font.size.step2});
`);

export const title = toProps(csa`
  ${css.font.size.step3}
  ${css.font.weight.normal}
  & a {
    ${css.font.weight.normal}
    ${css.font.color.dark}
  }
  line-height: var(${vars.font.size.step4});
  min-height: calc(var(${vars.font.size.step4}) * 2);
`);

export const list = toProps(csa`
  list-style: none;
  display: block;
  border-top: 1px solid var(${vars.color.border.separator});
  padding-top: var(${vars.spacing.step2});
`);

export const category = toProps(csa`
  ${css.font.size.stepN1}
  display: inline-block;
  margin-right: var(${vars.spacing.step0});
  letter-spacing: calc(var(${vars.font.size.step0}) * .14);
  
  & a {
    ${css.font.weight.normal}
    ${css.font.color.medium}

    &:hover,
    &:focus,
    &:active {
      ${css.font.color.link}
    }
  } 

  &::after {
    ${css.font.color.medium}
    content: ', ';
  }

  &:last-child::after {
    display: none;
  }
  
  text-transform: uppercase;
`);

export default { header, root, title, list, category, date };
