import { type ObjectItem } from '../types/basic';
/**
 * Checks if the values of two objects are different.<br>
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values /<br>текущие значения
 * @param old old values /<br>старые значения
 */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;
