import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { SkeletonRef } from './SkeletonRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type SkeletonProps } from './props';
import { type SkeletonClasses, type SkeletonComponents, type SkeletonEmits, type SkeletonExpose, type SkeletonSetup, type SkeletonSlots } from './types';
/**
 * SkeletonDesign
 */
export declare class SkeletonDesign<COMP extends SkeletonComponents, SETUP extends SkeletonSetup, EXPOSE extends SkeletonExpose, CLASSES extends SkeletonClasses, P extends SkeletonProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, SkeletonEmits, SETUP, EXPOSE, SkeletonSlots, CLASSES, P> {
    protected readonly skeleton: SkeletonRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SkeletonEmits, P>);
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
