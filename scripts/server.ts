import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

export async function createServer() {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const vite = null;

  app.use((await import('compression')).default());
  app.use(
    (await import('serve-static')).default(resolve('../dist/site'), {
      index: false,
    }),
  );

  app.use('*', async (_req, res) => {
    const url = '/';

    const template = fs.readFileSync(resolve('../dist/site/index.html'), 'utf-8');
    // @ts-expect-error There might be an error here, if nothing has been built.
    const render = (await import('../dist/server/entry.server.js')).SSRRender;

    const { html, helmet } = render(url); //Rendering component without any client side logic de-hydrated like a dry sponge

    const result = template
      .replace(`<!--app-html-->`, html)
      .replace('<title>Clint Andrew Hall</title>', '')
      .replace('</head>', `${helmet.meta.toString()}</head>`)
      .replace('</head>', `${helmet.title.toString()}</head>`)
      .replace('</head>', `${helmet.script.toString()}</head>`);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(result); //Outputing final html
  });

  return { app, vite };
}

createServer().then(({ app }) =>
  app.listen(3033, () => {
    console.log('http://localhost:3033');
  }),
);
