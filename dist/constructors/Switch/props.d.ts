import { type CheckboxProps } from '../Checkbox/props';
/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type SwitchProps = CheckboxProps & {
    required?: boolean;
    right?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSwitch: SwitchProps;
/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export declare const propsSwitch: {
    required: BooleanConstructor;
    right: BooleanConstructor;
    focus: BooleanConstructor;
    disabled: BooleanConstructor;
    value: BooleanConstructor;
    modelValue: BooleanConstructor;
    icon: import("vue").PropType<string | import("../Image/props").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    iconCheckbox: StringConstructor;
    iconIndeterminate: StringConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    valueVariant: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../Input/typesBasic").InputTypeName | undefined>;
        default: import("../Input/typesBasic").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../Input/typesBasic").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: import("vue").PropType<import("../Input/typesBasic").InputMatch | undefined>;
    arrow: BooleanConstructor;
    step: (StringConstructor | NumberConstructor)[];
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    minlength: (StringConstructor | NumberConstructor)[];
    maxlength: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<AutoFill | undefined>;
        default: AutoFill | undefined;
    };
    input: import("vue").PropType<Record<string, any> | undefined>;
    placeholder: StringConstructor;
    validationCode: import("vue").PropType<import("../Input/typesBasic").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    loading: import("vue").PropType<boolean | import("../Progress/props").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
};
