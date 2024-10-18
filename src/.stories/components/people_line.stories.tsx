import type { Meta, StoryObj } from '@storybook/react';

import { PeopleLine as Component, Person, type PersonProps } from '@components/people_line';
import { theme } from '@theme';

const { vars } = theme;

const meta: Meta<typeof Component> = {
  title: 'Components/People Line',
  component: Component,
  render: ({ people }) => {
    return (
      <div
        style={{
          background: '#000',
          padding: '30px',
        }}
      >
        <div
          style={{
            maxWidth: `var(${vars.grid.maxWidth})`,
            margin: '0 auto',
          }}
        >
          <Component people={people} />
        </div>
      </div>
    );
  },
};

export default meta;

const person: PersonProps = {
  imageKey: 'raya',
  name: 'First Last',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu euismod felis. Fusce laoreet tincidunt dui accumsan imperdiet. Quisque non nisi sed est tristique eleifend. Vestibulum in ullamcorper felis, convallis elementum lorem. Integer arcu justo, lacinia non ultrices vitae, viverra in arcu. Sed ac ex rhoncus, porttitor quam non, placerat erat. ',
  subtitle: 'We worked together at XYZ.',
  title: 'Title at XYZ',
};

export const PeopleLine: StoryObj<typeof Component> = {
  args: {
    people: {
      person_1: <Person {...person}>Person 1</Person>,
      person_2: <Person {...person}>Person 2</Person>,
      person_3: <Person {...person}>Person 3</Person>,
      person_4: <Person {...person}>Person 4</Person>,
    },
  },
};
