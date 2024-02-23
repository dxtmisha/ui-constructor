import { toCamelCase } from '../../../functions/toCamelCase'

import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_MEDIA,
  LIBRARY_PLUGIN,
  LIBRARY_PLUGIN_BASIC,
  LIBRARY_STYLE,
  LIBRARY_STYLE_BASIC, LIBRARY_TRANSLATE, LIBRARY_TYPES
} from '../../config/library'
import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst.ts'

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
    this.makeTranslate()
    this.makePlugin()
    this.makePluginBasic()
  }

  private getNameTranslate (): string {
    const ui = this.items.getGlobalName()
    return `registration${toCamelCaseFirst(ui)}Translate`
  }

  private makeTranslate (): void {
    const name = this.getNameTranslate()

    this.items.write(
      LIBRARY_TRANSLATE,
      [
        'import { Translate } from \'../classes/Translate\'',
        '',
        `export const ${name} = async (data: Record<string, string>): Promise<void> => {`,
        '  await Translate.addNormalOrSync(data)',
        '}'
      ]
    )
  }

  private makePlugin (): void {
    const ui = this.items.getGlobalName()
    const name = `registration${toCamelCaseFirst(ui)}`
    const translate = this.getNameTranslate()

    this.items.write(
      LIBRARY_PLUGIN,
      [
        'import { type App } from \'vue\'',
        '',
        `import { ${toCamelCase(ui)}ComponentsPlugin } from './components'`,
        `import { ${translate} } from './${LIBRARY_TRANSLATE}'`,
        '',
        `import './${LIBRARY_STYLE}.scss'`,
        `import './${LIBRARY_TYPES}.d.ts'`,
        '',
        `export const ${name} = async (app: App, options?: Record<string, any>): Promise<App> => {`,
        `  await (await import('./${LIBRARY_MEDIA}')).makeMedia()`,
        '',
        '  if (options) {',
        '    if (options?.translate) {',
        `      await ${translate}(options.translate)`,
        '    }',
        '  }',
        '',
        '  app.use(uiComponentsPlugin)',
        '',
        '  return app',
        '}'
      ]
    )
  }

  private makePluginBasic (): void {
    const ui = this.items.getGlobalName()
    const name = `${toCamelCase(ui)}Plugin`
    const registration = `registration${toCamelCaseFirst(ui)}Basic`
    const translate = this.getNameTranslate()

    this.items.write(
      LIBRARY_PLUGIN_BASIC,
      [
        'import { type App } from \'vue\'',
        '',
        `import { ${toCamelCase(ui)}ComponentsPlugin } from './components'`,
        `import { ${translate} } from './${LIBRARY_TRANSLATE}'`,
        '',
        `import './${LIBRARY_STYLE_BASIC}.scss'`,
        `import './${LIBRARY_TYPES}.d.ts'`,
        '',
        `export const ${name} = {`,
        '  install: (app: App) => app.use(uiComponentsPlugin)',
        '}',
        '',
        `export const ${registration} = async (app: App, options?: Record<string, any>): Promise<App> => {`,
        '  if (options) {',
        '    if (options?.translate) {',
        `      await ${translate}(options.translate)`,
        '    }',
        '  }',
        '',
        '  app.use(uiComponentsPlugin)',
        '',
        '  return app',
        '}'
      ]
    )
  }
}
