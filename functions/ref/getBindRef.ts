import {
  computed,
  type ComputedRef,
  type Ref
} from 'vue'

import { getBind } from '../render/getBind'
import { getRef } from './getRef'

import { type ItemList } from '../../types/basic'
import { type RefOrNormal } from '../../types/ref'

/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export function getBindRef<T, R extends ItemList> (
  value: Ref<T | R> | undefined,
  nameExtra: RefOrNormal<ItemList> | string = {},
  name = 'value'
): ComputedRef<R> {
  return computed(() => getBind<T, R>(value?.value, getRef(nameExtra), name))
}
