// import { type PropType } from 'vue'

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type SkeletonProps = {
  // Tokens
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaultsSkeleton: SkeletonProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}

/**
 * Constructor for property.<br>
 * Конструктор для свойства.
 */
export const propsSkeleton = {
  // Tokens
  ...{
    // :prop [!] System label / Системная метка
    active: Boolean
    // :prop [!] System label / Системная метка
  }
}
