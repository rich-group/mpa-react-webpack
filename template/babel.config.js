const devMode = process.env.NODE_ENV !== 'production';
module.exports = function (api, options = {}) {
  // if (api) {
  //   api.cache.never();
  // }
  api.cache(true);
  let presets = [
    "@babel/preset-react",
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3
      }
    ]
  ]
  let plugins = []

  if (!devMode) {
    //
  }

  return {
    presets,
    plugins
  };
}