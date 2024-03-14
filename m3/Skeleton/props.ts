// import { type PropType } from 'vue'

import {
  SkeletonProps,
  defaultsSkeleton,
  propsSkeleton
} from '../../constructors/Skeleton/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<SkeletonProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsSkeleton as Props,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsSkeleton,
  ...{
    // :prop [!] System label / Системная метка
    active: Boolean
    // :prop [!] System label / Системная метка
  }
}
