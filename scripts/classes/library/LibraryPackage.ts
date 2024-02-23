import { LibraryItems } from './LibraryItems'
import { PropertiesFile } from '../properties/PropertiesFile'

import {
  LIBRARY_DIR,
  LIBRARY_LIST_FILES,
  LIBRARY_PLUGIN,
  LIBRARY_PLUGIN_BASIC,
  LIBRARY_STYLE
} from '../../config/library'

const EXPORTS_DEFAULT = {
  '.': {
    import: './dist/index.js',
    require: './dist/index.umd.cjs',
    types: `./dist/${LIBRARY_DIR}/index.d.ts`
  },
  './styles/*': './styles/*',
  './book/*': './book/*',
  './*': './*'
}

/**
 * A class for forming a link in the package.json file.<br>
 * Класс по формированию ссылки в файле package.json.
 */
export class LibraryPackage {
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
    const main = PropertiesFile.readFile('package.json')
    const exports: Record<string, any> = {
      ...EXPORTS_DEFAULT,
      ...this.initLibrary(),
      ...this.initStyles(),
      ...this.initComponents()
    }

    if (main) {
      PropertiesFile.write(
        [],
        'package',
        {
          ...main,
          exports
        },
        'json'
      )
    }
  }

  initLibrary (): Record<string, any> {
    const data: Record<string, any> = {}

    LIBRARY_LIST_FILES.forEach(file => {
      if (file.match(/\.scss$/)) {
        const name = PropertiesFile.parse(file)?.name
        data[`./${name}.css`] = `./${LIBRARY_DIR}/${name === LIBRARY_STYLE ? LIBRARY_PLUGIN : LIBRARY_PLUGIN_BASIC}.css`
      } else {
        data[`./${file}`] = {
          import: `./dist/${file}.js`,
          require: `./dist/${file}.umd.cjs`,
          types: `./dist/${LIBRARY_DIR}/${file}.d.ts`
        }
      }
    })

    return data
  }

  initComponents (): Record<string, any> {
    const components = this.items.getComponentList()
    const data: Record<string, any> = {}

    components.forEach(component => {
      data[`./${component.codeFull}`] = {
        import: `./dist/${component.codeFull}.js`,
        require: `./dist/${component.codeFull}.umd.cjs`,
        types: `./dist/${component.design}/${component.dir}/index.d.ts`
      }
    })

    return data
  }

  initStyles (): Record<string, any> {
    const data: Record<string, any> = {}

    this.items.getDesigns().forEach(design => {
      data[`./${design}/style.scss`] = `./${design}/styles/style.scss`
    })

    return data
  }
}
