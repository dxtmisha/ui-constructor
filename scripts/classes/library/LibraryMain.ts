import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'

import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_INDEX,
  LIBRARY_MAIN,
  LIBRARY_MEDIA,
  LIBRARY_PLUGIN_BASIC
} from '../../config/library'

/**
 * Class for working with the main files.<br>
 * Класс для работы с главными файлами.
 */
export class LibraryMain {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Export data for the main file.<br>
   * Экспортировать данные для главного файла.
   */
  make (): this {
    const name = this.items.getGlobalName()
    const nameCamelCase = toCamelCaseFirst(name)
    const registrationName = `registration${nameCamelCase}${toCamelCaseFirst(LIBRARY_MAIN)}`
    const registrationBasic = `registration${nameCamelCase}Basic`

    this.items.write(
      LIBRARY_MAIN,
      [
        'import { MutationGlobal } from \'./../classes/mutation/MutationGlobal\'',
        'import { MutationGlobalRef } from \'./../classes/mutation/MutationGlobalRef\'',
        '',
        'import { components } from \'./components\'',
        `import { make${nameCamelCase}Media } from './${LIBRARY_MEDIA}'`,
        `import { ${registrationBasic} } from './${LIBRARY_PLUGIN_BASIC}'`,
        '',
        'import * as vue from \'vue\'',
        'import * as vueRouter from \'vue-router\'',
        'import * as vuex from \'vuex\'',
        'import * as ui from \'./index\'',
        '',
        'MutationGlobal.addComponentList(components)',
        '',
        `;(window as any).${name} = MutationGlobal`,
        `;(window as any).${name}_VUE = MutationGlobalRef`,
        '',
        `;(window as any).${name}_CORE_VUE = vue`,
        `;(window as any).${name}_CORE_VUE_ROUTER = vueRouter`,
        `;(window as any).${name}_CORE_VUEX = vuex`,
        `;(window as any).${name}_CORE_UI = ui`,
        '',
        `make${nameCamelCase}Media()`,
        '',
        `export * from './${LIBRARY_INDEX}'`,
        `export const ${registrationName} = ${registrationBasic}`
      ]
    )

    return this
  }
}
