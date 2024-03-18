// import { type PropType } from 'vue'

import {
  type CheckboxProps,
  defaultsCheckbox,
  propsCheckbox
} from '../Checkbox/props'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type SwitchProps =
  CheckboxProps &
  {
    // Tokens
    // :type [!] System label / Системная метка
    required?: boolean
    right?: boolean
    focus?: boolean
    disabled?: boolean
    // :type [!] System label / Системная метка
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsSwitch: SwitchProps = {
  ...defaultsCheckbox,

  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsSwitch = {
  ...propsCheckbox,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    required: Boolean,
    right: Boolean,
    focus: Boolean,
    disabled: Boolean
    // :prop [!] System label / Системная метка
  }
}
