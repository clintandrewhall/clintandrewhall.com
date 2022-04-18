const http = require('http');
const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const { addAllRoutes } = require('./routes');
const { run } = require('react-snap');

let general = {
  port: 45678,
  externalServer: true,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  source: 'build',
  publicPath: '/',
  fixWebpackChunksIssue: 'CRA2',
  cacheAjaxRequests: true,
  userAgent: 'ReactSnap',
};

const startServer = (options) => {
  const sourceDir = path.normalize(`${process.cwd()}/${options.source}`);
  const app = express();
  addAllRoutes(app, true);
  app.use(fallback('200.html', { root: sourceDir }));

  const server = http.createServer(app);
  server.listen(options.port);
  return server;
};

let server = startServer(general);

Promise.resolve()
  .then(() =>
    run({
      ...general,
      destination: 'build',
    }),
  )
  // eslint-disable-next-line no-console
  .catch(console.error)
  .then(() => {
    server.close();
  });
