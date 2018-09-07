const { compose } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');
const rewireResponsiveLoader = require('./rewire-responsive-loader');

module.exports = function(config, env) {
  config = compose(
    rewireCssModules,
    rewireResponsiveLoader,
  );

  config.module.rules = config.module.rules.concat([
    {
      test: /\.(md|markdown)$/i,
      loader: 'markdown-image-loader',
    },
  ]);

  return config;
};
