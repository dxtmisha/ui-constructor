import { forEach } from '../../../functions/forEach'

import { Properties } from '../properties/Properties'
import { PropertiesFile } from '../properties/PropertiesFile'
import { PropertiesItems } from '../properties/PropertiesItems'
import { PropertiesScss } from '../properties/PropertiesScss'

import { StylesTool } from './StylesTool'

import { StylesRoot } from './StylesRoot'
import { StylesClasses } from './StylesClasses'

import {
  EXTENSION_STYLE_FILE,
  NAME_CONSTRUCTOR
} from '../../config/property'

const FILE_VAR = 'vars'
const FILE_CLASS = 'classes'
const FILE_PROPERTIES = 'properties'
const FILE_BASIC = 'basic'
const FILE_STYLE = 'style'
const FILE_MAIN = 'main'

const DIR_CLASS = 'classes'

/**
 * Base class for generating basic properties.<br>
 * Базовый класс для генерации базовых свойств.
 */
export class Styles {
  private readonly properties: Properties

  /**
   * Constructor
   */
  constructor () {
    this.properties = new Properties()
  }

  /**
   * Generating all basic data.<br>
   * Генерация всех базовых данных.
   */
  make (): this {
    this.getByDesigns((
      design,
      items
    ) => {
      this.initRoot(design, items)
      this.initClasses(design, items)
      this.initProperties(design, items)
      this.initBasic(design)
    })

    return this
  }

  /**
   * Generating basic variables.<br>
   * Генерация базовых переменных.
   * @param design design name /<br>название дизайна
   * @param items current element /<br>текущий элемент
   */
  protected initRoot (
    design: string,
    items: PropertiesItems
  ): this {
    const data = StylesTool.join(new StylesRoot(items).init())

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_VAR,
      data,
      EXTENSION_STYLE_FILE
    )

    return this
  }

  /**
   * Generating all base classes.<br>
   * Генерация всех базовых классов.
   * @param design design name /<br>название дизайна
   * @param items current element /<br>текущий элемент
   */
  protected initClasses (
    design: string,
    items: PropertiesItems
  ): this {
    const {
      data,
      classes
    } = new StylesClasses(items).init()

    forEach(classes, (item, name) => {
      PropertiesFile.write(
        [...StylesTool.getDir(design), DIR_CLASS],
        name,
        StylesTool.join(item),
        EXTENSION_STYLE_FILE
      )
    })

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_CLASS,
      StylesTool.join(data),
      EXTENSION_STYLE_FILE
    )

    return this
  }

  protected initProperties (
    design: string,
    items: PropertiesItems
  ): this {
    const scss = new PropertiesScss(items)

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_PROPERTIES,
      scss.get(),
      EXTENSION_STYLE_FILE
    )

    return this
  }

  /**
   * Creates files for connection.<br>
   * Создает файлы для подключения.
   * @param design design name /<br>название дизайна
   */
  protected initBasic (design: string): this {
    const dir = StylesTool.getDir(design)

    PropertiesFile.write(
      dir,
      FILE_BASIC,
      [
        `@import "./${FILE_VAR}";`,
        `@import "./${FILE_CLASS}";`,
        `@import "./${FILE_PROPERTIES}";`
      ].join('\r\n'),
      EXTENSION_STYLE_FILE
    )

    PropertiesFile.write(
      dir,
      FILE_STYLE,
      [
        `@import "../styles/${FILE_PROPERTIES}";`,
        `@import "../../styles/${FILE_PROPERTIES}";`,
        '',
        `$designsDesign: '${design}';`,
        `$designsDesigns: ('${design}');`
      ].join('\r\n'),
      EXTENSION_STYLE_FILE
    )

    if (!PropertiesFile.is([...dir, `${FILE_MAIN}.${EXTENSION_STYLE_FILE}`])) {
      PropertiesFile.write(
        dir,
        FILE_MAIN,
        [
          `@import "./${FILE_BASIC}";`,
          '@import "../../styles/properties";',
          '@import "../../styles/init";',
          '',
          '@include initGlobal;',
          `@include initDesignBody('${design}.main');`
        ].join('\r\n'),
        EXTENSION_STYLE_FILE
      )
    }

    return this
  }

  /**
   * Generating a list of properties from a design.<br>
   * Получение списка свойств по дизайну.
   * @param callback data processing function /<br>функция для обработки данных
   */
  private getByDesigns (callback: (design: string, items: PropertiesItems) => void): void {
    const properties = this.properties.get().get()

    this.properties
      .get()
      .getDesigns()
      .forEach(design => {
        if (design !== NAME_CONSTRUCTOR) {
          callback(
            design,
            new PropertiesItems(properties).setFocusDesign(design)
          )
        }
      })
  }
}
