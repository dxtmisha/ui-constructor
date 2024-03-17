import { computed, type ComputedRef, inject, provide } from 'vue'

import { Skeleton, type SkeletonClassesList } from './Skeleton'

import { type SkeletonProps } from './props'

import { SKELETON_NAME_STATUS } from './typesBasic'

/**
 * Class for managing the main component of the skeleton.<br>
 * Класс для управления главного компонента скелета.
 */
export class SkeletonRef {
  protected readonly skeleton: Skeleton
  readonly isActive: ComputedRef

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param className class name /<br>название класса
   */
  constructor (
    props: SkeletonProps,
    className: string = 'is-skeleton'
  ) {
    const status = inject<ComputedRef<boolean> | undefined>(
      SKELETON_NAME_STATUS,
      undefined
    )
    this.skeleton = new Skeleton(props, className)
    this.isActive = computed(() => (status && status.value) || this.skeleton.isActive())

    provide(SKELETON_NAME_STATUS, this.isActive)
  }

  /**
   * Returns the list of available classes.<br>
   * Возвращает список доступных классов.
   */
  getClasses (): SkeletonClassesList {
    return this.skeleton.getClasses()
  }
}
