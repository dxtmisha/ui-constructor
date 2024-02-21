import { toCamelCase } from '../../../functions/toCamelCase.ts'

import { LibraryItems } from './LibraryItems.ts'

import { COMPONENTS_FILE } from '../../config/components.ts'

/**
 * Class for creating a file with a list of components.<br>
 * Класс для создания файла со списком компонентов.
 */
export class LibraryList {
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
   * Creates files with a list of components.<br>
   * Создает файлы со списком компонентов.
   */
  make (): this {
    this.makeComponents()
    return this
  }

  /**
   * Creates a file with a list of components for the selected design.<br>
   * Создает файл со списком компонентов для выбранного дизайна.
   */
  protected makeComponents (): this {
    const name = `${toCamelCase(this.items.getGlobalName())}ComponentsPlugin`
    const components = this.items.getComponentList()

    const imports: string[] = []
    const list: string[] = []

    components.forEach(({
      design,
      codeFull,
      dir
    }) => {
      imports.push(`import { ${codeFull} } from './../${design}/${dir}'`)
      list.push(`  ${codeFull}`)
    })

    this.items.write(
      COMPONENTS_FILE,
      [
        'import { type App } from \'vue\'',
        'import { forEach } from \'../functions/forEach\'',
        '',
        ...imports,
        '',
        'export const components = {',
        list.join(',\r\n'),
        '}',
        '',
        `export const ${name} = {`,
        '  install: async (app: App) => {',
        '    forEach(components, (component, name) => {',
        '      app.component(name, component)',
        '    })',
        '  }',
        '}'
      ]
    )

    return this
  }
}
