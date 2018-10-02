const cloneDeep = require('lodash.clonedeep');

const ruleChildren = loader =>
  loader.use ||
  loader.oneOf ||
  (Array.isArray(loader.loader) && loader.loader) ||
  [];

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined;
  const rules = Array.isArray(rulesSource)
    ? rulesSource
    : ruleChildren(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? { index, rules }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher)),
  );
  return result;
};

const findRule = (rulesSource, ruleMatcher) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  return rules[index];
};

const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  rules.splice(index, 0, value);
};

const imageRuleMatcher = rule =>
  rule.test &&
  String(rule.test) === String([/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/]);

module.exports = function(config) {
  const imageRule = findRule(config.module.rules, imageRuleMatcher);
  const responsiveRule = cloneDeep(imageRule);

  responsiveRule.test = /\.(jpe?g|png)$/i;
  responsiveRule.options.fallback = 'responsive-loader';

  addBeforeRule(config.module.rules, imageRuleMatcher, responsiveRule);

  return config;
};
