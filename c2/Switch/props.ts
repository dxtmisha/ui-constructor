// import { type PropType } from 'vue'

import {
  SwitchProps,
  defaultsSwitch,
  propsSwitch
} from '../../constructors/Switch/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  required?: boolean
  right?: boolean
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<SwitchProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsSwitch as Props,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsSwitch,
  ...{
    // :prop [!] System label / Системная метка
    required: Boolean,
    right: Boolean,
    focus: Boolean,
    disabled: Boolean
    // :prop [!] System label / Системная метка
  }
}
