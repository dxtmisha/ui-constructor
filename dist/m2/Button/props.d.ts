import { type PropType } from 'vue';
import { ButtonProps } from '../../constructors/Button/props';
export declare const propsValues: {
    adaptive: string[];
    height: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    loading?: boolean;
    readonly?: boolean;
    adaptive?: 'icon' | 'sm' | 'md';
    height?: 'sm' | 'md' | 'lg';
    contained?: boolean;
    outlined?: boolean;
    text?: boolean;
    palette?: 'red' | 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'green' | 'lightGreen' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deepOrange' | 'brown' | 'grey' | 'greyBlue' | 'white' | 'black' | 'blackLight';
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
    adaptive: PropType<"icon" | "sm" | "md" | undefined>;
    height: {
        type: PropType<"sm" | "md" | "lg" | undefined>;
        default: "sm" | "md" | "lg" | undefined;
    };
    contained: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    outlined: BooleanConstructor;
    text: BooleanConstructor;
    palette: PropType<"red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "greyBlue" | "white" | "black" | "blackLight" | undefined>;
    tag: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    to: StringConstructor;
    value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    detail: ObjectConstructor[];
    progress: PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    iconTrailing: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    icon: PropType<string | import("../../constructors/Icon/props").IconProps | undefined>;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
