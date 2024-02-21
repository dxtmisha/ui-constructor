/**
 * In HTML documents, creates an element with the tag that is specified in the argument.<br>
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 * @param parentElement the DOM node's parent Element /<br>родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created /<br>строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element /<br>объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted /<br>элемент,
 * перед которым будет вставлен newElement
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T;
