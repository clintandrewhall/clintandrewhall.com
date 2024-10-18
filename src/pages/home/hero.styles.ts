import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  --greeting-base: var(${vars.spacing.step6});
  --greeting-padding: calc(var(--greeting-base) * 2);
  --greeting-line: calc(var(--greeting-padding) - var(${vars.spacing.step2}));
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%;
`);

const imageLayer = toProps(
  css`
    position: relative;

    &:before {
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.6) 60%,
        rgba(0, 0, 0, 0.8) 100%
      );
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
  { backgroundPosition: 'center right' },
);

const headerLayer = toProps(css`
  align-items: end;
  display: flex;
  flex-direction: row;
  padding-bottom: var(${vars.spacing.sectionBottom});
  padding-inline: var(${vars.grid.gutter});
  position: relative;

  @media (min-aspect-ratio: 1.7/1) {
    padding-bottom: var(${vars.spacing.step6});
  }
`);

const headerContent = toProps(css`
  width: 100%;
`);

const header = toProps(css`
  ${decl.grid.root}

  align-items: end;
  margin-bottom: 0;
  margin-top: 0;
  width: 100%;

  @media (max-width: 400px), (max-height: 400px) {
    gap: var(${vars.spacing.step3});
  }
`);

const headerGroup = toProps(css`
  ${decl.grid.area.fourColSpanThree}
  ${decl.color.font.light}
  ${decl.font.size.step5}
  ${decl.font.weight.bold}

  display: flex;
  flex-direction: column-reverse;

  ${decl.media.wideOrPortrait} {
    ${decl.grid.area.full}
  }
`);

const greeting = toProps(css`
  ${decl.font.sansSerif.bold}
  ${decl.font.size.step1}
  ${decl.font.weight.normal}

  letter-spacing: calc(var(${vars.font.size.step1}) * 0.25);
  padding-left: var(--greeting-padding);
  padding-right: var(--greeting-padding);
  position: relative;
  text-shadow: 1px 1px 1px var(${vars.color.font.dropShadow});
  text-transform: uppercase;

  &:before {
    background-color: #fff;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    width: var(--greeting-line);
  }
`);

const intro = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step5}
  ${decl.font.weight.bold}

  line-height: calc(var(${vars.font.size.step5}) + var(${vars.font.size.step1}));
  margin-top: var(${vars.spacing.step4});
  padding-left: var(--greeting-base);
  text-shadow: 2px 2px 2px var(${vars.color.font.dropShadow});

  @media (max-width: 400px), (max-height: 450px) {
    ${decl.font.size.step3}
    line-height: calc(var(${vars.font.size.step5}));
    margin-top: var(${vars.spacing.step3});
  }
`);

const links = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.font.sansSerif.medium}
  ${decl.grid.area.fourColFour}
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.15);
  list-style: none;
  text-align: center;
  text-transform: uppercase;

  ${decl.media.wideOrPortrait} {
    ${decl.grid.area.full}
    display: flex;
    flex-direction: row;
    gap: var(${vars.spacing.step9});
    padding-left: var(--greeting-base);
  }

  @media (max-width: 400px), (max-height: 450px) {
    gap: var(${vars.spacing.step5});
  }
`);

const link = toProps(css`
  border-color: var(${vars.color.font.light});
  border-style: solid;
  border-width: 2px;
  flex-grow: 1;
  margin-bottom: var(${vars.spacing.step3});
  white-space: nowrap;

  & > a {
    ${decl.color.font.light}

    display: block;
    padding-bottom: var(${vars.spacing.step3});
    padding-left: var(${vars.spacing.step4});
    padding-right: var(${vars.spacing.step4});
    padding-top: var(${vars.spacing.step3});

    &:hover {
      ${decl.color.font.dark}
      background-color: var(${vars.color.font.light});
    }
  }

  ${decl.media.wideOrPortrait} {
    flex-grow: 0;
    margin-bottom: var(${vars.spacing.step1});
  }

  @media (max-width: 400px), (max-height: 450px) {
    & > a {
      padding-bottom: var(${vars.spacing.step2});
      padding-left: var(${vars.spacing.step3});
      padding-right: var(${vars.spacing.step3});
      padding-top: var(${vars.spacing.step2});
    }
  }
`);

const profiles = toProps(css`
  ${decl.grid.area.full}
  justify-content: right;

  & i {
    ${decl.font.size.step3}

    @media (max-width: 500px), (orientation: portrait) {
      ${decl.font.size.step4}
    }
  }

  ${decl.media.wideOrPortrait} {
    justify-content: left;
    padding-left: var(--greeting-base);
  }
`);

export default {
  root,
  profiles,
  headerContent,
  header,
  greeting,
  intro,
  imageLayer,
  headerLayer,
  headerGroup,
  links,
  link,
};
