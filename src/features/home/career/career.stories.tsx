import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Career as Component } from './career';
import { Page } from '../../../components';

export default {
  title: 'Home/Career',
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

export const Career: ComponentStoryObj<typeof Component> = {
  render: () => <Component />,
};
