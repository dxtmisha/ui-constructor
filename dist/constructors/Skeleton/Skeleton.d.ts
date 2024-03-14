import { type SkeletonProps } from './props';
export type SkeletonClassesList = {
    classText: string;
    classBackground: string;
    classBorder: string;
};
/**
 * Class for working with the skeleton.<br>
 * Класс для работы со скелетом.
 */
export declare class Skeleton {
    protected readonly props: SkeletonProps;
    protected readonly className: string;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param className class name /<br>название класса
     */
    constructor(props: SkeletonProps, className?: string);
    /**
     * Checks if the loading mode is enabled.<br>
     * Проверяет, включен ли режим загрузки.
     */
    isActive(): boolean;
    /**
     * Returns the list of available classes.<br>
     * Возвращает список доступных классов для текуший элемента.
     */
    getClasses(): SkeletonClassesList;
    /**
     * Returns the list of available classes.<br>
     * Возвращает список доступных классов.
     */
    static getClassesList(className: string): SkeletonClassesList;
}
