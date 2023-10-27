const path = require('path')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'A Vue3 MPA project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: '作者',
    },
    lint: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否使用eslint?',
    },
    ts: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否使用typescript?',
    },
    tailwind: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否使用tailwind?',
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        '是否需要自动安装依赖包？(推荐)',
      choices: [
        {
          name: 'Yes, use Pnpm',
          value: 'pnpm',
          short: 'pnpm',
        },
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '+(build|config|src)/**/*.ts{,x}': 'ts',
    '+(build|config|src)/**/*.js{,x}': '!ts',
    'babel-preset-vue-ts.js': 'ts',
    'typings/**/*': 'ts',
    'tsconfig.json': 'ts',
    'tailwind.config.js': 'tailwind',
    '**/.eslint+(ignore|rc)': 'lint',
    'pnpm-lock.yaml': 'autoInstall === "pnpm"',
    'package-lock.json': 'autoInstall === "npm"',
    'yarn.lock': 'autoInstall === "yarn"'
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
