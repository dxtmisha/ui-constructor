#!/usr/bin/env vite-node

const requireFs = require('fs')
const requirePath = require('path')
const { exec } = require('child_process')

const PROJECT_GIT = 'git+https://github.com/dxtmisha/ui-constructor.git'
const PROJECT_NAME = 'vue'
const PROJECT_TEMP = 'temp'
const PROJECT_COMMAND = 'project'
const PROJECT_COMMAND_SCRIPT = './node_modules/ui/dist/project.js'
const FILE_PACKAGE = 'package.json'

const filePackage = requirePath.join(PROJECT_TEMP, FILE_PACKAGE)
const filePackageData = {
  name: '@cc/coral-design-temp',
  private: false,
  version: '0.0.0-dev',
  type: 'commonjs',
  devDependencies: {
    commander: '^11.1.0',
    dotenv: '^16.4.1',
    ui: PROJECT_GIT
  }
}

if (
  requireFs.existsSync(PROJECT_TEMP) ||
  requireFs.existsSync(PROJECT_NAME)
) {
  console.warn('-- Проект существует!')
} else {
  requireFs.mkdirSync(PROJECT_TEMP)
  requireFs.writeFileSync(
    filePackage,
    JSON.stringify(filePackageData)
  )

  console.log('Start...')

  exec(`cd ${PROJECT_TEMP};npm install`, (error) => {
    if (error) {
      console.error('[T] Error: ', error)
      return
    }

    exec(`cd ${PROJECT_TEMP};npx node ${PROJECT_COMMAND_SCRIPT} ${PROJECT_COMMAND} ${PROJECT_NAME}`, (error) => {
      if (error) {
        console.error('[P] Error: ', error)
        return
      }

      exec(`cd ${PROJECT_NAME};npm install`, (error) => {
        if (error) {
          console.error('[I] Error: ', error)
          return
        }

        requireFs.unlink(__filename, error => {
          if (error) {
            console.error('[E] Error: ', error)
            return
          }

          console.log('...End')
        })
      })
    })
  })
}
