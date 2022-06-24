import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import resume from '../../../content/resume.json';

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
          <Component summary={resume.basics.summary} />
        </Page>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const About = Template.bind({});
About.args = {};
