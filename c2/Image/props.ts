// import { type PropType } from 'vue'

import {
  ImageProps,
  defaultsImage,
  propsImage
} from '../../constructors/Image/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // [constructor] value?: string | File
  // [constructor] coordinator?: [number, number?, number?, number?] | number[] | any
  // [constructor] size?: 'auto' | 'contain' | 'cover' | string | number
  // [constructor] x?: string | number
  // [constructor] y?: string | number
  // [constructor] adaptiveGroup?: string
  // [constructor] adaptiveAlways?: boolean
  // [constructor] objectWidth?: string | number
  // [constructor] objectHeight?: string | number
  // [constructor] url?: string
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ImageProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsImage as Props,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsImage,
  ...{
    // :prop [!] System label / Системная метка
    turn: Boolean,
    disabled: Boolean,
    hide: Boolean,
    adaptive: Boolean
    // :prop [!] System label / Системная метка
  }
}
