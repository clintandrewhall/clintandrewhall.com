import { Layout as Component } from '@/components/layout';
import { css, cx } from '@/lib/css';
import { useDimensions } from '@/lib/hooks';
import { theme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

const meta: Meta = {
  title: 'Components/Layout/Layout',
};

export default meta;

// TODO - this is all pretty messy.
const Box = ({ className, children }: { className?: string; children?: ReactNode }) => {
  const { dimensions, ref } = useDimensions();
  return (
    <div
      className={cx(
        css`
          background: #fff;
          text-align: center;
          min-height: var(${theme.vars.grid.gutter});
        `,
        className,
      )}
      ref={ref}
    >
      {children || dimensions?.width}
    </div>
  );
};

export const Layout: StoryObj = {
  render: () => (
    <Component
      className={css`
        background-color: rgba(169, 67, 154, 0.5);
      `}
    >
      <Box
        className={css`
          grid-area: 1 / 1 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 2 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 3 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 4 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 5 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 6 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 7 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 8 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 9 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 10 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 11 / 1;
        `}
      />
      <Box
        className={css`
          grid-area: 1 / 12 / 1;
        `}
      />
    </Component>
  ),
};
