import { h, type VNode } from 'vue'
import { getIndexForRender } from '../render/getIndexForRender'

import { type ItemList } from '../../types/basic'
import { type RawChildren, type RawSlots } from '../../types/ref'

/**
 * Getting cached, immutable data.<br>
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param children sub-elements of the component /<br>под элементы компонента
 * @param index the name of the key /<br>названия ключа
 */
export function render<T extends ItemList> (
  name: string,
  props?: T,
  children?: RawChildren | RawSlots,
  index?: string
): VNode {
  const code = getIndexForRender(name, props, index)

  return h(name, { key: code, ...props }, children)
}
