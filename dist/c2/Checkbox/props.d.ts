import { type PropType } from 'vue';
import { CheckboxProps } from '../../constructors/Checkbox/props';
export declare const propsValues: {
    size: string[];
};
export type PropsToken = {
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    focus?: boolean;
    disabled?: boolean;
};
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<CheckboxProps, keyof PropsToken>;
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaults: Props;
export declare const propsInstruction: {
    required: BooleanConstructor;
    size: {
        type: PropType<"sm" | "md" | "lg" | undefined>;
        default: "sm" | "md" | "lg" | undefined;
    };
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    iconCheckbox: {
        type: StringConstructor;
        default: string | undefined;
    };
    iconIndeterminate: {
        type: StringConstructor;
        default: string | undefined;
    };
    value: BooleanConstructor;
    modelValue: BooleanConstructor;
    icon: PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    detail: PropType<Record<string, any> | undefined>;
    type: {
        type: PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    };
    inputmode: PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
    arrow: BooleanConstructor;
    step: (StringConstructor | NumberConstructor)[];
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    minlength: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    autocomplete: {
        type: PropType<AutoFill | undefined>;
        default: AutoFill | undefined;
    };
    input: PropType<Record<string, any> | undefined>;
    placeholder: StringConstructor;
    validationCode: PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': PropType<((value: any) => void) | undefined>;
    loading: PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
