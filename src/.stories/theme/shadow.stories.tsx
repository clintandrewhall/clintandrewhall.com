import type { Meta, StoryObj } from '@storybook/react-vite';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { decorators } from '../decorators';

const meta: Meta = {
  title: 'Theme/Shadow',
  decorators,
};

export default meta;

const { boxShadow, dropShadow, color } = theme.decl;

const page = css`
  ${color.background.surfaceMuted}
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 48px;
`;

const card = css`
  ${color.background.surface}
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  min-height: 140px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

const swatch = css`
  ${color.background.inverse}
  border-radius: 8px;
  height: 64px;
  width: 64px;
`;

const labelMono = css`
  font-family: monospace;
  font-size: 13px;
`;

const boxStyles = {
  xs: css`
    ${boxShadow.xs}
  `,
  sm: css`
    ${boxShadow.sm}
  `,
  md: css`
    ${boxShadow.md}
  `,
  lg: css`
    ${boxShadow.lg}
  `,
};

const dropStyles = {
  xs: css`
    ${dropShadow.xs}
  `,
  sm: css`
    ${dropShadow.sm}
  `,
  md: css`
    ${dropShadow.md}
  `,
  lg: css`
    ${dropShadow.lg}
  `,
};

type Key = keyof typeof boxStyles;

const semantics: Record<Key, string> = {
  xs: 'hairline',
  sm: 'resting card',
  md: 'hover',
  lg: 'overlay / menu',
};

const KEYS = ['xs', 'sm', 'md', 'lg'] as const satisfies readonly Key[];

export const BoxShadow: StoryObj = {
  render: () => (
    <div className={page}>
      {KEYS.map((key) => (
        <div className={cx(card, boxStyles[key])} key={key}>
          <strong>boxShadow.{key}</strong>
          <span className={labelMono}>{semantics[key]}</span>
        </div>
      ))}
    </div>
  ),
};

export const DropShadow: StoryObj = {
  render: () => (
    <div className={page}>
      {KEYS.map((key) => (
        <div className={card} key={key}>
          <div className={cx(swatch, dropStyles[key])} />
          <strong>dropShadow.{key}</strong>
          <span className={labelMono}>{semantics[key]}</span>
        </div>
      ))}
    </div>
  ),
};
