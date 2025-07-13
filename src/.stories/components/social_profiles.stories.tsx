import type { Meta, StoryObj } from '@storybook/react-vite';

import { SocialProfiles as Component, type SocialProfilesProps } from '@components/social_profiles';
import { useResume } from '@lib/hooks';

import { decorators } from '../decorators';

const Story = (props: SocialProfilesProps) => {
  const resume = useResume();
  const profiles = resume?.basics.profiles || [];

  return <Component {...{ ...props, profiles }} />;
};

const meta: Meta<typeof Component> = {
  title: 'Components/Social Profiles',
  component: Component,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#000',
          padding: '30px',
        }}
      >
        <Story />
      </div>
    ),
    ...decorators,
  ],
  render: Story,
};

export default meta;

export const SocialProfiles: StoryObj<typeof Component> = {
  args: {
    showDivider: true,
    showLabel: true,
  },
  argTypes: { showLabel: { control: 'boolean' }, showDivider: { control: 'boolean' } },
};
