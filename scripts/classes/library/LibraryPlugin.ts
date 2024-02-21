import { toCamelCase } from '../../../functions/toCamelCase.ts'

import { LibraryItems } from './LibraryItems.ts'

import {
  COMPONENTS_MEDIA,
  COMPONENTS_PLUGIN,
  COMPONENTS_PLUGIN_BASIC,
  COMPONENTS_STYLE,
  COMPONENTS_STYLE_BASIC
} from '../../config/components.ts'

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
      COMPONENTS_PLUGIN,
      [
        'import { type App } from \'vue\'',
        'import { forEach } from \'../functions/forEach\'',
        '',
        'import { components } from \'./components\'',
        `import './${COMPONENTS_STYLE}.scss'`,
        '',
        `export const ${nameMax} = {`,
        '  install: async (app: App) => {',
        `    await (await import('./${COMPONENTS_MEDIA}')).makeMedia()`,
        '',
        '    forEach(components, (component, name) => {',
        '      app.component(name, component)',
        '    })',
        '  }',
        '}'
      ]
    )

    this.items.write(
      COMPONENTS_PLUGIN_BASIC,
      [
        'import { type App } from \'vue\'',
        '',
        'import { uiComponentsPlugin } from \'./components\'',
        `import './${COMPONENTS_STYLE_BASIC}.scss'`,
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
