const express = require('express');
const appRoot = require('app-root-path');
const rateLimit = require('express-rate-limit');

const addApiRoutes = (app) => {
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

  app.use('/data/', limiter);

  app.get('/data/github', (_req, res) => {
    res.sendFile(appRoot.resolve('build') + '/github.json');
  });

  app.get('/data/medium', (_req, res) => {
    res.sendFile(appRoot.resolve('build') + '/medium.json');
  });
};

const addStaticRoutes = (app) => {
  const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    max: 100, // limit each IP to 100 requests per windowMs
  });

  app.use('/', limiter);
  app.use('/', express.static(appRoot.resolve('build')));
  app.get('/*', (_req, res) => {
    res.sendFile(appRoot.resolve('build', 'index.html'));
  });
};

const addResumeRoutes = (app) => {
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

  app.use('/resume', limiter);
  app.get('/resume', (_req, res) => {
    res.sendFile(appRoot.resolve('build', 'resume', 'clintandrewhall.html'));
  });
};

const addAllRoutes = (app) => {
  addApiRoutes(app);
  addResumeRoutes(app);
  addStaticRoutes(app);
};

module.exports = {
  addAllRoutes,
  addApiRoutes,
  addResumeRoutes,
  addStaticRoutes,
};
