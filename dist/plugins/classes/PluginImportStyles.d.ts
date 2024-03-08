/**
 * Class for working with style connection.<br>
 * Класс для работы с подключением стилей.
 */
export declare class PluginImportStyles {
    protected readonly items: string[];
    /**
     * Checks if the styles are already connected.<br>
     * Проверяет, если уже подключены стили.
     * @param design design name /<br>название дизайна
     */
    is(design: string): boolean;
    /**
     * Returns the style connection code.<br>
     * Возвращает код подключения стиля.
     * @param design design name /<br>название дизайна
     */
    getCode(design: string): string;
    /**
     * Adds a design and returns the design connection code.<br>
     * Добавляет дизайн и возвращает код подключения дизайна.
     * @param design design name /<br>название дизайна
     */
    getCodeAndPush(design: string): string;
    /**
     * Adding a design to the list of connected ones.<br>
     * Добавление дизайна в список подключенных.
     * @param design design name /<br>название дизайна
     */
    push(design: string): this;
}
