import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon', 'sm', 'md'],
  height: ['sm', 'md', 'lg'],
  palette: ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'grey', 'greyBlue', 'white', 'black', 'blackLight']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  loading?: boolean
  readonly?: boolean
  adaptive?: 'icon' | 'sm' | 'md'
  height?: 'sm' | 'md' | 'lg'
  contained?: boolean
  outlined?: boolean
  text?: boolean
  palette?: 'red' | 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'green' | 'lightGreen' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deepOrange' | 'brown' | 'grey' | 'greyBlue' | 'white' | 'black' | 'blackLight'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsButton as Props,
  ...{
    // :default [!] System label / Системная метка
    height: 'md',
    contained: true
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsButton,
  ...{
    // :prop [!] System label / Системная метка
    focus: Boolean,
    disabled: Boolean,
    selected: Boolean,
    loading: Boolean,
    readonly: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>,
    height: {
      type: String as PropType<PropsToken['height']>,
      default: defaults?.height
    },
    contained: {
      type: Boolean,
      default: defaults?.contained
    },
    outlined: Boolean,
    text: Boolean,
    palette: String as PropType<PropsToken['palette']>
    // :prop [!] System label / Системная метка
  }
}
