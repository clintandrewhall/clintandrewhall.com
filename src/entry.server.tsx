import ReactDOMServer from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';

import { AppRoutes } from './routing';

interface HelmetContext {
  helmet?: HelmetServerState;
}

export function SSRRender(url: string | Partial<Location>) {
  const helmetContext: HelmetContext = {} as HelmetContext;

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>{AppRoutes}</HelmetProvider>
    </StaticRouter>,
  );

  return { html, helmet: helmetContext.helmet };
}

export type SSRRenderType = typeof SSRRender;
