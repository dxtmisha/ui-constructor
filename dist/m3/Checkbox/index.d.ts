export declare const M3Checkbox: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        required: BooleanConstructor;
        right: BooleanConstructor;
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
        icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        value: import("vue").ShallowRef<string | undefined>;
        checkValidity: () => boolean;
        validationMessage: import("vue").ShallowRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => void;
        input: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => void;
        "update:value": (value: any) => void;
        "update:modelValue": (value: any) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        required: BooleanConstructor;
        right: BooleanConstructor;
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
        icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        right: boolean;
        focus: boolean;
        value: boolean;
        indeterminate: boolean;
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
        modelValue: boolean;
        iconCheckbox: string;
        iconIndeterminate: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        required: BooleanConstructor;
        right: BooleanConstructor;
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
        icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        value: import("vue").ShallowRef<string | undefined>;
        checkValidity: () => boolean;
        validationMessage: import("vue").ShallowRef<string>;
    }, {}, {}, {}, {
        right: boolean;
        focus: boolean;
        value: boolean;
        indeterminate: boolean;
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
        modelValue: boolean;
        iconCheckbox: string;
        iconIndeterminate: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    required: BooleanConstructor;
    right: BooleanConstructor;
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
    icon: import("vue").PropType<string | import("../../constructors/Image/props").ImageProps | undefined>;
    indeterminate: BooleanConstructor;
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    name: StringConstructor;
    valueVariant: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    pattern: StringConstructor;
    match: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMatch | undefined>;
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
    validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    label: (StringConstructor | NumberConstructor)[];
}>> & {
    onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
    onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
    "onUpdate:value"?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    value: import("vue").ShallowRef<string | undefined>;
    checkValidity: () => boolean;
    validationMessage: import("vue").ShallowRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => void;
    input: (event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => void;
    "update:value": (value: any) => void;
    "update:modelValue": (value: any) => void;
}, string, {
    right: boolean;
    focus: boolean;
    value: boolean;
    indeterminate: boolean;
    readonly: boolean;
    disabled: boolean;
    spellcheck: boolean;
    autofocus: boolean;
    type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    autocomplete: AutoFill | undefined;
    required: boolean;
    arrow: boolean;
    modelValue: boolean;
    iconCheckbox: string;
    iconIndeterminate: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Readonly<import("../../constructors/uses/ref/useLabel").UseLabelSlots> & import("../../constructors/uses/ref/useLabel").UseLabelSlots;
});
