import { forEach } from '../../../functions/forEach'
import { toCamelCase } from '../../../functions/toCamelCase'
import { toKebabCase } from '../../../functions/toKebabCase'

import { PropertiesFile } from '../properties/PropertiesFile'
import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_COMPONENTS,
  LIBRARY_DIR
} from '../../config/library'

type LibraryListItem = {
  imports: string[]
  list: string[]
}
type LibraryListList = Record<string, LibraryListItem>

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
    const data: LibraryListList = this.getList()

    forEach(data, (
      {
        imports,
        list
      },
      design
    ) => {
      const code = design === 'main' ? '' : `-${design}`
      const fileName = `${LIBRARY_COMPONENTS}${code}`
      const name = `${toCamelCase(`${this.items.getGlobalName()}${code}`)}ComponentsPlugin`

      this.items.write(
        fileName,
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
    })

    PropertiesFile.write(
      [LIBRARY_DIR],
      LIBRARY_COMPONENTS,
      this.getListForJson(),
      'json'
    )

    return this
  }

  private getList (): LibraryListList {
    const components = this.items.getComponentList()
    const data: LibraryListList = {
      main: {
        imports: [],
        list: []
      }
    }

    components.forEach(({
      design,
      codeFull,
      dir
    }) => {
      const importFile = `import { ${codeFull} } from '../${design}/${dir}'`
      const item = `  ${codeFull}`

      if (!(design in data)) {
        data[design] = {
          imports: [],
          list: []
        }
      }

      data.main.imports.push(importFile)
      data.main.list.push(item)

      data[design].imports.push(importFile)
      data[design].list.push(item)
    })

    return data
  }

  private getListForJson () {
    const data = {
      name: toKebabCase(this.items.getGlobalName()),
      library: LIBRARY_DIR,
      components: [] as any[]
    }

    this.items.getComponentList().forEach(({
      design,
      codeFull,
      dir
    }) => data.components.push({
      name: codeFull,
      path: `${design}/${dir}`
    }))

    return data
  }
}
