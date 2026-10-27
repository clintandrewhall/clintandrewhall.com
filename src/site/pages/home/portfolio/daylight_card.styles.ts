import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

/**
 * "Daylight" work card (ported from .redesign/v2.html) reconciled to the
 * committed system: true-neutral surfaces (no warm paper), flat at rest
 * (Flat Surface Rule — shadow only as a hover state response), single-weight
 * serif title (no faux bold), and oxblood kept scarce (tag links + the hover
 * arrow only).
 */
const root = toProps(css`
  ${decl.color.background.surface}
  ${decl.color.border.separator}

  border-style: solid;
  border-width: 1px;
  border-radius: var(${vars.radius.md});
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  position: relative;
  transition:
    transform var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo}),
    border-color var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo}),
    box-shadow var(${vars.motion.duration.slow}) var(${vars.motion.easing.expo});

  /* Image zoom + arrow nudge are driven from the card so a hover anywhere
     (including the stretched title link) animates the whole tile. */
  &:hover,
  &:focus-within {
    ${decl.color.border.medium}

    box-shadow: 0 16px 36px -22px rgba(13, 10, 11, 0.35);
    transform: translateY(-4px);
  }

  &:hover figure img,
  &:focus-within figure img {
    transform: scale(1.04);
  }

  &:hover footer > span,
  &:focus-within footer > span {
    ${decl.color.font.accent}
  }

  &:hover footer > span > span,
  &:focus-within footer > span > span {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition:
      border-color var(${vars.motion.duration.base}) var(${vars.motion.easing.linear}),
      box-shadow var(${vars.motion.duration.base}) var(${vars.motion.easing.linear});

    &:hover,
    &:focus-within {
      transform: none;
    }

    &:hover figure img,
    &:focus-within figure img,
    &:hover footer > span > span,
    &:focus-within footer > span > span {
      transform: none;
    }
  }
`);

const media = toProps(css`
  ${decl.color.background.surfaceMuted}

  aspect-ratio: 16 / 10;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;

  & img {
    display: block;
    height: 100%;
    object-fit: cover;
    transition: transform var(${vars.motion.duration.slower}) var(${vars.motion.easing.expo});
    width: 100%;
  }
`);

const body = toProps(css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(${vars.spacing.step1});
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
  padding-bottom: var(${vars.spacing.step4});
  padding-top: var(${vars.spacing.step4});
`);

const title = toProps(css`
  ${decl.font.serif.display}
  ${decl.color.font.dark}
  ${decl.font.size.step2}

  letter-spacing: -0.01em;
  line-height: 1.1;
  overflow-wrap: break-word;
  text-wrap: balance;
`);

/**
 * Stretched link: the ::after covers the whole card so the entire tile
 * navigates to the entry, while tag links and the external link sit on a
 * higher layer and stay independently clickable.
 */
const titleLink = toProps(css`
  color: inherit;

  &::after {
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 2px solid var(${vars.color.background.accent});
    outline-offset: 2px;
  }
`);

const tags = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}

  display: flex;
  flex-wrap: wrap;
  gap: 0.35em;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 2;

  & > a {
    ${decl.color.font.accent}

    &:hover,
    &:focus-visible {
      ${decl.color.font.dark}
    }
  }

  & > a + a::before {
    ${decl.color.font.dim}

    content: '· ';
    margin-right: 0.35em;
  }
`);

const caption = toProps(css`
  ${decl.font.sansSerif.regular}
  ${decl.color.font.muted}
  ${decl.font.size.step0}

  display: -webkit-box;
  line-height: 1.5;
  overflow: hidden;
  text-wrap: pretty;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`);

const footer = toProps(css`
  align-items: center;
  display: flex;
  gap: var(${vars.spacing.step2});
  justify-content: space-between;
  margin-top: auto;
  padding-top: var(${vars.spacing.step3});
`);

const more = toProps(css`
  ${decl.font.sansSerif.semiBold}
  ${decl.color.font.dark}
  ${decl.font.size.step0}

  align-items: baseline;
  display: inline-flex;
  gap: 0.4em;
  transition: color var(${vars.motion.duration.base}) var(${vars.motion.easing.expo});
`);

const arrow = toProps(css`
  display: inline-block;
  transition: transform var(${vars.motion.duration.base}) var(${vars.motion.easing.expo});
`);

const external = toProps(css`
  ${decl.color.font.dim}
  ${decl.font.size.step1}

  align-items: center;
  display: inline-flex;
  position: relative;
  z-index: 2;

  &:hover,
  &:focus-visible {
    ${decl.color.font.accent}
  }
`);

export default {
  root,
  media,
  body,
  title,
  titleLink,
  tags,
  caption,
  footer,
  more,
  arrow,
  external,
};
