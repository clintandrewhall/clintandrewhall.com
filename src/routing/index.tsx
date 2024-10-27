import { createRoutesFromElements, Route, Routes } from 'react-router-dom';

import { App } from '../app';

const others = (
  <Route element={<App />}>
    <Route path="/" lazy={async () => ({ Component: (await import('../pages/home')).Home })} />
    <Route
      path="/portfolio"
      lazy={async () => ({ Component: (await import('../pages/portfolio')).Portfolio })}
    />
    <Route
      path="/portfolio/:id"
      lazy={async () => ({ Component: (await import('./article')).Article })}
    />
  </Route>
);

export const AppRoutes = <Routes>{others}</Routes>;

export const routes = createRoutesFromElements(others);
