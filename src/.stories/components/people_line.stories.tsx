import type { Meta, StoryObj } from '@storybook/react-vite';

import { PeopleLine as Component, Person, type PersonProps } from '@components/people_line';
import { theme } from '@theme';

import { decorators } from '../decorators';

const { vars } = theme;

type StoryArgs = React.ComponentProps<typeof Component> & { nonJs: boolean };

const meta: Meta<StoryArgs> = {
  title: 'Components/People Line',
  component: Component,
  argTypes: {
    nonJs: { control: 'boolean' },
  },
  args: {
    nonJs: false,
  },
  render: ({ people, nonJs }: StoryArgs) => {
    return (
      <div
        style={{
          background: '#000',
          padding: '30px',
        }}
      >
        {/* When nonJs is enabled, we just add the class and rely on global styles in people_line.styles.ts */}
        <div
          className={nonJs ? 'simulate-no-js' : undefined}
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
  decorators,
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

export const PeopleLine: StoryObj<StoryArgs> = {
  args: {
    people: {
      person_1: <Person {...person}>Person 1</Person>,
      person_2: <Person {...person}>Person 2</Person>,
      person_3: <Person {...person}>Person 3</Person>,
      person_4: <Person {...person}>Person 4</Person>,
      person_5: <Person {...person}>Person 5</Person>,
      person_6: <Person {...person}>Person 6</Person>,
      person_7: <Person {...person}>Person 7</Person>,
      person_8: <Person {...person}>Person 8</Person>,
      person_9: <Person {...person}>Person 9</Person>,
      person_10: <Person {...person}>Person 10</Person>,
    },
  },
};
