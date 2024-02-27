import { LibraryItems } from './LibraryItems.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'

import { LIBRARY_NUXT, LIBRARY_NUXT_PLUGIN, LIBRARY_PLUGIN_BASIC, LIBRARY_STYLE } from '../../config/library.ts'
import { toCamelCase } from '../../../functions/toCamelCase.ts'

export class LibraryNuxt {
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
    this.makePlugin()
    this.makeModule()
  }

  private makePlugin (): void {
    this.items.write(
      LIBRARY_NUXT_PLUGIN,
      [
        'import { makeMedia } from \'./media\'',
        '',
        'makeMedia()',
        'console.log(\'makeMedia\')',
        'export default {}'
      ]
    )
  }

  private makeModule (): void {
    const main = PropertiesFile.readFile<Record<string, any>>('package.json')
    const components = this.items.getComponentList()
    const data: string[] = []

    if (main) {
      components.forEach(component => {
        data.push(
          '    await addComponent({',
          `      name: '${component.codeFull}',`,
          `      export: '${component.codeFull}',`,
          `      filePath: '${main.name}/${component.codeFull}'`,
          '    })'
        )
      })

      this.items.write(
        LIBRARY_NUXT,
        [
          'import { addComponent, addImports, defineNuxtModule } from \'@nuxt/kit\'',
          '',
          'export default defineNuxtModule({',
          '  meta: {',
          `    name: '${main.name}',`,
          `    version: '${main.version}'`,
          '  },',
          '  async setup (_, nuxt) {',
          `    nuxt.options.css.push('${main.name}/${LIBRARY_STYLE}.css')`,
          '    nuxt.options.build.transpile = [',
          `      /${main.name}\\/dist\\/(${this.items.getDesigns().join('|')})/i`,
          '    ]',
          '',
          '    addImports({',
          `      name: '${toCamelCase(`${main.name}-${LIBRARY_PLUGIN_BASIC}`)}',`,
          `      from: '${main.name}/${LIBRARY_PLUGIN_BASIC}',`,
          '      type: true',
          '    })',
          '',
          ...data,
          '  }',
          '})'
        ]
      )
    }
  }
}