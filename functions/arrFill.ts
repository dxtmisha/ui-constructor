/**
 * The method creates an array of "count" elements with values equal to "value".<br>
 * Метод создает массив из "count" элементов со значениями равными "value".
 * @param value value to fill the array with /<br>значение, заполняющее массив
 * @param count the number of elements in that array /<br>число элементов этого массива
 */
export function arrFill<T> (value: T, count: number): T[] {
  return Array(count).fill(value) as T[]
}
