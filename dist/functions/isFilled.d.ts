import { type EmptyValue } from '../types/basic';
/**
 * Checks if the field is filled.<br>
 * Проверяет, заполнено ли поле.
 * @param value input value /<br>входное значение
 */
export declare function isFilled<T>(value: T): value is Exclude<T, EmptyValue>;
