import { Layout as LayoutComponent } from '@components/layout';
import { NotFound as NotFoundComponent } from '@components/not_found';

import styles from './not_found.styles';

const Layout = () => (
  <>
    <NotFound.Header />
    <NotFound.Layout />
    <NotFound.Footer />
  </>
);

export const NotFound = Object.assign(Layout, {
  Header: () => <LayoutComponent.Header background="opaque" />,
  Layout: () => (
    <div {...styles.root}>
      <NotFoundComponent />
    </div>
  ),
  Footer: LayoutComponent.Footer,
});
