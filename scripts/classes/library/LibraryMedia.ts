import { toCamelCase } from '../../../functions/toCamelCase'
import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'

import { PropertiesFile } from '../properties/PropertiesFile'

import { LibraryItems } from './LibraryItems'

import { type Item } from '../../../types/basic'

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
    const name = toCamelCaseFirst(this.items.getGlobalName())

    this.items.write(
      LIBRARY_MEDIA,
      [
        'import { Icons } from \'../classes/Icons.ts\'',
        '',
        `import ${LIBRARY_FLAGS} from './${LIBRARY_FLAGS}.json'`,
        ...this.initIconJsonImport(),
        '',
        `export const make${name}Flags = (): void => {`,
        '  [',
        `    ...${LIBRARY_FLAGS}`,
        '  ].forEach(key => Icons.addLoad(key))',
        '',
        `  import('./${LIBRARY_FLAGS}').then(item => item.makeFlags())`,
        '}',
        '',
        `export const make${name}Icons = (): void => {`,
        '  [',
        [...this.initIconJson()].join(',\r\n'),
        '  ].forEach(key => Icons.addLoad(key))',
        '',
        ...this.initIcon(),
        '}',
        '',
        `export const make${name}Media = (): void => {`,
        `  make${name}Flags()`,
        `  make${name}Icons()`,
        '}'
      ]
    )
  }

  private getIconImport () {
    const designs = this.items.getDesigns()
    const data: Item<string>[] = []

    designs.forEach(design => {
      const path = [design, `${FILE_ICONS}.ts`]

      if (PropertiesFile.is(path)) {
        data.push({
          index: toCamelCaseFirst(design),
          value: `./../${PropertiesFile.joinPath([design, FILE_ICONS])}`
        })
      }
    })

    return data
  }

  private initIcon (): string[] {
    const data: string[] = []

    this.getIconImport().forEach(item => {
      data.push(`  import('${item.value}').then(item => item.makeIcons${item.index}())`)
    })

    return data
  }

  private initIconJson (): string[] {
    const data: string[] = []

    this.getIconImport().forEach(item => {
      data.push(`    ...${toCamelCase(item.index)}`)
    })

    return data
  }

  private initIconJsonImport (): string[] {
    const data: string[] = []

    this.getIconImport().forEach(item => {
      data.push(`import ${toCamelCase(item.index)} from '${item.value}.json'`)
    })

    return data
  }
}
