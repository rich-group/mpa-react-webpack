import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from '../config';

const devMode = process.env.NODE_ENV !== 'production';

const cssLoaders = function (options: any): webpack.RuleSetRule[] {
  const generateLoaders = function (loader: string, loaderOptions?: string | { [index: string]: any }): webpack.RuleSetRule {
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
