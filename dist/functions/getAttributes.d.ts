import { type ElementOrString, type ElementOrWindow } from '../types/basic';
/**
 * Gets a list of attributes of an element.<br>
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;
