import { computed, type ComputedRef, type PropType, type VNode } from 'vue'
import { getBind } from '../../functions/render/getBind.ts'

import { DesignComponents } from '../../classes/design/DesignComponents'

import { type IconProps } from './props'

export type UseIconComponent = {
  icon?: object
}

export type UseIconSetup = {
  iconBind: ComputedRef<IconProps>
  trailingBind?: ComputedRef<IconProps>
  isIcon: ComputedRef<boolean>

  renderIcon (): VNode[]
}

export type UseIconProps = {
  // Values
  icon?: string | IconProps

  // Status
  selected?: boolean
  iconTurn?: boolean
  iconHide?: boolean
}

export type UseIconTrailingProps =
  UseIconProps &
  {
    iconTrailing?: UseIconProps['icon']
  }

export const usePropsIcon = {
  // Values
  icon: [String, Object] as PropType<UseIconProps['icon']>,

  // Status
  selected: Boolean,
  iconTurn: Boolean,
  iconHide: Boolean
}

export const usePropsIconTrailing = {
  ...usePropsIcon,
  iconTrailing: [String, Object] as PropType<UseIconProps['icon']>
}

/**
 * The function returns data for working with the Icon component.<br>
 * Функция возвращает данные для работы с компонентом Icon.
 * @param props input parameter /<br>входной параметр
 * @param components object for working with components /<br>объект для работы с компонентами
 * @param classIcon class name for the component /<br>название класса для компонента
 * @param classIconTrailing class for the second icon /<br>класс для второй иконки
 */
export const useIconRef = function <
  COMP extends UseIconComponent,
  P extends UseIconTrailingProps
> (
  props: P,
  components?: DesignComponents<COMP, P>,
  classIcon = 'is-icon',
  classIconTrailing = 'is-icon-trailing'
): UseIconSetup {
  const iconBind = computed(() => {
    return getBind(
      props?.icon,
      {
        class: classIcon,
        active: props?.selected,
        turn: !props?.iconTrailing && props?.iconTurn,
        hide: props?.iconHide,
        animationType: 'type2',
        start: true,
        'data-event-type': 'icon'
      },
      'icon'
    )
  })

  const trailingBind = 'iconTrailing' in props
    ? computed(() => {
      return getBind(
        props.iconTrailing,
        {
          class: classIconTrailing,
          turn: props?.iconTurn,
          end: true,
          high: true,
          'data-event-type': 'icon-trailing'
        },
        'icon'
      )
    })
    : undefined

  const is = computed(() => Boolean(props?.icon || props?.iconTrailing))

  return {
    iconBind,
    trailingBind,

    isIcon: is,

    renderIcon (): VNode[] {
      const elements: any[] = []

      if (components) {
        if (props?.icon) {
          components.renderAdd(
            elements,
            'icon',
            iconBind.value,
            undefined,
            'icon'
          )
        }

        if (
          trailingBind &&
          props?.iconTrailing
        ) {
          components.renderAdd(
            elements,
            'icon',
            trailingBind.value,
            undefined,
            'iconTrailing'
          )
        }
      }

      return elements
    }
  }
}
