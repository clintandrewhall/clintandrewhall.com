import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { GithubCard as Component } from './card';

export default {
  title: 'components/Github/Card',
  component: Component,
  decorators: [withMock],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = () => <Component />;

export const Card = Template.bind({});
Card.parameters = {
  mockData: [
    {
      url: '/github.json',
      method: 'GET',
      status: 200,
      response: {
        user: {
          login: 'clintandrewhall',
          id: 297604,
          node_id: 'MDQ6VXNlcjI5NzYwNA==',
          avatar_url: 'https://avatars.githubusercontent.com/u/297604?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/clintandrewhall',
          html_url: 'https://github.com/clintandrewhall',
          followers_url:
            'https://api.github.com/users/clintandrewhall/followers',
          following_url:
            'https://api.github.com/users/clintandrewhall/following{/other_user}',
          gists_url:
            'https://api.github.com/users/clintandrewhall/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/clintandrewhall/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/clintandrewhall/subscriptions',
          organizations_url:
            'https://api.github.com/users/clintandrewhall/orgs',
          repos_url: 'https://api.github.com/users/clintandrewhall/repos',
          events_url:
            'https://api.github.com/users/clintandrewhall/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/clintandrewhall/received_events',
          type: 'User',
          site_admin: false,
          name: 'Clint Andrew Hall',
          company: 'Elastic',
          blog: 'http://www.clintandrewhall.com/',
          location: 'Kansas City, MO',
          email: 'clint@clintandrewhall.com',
          hireable: null,
          bio: null,
          twitter_username: 'clintandrewhall',
          public_repos: 44,
          public_gists: 11,
          followers: 126,
          following: 12,
          created_at: '2010-06-05T21:16:25Z',
          updated_at: '2022-05-19T02:16:16Z',
          private_gists: 9,
          total_private_repos: 14,
          owned_private_repos: 10,
          disk_usage: 160468,
          collaborators: 3,
          two_factor_authentication: true,
          plan: {
            name: 'pro',
            space: 976562499,
            collaborators: 0,
            private_repos: 9999,
          },
        },
        loc: [
          {
            languageName: 'JavaScript',
            totalLines: 3827478,
            byProject: {
              metaphorically: 137,
              'clintandrewhall.github.io': 2665,
              'begin-oauth-babel-shared-code-poc': 3178,
              boilerplate: 6793,
              'begin-cra': 12299,
              canvas_globe: 15861,
              'clintandrewhall.com': 49431,
              'backstrok.es': 52170,
              'node-jsonp-proxy': 209072,
              'backstrokes-vr': 857751,
              'node-foursquare': 2618121,
            },
          },
          {
            languageName: 'TypeScript',
            totalLines: 3167773,
            byProject: {
              'begin-oauth-babel-shared-code-poc': 3031,
              canvas_globe: 3231,
              bunnyghp: 18511,
              metaphorically: 38814,
              'clintandrewhall.github.io': 48217,
              'node-foursquare': 3055969,
            },
          },
          {
            languageName: 'CSS',
            totalLines: 607473,
            byProject: {
              boilerplate: 98,
              'begin-cra': 858,
              'node-jsonp-proxy': 6013,
              'backstrok.es': 8517,
              'clintandrewhall.com': 30491,
              'clintandrewhall.github.io': 94254,
              'node-foursquare': 467242,
            },
          },
          {
            languageName: 'HTML',
            totalLines: 464624,
            byProject: {
              bunnyghp: 626,
              canvas_globe: 1017,
              'backstrokes-vr': 1170,
              'node-foursquare': 1657,
              'begin-cra': 1717,
              'clintandrewhall.github.io': 71763,
              'node-jsonp-proxy': 75198,
              hero: 311476,
            },
          },
          {
            languageName: 'C',
            totalLines: 333198,
            byProject: { metaphorically: 333198 },
          },
          {
            languageName: 'C++',
            totalLines: 12999,
            byProject: { metaphorically: 12999 },
          },
          {
            languageName: 'Shell',
            totalLines: 8567,
            byProject: {
              'clintandrewhall.github.io': 107,
              'node-foursquare': 8460,
            },
          },
          {
            languageName: 'Python',
            totalLines: 7399,
            byProject: { 'node-foursquare': 2768, metaphorically: 4631 },
          },
          {
            languageName: 'Handlebars',
            totalLines: 7014,
            byProject: { 'clintandrewhall.github.io': 7014 },
          },
          {
            languageName: 'Arc',
            totalLines: 187,
            byProject: {
              'begin-oauth-babel-shared-code-poc': 74,
              'begin-cra': 113,
            },
          },
        ],
      },
    },
  ],
};
