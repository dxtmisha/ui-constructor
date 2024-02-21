import { LibraryItems } from './LibraryItems';
/**
 * A class for forming a link in the package.json file.<br>
 * Класс по формированию ссылки в файле package.json.
 */
export declare class LibraryPackage {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    protected make(): void;
}
