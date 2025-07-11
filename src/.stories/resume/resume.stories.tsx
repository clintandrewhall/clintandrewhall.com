import { Resume as ResumeComponent } from '@pages/resume';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ResumeComponent> = {
  title: 'Resume',
  component: ResumeComponent,
};

export default meta;

export const Resume: StoryObj<typeof ResumeComponent> = {};
