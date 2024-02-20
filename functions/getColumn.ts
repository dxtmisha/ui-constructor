import { forEach } from './forEach'
import { type ObjectOrArray } from '../types/basic'

/**
 * Returns an array of values for a specific column in the input array.<br>
 * Возвращает массив значений для определенного столбца входного массива.
 * @param array a one array or an array of objects from which to pull a column of values from /<br>
 * многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param column the column of values to return /<br>ключ столбца, значения которого нужно вернуть
 */
export function getColumn<T, K extends keyof T> (
  array: ObjectOrArray<T>,
  column: K
): (T[K] | undefined)[] {
  return forEach<T, T[K] | undefined>(array, item => item?.[column])
}
