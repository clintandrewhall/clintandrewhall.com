import type { Meta, StoryObj } from '@storybook/react';

import { GithubStats } from '@components/github';

const meta: Meta<typeof GithubStats> = {
  title: 'Components/Github/Stats',
  component: GithubStats,
  decorators: [
    (Story) => (
      <div style={{ margin: '50px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Stats: StoryObj<typeof GithubStats> = {
  args: {
    followers: 136,
    following: 16,
    gists: 11,
    repos: 45,
  },
};
