import path from 'path';
import minimist from 'minimist';

const parseArgv = minimist(process.argv.slice(2))

// ES Module 才可以使用顶级await
const envObj = require(`./${parseArgv.env}.env`).default;
/**
 * @description ESM解析项目路径
 * @param {*} dir 跟目录下文件夹名称
 * @returns 
 */
function resolve (dir) {
  const __dirname = path.resolve();
  return path.resolve(__dirname, dir);
}

const config = {
  build: {
    assetsRoot: resolve('./dist'), // 生成文件路径
    assetsSubDirectory: 'static', // 静态文件夹
    assetsPublicPath: '/',
    devtool: "hidden-source-map",
    sourceMap: false,
    env: envObj, // 环境配置
    bundleAnalyzerReport: Boolean(process.env.npm_config_report)
  },
  dev: {
    assetsPublicPath: 'auto',
    devtool: 'eval-cheap-module-source-map',
    sourceMap: true,
    env: envObj // 环境配置
  }
};

export default config;