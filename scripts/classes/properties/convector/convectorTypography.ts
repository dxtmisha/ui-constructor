import { isString } from '../../../../functions/isString'
import { type PropertyItemInput } from '../../../types/property'

/**
 * Conversion for working with the typography type.<br>
 * Конвертация для работы с типом типография.
 * @param item values for conversion /<br>значения для преобразования
 */
export function convectorTypography (item: PropertyItemInput): void {
  if (isString(item?.value)) {
    item.value = {
      basic: item.value
    }
  }
}
