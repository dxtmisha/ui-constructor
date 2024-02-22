import { toCamelCase } from '../../../functions/toCamelCase'

import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_MEDIA,
  LIBRARY_PLUGIN,
  LIBRARY_PLUGIN_BASIC,
  LIBRARY_STYLE,
  LIBRARY_STYLE_BASIC, LIBRARY_TYPES
} from '../../config/library'

export class LibraryPlugin {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: LibraryItems
  ) {
  }

  make (): void {
    const name = toCamelCase(this.items.getGlobalName())
    const nameBasic = `${name}BasicPlugin`
    const nameMax = `${name}Plugin`

    this.items.write(
      LIBRARY_PLUGIN,
      [
        'import { type App } from \'vue\'',
        'import { forEach } from \'../functions/forEach\'',
        '',
        'import { components } from \'./components\'',
        `import './${LIBRARY_STYLE}.scss'`,
        `import './${LIBRARY_TYPES}.d.ts'`,
        '',
        `export const ${nameMax} = {`,
        '  install: async (app: App) => {',
        `    await (await import('./${LIBRARY_MEDIA}')).makeMedia()`,
        '',
        '    forEach(components, (component, name) => {',
        '      app.component(name, component)',
        '    })',
        '  }',
        '}'
      ]
    )

    this.items.write(
      LIBRARY_PLUGIN_BASIC,
      [
        'import { type App } from \'vue\'',
        '',
        'import { uiComponentsPlugin } from \'./components\'',
        `import './${LIBRARY_STYLE_BASIC}.scss'`,
        `import './${LIBRARY_TYPES}.d.ts'`,
        '',
        `export const ${nameBasic} = {`,
        '  install: (app: App) => {',
        '    app.use(uiComponentsPlugin)',
        '  }',
        '}'
      ]
    )
  }
}
