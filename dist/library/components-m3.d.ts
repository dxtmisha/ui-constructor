import { type App } from 'vue';
export declare const components: {
    M3Button: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
            height: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
                default: "sm" | "md" | "lg" | undefined;
            };
            filled: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            elevated: BooleanConstructor;
            tonal: BooleanConstructor;
            palette: import("vue").PropType<"error" | "red" | "green" | "primary" | "secondary" | "tertiary" | "neutral" | "neutralVariant" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
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
            adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
            height: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
                default: "sm" | "md" | "lg" | undefined;
            };
            filled: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            elevated: BooleanConstructor;
            tonal: BooleanConstructor;
            palette: import("vue").PropType<"error" | "red" | "green" | "primary" | "secondary" | "tertiary" | "neutral" | "neutralVariant" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
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
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            filled: boolean;
            outlined: boolean;
            height: "sm" | "md" | "lg" | undefined;
            elevated: boolean;
            tonal: boolean;
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
            adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
            height: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
                default: "sm" | "md" | "lg" | undefined;
            };
            filled: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            elevated: BooleanConstructor;
            tonal: BooleanConstructor;
            palette: import("vue").PropType<"error" | "red" | "green" | "primary" | "secondary" | "tertiary" | "neutral" | "neutralVariant" | undefined>;
            tag: {
                type: import("vue").PropType<string | undefined>;
                default: string | undefined;
            };
            to: StringConstructor;
            value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            detail: ObjectConstructor[];
            progress: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
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
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            filled: boolean;
            outlined: boolean;
            height: "sm" | "md" | "lg" | undefined;
            elevated: boolean;
            tonal: boolean;
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
        adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
        height: {
            type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
            default: "sm" | "md" | "lg" | undefined;
        };
        filled: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        outlined: BooleanConstructor;
        text: BooleanConstructor;
        elevated: BooleanConstructor;
        tonal: BooleanConstructor;
        palette: import("vue").PropType<"error" | "red" | "green" | "primary" | "secondary" | "tertiary" | "neutral" | "neutralVariant" | undefined>;
        tag: {
            type: import("vue").PropType<string | undefined>;
            default: string | undefined;
        };
        to: StringConstructor;
        value: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        detail: ObjectConstructor[];
        progress: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
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
        focus: boolean;
        selected: boolean;
        iconTurn: boolean;
        iconHide: boolean;
        loading: boolean;
        text: boolean;
        tag: string | undefined;
        readonly: boolean;
        disabled: boolean;
        filled: boolean;
        outlined: boolean;
        height: "sm" | "md" | "lg" | undefined;
        elevated: boolean;
        tonal: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    M3Icon: {
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | "2xl" | undefined>;
            size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
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
        rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | "2xl" | undefined>;
        size: import("vue").PropType<"sm" | "md" | "lg" | "xl" | "xs" | undefined>;
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
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Icon/types").IconSlots> & import("../constructors/Icon/types").IconSlots;
    });
    M3Image: {
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
    M3Mutation: {
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
    M3MutationItem: {
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
    M3Progress: {
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
    M3Ripple: {
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
    M3Scrollbar: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {
            visible: boolean;
            inverse: boolean;
            tag: string;
            border: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            border: BooleanConstructor;
            inverse: BooleanConstructor;
            tag: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            visible: boolean;
            inverse: boolean;
            tag: string;
            border: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        border: BooleanConstructor;
        inverse: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        visible: boolean;
        inverse: boolean;
        tag: string;
        border: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Scrollbar/types").ScrollbarSlots> & import("../constructors/Scrollbar/types").ScrollbarSlots;
    });
    M3Window: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            width: import("vue").PropType<string | undefined>;
            height: import("vue").PropType<string | undefined>;
            adaptive: {
                type: import("vue").PropType<"menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined>;
                default: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
            };
            overscroll: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            dense: BooleanConstructor;
            fullscreen: BooleanConstructor;
            alignment: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | undefined>;
            origin: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
            open: BooleanConstructor;
            disabled: BooleanConstructor;
            preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            contextmenu: BooleanConstructor;
            staticMode: BooleanConstructor;
            axis: {
                type: import("vue").PropType<"x" | "y" | "on" | undefined>;
                default: "x" | "y" | "on" | undefined;
            };
            indent: {
                type: import("vue").PropType<number | undefined>;
                default: number | undefined;
            };
            persistent: BooleanConstructor;
            overElement: import("vue").PropType<import("../types/basic").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../constructors/Window/typesBasic").WindowEmitOptions) => any) | undefined;
        }, {
            id: string;
            open: import("vue").ShallowRef<boolean>;
            setOpen(): Promise<void>;
            toggle(): Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            window: (options: import("../constructors/Window/typesBasic").WindowEmitOptions) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            width: import("vue").PropType<string | undefined>;
            height: import("vue").PropType<string | undefined>;
            adaptive: {
                type: import("vue").PropType<"menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined>;
                default: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
            };
            overscroll: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            dense: BooleanConstructor;
            fullscreen: BooleanConstructor;
            alignment: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | undefined>;
            origin: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
            open: BooleanConstructor;
            disabled: BooleanConstructor;
            preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            contextmenu: BooleanConstructor;
            staticMode: BooleanConstructor;
            axis: {
                type: import("vue").PropType<"x" | "y" | "on" | undefined>;
                default: "x" | "y" | "on" | undefined;
            };
            indent: {
                type: import("vue").PropType<number | undefined>;
                default: number | undefined;
            };
            persistent: BooleanConstructor;
            overElement: import("vue").PropType<import("../types/basic").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../constructors/Window/typesBasic").WindowEmitOptions) => any) | undefined;
        }, {
            contextmenu: boolean;
            dense: boolean;
            disabled: boolean;
            adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
            open: boolean;
            flash: boolean;
            axis: "x" | "y" | "on" | undefined;
            indent: number | undefined;
            staticMode: boolean;
            persistent: boolean;
            autoClose: boolean;
            inDom: boolean;
            overscroll: boolean;
            fullscreen: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            width: import("vue").PropType<string | undefined>;
            height: import("vue").PropType<string | undefined>;
            adaptive: {
                type: import("vue").PropType<"menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined>;
                default: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
            };
            overscroll: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            dense: BooleanConstructor;
            fullscreen: BooleanConstructor;
            alignment: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | undefined>;
            origin: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
            open: BooleanConstructor;
            disabled: BooleanConstructor;
            preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
            contextmenu: BooleanConstructor;
            staticMode: BooleanConstructor;
            axis: {
                type: import("vue").PropType<"x" | "y" | "on" | undefined>;
                default: "x" | "y" | "on" | undefined;
            };
            indent: {
                type: import("vue").PropType<number | undefined>;
                default: number | undefined;
            };
            persistent: BooleanConstructor;
            overElement: import("vue").PropType<import("../types/basic").ElementOrString<HTMLElement> | undefined>;
            autoClose: BooleanConstructor;
            flash: BooleanConstructor;
            inDom: BooleanConstructor;
        }>> & {
            onWindow?: ((options: import("../constructors/Window/typesBasic").WindowEmitOptions) => any) | undefined;
        }, {
            id: string;
            open: import("vue").ShallowRef<boolean>;
            setOpen(): Promise<void>;
            toggle(): Promise<void>;
        }, {}, {}, {}, {
            contextmenu: boolean;
            dense: boolean;
            disabled: boolean;
            adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
            open: boolean;
            flash: boolean;
            axis: "x" | "y" | "on" | undefined;
            indent: number | undefined;
            staticMode: boolean;
            persistent: boolean;
            autoClose: boolean;
            inDom: boolean;
            overscroll: boolean;
            fullscreen: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        width: import("vue").PropType<string | undefined>;
        height: import("vue").PropType<string | undefined>;
        adaptive: {
            type: import("vue").PropType<"menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined>;
            default: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
        };
        overscroll: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        dense: BooleanConstructor;
        fullscreen: BooleanConstructor;
        alignment: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | undefined>;
        origin: import("vue").PropType<"top" | "bottom" | "center" | "right" | "left" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
        open: BooleanConstructor;
        disabled: BooleanConstructor;
        preparation: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
        beforeOpening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
        opening: import("vue").PropType<((open: boolean) => Promise<boolean>) | undefined>;
        contextmenu: BooleanConstructor;
        staticMode: BooleanConstructor;
        axis: {
            type: import("vue").PropType<"x" | "y" | "on" | undefined>;
            default: "x" | "y" | "on" | undefined;
        };
        indent: {
            type: import("vue").PropType<number | undefined>;
            default: number | undefined;
        };
        persistent: BooleanConstructor;
        overElement: import("vue").PropType<import("../types/basic").ElementOrString<HTMLElement> | undefined>;
        autoClose: BooleanConstructor;
        flash: BooleanConstructor;
        inDom: BooleanConstructor;
    }>> & {
        onWindow?: ((options: import("../constructors/Window/typesBasic").WindowEmitOptions) => any) | undefined;
    }, {
        id: string;
        open: import("vue").ShallowRef<boolean>;
        setOpen(): Promise<void>;
        toggle(): Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        window: (options: import("../constructors/Window/typesBasic").WindowEmitOptions) => void;
    }, string, {
        contextmenu: boolean;
        dense: boolean;
        disabled: boolean;
        adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
        open: boolean;
        flash: boolean;
        axis: "x" | "y" | "on" | undefined;
        indent: number | undefined;
        staticMode: boolean;
        persistent: boolean;
        autoClose: boolean;
        inDom: boolean;
        overscroll: boolean;
        fullscreen: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Window/types").WindowSlots> & import("../constructors/Window/types").WindowSlots;
    });
};
export declare const uiM3ComponentsPlugin: {
    install: (app: App) => Promise<void>;
};
