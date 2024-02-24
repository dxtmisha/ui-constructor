import { type ComputedRef, type PropType, type VNode } from 'vue';
import { DesignComponents } from '../../classes/design/DesignComponents';
import { type ProgressProps } from './props';
export type UseProgressComponent = {
    progress?: object;
};
export type UseProgressSetup = {
    progressBind: ComputedRef<ProgressProps>;
    renderProgress(): VNode[];
};
export type UseProgressProp = {
    loading?: boolean | ProgressProps;
};
export declare const usePropsProgress: {
    progress: PropType<boolean | ProgressProps | undefined>;
};
/**
 * The function returns data for working with the Progress component.<br>
 * Функция возвращает данные для работы с компонентом Progress.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classesName class name for the component /<br>название класса для компонента
 * @param extra additional parameter or property name /<br>дополнительный параметр или имя свойства
 */
export declare const useProgressRef: <COMP extends UseProgressComponent, P extends UseProgressProp>(props: P, components?: DesignComponents<COMP, P> | undefined, classesName?: string, extra?: ProgressProps) => UseProgressSetup;
