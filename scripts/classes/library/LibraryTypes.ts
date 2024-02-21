import { LibraryItems } from './LibraryItems'
import {
  COMPONENTS_DIR,
  COMPONENTS_FILE,
  COMPONENTS_FLAGS,
  COMPONENTS_INDEX,
  COMPONENTS_MAIN,
  COMPONENTS_MEDIA,
  COMPONENTS_PLUGIN,
  COMPONENTS_PLUGIN_BASIC,
  COMPONENTS_STYLE,
  COMPONENTS_STYLE_BASIC,
  COMPONENTS_TYPES,
  COMPONENTS_TYPES_COMPONENT
} from '../../config/components'

const LIBRARY_LIST = [
  COMPONENTS_FILE,
  COMPONENTS_FLAGS,
  COMPONENTS_MEDIA,
  COMPONENTS_PLUGIN,
  COMPONENTS_PLUGIN_BASIC,
  COMPONENTS_MAIN,
  `${COMPONENTS_STYLE}.scss`,
  `${COMPONENTS_STYLE_BASIC}.scss`
]

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
      COMPONENTS_TYPES,
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
      COMPONENTS_TYPES_COMPONENT,
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
      `  export * from '${dirMain}/dist/${COMPONENTS_INDEX}.js'`,
      '}'
    ]

    LIBRARY_LIST.forEach(name => {
      const dir = name.match(/\.scss$/) ? COMPONENTS_DIR : 'dist'
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
