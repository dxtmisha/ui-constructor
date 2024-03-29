import { type ConstrClass } from '../../../types/constructor'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ConstructorsComponents = {
  // componentName: object
}

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type ConstructorsEmits = {
  // load: [value: string]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type ConstructorsSetup = {
  // TODO
}

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type ConstructorsExpose = {
  // TODO
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type ConstructorsSlots = {
  // default? (props: any): any
}

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type ConstructorsClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
