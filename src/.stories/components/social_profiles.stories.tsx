import type { Meta, StoryObj } from '@storybook/react';

import { SocialProfiles as Component } from '@components/social_profiles';
import { useResume } from '@lib/hooks';

const meta: Meta<typeof Component> = {
  title: 'Components/Social Profiles',
  component: Component,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#000',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const resume = useResume();
    const profiles = resume?.basics.profiles || [];

    return <Component {...{ ...args, profiles }} />;
  },
};

export default meta;

export const SocialProfiles: StoryObj<typeof Component> = {
  args: {
    showDivider: true,
    showLabel: true,
  },
  argTypes: { showLabel: { control: 'boolean' }, showDivider: { control: 'boolean' } },
};
