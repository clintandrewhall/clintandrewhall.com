import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { getHomeRoutes, getResumeRoutes, getPortfolioRoutes } from './features';

import './css/base.css';
import './css/fonts.css';
import './css/iconic/css/iconmonstr-iconic-font.min.css';

export const App = () => (
  <Router>
    <Routes>
      {getResumeRoutes()}
      {getPortfolioRoutes()}
      {getHomeRoutes()}
    </Routes>
  </Router>
);
