/**
 * Checks if the values are arrays.<br>
 * Проверяет, являются ли значения массивами.
 * @param value input value /<br>входное значение
 */
export function isArray<T, R> (value: T): value is Extract<T, R[]> {
  return Array.isArray(value)
}
