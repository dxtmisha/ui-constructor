import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  progressArgs,
  progressDescription,
  progressValues
} from '../components/progress'

import { defaults, propsValues } from '../../m2/Progress/props'

export const m2ProgressDescription: string = progressDescription

export const m2ProgressArgs: StorybookArgs = progressArgs(propsValues, defaults)

export const m2ProgressValues: StorybookArgsValue = progressValues
