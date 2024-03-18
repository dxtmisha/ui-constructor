import { h, type VNode } from 'vue'

import { CheckboxDesign } from '../Checkbox/CheckboxDesign'

import {
  type SwitchProps
} from './props'
import {
  type SwitchClasses,
  type SwitchComponents,
  type SwitchExpose,
  type SwitchSetup
} from './types'
import type { ConstrOptions } from '../../types/constructor.ts'
import type { CheckboxEmits } from '../Checkbox/types.ts'

/**
 * SwitchDesign
 */
export class SwitchDesign<
  COMP extends SwitchComponents,
  SETUP extends SwitchSetup,
  EXPOSE extends SwitchExpose,
  CLASSES extends SwitchClasses,
  P extends SwitchProps
> extends CheckboxDesign<
  COMP,
  SETUP,
  EXPOSE,
  CLASSES,
  P
> {
  /**
   * Constructor
   * @param name class name /<br>название класса
   * @param props properties /<br>свойства
   * @param options list of additional parameters /<br>список дополнительных параметров
   */
  // eslint-disable-next-line no-useless-constructor
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
  }

  /**
   * Rendering of the checkbox element.<br>
   * Рендеринг элемента checkbox.
   */
  renderSwitch (): VNode {
    const setup = this.setup()

    return h('span', {
      class: setup.classes.value.track
    }, [this.renderChecked()])
  }

  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  protected initSetup (): SETUP {
    return {
      ...super.initSetup(),
      renderChecked: () => this.renderSwitch()
    } as SETUP
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
        infoLabel: this.getSubClass('info__label'),
        track: this.getSubClass('track')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
