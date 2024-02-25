import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  buttonArgs,
  buttonArgsHeight,
  buttonArgsOutlined,
  buttonArgsPalette,
  buttonArgsText,
  buttonValues,
  buttonDescription
} from '../components/button'

import { defaults, propsValues } from '../../m3/Button/props'

export const m3ButtonDescription: string = buttonDescription

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
  outlined: buttonArgsOutlined,
  text: buttonArgsText,
  height: buttonArgsHeight(propsValues, defaults),
  palette: buttonArgsPalette(propsValues, defaults)
}

export const m3ButtonValues: StorybookArgsValue = buttonValues
