import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  iconArgs,
  iconArgsDynamic,
  iconArgsOverlay,
  iconArgsRounded,
  iconArgsSize,
  iconText,
  iconValues
} from '../components/icon'

import { defaults, propsValues } from '../../m2/Icon/props'

export const m2IconArgs: StorybookArgs = {
  ...iconArgs(propsValues, defaults),

  // Styles
  overlay: iconArgsOverlay,
  dynamic: iconArgsDynamic,

  // Tokens
  size: iconArgsSize(propsValues, defaults),
  rounded: iconArgsRounded(propsValues, defaults)
}

export const m2IconValues: StorybookArgsValue = iconValues

export const m2IconText = iconText
