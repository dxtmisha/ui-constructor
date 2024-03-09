/**
 * Class for adding an icon.<br>
 * Класс для добавления иконки.
 */
export declare class PluginMedia {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly icon?: boolean | undefined;
    protected readonly flag?: boolean | undefined;
    /**
     * Constructor
     * @param id file identification /<br>идентификация файла
     * @param code file content /<br>содержимое файла
     * @param icon should the icons be enabled /<br>включить ли иконки
     * @param flag should the flag be enabled /<br>включить ли флаг
     */
    constructor(id: string, code: string, icon?: boolean | undefined, flag?: boolean | undefined);
    /**
     * Initialization of data transformation.<br>
     * Инициализация преобразования данных.
     */
    init(): string;
    /**
     * Checks if the conditions are suitable for working with this file.<br>
     * Проверяет, подходят ли условия для работы с этим файлом.
     */
    protected is(): boolean;
    /**
     * Returns the name of the flag function.<br>
     * Возвращает название функции флага.
     */
    protected getNameFlag(): string;
    /**
     * Returns the name of the icon function.<br>
     * Возвращает название функции иконки.
     */
    protected getNameIcon(): string;
    /**
     * Returns data for connecting data.<br>
     * Возвращает данные для подключения данных.
     */
    protected getImports(): string[];
}
