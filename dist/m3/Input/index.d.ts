export declare const M3Input: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        name: StringConstructor;
        value: StringConstructor;
        valueVariant: StringConstructor;
        modelValue: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        required: BooleanConstructor;
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
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        disabled: BooleanConstructor;
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
        name: StringConstructor;
        value: StringConstructor;
        valueVariant: StringConstructor;
        modelValue: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        required: BooleanConstructor;
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
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        disabled: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        name: StringConstructor;
        value: StringConstructor;
        valueVariant: StringConstructor;
        modelValue: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        required: BooleanConstructor;
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
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        disabled: BooleanConstructor;
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
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    value: StringConstructor;
    valueVariant: StringConstructor;
    modelValue: StringConstructor;
    detail: import("vue").PropType<Record<string, any> | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Input/typesBasic").InputTypeName | undefined>;
        default: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    };
    inputmode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputMode | undefined>;
    spellcheck: BooleanConstructor;
    required: BooleanConstructor;
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
    helperMessage: StringConstructor;
    validationMessage: StringConstructor;
    validationCode: import("vue").PropType<import("../../constructors/Input/typesBasic").InputValidityCode | undefined>;
    on: ObjectConstructor;
    'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
    'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
    loading: import("vue").PropType<boolean | import("../../constructors/Progress/props").ProgressProps | undefined>;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
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
    readonly: boolean;
    disabled: boolean;
    spellcheck: boolean;
    autofocus: boolean;
    type: import("../../constructors/Input/typesBasic").InputTypeName | undefined;
    autocomplete: AutoFill | undefined;
    required: boolean;
    arrow: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Readonly<import("../../constructors/uses/ref/useLabel").UseLabelSlots> & import("../../constructors/uses/ref/useLabel").UseLabelSlots;
});
