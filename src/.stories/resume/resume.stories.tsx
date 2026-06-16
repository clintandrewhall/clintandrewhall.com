import { Resume as ResumeComponent } from '@pages/resume';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof ResumeComponent> = {
  title: 'Resume',
  component: ResumeComponent,
  decorators,
};

export default meta;

export const Resume: StoryObj<typeof ResumeComponent> = {};
