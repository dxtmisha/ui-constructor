import { type SkeletonItemProps } from './props';
/**
 * Class for working with the select item.<br>
 * Класс для работы с элементом селекта.
 */
export declare class SkeletonItem {
    protected readonly props: SkeletonItemProps;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     */
    constructor(props: SkeletonItemProps);
    /**
     * Returns the text.<br>
     * Возвращает текст.
     */
    getLabel(): string;
    /**
     * Generates text.<br>
     * Генерирует текст.
     * @param min minimum word /<br>минимальное слово
     * @param max maximum word /<br>максимальное слово
     */
    protected getRandom(min: number, max: number): string;
    /**
     * Generates text for output.<br>
     * Генерирует текст для вывода.
     */
    protected initLabel(): string;
}
