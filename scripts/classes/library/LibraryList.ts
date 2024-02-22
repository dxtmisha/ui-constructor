import { toCamelCase } from '../../../functions/toCamelCase'

import { PropertiesFile } from '../properties/PropertiesFile.ts'
import { LibraryItems } from './LibraryItems'

import { LIBRARY_COMPONENTS, LIBRARY_DIR } from '../../config/library'
import { toKebabCase } from '../../../functions/toKebabCase.ts'

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
    const json = {
      name: toKebabCase(this.items.getGlobalName()),
      library: LIBRARY_DIR,
      components: [] as any[]
    }

    components.forEach(({
      design,
      codeFull,
      dir
    }) => {
      imports.push(`import ${codeFull} from './../${design}/${dir}/${codeFull}.vue'`)
      list.push(`  ${codeFull}`)
      json.components.push({
        name: codeFull,
        path: `${design}/${dir}`
      })
    })

    this.items.write(
      LIBRARY_COMPONENTS,
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

    PropertiesFile.write(
      [LIBRARY_DIR],
      LIBRARY_COMPONENTS,
      json,
      'json'
    )

    return this
  }
}
