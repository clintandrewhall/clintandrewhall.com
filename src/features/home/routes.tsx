import { Route } from 'react-router-dom';

import { Home } from './home';

// TODO: async import
import resume from '../../content/resume.json';
import { ResumeProvider } from '../../hooks';

export const getRoutes = () => {
  return (
    <Route
      path="/"
      element={
        <ResumeProvider resume={resume}>
          <Home />
        </ResumeProvider>
      }
    />
  );
};
