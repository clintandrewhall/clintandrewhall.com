import { forwardRef } from 'react';

import { References } from './references';
import { Timeline } from './timeline';

const CareerComponent = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div id="career" {...{ ref }}>
      <Career.Timeline />
      <Career.References />
    </div>
  );
});

export const Career = Object.assign(CareerComponent, {
  Timeline,
  References,
});
