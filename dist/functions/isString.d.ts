/**
 * Checks if the value is of type string.<br>
 * Проверяет, является ли значение типом строки.
 * @param value input value /<br>входное значение
 */
export declare function isString<T>(value: T): value is Extract<T, string>;
