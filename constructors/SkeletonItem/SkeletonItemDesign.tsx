import { h, type VNode } from 'vue'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'

import { SkeletonItemRef } from './SkeletonItemRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type SkeletonItemProps
} from './props'
import {
  type SkeletonItemClasses,
  type SkeletonItemComponents,
  type SkeletonItemEmits,
  type SkeletonItemExpose,
  type SkeletonItemSetup,
  type SkeletonItemSlots
} from './types'

/**
 * SkeletonItemDesign
 */
export class SkeletonItemDesign<
  COMP extends SkeletonItemComponents,
  SETUP extends SkeletonItemSetup,
  EXPOSE extends SkeletonItemExpose,
  CLASSES extends SkeletonItemClasses,
  P extends SkeletonItemProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  SkeletonItemEmits,
  SETUP,
  EXPOSE,
  SkeletonItemSlots,
  CLASSES,
  P
> {
  protected readonly item: SkeletonItemRef

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SkeletonItemEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new SkeletonItemRef(props, this.name[0], this.getName())

    this.init()
  }

  /**
   * Initialization of basic options.<br>
   * Инициализация базовых опций.
   */
  protected makeOptions (): this {
    return this
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {
      isSkeleton: this.item.isSkeleton,

      label: this.item.label
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    // const setup = this.setup()

    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    const classesList = this.item.classesList

    return {
      main: {
        [classesList.classText]: this.props.text,
        [classesList.classBackground]: this.props.background,
        [classesList.classBorder]: this.props.border
      },
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  protected initStyles (): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  protected initRender (): VNode {
    const setup = this.setup()
    const children: any[] = []

    const isObject = typeof this.props.tag === 'object'
    const tag: any = this.props.tag ?? 'div'
    const props = {
      ...this.getAttrs(),
      ...(this.props.props ?? {}),
      ref: this.element,
      class: setup.classes?.value.main
    }

    if (this.slots?.default) {
      children.push(this.slots.default?.({}))
    }

    if (
      isObject ||
      this.slots?.default
    ) {
      return h(tag, props, isObject ? () => children : children)
    } else {
      return h(tag, {
        ...props,
        innerHTML: setup.label.value
      })
    }
  }
}
