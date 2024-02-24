import { type ComputedRef, type PropType, type VNode } from 'vue';
import { DesignComponents } from '../../classes/design/DesignComponents';
import { type IconProps } from './props';
export type UseIconComponent = {
    icon?: object;
};
export type UseIconSetup = {
    iconBind: ComputedRef<IconProps>;
    trailingBind?: ComputedRef<IconProps>;
    isIcon: ComputedRef<boolean>;
    renderIcon(): VNode[];
};
export type UseIconProps = {
    icon?: string | IconProps;
    selected?: boolean;
    iconTurn?: boolean;
    iconHide?: boolean;
};
export type UseIconTrailingProps = UseIconProps & {
    iconTrailing?: UseIconProps['icon'];
};
export declare const usePropsIcon: {
    icon: PropType<string | IconProps | undefined>;
    selected: BooleanConstructor;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
};
export declare const usePropsIconTrailing: {
    iconTrailing: PropType<string | IconProps | undefined>;
    icon: PropType<string | IconProps | undefined>;
    selected: BooleanConstructor;
    iconTurn: BooleanConstructor;
    iconHide: BooleanConstructor;
};
/**
 * The function returns data for working with the Icon component.<br>
 * Функция возвращает данные для работы с компонентом Icon.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classIcon class name for the component /<br>название класса для компонента
 * @param classIconTrailing class for the second icon /<br>класс для второй иконки
 */
export declare const useIconRef: <COMP extends UseIconComponent, P extends UseIconTrailingProps>(props: P, components?: DesignComponents<COMP, P> | undefined, classIcon?: string, classIconTrailing?: string) => UseIconSetup;
