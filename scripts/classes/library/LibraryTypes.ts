import { LibraryItems } from './LibraryItems'
import {
  LIBRARY_DIR,
  LIBRARY_INDEX,
  LIBRARY_LIST_FILES,
  LIBRARY_TYPES,
  LIBRARY_TYPES_COMPONENT
} from '../../config/library'

export class LibraryTypes {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: LibraryItems
  ) {
  }

  make (): this {
    this.items.write(
      LIBRARY_TYPES,
      [
        'import \'@vue/runtime-core\'',
        'import { components } from \'./components\'',
        '',
        'declare module \'@vue/runtime-core\' {',
        '  export interface GlobalComponents {',
        ...this.initComponents(),
        '  }',
        '}'
      ],
      'd.ts'
    )

    this.items.write(
      LIBRARY_TYPES_COMPONENT,
      [
        ...this.initLibrary(),
        ...this.initComponentsModule()
      ],
      'd.ts'
    )

    return this
  }

  /**
   * Initializes the list of available components.<br>
   * Инициализирует список доступных компонентов.
   */
  protected initComponents (): string[] {
    const data: string[] = []

    this.items
      .getComponentList()
      .forEach(({ codeFull }) => data.push(`    ${codeFull}: typeof components.${codeFull}`))

    return data
  }

  protected initComponentsModule (): string[] {
    const data: string[] = []
    const dirMain: string = this.items.getGlobalName().toLowerCase()

    this.items
      .getComponentList()
      .forEach(({
        design,
        codeFull,
        dir
      }) => {
        data.push(
          '',
          `declare module '${dirMain}/${codeFull}' {`,
          `  export { ${codeFull} } from '${dirMain}/${design}/${dir}/${codeFull}.vue'`,
          '}'
        )
      })

    return data
  }

  protected initLibrary (): string[] {
    const dirMain: string = this.items.getGlobalName().toLowerCase()
    const data: string[] = [
      `declare module '${dirMain}' {`,
      `  export * from '${dirMain}/dist/${LIBRARY_INDEX}.js'`,
      '}'
    ]

    LIBRARY_LIST_FILES.forEach(name => {
      const dir = name.match(/\.scss$/) ? LIBRARY_DIR : 'dist'
      const extension = name.match(/\.scss$/) ? '' : '.js'

      data.push(
        `declare module '${dirMain}/${name}' {`,
        `  export * from '${dirMain}/${dir}/${name}${extension}'`,
        '}'
      )
    })

    return data
  }
}
