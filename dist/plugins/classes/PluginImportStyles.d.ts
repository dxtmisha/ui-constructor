/**
 * Class for working with style connection.<br>
 * Класс для работы с подключением стилей.
 */
export declare class PluginImportStyles {
    protected readonly items: Record<string, {
        id: string;
        component: string;
    }>;
    /**
     * Adds a design and returns the design connection code.<br>
     * Добавляет дизайн и возвращает код подключения дизайна.
     * @param design design name /<br>название дизайна
     * @param id file identification /<br>идентификация файла
     * @param component component name /<br>название компонента
     */
    get(design: string, id: string, component: string): string | undefined;
    /**
     * Checks if the styles are already connected.<br>
     * Проверяет, если уже подключены стили.
     * @param design design name /<br>название дизайна
     * @param id file identification /<br>идентификация файла
     * @param component component name /<br>название компонента
     */
    protected isNone(design: string, id: string, component: string): boolean;
    /**
     * Returns the style connection code.<br>
     * Возвращает код подключения стиля.
     * @param design design name /<br>название дизайна
     */
    protected getCode(design: string): string;
    /**
     * Adding a design to the list of connected ones.<br>
     * Добавление дизайна в список подключенных.
     * @param design design name /<br>название дизайна
     * @param id file identification /<br>идентификация файла
     * @param component component name /<br>название компонента
     */
    protected push(design: string, id: string, component: string): this;
}
