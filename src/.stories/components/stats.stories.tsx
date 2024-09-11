import { GithubStats } from '@/components/github';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubStats> = {
  title: 'Components/Github/Stats',
  component: GithubStats,
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
