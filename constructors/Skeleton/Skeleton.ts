import { type SkeletonProps } from './props'

export type SkeletonClassesList = {
  classText: string
  classBackground: string
  classBorder: string
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
   */
  static getClassesList (className: string): SkeletonClassesList {
    return {
      classText: `${className}__text`,
      classBackground: `${className}__background`,
      classBorder: `${className}__border`
    }
  }
}
