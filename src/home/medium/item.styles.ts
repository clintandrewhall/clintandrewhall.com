import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

export const root = (image?: string) =>
  toProps(
    css`
      ${decl.font.sansSerif.medium}
      ${decl.font.weight.normal}
      margin-bottom: var(${vars.spacing.step5});
      direction: ltr;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    `,
    { backgroundImage: image ? `url(${image})` : 'none' },
  );

export const header = toProps(css`
  ${decl.font.size.step0}
  margin-bottom: var(${vars.spacing.step2});
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  & a {
    ${decl.font.weight.normal}
    ${decl.color.font.dark}
  }
`);

export const date = toProps(css`
  ${decl.color.font.accent}
  line-height: var(${vars.font.size.step2});
`);

export const title = toProps(css`
  ${decl.font.size.step3}
  ${decl.font.weight.normal}
  & a {
    ${decl.font.weight.normal}
    ${decl.color.font.dark}
  }
  line-height: var(${vars.font.size.step4});
  min-height: calc(var(${vars.font.size.step4}) * 2);
`);

export const list = toProps(css`
  list-style: none;
  display: block;
  border-top: 1px solid var(${vars.color.border.separator});
  padding-top: var(${vars.spacing.step2});
`);

export const category = toProps(css`
  ${decl.font.size.stepN1}
  display: inline-block;
  margin-right: var(${vars.spacing.step0});
  letter-spacing: calc(var(${vars.font.size.step0}) * 0.14);

  & a {
    ${decl.font.weight.normal}
    ${decl.color.font.medium}

    &:hover,
    &:focus,
    &:active {
      ${decl.color.font.link}
    }
  }

  &::after {
    ${decl.color.font.medium}
    content: ', ';
  }

  &:last-child::after {
    display: none;
  }

  text-transform: uppercase;
`);

export default { header, root, title, list, category, date };
