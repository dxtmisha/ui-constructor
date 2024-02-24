import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  buttonArgs,
  buttonArgsPalette,
  buttonValues,
  iconDescription
} from '../components/button'

import { defaults, propsValues } from '../../m3/Button/props'

export const m3iconDescription: string = iconDescription

export const m3ButtonArgs: StorybookArgs = {
  ...buttonArgs(propsValues, defaults),

  // Tokens
  elevated: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Повышенная кнопка'
  },
  filled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
    },
    description: 'Заполненная кнопка'
  },
  tonal: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Заполненная тональная кнопка'
  },
  outlined: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Контурная кнопка'
  },
  text: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Кнопка текст'
  },
  height: {
    control: StorybookControl.select,
    options: propsValues?.height,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.height },
      type: { summary: propsValues?.height.join(' | ') }
    }
  },
  palette: buttonArgsPalette(propsValues, defaults)
}

export const m3ButtonValues: StorybookArgsValue = buttonValues
