'use strict';

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
          'include'
        ]
      }
    ],
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'block-no-empty': null,
    'no-descending-specificity': null,
    "plugin/rational-order": [
      true, {
        "empty-line-between-groups": true,
      }
    ]
  }
};
