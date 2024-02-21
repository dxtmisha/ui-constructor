import { LibraryItems } from './LibraryItems';
/**
 * Class for creating a connection file for the split.<br>
 * Класс для создания файла подключения спила.
 */
export declare class LibraryStyle {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    /**
     * Creates a common style file.<br>
     * Создает общий файл стилей.
     */
    make(): this;
}
