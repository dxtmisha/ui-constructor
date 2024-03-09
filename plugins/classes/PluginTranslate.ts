import { PluginTool } from './PluginTool'

import data from '../../library/components.json'

/**
 * Class for connecting test translations.<br>
 * Класс для подключения тестовых переводов.
 */
export class PluginTranslate {
  /**
   * Constructor
   * @param id file identification /<br>идентификация файла
   * @param code file content /<br>содержимое файла
   * @param mode code execution mode /<br>режим выполнения кода
   * @param path link to the file with data /<br>ссылка к файлу с данными
   * @param api link to the site for the request /<br>ссылка на сайт для запроса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly id: string,
    protected readonly code: string,
    protected readonly mode: string,
    protected readonly path?: string,
    protected readonly api?: string
  ) {
  }

  /**
   * Initialization of the transformation of all style properties.<br>
   * Инициализация преобразования всех свойств стилей.
   */
  init (): string {
    if (this.is()) {
      return this.importText(this.code)
    }

    return this.code
  }

  /**
   * Checks if the conditions are suitable for working with this file.<br>
   * Проверяет, подходят ли условия для работы с этим файлом.
   */
  protected is (): boolean {
    return PluginTool.isJs(this.id) && Boolean(this.isPath() || this.api)
  }

  /**
   * Checks if there is a file with text for translation.<br>
   * Проверяет, есть ли файл с текстом для перевода.
   */
  protected isPath (): boolean {
    return Boolean(this.path && this.mode === 'development')
  }

  /**
   * Returns the path for connecting files.<br>
   * Возвращает путь для подключения файлов.
   * @param path путь к файле
   */
  getUrl (path: string): string {
    return path.replace(/'/, '\\\'')
  }

  /**
   * Connecting files for translations.<br>
   * Подключение файлов для переводов.
   * @param code file content /<br>содержимое файла
   */
  protected importText (code: string): string {
    const list: string[] = [
      `import { Translate } from '${data.name}';`
    ]

    if (
      this.path &&
      this.isPath()
    ) {
      list.push(
        `import translateUser from '${this.getUrl(this.path)}';`,
        'Translate.addSync(translateUser);'
      )
    }

    if (this.api) {
      list.push(`Translate.setUrl('${this.getUrl(this.api)}');`)
    }

    list.push(code)

    return list.join('\r\n')
  }
}
