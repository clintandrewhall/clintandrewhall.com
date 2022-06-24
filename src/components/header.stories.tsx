import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { sections } from '../lib';
import { Header as Component } from './header';
import { Page } from './page';

export default {
  title: 'components/Header',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    navigation: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Page>
          <div
            style={{
              position: 'relative',
              minHeight: 1000,
            }}>
            {Story()}
            {sections.map((id) => (
              <section
                style={{ height: 1000, background: '#ccc', marginTop: -5 }}
                id={id}
                key={id}>
                <h4 style={{ color: '#fff', margin: 0 }}>{id}</h4>
              </section>
            ))}
          </div>
        </Page>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Header = Template.bind({});
Header.args = {};
