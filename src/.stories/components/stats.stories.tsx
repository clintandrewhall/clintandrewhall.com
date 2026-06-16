import type { Meta, StoryObj } from '@storybook/react-vite';

import { GithubStats } from '@components/github';

import { decorators } from '../decorators';

const meta: Meta<typeof GithubStats> = {
  title: 'Components/Github/Stats',
  component: GithubStats,
  decorators: [
    (Story) => (
      <div style={{ margin: '50px' }}>
        <Story />
      </div>
    ),
    ...decorators,
  ],
};

export default meta;

export const Stats: StoryObj<typeof GithubStats> = {};
