import { useEffect } from 'react';
import { Home } from '@pages/home';
import { Portfolio } from '@pages/portfolio';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

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

export const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio/:id',
        element: <Article />,
      },
    ],
  },
]);
