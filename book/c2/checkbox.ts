import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

import {
  checkboxArgs,
  checkboxValues,
  checkboxText
} from '../components/checkbox.ts'

import { icons } from '../values.ts'
import { defaults, propsValues } from '../../c2/Checkbox/props'

export const c2CheckboxArgs: StorybookArgs = {
  ...checkboxArgs(icons),

  // Tokens
  size: {
    control: StorybookControl.select,
    options: propsValues?.size,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.size },
      type: { summary: propsValues?.size.join(' | ') }
    }
  }
}

export const c2CheckboxValues: StorybookArgsValue = checkboxValues

export const c2CheckboxText = checkboxText
