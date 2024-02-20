import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Conversion of a value to a string.<br>
 * Преобразование значения в строку.
 * @param value values for conversion /<br>значения для преобразования
 */
export function anyToString<V> (value: V): string {
  if (isString(value)) {
    return value
  }

  if (isObject(value)) {
    return JSON.stringify(value)
  }

  return value?.toString() ?? ''
}
