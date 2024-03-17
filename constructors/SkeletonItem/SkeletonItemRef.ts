import { computed, type ComputedRef } from 'vue'

import { SkeletonItem } from './SkeletonItem'
import { type UseSkeletonItem, useSkeletonRef } from '../Skeleton/useSkeletonRef'

import { type SkeletonClassesList } from '../Skeleton/Skeleton'
import { type SkeletonItemProps } from './props'

/**
 * Class for working with the select item (Ref).<br>
 * Класс для работы с элементом селекта (Ref).
 */
export class SkeletonItemRef {
  protected readonly item: SkeletonItem
  protected readonly skeleton: UseSkeletonItem

  readonly label: ComputedRef<string>
  readonly isSkeleton: ComputedRef<boolean>
  readonly classesSkeleton: SkeletonClassesList

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param name design names /<br>названия дизайна
   */
  constructor (
    props: SkeletonItemProps,
    name: string = 'd'
  ) {
    this.item = new SkeletonItem(props)
    this.skeleton = useSkeletonRef(props, name)

    this.label = computed(() => (this.skeleton.isSkeleton.value && this.item.getLabel()) || '&nbsp;')
    this.isSkeleton = this.skeleton.isSkeleton
    this.classesSkeleton = this.skeleton.classesSkeleton
  }
}
