import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from '../config';
import webpack from 'webpack';

const devMode = process.env.NODE_ENV !== 'production';

const cssLoaders = function (options) {
  const generateLoaders = function (loader, loaderOptions) {
    const test = new RegExp(`\\.${loader}$`)
    loader = ['scss', 'sass'].includes(loader) ? 'sass' : loader
    return {
      test,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: options.sourceMap,
          }
        },
        'postcss-loader',
        {
          loader: loader + '-loader',
          options: loaderOptions
        },
      ],
    };
  };
  return [
    generateLoaders('less'),
    generateLoaders('sass'),
    generateLoaders('scss'),
    {
      test: /\.css$/,
      use:[
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: options.sourceMap,
          }
        },
        'postcss-loader'
      ] 
    },
  ];
};

const loaders = cssLoaders({
  sourceMap: devMode
    ? config.build.sourceMap
    : config.dev.sourceMap,
});

export default loaders;
