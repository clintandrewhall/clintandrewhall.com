import type { Meta, StoryObj } from '@storybook/react';

import {
  Section as Component,
  type SectionHeaderProps,
  type SectionProps,
} from '@components/layout';
import { css } from '@lib/css';

const meta: Meta<typeof Component> = {
  title: 'Components/Layout/Section',
  component: Component,
};

export default meta;

type Arguments = SectionProps & SectionHeaderProps;

export const Section: StoryObj<Arguments> = {
  args: {
    id: 'home',
    title: 'The Section Title',
    subtitle: 'A witty subtitle.',
    name: 'Some Section',
  },
  render: (args: Arguments) => {
    return (
      <Component id="home">
        <Component.Header
          {...args}
          className={css`
            grid-area: auto/1/auto/span 12;
          `}
        />
        <div style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec ligula bibendum
          fringilla. Nulla facilisi. Donec ut nunc nec nunc facilisis fermentum. Nulla facilisi.
          Donec ut nunc nec nunc facilisis fermentum.
        </div>
        <Component.Link href="/some-link" title="Some Link" />
      </Component>
    );
  },
};
