import { LibraryItems } from './LibraryItems.ts'

import {
  COMPONENTS_INDEX,
  COMPONENTS_MAIN,
  COMPONENTS_PLUGIN
} from '../../config/components.ts'

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

    this.items.write(
      COMPONENTS_MAIN,
      [
        'import { MutationGlobal } from \'./../classes/mutation/MutationGlobal\'',
        'import { MutationGlobalRef } from \'./../classes/mutation/MutationGlobalRef\'',
        '',
        'import { components } from \'./components\'',
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
        `export * from './${COMPONENTS_INDEX}'`,
        `export * from './${COMPONENTS_PLUGIN}'`
      ]
    )

    return this
  }
}
