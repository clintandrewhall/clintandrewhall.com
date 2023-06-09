import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { About as Component } from './about';
import { Page } from '../../../components';

export default {
  title: 'Home/About',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => (
      <MemoryRouter>
        <Page>
          <Component />
        </Page>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Component>;

export const About: ComponentStoryObj<typeof Component> = {
  render: () => <Component />,
};
