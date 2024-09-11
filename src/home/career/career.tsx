import { References } from './references';
import { Timeline } from './timeline';

const Component = () => {
  return (
    <>
      <Career.Timeline />
      <Career.References />
    </>
  );
};

export const Career = Object.assign(Component, {
  Timeline,
  References,
});
