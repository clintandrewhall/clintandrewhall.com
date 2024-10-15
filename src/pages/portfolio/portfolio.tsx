import { Footer, Header } from '@components/layout';

const Component = () => {
  return (
    <>
      <Portfolio.Header />
      <Portfolio.Footer />
    </>
  );
};

export const Portfolio = Object.assign(Component, {
  Header,
  Footer,
});
