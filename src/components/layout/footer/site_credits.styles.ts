import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.font.size.stepN1};
  ${decl.color.background.dark}
  ${decl.color.font.text}
    margin-top: var(${vars.spacing.sectionBottom});
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & > span {
    display: inline-block;
    position: relative;
    padding: var(${vars.spacing.step0}) var(${vars.spacing.step5});

    & > a {
      display: inline-block;
      &:hover,
      &:active,
      &:focus {
        ${decl.color.font.lightAccent}
      }
    }

    &:before {
      content: '|';
      position: absolute;
      left: -2px;
    }

    &:first-child:before {
      content: '';
    }
  }

  @media (max-width: 600px) {
    &:before {
      content: '';
      width: 100%;
      order: 1;
    }

    & > :nth-child(n + 2) {
      order: 1;

      &:before {
        content: '';
      }
    }

    & > :nth-child(n + 3):before {
      content: '|';
    }
  }
`);

export default { root };
