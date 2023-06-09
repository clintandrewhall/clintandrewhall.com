import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import resume from '../content/resume.json';

import { Footer as Component } from './footer';
import { Page } from './page';

export default {
  title: 'components/Footer',
  component: Component,
  decorators: [
    (story) => (
      <MemoryRouter>
        <Page>{story()}</Page>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Component>;

export const Footer: ComponentStoryObj<typeof Component> = {
  render: () => <Component profiles={resume.basics.profiles} />,
};
