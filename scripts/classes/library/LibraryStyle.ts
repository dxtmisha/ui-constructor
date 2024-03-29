import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_STYLE,
  LIBRARY_STYLE_BASIC
} from '../../config/library'

/**
 * Class for creating a connection file for the split.<br>
 * Класс для создания файла подключения спила.
 */
export class LibraryStyle {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates a common style file.<br>
   * Создает общий файл стилей.
   */
  make (): this {
    const main = this.items.getDesignMain()
    const designs = process.env.DESIGNS?.split(',')

    if (designs) {
      const data: string[] = []
      const basic: string[] = []

      designs.forEach(item => {
        data.push(`@import "./../${item}/styles/${item === main ? 'main' : 'basic'}";`)
        basic.push(`@import "./../${item}/styles/basic";`)
      })

      this.items.write(LIBRARY_STYLE, data, 'scss')
      this.items.write(LIBRARY_STYLE_BASIC, [
        ...basic,
        '',
        '@import "./../styles/init";',
        '@include initGlobal;'
      ], 'scss')
    }

    return this
  }
}
