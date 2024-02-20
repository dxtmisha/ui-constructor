import { type FunctionArgs } from '../types/basic'

/**
 * Checks if the function is a callback function.<br>
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked /<br>проверяемое значение
 */
export function isFunction<T> (callback: T): callback is Extract<T, FunctionArgs<any, any>> {
  return callback instanceof Function || typeof callback === 'function'
}
