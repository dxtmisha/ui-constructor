import { type ElementOrString, type ElementOrWindow } from '../types/basic';
/**
 * Modifies the value of an element identified by its key.<br>
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element /<br>проверяемый элемент
 * @param index index at which we retrieve values /<br>индекс, по которому получаем значения
 * @param value new value /<br>новое значение
 */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;
