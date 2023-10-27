process.env.NODE_ENV = 'development'
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from './webpack.dev.config';
import openInEditor from 'launch-editor-middleware'
const compiler = webpack(webpackConfig);

const localServer = new WebpackDevServer({
  open: true,
  setupMiddlewares(setupMiddlewares, {app}) {
    app?.use('/__open-in-editor', openInEditor('code'));
    return setupMiddlewares
  },
}, compiler);

localServer.start()


