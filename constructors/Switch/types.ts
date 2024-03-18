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
export type SwitchComponents = CheckboxComponents

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type SwitchEmits = CheckboxEmits

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type SwitchSetup = CheckboxSetup

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type SwitchExpose = CheckboxExpose

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type SwitchSlots = CheckboxSlots

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type SwitchClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  body: string
  item: string
  itemIcon: string
  loading: string
  info: string
  infoLabel: string
  track: string
  // :classes [!] System label / Системная метка
}
