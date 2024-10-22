import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const rootBase = css`
  ${decl.font.sansSerif.bold}
  letter-spacing: calc(var(${vars.spacing.step1}) / 2);
  text-transform: uppercase;
`;

const rootNarrow = css`
  --item-height: calc(var(${vars.font.size.step2}) + (var(${vars.spacing.step7}) * 2) + 1px);
  --list-height: calc((var(--item-height) * 6) + 1px);
  height: var(--list-height);
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: var(${vars.header.height});
`;

const list = toProps(css`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: var(${vars.header.height});
  justify-content: end;
  list-style: none;
`);

const narrowList = (isOpen: boolean = false) =>
  cx(
    toProps(
      css`
        ${decl.font.size.step2}
        align-items: baseline;
        ${decl.color.background.dark}
        bottom: auto;
        display: flex;
        flex-direction: column;
        height: var(--list-height);
        justify-content: end;
        left: 0;
        line-height: var(${vars.font.size.step2});
        list-style: none;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: calc(-1 * var(--list-height));
        transition: top 0.5s ease-out;
        width: 100%;

        & > li {
          width: 100%;
        }

        & > li > a {
          border-bottom: 1px solid var(${vars.color.border.grid});
          display: block;
          padding-bottom: var(${vars.spacing.step7});
          padding-left: var(${vars.spacing.step7});
          padding-right: var(${vars.spacing.step7});
          padding-top: var(${vars.spacing.step7});
        }

        & > li:first-child > a {
          border-top: 1px solid var(${vars.color.border.grid});
        }
      `,
      {
        top: isOpen ? '0' : 'revert-layer',
      },
    ),
    list,
  );

const menuButtonOpen = css`
  & > span {
    background-color: transparent;

    &:before {
      background-color: white;
      top: 0;
      transform: rotate(135deg);
    }

    &:after {
      background-color: white;
      bottom: 0;
      transform: rotate(225deg);
    }
  }
`;

const menuButtonBase = css`
  background-color: transparent;
  border-style: none;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  height: var(${vars.header['content-height']});
  overflow: hidden;
  position: absolute;
  right: calc(var(${vars.header.height}) + var(${vars.spacing.step2}));
  text-indent: -1000px;
  top: var(${vars.header.padding});
  transition: all 0.3s ease-in-out;
  width: var(${vars.header['content-height']});
  z-index: 5000;

  & > span {
    background-color: white;
    display: block;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    transition: all 0.5s ease-in-out;
    width: 100%;

    &:before,
    &:after {
      background-color: white;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      transition: all 0.5s ease-in-out;
      width: 100%;
    }

    &:before {
      top: -9px;
    }

    &:after {
      bottom: -9px;
    }
  }
`;

const menuButton = (isOpen: boolean = false) =>
  toProps(isOpen ? cx(menuButtonOpen, menuButtonBase) : menuButtonBase);

const root = (isNarrow: boolean = false) => toProps(isNarrow ? cx(rootBase, rootNarrow) : rootBase);

export default { root, list, menuButton, narrowList };
