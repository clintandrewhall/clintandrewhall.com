import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.color.background.dark}
  ${decl.color.font.text}
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: var(${vars.spacing.sectionBottom});

  & > span {
    display: inline-block;
    padding-bottom: var(${vars.spacing.step0});
    padding-left: var(${vars.spacing.step5});
    padding-right: var(${vars.spacing.step5});
    padding-top: var(${vars.spacing.step0});
    position: relative;

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
      left: -2px;
      position: absolute;
    }

    &:first-child:before {
      content: '';
    }
  }

  ${decl.media.medium} {
    &:before {
      content: '';
      order: 1;
      width: 100%;
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
