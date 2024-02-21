import { LibraryItems } from './LibraryItems';
/**
 * Class for working with the main files.<br>
 * Класс для работы с главными файлами.
 */
export declare class LibraryMain {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    /**
     * Export data for the main file.<br>
     * Экспортировать данные для главного файла.
     */
    make(): this;
}
