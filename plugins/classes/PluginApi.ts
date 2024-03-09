import { PluginTool } from './PluginTool'

import data from '../../library/components.json'

/**
 * Class for connecting test translations.<br>
 * Класс для подключения тестовых переводов.
 */
export class PluginApi {
  protected className: string = 'Api'
  protected methodAdd: string = 'addResponse'
  protected methodUrl: string = 'setUrl'

  /**
   * Constructor
   * @param id file identification /<br>идентификация файла
   * @param code file content /<br>содержимое файла
   * @param mode code execution mode /<br>режим выполнения кода
   * @param path link to the file with data /<br>ссылка к файлу с данными
   * @param url link to the site for the request /<br>ссылка на сайт для запроса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly id: string,
    protected readonly code: string,
    protected readonly mode: string,
    protected readonly path?: string,
    protected readonly url?: string
  ) {
  }

  /**
   * Initialization of data transformation.<br>
   * Инициализация преобразования данных.
   */
  init (): string {
    if (this.is()) {
      return this.importApi(this.code)
    }

    return this.code
  }

  /**
   * Checks if the conditions are suitable for working with this file.<br>
   * Проверяет, подходят ли условия для работы с этим файлом.
   */
  protected is (): boolean {
    return PluginTool.isJs(this.id) && Boolean(this.isPath() || this.url)
  }

  /**
   * Checks if there is a file with data for developers.<br>
   * Проверяет, есть ли файл с данными для разработчиков.
   */
  protected isPath (): boolean {
    return Boolean(this.path && PluginTool.isDev(this.mode))
  }

  /**
   * Returns the path for connecting files.<br>
   * Возвращает путь для подключения файлов.
   * @param path path to the file /<br>путь к файлу
   */
  getUrl (path: string): string {
    return path.replace(/'/, '\\\'')
  }

  /**
   * Connecting files for work.<br>
   * Подключение файлов для работы.
   * @param code file content /<br>содержимое файла
   */
  protected importApi (code: string): string {
    const nameDev = `dev${this.className}User`
    const list: string[] = [
      `import { ${this.className} } from '${data.name}';`
    ]

    if (
      this.path &&
      this.isPath()
    ) {
      list.push(
        `import ${nameDev} from '${this.getUrl(this.path)}';`,
        `${this.className}.${this.methodAdd}(${nameDev});`
      )
    }

    if (this.url) {
      list.push(`${this.className}.${this.methodUrl}('${this.getUrl(this.url)}');`)
    }

    list.push(code)

    return list.join('\r\n')
  }
}
