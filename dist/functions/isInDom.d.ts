import { type ElementOrString, type ElementOrWindow } from '../types/basic';
/**
 * Checks if an element is still in the DOM tree.<br>
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;
