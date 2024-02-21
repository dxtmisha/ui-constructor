import { LibraryItems } from './LibraryItems';
export declare class LibraryPlugin {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    make(): void;
}
