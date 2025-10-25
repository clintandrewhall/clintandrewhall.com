import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.font.size.step0}
  border-radius: var(${vars.spacing.step1});
  height: 0;
  overflow: hidden;
  padding-bottom: 75%;
  position: relative;

  & {
    a {
      cursor: pointer;
    }

    > p,
    > footer {
      opacity: 0;
      transition: all 0.3s;
    }

    > p {
      top: var(${vars.spacing.step7});
    }

    > footer {
      right: var(${vars.spacing.step9});
    }

    > p > a,
    > footer a {
      pointer-events: none;
    }
  }

  &:before,
  &:after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    background-color: #000;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }

  &:after {
    background-image: linear-gradient(to bottom, transparent 0%, #000 100%);
    opacity: 0.8;
    z-index: 1;
  }

  &:hover,
  &:focus,
  &:focus-within {
    &:before {
      opacity: 0.8;
    }

    > p,
    > footer {
      opacity: 1;
    }

    > p {
      top: var(${vars.spacing.step3});
    }

    > footer {
      right: var(${vars.spacing.step5});
    }

    > p > a,
    > footer a {
      pointer-events: auto;
    }
  }

  ${decl.media.comfortable} {
    ${decl.font.size.step1}
  }
`);

const header = toProps(css`
  bottom: var(${vars.spacing.step3});
  left: var(${vars.spacing.step5});
  position: absolute;
  z-index: 3;
`);

const title = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.color.font.light}

  letter-spacing: calc(var(${vars.font.size.step1}) * 0.1);
  margin-bottom: var(${vars.spacing.step0});
  text-transform: uppercase;

  ${decl.media.comfortable} {
    ${decl.font.size.step0}
    letter-spacing: calc(var(${vars.font.size.step2}) * 0.1);
  }
`);

const caption = toProps(css`
  ${decl.color.font.light}
  ${decl.font.sansSerif.regular}

  left: var(${vars.spacing.step5});
  line-height: var(${vars.spacing.step5});
  position: absolute;
  right: var(${vars.spacing.step5});
  top: var(${vars.spacing.step5});
  z-index: 3;

  & a {
    ${decl.color.background.dark}
    ${decl.color.font.light}

    border-color: var(${vars.color.background.light});
    border-style: solid;
    border-width: 2px;

    &:hover {
      ${decl.color.font.dark}
      ${decl.color.background.light}
    }
  }

  ${decl.media.comfortable} {
    left: var(${vars.spacing.step6});
    line-height: var(${vars.spacing.step6});
    right: var(${vars.spacing.step6});
    top: var(${vars.spacing.step6});
  }
`);

const tags = toProps(css`
  ${decl.font.size.stepN1};

  letter-spacing: calc(var(${vars.font.size.step1}) * 0.08);

  & > a {
    ${decl.color.font.dim}
    ${decl.font.sansSerif.regular}

    &:hover {
      ${decl.color.font.light}
    }
  }

  ${decl.media.comfortable} {
    ${decl.font.size.step0}

    letter-spacing: calc(var(${vars.font.size.step2}) * 0.08);
  }
`);

const details = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.font.sansSerif.regular}

  display: block;
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.08);
  margin-top: var(${vars.spacing.step3});
  padding-bottom: var(${vars.spacing.step2});
  padding-left: var(${vars.spacing.step2});
  padding-right: var(${vars.spacing.step2});
  padding-top: var(${vars.spacing.step2});
  text-align: center;
  text-transform: uppercase;

  ${decl.media.comfortable} {
    ${decl.font.size.step0}

    letter-spacing: calc(var(${vars.font.size.step2}) * 0.08);
  }
`);

const footer = toProps(css`
  bottom: var(${vars.spacing.step3});
  position: absolute;
  right: var(${vars.spacing.step5});
  z-index: 3;
`);

const linkIcon = toProps(css`
  ${decl.media.comfortable} {
    ${decl.font.size.step1}
  }
`);

const projectLink = toProps(css`
  ${decl.color.font.light}
  ${decl.font.size.step0}

  border-radius: 50%;
  box-shadow: 0 0 0 1px var(${vars.color.background.light});
  display: block;
  height: var(${vars.spacing.step9});
  line-height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
  text-align: center;
  width: var(${vars.spacing.step9});

  a& {
    ${decl.color.background.dark}
    ${decl.color.font.light}
  }

  &:hover,
  &:active,
  &:focus {
    ${decl.color.background.light}
    ${decl.color.font.dark}
  }

  ${decl.media.comfortable} {
    ${decl.font.size.step0}

    height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
    line-height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}) + 2px);
    width: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
  }
`);

const image = toProps(css`
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: 0;
`);

export default {
  root,
  image,
  caption,
  footer,
  header,
  title,
  tags,
  details,
  projectLink,
  linkIcon,
};
