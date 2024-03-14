import { type PropType } from 'vue';
import { type UseSkeletonProps } from '../Skeleton/useSkeletonRef';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type SkeletonItemProps = UseSkeletonProps & {
    tag?: string | any;
    props?: Record<string, any>;
    label?: string;
    length?: string | number | [number, number];
    text?: boolean;
    background?: boolean;
    border?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSkeletonItem: SkeletonItemProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsSkeletonItem: {
    text: BooleanConstructor;
    background: BooleanConstructor;
    border: BooleanConstructor;
    tag: PropType<any>;
    props: PropType<Record<string, any> | undefined>;
    label: PropType<string | undefined>;
    length: PropType<string | number | [number, number] | undefined>;
    skeleton: PropType<boolean | undefined>;
};
