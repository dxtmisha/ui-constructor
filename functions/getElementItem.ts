import { getElement } from './getElement'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basic'

/**
 * Returns the value of an element by its key.<br>
 * Возвращает значение элемента по его ключу.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param defaultValue returns this parameter if the value is missing /<br>возвращает этот параметр,
 * если значение отсутствует
 */
export function getElementItem<
  T extends ElementOrWindow,
  K extends keyof T,
  D
> (
  element: ElementOrString<T>,
  index: K | string,
  defaultValue?: D
): T[K] | D | undefined {
  return getElement(element)?.[index as K] ?? defaultValue
}
