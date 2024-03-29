import { toNumber } from '../../functions/toNumber'

import { DesignAsyncAbstract } from '../../classes/design/DesignAsyncAbstract'

import { type ProgressProps } from './props'
import { type ProgressEventLoad } from './typesBasic'
import {
  type ConstrClassObject,
  type ConstrStyles
} from '../../types/constructor'

/**
 * Base class for working with the loader.<br>
 * Базовый класс для работы с загрузчиком.
 */
export class Progress extends DesignAsyncAbstract<ProgressProps, ProgressEventLoad> {
  protected timeout?: any
  protected timeoutReject?: any

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param callback callback function /<br>функция обратного вызова
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    props: ProgressProps,
    callback: (event: ProgressEventLoad) => void
  ) {
    super(props, callback, [
      'value',
      'visible'
    ])
  }

  /**
   * Checks if there are any values.<br>
   * Проверяет, есть ли значения.
   */
  isValue (): this is { props: { value: number } } {
    return this.getValue() > 0
  }

  /**
   * Returns the tag type for the element.<br>
   * Возвращает тип тега для элемента.
   */
  getTag (): string {
    return this.props?.circular ? 'svg' : 'div'
  }

  /**
   * Returns values.<br>
   * Возвращает значения.
   */
  getValue (): number {
    return toNumber(this.props?.value ?? 0)
  }

  /**
   * Returns values in percentages.<br>
   * Возвращает значения в процентах.
   */
  getValueInPercent (): string | null {
    if (this.isValue()) {
      const value = this.getValue()
      const percent = (100 / this.getMax() * value)

      if (this.props?.circular) {
        return percent.toString()
      }

      return `${100 - percent}%`
    }

    return null
  }

  /**
   * Returns the maximum allowable value.<br>
   * Возвращает максимально допустимое значение.
   */
  getMax (): number {
    return toNumber(this.props?.max ?? 100)
  }

  /**
   * Returns the property for style.<br>
   * Возвращает свойство для стиля.
   */
  getStyles (): ConstrStyles {
    return {
      '--??-sys-value': this.getValueInPercent()
    }
  }

  /**
   * Monitors the animation event for hiding the element.<br>
   * Следит за событием анимации для скрытия элемента.
   * @param animationName A string containing the value of the animation-name that generated the animation /<br>
   * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
   */
  onAnimation ({ animationName }: AnimationEvent): void {
    if (animationName.match('-hidden')) {
      this.event.hide = false
      this.event.classes = this.initClasses()

      this.makeCallbackItem()
    }
  }

  /**
   * A function that is called each time the input values are changed.<br>
   * Функция, которая вызывается каждый раз, когда изменяются входные значения.
   */
  protected async initEvent (): Promise<void> {
    if (this.isChanged('visible')) {
      [
        this.event.hide,
        this.event.visible
      ] = await this.makeVisible()
    }

    if (this.isChanged('classes', [
      'value',
      'visible'
    ])) {
      this.event.classes = this.initClasses()
    }
  }

  /**
   * The mode is triggered when the visible property changes to change the output status of the element.<br>
   * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
   */
  protected makeVisible (): Promise<[boolean, boolean]> {
    return new Promise((resolve, reject) => {
      const visible = this.props?.visible
      const delay = toNumber(this.props?.delay ?? 0)
      const delayHide = toNumber(this.props?.delayHide ?? 0)

      clearTimeout(this.timeout)

      if (this.isValue()) {
        resolve([false, false])
      } else if (Boolean(this.event?.visible) !== visible) {
        if (visible && delay) {
          this.timeout = setTimeout(() => {
            clearTimeout(this.timeoutReject)
            resolve(this.initVisible())
          }, delay)
          this.timeoutReject = setTimeout(reject, delay + 1000)
        } else if (!visible && delayHide) {
          this.timeout = setTimeout(() => {
            resolve(this.initVisible())
          }, delayHide)
        } else {
          resolve(this.initVisible())
        }
      }
    })
  }

  /**
   * Updates dependent data when the visible property changes.<br>
   * Обновляет зависимые данные при изменении свойства visible.
   */
  protected initVisible (): [boolean, boolean] {
    const visible = this.props?.visible
    return [!visible, Boolean(visible)]
  }

  /**
   * Values for the class.<br>
   * Значения для класса.
   */
  protected initClasses (): ConstrClassObject {
    return {
      '??--hide': this.event.hide,
      '??--visible': this.event.visible,
      '??--value': this.isValue()
    }
  }
}
