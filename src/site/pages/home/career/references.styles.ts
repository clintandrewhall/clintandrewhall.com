import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  --spacing-sectionTop: calc(var(${vars.spacing.step8}) * 2);
  --spacing-sectionDivider: var(${vars.spacing.step1});
  ${decl.color.background.inverse}
`);

const header = toProps(css`
  ${decl.color.font.light}
  ${decl.grid.area.byOne}
  margin-bottom: var(${vars.spacing.step6});

  /* The section kicker defaults to oxblood, which fails WCAG AA on this inverse
     band (#862121 on #000 = 2.3:1). On dark surfaces it joins the light header
     treatment — legible, and it eases the accent overuse elsewhere on the page. */
  & .sectionHeader {
    ${decl.color.font.light}
  }
`);

const link = toProps(css`
  ${decl.color.border.light}

  border-radius: var(${vars.radius.md});
  border-style: solid;
  border-width: 2px;

  & > a {
    &:hover,
    &:focus,
    &:active {
      ${decl.color.font.dark}
      ${decl.color.background.surface}
    }
  }
`);

const peopleLine = toProps(css`
  ${decl.grid.area.full}
`);

export default { root, header, link, peopleLine };
