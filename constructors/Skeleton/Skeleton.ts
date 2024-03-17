import { type SkeletonProps } from './props'

export type SkeletonClassesList = {
  classText: string
  classBackground: string
  classBackgroundVariant: string
  classBorder: string
  classBorderVariant: string
}

/**
 * Class for working with the skeleton.<br>
 * Класс для работы со скелетом.
 */
export class Skeleton {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected readonly props: SkeletonProps,
    protected readonly className: string = 'is-skeleton'
  ) {
  }

  /**
   * Checks if the loading mode is enabled.<br>
   * Проверяет, включен ли режим загрузки.
   */
  isActive (): boolean {
    return Boolean(this.props.active)
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов для текуший элемента.
   */
  getClasses (): SkeletonClassesList {
    return Skeleton.getClassesList(this.className)
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   * @param className class name /<br>название класса
   */
  static getClassesList (className: string): SkeletonClassesList {
    return {
      classText: `${className}__text`,
      classBackground: `${className}__background`,
      classBackgroundVariant: `${className}__backgroundVariant`,
      classBorder: `${className}__border`,
      classBorderVariant: `${className}__borderVariant`
    }
  }

  /**
   * Returns a list of available classes by design name.<br>
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name /<br>названия дизайна
   */
  static getClassesListByDesign (design: string): SkeletonClassesList {
    return this.getClassesList(`${design}-skeleton`)
  }
}
