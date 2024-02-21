import { type ObjectItem } from '../types/basic';
/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.<br>
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object /<br>целевой объект
 * @param replacement the source object /<br>исходные объекты
 * @param indexStart index at which to start changing the array /<br>индекс, по которому начинает изменять массив
 */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;
