// @flow

import { Route } from 'react-router-dom';
import portfolioRoutes from './portfolio-routes';

export default (): Array<React$Node> => {
  return portfolioRoutes();
};
