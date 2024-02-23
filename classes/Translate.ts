import { forEach } from '../functions/forEach'
import { isFilled } from '../functions/isFilled'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { Geo } from './Geo'
import { Api } from './Api'

import { useEnv } from '../composables/useEnv'

export type TranslateList<T extends string[]> = { [K in T[number]]: string }
export type TranslateItemOrList<T extends string | string[]> = T extends string[] ? TranslateList<T> : string

/**
 * Class for getting the translated text.
 * Класс для получения переведенного текста.
 */
export class Translate {
  protected static readonly url = useEnv<string>('apiTranslate')
  protected static readonly urlLocalhost = 'translate.json'
  protected static readonly data: Record<string, string> = {}

  protected static cache: string[] = []
  protected static resolveList: (() => void)[] = []
  protected static timeout?: any

  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get (name: string): Promise<string> {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.data[fullName]
    }

    if (!Api.isLocalhost()) {
      await this.add(name)
    }

    return this.data?.[fullName] ?? name
  }

  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync (name: string): string {
    const fullName = this.getName(name)

    if (fullName in this.data) {
      return this.data[fullName]
    }

    return name
  }

  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getList<T extends string[]> (names: T): Promise<TranslateList<T>> {
    return new Promise(resolve => {
      const list: Record<string, string> = {}
      let end = 0

      for (const name of names) {
        this.get(name).then(text => {
          list[name] = text

          if (++end >= names.length) {
            resolve(list as TranslateList<T>)
          }
        })
      }
    })
  }

  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getListSync<T extends string[]> (names: T): TranslateList<T> {
    const list: Record<string, string> = {}

    for (const name of names) {
      list[name] = this.getSync(name)
    }

    return list as TranslateList<T>
  }

  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add (names: string | string[]): Promise<void> {
    return new Promise(resolve => {
      this.cache.push(...toArray(names))
      this.resolveList.push(resolve)

      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.timeout = undefined
        this.make().then(() => {
          this.resolveList.forEach(resolve => resolve())
          this.resolveList = []
        })
      }, 160)
    })
  }

  /**
   * Adds texts in sync mode.<br>
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static addSync (data: Record<string, string>): void {
    forEach(data, (text, key) => {
      if (
        isString(text) &&
        isFilled(text)
      ) {
        this.data[this.getName(key)] = text
      }
    })
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.<br>
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static async addNormalOrSync (data: Record<string, string>): Promise<void> {
    if (isFilled(data)) {
      if (Api.isLocalhost()) {
        this.addSync(data)
      } else {
        const names = Object.keys(data)

        if (names.length > 0) {
          await this.add(names)
        }
      }
    }
  }

  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  protected static getName (name: string): string {
    return `${Geo.getLocation()}-${name}`
  }

  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  protected static async getResponse (): Promise<Record<string, string>> {
    const path = Api.isLocalhost() ? this.urlLocalhost : this.url
    const data = (await Api.response<{ data: Record<string, string> }>({
      path,
      request: {
        list: this.cache
      }
    }))

    return data?.data ?? {}
  }

  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  protected static async make (): Promise<void> {
    const list = await this.getResponse()

    this.cache.forEach(name => {
      this.data[this.getName(name)] = list?.[name] ?? ''
    })

    this.cache = []
  }
}
