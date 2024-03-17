import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook.ts'

import {
  checkboxArgs,
  checkboxValues
} from './checkbox.ts'

import { image } from '../values.ts'

export const radioArgs = (iconsValue: any = image): StorybookArgs => {
  return {
    ...checkboxArgs(iconsValue)
  }
}

export const radioValues: StorybookArgsValue = checkboxValues

export const radioText = {
  main: {
    title: 'Radio',
    description: {
      main: 'Радиокнопки позволяют людям выбирать один вариант из набора вариантов.'
    }
  }
}
