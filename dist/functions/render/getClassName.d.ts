import { ItemList } from '../../types/basic';
/**
 * Returns the name of the class from the property.<br>
 * Возвращает название класса из свойства.
 * @param props property of the component /<br>свойство компонента
 */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
