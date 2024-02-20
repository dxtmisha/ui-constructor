import { isWindow } from './isWindow'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basic'

/**
 * Returns the first Element in the document that matches the specified selector or the element.<br>
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export function getElement<
  E extends ElementOrWindow,
  R extends Exclude<E, Window>
> (
  element?: ElementOrString<E>
): R | undefined {
  if (isWindow(element)) {
    return document.body as R
  }

  if (typeof element === 'string') {
    try {
      return document.querySelector<R>(element) ?? undefined
    } catch {
      return undefined
    }
  }

  return element as undefined as (R | undefined)
}
