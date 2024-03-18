import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook.ts'

import {
  checkboxArgs,
  checkboxValues,
  checkboxText
} from '../components/checkbox.ts'

import { icons } from '../values.ts'

export const c2SwitchArgs: StorybookArgs = {
  ...checkboxArgs(icons)
}

export const c2SwitchValues: StorybookArgsValue = checkboxValues

export const c2SwitchText = checkboxText
