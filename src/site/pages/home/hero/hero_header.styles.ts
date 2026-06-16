import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.color.font.light}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(${vars.spacing.step5});
`);

const headerGroup = toProps(css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(${vars.spacing.step5});
  text-shadow: 1px 1px 3px var(${vars.color.font.dropShadow});

  ${decl.media.lessThan.comfortable} {
    & br {
      display: none;
    }
  }
`);

const title = toProps(css`
  ${decl.font.serif.bold}
  font-size: ${theme.util.font.fluidSize(1.75, 5, 'step5')};
  line-height: var(${vars.font.lineHeight.step6});

  @container hero (min-aspect-ratio: 1/1) {
    font-size: ${theme.util.font.fluidSize(1.2, 3.25, 'step4')};
    line-height: var(${vars.font.lineHeight.step5});
  }
`);

const subtitle = toProps(css`
  ${decl.font.serif.regular}
  font-size: ${theme.util.font.fluidSize(1.25, 3.25, 'step4')};
  line-height: var(${vars.font.lineHeight.step5});

  @container hero (min-aspect-ratio: 1/1) {
    font-size: ${theme.util.font.fluidSize(0.9, 2.25, 'step3')};
    line-height: var(${vars.font.lineHeight.step4});
  }
`);

const linkList = toProps(css`
  ${decl.font.size.stepN1}
  ${decl.font.sansSerif.medium}
  display: flex;
  flex-direction: row;
  gap: var(${vars.spacing.step9});
  letter-spacing: calc(var(${vars.font.size.step1}) * 0.15);
  list-style: none;
  text-align: center;
  text-transform: uppercase;
`);

const linkItem = toProps(css`
  border-color: var(${vars.color.font.light});
  border-radius: var(${vars.spacing.step0});
  border-style: solid;
  border-width: 2px;
  flex-grow: 0;
  margin-bottom: var(${vars.spacing.step1});
  white-space: nowrap;
`);

const link = toProps(css`
  ${decl.color.font.light}
  display: block;
  padding-bottom: var(${vars.spacing.step3});
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
  padding-top: var(${vars.spacing.step3});
  transition:
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    ${decl.color.font.dark}
    ${decl.color.background.light}
  }
`);

export default { root, headerGroup, title, subtitle, linkList, linkItem, link };
