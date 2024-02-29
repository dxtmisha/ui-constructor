import { forEach } from '../functions/forEach'
import { isDomRuntime } from '../functions/isDomRuntime'

import { Api } from './Api'

import { useEnv } from '../composables/useEnv'

export type IconsItem = string | Promise<string | any>

const ICONS_KEY = '__UI_ICON'
const ICONS_WAIT = 320
const ICONS_LOAD = '--LOAD--'

/**
 * Class for managing icons.<br>
 * Класс для управления иконками.
 */
export class Icons {
  protected static icons: Record<string, IconsItem> = {}
  protected static readonly url: string = useEnv('UI_PATH') ?? '/icons/'
  protected static readonly urlGlobal = `${Api.isLocalhost() ? '' : ''}${this.url}`

  static {
    if (isDomRuntime()) {
      if (!(ICONS_KEY in window)) {
        (window as any)[ICONS_KEY] = {}
      }

      this.icons = (window as any)[ICONS_KEY]
    }
  }

  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is (index: string): boolean {
    return index in this.icons || this.getName(index) in this.icons
  }

  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading <br>время ожидания загрузки картинки
   */
  static async get (
    index: string,
    url = '',
    wait: number = 1000 * 60 * 3
  ): Promise<string> {
    const icon = this.icons?.[this.getName(index)] ??
      this.icons?.[index] ??
      `${index.replace(/^@/, url ?? this.url)}.svg`

    if (typeof icon === 'string') {
      if (
        icon === ICONS_LOAD &&
        wait > 0
      ) {
        await this.wait()
        return this.get(index, url, wait - ICONS_WAIT)
      }

      return icon
    }

    return await icon
  }

  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList (): string[] {
    return forEach(this.icons, (_, name) => {
      return name.replace(/^@/, '')
    })
  }

  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add (index: string, file: IconsItem): void {
    this.icons[this.getName(index)] = file
  }

  /**
   * Adding custom icons in loading mode.<br>
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name /<br>название иконки
   */
  static addLoad (index: string): void {
    this.icons[this.getName(index)] = ICONS_LOAD
  }

  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal (index: string, file: string): void {
    this.icons[this.getName(index)] = `${this.urlGlobal}${file}`
  }

  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList (list: Record<string, IconsItem>): void {
    forEach(list, (file, index) => this.add(index, file))
  }

  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  protected static getName (index: string): string {
    return `@${index}`
  }

  protected static wait (): Promise<void> {
    return new Promise(resolve => setTimeout(() => resolve(), ICONS_WAIT))
  }
}
