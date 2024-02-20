import {Undefined} from "../types/basic"

/**
 * Is the variable equal to null or undefined.<br>
 * Является ли переменная равной null или undefined.
 * @param value input value /<br>входное значение
 */
export function isNull<T>(value: T): value is Extract<T, Undefined> {
    return value === null || value === undefined
}
