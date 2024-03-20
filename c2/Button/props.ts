import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon'],
  size: ['x', 'xs', 'sm', 'md', 'lg', 'xl'],
  palette: ['carmine', 'iris', 'redfish', 'goldenrod', 'asparagus', 'slate', 'gray', 'alpha', 'pistachio', 'mint', 'jade', 'teal', 'celestial', 'indigo', 'orchid', 'cerise', 'informative', 'positive', 'negative', 'neutral']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  loading?: boolean
  readonly?: boolean
  adaptive?: 'icon'
  intent?: boolean
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  ghost?: boolean
  size?: 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  palette?: 'carmine' | 'iris' | 'redfish' | 'goldenrod' | 'asparagus' | 'slate' | 'gray' | 'alpha' | 'pistachio' | 'mint' | 'jade' | 'teal' | 'celestial' | 'indigo' | 'orchid' | 'cerise' | 'informative' | 'positive' | 'negative' | 'neutral'
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
    primary: true,
    size: 'md'
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
    intent: Boolean,
    primary: {
      type: Boolean,
      default: defaults?.primary
    },
    secondary: Boolean,
    outline: Boolean,
    ghost: Boolean,
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    palette: String as PropType<PropsToken['palette']>
    // :prop [!] System label / Системная метка
  }
}
