import { type ObjectItem, type ObjectOrArray } from '../types/basic';
/**
 * Merge one or more arrays recursively.<br>
 * Рекурсивное слияние одного или более массивов.
 * @param array the array in which elements are replaced /<br>массив, элементы которого будут заменены
 * @param replacement arrays from which elements will be extracted /<br>массивы, из которых будут браться элементы для замены
 * @param isMerge merge one or more arrays /<br>сливает один или большее количество массивов
 */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;
