import { css, type CSSProps, cx, toProps } from '@lib/css';
import { theme } from '@theme';
import type { IconSocial } from '@theme/icons';

const { vars, icons, decl } = theme;

const root = toProps(css`
  display: flex;
  flex-flow: row wrap;
  list-style: none;

  & a {
    ${decl.color.font.light}

    &:hover,
      &:active,
      &:focus {
      ${decl.color.font.light}
    }
  }
`);

const item = ({ showDivider = true, showLabel = true }) => {
  const base = css`
    ${decl.font.sansSerif.light};
    ${decl.font.size.stepN1};
    letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.25);
    padding-bottom: var(${vars.spacing.step1});
    padding-left: var(${vars.spacing.step3});
    padding-right: var(${vars.spacing.step3});
    padding-top: var(${vars.spacing.step1});
    position: relative;

    &:before {
      ${decl.color.font.text};
      left: -2px;
      position: absolute;
    }

    &:first-child:before {
      content: '';
    }
  `;

  const showLabelClass = css`
    @media (max-width: 600px) {
      &:before {
        content: '';
        order: 1;
        width: 100%;
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
  `;

  return toProps(
    cx(
      cx(
        base,
        showDivider
          ? css`
              &:before {
                content: '|';
              }
            `
          : css`
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
              }
            `,
      ),
      showLabel ? showLabelClass : '',
    ),
  );
};

const link = toProps(css`
  align-items: center;
  display: flex;
  gap: var(${vars.spacing.step1});
  justify-content: center;
  text-transform: uppercase;
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
