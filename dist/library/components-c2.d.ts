import { type App } from 'vue';
export declare const components: {
    C2Button: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
                default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
            };
            outline: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
                default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"indigo" | "teal" | "carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "celestial" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            iconTrailing: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
                default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
            };
            outline: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
                default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"indigo" | "teal" | "carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "celestial" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            iconTrailing: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {
            size: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            primary: boolean;
            secondary: boolean;
            outline: boolean;
            intent: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
            ghost: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
                default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
            };
            outline: BooleanConstructor;
            intent: {
                type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
                default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
            };
            primary: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            secondary: BooleanConstructor;
            ghost: BooleanConstructor;
            palette: import("vue").PropType<"indigo" | "teal" | "carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "celestial" | "orchid" | "cerise" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            iconTrailing: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            icon: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
            iconTurn: BooleanConstructor;
            iconHide: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onClick?: ((event: MouseEvent, value: {
                type: string;
                value: any;
                detail: Record<string, any> | undefined;
            }) => any) | undefined;
        }, {}, {}, {}, {}, {
            size: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            primary: boolean;
            secondary: boolean;
            outline: boolean;
            intent: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
            ghost: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        focus: BooleanConstructor;
        disabled: BooleanConstructor;
        selected: BooleanConstructor;
        loading: BooleanConstructor;
        readonly: BooleanConstructor;
        adaptive: import("vue").PropType<"icon" | undefined>;
        size: {
            type: import("vue").PropType<"sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined>;
            default: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
        };
        outline: BooleanConstructor;
        intent: {
            type: import("vue").PropType<"default" | "neutral" | "positive" | "informative" | "negative" | undefined>;
            default: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
        };
        primary: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        secondary: BooleanConstructor;
        ghost: BooleanConstructor;
        palette: import("vue").PropType<"indigo" | "teal" | "carmine" | "iris" | "redfish" | "goldenrod" | "asparagus" | "slate" | "gray" | "alpha" | "pistachio" | "mint" | "jade" | "celestial" | "orchid" | "cerise" | undefined>;
        tag: {
            type: import("vue").PropType<string | undefined>;
            default: string | undefined;
        };
        to: StringConstructor;
        value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        detail: ObjectConstructor[];
        iconTrailing: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
        icon: import("vue").PropType<string | import("../constructors/Icon/props").IconProps | undefined>;
        iconTurn: BooleanConstructor;
        iconHide: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onClick?: ((event: MouseEvent, value: {
            type: string;
            value: any;
            detail: Record<string, any> | undefined;
        }) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent, value: {
            type: string;
            value: any;
            detail: Record<string, any> | undefined;
        }) => void;
    }, string, {
        size: "sm" | "x" | "md" | "lg" | "xl" | "xs" | undefined;
        focus: boolean;
        selected: boolean;
        iconTurn: boolean;
        iconHide: boolean;
        loading: boolean;
        tag: string | undefined;
        readonly: boolean;
        disabled: boolean;
        primary: boolean;
        secondary: boolean;
        outline: boolean;
        intent: "default" | "neutral" | "positive" | "informative" | "negative" | undefined;
        ghost: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    C2Checkbox: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            value: import("vue").ShallowRef<string | undefined>;
            checkValidity: () => boolean;
            validationMessage: import("vue").ShallowRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            "update:value": (value: any) => void;
            "update:modelValue": (value: any) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            right: boolean;
            size: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            value: boolean;
            indeterminate: boolean;
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            value: import("vue").ShallowRef<string | undefined>;
            checkValidity: () => boolean;
            validationMessage: import("vue").ShallowRef<string>;
        }, {}, {}, {}, {
            right: boolean;
            size: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            value: boolean;
            indeterminate: boolean;
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
        icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        value: import("vue").ShallowRef<string | undefined>;
        checkValidity: () => boolean;
        validationMessage: import("vue").ShallowRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
        input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
        "update:value": (value: any) => void;
        "update:modelValue": (value: any) => void;
    }, string, {
        right: boolean;
        size: "sm" | "md" | "lg" | undefined;
        focus: boolean;
        value: boolean;
        indeterminate: boolean;
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
        modelValue: boolean;
        iconCheckbox: string;
        iconIndeterminate: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    C2FieldMessage: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
            counter: (StringConstructor | NumberConstructor)[];
            maxlength: (StringConstructor | NumberConstructor)[];
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
            counter: (StringConstructor | NumberConstructor)[];
            maxlength: (StringConstructor | NumberConstructor)[];
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
        }>>, {
            disabled: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
            counter: (StringConstructor | NumberConstructor)[];
            maxlength: (StringConstructor | NumberConstructor)[];
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
        }>>, {}, {}, {}, {}, {
            disabled: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
        counter: (StringConstructor | NumberConstructor)[];
        maxlength: (StringConstructor | NumberConstructor)[];
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        disabled: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/FieldMessage/types").FieldMessageSlots>;
    });
    C2Icon: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "country" | "payment" | "avatar" | undefined>;
                default: "icon" | "country" | "payment" | "avatar" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "24" | "32" | "20" | "16" | undefined>;
                default: "12" | "24" | "32" | "20" | "16" | undefined;
            };
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: (image: import("../constructors/Image/typesBasic").ImageEventData) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "country" | "payment" | "avatar" | undefined>;
                default: "icon" | "country" | "payment" | "avatar" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "24" | "32" | "20" | "16" | undefined>;
                default: "12" | "24" | "32" | "20" | "16" | undefined;
            };
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            size: "12" | "24" | "32" | "20" | "16" | undefined;
            animationType: "type1" | "type2" | undefined;
            active: boolean;
            hide: boolean;
            start: boolean;
            turn: boolean;
            end: boolean;
            high: boolean;
            disabled: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            variation: "icon" | "country" | "payment" | "avatar" | undefined;
            shape: "circle" | "rect" | "box" | undefined;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            animationType: {
                type: import("vue").PropType<"type1" | "type2" | undefined>;
                default: "type1" | "type2" | undefined;
            };
            animationShow: BooleanConstructor;
            overlay: BooleanConstructor;
            dynamic: BooleanConstructor;
            start: BooleanConstructor;
            end: BooleanConstructor;
            high: BooleanConstructor;
            variation: {
                type: import("vue").PropType<"icon" | "country" | "payment" | "avatar" | undefined>;
                default: "icon" | "country" | "payment" | "avatar" | undefined;
            };
            shape: {
                type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
                default: "circle" | "rect" | "box" | undefined;
            };
            size: {
                type: import("vue").PropType<"12" | "24" | "32" | "20" | "16" | undefined>;
                default: "12" | "24" | "32" | "20" | "16" | undefined;
            };
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            size: "12" | "24" | "32" | "20" | "16" | undefined;
            animationType: "type1" | "type2" | undefined;
            active: boolean;
            hide: boolean;
            start: boolean;
            turn: boolean;
            end: boolean;
            high: boolean;
            disabled: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            variation: "icon" | "country" | "payment" | "avatar" | undefined;
            shape: "circle" | "rect" | "box" | undefined;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        turn: BooleanConstructor;
        disabled: BooleanConstructor;
        hide: BooleanConstructor;
        animationType: {
            type: import("vue").PropType<"type1" | "type2" | undefined>;
            default: "type1" | "type2" | undefined;
        };
        animationShow: BooleanConstructor;
        overlay: BooleanConstructor;
        dynamic: BooleanConstructor;
        start: BooleanConstructor;
        end: BooleanConstructor;
        high: BooleanConstructor;
        variation: {
            type: import("vue").PropType<"icon" | "country" | "payment" | "avatar" | undefined>;
            default: "icon" | "country" | "payment" | "avatar" | undefined;
        };
        shape: {
            type: import("vue").PropType<"circle" | "rect" | "box" | undefined>;
            default: "circle" | "rect" | "box" | undefined;
        };
        size: {
            type: import("vue").PropType<"12" | "24" | "32" | "20" | "16" | undefined>;
            default: "12" | "24" | "32" | "20" | "16" | undefined;
        };
        icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
        iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
        active: BooleanConstructor;
    }>> & {
        onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
    }, {
        isActive: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (image: import("../constructors/Image/typesBasic").ImageEventData) => void;
    }, string, {
        size: "12" | "24" | "32" | "20" | "16" | undefined;
        animationType: "type1" | "type2" | undefined;
        active: boolean;
        hide: boolean;
        start: boolean;
        turn: boolean;
        end: boolean;
        high: boolean;
        disabled: boolean;
        animationShow: boolean;
        overlay: boolean;
        dynamic: boolean;
        variation: "icon" | "country" | "payment" | "avatar" | undefined;
        shape: "circle" | "rect" | "box" | undefined;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Icon/types").IconSlots> & import("../constructors/Icon/types").IconSlots;
    });
    C2Image: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            adaptive: BooleanConstructor;
            value: (StringConstructor | {
                new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
                prototype: File;
            })[];
            coordinator: import("vue").PropType<any>;
            size: import("vue").PropType<string | number | undefined>;
            x: (StringConstructor | NumberConstructor)[];
            y: (StringConstructor | NumberConstructor)[];
            adaptiveGroup: {
                type: StringConstructor;
                default: string | undefined;
            };
            adaptiveAlways: BooleanConstructor;
            objectWidth: (StringConstructor | NumberConstructor)[];
            objectHeight: (StringConstructor | NumberConstructor)[];
            url: StringConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            type: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageTypeItem>;
            data: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageEventItem>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: (image: import("../constructors/Image/typesBasic").ImageEventData) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            adaptive: BooleanConstructor;
            value: (StringConstructor | {
                new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
                prototype: File;
            })[];
            coordinator: import("vue").PropType<any>;
            size: import("vue").PropType<string | number | undefined>;
            x: (StringConstructor | NumberConstructor)[];
            y: (StringConstructor | NumberConstructor)[];
            adaptiveGroup: {
                type: StringConstructor;
                default: string | undefined;
            };
            adaptiveAlways: BooleanConstructor;
            objectWidth: (StringConstructor | NumberConstructor)[];
            objectHeight: (StringConstructor | NumberConstructor)[];
            url: StringConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            hide: boolean;
            turn: boolean;
            disabled: boolean;
            adaptiveGroup: string;
            adaptiveAlways: boolean;
            adaptive: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            turn: BooleanConstructor;
            disabled: BooleanConstructor;
            hide: BooleanConstructor;
            adaptive: BooleanConstructor;
            value: (StringConstructor | {
                new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
                prototype: File;
            })[];
            coordinator: import("vue").PropType<any>;
            size: import("vue").PropType<string | number | undefined>;
            x: (StringConstructor | NumberConstructor)[];
            y: (StringConstructor | NumberConstructor)[];
            adaptiveGroup: {
                type: StringConstructor;
                default: string | undefined;
            };
            adaptiveAlways: BooleanConstructor;
            objectWidth: (StringConstructor | NumberConstructor)[];
            objectHeight: (StringConstructor | NumberConstructor)[];
            url: StringConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            type: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageTypeItem>;
            data: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageEventItem>;
        }, {}, {}, {}, {
            hide: boolean;
            turn: boolean;
            disabled: boolean;
            adaptiveGroup: string;
            adaptiveAlways: boolean;
            adaptive: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        turn: BooleanConstructor;
        disabled: BooleanConstructor;
        hide: BooleanConstructor;
        adaptive: BooleanConstructor;
        value: (StringConstructor | {
            new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
            prototype: File;
        })[];
        coordinator: import("vue").PropType<any>;
        size: import("vue").PropType<string | number | undefined>;
        x: (StringConstructor | NumberConstructor)[];
        y: (StringConstructor | NumberConstructor)[];
        adaptiveGroup: {
            type: StringConstructor;
            default: string | undefined;
        };
        adaptiveAlways: BooleanConstructor;
        objectWidth: (StringConstructor | NumberConstructor)[];
        objectHeight: (StringConstructor | NumberConstructor)[];
        url: StringConstructor;
    }>> & {
        onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
    }, {
        type: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageTypeItem>;
        data: import("vue").ComputedRef<import("../constructors/Image/typesBasic").ImageEventItem>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (image: import("../constructors/Image/typesBasic").ImageEventData) => void;
    }, string, {
        hide: boolean;
        turn: boolean;
        disabled: boolean;
        adaptiveGroup: string;
        adaptiveAlways: boolean;
        adaptive: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Image/types").ImageSlots>;
    });
    C2Mutation: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {
            items: import("vue").ShallowRef<import(".").MutationDataItem[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: () => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {
            disabled: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {
            items: import("vue").ShallowRef<import(".").MutationDataItem[]>;
        }, {}, {}, {}, {
            disabled: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
    }>> & {
        onLoad?: (() => any) | undefined;
    }, {
        items: import("vue").ShallowRef<import(".").MutationDataItem[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: () => void;
    }, string, {
        disabled: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Mutation/types").MutationSlots>;
    });
    C2MutationItem: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            item: import("vue").PropType<import(".").MutationDataItem | undefined>;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: () => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            item: import("vue").PropType<import(".").MutationDataItem | undefined>;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {}, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            item: import("vue").PropType<import(".").MutationDataItem | undefined>;
        }>> & {
            onLoad?: (() => any) | undefined;
        }, {}, {}, {}, {}, {}>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        item: import("vue").PropType<import(".").MutationDataItem | undefined>;
    }>> & {
        onLoad?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: () => void;
    }, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/MutationItem/types").MutationItemSlots>;
    });
    C2Progress: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            linear: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            circular: BooleanConstructor;
            indeterminate: {
                type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
                default: "type1" | "type2" | "type3" | undefined;
            };
            position: {
                type: import("vue").PropType<"top" | "bottom" | undefined>;
                default: "top" | "bottom" | undefined;
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
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            linear: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            circular: BooleanConstructor;
            indeterminate: {
                type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
                default: "type1" | "type2" | "type3" | undefined;
            };
            position: {
                type: import("vue").PropType<"top" | "bottom" | undefined>;
                default: "top" | "bottom" | undefined;
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
        }>>, {
            indeterminate: "type1" | "type2" | "type3" | undefined;
            position: "top" | "bottom" | undefined;
            max: string | number;
            visible: boolean;
            delay: string | number;
            linear: boolean;
            circular: boolean;
            dense: boolean;
            inverse: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            linear: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            circular: BooleanConstructor;
            indeterminate: {
                type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
                default: "type1" | "type2" | "type3" | undefined;
            };
            position: {
                type: import("vue").PropType<"top" | "bottom" | undefined>;
                default: "top" | "bottom" | undefined;
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
        }>>, {}, {}, {}, {}, {
            indeterminate: "type1" | "type2" | "type3" | undefined;
            position: "top" | "bottom" | undefined;
            max: string | number;
            visible: boolean;
            delay: string | number;
            linear: boolean;
            circular: boolean;
            dense: boolean;
            inverse: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        linear: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        circular: BooleanConstructor;
        indeterminate: {
            type: import("vue").PropType<"type1" | "type2" | "type3" | undefined>;
            default: "type1" | "type2" | "type3" | undefined;
        };
        position: {
            type: import("vue").PropType<"top" | "bottom" | undefined>;
            default: "top" | "bottom" | undefined;
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        indeterminate: "type1" | "type2" | "type3" | undefined;
        position: "top" | "bottom" | undefined;
        max: string | number;
        visible: boolean;
        delay: string | number;
        linear: boolean;
        circular: boolean;
        dense: boolean;
        inverse: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Progress/types").ProgressSlots>;
    });
    C2Radio: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            value: import("vue").ShallowRef<string | undefined>;
            checkValidity: () => boolean;
            validationMessage: import("vue").ShallowRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            "update:value": (value: any) => void;
            "update:modelValue": (value: any) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            right: boolean;
            size: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            value: boolean;
            indeterminate: boolean;
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            value: import("vue").ShallowRef<string | undefined>;
            checkValidity: () => boolean;
            validationMessage: import("vue").ShallowRef<string>;
        }, {}, {}, {}, {
            right: boolean;
            size: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            value: boolean;
            indeterminate: boolean;
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
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
        icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        value: import("vue").ShallowRef<string | undefined>;
        checkValidity: () => boolean;
        validationMessage: import("vue").ShallowRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
        input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
        "update:value": (value: any) => void;
        "update:modelValue": (value: any) => void;
    }, string, {
        right: boolean;
        size: "sm" | "md" | "lg" | undefined;
        focus: boolean;
        value: boolean;
        indeterminate: boolean;
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
        modelValue: boolean;
        iconCheckbox: string;
        iconIndeterminate: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    C2Ripple: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>>, {
            disabled: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            disabled: BooleanConstructor;
        }>>, {}, {}, {}, {}, {
            disabled: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        disabled: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Ripple/types").RippleSlots>;
    });
    C2Skeleton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            active: BooleanConstructor;
        }>>, {
            isActive: import("vue").ComputedRef<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            active: BooleanConstructor;
        }>>, {
            active: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            active: BooleanConstructor;
        }>>, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            active: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        active: BooleanConstructor;
    }>>, {
        isActive: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        active: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Skeleton/types").SkeletonSlots> & import("../constructors/Skeleton/types").SkeletonSlots;
    });
    C2Switch: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            value: BooleanConstructor;
            modelValue: BooleanConstructor;
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            iconCheckbox: StringConstructor;
            iconIndeterminate: StringConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            value: import("vue").ShallowRef<string | undefined>;
            checkValidity: () => boolean;
            validationMessage: import("vue").ShallowRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
            "update:value": (value: any) => void;
            "update:modelValue": (value: any) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
            right: BooleanConstructor;
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            value: BooleanConstructor;
            modelValue: BooleanConstructor;
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            iconCheckbox: StringConstructor;
            iconIndeterminate: StringConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
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
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            autocomplete: AutoFill | undefined;
            required: boolean;
            arrow: boolean;
            modelValue: boolean;
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
            value: BooleanConstructor;
            modelValue: BooleanConstructor;
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            indeterminate: BooleanConstructor;
            iconCheckbox: StringConstructor;
            iconIndeterminate: StringConstructor;
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            name: StringConstructor;
            valueVariant: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            pattern: StringConstructor;
            match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
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
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            autocomplete: AutoFill | undefined;
            required: boolean;
            arrow: boolean;
            modelValue: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        required: BooleanConstructor;
        right: BooleanConstructor;
        focus: BooleanConstructor;
        disabled: BooleanConstructor;
        value: BooleanConstructor;
        modelValue: BooleanConstructor;
        icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
        indeterminate: BooleanConstructor;
        iconCheckbox: StringConstructor;
        iconIndeterminate: StringConstructor;
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        name: StringConstructor;
        valueVariant: StringConstructor;
        detail: import("vue").PropType<Record<string, any> | undefined>;
        type: {
            type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        pattern: StringConstructor;
        match: import("vue").PropType<import("../constructors/Input/typesBasic").InputMatch | undefined>;
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
        validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        label: (StringConstructor | NumberConstructor)[];
    }>> & {
        onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
        "onUpdate:value"?: ((value: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }, {
        value: import("vue").ShallowRef<string | undefined>;
        checkValidity: () => boolean;
        validationMessage: import("vue").ShallowRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
        input: (event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => void;
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
        type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
        modelValue: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
};
export declare const uiC2ComponentsPlugin: {
    install: (app: App) => Promise<void>;
};
