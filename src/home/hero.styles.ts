import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  --greeting-base: var(${vars.spacing.step6});
  --greeting-padding: calc(var(--greeting-base) * 2);
  --greeting-line: calc(var(--greeting-padding) - var(${vars.spacing.step2}));
  min-height: 100vh;
  width: 100%;
  height: 100%;
  position: relative;
`);

const imageLayer = toProps(
  css`
    position: relative;

    &:before {
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;

      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.6) 60%,
        rgba(0, 0, 0, 0.8) 100%
      );
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
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  align-items: end;
`);

const headerGroup = toProps(css`
  ${decl.color.font.light}
  ${decl.font.size.step5}
  ${decl.font.weight.bold}
  grid-area: auto / 1 / auto / span 9;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 975px), (orientation: portrait) {
    grid-area: auto / 1 / auto / span 12;
  }
`);

const greeting = toProps(css`
  ${decl.font.sansSerif.bold}
  ${decl.font.size.step1}
  ${decl.font.weight.normal}
  position: relative;
  text-transform: uppercase;
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.25);
  text-shadow: 1px 1px 1px var(${vars.color.font.shaded});
  padding-left: var(--greeting-padding);
  padding-right: var(--greeting-padding);

  &:before {
    display: block;
    content: '';
    width: var(--greeting-line);
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 50%;
  }
`);

const intro = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step5}
  ${decl.font.weight.bold}
  text-shadow: 2px 2px 2px var(${vars.color.font.shaded});
  line-height: calc(var(${vars.font.size.step5}) + var(${vars.font.size.step1}));
  margin-top: var(${vars.spacing.step4});
  padding-left: var(--greeting-base);
`);

const links = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.font.sansSerif.medium}
  text-transform: uppercase;
  grid-area: auto / 10 / auto / span 3;
  list-style: none;
  text-align: center;
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.15);

  @media (max-width: 975px), (orientation: portrait) {
    grid-area: auto / 1 / auto / span 12;
    display: flex;
    flex-direction: row;
    padding-left: var(--greeting-base);
    gap: var(${vars.spacing.step9});
  }
`);

const link = toProps(css`
  border-width: 2px;
  border-style: solid;
  border-color: var(${vars.color.font.light});
  margin-bottom: var(${vars.spacing.step3});
  white-space: nowrap;
  flex-grow: 1;

  @media (max-width: 975px), (orientation: portrait) {
    flex-grow: 0;
    margin-bottom: var(${vars.spacing.step1});
  }

  & > a {
    ${decl.color.font.light}
    display: block;
    padding-left: var(${vars.spacing.step4});
    padding-right: var(${vars.spacing.step4});
    padding-top: var(${vars.spacing.step3});
    padding-bottom: var(${vars.spacing.step3});

    &:hover {
      ${decl.color.font.dark}
      background-color: var(${vars.color.font.light});
    }
  }
`);

const profiles = toProps(css`
  justify-content: right;
  grid-area: auto / 1 / auto / span 12;

  @media (max-width: 975px), (orientation: portrait) {
    justify-content: left;
    padding-left: var(--greeting-base);
  }

  & i {
    ${decl.font.size.step2}
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
