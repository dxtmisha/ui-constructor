/**
 * Class for obtaining global data.<br>
 * Класс для получения глобальных данных.
 */
export declare class Global {
    /**
     * Returns the value by its name.<br>
     * Возвращает значение по его имени.
     * @param name property name /<br>название свойства
     */
    static get<R = any>(name: string): R;
    /**
     * Adds data, this method works only once.<br>
     * Добавляет данные, этот метод работает только 1 раз.
     * @param data global data /<br>глобальные данные
     */
    static add(data: Record<string, any>): void;
}
