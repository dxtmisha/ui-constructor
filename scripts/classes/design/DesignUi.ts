import { config } from 'dotenv'
import { isFilled } from '../../../functions/isFilled'
import { toKebabCase } from '../../../functions/toKebabCase'

import { PropertiesCache } from '../properties/PropertiesCache'

import { Styles } from '../styles/Styles'
import { DesignConstructor } from './DesignConstructor'
import { DesignComponent } from './DesignComponent'
import { DesignIcons } from './DesignIcons'

import { LibraryItems } from '../library/LibraryItems'

import { LibraryIndex } from '../library/LibraryIndex'
import { LibraryFlags } from '../library/LibraryFlags'
import { LibraryMedia } from '../library/LibraryMedia'

import { LibraryList } from '../library/LibraryList'
import { LibraryPlugin } from '../library/LibraryPlugin'
import { LibraryMain } from '../library/LibraryMain'

import { LibraryStyle } from '../library/LibraryStyle'
import { LibraryTypes } from '../library/LibraryTypes'

import { LibraryPackage } from '../library/LibraryPackage'

config()

/**
 * A class for updating styles and tokens.<br>
 * Класс для обновления стилей и токенов.
 */
export class DesignUi {
  protected readonly components: LibraryItems

  /**
   * Constructor
   * @param name component name /<br>названия компонента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly name: string = ''
  ) {
    this.components = new LibraryItems()
  }

  /**
   * Returns the name as an array.<br>
   * Возвращает название в виде массива.
   */
  protected get names (): string[] {
    return this.name.split('.', 2)
  }

  /**
   * Returns the design name by the component name.<br>
   * Возвращает название дизайна по имени компонента.
   */
  protected get design (): string {
    return toKebabCase(this.names?.[0] ?? '').trim()
  }

  /**
   * Returns the component name by its name.<br>
   * Возвращает название компонента по имени.
   */
  protected get component (): string {
    return toKebabCase(this.names?.[1] ?? '').trim()
  }

  /**
   * Initialization of the component.<br>
   * Инициализация компоненты.
   */
  make (): void {
    PropertiesCache.clear()

    new Styles().make()

    this.makeConstructorComponent()

    new LibraryIndex(this.components).make()
    new LibraryFlags(this.components).make()
    new LibraryMedia(this.components).make()

    new LibraryList(this.components).make()
    new LibraryPlugin(this.components).make()
    new LibraryMain(this.components).make()

    new LibraryStyle(this.components).make()
    new LibraryTypes(this.components).make()

    new LibraryPackage(this.components).make()
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   * @param design design names /<br>названия дизайна
   */
  protected isDesign (design: string): boolean {
    const designOriginal = this.design

    return !isFilled(designOriginal) || designOriginal === design
  }

  /**
   * Are there component names in the passed names.<br>
   * Есть ли названия компонентов в передаваемых названиях.
   * @param component component name /<br>название компонента
   */
  protected isComponent (component: string): boolean {
    const componentOriginal = this.component

    return !isFilled(this.component) || componentOriginal === component
  }

  /**
   * Creates or updates the list of components.<br>
   * Создает или обновляет список компонентов.
   */
  protected makeConstructorComponent (): this {
    const designs = this.components.get()
    const componentDef = this.component

    if (componentDef !== '') {
      new DesignConstructor(`d.${componentDef}`).make()
      new DesignComponent(`${this.design}.${componentDef}`).make()
    } else {
      designs.forEach(design => {
        if (this.isDesign(design.name)) {
          new DesignIcons(design.name).make()

          design.components.forEach(component => {
            if (this.isComponent(component.name)) {
              console.log(`Component update: ${component.alias}`)

              new DesignConstructor(`d.${component.name}`).make()
              new DesignComponent(component.alias).make()
            }
          })
        }
      })
    }

    return this
  }
}
