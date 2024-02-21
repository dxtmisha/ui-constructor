import { type ElementOrString, type ElementOrWindow } from '../types/basic';
/**
 * Returns window or element.<br>
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;
