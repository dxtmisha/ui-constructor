/**
 * Conversion to array.<br>
 * Преобразование в массив.
 * @param value input value /<br>входное значение
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];
