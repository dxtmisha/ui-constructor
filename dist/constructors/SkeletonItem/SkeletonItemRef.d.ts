import { type ComputedRef } from 'vue';
import { SkeletonItem } from './SkeletonItem';
import { type UseSkeletonItem } from '../Skeleton/useSkeletonRef';
import { type SkeletonClassesList } from '../Skeleton/Skeleton';
import { type SkeletonItemProps } from './props';
/**
 * Class for working with the select item (Ref).<br>
 * Класс для работы с элементом селекта (Ref).
 */
export declare class SkeletonItemRef {
    protected readonly item: SkeletonItem;
    protected readonly skeleton: UseSkeletonItem;
    readonly label: ComputedRef<string>;
    readonly isSkeleton: ComputedRef<boolean>;
    readonly classesList: SkeletonClassesList;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param name design names /<br>названия дизайна
     * @param className class name /<br>название класса
     */
    constructor(props: SkeletonItemProps, name?: string, className?: string);
}
