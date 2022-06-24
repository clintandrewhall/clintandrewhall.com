import { Route } from 'react-router-dom';

import { Home } from './components';

export const getRoutes = () => {
  return <Route path="/" component={() => <Home />} exact />;
};
