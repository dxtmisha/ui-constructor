import { LibraryItems } from './LibraryItems'
import { PropertiesFile } from '../properties/PropertiesFile'

const EXPORTS_DEFAULT = {
  '.': {
    import: './dist/index.js',
    require: './dist/index.umd.cjs',
    types: './dist/lib/index.d.ts'
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
    const components = this.items.getComponentList()

    const main = PropertiesFile.readFile('package.json')
    const exports: Record<string, any> = {
      ...EXPORTS_DEFAULT
      /*
      './components-type': './dist/lib/types.d.ts',
      './components-file': './dist/lib/file-types.d.ts',
      './create': {
        import: './dist/create.js',
        require: './dist/create.umd.cjs',
        types: './dist/lib/create.d.ts'
      },
      './main': {
        import: './dist/main.js',
        require: './dist/main.umd.cjs',
        types: './dist/lib/main.d.ts'
      },
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

    this.items.getDesigns().forEach(design => {
      // exports[`./${design}/use.scss`] = `./${design}/use.scss`
    })

    components.forEach(component => {
      // exports[`./${component.codeFull}`] = {
      //   import: `./${component.design}/${component.dir}/index.ts`,
      //   // require: `./dist/${component.codeFull}.umd.cjs`,
      //   types: `./dist/${component.design}/${component.dir}/index.d.ts`
      // }
    })

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
}
