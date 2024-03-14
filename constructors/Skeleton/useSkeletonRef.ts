import { computed, type ComputedRef, inject, type PropType } from 'vue'

import {
  Skeleton,
  type SkeletonClassesList
} from './Skeleton'

import { type ConstrItem } from '../../types/constructor'

import { SKELETON_NAME_STATUS } from './typesBasic'

export type UseSkeletonItem = {
  isSkeleton: ComputedRef<boolean>
  classSkeleton: ComputedRef<ConstrItem>
  classesList: SkeletonClassesList
}

export type UseSkeletonSetup = {
  isSkeleton: ComputedRef<boolean>
}

export type UseSkeletonProps = {
  skeleton?: boolean
}

export const usePropsSkeleton = {
  skeleton: [Boolean] as PropType<UseSkeletonProps['skeleton']>
}

/**
 * Returns the property for implementing the select.<br>
 * Возвращает свойство для внедрения селекта.
 * @param props input data /<br>входные данные
 * @param name design names /<br>названия дизайна
 * @param className class name /<br>название класса
 */
export const useSkeletonRef = function (
  props: UseSkeletonProps,
  name: string = 'd',
  className: string = 'is-skeleton'
): UseSkeletonItem {
  const status = inject<ComputedRef<boolean>>(SKELETON_NAME_STATUS)
  const isSkeleton = computed(() => {
    return Boolean((status && status.value) || props?.skeleton)
  })

  return {
    isSkeleton,
    classSkeleton: computed(() => {
      return {
        [`${className}--skeleton`]: isSkeleton.value
      }
    }),
    classesList: Skeleton.getClassesList(`${name}-skeleton`)
  }
}
