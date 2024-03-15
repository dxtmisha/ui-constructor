import { SkeletonProps } from '../../constructors/Skeleton/props';
export declare const propsValues: {};
export type PropsToken = {
    active?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<SkeletonProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    active: BooleanConstructor;
};
