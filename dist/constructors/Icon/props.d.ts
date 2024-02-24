import { type PropType } from 'vue';
import { type ImageProps } from '../Image/props';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type IconProps = {
    icon?: string | ImageProps;
    iconActive?: string | ImageProps;
    active?: boolean;
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    animationType?: string | 'type1' | 'type2';
    animationShow?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsIcon: IconProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsIcon: {
    turn: BooleanConstructor;
    disabled: BooleanConstructor;
    hide: BooleanConstructor;
    animationType: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    animationShow: BooleanConstructor;
    overlay: BooleanConstructor;
    dynamic: BooleanConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    high: BooleanConstructor;
    icon: PropType<string | ImageProps | undefined>;
    iconActive: PropType<string | ImageProps | undefined>;
    active: BooleanConstructor;
};
