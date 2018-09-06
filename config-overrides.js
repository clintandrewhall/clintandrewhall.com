const { compose, injectBabelPlugin } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');
const rewireResponsiveLoader = require('./rewire-responsive-loader');

module.exports = function(config, env) {
  const rewires = compose(
    rewireCssModules,
    rewireResponsiveLoader,
  );
  return rewires(config, env);
};
