module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-colon-newline-after': null, // 与 prettier 冲突，以 prettier 为准
    'value-list-comma-newline-after': null, // 与 prettier 冲突，以 prettier 为准
    'font-family-no-missing-generic-family-keyword': null, // 与 prettier 冲突，以 prettier 为准
    'no-descending-specificity': null,
    'function-no-unknown': null,
    'selector-class-pattern': null, // 即使关闭类名校验，请优先使用 'lowercase-lowercase' 格式
    'string-quotes': 'single', // stylelint-config-standard 中配置的是 'double', prettier 中配置 'single', 手动以 prettier 为准
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
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'declaration-block-trailing-semicolon': null, // 详见: https://www.cnblogs.com/OwenLin/p/14990993.html
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'declaration-block-trailing-semicolon': null, // 详见: https://www.cnblogs.com/OwenLin/p/14990993.html
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'slotted', 'global'],
          },
        ],
        // 以下深度样式选择器用法在 vue3 中已被废弃，推荐上面这种方式 :deep()、:slotted()、:global()
        // 'selector-pseudo-element-no-unknown': [
        //   true,
        //   {
        //     ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
        //   },
        // ],
      },
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
        // 以下深度样式选择器用法在 vue3 中已被废弃，推荐上面这种方式 :deep()、:slotted()、:global()
        // 'selector-pseudo-element-no-unknown': [
        //   true,
        //   {
        //     ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
        //   },
        // ],
      },
    },
  ],
};
