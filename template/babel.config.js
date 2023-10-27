module.exports = function (api, options = {}) {
  // if (api) {
  //   api.cache.never();
  // }
  api.cache(true);
  let presets = [
    {{#if ts}}
    '@babel/preset-typescript'
    {{else}}
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ]
    {{/if}}
  ]
  let plugins = [
    [
      '@vue/babel-plugin-jsx',
      {
        enableObjectSlots: options.enableObjectSlots,
      },
    ],
    {{#if ts}}
    '@babel/plugin-transform-typescript' // 不加的话, .vue中使用<script lang=ts></script> 报错
    {{/if}}
  ]

  if (process.env.NODE_ENV === 'production') {
    {{#if ts}}
    presets.push([
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ])
    {{/if}}
  }

  return {
    presets,
    plugins
  };
}