import { getElementId } from '../../functions/getElementId'

import { WindowPersistent } from './WindowPersistent'

import { type ConstrClassObject } from '../../types/constructor'
import { WindowStatusControlItem, WindowStatusItem } from './typesBasic'

/**
 * Class for working with class names.<br>
 * Класс для работы с названиями классов.
 */
export class WindowClasses {
  /**
   * Identification of the current window. Used to search for the current component and its control.<br>
   * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
   */
  protected readonly id = `window--${getElementId()}`

  /**
   * Constructor
   * @param persistent object for working with the animation before turning off the window /<br>объект для работы с анимацией перед выключением окна
   * @param className class name /<br>название класса
   * @param classControl control element class name /<br>название класса элемента управления
   * @param classBody class name for the body /<br>название класса для тела
   * @param classBodyContext class name for the context body /<br>название класса для тела контекста
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly persistent: WindowPersistent,
    protected readonly className: string = 'is-window',
    protected readonly classControl: string = 'is-control',
    protected readonly classBody: string = 'is-body',
    protected readonly classBodyContext: string = 'is-body-context'
  ) {
  }

  /**
   * Проверяет, является ли выбранный элемент окном
   * @param target selected item /<br>выбранный элемент
   */
  isWindow (target?: HTMLElement): boolean {
    return Boolean(
      target &&
      target.classList.contains(this.getClassMain())
    )
  }

  /**
   * Returns the identifier of the current window.<br>
   * Возвращает идентификатор текущего окна.
   */
  getId (): string {
    return this.id
  }

  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain (): string {
    return this.className
  }

  /**
   * Returns the class name for control.<br>
   * Возвращает название класса для контроля.
   */
  getClassControl (): string {
    return this.classControl
  }

  /**
   * Returns the class name for control along with the ID.<br>
   * Возвращает название класса для управления вместе с ID.
   */
  getClassControlAndId (): string {
    return `${this.classControl} ${this.getId()}`
  }

  /**
   * Returns the full name of the class for the status.<br>
   * Возвращает полное название класса для статуса.
   * @param status названия статуса
   */
  getClassStatus (status: WindowStatusItem): string {
    return `${this.className}[data-status="${status}"]`
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses (): ConstrClassObject {
    return {
      [this.getId()]: true,
      '??--persistent': this.persistent.get()
    }
  }

  /**
   * Returns the class selector for control.<br>
   * Возвращает селектор класса для управления.
   */
  getSelectorControl (): string {
    return `.${this.classControl}.${this.getId()}`
  }

  /**
   * Returns the name of the class for status control.<br>
   * Возвращает название класса для контроля статуса.
   * @param name the name of the class for control /<br>название класса для контроля
   */
  getSelectorStatusControl (name: WindowStatusControlItem): string {
    return `.${this.getClassMain()}--${name}`
  }

  /**
   * Search and return the window element at the selected item.<br>
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item /<br>выбранный элемент
   */
  findMain<T extends HTMLElement> (target: HTMLElement): T | undefined {
    return target?.closest<T>(`.${this.className}`) ?? undefined
  }

  /**
   * Search and return of the control element of the current component.<br>
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl (): HTMLElement | undefined {
    return document.querySelector<HTMLElement>(`.${this.classControl}.${this.id}`) || undefined
  }

  /**
   * Find the control at the selected window.<br>
   * Найди элемент управления у выбранного окна.
   * @param element window element /<br>элемент окна
   */
  findControlByElement (element?: HTMLElement): HTMLElement | undefined {
    if (element) {
      return document.querySelector<HTMLElement>(`.${this.getClassControl()}.${element.dataset?.window}`) ?? undefined
    }

    return undefined
  }

  /**
   * Search and return of the window body element for the current component.<br>
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody (): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.classBody}`) || undefined
  }

  /**
   * Search and return of the context body element of the window for the current component.<br>
   * Поиск и возврат элемента контекста тела окна для текущего компонента.
   */
  findBodyContext (): HTMLDivElement | undefined {
    return document.querySelector<HTMLDivElement>(`.${this.className}.${this.id} .${this.classBodyContext}`) || undefined
  }
}
