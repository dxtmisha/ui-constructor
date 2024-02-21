import { LibraryItems } from './LibraryItems.ts'
import { COMPONENTS_TYPES } from '../../config/components.ts'

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
        '}',
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
}
