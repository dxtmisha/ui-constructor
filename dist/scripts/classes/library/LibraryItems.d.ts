import { type ComponentsData, type ComponentsList } from '../../types/components';
/**
 * Class for working with the list of components.<br>
 * Класс для работы со списком компонентов.
 */
export declare class LibraryItems {
    protected readonly items: ComponentsList;
    /**
     * Constructor
     */
    constructor();
    /**
     * Returns the list of components divided by design groups.<br>
     * Возвращает список компонентов, разделенных по группам дизайна.
     */
    get(): ComponentsList;
    /**
     * Returns the list of components as an array.<br>
     * Возвращает список компонентов в виде массива.
     */
    getComponentList(): ComponentsData[];
    /**
     * Returns the name of the global property.<br>
     * Возвращает название глобального свойства.
     */
    getGlobalName(): string;
    /**
     * Returns the name of the main design.<br>
     * Возвращает название главного дизайна.
     */
    getDesignMain(): string;
    /**
     * Returns a list of design names.<br>
     * Возвращает список названий дизайнов.
     */
    getDesigns(): string[];
    /**
     * Writes data in the file.<br>
     * Записывает данные в файле.
     * @param name file name /<br>название файла
     * @param data values for writing /<br>значения для записи
     * @param extension file extension by default is json /<br>расширение файла по умолчанию - json
     */
    write(name: string, data: string[], extension?: string): void;
    /**
     * Returns a list of components.<br>
     * Возвращает список компонентов.
     * @param design design names /<br>названия дизайна
     */
    protected getComponents(design: string): ComponentsData[];
    /**
     * Initializes data about the component.<br>
     * Инициализирует данные о компоненте.
     */
    protected initItems(): ComponentsList;
}
