#!/usr/bin/env vite-node

const requireFs = require('fs')
const requirePath = require('path')
const { exec } = require('child_process')

const PROJECT_GIT = 'git+https://github.com/dxtmisha/ui-constructor.git'
const PROJECT_NAME = 'vue'
const PROJECT_TEMP = 'temp'
const PROJECT_COMMAND = 'project'
// const PROJECT_COMMAND_SCRIPT = 'scripts/project.ts'
// const PROJECT_COMMAND_PATH = `./node_modules/ui/${PROJECT_COMMAND_SCRIPT}`
const PROJECT_COMMAND_SCRIPT = requirePath.join('scripts', 'project.ts')
const PROJECT_COMMAND_PATH = requirePath.join('.', 'node_modules', 'ui', PROJECT_COMMAND_SCRIPT)
const FILE_PACKAGE = 'package.json'
const FILE_PACKAGE_LOCK = 'package-lock.json'

const filePackage = requirePath.join(PROJECT_TEMP, FILE_PACKAGE)
const filePackageData = {
  name: '@cc/coral-design-temp',
  private: false,
  version: '0.0.0-dev',
  type: 'module',
  scripts: {
    'ui-project': `vite-node ${PROJECT_COMMAND_PATH} ${PROJECT_COMMAND}`
  },
  devDependencies: {
    commander: '^11.1.0',
    dotenv: '^16.4.1',
    'vite-node': '^1.2.2',
    typescript: '^5.3.3',
    ui: PROJECT_GIT
  }
}

const fileVite = requirePath.join(FILE_PACKAGE)
const fileViteLock = requirePath.join(FILE_PACKAGE_LOCK)
const fileViteData = {
  name: '@cc/coral-design-create',
  private: false,
  version: '0.0.0-create',
  type: 'module'
}

const initTemp = () => {
  console.log('Start...')

  requireFs.mkdirSync(PROJECT_TEMP)
  requireFs.writeFileSync(
    filePackage,
    JSON.stringify(filePackageData)
  )

  exec('npm install', { cwd: PROJECT_TEMP }, (error) => {
    if (error) {
      console.error('[T] Error: ', error)
      return
    }

    initProject()
  })
}

const initProject = () => {
  console.log('Project...')

  requireFs.writeFileSync(
    fileVite,
    JSON.stringify(fileViteData)
  )

  exec(`npx vite-node ${PROJECT_COMMAND_PATH} ${PROJECT_COMMAND} ${PROJECT_NAME}`, { cwd: PROJECT_TEMP }, (error) => {
    if (error) {
      console.error('[P] Error: ', error)
      return
    }

    initInstall()
  })
}

const initInstall = () => {
  console.log('Install...')

  exec('npm install', { cwd: PROJECT_NAME }, (error) => {
    if (error) {
      console.error('[I] Error: ', error)
      return
    }

    initUnlink()
  })
}

const initUnlink = () => {
  console.log('Unlink...')

  requireFs.unlink(fileVite, error => {
    if (error) {
      console.error('[E_P] Error: ', error)
      return
    }

    console.log(`Unlink: ${fileVite}`)
  })

  if (requireFs.existsSync(fileViteLock)) {
    requireFs.unlink(fileViteLock, error => {
      if (error) {
        console.error('[E_L] Error: ', error)
        return
      }

      console.log(`Unlink: ${fileViteLock}`)
    })
  }

  if (requireFs.existsSync(PROJECT_TEMP)) {
    requireFs.rmSync(requirePath.resolve(PROJECT_TEMP), {
      recursive: true,
      force: true
    })
  }

  requireFs.unlink(__filename, error => {
    if (error) {
      console.error('[E] Error: ', error)
      return
    }

    console.log('...End')
  })
}

if (requireFs.existsSync(PROJECT_NAME)) {
  console.warn('The project exists!')
} else {
  if (requireFs.existsSync(PROJECT_TEMP)) {
    initProject()
  } else {
    initTemp()
  }
}
