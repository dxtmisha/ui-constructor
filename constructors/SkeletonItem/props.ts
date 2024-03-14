import { type PropType } from 'vue'

import {
  usePropsSkeleton,
  type UseSkeletonProps
} from '../Skeleton/useSkeletonRef'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type SkeletonItemProps =
  UseSkeletonProps &
  {
    tag?: string | any
    props?: Record<string, any>

    label?: string
    length?: string | number | [number, number]

    // Tokens
    // :type [!] System label / Системная метка
    text?: boolean
    background?: boolean
    border?: boolean
    // :type [!] System label / Системная метка
  }

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsSkeletonItem: SkeletonItemProps = {
  tag: 'div',
  length: 3,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsSkeletonItem = {
  ...usePropsSkeleton,

  tag: [String, Object] as PropType<SkeletonItemProps['tag']>,
  props: Object as PropType<SkeletonItemProps['props']>,

  label: String as PropType<SkeletonItemProps['label']>,
  length: [String, Number, Array] as PropType<SkeletonItemProps['length']>,

  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    text: Boolean,
    background: Boolean,
    border: Boolean
    // :prop [!] System label / Системная метка
  }
}
