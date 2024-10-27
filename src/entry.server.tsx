import ReactDOMServer from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './app';

interface HelmetContext {
  helmet?: HelmetServerState;
}

export function SSRRender(url: string | Partial<Location>) {
  const helmetContext: HelmetContext = {} as HelmetContext;

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>,
  );

  return { html, helmet: helmetContext.helmet };
}

export type SSRRenderType = typeof SSRRender;
