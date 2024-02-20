import { getElement } from './getElement'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basic'

/**
 * Gets a list of attributes of an element.<br>
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function getAttributes<E extends ElementOrWindow> (
  element?: ElementOrString<E>
): Record<string, string | undefined> {
  const attributes: Record<string, string | undefined> = {}
  const item = getElement(element)

  if (item) {
    for (const attribute of item.attributes) {
      attributes[attribute.name] = (attribute?.value || attribute?.textContent) ?? undefined
    }
  }

  return attributes
}
