import { type ShallowRef } from 'vue'
import { type ConstrClass } from '../../types/constructor'
import { type InputValidationItem } from './typesBasic'

import {
  type UseLabelSetup,
  type UseLabelSlots
} from '../uses/ref/useLabel'
import { type UseEnabledSetup } from '../uses/ref/useEnabled'
import {
  type UseProgressComponent,
  type UseProgressSetup
} from '../Progress/useProgressRef'
import {
  type UseFieldMessageComponent,
  type UseFieldMessageSetup
} from '../FieldMessage/useFieldMessageRef'

/**
 * Interface for describing which components need to be connected for work.<br>
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputComponents =
  UseProgressComponent &
  UseFieldMessageComponent &
  {
    icon: object
  }

/**
 * Type describing available events.<br>
 * Тип, описывающий доступные события.
 */
export type InputEmits = {
  input: [
    event: InputEvent | Event,
    value: InputValidationItem
  ],
  'update:value': [value: any],
  'update:modelValue': [value: any],
  change: [
    event: InputEvent | Event,
    value: InputValidationItem
  ]
}

/**
 * Interface for describing what property setup returns.<br>
 * Интерфейс для описания, какое свойство возвращает setup.
 */
export type InputSetup<V = string> =
  UseLabelSetup &
  UseEnabledSetup &
  UseProgressSetup &
  UseFieldMessageSetup &
  {
    value: ShallowRef<V | undefined>

    checkValidity: () => boolean
    validationMessage: ShallowRef<string>

    onInput (event: InputEvent | Event): void
  }

/**
 * Type describing available properties.<br>
 * Тип, описывающий доступные свойства.
 */
export type InputExpose = {
  value: InputSetup['value']

  checkValidity: InputSetup['checkValidity']
  validationMessage: InputSetup['validationMessage']
}

/**
 * Type describing available slots.<br>
 * Тип, описывающий доступные слоты.
 */
export type InputSlots =
  UseLabelSlots &
  {
    // none
  }

/**
 * Type describing subclasses.<br>
 * Тип, описывающий подклассы.
 */
export type InputClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
