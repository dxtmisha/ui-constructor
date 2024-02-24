import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  m3IconArgs,
  m3IconDescription,
  m3IconValues
} from '../m3/icon'
import { icons } from '../values'
import { defaults, propsValues } from '../../c2/Icon/props'

export const c2IconDescription: string = m3IconDescription

export const c2IconArgs: StorybookArgs = {
  ...m3IconArgs,
  icon: {
    ...m3IconArgs.icon,
    options: icons
  },
  iconActive: {
    ...m3IconArgs.iconActive,
    options: icons
  },

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
  size: {
    control: StorybookControl.select,
    options: propsValues.size,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults.size },
      type: { summary: propsValues.size.join(' | ') }
    }
  }
}

delete c2IconArgs.overlay
delete c2IconArgs.dynamic
delete c2IconArgs.rounded

export const c2IconValues: StorybookArgsValue = {
  ...m3IconValues,
  icon: 'notification',
  iconActive: 'notification-off'
}
