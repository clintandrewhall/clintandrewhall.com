import type { Meta, StoryObj } from '@storybook/react-vite';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { decorators } from '../decorators';

const meta: Meta = {
  title: 'Theme/Color',
  decorators,
};

export default meta;

const page = css`
  ${theme.decl.color.background.surfaceMuted}
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  padding: 48px;
`;

const group = css`
  ${theme.decl.color.background.surface}
  border-radius: var(${theme.vars.radius.md});
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
`;

const swatch = css`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(${theme.vars.radius.sm});
  display: flex;
  gap: 16px;
  padding: 12px;
`;

const chip = css`
  border-radius: var(${theme.vars.radius.sm});
  height: 40px;
  width: 40px;
`;

const label = css`
  font-family: monospace;
  font-size: 13px;
`;

const bgSurface = css`
  ${theme.decl.color.background.surface}
`;
const bgSurfaceMuted = css`
  ${theme.decl.color.background.surfaceMuted}
`;
const bgSurfaceMutedStrong = css`
  ${theme.decl.color.background.surfaceMutedStrong}
`;
const bgInverse = css`
  ${theme.decl.color.background.inverse}
`;
const bgInverseMuted = css`
  ${theme.decl.color.background.inverseMuted}
`;
const bgShade = css`
  ${theme.decl.color.background.shade}
`;
const bgAccent = css`
  ${theme.decl.color.background.accent}
`;

const fontDark = css`
  background-color: #0d0a0b;
`;
const fontLight = css`
  background-color: #fff;
  border: 1px solid #eee;
`;
const fontMuted = css`
  background-color: #5f5f5f;
`;
const fontDim = css`
  background-color: #999;
`;
const fontAccent = css`
  background-color: #862121;
`;

const Row = ({ name, className }: { name: string; className: string }) => (
  <div className={swatch}>
    <span className={cx(chip, className)} />
    <span className={label}>{name}</span>
  </div>
);

export const Background: StoryObj = {
  render: () => (
    <div className={page}>
      <div className={group}>
        <Row name="background.surface" className={bgSurface} />
        <Row name="background.surfaceMuted" className={bgSurfaceMuted} />
        <Row name="background.surfaceMutedStrong" className={bgSurfaceMutedStrong} />
        <Row name="background.inverse" className={bgInverse} />
        <Row name="background.inverseMuted" className={bgInverseMuted} />
        <Row name="background.shade" className={bgShade} />
        <Row name="background.accent" className={bgAccent} />
      </div>
      <div className={group}>
        <Row name="font.dark" className={fontDark} />
        <Row name="font.light" className={fontLight} />
        <Row name="font.muted" className={fontMuted} />
        <Row name="font.dim" className={fontDim} />
        <Row name="font.accent" className={fontAccent} />
      </div>
    </div>
  ),
};
