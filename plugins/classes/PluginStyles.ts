import { PluginTool } from './PluginTool'

import data from '../../library/components.json'

const PLUGIN_STYLES_NONE = `// ${data.name}-none`
const PLUGIN_STYLES_PROPERTIES_NONE = `// ${data.name}-mode-none`

/**
 * Class for transforming into non-standard style properties.<br>
 * Класс для преобразования в нестандартные свойства стилей.
 */
export class PluginStyles {
  /**
   * Constructor
   * @param id file identification /<br>идентификация файла
   * @param code file content /<br>содержимое файла
   * @param design design names /<br>названия дизайна
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly id: string,
    protected readonly code: string,
    protected readonly design: string = data.designMain
  ) {
  }

  /**
   * Initialization of the transformation of all style properties.<br>
   * Инициализация преобразования всех свойств стилей.
   */
  init (): string {
    if (this.is()) {
      let code = this.importDesign(this.code)

      code = this.initColors(code)
      code = this.initVars(code)
      code = this.initProperties(code)
      console.log(this.id, code)

      return code
    }

    return this.code
  }

  /**
   * Checks whether this file needs to be transformed.<br>
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  protected is (): boolean {
    return PluginTool.isCss(this.id) && !this.code.match(PLUGIN_STYLES_NONE)
  }

  /**
   * Connects a list of tokens to work with values.<br>
   * Подключает список токенов для работы со значениями.
   * @param code file content /<br>содержимое файла
   */
  protected importDesign (code: string): string {
    const importPath = `${data.name}/${this.design}/properties`

    if (!code.match(importPath)) {
      return `@import '${importPath}';\r\n${code}`
    }

    return code
  }

  /**
   * Removes default values from colors.<br>
   * Удаляет значения по умолчанию у цветов.
   * @param code file content /<br>содержимое файла
   */
  protected initColors (code: string): string {
    if (code.match(/#[0-9abcdf]{4,6}|rgb|rgba/i)) {
      return code.replace(/(?<=var\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\([^)]+\))/ig, () => '')
    }

    return code
  }

  /**
   * Transforms property values under the correct name.<br>
   * Преобразовывает значения свойств под правильным именем.
   * @param code file content /<br>содержимое файла
   */
  protected initVars (code: string): string {
    const list: string[] | undefined = (data.vars as any)?.[this.design]

    if (
      list &&
      code.match(/var\([^)]+\)/)
    ) {
      return code.replace(/(?<=var\(--)([^,) ]+)(?=[,) ])/ig, (value) => {
        if (list.indexOf(value) !== -1) {
          return `${this.design}-${value}`
        }

        return value
      })
    }

    return code
  }

  /**
   * Transformation of all properties into non-standard ones used through mixins.<br>
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   * @param code file content /<br>содержимое файла
   */
  protected initProperties (code: string): string {
    const properties: Record<string, string> = data.modificationProperties
    const reg = new RegExp(`(?<=^\\s*)(${Object.keys(properties).join('|')}):([^;\r\n]+)(;*)(?![^\r\n]*${PLUGIN_STYLES_PROPERTIES_NONE})`, 'igm')

    if (code.match(new RegExp(reg, 'im'))) {
      return code.replace(reg, (
        _,
        name: string,
        value: string,
        end: string
      ) => {
        const data = value.trim()

        return `@include ${properties?.[name.trim()]}(${data.match(/[()]/) ? `#{${data}}` : data})${end}`
      })
    }

    return code
  }
}
