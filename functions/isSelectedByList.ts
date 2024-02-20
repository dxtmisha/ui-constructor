import { isSelected } from './isSelected'

/**
 * Testing isSelected property for the entire list of values.<br>
 * Проверка свойства isSelected для всех значений списка.
 * @param values list of values for comparison /<br>список значений для сравнения
 * @param selected array or string for comparison /<br>массив или строка для сравнения
 */
export function isSelectedByList<T> (
  values: T | T[],
  selected: T | T[]
): boolean {
  if (Array.isArray(values)) {
    return values.every(item => isSelected(item, selected))
  }

  return isSelected(values, selected)
}
