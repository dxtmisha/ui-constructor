import { LibraryItems } from './LibraryItems';
export declare class LibraryTypes {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    make(): this;
    /**
     * Initializes the list of available components.<br>
     * Инициализирует список доступных компонентов.
     */
    protected initComponents(): string[];
    protected initComponentsModule(): string[];
    protected initLibrary(): string[];
}
