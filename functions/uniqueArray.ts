/**
 * Removes duplicate entries in an array.<br>
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value /<br>входное значение
 */
export function uniqueArray<T> (value: T[]): T[] {
  return [...new Set(value)]
}
