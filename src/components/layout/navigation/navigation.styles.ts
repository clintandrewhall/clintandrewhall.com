import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const narrowMediaQuery = '(max-width: 750px)';

type NavigationState = {
  isNarrow: boolean;
  isOpen: boolean;
};

const root = css`
  ${decl.font.sansSerif.bold}
  letter-spacing: calc(var(${vars.spacing.step1}) / 2);
  text-transform: uppercase;

  @media ${narrowMediaQuery} {
    --item-height: calc(var(${vars.font.size.step2}) + (var(${vars.spacing.step7}) * 2) + 1px);
    --list-height: calc((var(--item-height) * 6) + 1px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const rootClosed = css`
  @media ${narrowMediaQuery} {
    /* pointer-events: none; */
  }
`;

const list = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: var(${vars.header.height});
  justify-content: end;
  list-style: none;

  @media ${narrowMediaQuery} {
    align-items: stretch;
    ${decl.font.size.step2}
    ${decl.color.background.dark}
    background-color: rgba(0, 0, 0, 0);
    bottom: auto;
    flex-direction: column;
    height: var(--list-height);
    justify-content: flex-end;
    left: 0;
    line-height: var(${vars.font.size.step2});
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: var(${vars.header.height});
    transform: translate3d(0, -100%, 0);
    transition:
      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 1s ease,
      background-color 1s ease;
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
  }
`;

const listOpen = css`
  @media ${narrowMediaQuery} {
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
    pointer-events: auto;
    transform: translate3d(0, 0, 0);
  }
`;

const button = css`
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

  @media not ${narrowMediaQuery} {
    display: none;
  }
`;

const buttonOpen = css`
  @media ${narrowMediaQuery} {
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
  }
`;

const getRoot = ({ isNarrow, isOpen }: NavigationState) =>
  toProps(cx(root, isNarrow && !isOpen && rootClosed));

const getList = ({ isNarrow, isOpen }: NavigationState) =>
  toProps(cx(list, isNarrow && isOpen && listOpen));

const getButton = ({ isNarrow, isOpen }: NavigationState) =>
  toProps(cx(button, isNarrow && isOpen && buttonOpen));

const navigationStyles = (state: NavigationState) => ({
  root: getRoot(state),
  list: getList(state),
  button: getButton(state),
});

navigationStyles.root = getRoot;
navigationStyles.list = getList;
navigationStyles.button = getButton;

export default navigationStyles;
