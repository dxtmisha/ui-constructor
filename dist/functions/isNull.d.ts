import { type Undefined } from '../types/basic';
/**
 * Is the variable equal to null or undefined.<br>
 * Является ли переменная равной null или undefined.
 * @param value input value /<br>входное значение
 */
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;
