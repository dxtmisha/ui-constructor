import { LibraryItems } from './LibraryItems'
import { PropertiesFile } from '../properties/PropertiesFile'

import { LIBRARY_DIR, LIBRARY_FLAGS, LIBRARY_LIST_FILES, LIBRARY_PLUGIN } from '../../config/library'

const EXPORTS_DEFAULT = {
  '.': {
    import: './dist/index.js',
    require: './dist/index.umd.cjs',
    types: `./dist/${LIBRARY_DIR}/index.d.ts`
  },
  [`./${LIBRARY_FLAGS}`]: {
    import: `./dist/${LIBRARY_FLAGS}.js`,
    require: `./dist/${LIBRARY_FLAGS}.umd.cjs`,
    types: `./dist/${LIBRARY_DIR}/${LIBRARY_FLAGS}.d.ts`
  },
  [`./${LIBRARY_PLUGIN}`]: {
    import: `./dist/${LIBRARY_PLUGIN}.js`,
    require: `./dist/${LIBRARY_PLUGIN}.umd.cjs`,
    types: `./dist/${LIBRARY_DIR}/${LIBRARY_PLUGIN}.d.ts`
  }
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
      ...this.makeLibrary(),
      ...this.makeComponents()
      /*
      './components-type': './dist/lib/types.d.ts',
      './components-file': './dist/lib/file-types.d.ts',
      './style-main': './lib/style.scss',
      './style-init': './lib/style-init.scss',
      './style-components': './dist/style.css',
      './style.css': './dist/style.css',
      './media': {
        import: './dist/media.js',
        require: './dist/media.umd.cjs',
        types: './dist/lib/media.d.ts'
      },
      './dist/*': './dist/*',
      './styles/*': './styles/*',
      './*': './*'
       */
    }

    // this.items.getDesigns().forEach(design => {
    //   exports[`./${design}/use.scss`] = `./${design}/use.scss`
    // })

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

  makeLibrary (): Record<string, any> {
    const data: Record<string, any> = {}

    LIBRARY_LIST_FILES.forEach(file => {
      if (file.match(/\.scss$/)) {
        data[`./${file}`] = `./${LIBRARY_DIR}/${file}`
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

  makeComponents (): Record<string, any> {
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
}
