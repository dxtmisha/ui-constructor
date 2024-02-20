import { type FunctionArgs } from '../types/basic'

/**
 * Converts the input value to one of the available types.<br>
 * Преобразует входное значение в один из доступных типов
 * @param value input value /<br>входное значение
 * @param isFunction if true, returns the global function by its name /<br>если true,
 * вернет глобальную функцию по ее имени
 */
export function transformation (value: any, isFunction = false): any {
  if (typeof value === 'string') {
    const item = value.trim()

    switch (item) {
      case 'undefined':
        return undefined
      case 'null':
        return null
      case 'true':
        return true
      case 'false':
        return false
      default:
        if (/^[{[]/.exec(item)) {
          try {
            return JSON.parse(item)
          } catch (e) {
          }
        } else if (/^[0-9]+\.[0-9.]+$/.exec(item)) {
          return parseFloat(item)
        } else if (/^[0-9]+$/.exec(item)) {
          return parseInt(item, 10)
        } else if (
          isFunction &&
          window &&
          item in window &&
          typeof window[item as any] === 'function'
        ) {
          return window[item as any] as any as FunctionArgs<any, any>
        }
    }
  }

  return value
}
