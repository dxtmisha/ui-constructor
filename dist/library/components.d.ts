import { type App } from 'vue';
export declare const components: {
    M2Button: {
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
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "greyBlue" | "white" | "black" | "blackLight" | undefined>;
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
            adaptive: import("vue").PropType<"icon" | "sm" | "md" | undefined>;
            height: {
                type: import("vue").PropType<"sm" | "md" | "lg" | undefined>;
                default: "sm" | "md" | "lg" | undefined;
            };
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "greyBlue" | "white" | "black" | "blackLight" | undefined>;
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
            height: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            outlined: boolean;
            contained: boolean;
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
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "greyBlue" | "white" | "black" | "blackLight" | undefined>;
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
            height: "sm" | "md" | "lg" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            outlined: boolean;
            contained: boolean;
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
        contained: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        outlined: BooleanConstructor;
        text: BooleanConstructor;
        palette: import("vue").PropType<"red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "greyBlue" | "white" | "black" | "blackLight" | undefined>;
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
        height: "sm" | "md" | "lg" | undefined;
        focus: boolean;
        selected: boolean;
        iconTurn: boolean;
        iconHide: boolean;
        loading: boolean;
        text: boolean;
        tag: string | undefined;
        readonly: boolean;
        disabled: boolean;
        outlined: boolean;
        contained: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    M2Icon: {
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | undefined>;
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | undefined>;
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
            rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | undefined>;
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
        rounded: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | "xl" | undefined>;
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
    M2Image: {
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
    M2Progress: {
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
    M2Ripple: {
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
    M2Skeleton: {
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
            height: "sm" | "md" | "lg" | undefined;
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
            height: "sm" | "md" | "lg" | undefined;
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
        height: "sm" | "md" | "lg" | undefined;
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
        elevated: boolean;
        tonal: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    M3Checkbox: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            required: BooleanConstructor;
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
    M3FieldMessage: {
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
    M3Input: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            name: StringConstructor;
            value: StringConstructor;
            valueVariant: StringConstructor;
            modelValue: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            required: BooleanConstructor;
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
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            disabled: BooleanConstructor;
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
            name: StringConstructor;
            value: StringConstructor;
            valueVariant: StringConstructor;
            modelValue: StringConstructor;
            detail: import("vue").PropType<Record<string, any> | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            required: BooleanConstructor;
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
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            disabled: BooleanConstructor;
            label: (StringConstructor | NumberConstructor)[];
        }>> & {
            onChange?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            onInput?: ((event: Event | InputEvent, value: import("../constructors/Input/typesBasic").InputValidationItem) => any) | undefined;
            "onUpdate:value"?: ((value: any) => any) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
                type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
                default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
            };
            inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
            spellcheck: BooleanConstructor;
            required: BooleanConstructor;
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
            helperMessage: StringConstructor;
            validationMessage: StringConstructor;
            validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
            on: ObjectConstructor;
            'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
            'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
            loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
            readonly: BooleanConstructor;
            disabled: BooleanConstructor;
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
            readonly: boolean;
            disabled: boolean;
            spellcheck: boolean;
            autofocus: boolean;
            type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
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
            type: import("vue").PropType<import("../constructors/Input/typesBasic").InputTypeName | undefined>;
            default: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        };
        inputmode: import("vue").PropType<import("../constructors/Input/typesBasic").InputMode | undefined>;
        spellcheck: BooleanConstructor;
        required: BooleanConstructor;
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
        helperMessage: StringConstructor;
        validationMessage: StringConstructor;
        validationCode: import("vue").PropType<import("../constructors/Input/typesBasic").InputValidityCode | undefined>;
        on: ObjectConstructor;
        'onUpdate:value': import("vue").PropType<((value: any) => void) | undefined>;
        'onUpdate:modelValue': import("vue").PropType<((value: any) => void) | undefined>;
        loading: import("vue").PropType<boolean | import("../constructors/Progress/props").ProgressProps | undefined>;
        readonly: BooleanConstructor;
        disabled: BooleanConstructor;
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
        readonly: boolean;
        disabled: boolean;
        spellcheck: boolean;
        autofocus: boolean;
        type: import("../constructors/Input/typesBasic").InputTypeName | undefined;
        autocomplete: AutoFill | undefined;
        required: boolean;
        arrow: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    M3Mask: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            right: BooleanConstructor;
            dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
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
            onChange?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            beforeinput: (event: InputEvent) => void;
            blur: (event: FocusEvent) => void;
            change: (event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => void;
            focus: (event: FocusEvent) => void;
            input: (event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => void;
            keydown: (event: KeyboardEvent) => void;
            keyup: (event: KeyboardEvent) => void;
            paste: (event: ClipboardEvent) => void;
            reset: (event: Event) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            right: BooleanConstructor;
            dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
            type: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
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
            onChange?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {
            right: boolean;
            match: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            visible: boolean;
            view: string;
            type: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            special: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
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
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            };
            name: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            mask: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskList | undefined>;
            special: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
            };
            match: {
                type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
                default: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            };
            pattern: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
            check: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
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
            onChange?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onFocus?: ((event: FocusEvent) => any) | undefined;
            onInput?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
            onKeydown?: ((event: KeyboardEvent) => any) | undefined;
            onKeyup?: ((event: KeyboardEvent) => any) | undefined;
            onPaste?: ((event: ClipboardEvent) => any) | undefined;
            onReset?: ((event: Event) => any) | undefined;
        }, {}, {}, {}, {}, {
            right: boolean;
            match: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
            visible: boolean;
            view: string;
            type: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
            special: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        right: BooleanConstructor;
        dir: import("vue").PropType<"ltr" | "rtl" | undefined>;
        type: {
            type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskTypeItem | undefined>;
            default: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        };
        name: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        mask: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskList | undefined>;
        special: {
            type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined>;
            default: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
        };
        match: {
            type: import("vue").PropType<import("../constructors/Mask/typesBasic").MaskMatchItem | undefined>;
            default: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        };
        pattern: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
        check: import("vue").PropType<import("../constructors/Input/typesBasic").InputPatternItemOrFunction | undefined>;
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
        onChange?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onInput?: ((event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        onReset?: ((event: Event) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        beforeinput: (event: InputEvent) => void;
        blur: (event: FocusEvent) => void;
        change: (event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => void;
        focus: (event: FocusEvent) => void;
        input: (event: InputEvent, value: import("../constructors/Mask/typesBasic").MaskEventData) => void;
        keydown: (event: KeyboardEvent) => void;
        keyup: (event: KeyboardEvent) => void;
        paste: (event: ClipboardEvent) => void;
        reset: (event: Event) => void;
    }, string, {
        right: boolean;
        match: import("../constructors/Mask/typesBasic").MaskMatchItem | undefined;
        visible: boolean;
        view: string;
        type: import("../constructors/Mask/typesBasic").MaskTypeItem | undefined;
        special: import("../constructors/Mask/typesBasic").MaskSpecialProp | undefined;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Mask/types").MaskSlots>;
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
    M3Skeleton: {
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
    M3SkeletonItem: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            text: BooleanConstructor;
            background: BooleanConstructor;
            backgroundVariant: BooleanConstructor;
            border: BooleanConstructor;
            borderVariant: BooleanConstructor;
            tag: import("vue").PropType<any>;
            props: import("vue").PropType<Record<string, any> | undefined>;
            label: import("vue").PropType<string | undefined>;
            length: import("vue").PropType<string | number | [number, number] | undefined>;
            skeleton: import("vue").PropType<boolean | undefined>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            text: BooleanConstructor;
            background: BooleanConstructor;
            backgroundVariant: BooleanConstructor;
            border: BooleanConstructor;
            borderVariant: BooleanConstructor;
            tag: import("vue").PropType<any>;
            props: import("vue").PropType<Record<string, any> | undefined>;
            label: import("vue").PropType<string | undefined>;
            length: import("vue").PropType<string | number | [number, number] | undefined>;
            skeleton: import("vue").PropType<boolean | undefined>;
        }>>, {
            text: boolean;
            border: boolean;
            background: boolean;
            backgroundVariant: boolean;
            borderVariant: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            text: BooleanConstructor;
            background: BooleanConstructor;
            backgroundVariant: BooleanConstructor;
            border: BooleanConstructor;
            borderVariant: BooleanConstructor;
            tag: import("vue").PropType<any>;
            props: import("vue").PropType<Record<string, any> | undefined>;
            label: import("vue").PropType<string | undefined>;
            length: import("vue").PropType<string | number | [number, number] | undefined>;
            skeleton: import("vue").PropType<boolean | undefined>;
        }>>, {}, {}, {}, {}, {
            text: boolean;
            border: boolean;
            background: boolean;
            backgroundVariant: boolean;
            borderVariant: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        text: BooleanConstructor;
        background: BooleanConstructor;
        backgroundVariant: BooleanConstructor;
        border: BooleanConstructor;
        borderVariant: BooleanConstructor;
        tag: import("vue").PropType<any>;
        props: import("vue").PropType<Record<string, any> | undefined>;
        label: import("vue").PropType<string | undefined>;
        length: import("vue").PropType<string | number | [number, number] | undefined>;
        skeleton: import("vue").PropType<boolean | undefined>;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        text: boolean;
        border: boolean;
        background: boolean;
        backgroundVariant: boolean;
        borderVariant: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/SkeletonItem/types").SkeletonItemSlots> & import("../constructors/SkeletonItem/types").SkeletonItemSlots;
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
            alignment: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | undefined>;
            origin: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
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
            alignment: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | undefined>;
            origin: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
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
            open: boolean;
            adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
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
            alignment: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | undefined>;
            origin: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
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
            open: boolean;
            adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
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
        alignment: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | undefined>;
        origin: import("vue").PropType<"left" | "right" | "top" | "bottom" | "center" | "topToBottom" | "rightToLeft" | "bottomToTop" | "leftToRight" | undefined>;
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
        open: boolean;
        adaptive: "menu" | "auto" | "static" | "modal" | "modalDynamic" | "staticSm" | "staticMd" | "staticLg" | undefined;
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
    C1Button: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            focus: BooleanConstructor;
            disabled: BooleanConstructor;
            selected: BooleanConstructor;
            loading: BooleanConstructor;
            readonly: BooleanConstructor;
            adaptive: import("vue").PropType<"icon" | undefined>;
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | "xl" | undefined>;
                default: "sm" | "md" | "lg" | "xl" | undefined;
            };
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            white: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"error" | "ripple" | "background" | "webText" | "webWhite" | "webAccent" | "webAccentWhite" | "webError" | "webGray1" | "webGray2" | "webGray3" | "webGray4" | "webGlue1" | "webGlue2" | "webGlue3" | "accent" | "success" | "notification" | "backgroundImage" | "backgroundNotificationInfo" | "backgroundNotificationWarning" | "backgroundError" | "gray1" | "gray2" | "gray3" | "gray4" | "shading" | "green1" | "green2" | "yellow1" | "yellow2" | "yellow3" | "blue1" | "extra1" | "extra2" | "extra3" | "extra4" | "extra5" | "extra6" | "extra7" | "extra8" | "extra9" | "extra10" | "extra11" | "extra12" | "extra13" | "extra14" | "extra15" | "extra16" | "extra17" | "extra18" | "extra19" | undefined>;
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
                type: import("vue").PropType<"sm" | "md" | "lg" | "xl" | undefined>;
                default: "sm" | "md" | "lg" | "xl" | undefined;
            };
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            white: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"error" | "ripple" | "background" | "webText" | "webWhite" | "webAccent" | "webAccentWhite" | "webError" | "webGray1" | "webGray2" | "webGray3" | "webGray4" | "webGlue1" | "webGlue2" | "webGlue3" | "accent" | "success" | "notification" | "backgroundImage" | "backgroundNotificationInfo" | "backgroundNotificationWarning" | "backgroundError" | "gray1" | "gray2" | "gray3" | "gray4" | "shading" | "green1" | "green2" | "yellow1" | "yellow2" | "yellow3" | "blue1" | "extra1" | "extra2" | "extra3" | "extra4" | "extra5" | "extra6" | "extra7" | "extra8" | "extra9" | "extra10" | "extra11" | "extra12" | "extra13" | "extra14" | "extra15" | "extra16" | "extra17" | "extra18" | "extra19" | undefined>;
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
            size: "sm" | "md" | "lg" | "xl" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            outlined: boolean;
            white: boolean;
            contained: boolean;
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
                type: import("vue").PropType<"sm" | "md" | "lg" | "xl" | undefined>;
                default: "sm" | "md" | "lg" | "xl" | undefined;
            };
            contained: {
                type: BooleanConstructor;
                default: boolean | undefined;
            };
            outlined: BooleanConstructor;
            white: BooleanConstructor;
            text: BooleanConstructor;
            palette: import("vue").PropType<"error" | "ripple" | "background" | "webText" | "webWhite" | "webAccent" | "webAccentWhite" | "webError" | "webGray1" | "webGray2" | "webGray3" | "webGray4" | "webGlue1" | "webGlue2" | "webGlue3" | "accent" | "success" | "notification" | "backgroundImage" | "backgroundNotificationInfo" | "backgroundNotificationWarning" | "backgroundError" | "gray1" | "gray2" | "gray3" | "gray4" | "shading" | "green1" | "green2" | "yellow1" | "yellow2" | "yellow3" | "blue1" | "extra1" | "extra2" | "extra3" | "extra4" | "extra5" | "extra6" | "extra7" | "extra8" | "extra9" | "extra10" | "extra11" | "extra12" | "extra13" | "extra14" | "extra15" | "extra16" | "extra17" | "extra18" | "extra19" | undefined>;
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
            size: "sm" | "md" | "lg" | "xl" | undefined;
            focus: boolean;
            selected: boolean;
            iconTurn: boolean;
            iconHide: boolean;
            loading: boolean;
            text: boolean;
            tag: string | undefined;
            readonly: boolean;
            disabled: boolean;
            outlined: boolean;
            white: boolean;
            contained: boolean;
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
            type: import("vue").PropType<"sm" | "md" | "lg" | "xl" | undefined>;
            default: "sm" | "md" | "lg" | "xl" | undefined;
        };
        contained: {
            type: BooleanConstructor;
            default: boolean | undefined;
        };
        outlined: BooleanConstructor;
        white: BooleanConstructor;
        text: BooleanConstructor;
        palette: import("vue").PropType<"error" | "ripple" | "background" | "webText" | "webWhite" | "webAccent" | "webAccentWhite" | "webError" | "webGray1" | "webGray2" | "webGray3" | "webGray4" | "webGlue1" | "webGlue2" | "webGlue3" | "accent" | "success" | "notification" | "backgroundImage" | "backgroundNotificationInfo" | "backgroundNotificationWarning" | "backgroundError" | "gray1" | "gray2" | "gray3" | "gray4" | "shading" | "green1" | "green2" | "yellow1" | "yellow2" | "yellow3" | "blue1" | "extra1" | "extra2" | "extra3" | "extra4" | "extra5" | "extra6" | "extra7" | "extra8" | "extra9" | "extra10" | "extra11" | "extra12" | "extra13" | "extra14" | "extra15" | "extra16" | "extra17" | "extra18" | "extra19" | undefined>;
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
        size: "sm" | "md" | "lg" | "xl" | undefined;
        focus: boolean;
        selected: boolean;
        iconTurn: boolean;
        iconHide: boolean;
        loading: boolean;
        text: boolean;
        tag: string | undefined;
        readonly: boolean;
        disabled: boolean;
        outlined: boolean;
        white: boolean;
        contained: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/uses/ref/useLabel").UseLabelSlots> & import("../constructors/uses/ref/useLabel").UseLabelSlots;
    });
    C1Icon: {
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
            rounded: {
                type: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | undefined>;
                default: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | "xs" | undefined>;
                default: "sm" | "md" | "lg" | "xs" | undefined;
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
            rounded: {
                type: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | undefined>;
                default: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | "xs" | undefined>;
                default: "sm" | "md" | "lg" | "xs" | undefined;
            };
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            size: "sm" | "md" | "lg" | "xs" | undefined;
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
            rounded: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
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
            rounded: {
                type: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | undefined>;
                default: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg" | "xs" | undefined>;
                default: "sm" | "md" | "lg" | "xs" | undefined;
            };
            icon: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            iconActive: import("vue").PropType<string | import("../constructors/Image/props").ImageProps | undefined>;
            active: BooleanConstructor;
        }>> & {
            onLoad?: ((image: import("../constructors/Image/typesBasic").ImageEventData) => any) | undefined;
        }, {
            isActive: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            size: "sm" | "md" | "lg" | "xs" | undefined;
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
            rounded: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
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
        rounded: {
            type: import("vue").PropType<"full" | "sm" | "standard" | "none" | "md" | "lg" | undefined>;
            default: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
        };
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg" | "xs" | undefined>;
            default: "sm" | "md" | "lg" | "xs" | undefined;
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
        size: "sm" | "md" | "lg" | "xs" | undefined;
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
        rounded: "full" | "sm" | "standard" | "none" | "md" | "lg" | undefined;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Icon/types").IconSlots> & import("../constructors/Icon/types").IconSlots;
    });
    C1Image: {
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
    C1Progress: {
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
    C1Ripple: {
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
};
export declare const uiComponentsPlugin: {
    install: (app: App) => Promise<void>;
};
