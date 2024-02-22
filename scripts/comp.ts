#!/usr/bin/env ts-node

import { program } from 'commander'

import { DesignUi } from './classes/design/DesignUi'

program
  .command('component')
  .argument('[name]')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name: string) => {
    new DesignUi(name).make()
  })

program
  .command('build')
  .description('The compiled files are being updated\r\nОбновляются собранные файлы')
  .action(() => {
    new DesignUi().makeBuild()
  })

program.parse(process.argv)
