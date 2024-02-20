import { getLengthOfAllArray } from './getLengthOfAllArray'
import { type ObjectOrArray } from '../types/basic'

/**
 * Searches for the longest string in the array and returns its length.<br>
 * Ищет самую длинную строку в массиве и возвращает её длину.
 * @param data array with data /<br>массив с данными
 */
export function getMaxLengthAllArray (data: ObjectOrArray<string>): number {
  return Math.max(...getLengthOfAllArray(data))
}
