/**
 * Checks if the value is in the current array.<br>
 * Проверяет, есть ли значение в текущем массиве.
 * @param array array for checking /<br>массив для проверки
 * @param value value to be checked /<br>проверяемое значение
 */
export function inArray<T> (array: T[], value: T): boolean {
  return array.indexOf(value) !== -1
}
