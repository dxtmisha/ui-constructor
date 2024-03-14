import { type ComputedRef } from 'vue';
import { Skeleton, type SkeletonClassesList } from './Skeleton';
import { type SkeletonProps } from './props';
/**
 * Class for managing the main component of the skeleton.<br>
 * Класс для управления главного компонента скелета.
 */
export declare class SkeletonRef {
    protected readonly skeleton: Skeleton;
    readonly isActive: ComputedRef;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param className class name /<br>название класса
     */
    constructor(props: SkeletonProps, className?: string);
    /**
     * Returns the list of available classes.<br>
     * Возвращает список доступных классов.
     */
    getClasses(): SkeletonClassesList;
}
