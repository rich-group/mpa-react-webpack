process.env.NODE_ENV = 'production'
import ora from 'ora';                        // 控制台中显示loading等图标
import chalk from 'chalk';                    // 修改控制台字符串样式
import webpack from 'webpack';
import webpackConfig from './webpack.prd.config';
import checkVersions from './check-versions';

checkVersions();
const spinner = ora('building for ' + process.env.NODE_ENV);
spinner.start();

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  const bundleInfos = stats?.toString({
    colors: true,
    modules: false,
    children: true,                           // 如果使用的是ts loader，将其设置为true将使typescript错误在构建期间显示
    chunks: false,
    chunkModules: false
  })
  process.stdout.write(bundleInfos + '\n\n'); // console.log 默认换一行，这里换两行

  if (stats?.hasErrors()) {
    console.log(chalk.red('  打包失败\n'));
    process.exit(1);
  }
  console.log(chalk.cyan('  打包完成\n'));
  const date = new Date(stats?.endTime - stats?.startTime);
  console.log(chalk.cyan(`打包完成✅.\n  耗时:${date.getMinutes()}分${date.getSeconds()}秒\n`));
  console.log(chalk.yellow(
    '  提示: 构建的文件通过HTTP服务器提供服务\n' +
    '  通过 file:// 打开 index.html 不会工作\n'
  ))
});