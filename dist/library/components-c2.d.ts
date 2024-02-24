import { type App } from 'vue';
export declare const components: {
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
            turn: boolean;
            disabled: boolean;
            hide: boolean;
            active: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            start: boolean;
            end: boolean;
            high: boolean;
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
            turn: boolean;
            disabled: boolean;
            hide: boolean;
            active: boolean;
            animationShow: boolean;
            overlay: boolean;
            dynamic: boolean;
            start: boolean;
            end: boolean;
            high: boolean;
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
        turn: boolean;
        disabled: boolean;
        hide: boolean;
        active: boolean;
        animationShow: boolean;
        overlay: boolean;
        dynamic: boolean;
        start: boolean;
        end: boolean;
        high: boolean;
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
            turn: boolean;
            disabled: boolean;
            hide: boolean;
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
            turn: boolean;
            disabled: boolean;
            hide: boolean;
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
        turn: boolean;
        disabled: boolean;
        hide: boolean;
        adaptiveGroup: string;
        adaptiveAlways: boolean;
        adaptive: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<import("../constructors/Image/types").ImageSlots>;
    });
};
export declare const uiC2ComponentsPlugin: {
    install: (app: App) => Promise<void>;
};
