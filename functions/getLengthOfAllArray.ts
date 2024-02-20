import { forEach } from './forEach'
import { type ObjectOrArray } from '../types/basic'

/**
 * Returns the length of all elements in an array.<br>
 * Возвращает длину всех элементов в виде массива.
 * @param value input value /<br>входное значение
 */
export function getLengthOfAllArray (value: ObjectOrArray<string>): number[] {
  return forEach<string, number>(value, item => item.length)
}
