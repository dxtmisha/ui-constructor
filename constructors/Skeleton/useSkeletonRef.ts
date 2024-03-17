import { computed, type ComputedRef, inject, type PropType } from 'vue'

import {
  Skeleton,
  type SkeletonClassesList
} from './Skeleton'

import { type ConstrItem } from '../../types/constructor'

import { SKELETON_NAME_STATUS } from './typesBasic'

export type UseSkeletonSetup = {
  isSkeleton: ComputedRef<boolean>
  classesSkeleton: SkeletonClassesList
}

export type UseSkeletonProps = {
  skeleton?: boolean
}

export const usePropsSkeleton = {
  skeleton: [Boolean] as PropType<UseSkeletonProps['skeleton']>
}

export type UseSkeletonItem = {
  isSkeleton: ComputedRef<boolean>
  classSkeleton: ComputedRef<ConstrItem>
  classesSkeleton: SkeletonClassesList
  setup: UseSkeletonSetup
}

/**
 * Returns the property for implementing the select.<br>
 * Возвращает свойство для внедрения селекта.
 * @param props input data /<br>входные данные
 * @param className class name /<br>название класса
 */
export const useSkeletonRef = function (
  props: UseSkeletonProps,
  className: string = 'd'
): UseSkeletonItem {
  const name = `${className}-skeleton`
  const status = inject<ComputedRef<boolean> | undefined>(
    SKELETON_NAME_STATUS,
    undefined
  )
  const isSkeleton = computed(() => {
    return Boolean((status && status.value) || props?.skeleton)
  })

  const classesSkeleton = Skeleton.getClassesList(name)

  return {
    isSkeleton,
    classSkeleton: computed(() => {
      return {
        [`${name}--active`]: isSkeleton.value
      }
    }),
    classesSkeleton,
    setup: {
      isSkeleton,
      classesSkeleton
    }
  }
}
