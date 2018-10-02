const { compose } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');
const rewireResponsiveLoader = require('./rewire-responsive-loader');

module.exports = (config, env) => {
  const newConfig = compose(
    rewireCssModules,
    rewireResponsiveLoader,
  )(config, env);

  newConfig.module.rules = (newConfig.module.rules || []).concat([
    {
      test: /\.(md|markdown)$/i,
      loader: 'markdown-image-loader',
    },
  ]);

  return newConfig;
};
