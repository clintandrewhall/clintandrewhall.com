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
  ${decl.font.serif.displayBold}
  font-size: ${theme.util.font.fluidSize(1.75, 5, 'step5')};
  line-height: var(${vars.font.lineHeight.step6});

  @container hero (min-aspect-ratio: 1/1) {
    font-size: ${theme.util.font.fluidSize(1.2, 3.25, 'step4')};
    line-height: var(${vars.font.lineHeight.step5});
  }
`);

const subtitle = toProps(css`
  ${decl.font.serif.displayRegular}
  font-size: ${theme.util.font.fluidSize(1.25, 3.25, 'step4')};
  line-height: var(${vars.font.lineHeight.step5});

  @container hero (min-aspect-ratio: 1/1) {
    font-size: ${theme.util.font.fluidSize(0.9, 2.25, 'step3')};
    line-height: var(${vars.font.lineHeight.step4});
  }
`);

const linkList = toProps(css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(${vars.spacing.step9});
  list-style: none;
`);

const linkItem = toProps(css`
  flex-grow: 0;
  margin-bottom: var(${vars.spacing.step1});
`);

export default { root, headerGroup, title, subtitle, linkList, linkItem };
