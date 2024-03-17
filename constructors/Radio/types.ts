import { type ConstrClass } from '../../types/constructor'

import {
  type CheckboxComponents,
  type CheckboxEmits,
  type CheckboxExpose,
  type CheckboxSetup,
  type CheckboxSlots
} from '../Checkbox/types'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RadioComponents = CheckboxComponents

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type RadioEmits = CheckboxEmits

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type RadioSetup = CheckboxSetup

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type RadioExpose = CheckboxExpose

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type RadioSlots = CheckboxSlots

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type RadioClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  item: string
  itemIcon: string
  loading: string
  info: string
  infoLabel: string
  // :classes [!] System label / Системная метка
}
