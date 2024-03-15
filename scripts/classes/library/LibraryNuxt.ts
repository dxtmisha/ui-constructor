import { toCamelCase } from '../../../functions/toCamelCase'
import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst.ts'

import { PropertiesFile } from '../properties/PropertiesFile'
import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_NUXT,
  LIBRARY_NUXT_PLUGIN,
  LIBRARY_PLUGIN_BASIC,
  LIBRARY_STYLE
} from '../../config/library'

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
    const name = toCamelCaseFirst(this.items.getGlobalName())

    this.items.write(
      LIBRARY_NUXT_PLUGIN,
      [
        `import { make${name}Media } from './media'`,
        '',
        `make${name}Media()`,
        `console.log('make${name}Media')`,
        'export default {}'
      ]
    )
  }

  private makeModule (): void {
    const main = PropertiesFile.readFile<Record<string, any>>('package.json')
    const globalName = toCamelCase(this.items.getGlobalName())
    const designMain = toCamelCase(this.items.getDesignMain())
    const components = this.items.getComponentList()
    const data: string[] = []

    if (main) {
      components.forEach(component => {
        data.push(
          '    await addComponent({',
          `      name: '${component.codeFull}',`,
          `      filePath: '${main.name}/dist/${component.codeFull}.vue'`,
          '    })'
        )
      })

      this.items.write(
        LIBRARY_NUXT,
        [
          'import { addComponent, addImports, defineNuxtModule } from \'@nuxt/kit\'',
          `import ${globalName}VitePlugin from '${main.name}/vite-plugin-vue-ui'`,
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
          '    nuxt.hook(\'vite:extendConfig\', (config) => {',
          '      const options = {',
          '        importComponents: false,',
          '        icon: true,',
          '        flag: true,',
          `        style: '${designMain}'`,
          '      }',
          '      console.log(config)',
          '      if (config?.plugins) {',
          '        config.plugins.push(uiVitePlugin(options))',
          '      } else {',
          '        config.plugins = [uiVitePlugin(options)]',
          '      }',
          '    })',
          '',
          '    addImports({',
          `      name: '${toCamelCase(`${main.name}-${LIBRARY_PLUGIN_BASIC}`)}',`,
          `      from: '${main.name}/${LIBRARY_PLUGIN_BASIC}'`,
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
