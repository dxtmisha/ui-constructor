import { type ComputedRef, type PropType } from 'vue';
import { type ProgressProps } from '../../Progress/props';
export type UseEnabledSetup = {
    disabledBind: ComputedRef<boolean | undefined>;
    isEnabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isProgress: ComputedRef<boolean>;
};
export type UseEnabledProps = {
    loading?: boolean | ProgressProps;
    readonly?: boolean;
    disabled?: boolean;
};
export declare const usePropsEnabled: {
    progress: PropType<boolean | ProgressProps | undefined>;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
};
/**
 * Use to control the activity of the item.<br>
 * Использование для управления активности элемента.
 * @param props input property /<br>входное свойство
 */
export declare const useEnabled: (props: UseEnabledProps) => UseEnabledSetup;
