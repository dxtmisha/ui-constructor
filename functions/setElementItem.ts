import { executeFunction } from './executeFunction'
import { forEach } from './forEach'
import { getElementItem } from './getElementItem'
import { getElement } from './getElement'
import { isObject } from './isObject'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basic'

/**
 * Modifies the value of an element identified by its key.<br>
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param value new value /<br>новое значение
 */
export function setElementItem<
  E extends ElementOrWindow,
  K extends keyof E,
  V extends E[K] = E[K]
> (
  element: ElementOrString<E>,
  index: K,
  value: V | Record<string, V>
): E | undefined {
  const item = getElement(element)

  if (item) {
    const data: any = getElementItem(item, index)

    if (
      isObject(data) &&
      isObject(value)
    ) {
      forEach(value as any, (item, key) => {
        data[key] = executeFunction(item)
      })
    } else {
      const newValue = executeFunction(value)

      if (
        !(index in item) &&
        typeof newValue === 'string'
      ) {
        item.setAttribute(index.toString(), newValue)
      } else {
        (item as any)[index] = executeFunction(value)
      }
    }
  }

  return item
}
