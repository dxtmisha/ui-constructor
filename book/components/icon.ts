import {
  type StorybookArgs,
  type StorybookArgsItem,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import { imageArgs } from './image'

export const iconDescription: string = 'Компонент для работы с иконками и аватарами.'

export const iconArgs = (
  propsValues: Record<string, string[]>,
  defaults: Record<string, any>,
  icons = imageArgs.value?.options
): StorybookArgs => ({
  // Status
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  turn: iconArgsTurn,
  disabled: imageArgs.disabled,
  hide: iconArgsHide,

  // Values
  icon: iconArgsIcon(icons),
  iconActive: iconArgsIconActive(icons),

  // Style
  animationType: {
    control: StorybookControl.select,
    options: propsValues?.animationType,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults?.animationType },
      type: { summary: propsValues?.animationType.join(' | ') }
    },
    description: 'Тип анимации при скрытии элемента'
  },
  animationShow: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Анимация появления после загрузки элемента'
  },
  start: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в начале узла DOM (order: 1)'
  },
  end: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление сортировки элемента в конец узла DOM (order: 9999)'
  },
  high: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление высоко позиционированного элемента (z-index: 16)'
  }
})

export const iconArgsIcon = (icons = imageArgs.value?.options): StorybookArgsItem => ({
  ...imageArgs.value,
  options: icons,
  description: 'Иконка обычного режима'
})

export const iconArgsIconActive = (icons = imageArgs.value?.options): StorybookArgsItem => ({
  ...imageArgs.value,
  options: icons,
  description: 'Иконка активного режима'
})

export const iconArgsTurn: StorybookArgsItem = imageArgs.turn as StorybookArgsItem

export const iconArgsHide: StorybookArgsItem = imageArgs.hide as StorybookArgsItem

export const iconArgsOverlay: StorybookArgsItem = {
  control: StorybookControl.boolean,
  table: {
    category: StorybookCategory.style,
    type: { summary: 'boolean' }
  },
  description: 'Добавление фона к элементу'
}

export const iconArgsDynamic: StorybookArgsItem = {
  control: StorybookControl.boolean,
  table: {
    category: StorybookCategory.style,
    type: { summary: 'boolean' }
  },
  description: 'Добавление реакции на события hover/active/focus'
}

export const iconArgsSize = (
  propsValues: Record<string, string[]>,
  defaults: Record<string, any>
): StorybookArgsItem => ({
  control: StorybookControl.select,
  options: propsValues?.size,
  table: {
    category: StorybookCategory.token,
    defaultValue: { summary: defaults?.size },
    type: { summary: propsValues?.size.join(' | ') }
  }
})

export const iconArgsRounded = (
  propsValues: Record<string, string[]>,
  defaults: Record<string, any>
): StorybookArgsItem => ({
  control: StorybookControl.select,
  options: propsValues?.rounded,
  table: {
    category: StorybookCategory.token,
    defaultValue: { summary: defaults?.rounded },
    type: { summary: propsValues?.rounded.join(' | ') }
  }
})

export const iconValues: StorybookArgsValue = {
  active: false,
  turn: false,
  disabled: false,
  hide: false,
  icon: 'visibility',
  iconActive: 'visibility_off'
}

export const iconText = {
  main: {
    title: 'Icon',
    description: {
      main: 'Компонент для работы с иконками и аватарами.'
    }
  }
}
