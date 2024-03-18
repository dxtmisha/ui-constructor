import { type VNode } from 'vue';
import { CheckboxDesign } from '../Checkbox/CheckboxDesign';
import { type SwitchProps } from './props';
import { type SwitchClasses, type SwitchComponents, type SwitchExpose, type SwitchSetup } from './types';
import type { ConstrOptions } from '../../types/constructor.ts';
import type { CheckboxEmits } from '../Checkbox/types.ts';
/**
 * SwitchDesign
 */
export declare class SwitchDesign<COMP extends SwitchComponents, SETUP extends SwitchSetup, EXPOSE extends SwitchExpose, CLASSES extends SwitchClasses, P extends SwitchProps> extends CheckboxDesign<COMP, SETUP, EXPOSE, CLASSES, P> {
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, CheckboxEmits, P>);
    /**
     * Rendering of the checkbox element.<br>
     * Рендеринг элемента checkbox.
     */
    renderSwitch(): VNode;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initSetup(): SETUP;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
}
