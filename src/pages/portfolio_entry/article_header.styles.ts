import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = (image: ImageOutputMetadata | null) => {
  if (image) {
    return toProps(cx(rootWithImage, rootBase), { backgroundImage: `url(${image.src})` });
  }
  return toProps(rootBase);
};

const rootWithImage = css`
  background-position: center;
  background-size: cover;
  height: var(--header-height);
`;

/*

  padding-top: calc(
    (
      ((var(${vars.spacing.articleHeaderHeight}) - var(${vars.font.size.step7})) / 2) -
        (var(${vars.font.size.step7}) / 2)
    )
  );

*/

const rootBase = css`
  --header-height: var(${vars.spacing.articleHeaderHeight});
  --header-midline: calc((var(--header-height) - var(${vars.font.size.step7})) / 2);
  --header-offset: calc(var(${vars.font.size.step7}) / 2);
  ${decl.color.font.light}
  ${decl.grid.area.full}
  margin-bottom: var(${vars.spacing.step6});

  padding-top: calc(var(--header-midline) - var(--header-offset));
  position: relative;
  text-align: center;
  text-shadow: var(${vars.color.font.dropShadow}) 1px 1px 4px;

  & > * {
    position: relative;
    z-index: 20;
  }

  &:before {
    background-color: #0d0a0b;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.4;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  &:after {
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 100%);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const title = toProps(css`
  ${decl.grid.area.full}
  ${decl.font.size.step7}
  ${decl.font.serif.bold}
  font-weight: normal;
  line-height: var(${vars.font.size.step7});
`);

const subtitle = toProps(css`
  ${decl.grid.area.full}
  ${decl.font.sansSerif.medium};
  font-weight: normal;
`);

const date = toProps(css`
  ${decl.font.size.step2}
  ${decl.color.font.dim}
  ${decl.grid.area.byOne}
`);

const tagList = toProps(css`
  ${decl.grid.area.byOne}

  & > a {
    ${decl.color.font.light}
    ${decl.font.sansSerif.bold}
    font-weight: 400;

    &:hover {
      ${decl.color.font.light}
    }
  }
`);

const tag = toProps(css`
  ${decl.font.size.step0};

  letter-spacing: calc(var(${vars.font.size.step1}) * 0.1);
  text-transform: uppercase;
`);

export default { root, date, tagList, tag, title, subtitle };
