import {
  type StorybookArgs,
  type StorybookArgsItem,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  iconArgsHide,
  iconArgsIcon,
  iconArgsTurn
} from './icon'

export const iconDescription: string = 'Общие кнопки позволяют выполнять большинство действий в пользовательском интерфейсе.'

export const buttonArgs = (
  propsValues: Record<string, (string | boolean)[]>,
  defaults: Record<string, any>
): StorybookArgs => ({
  // Status
  selected: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    }
  },
  iconHide: {
    ...iconArgsHide,
    description: 'Скрывает левую иконку'
  },
  iconTurn: {
    ...iconArgsTurn,
    description: 'Переворачивает правую иконку. Если нет правой, переворачивает левую'
  },
  loading: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    }
  },
  readonly: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    }
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
    }
  },

  // Value
  label: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    }
  },
  icon: {
    ...iconArgsIcon(),
    description: 'Иконка слева'
  },
  iconTrailing: {
    ...iconArgsIcon(),
    description: 'Иконка справа'
  },

  // Style
  adaptive: {
    control: StorybookControl.select,
    options: propsValues?.adaptive,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults?.adaptive },
      type: { summary: propsValues?.adaptive.join(' | ') }
    },
    description: 'Адаптивное скрытие текста кнопки в зависимости от ширины экрана'
  }
})

export const buttonArgsPalette = (
  propsValues: Record<string, (string | boolean)[]>,
  defaults: Record<string, any>
): StorybookArgsItem => ({
  control: StorybookControl.select,
  options: propsValues?.palette,
  table: {
    category: StorybookCategory.token,
    defaultValue: { summary: defaults?.palette },
    type: { summary: propsValues?.palette.join(' | ') }
  },
  description: 'Дополнительные палитры. Использовать только если задача в этом требует'
})

export const buttonValues: StorybookArgsValue = {
  selected: false,
  label: 'Label'
}
