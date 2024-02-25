import {
  type StorybookArgs,
  type StorybookArgsValue, StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  buttonArgs,
  buttonArgsOutlined,
  buttonArgsPalette,
  buttonArgsText,
  buttonValues,
  buttonDescription,
  buttonArgsContained,
  buttonArgsSize
} from '../components/button'

import { defaults, propsValues } from '../../c1/Button/props'

export const c1ButtonDescription: string = buttonDescription

export const c1ButtonArgs: StorybookArgs = {
  ...buttonArgs(propsValues, defaults),

  // Tokens
  contained: buttonArgsContained,
  outlined: buttonArgsOutlined,
  white: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Белая кнопка'
  },
  text: buttonArgsText,
  size: buttonArgsSize(propsValues, defaults),
  palette: buttonArgsPalette(propsValues, defaults)
}

export const c1ButtonValues: StorybookArgsValue = buttonValues
