import { forEach } from '../../../../functions/forEach'
import { toCamelCase } from '../../../../functions/toCamelCase'

import { PropertiesToAbstract } from './PropertiesToAbstract'
import {
  PropertiesItems,
  type PropertiesItemsMedia
} from '../PropertiesItems'

import {
  type PropertyItem,
  PropertyKey,
  PropertyType
} from '../../../types/property'

/**
 * A class for transforming class.<br>
 * Класс для преобразования class.
 */
export class PropertiesToMedia extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '040-media'
  private readonly media: PropertiesItemsMedia

  /**
   * Constructor
   * @param items data for processing /<br>данные для обработки
   */
  constructor (protected items: PropertiesItems) {
    super(items)
    this.media = this.items.getMedia()
  }

  protected init (): void {
    this.items.findVariable([PropertyType.media, PropertyType.mediaMax]).forEach(({
      design,
      name,
      item
    }) => {
      item[PropertyKey.name] = this.getName(design, name, item)
    })
  }

  /**
   * @param design design name /<br>название дизайна
   * @param name base property name /<br>базовое название свойства
   * @param item current element /<br>текущий элемент
   */
  private getName (
    design: string,
    name: string,
    item: PropertyItem
  ) {
    const values = this.toValueForMedia(
      design,
      this.items.getReName(name, item).split(',')
    )

    if (values.length > 1) {
      return `(min-width: ${values?.[0] || '0px'}) and (max-width: calc(${values?.[1] || '1980px'} - 1px))`
    } else if (item?.[PropertyKey.variable] === PropertyType.mediaMax) {
      return `(max-width: calc(${values?.[0] || '1980px'} - 1px))`
    } else {
      return `(min-width: ${values?.[0] || '0px'})`
    }
  }

  /**
   * Updates data if the alias is entered.<br>
   * Изменяет данные, если введен алиас.
   * @param design design name /<br>название дизайна
   * @param values a list of values for media /<br>список значений для медиа
   */
  private toValueForMedia (design: string, values: string[]): string[] {
    return forEach(values, value => {
      const key = toCamelCase(value.replace(/^media/, ''))
      const media = this.media?.[design]?.[key]?.value

      return (typeof media === 'string' && media) || key
    })
  }
}
