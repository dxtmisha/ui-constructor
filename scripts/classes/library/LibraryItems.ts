import { toCamelCaseFirst } from '../../../functions/toCamelCaseFirst'
import { toKebabCase } from '../../../functions/toKebabCase'

import { PropertiesFile } from '../properties/PropertiesFile'

import {
  type LibraryData,
  type LibraryList
} from '../../types/library'

import { FILE_PROPERTY } from '../../config/property'
import {
  LIBRARY_DIR,
  LIBRARY_EXCEPTIONS
} from '../../config/library'

/**
 * Class for working with the list of components.<br>
 * Класс для работы со списком компонентов.
 */
export class LibraryItems {
  protected readonly items: LibraryList

  /**
   * Constructor
   */
  constructor () {
    this.items = this.initItems()
  }

  /**
   * Returns the list of components divided by design groups.<br>
   * Возвращает список компонентов, разделенных по группам дизайна.
   */
  get (): LibraryList {
    return this.items
  }

  /**
   * Returns the list of components as an array.<br>
   * Возвращает список компонентов в виде массива.
   */
  getComponentList (): LibraryData[] {
    const list: LibraryData[] = []

    this.items.forEach(item => list.push(...item.components))

    return list
  }

  /**
   * Returns the name of the global property.<br>
   * Возвращает название глобального свойства.
   */
  getGlobalName (): string {
    return process.env.DESIGNS_GLOBAL ?? 'UI'
  }

  /**
   * Returns the name of the main design.<br>
   * Возвращает название главного дизайна.
   */
  getDesignMain (): string {
    return process.env.DESIGNS_MAIN ?? 'design'
  }

  /**
   * Returns a list of design names.<br>
   * Возвращает список названий дизайнов.
   */
  getDesigns (): string[] {
    const list: string[] = []

    process.env.DESIGNS
      ?.split(',')
      ?.forEach(design => list.push(toKebabCase(design).trim()))

    return list
  }

  /**
   * Writes data in the file.<br>
   * Записывает данные в файле.
   * @param name file name /<br>название файла
   * @param data values for writing /<br>значения для записи
   * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
   */
  write (
    name: string,
    data: string[],
    extension: string = 'ts'
  ): void {
    const file = extension === 'json'
      ? data
      : [
          '// This file is generated by a script, do not edit.',
          '// Этот файл генерируется скриптом, не редактировать.',
          '',
          ...data,
          ''
        ]

    PropertiesFile.write(
      [LIBRARY_DIR],
      name,
      file.join('\r\n'),
      extension
    )
  }

  /**
   * Returns a list of components.<br>
   * Возвращает список компонентов.
   * @param design design names /<br>названия дизайна
   */
  protected getComponents (design: string): LibraryData[] {
    const list: LibraryData[] = []
    const dirs = PropertiesFile.readDir(design)

    dirs.forEach(dir => {
      if (
        PropertiesFile.is([design, dir, FILE_PROPERTY]) &&
        LIBRARY_EXCEPTIONS.indexOf(dir) === -1
      ) {
        const name = toKebabCase(dir).trim()

        list.push({
          name,
          design,
          alias: `${design}.${name}`,
          codeFull: toCamelCaseFirst(`${design}-${name}`),
          dir
        })
      }
    })

    return list
  }

  /**
   * Initializes data about the component.<br>
   * Инициализирует данные о компоненте.
   */
  protected initItems (): LibraryList {
    const list: LibraryList = []

    this.getDesigns().forEach(name => {
      list.push({
        name,
        components: this.getComponents(name)
      })
    })

    return list
  }
}
