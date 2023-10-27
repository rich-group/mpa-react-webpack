import baseWebpackConfig from './webpack.base.config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import config from '../config';
const plugins = []

process.env.npm_config_report && plugins.push(new BundleAnalyzerPlugin())
const webpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,
  mode: 'development',
  plugins
});

export default webpackConfig;