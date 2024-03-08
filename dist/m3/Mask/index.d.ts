export declare const M3Mask: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        right: BooleanConstructor;
        dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        };
        name: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
        special: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        };
        match: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        };
        pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        currency: StringConstructor;
        language: StringConstructor;
        view: {
            type: StringConstructor;
            default: string | undefined;
        };
    }>> & {
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        onReset?: ((event: Event) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        beforeinput: (event: InputEvent) => void;
        blur: (event: FocusEvent) => void;
        change: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
        focus: (event: FocusEvent) => void;
        input: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
        keydown: (event: KeyboardEvent) => void;
        keyup: (event: KeyboardEvent) => void;
        paste: (event: ClipboardEvent) => void;
        reset: (event: Event) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        right: BooleanConstructor;
        dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        };
        name: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
        special: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        };
        match: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        };
        pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        currency: StringConstructor;
        language: StringConstructor;
        view: {
            type: StringConstructor;
            default: string | undefined;
        };
    }>> & {
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        onReset?: ((event: Event) => any) | undefined;
    }, {
        right: boolean;
        match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        visible: boolean;
        view: string;
        type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        right: BooleanConstructor;
        dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
        type: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        };
        name: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
        special: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        };
        match: {
            type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
            default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        };
        pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        currency: StringConstructor;
        language: StringConstructor;
        view: {
            type: StringConstructor;
            default: string | undefined;
        };
    }>> & {
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        onReset?: ((event: Event) => any) | undefined;
    }, {}, {}, {}, {}, {
        right: boolean;
        match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        visible: boolean;
        view: string;
        type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    right: BooleanConstructor;
    dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
    type: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
    };
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    mask: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskList | undefined>;
    special: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
    };
    match: {
        type: import("vue").PropType<import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
        default: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
    };
    pattern: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
    check: import("vue").PropType<import("../../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
    fraction: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    currency: StringConstructor;
    language: StringConstructor;
    view: {
        type: StringConstructor;
        default: string | undefined;
    };
}>> & {
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    onReset?: ((event: Event) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeinput: (event: InputEvent) => void;
    blur: (event: FocusEvent) => void;
    change: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
    focus: (event: FocusEvent) => void;
    input: (event: InputEvent, value: import("../../constructors/Mask/typesBasic").MaskEventData) => void;
    keydown: (event: KeyboardEvent) => void;
    keyup: (event: KeyboardEvent) => void;
    paste: (event: ClipboardEvent) => void;
    reset: (event: Event) => void;
}, string, {
    right: boolean;
    match: import("../../constructors/Mask/typesBasic").MaskMatchItem | undefined;
    visible: boolean;
    view: string;
    type: import("../../constructors/Mask/typesBasic").MaskTypeItem | undefined;
    special: import("../../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Readonly<import("../../constructors/Mask/types").MaskSlots>;
});
