import type { Meta, StoryObj } from '@storybook/react';

import { GithubCorner } from '@components/github';

const meta: Meta<typeof GithubCorner> = {
  title: 'Components/Github/Corner',
  component: GithubCorner,
};

export default meta;

export const Corner: StoryObj<typeof GithubCorner> = {};
