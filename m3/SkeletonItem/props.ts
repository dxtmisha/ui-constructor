// import { type PropType } from 'vue'

import {
  SkeletonItemProps,
  defaultsSkeletonItem,
  propsSkeletonItem
} from '../../constructors/SkeletonItem/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  text?: boolean
  background?: boolean
  backgroundVariant?: boolean
  border?: boolean
  borderVariant?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<SkeletonItemProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsSkeletonItem as Props,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsSkeletonItem,
  ...{
    // :prop [!] System label / Системная метка
    text: Boolean,
    background: Boolean,
    backgroundVariant: Boolean,
    border: Boolean,
    borderVariant: Boolean
    // :prop [!] System label / Системная метка
  }
}
