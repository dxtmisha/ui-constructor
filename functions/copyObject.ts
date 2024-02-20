/**
 * Creates a copy of a simple object.<br>
 * Создает копию простого объекта.
 * @param value object for copying /<br>объект для копирования
 */
export function copyObject<T> (value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}
