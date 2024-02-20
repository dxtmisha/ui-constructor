import {
  isRef,
  type Ref,
  ref
} from 'vue'

import { type RefOrNormal } from '../../types/ref'

/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.<br>
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export function toRefItem<T> (item: RefOrNormal<T>): Ref<T> {
  return isRef(item) ? item : ref<T>(item) as Ref<T>
}
