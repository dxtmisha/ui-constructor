import { NumberOrString } from '../types/basic';
/**
 * The method parses a string argument and returns a floating point number.<br>
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value /<br>входное значение
 */
export declare function toNumber<T extends NumberOrString>(value: T): (T & number) | number;
