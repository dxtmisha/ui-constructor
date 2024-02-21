import { type ItemList } from '../../types/basic';
/**
 * A method for generating properties for a subcomponent.<br>
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties /<br>
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name /<br>дополнительный параметр или имя свойства
 * @param name property name /<br>имя свойства
 */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined, nameExtra?: ItemList | string, name?: string): R;
