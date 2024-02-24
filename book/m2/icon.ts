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
import { propsValues } from '../../m2/Icon/props'

export const m2IconDescription: string = m3IconDescription

export const m2IconArgs: StorybookArgs = {
  ...m3IconArgs,

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

export const m2IconValues: StorybookArgsValue = m3IconValues
