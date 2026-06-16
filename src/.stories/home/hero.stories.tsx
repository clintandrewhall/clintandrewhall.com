import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.About> = {
  title: 'Home/Hero',
  component: Home.Hero,
  decorators: [
    ...decorators,
    (Story) => {
      return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

export const Hero: StoryObj<typeof Home.Hero> = {};
