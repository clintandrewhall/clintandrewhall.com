import { Layout } from '@components/layout';

const Component = () => {
  return (
    <>
      <Portfolio.Header />
      <Portfolio.Footer />
    </>
  );
};

export const Portfolio = Object.assign(Component, {
  Header: Layout.Header,
  Footer: Layout.Footer,
});
