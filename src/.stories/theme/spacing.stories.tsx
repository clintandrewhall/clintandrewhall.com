import { csa, cx } from '@/lib/css';
import { useDimensions } from '@/lib/hooks';
import { theme } from '@/theme';
import { type UtopiaSize } from '@/theme/spacing';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Theme/Spacing',
};

export default meta;

const { spacing } = theme.vars;

const sizes: Record<UtopiaSize, string> = {
  step0: csa`height: var(${spacing.step0}); width: var(${spacing.step0});`,
  step1: csa`height: var(${spacing.step1}); width: var(${spacing.step1});`,
  step2: csa`height: var(${spacing.step2}); width: var(${spacing.step2});`,
  step3: csa`height: var(${spacing.step3}); width: var(${spacing.step3});`,
  step4: csa`height: var(${spacing.step4}); width: var(${spacing.step4});`,
  step5: csa`height: var(${spacing.step5}); width: var(${spacing.step5});`,
  step6: csa`height: var(${spacing.step6}); width: var(${spacing.step6});`,
  step7: csa`height: var(${spacing.step7}); width: var(${spacing.step7});`,
  step8: csa`height: var(${spacing.step8}); width: var(${spacing.step8});`,
  step9: csa`height: var(${spacing.step9}); width: var(${spacing.step9});`,
  avatar: csa`height: var(${spacing.avatar}); width: var(${spacing.avatar});`,
  sectionBottom: csa`height: var(${spacing.sectionBottom}); width: var(${spacing.sectionBottom});`,
  sectionTop: csa`height: var(${spacing.sectionTop}); width: var(${spacing.sectionTop});`,
  portfolioItemHeight: csa`height: var(${spacing.portfolioItemHeight}); width: var(${spacing.portfolioItemHeight});`,
  portfolioItemWidth: csa`height: var(${spacing.portfolioItemWidth}); width: var(${spacing.portfolioItemWidth});`,
};

const Box = ({ size }: { size: UtopiaSize }) => {
  const { dimensions, ref } = useDimensions();
  return (
    <div
      className={csa`
        margin: 12px;
      `}
    >
      <span
        className={cx(
          csa`
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
