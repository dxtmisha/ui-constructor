import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type ChipProps } from './props';
import { type ChipClasses, type ChipComponents, type ChipEmits, type ChipExpose, type ChipSetup, type ChipSlots } from './types';
/**
 * ChipDesign
 */
export declare class ChipDesign<COMP extends ChipComponents, SETUP extends ChipSetup, EXPOSE extends ChipExpose, CLASSES extends ChipClasses, P extends ChipProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, ChipEmits, SETUP, EXPOSE, ChipSlots, CLASSES, P> {
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ChipEmits, P>);
    /**
     * Initialization of basic options.<br>
     * Инициализация базовых опций.
     */
    protected makeOptions(): this;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initSetup(): SETUP;
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.<br>
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
}
