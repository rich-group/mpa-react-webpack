process.env.NODE_ENV = 'development'
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import minimist from 'minimist';
import webpackConfig from './webpack.dev.config';
const compiler = webpack(webpackConfig);
const parseArgv = minimist(process.argv.slice(2))
const moduleName = parseArgv.module

const localServer = new WebpackDevServer({
  open: moduleName || true,
  setupMiddlewares(setupMiddlewares) {
    return setupMiddlewares
  },
}, compiler);

localServer.start()


