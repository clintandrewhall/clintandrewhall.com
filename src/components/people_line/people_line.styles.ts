import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

export const root = toProps(css`
  --peopleline-gap: 10px;
  --peopleline-slide-width: 100%;

  padding-bottom: 0;
  padding-left: var(${vars.spacing.step9});
  padding-right: var(${vars.spacing.step9});
  padding-top: 0;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    width: var(${vars.spacing.step9});
  }

  &:before {
    background-image: linear-gradient(
      to left,
      var(${vars.color.background.subtle}),
      var(/* ${vars.color.background.light}:8 */)
    );
    left: 0;
  }

  &:after {
    background-image: linear-gradient(
      to right,
      var(${vars.color.background.subtle}),
      var(/* ${vars.color.background.light}:10 */)
    );
    right: 0;
  }
`);

const scroller = toProps(css`
  border-top: 1px solid var(${vars.color.border.subtle});
  display: flex;
  gap: var(--peopleline-gap);
  margin-left: auto;
  margin-right: auto;
  max-width: var(${vars.grid.maxWidth});
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding-inline: var(--peopleline-gap);
  scroll-padding-inline: var(--peopleline-gap);
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`);

const item = toProps(css`
  flex: 0 0 var(--peopleline-slide-width);
  scroll-snap-align: start;

  ${decl.media.greaterThan.expanded} {
    flex-basis: calc((100% - var(--peopleline-gap)) / 2);
  }
`);

const controls = toProps(css`
  align-items: center;
  display: flex;
  gap: var(${vars.spacing.step2});
  justify-content: center;
  margin-top: var(${vars.spacing.step4});
`);

const button = toProps(css`
  ${decl.boxShadow.sm}
  ${decl.color.background.dark}
  ${decl.color.font.light}

  align-items: center;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: var(${vars.spacing.step7});
  justify-content: center;
  line-height: 1;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  width: var(${vars.spacing.step7});

  &:hover,
  &:focus {
    ${decl.color.background.accent}
  }

  &:disabled {
    cursor: default;
    opacity: 0.35;
  }

  &:disabled:hover,
  &:disabled:focus {
    ${decl.color.background.dark}
  }

  & > span {
    ${decl.font.size.step2}
    display: block;
    transform: translateY(-1px);
  }
`);

const pagination = toProps(css`
  ${decl.color.background.subtle}

  align-items: center;
  border-radius: 999px;
  display: flex;
  gap: 4px;
  min-height: 22px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
`);

const dotBase = css`
  background-color: var(${vars.color.background.subtlest});
  border-bottom-width: 0;
  border-left-width: 0;
  border-radius: 50%;
  border-right-width: 0;
  border-top-width: 0;
  cursor: pointer;
  height: 8px;
  opacity: 0.35;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  width: 8px;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

const dotActive = css`
  background-color: var(${vars.color.background.light});
  opacity: 1;
`;

const dot = (isActive: boolean) => toProps(cx(dotBase, isActive && dotActive));

export default { root, scroller, item, controls, button, pagination, dot };
