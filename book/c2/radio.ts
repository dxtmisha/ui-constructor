import {
  type StorybookArgsValue
} from '../../types/storybook.ts'

import {
  radioArgs,
  radioText,
  radioValues
} from '../components/radio.ts'
import { c2CheckboxArgs } from './checkbox.ts'

import { icons } from '../values.ts'

export const c2RadioArgs = {
  ...radioArgs(icons),

  // Tokens
  size: c2CheckboxArgs.size
}

export const c2RadioValues: StorybookArgsValue = radioValues

export const c2RadioText = radioText
