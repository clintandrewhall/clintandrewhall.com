import type { Meta, StoryObj } from '@storybook/react';

import { css, cx } from '@lib/css';
import { useDimensions } from '@lib/hooks';
import { theme } from '@theme';
import { type UtopiaSize } from '@theme/spacing';

const meta: Meta = {
  title: 'Theme/Spacing',
};

export default meta;

const { spacing } = theme.vars;

const sizes: Record<UtopiaSize, string> = {
  step0: css`
    height: var(${spacing.step0});
    width: var(${spacing.step0});
  `,
  step1: css`
    height: var(${spacing.step1});
    width: var(${spacing.step1});
  `,
  step2: css`
    height: var(${spacing.step2});
    width: var(${spacing.step2});
  `,
  step3: css`
    height: var(${spacing.step3});
    width: var(${spacing.step3});
  `,
  step4: css`
    height: var(${spacing.step4});
    width: var(${spacing.step4});
  `,
  step5: css`
    height: var(${spacing.step5});
    width: var(${spacing.step5});
  `,
  step6: css`
    height: var(${spacing.step6});
    width: var(${spacing.step6});
  `,
  step7: css`
    height: var(${spacing.step7});
    width: var(${spacing.step7});
  `,
  step8: css`
    height: var(${spacing.step8});
    width: var(${spacing.step8});
  `,
  step9: css`
    height: var(${spacing.step9});
    width: var(${spacing.step9});
  `,
  avatar: css`
    height: var(${spacing.avatar});
    width: var(${spacing.avatar});
  `,
  sectionBottom: css`
    height: var(${spacing.sectionBottom});
    width: var(${spacing.sectionBottom});
  `,
  sectionTop: css`
    height: var(${spacing.sectionTop});
    width: var(${spacing.sectionTop});
  `,
  portfolioItemHeight: css`
    height: var(${spacing.portfolioItemHeight});
    width: var(${spacing.portfolioItemHeight});
  `,
  portfolioItemWidth: css`
    height: var(${spacing.portfolioItemWidth});
    width: var(${spacing.portfolioItemWidth});
  `,
};

const Box = ({ size }: { size: UtopiaSize }) => {
  const { dimensions, ref } = useDimensions();
  return (
    <div
      className={css`
        margin: 12px;
      `}
    >
      <span
        className={cx(
          css`
            background-color: rgba(169, 67, 154, 0.5);
            display: inline-block;
            margin-right: 12px;
          `,
          sizes[size],
        )}
        ref={ref}
      />
      {size} {dimensions?.height}
    </div>
  );
};

export const Spacing: StoryObj = {
  render: () => (
    <>
      {Object.keys(sizes).map((size) => (
        <Box key={size} size={size as UtopiaSize} />
      ))}
    </>
  ),
};
