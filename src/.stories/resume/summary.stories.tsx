import { ResumeSummary } from '@pages/resume/summary';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof ResumeSummary> = {
  title: 'Resume/Summary',
  component: ResumeSummary,
  decorators,
};

export default meta;

export const Summary: StoryObj<typeof ResumeSummary> = {};
