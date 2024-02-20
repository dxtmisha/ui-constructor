/**
 * Checks if a value is an object.<br>
 * Проверяет, является ли значение объектом.
 * @param value input value /<br>входное значение
 */
export function isObject<T> (value: T): value is Extract<T, Record<any, any>> {
  return Boolean(value && typeof value === 'object')
}
