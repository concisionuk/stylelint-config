'use strict';

module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'apply', 'responsive', 'variants', 'screen', 'include']
      }
    ],
    'block-no-empty': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning'
      }
    ]
  }
};
