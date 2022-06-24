const express = require('express');
const appRoot = require('app-root-path');
const rateLimit = require('express-rate-limit');

const addApiRoutes = (app) => {
  app.get('/github.json', (_req, res) => {
    res.sendFile(appRoot.resolve('build') + '/github.json');
  });

  app.get('/medium.json', (_req, res) => {
    res.sendFile(appRoot.resolve('build') + '/medium.json');
  });
};

const addStaticRoutes = (app, snap = false) => {
  const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    max: snap ? 1000 : 100, // limit each IP to 100 requests per windowMs
  });

  app.use('/', limiter);
  app.use('/', express.static(appRoot.resolve('build')));
  app.get('/*', (_req, res) => {
    res.sendFile(appRoot.resolve('build', 'index.html'));
  });
};

const addAllRoutes = (app, snap = false) => {
  addApiRoutes(app);
  addStaticRoutes(app, snap);
};

module.exports = {
  addAllRoutes,
  addApiRoutes,
  addStaticRoutes,
};
