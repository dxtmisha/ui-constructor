import { App } from 'vue';
export declare enum MutationStatus {
    new = "new",
    init = "init",
    end = "end"
}
export type MutationComponentProps = Record<string, any>;
export type MutationComponentCallback = (props: MutationComponentProps) => void;
export type MutationComponentCache = Record<string, MutationComponentProps>;
export type MutationComponentItem = {
    item: any;
    callback: MutationComponentCallback;
};
export type MutationComponent = Record<string, MutationComponentItem>;
export type MutationSlotsItem = {
    tag: string;
    attributes: Record<string, any>;
};
export type MutationSlotsItemOrString = MutationSlotsItem | string;
export type MutationSlots = Record<string, MutationSlotsItemOrString[]>;
export type MutationProjectItem = {
    item: any;
    router?: Record<string, any>;
    store?: Record<string, any>;
    init?: (app: App) => void;
    translate?: string[];
};
export type MutationProject = Record<string, MutationProjectItem>;
