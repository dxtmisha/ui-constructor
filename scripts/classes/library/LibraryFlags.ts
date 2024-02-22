import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'
import { toKebabCase } from '../../../functions/toKebabCase'

import { PropertiesFile } from '../properties/PropertiesFile'
import { LibraryItems } from './LibraryItems'

import {
  LIBRARY_DIR_FLAGS,
  LIBRARY_FLAGS
} from '../../config/library'

/**
 * Class for generating a file to connect flags.<br>
 * Класс для формирования файла для подключения флагов.
 */
export class LibraryFlags {
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
   * Adds a file with flags.<br>
   * Добавляет файл с флагами.
   */
  make (): void {
    const list = this.getList()

    const imports: string[] = []
    const data: string[] = []

    list.forEach(flag => {
      const name = toCamelCaseFirst(flag.replace('.', '-'))
      imports.push(`import ${name} from '../media/flags/${flag}'`)
      data.push(`  Icons.add('flag-${toKebabCase(name.replace('Svg', ''))}', ${name})`)
    })

    this.items.write(
      LIBRARY_FLAGS,
      [
        'import { Icons } from \'./../classes/Icons\'',
        '',
        ...imports,
        '',
        'export const makeFlags = (): void => {',
        ...data,
        '}'
      ]
    )
  }

  /**
   * Returns a list of flags.<br>
   * Возвращает список флагов.
   */
  private getList (): string[] {
    return PropertiesFile.readDirRecursive(LIBRARY_DIR_FLAGS)
  }
}
