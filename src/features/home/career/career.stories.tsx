import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import resume from '../../../content/resume.json';

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
          <Component references={resume.references} works={resume.work} />
        </Page>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Career = Template.bind({});
Career.args = {};
