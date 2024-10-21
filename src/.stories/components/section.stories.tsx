import type { Meta, StoryObj } from '@storybook/react';

import {
  Section as Component,
  type SectionHeaderProps,
  type SectionProps,
} from '@components/layout';

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
        <Component.Header {...args} />
        <div style={{ textAlign: 'center', gridArea: 'auto / 2 / auto / span 10' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec ligula bibendum
          fringilla. Nulla facilisi. Donec ut nunc nec nunc facilisis fermentum. Nulla facilisi.
          Donec ut nunc nec nunc facilisis fermentum.
        </div>
        <Component.Link href="/some-link" title="Some Link" />
      </Component>
    );
  },
};
