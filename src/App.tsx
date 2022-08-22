import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { getHomeRoutes, getResumeRoutes, getPortfolioRoutes } from './features';

export const App = () => (
  <Router>
    <Routes>
      {getResumeRoutes()}
      {getPortfolioRoutes()}
      {getHomeRoutes()}
    </Routes>
  </Router>
);
