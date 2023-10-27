const devMode = process.env.NODE_ENV !== 'production';
module.exports = function (api, options = {}) {
  // if (api) {
  //   api.cache.never();
  // }
  api.cache(true);
  let presets = [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ]
  ]
  let plugins = [
    [
      '@vue/babel-plugin-jsx',
      {
        enableObjectSlots: options.enableObjectSlots,
      },
    ],
  ]

  if (!devMode) {
    //
  }

  return {
    presets,
    plugins
  };
}