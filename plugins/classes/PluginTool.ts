/**
 * A class for obtaining data to work with plugins.<br>
 * Класс для получения данных для работы с плагинами.
 */
export class PluginTool {
  /**
   * Checks if the id is a user’s file.<br>
   * Проверяет, является ли id файлом пользователя.
   * @param id file identification /<br>идентификация файла
   */
  static isSrc (id: string): boolean {
    return Boolean(
      id.match(/\/src\//i) &&
      !id.match(/\/node_modules\//i)
    )
  }

  /**
   * Checks if the id is a JS user’s file.<br>
   * Проверяет, является ли id файлом JS пользователя.
   * @param id file identification /<br>идентификация файла
   */
  static isJs (id: string): boolean {
    return this.isSrc(id) && Boolean(id.match(/\.ts|js|tsx/))
  }

  /**
   * Checks if the id is a Vue user’s file.<br>
   * Проверяет, является ли id файлом vue пользователя.
   * @param id file identification /<br>идентификация файла
   */
  static isVue (id: string): boolean {
    return this.isSrc(id) && Boolean(id.match(/\.vue/))
  }

  /**
   * Checks if the id is a Style user’s file.<br>
   * Проверяет, является ли id файлом style пользователя.
   * @param id file identification /<br>идентификация файла
   */
  static isCss (id: string): boolean {
    return this.isSrc(id) && Boolean(id.match(/\.(css|sass|scss)/))
  }

  /**
   * Checks if it is development mode.<br>
   * Проверяет, является ли режим разработка.
   * @param mode current mode /<br>текущий режим
   */
  static isDev (mode: string): boolean {
    return mode === 'development'
  }
}
