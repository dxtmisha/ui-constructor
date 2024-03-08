import { PluginImportStyles } from './PluginImportStyles';
type PluginComponentItem = {
    name: string;
    design: string;
    code: string;
    path: string;
};
/**
 * Class for connecting components.<br>
 * Класс для подключения компонентов.
 */
export declare class PluginImport {
    protected readonly styles: PluginImportStyles;
    protected readonly id: string;
    protected readonly code: string;
    /**
     * Constructor
     * @param styles object for working with style connection /<br>объект для работы с подключением стилей
     * @param id file identification /<br>идентификация файла
     * @param code file content /<br>содержимое файла
     */
    constructor(styles: PluginImportStyles, id: string, code: string);
    /**
     * Initializes the data.<br>
     * Инициализирует данные.
     */
    init(): string;
    /**
     * Checks if the file is suitable for conversion.<br>
     * Проверяет, подходит ли файл для преобразования.
     */
    protected is(): boolean;
    /**
     * Checks if the component was connected.<br>
     * Проверяет, был ли подключен компонент.
     * @param item data on the component /<br>данные по компоненту
     */
    protected isImport(item: PluginComponentItem): boolean;
    /**
     * Checks if there is a script element.<br>
     * Проверяет, есть ли элемент script.
     */
    protected isScript(): boolean;
    /**
     * Finds the list of components and returns them.<br>
     * Находит список компонентов и возвращает их.
     */
    protected getList(): RegExpMatchArray | null;
    /**
     * Returns the file code, adding a script if it’s not there.<br>
     * Возвращает код файла, добавляя script, если его нет.
     */
    protected getCode(): string;
    /**
     * Search for the component in the list.<br>
     * Искать компонент в списке.
     * @param name component name /<br>название компонента
     */
    protected findComponent(name: string): PluginComponentItem | undefined;
    /**
     * Component connection.<br>
     * Подключение компонента.
     * @param code file content /<br>содержимое файла
     * @param item data on the component /<br>данные по компоненту
     */
    protected importComponent(code: string, item: PluginComponentItem): string;
    /**
     * Checks if it is necessary to import files with styles.<br>
     * Проверяет, надо ли импортировать файлы со стилями.
     * @param code file content /<br>содержимое файла
     * @param item data on the component /<br>данные по компоненту
     */
    protected importStyle(code: string, item: PluginComponentItem): string;
}
export {};
