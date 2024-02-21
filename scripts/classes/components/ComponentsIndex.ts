import { ComponentsItems } from './ComponentsItems'
import { PropertiesFile } from '../properties/PropertiesFile'

import {
  COMPONENTS_DIR_CLASSES,
  COMPONENTS_DIR_COMPOSABLES,
  COMPONENTS_DIR_FUNCTIONS,
  COMPONENTS_INDEX
} from '../../config/components'

/**
 * A class for forming a file with all functions and classes.<br>
 * Класс формирования файла со всеми функциями и классами.
 */
export class ComponentsIndex {
  /**
   * Constructor
   * @param items object for working with the list of components /<br>объект для работы со списком компонентов
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly items: ComponentsItems
  ) {
  }

  make (): void {
    this.items.write(
      COMPONENTS_INDEX,
      [
        '// Functions',
        ...this.getFunctions(),
        '',
        '// Classes',
        ...this.getClasses(),
        '',
        '// Composables',
        ...this.getComposables()
      ]
    )
  }

  /**
   * Returns an array of strings with the code of connected files.<br>
   * Возвращает массив строк с кодом подключенных файлов.
   * @param paths path to the icons folder /<br>путь к папке иконок
   * @param files list of files /<br>список файлов
   */
  private getExport (
    paths: string[],
    files: string[]
  ): string[] {
    const data: string[] = []

    files.forEach(item => {
      if (item.match(/\.ts$/)) {
        const dir = item.replace(/\.ts$/, '')
        data.push(`export * from './../${PropertiesFile.joinPath(paths)}/${dir}'`)
      }
    })

    return data
  }

  /**
   * Returns a list of functions.<br>
   * Возвращает список функций.
   */
  private getFunctions (): string[] {
    return this.getExport(
      COMPONENTS_DIR_FUNCTIONS,
      PropertiesFile.readDirRecursive(COMPONENTS_DIR_FUNCTIONS)
    )
  }

  /**
   * Returns a list of classes.<br>
   * Возвращает список классов.
   */
  private getClasses (): string[] {
    return this.getExport(
      COMPONENTS_DIR_CLASSES,
      PropertiesFile.readDirRecursive(COMPONENTS_DIR_CLASSES)
    )
  }

  /**
   * Returns a list of classes.<br>
   * Возвращает список классов.
   */
  private getComposables (): string[] {
    return this.getExport(
      COMPONENTS_DIR_COMPOSABLES,
      PropertiesFile.readDirRecursive(COMPONENTS_DIR_COMPOSABLES)
    )
  }
}
