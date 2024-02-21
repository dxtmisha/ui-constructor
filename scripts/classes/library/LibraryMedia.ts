import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst.ts'

import { PropertiesFile } from '../properties/PropertiesFile.ts'

import { LibraryItems } from './LibraryItems.ts'

import { FILE_ICONS } from '../../config/property.ts'
import {
  COMPONENTS_FLAGS,
  COMPONENTS_MEDIA
} from '../../config/components.ts'

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
      COMPONENTS_MEDIA,
      [
        'export const makeMedia = async (): Promise<void> => {',
        `  ;(await import('./${COMPONENTS_FLAGS}')).makeFlags()`,
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
        data.push(`  ;(await import('./../${PropertiesFile.joinPath(path)}')).makeIcons${toCamelCaseFirst(design)}()`)
      }
    })

    return data
  }
}
