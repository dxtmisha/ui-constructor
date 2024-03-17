import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook.ts'

import {
  checkboxArgs,
  checkboxValues,
  checkboxText
} from '../components/checkbox.ts'

export const m3CheckboxArgs: StorybookArgs = checkboxArgs()

export const m3CheckboxValues: StorybookArgsValue = checkboxValues

export const m3CheckboxText = checkboxText
