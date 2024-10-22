import type { Meta, StoryObj } from '@storybook/react';

import type { TimelineItemProps } from '@components/timeline';
import { Timeline as Component } from '@components/timeline';

const meta: Meta<typeof Component> = {
  title: 'Components/Timeline',
  component: Component,
};

export default meta;

type Arguments = TimelineItemProps;

export const Timeline: StoryObj<Arguments> = {
  args: {
    title: 'Elastic',
    subtitle: 'Tech Lead, Shared UX',
    start: '2021-12-21',
    id: 'elastic',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit dui vel pulvinar interdum. Cras fermentum lorem diam, sit amet semper nisl convallis eu. In feugiat ex vel lorem hendrerit, ac viverra ex ullamcorper. Pellentesque finibus vel sem sed rhoncus.\n\nAliquam a diam efficitur, fringilla mauris euismod, ullamcorper eros. Cras efficitur id est non volutpat. Aliquam erat volutpat. Donec in ipsum id urna faucibus pellentesque at quis turpis. Etiam aliquam odio arcu, et interdum velit gravida vel. Praesent laoreet urna et sapien accumsan, ut ullamcorper mi faucibus.',
  },
  render: (args: Arguments) => {
    return (
      <div style={{ margin: 16 }}>
        <Component>
          <Component.Item {...{ ...args, start: '2021-12-21' }} />
          <Component.Item {...{ ...args, start: '2020-12-21' }} />
          <Component.Item {...{ ...args, start: '2019-12-21' }} />
          <Component.Item {...{ ...args, start: '2018-12-21' }} />
        </Component>
      </div>
    );
  },
};
