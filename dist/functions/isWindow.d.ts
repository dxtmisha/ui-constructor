/**
 * Checks if object is Window.<br>
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element /<br>селекторов для сопоставления или Element
 */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;
