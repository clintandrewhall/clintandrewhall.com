import { Route } from 'react-router-dom';
import { Resume } from './components/resume';

export const getRoutes = () => {
  return <Route path="/resume" element={<Resume />} />;
};
