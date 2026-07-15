import type { Meta, StoryObj } from '@storybook/react-vite';

import type { TimelineCompanyProps } from '@components/timeline';
import { Timeline as Component } from '@components/timeline';

import { decorators } from '../decorators';

const meta: Meta<typeof Component> = {
  title: 'Components/Timeline',
  component: Component,
  decorators,
};

export default meta;

const companies: TimelineCompanyProps[] = [
  {
    id: 'elastic',
    name: 'Elastic',
    location: 'Distributed',
    start: '2018-10-01',
    roles: [
      {
        position: 'Tech Lead, Shared User Experience',
        start: '2021-12-15',
        location: 'Distributed',
        tagline:
          "Leading a team that bridges design and the many solutions across Elastic's Application Experience org — making consistency itself a product.",
      },
      {
        position: 'Area Lead, Presentation Team',
        start: '2020-10-12',
        end: '2021-12-15',
        location: 'Distributed',
        tagline:
          'Led Kibana’s Presentation team — Canvas, Dashboard, and every "presentation container" — at a larger scale.',
      },
      {
        position: 'Area Lead, Canvas — Kibana',
        start: '2018-10-01',
        end: '2020-10-12',
        location: 'Distributed',
        tagline:
          'Directed Canvas from beta to GA; introduced TypeScript, i18n, and Storybook to a ground-breaking plugin.',
      },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    start: '2012-01-01',
    end: '2018-06-01',
    roles: [
      {
        position: 'User Interface Engineer',
        start: '2015-04-01',
        end: '2018-06-01',
        location: 'New York City',
        tagline:
          'Converted Composer to React, built the Share Dialog, and shipped the Events Dashboard and Permalink in Relay.',
      },
      {
        position: 'User Interface Engineer',
        start: '2013-08-01',
        end: '2015-04-01',
        location: 'Vancouver',
        tagline:
          'Built a React messaging inbox for Protect & Care, and the Open Graph Share dialog for FB Platform.',
      },
    ],
  },
];

export const Timeline: StoryObj<typeof Component> = {
  render: () => (
    <div style={{ margin: 16 }}>
      <Component companies={companies} />
    </div>
  ),
};
