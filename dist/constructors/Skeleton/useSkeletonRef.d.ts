import { type ComputedRef, type PropType } from 'vue';
import { type SkeletonClassesList } from './Skeleton';
import { type ConstrItem } from '../../types/constructor';
export type UseSkeletonItem = {
    isSkeleton: ComputedRef<boolean>;
    classSkeleton: ComputedRef<ConstrItem>;
    classesList: SkeletonClassesList;
};
export type UseSkeletonSetup = {
    isSkeleton: ComputedRef<boolean>;
};
export type UseSkeletonProps = {
    skeleton?: boolean;
};
export declare const usePropsSkeleton: {
    skeleton: PropType<boolean | undefined>;
};
/**
 * Returns the property for implementing the select.<br>
 * Возвращает свойство для внедрения селекта.
 * @param props input data /<br>входные данные
 * @param name design names /<br>названия дизайна
 * @param className class name /<br>название класса
 */
export declare const useSkeletonRef: (props: UseSkeletonProps, name?: string, className?: string) => UseSkeletonItem;
