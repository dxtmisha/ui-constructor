import { forEach } from './forEach'
import { type ObjectItem } from '../types/basic'

/**
 * Checks if the values of two objects are different.<br>
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values /<br>текущие значения
 * @param old old values /<br>старые значения
 */
export function isDifferent<T> (
  value: ObjectItem<T>,
  old: ObjectItem<T>
): boolean {
  let different = Object.keys(value).length !== Object.keys(old).length

  if (!different) {
    forEach(value, (item, key) => {
      if (item !== old?.[key]) {
        different = true
      }
    })
  }

  return different
}
