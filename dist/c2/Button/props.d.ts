import { type PropType } from 'vue';
import { ButtonProps } from '../../constructors/Button/props';
export declare const propsValues: {
    adaptive: string[];
    size: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
    adaptive?: 'icon';
    intent?: boolean;
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    ghost?: boolean;
    size?: 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    palette?: 'carmine' | 'iris' | 'redfish' | 'goldenrod' | 'asparagus' | 'slate' | 'gray' | 'alpha' | 'pistachio' | 'mint' | 'jade' | 'teal' | 'celestial' | 'indigo' | 'orchid' | 'cerise' | 'informative' | 'positive' | 'negative' | 'neutral';
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    selected: BooleanConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    adaptive: PropType<"icon" | undefined>;
    intent: BooleanConstructor;
    primary: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    secondary: BooleanConstructor;
    outline: BooleanConstructor;
    ghost: BooleanConstructor;
    size: {
        type: PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
        default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
    };
    palette: PropType<"indigo" | "teal" | "neutral" | "carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "celestial" | "orchid" | "cerise" | "informative" | "positive" | "negative" | undefined>;
    tag: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    iconTrailing: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    icon: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
