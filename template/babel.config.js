const devMode = process.env.NODE_ENV !== 'production';
module.exports = function (api, options = {}) {
  // if (api) {
  //   api.cache.never();
  // }
  api.cache(true);
  let presets = [
    "@babel/preset-react",
    {{#if ts}}'@babel/preset-typescript',{{/if}}
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