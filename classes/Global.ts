let global: Record<string, any>

/**
 * Class for obtaining global data.<br>
 * Класс для получения глобальных данных.
 */
export class Global {
  /**
   * Returns the value by its name.<br>
   * Возвращает значение по его имени.
   * @param name property name /<br>название свойства
   */
  static get<R = any> (name: string): R {
    return global && global?.[name]
  }

  /**
   * Adds data, this method works only once.<br>
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data /<br>глобальные данные
   */
  static add (data: Record<string, any>) {
    if (global !== undefined) {
      return
    }

    global = { ...data }
  }
}
