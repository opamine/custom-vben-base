module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  rules: {
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'no-empty-source': null,
    'string-quotes': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'slotted', 'global'],
          },
        ],
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'keyframes-name-pattern': null,
        'declaration-block-trailing-semicolon': null, // 详见: https://www.cnblogs.com/OwenLin/p/14990993.html
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['slotted', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
  ],
};
