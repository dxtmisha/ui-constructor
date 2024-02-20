import { isRef } from 'vue'
import { type RefOrNormal } from '../../types/ref'

/**
 * You return the values of the ref variable or the variable itself if it is not reactive.<br>
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value /<br>реактивная переменная или обычное значение
 */
export function getRef<T> (item: RefOrNormal<T>): T {
  return isRef(item) ? item.value : item
}
