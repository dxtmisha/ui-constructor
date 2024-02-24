import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  iconArgs,
  iconArgsSize,
  iconDescription,
  iconValues
} from '../components/icon'

import { icons } from '../values'
import { defaults, propsValues } from '../../c2/Icon/props'

export const c2IconDescription: string = iconDescription

export const c2IconArgs: StorybookArgs = {
  ...iconArgs(propsValues, defaults, icons),

  // Tokens
  variation: {
    control: StorybookControl.select,
    options: propsValues.variation,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.variation },
      type: { summary: propsValues.variation.join(' | ') }
    }
  },
  shape: {
    control: StorybookControl.select,
    options: propsValues.shape,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.shape },
      type: { summary: propsValues.shape.join(' | ') }
    }
  },
  size: iconArgsSize(propsValues, defaults)
}

export const c2IconValues: StorybookArgsValue = {
  ...iconValues,
  icon: 'notification',
  iconActive: 'notification-off'
}
