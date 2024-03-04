/**
 * Returns a string in the form of key-value.<br>
 * Возвращает строку в виде ключ-значение.
 * @param request data for conversion /<br>данные для преобразования
 * @param sign delimiter sign of key and value /<br>знак разделения ключа и значения
 * @param separator variable delimiter sign /<br>знак разделения переменных
 */
export declare function getRequestString(request: Record<string, any>, sign?: string, separator?: string): string;
