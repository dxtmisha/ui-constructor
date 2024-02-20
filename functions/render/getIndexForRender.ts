import { getClassName } from './getClassName'
import { type ItemList } from '../../types/basic'

/**
 * Returns or generates a new element.<br>
 * Возвращает или генерирует новый элемент.
 * @param name name of the component /<br>названия компонента
 * @param props property of the component /<br>свойство компонента
 * @param index the name of the key /<br>названия ключа
 */
export function getIndexForRender<T extends ItemList> (
  name: string,
  props?: T,
  index?: string
): string {
  const className = getClassName(props)

  if (index && className) {
    return `${index}.${className}`
  }

  if (index) {
    return index
  }

  if (className) {
    return className
  }

  return name
}
