import { useEffect } from 'react';
import { Home } from '@pages/home';
import { Portfolio } from '@pages/portfolio';
import { Outlet, Route as ReactRoute, Routes as ReactRoutes, useLocation } from 'react-router-dom';

import { Article } from './article';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};

export const Routes = () => {
  return (
    <ReactRoutes>
      <ReactRoute element={<ScrollToTop />}>
        <ReactRoute path="/" element={<Home />} />
        <ReactRoute path="/portfolio" element={<Portfolio />} />
        <ReactRoute path="/portfolio/:id" element={<Article />} />
      </ReactRoute>
    </ReactRoutes>
  );
};
