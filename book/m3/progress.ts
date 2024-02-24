import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  progressArgs,
  progressDescription,
  progressValues
} from '../components/progress'

import { defaults, propsValues } from '../../m3/Progress/props'

export const m3ProgressDescription: string = progressDescription

export const m3ProgressArgs: StorybookArgs = progressArgs(propsValues, defaults)

export const m3ProgressValues: StorybookArgsValue = progressValues
