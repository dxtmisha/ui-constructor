import { PluginTool } from './PluginTool'

import data from '../../library/components.json'

/**
 * Class for adding an icon.<br>
 * Класс для добавления иконки.
 */
export class PluginMedia {
  /**
   * Constructor
   * @param id file identification /<br>идентификация файла
   * @param code file content /<br>содержимое файла
   * @param icon should the icons be enabled /<br>включить ли иконки
   * @param flag should the flag be enabled /<br>включить ли флаг
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly id: string,
    protected readonly code: string,
    protected readonly icon?: boolean,
    protected readonly flag?: boolean
  ) {
  }

  /**
   * Initialization of data transformation.<br>
   * Инициализация преобразования данных.
   */
  init (): string {
    if (this.is()) {
      const list = [
        `import { ${this.getImports().join(', ')} } from '${data.name}/media';`
      ]

      if (this.flag ?? true) {
        list.push(`${this.getNameFlag()}();`)
      }

      if (this.icon ?? true) {
        list.push(`${this.getNameIcon()}();`)
      }

      list.push(
        '',
        this.code
      )

      return list.join('\r\n')
    }

    return this.code
  }

  /**
   * Checks if the conditions are suitable for working with this file.<br>
   * Проверяет, подходят ли условия для работы с этим файлом.
   */
  protected is (): boolean {
    return PluginTool.isJs(this.id) && Boolean(this.icon || this.flag)
  }

  /**
   * Returns the name of the flag function.<br>
   * Возвращает название функции флага.
   */
  protected getNameFlag (): string {
    return `make${data.nameFirst}Flags`
  }

  /**
   * Returns the name of the icon function.<br>
   * Возвращает название функции иконки.
   */
  protected getNameIcon (): string {
    return `make${data.nameFirst}Icons`
  }

  /**
   * Returns data for connecting data.<br>
   * Возвращает данные для подключения данных.
   */
  protected getImports (): string[] {
    const list: string[] = []

    if (this.flag) {
      list.push(this.getNameFlag())
    }

    if (this.icon) {
      list.push(this.getNameIcon())
    }

    return list
  }
}
