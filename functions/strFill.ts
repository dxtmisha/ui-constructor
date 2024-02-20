import { arrFill } from './arrFill'

/**
 * The method creates a string of length count, consisting of the characters value.<br>
 * Метод создает строку длиной count, состоящую из символов value.
 * @param value character for filling /<br>символ для заполнения
 * @param count length of the string /<br>длина строки
 */
export function strFill (value: string, count: number): string {
  return arrFill(value, count).join('')
}
