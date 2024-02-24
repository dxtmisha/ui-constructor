import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import { m3ImageArgs } from './image'
import { defaults, propsValues } from './../../m3/Icon/props'

export const m3IconDescription: string = 'Компонент для работы с иконками и аватарами.'

export const m3IconArgs: StorybookArgs = {
  // Status
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  turn: m3ImageArgs.turn,
  disabled: m3ImageArgs.disabled,
  hide: m3ImageArgs.hide,
  icon: {
    ...m3ImageArgs.value,
    description: 'Иконка обычного режима'
  },
  iconActive: {
    ...m3ImageArgs.value,
    description: 'Иконка активного режима'
  },

  // Style
  animationType: {
    control: StorybookControl.select,
    options: propsValues.animationType,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults.animationType },
      type: { summary: propsValues.animationType.join(' | ') }
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
  overlay: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление фона к элементу'
  },
  dynamic: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Добавление реакции на события hover/active/focus'
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
  },

  // Tokens
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.size.join(' | ') }
    }
  },
  rounded: {
    control: StorybookControl.select,
    options: propsValues.rounded,
    table: {
      category: StorybookCategory.token,
      type: { summary: propsValues.rounded.join(' | ') }
    }
  }
}

export const m3IconValues: StorybookArgsValue = {
  active: false,
  turn: false,
  disabled: false,
  hide: false,
  icon: 'visibility',
  iconActive: 'visibility_off'
}
