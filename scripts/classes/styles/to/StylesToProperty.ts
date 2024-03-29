import { toCamelCase } from '../../../../functions/toCamelCase'

import { PropertiesTool } from '../../properties/PropertiesTool'

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

import { PropertyKey } from '../../../types/property'

import { STYLE_TYPES } from '../../../config/style'

/**
 * CSS class for converting to CSS property.<br>
 * Класс для преобразования в свойство CSS.
 */
export class StylesToProperty extends StylesToAbstract {
  /**
   * Acquiring full ownership.<br>
   * Получения полного свойства.
   */
  protected treatment (): string[] {
    const data: string[] = []

    if (
      this.property?.previous &&
      this.property.previous?.[PropertyKey.sort] !== this.item?.[PropertyKey.sort]
    ) {
      data.push('')
    }

    if (this.item?.[PropertyKey.varKey]) {
      data.push(this.getVar())
    }

    data.push(this.getPropertyValue())

    return data
  }

  /**
   * Generating values for variables.
   * Генерация значений для переменных.
   */
  private getVar () {
    const {
      design,
      component
    } = this.property
    const name = this.getName()
    const value = this.getValue()

    return `--${PropertiesTool.getComponentName(design, component)}-${name}: ${value};`
  }

  /**
   * Generating value for property.<br>
   * Генерация значения для свойства.
   */
  private getPropertyValue (): string {
    const name = this.getName()
    const value = this.getValue() ?? 'unset'

    if (
      this.item?.[PropertyKey.modification] !== false &&
      STYLE_TYPES.indexOf(name) !== -1
    ) {
      return `@include ${toCamelCase(name)}(#{${value}});`
    }

    return `${name}: ${StylesTool.toFunctionCss(value)};`
  }
}
