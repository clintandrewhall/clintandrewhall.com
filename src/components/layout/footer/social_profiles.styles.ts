import { css, type CSSProps, cx, toProps } from '@lib/css';
import { theme } from '@theme';
import type { IconSocial } from '@theme/icons';

const { vars, icons, decl } = theme;

const root = toProps(css`
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  justify-content: center;

  & a {
    ${decl.color.font.light}

    &:hover,
      &:active,
      &:focus {
      ${decl.color.font.light}
    }
  }

  @media (max-width: 600px) {
    &:before {
      content: '';
      width: 100%;
      order: 1;
    }

    & > li:nth-child(n + 4) {
      order: 1;

      &:before {
        content: '';
      }
    }

    & > li:nth-child(n + 5):before {
      content: '|';
    }
  }
`);

const item = toProps(css`
  ${decl.font.sansSerif.light};
  ${decl.font.size.stepN1};
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.25);
  padding: var(${vars.spacing.step1}) var(${vars.spacing.step3});
  position: relative;

  &:before {
    content: '|';
    position: absolute;
    ${decl.color.font.text};
    left: -2px;
  }

  &:first-child:before {
    content: '';
  }
`);

const link = toProps(css`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(${vars.spacing.step1});
`);

const logo = css`
  ${decl.font.size.step0}

  &:before {
    position: relative;
    top: 1px;
  }
`;

const logos: Record<IconSocial, CSSProps> = {
  github: toProps(cx(icons.github(), logo)),
  linkedin: toProps(cx(icons.linkedin(), logo)),
  twitter: toProps(cx(icons.twitter(), logo)),
  instagram: toProps(cx(icons.instagram(), logo)),
  facebook: toProps(cx(icons.facebook(), logo)),
};

export default { root, logos, link, item };
