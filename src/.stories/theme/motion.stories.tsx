import type { Meta, StoryObj } from '@storybook/react-vite';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { decorators } from '../decorators';

const meta: Meta = {
  title: 'Theme/Motion',
  decorators,
};

export default meta;

const { vars } = theme;

const page = css`
  ${theme.decl.color.background.surfaceMuted}
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 48px;
`;

const swatchRow = css`
  align-items: center;
  display: flex;
  font-family: monospace;
  font-size: 13px;
  gap: 16px;
`;

const swatchBox = css`
  ${theme.decl.color.background.inverse}
  border-radius: var(${vars.radius.md});
  cursor: pointer;
  height: 64px;
  width: 64px;

  &:hover {
    transform: translateX(120px) rotate(45deg);
  }
`;

const fast = css`
  transition: transform var(${vars.motion.duration.fast}) var(${vars.motion.easing.standard});
`;
const base = css`
  transition: transform var(${vars.motion.duration.base}) var(${vars.motion.easing.standard});
`;
const slow = css`
  transition: transform var(${vars.motion.duration.slow}) var(${vars.motion.easing.standard});
`;
const slower = css`
  transition: transform var(${vars.motion.duration.slower}) var(${vars.motion.easing.linear});
`;

export const Motion: StoryObj = {
  render: () => (
    <div className={page}>
      <p>Hover each swatch to see its duration + easing.</p>
      <div className={swatchRow}>
        <div className={cx(swatchBox, fast)} />
        <span>duration.fast · easing.standard</span>
      </div>
      <div className={swatchRow}>
        <div className={cx(swatchBox, base)} />
        <span>duration.base · easing.standard</span>
      </div>
      <div className={swatchRow}>
        <div className={cx(swatchBox, slow)} />
        <span>duration.slow · easing.standard</span>
      </div>
      <div className={swatchRow}>
        <div className={cx(swatchBox, slower)} />
        <span>duration.slower · easing.linear</span>
      </div>
    </div>
  ),
};
