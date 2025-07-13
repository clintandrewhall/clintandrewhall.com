import type { Meta, StoryObj } from '@storybook/react-vite';

import { GithubCorner } from '@components/github';

import { decorators } from '../decorators';

const meta: Meta<typeof GithubCorner> = {
  title: 'Components/Github/Corner',
  component: GithubCorner,
  decorators,
};

export default meta;

export const Corner: StoryObj<typeof GithubCorner> = {};
