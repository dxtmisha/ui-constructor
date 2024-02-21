import { LibraryItems } from './LibraryItems';
/**
 * A class for forming a file with all functions and classes.<br>
 * Класс формирования файла со всеми функциями и классами.
 */
export declare class LibraryIndex {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components /<br>объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    make(): void;
    /**
     * Returns an array of strings with the code of connected files.<br>
     * Возвращает массив строк с кодом подключенных файлов.
     * @param paths path to the icons folder /<br>путь к папке иконок
     * @param files list of files /<br>список файлов
     */
    private getExport;
    /**
     * Returns a list of functions.<br>
     * Возвращает список функций.
     */
    private getFunctions;
    /**
     * Returns a list of classes.<br>
     * Возвращает список классов.
     */
    private getClasses;
    /**
     * Returns a list of classes.<br>
     * Возвращает список классов.
     */
    private getComposables;
}
