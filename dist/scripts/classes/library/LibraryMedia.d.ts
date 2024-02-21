import { LibraryItems } from './LibraryItems';
/**
 * Class for generating a file to connect flags.<br>
 * Класс для формирования файла для подключения флагов.
 */
export declare class LibraryMedia {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    make(): void;
    initIcon(): string[];
}
