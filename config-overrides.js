const { compose, injectBabelPlugin } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function(config, env) {
  const rewires = compose(rewireCssModules);

  return rewires(config, env);
};
