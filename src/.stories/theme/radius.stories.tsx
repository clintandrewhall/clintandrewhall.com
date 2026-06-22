import type { Meta, StoryObj } from '@storybook/react-vite';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { decorators } from '../decorators';

const meta: Meta = {
  title: 'Theme/Radius',
  decorators,
};

export default meta;

const { radius, color } = theme.decl;

const page = css`
  ${color.background.surfaceMuted}
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  padding: 48px;
`;

const tile = css`
  ${color.background.inverse}
  align-items: center;
  color: white;
  display: flex;
  font-family: monospace;
  font-size: 13px;
  height: 120px;
  justify-content: center;
`;

const variants = {
  sm: css`
    ${radius.sm}
  `,
  md: css`
    ${radius.md}
  `,
  pill: css`
    ${radius.pill}
  `,
  full: css`
    ${radius.full}
    aspect-ratio: 1;
    height: 120px;
    width: 120px;
  `,
};

const KEYS = ['sm', 'md', 'pill', 'full'] as const;

export const Radius: StoryObj = {
  render: () => (
    <div className={page}>
      {KEYS.map((key) => (
        <div className={cx(tile, variants[key])} key={key}>
          radius.{key}
        </div>
      ))}
    </div>
  ),
};
