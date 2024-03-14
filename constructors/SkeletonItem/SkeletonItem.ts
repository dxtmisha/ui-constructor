import { isArray } from '../../functions/isArray'
import { isNumber } from '../../functions/isNumber'
import { random } from '../../functions/random'
import { strFill } from '../../functions/strFill'
import { toNumber } from '../../functions/toNumber'

import { type SkeletonItemProps } from './props'

/**
 * Class for working with the select item.<br>
 * Класс для работы с элементом селекта.
 */
export class SkeletonItem {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: SkeletonItemProps
  ) {
  }

  /**
   * Returns the text.<br>
   * Возвращает текст.
   */
  getLabel (): string {
    if (this.props.label) {
      return this.props.label
    }

    return this.initLabel()
  }

  /**
   * Generates text.<br>
   * Генерирует текст.
   * @param min minimum word /<br>минимальное слово
   * @param max maximum word /<br>максимальное слово
   */
  protected getRandom (min: number, max: number): string {
    const rand = random(min, max)
    const label: string[] = []

    for (let i = 0; i < rand; i++) {
      label.push(strFill('#', random(2, 8)))
    }

    return label.join(' ')
  }

  /**
   * Generates text for output.<br>
   * Генерирует текст для вывода.
   */
  protected initLabel (): string {
    const length = this.props.length

    if (isArray(length)) {
      return this.getRandom(
        length?.[0] ?? 2,
        length?.[1] ?? 6
      )
    }

    if (isNumber(length)) {
      return this.getRandom(
        toNumber(length as number),
        toNumber(length as number)
      )
    }

    return String(this.props.length) ?? ''
  }
}
