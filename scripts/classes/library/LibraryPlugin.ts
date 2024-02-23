import { toCamelCase } from '../../../functions/toCamelCase'
import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'

import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_DIR,
  LIBRARY_MEDIA,
  LIBRARY_PLUGIN,
  LIBRARY_PLUGIN_BASIC,
  LIBRARY_STYLE,
  LIBRARY_STYLE_BASIC,
  LIBRARY_TRANSLATE,
  LIBRARY_TYPES
} from '../../config/library'
import { PropertiesFile } from '../properties/PropertiesFile.ts'

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
    const translate = this.getNameTranslate()

    ;([
      'main',
      ...this.items.getDesigns()
    ]).forEach(design => {
      const suffix = design === 'main' ? '' : `-${design}`
      const components = `${toCamelCase(`${ui}${suffix}`)}ComponentsPlugin`
      const path = `components${suffix}`
      const name = `registration${toCamelCaseFirst(`${this.items.getGlobalName()}${suffix}`)}`
      const style = design === 'main' ? `./${LIBRARY_STYLE}` : `../${design}/styles/main`

      if (PropertiesFile.is([LIBRARY_DIR, `${path}.ts`])) {
        this.items.write(
          `${LIBRARY_PLUGIN}${suffix}`,
          [
            'import { type App } from \'vue\'',
            '',
            `import { ${components} } from './${path}'`,
            `import { ${translate} } from './${LIBRARY_TRANSLATE}'`,
            '',
            'import { type ConstrRegistration } from \'../types/constructor\'',
            '',
            `import '${style}.scss'`,
            `import './${LIBRARY_TYPES}.d.ts'`,
            '',
            `export const ${name} = async (app: App, options?: ConstrRegistration): Promise<App> => {`,
            `  await (await import('./${LIBRARY_MEDIA}')).makeMedia()`,
            '',
            '  if (options) {',
            '    if (options?.translate) {',
            `      await ${translate}(options.translate)`,
            '    }',
            '  }',
            '',
            `  app.use(${components})`,
            '',
            '  return app',
            '}'
          ]
        )
      }
    })
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
        'import { type ConstrRegistration } from \'../types/constructor\'',
        '',
        `import './${LIBRARY_STYLE_BASIC}.scss'`,
        `import './${LIBRARY_TYPES}.d.ts'`,
        '',
        `export const ${name} = {`,
        '  install: (app: App) => app.use(uiComponentsPlugin)',
        '}',
        '',
        `export const ${registration} = async (app: App, options?: ConstrRegistration): Promise<App> => {`,
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
