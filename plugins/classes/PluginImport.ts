import { PluginTool } from './PluginTool'
import { PluginImportStyles } from './PluginImportStyles'

import data from '../../library/components.json'

type PluginComponentItem = {
  name: string
  design: string
  code: string
  path: string
}

const regDesigns = `(?<=<|'|"\\s)(${data.designs.join('|')})([A-Z0-9-])([^ >'"\\(\\r\\n]+)`
const regMatch = new RegExp(regDesigns, 'i')
const regMatchAll = new RegExp(regDesigns, 'ig')

/**
 * Class for connecting components.<br>
 * Класс для подключения компонентов.
 */
export class PluginImport {
  /**
   * Constructor
   * @param styles object for working with style connection /<br>объект для работы с подключением стилей
   * @param id file identification /<br>идентификация файла
   * @param code file content /<br>содержимое файла
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly styles: PluginImportStyles,
    protected readonly id: string,
    protected readonly code: string
  ) {
  }

  /**
   * Initializes the data.<br>
   * Инициализирует данные.
   */
  init (): string {
    if (this.is()) {
      const list = this.getList()

      if (list) {
        const newImport: string[] = []
        let code = this.getCode()

        list.forEach(component => {
          const item = this.findComponent(component)

          if (
            item &&
            newImport.indexOf(item.name) === -1 &&
            !this.isImport(item)
          ) {
            newImport.push(item.name)

            code = this.importComponent(code, item)
            code = this.importStyle(code, item)
          }
        })

        return code
      }
    }

    return this.code
  }

  /**
   * Checks if the file is suitable for conversion.<br>
   * Проверяет, подходит ли файл для преобразования.
   */
  protected is (): boolean {
    return PluginTool.isVue(this.id) && Boolean(this.code.match(regMatch))
  }

  /**
   * Checks if the component was connected.<br>
   * Проверяет, был ли подключен компонент.
   * @param item data on the component /<br>данные по компоненту
   */
  protected isImport (item: PluginComponentItem): boolean {
    return Boolean(
      this.code.match(new RegExp(`from ?['"]${data.name}\\/(${item.name}|${item.code})['"]`, 'i'))
    )
  }

  /**
   * Checks if there is a script element.<br>
   * Проверяет, есть ли элемент script.
   */
  protected isScript (): boolean {
    return Boolean(this.code.match(/<script[^>]*setup[^>]*>/))
  }

  /**
   * Finds the list of components and returns them.<br>
   * Находит список компонентов и возвращает их.
   */
  protected getList (): RegExpMatchArray | null {
    return this.code.match(regMatchAll)
  }

  /**
   * Returns the file code, adding a script if it’s not there.<br>
   * Возвращает код файла, добавляя script, если его нет.
   */
  protected getCode (): string {
    if (this.isScript()) {
      return this.code
    }

    return `<script setup></script>${this.code}`
  }

  /**
   * Search for the component in the list.<br>
   * Искать компонент в списке.
   * @param name component name /<br>название компонента
   */
  protected findComponent (name: string): PluginComponentItem | undefined {
    return data.components.find(
      item => item.name === name || item.code === name
    )
  }

  /**
   * Component connection.<br>
   * Подключение компонента.
   * @param code file content /<br>содержимое файла
   * @param item data on the component /<br>данные по компоненту
   */
  protected importComponent (
    code: string,
    item: PluginComponentItem
  ): string {
    return code.replace(/(<script[^>]*>)/, `$1\r\nimport {${item.name}} from'${data.name}/${item.name}';`)
  }

  /**
   * Checks if it is necessary to import files with styles.<br>
   * Проверяет, надо ли импортировать файлы со стилями.
   * @param code file content /<br>содержимое файла
   * @param item data on the component /<br>данные по компоненту
   */
  protected importStyle (
    code: string,
    item: PluginComponentItem
  ): string {
    const style = this.styles.get(
      item.design,
      this.id,
      item.name
    )

    if (style) {
      return code.replace(/(<script[^>]*>)/, `$1\r\n${style}`)
    }

    return code
  }
}
