import fs from 'node:fs';
import path from 'node:path';
import { type SSRRenderType } from 'src/entry.server.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, '..', p);

fs.cpSync(toAbsolute('dist/site'), toAbsolute('dist/static'), { recursive: true });

const template = fs.readFileSync(toAbsolute('dist/site/index.html'), 'utf-8');

// @ts-expect-error this has to be built, so it's not here during.
const render: SSRRenderType = (await import('../dist/server/entry.server.js')).SSRRender;

const portfolioRoutesToPrerender = fs
  .readdirSync(toAbsolute('src/content/portfolio'))
  .map((file) => {
    const name = file.replace(/\.md$/, '').toLowerCase();
    return `/portfolio/${name}`;
  });

const processTemplate = ({ html, helmet }: ReturnType<SSRRenderType>) => {
  let result = template.replace(`<!--app-html-->`, html);

  if (helmet) {
    result = result
      .replace('<title>Clint Andrew Hall</title>', '')
      .replace('</head>', `${helmet.meta.toString()}</head>`)
      .replace('</head>', `${helmet.title.toString()}</head>`)
      .replace('</head>', `${helmet.script.toString()}</head>`);
  }

  return result;
};

(async () => {
  fs.mkdirSync(toAbsolute('dist/static/portfolio'), { recursive: true });
  fs.writeFileSync(toAbsolute('dist/static/index.html'), processTemplate(render('/')));
  fs.writeFileSync(
    toAbsolute('dist/static/portfolio/index.html'),
    processTemplate(render('/portfolio')),
  );

  for (const url of portfolioRoutesToPrerender) {
    const result = processTemplate(render(url));
    const filePath = `dist/static${url}.html`;
    fs.writeFileSync(toAbsolute(filePath), result);
  }
})();
