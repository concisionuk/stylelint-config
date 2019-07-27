'use strict';

module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
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
    'order/properties-alphabetical-order': true,
    'block-no-empty': null,
    'no-descending-specificity': null
  }
};
