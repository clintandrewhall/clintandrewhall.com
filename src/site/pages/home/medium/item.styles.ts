import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

export const root = (image?: string) =>
  toProps(
    css`
      ${decl.font.sansSerif.medium}
      ${decl.font.weight.normal}

      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      direction: ltr;
      margin-bottom: var(${vars.spacing.step5});
    `,
    { backgroundImage: image ? `url(${image})` : 'none' },
  );

export const header = toProps(css`
  ${decl.font.size.step0}

  display: flex;
  flex-direction: column-reverse;
  margin-bottom: var(${vars.spacing.step2});
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
  ${decl.font.weight.normal}
  ${decl.font.size.step3}

  line-height: var(${vars.font.size.step4});
  min-height: calc(var(${vars.font.size.step4}) * 2);

  & a {
    ${decl.font.weight.normal}
    ${decl.color.font.dark}
  }
`);

export const list = toProps(css`
  border-top: 1px solid var(${vars.color.border.separator});
  display: block;
  list-style: none;
  padding-top: var(${vars.spacing.step2});
`);

export const category = toProps(css`
  ${decl.font.size.stepN1}

  display: inline-block;
  letter-spacing: calc(var(${vars.font.size.step0}) * 0.14);
  margin-right: var(${vars.spacing.step0});

  text-transform: uppercase;

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
`);

export default { header, root, title, list, category, date };
