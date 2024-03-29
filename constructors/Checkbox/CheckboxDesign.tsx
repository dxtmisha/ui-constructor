import { h, type VNode } from 'vue'

import { Skeleton, type SkeletonClassesList } from '../Skeleton/Skeleton'

import { DesignConstructorAbstract } from '../../classes/design/DesignConstructorAbstract'
import { CheckboxRef } from './CheckboxRef'

import { useLabel } from '../uses/ref/useLabel'
import { useEnabled } from '../uses/ref/useEnabled'
import { useProgressRef } from '../Progress/useProgressRef'
import { useFieldMessageRef } from '../FieldMessage/useFieldMessageRef'

import {
  type ConstrOptions,
  type ConstrStyles
} from '../../types/constructor'
import {
  type CheckboxProps
} from './props'
import type { InputValidationItem } from '../Input/typesBasic'
import {
  type CheckboxClasses,
  type CheckboxComponents,
  type CheckboxEmits,
  type CheckboxExpose,
  type CheckboxSetup,
  type CheckboxSlots
} from './types'

/**
 * CheckboxDesign
 */
export class CheckboxDesign<
  COMP extends CheckboxComponents,
  SETUP extends CheckboxSetup,
  EXPOSE extends CheckboxExpose,
  CLASSES extends CheckboxClasses,
  P extends CheckboxProps
> extends DesignConstructorAbstract<
  HTMLLabelElement,
  COMP,
  CheckboxEmits,
  SETUP,
  EXPOSE,
  CheckboxSlots,
  CLASSES,
  P
> {
  protected readonly checkbox: CheckboxRef
  protected readonly classesSkeleton: SkeletonClassesList
  protected type: string = 'checkbox'

  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  constructor (
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CheckboxEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.checkbox = new CheckboxRef(
      props,
      this.element,
      (type: string & keyof CheckboxEmits, event: Event, value: InputValidationItem) => {
        this.emits?.(
          type as 'input',
          event,
          value
        )
      }
    )

    this.classesSkeleton = Skeleton.getClassesListByDesign(this.name[0])

    this.init()
  }

  /**
   * Rendering of the main input.<br>
   * Рендеринг главного input.
   */
  renderInput (): VNode {
    const setup = this.setup()

    return h('input', {
      class: setup.classes.value.input,
      name: this.props.name,
      type: this.type,
      checked: setup.value.value,
      readonly: this.props.readonly,
      disabled: setup.isDisabled.value,
      value: this.props?.valueVariant ?? '1',
      on: this.props.on,
      onInput: setup.onInput
    })
  }

  /**
   * Rendering of the hidden input.<br>
   * Рендеринг скрытого input.
   */
  renderInputHidden (): VNode {
    return h('input', {
      name: this.props.name,
      type: 'hidden',
      value: '0'
    })
  }

  /**
   * Rendering of the main body.<br>
   * Рендеринг главного body.
   */
  renderBody (): VNode {
    const setup = this.setup()
    const children: any[] = [setup.renderChecked()]

    if (setup.isLabel.value) {
      children.push(setup.renderInfo())
    }

    return h('span', {
      class: setup.classes.value.body
    }, children)
  }

  /**
   * Rendering of the checkbox element.<br>
   * Рендеринг элемента checkbox.
   */
  renderChecked (): VNode {
    const setup = this.setup()
    const children: any[] = [
      setup.renderProgress(),
      h('span', {
        class: [
          setup.classes.value.itemIcon,
          setup.classesSkeleton.classBackgroundVariant
        ]
      }, [
        this.components.renderOne(
          'icon',
          setup.iconBind.value
        )
      ])
    ]

    this.components.renderAdd(
      children,
      'ripple',
      {
        disabled: setup.isDisabled.value
      }
    )

    return h('span', {
      class: setup.classes.value.item
    }, children)
  }

  /**
   * Rendering of the informational text element.<br>
   * Рендеринг элемента информационного текста.
   */
  renderInfo (): VNode {
    const setup = this.setup()
    const children: any[] = [
      ...setup.renderLabel(),
      ...setup.renderFieldMessage()
    ]

    return h('span', {
      class: setup.classes.value.info
    }, children)
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
      value: this.checkbox.value,
      iconBind: this.checkbox.iconBind,

      checkValidity: this.checkbox.checkValidity,
      validationMessage: this.checkbox.validationMessage,

      renderInput: () => this.renderInput(),
      renderInputHidden: () => this.renderInputHidden(),
      renderBody: () => this.renderBody(),
      renderChecked: () => this.renderChecked(),
      renderInfo: () => this.renderInfo(),

      onInput: this.checkbox.onInput,

      ...useLabel(
        this.props,
        this.slots,
        [
          this.getSubClass(['info', 'label']),
          this.classesSkeleton.classText
        ]
      ),

      ...useEnabled(this.props),

      ...useProgressRef(
        this.props,
        this.components,
        this.getSubClass('loading'),
        {
          circular: true,
          inverse: true,
          dense: true
        }
      ),

      ...useFieldMessageRef(
        this.props,
        this.components,
        this.checkbox.validationMessage
      ),

      classesSkeleton: this.classesSkeleton
    } as SETUP
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose (): EXPOSE {
    const setup = this.setup()

    return {
      value: setup.value,

      checkValidity: setup.checkValidity,
      validationMessage: setup.validationMessage
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  protected initClasses (): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        body: this.getSubClass('body'),
        item: this.getSubClass('item'),
        itemIcon: this.getSubClass('item__icon'),
        loading: this.getSubClass('loading'),
        info: this.getSubClass('info'),
        infoLabel: this.getSubClass('info__label')
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
    const children: any[] = [
      setup.renderInputHidden(),
      setup.renderInput(),
      setup.renderBody()
    ]

    return h('label', {
      ...this.getAttrs(),
      ref: this.element,
      class: setup.classes.value.main
    }, children)
  }
}
