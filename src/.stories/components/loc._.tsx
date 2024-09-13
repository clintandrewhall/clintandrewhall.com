import type { Meta, StoryObj } from '@storybook/react';

import { LOC } from '@components/github';

const meta: Meta<typeof LOC> = {
  title: 'Components/Github/Lines of Code',
  component: LOC,
};

export default meta;

export const LinesofCode: StoryObj<typeof LOC> = {
  args: {
    loc: [
      {
        languageName: 'TypeScript',
        byProject: {
          foo: 23456,
          bar: 65432,
          baz: 8765,
        },
        totalLines: 97653,
      },
      {
        languageName: 'JavaScript',
        byProject: {
          foo: 12345,
          bar: 54321,
          baz: 9876,
        },
        totalLines: 76542,
      },
      {
        languageName: 'CSS',
        byProject: {
          foo: 1234,
          bar: 4321,
          baz: 876,
        },
        totalLines: 6431,
      },
      { languageName: 'spanish', byProject: { foo: 1, bar: 2, baz: 3 }, totalLines: 6 },
    ],
  },
};
