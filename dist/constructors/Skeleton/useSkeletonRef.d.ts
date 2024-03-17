import { type ComputedRef, type PropType } from 'vue';
import { type SkeletonClassesList } from './Skeleton';
import { type ConstrItem } from '../../types/constructor';
export type UseSkeletonSetup = {
    isSkeleton: ComputedRef<boolean>;
    classesSkeleton: SkeletonClassesList;
};
export type UseSkeletonProps = {
    skeleton?: boolean;
};
export declare const usePropsSkeleton: {
    skeleton: PropType<boolean | undefined>;
};
export type UseSkeletonItem = {
    isSkeleton: ComputedRef<boolean>;
    classSkeleton: ComputedRef<ConstrItem>;
    classesSkeleton: SkeletonClassesList;
    setup: UseSkeletonSetup;
};
/**
 * Returns the property for implementing the select.<br>
 * Возвращает свойство для внедрения селекта.
 * @param props input data /<br>входные данные
 * @param className class name /<br>название класса
 */
export declare const useSkeletonRef: (props: UseSkeletonProps, className?: string) => UseSkeletonItem;
