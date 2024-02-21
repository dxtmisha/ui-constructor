import { LibraryItems } from './LibraryItems';
/**
 * Class for creating a file with a list of components.<br>
 * Класс для создания файла со списком компонентов.
 */
export declare class LibraryList {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    /**
     * Creates files with a list of components.<br>
     * Создает файлы со списком компонентов.
     */
    make(): this;
    /**
     * Creates a file with a list of components for the selected design.<br>
     * Создает файл со списком компонентов для выбранного дизайна.
     */
    protected makeComponents(): this;
}
