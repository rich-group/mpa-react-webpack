import chalk from 'chalk';
import semver from 'semver';
import packageConfig from '../package.json';
import shell from 'shelljs';
import { execSync } from 'child_process'

function exec (cmd) {
  return execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]
// 如果控制台以`npm`开头，检查npm版本
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

export default function () {
  const warnings = []
  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' 应该更新为 ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('若要使用此模板，必须将以下内容更新：'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}