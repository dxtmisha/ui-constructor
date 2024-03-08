import data from '../../library/components.json'

/**
 * Class for working with style connection.<br>
 * Класс для работы с подключением стилей.
 */
export class PluginImportStyles {
  protected readonly items: string[] = []

  /**
   * Checks if the styles are already connected.<br>
   * Проверяет, если уже подключены стили.
   * @param design design name /<br>название дизайна
   */
  is (design: string): boolean {
    return this.items.indexOf(design) !== -1
  }

  /**
   * Returns the style connection code.<br>
   * Возвращает код подключения стиля.
   * @param design design name /<br>название дизайна
   */
  getCode (design: string): string {
    return `import '${data.name}/${design}/style';`
  }

  /**
   * Adds a design and returns the design connection code.<br>
   * Добавляет дизайн и возвращает код подключения дизайна.
   * @param design design name /<br>название дизайна
   */
  getCodeAndPush (design: string): string {
    this.push(design)
    return this.getCode(design)
  }

  /**
   * Adding a design to the list of connected ones.<br>
   * Добавление дизайна в список подключенных.
   * @param design design name /<br>название дизайна
   */
  push (design: string): this {
    this.items.push(design)
    return this
  }
}
