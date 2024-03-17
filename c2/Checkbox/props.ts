import { type PropType } from 'vue'

import {
  CheckboxProps,
  defaultsCheckbox,
  propsCheckbox
} from '../../constructors/Checkbox/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<CheckboxProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsCheckbox as Props,

  iconCheckbox: 'check-md',
  iconIndeterminate: 'minus-md',

  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsCheckbox,

  iconCheckbox: {
    type: propsCheckbox.iconCheckbox,
    default: defaults.iconCheckbox
  },
  iconIndeterminate: {
    type: propsCheckbox.iconIndeterminate,
    default: defaults.iconIndeterminate
  },

  ...{
    // :prop [!] System label / Системная метка
    required: Boolean,
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    focus: Boolean,
    disabled: Boolean
    // :prop [!] System label / Системная метка
  }
}
