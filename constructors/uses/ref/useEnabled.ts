import { computed, type ComputedRef, type PropType } from 'vue'

import { type ProgressProps } from '../../Progress/props'

export type UseEnabledSetup = {
  disabledBind: ComputedRef<boolean | undefined>

  isEnabled: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isProgress: ComputedRef<boolean>
}

export type UseEnabledProps = {
  loading?: boolean | ProgressProps
  readonly?: boolean
  disabled?: boolean
}

export const usePropsEnabled = {
  progress: [Object, Boolean] as PropType<UseEnabledProps['loading']>,
  readonly: Boolean,
  disabled: Boolean
}

/**
 * Use to control the activity of the item.<br>
 * Использование для управления активности элемента.
 * @param props input property /<br>входное свойство
 */
export const useEnabled = function (
  props: UseEnabledProps
): UseEnabledSetup {
  const isDisabled = (): boolean => Boolean(props?.disabled)

  return {
    disabledBind: computed<boolean | undefined>(() => isDisabled() || undefined),

    isEnabled: computed(() =>
      !props?.disabled &&
      !props?.readonly &&
      !props?.loading
    ),
    isReadonly: computed(() => Boolean(props?.readonly)),
    isDisabled: computed(() => isDisabled()),
    isProgress: computed(() => Boolean(props?.loading))
  }
}
