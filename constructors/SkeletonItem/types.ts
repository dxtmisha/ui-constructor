import { type ConstrClass } from '../../types/constructor'
import { type UseSkeletonSetup } from '../Skeleton/useSkeletonRef'
import type { ComputedRef } from 'vue'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SkeletonItemComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type SkeletonItemEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type SkeletonItemSetup =
  UseSkeletonSetup &
  {
    label: ComputedRef<string>
  }

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type SkeletonItemExpose = {
  // none
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type SkeletonItemSlots = {
  default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type SkeletonItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
