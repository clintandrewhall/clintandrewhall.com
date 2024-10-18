import { css, cx, toProps } from '@lib/css';
import { type OutputMetadata } from '@lib/hooks/use_portfolio';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = (image: OutputMetadata | null) => {
  if (image) {
    return toProps(cx(rootWithImage, rootBase), { backgroundImage: `url(${image.src})` });
  }
  return toProps(rootBase);
};

const rootWithImage = css`
  background-size: cover;
  background-position: center;
  height: var(${vars.spacing.articleHeaderHeight});
`;

const rootBase = css`
  ${decl.color.font.light}
  ${decl.grid.area.full}
  text-align: center;
  position: relative;
  padding-top: calc(
    (
      ((var(${vars.spacing.articleHeaderHeight}) - var(${vars.font.size.step7})) / 2) -
        (var(${vars.font.size.step7}) / 2)
    )
  );
  margin-bottom: var(${vars.spacing.step6});

  & > * {
    position: relative;
    z-index: 20;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    background-color: #0d0a0b;
    z-index: 10;
  }
`;

const title = toProps(css`
  ${decl.grid.area.full}
  ${decl.font.size.step7}
  ${decl.font.serif.bold}
  line-height: var(${vars.font.size.step7});
  font-weight: normal;
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
  text-transform: uppercase;

  letter-spacing: calc(var(${vars.font.size.step1}) * 0.1);
`);

export default { root, date, tagList, tag, title, subtitle };
