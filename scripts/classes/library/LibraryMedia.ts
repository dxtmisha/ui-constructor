import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'

import { PropertiesFile } from '../properties/PropertiesFile'

import { LibraryItems } from './LibraryItems'

import { FILE_ICONS } from '../../config/property'
import {
  LIBRARY_FLAGS,
  LIBRARY_MEDIA
} from '../../config/library'

/**
 * Class for generating a file to connect flags.<br>
 * Класс для формирования файла для подключения флагов.
 */
export class LibraryMedia {
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
    this.items.write(
      LIBRARY_MEDIA,
      [
        'export const makeMedia = async (): Promise<void> => {',
        `  ;(await import('./${LIBRARY_FLAGS}')).makeFlags()`,
        ...this.initIcon(),
        '}'
      ]
    )
  }

  initIcon (): string[] {
    const designs = this.items.getDesigns()
    const data: string[] = []

    designs.forEach(design => {
      const path = [design, `${FILE_ICONS}.ts`]

      if (PropertiesFile.is(path)) {
        data.push(`  ;(await import('./../${PropertiesFile.joinPath([design, FILE_ICONS])}')).makeIcons${toCamelCaseFirst(design)}()`)
      }
    })

    return data
  }
}
