import { type VNode } from 'vue';
import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract';
import { SkeletonItemRef } from './SkeletonItemRef';
import { type ConstrOptions, type ConstrStyles } from '../../types/constructor';
import { type SkeletonItemProps } from './props';
import { type SkeletonItemClasses, type SkeletonItemComponents, type SkeletonItemEmits, type SkeletonItemExpose, type SkeletonItemSetup, type SkeletonItemSlots } from './types';
/**
 * SkeletonItemDesign
 */
export declare class SkeletonItemDesign<COMP extends SkeletonItemComponents, SETUP extends SkeletonItemSetup, EXPOSE extends SkeletonItemExpose, CLASSES extends SkeletonItemClasses, P extends SkeletonItemProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, SkeletonItemEmits, SETUP, EXPOSE, SkeletonItemSlots, CLASSES, P> {
    protected readonly item: SkeletonItemRef;
    /**
     * Constructor
     * @param name class name /<br>название класса
     * @param props properties /<br>свойства
     * @param options list of additional parameters /<br>список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SkeletonItemEmits, P>);
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
