import { type PropType } from 'vue';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type ProgressProps = {
    value?: number | string;
    max?: number | string;
    visible?: boolean;
    delay?: number | string;
    delayHide?: number | string;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: string | 'type1' | 'type2' | 'type3';
    position?: string | 'top' | 'bottom';
    dense?: boolean;
    inverse?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsProgress: ProgressProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsProgress: {
    linear: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    circular: BooleanConstructor;
    indeterminate: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    position: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    dense: BooleanConstructor;
    inverse: BooleanConstructor;
    value: (StringConstructor | NumberConstructor)[];
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
    visible: BooleanConstructor;
    delay: {
        type: (StringConstructor | NumberConstructor)[];
        default: string | number | undefined;
    };
    delayHide: (StringConstructor | NumberConstructor)[];
};
