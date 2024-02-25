import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  buttonArgs,
  buttonArgsHeight,
  buttonArgsOutlined,
  buttonArgsPalette,
  buttonArgsText,
  buttonValues,
  buttonDescription,
  buttonArgsContained
} from '../components/button'

import { defaults, propsValues } from '../../m2/Button/props'

export const m2ButtonDescription: string = buttonDescription

export const m2ButtonArgs: StorybookArgs = {
  ...buttonArgs(propsValues, defaults),

  // Tokens
  contained: buttonArgsContained,
  outlined: buttonArgsOutlined,
  text: buttonArgsText,
  height: buttonArgsHeight(propsValues, defaults),
  palette: buttonArgsPalette(propsValues, defaults)
}

export const m2ButtonValues: StorybookArgsValue = buttonValues
