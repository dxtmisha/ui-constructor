import { type ComputedRef } from 'vue'
import { type ConstrClass } from '../../types/constructor'
import { type SkeletonClassesList } from './Skeleton'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SkeletonComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type SkeletonEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type SkeletonSetup = {
  isActive: ComputedRef<boolean>

  slotDefault: SkeletonClassesList
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type SkeletonExpose = {
  isActive: SkeletonSetup['isActive']
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type SkeletonSlots = {
  default? (props: SkeletonSetup['slotDefault']): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type SkeletonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
