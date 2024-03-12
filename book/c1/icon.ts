import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  iconArgs,
  iconArgsOverlay,
  iconArgsRounded,
  iconArgsSize,
  iconText,
  iconValues
} from '../components/icon'

import { defaults, propsValues } from '../../c1/Icon/props'

export const c1IconArgs: StorybookArgs = {
  ...iconArgs(propsValues, defaults),

  // Styles
  overlay: iconArgsOverlay,

  // Tokens
  size: iconArgsSize(propsValues, defaults),
  rounded: iconArgsRounded(propsValues, defaults)
}

export const c1IconValues: StorybookArgsValue = iconValues

export const c1IconText = iconText
