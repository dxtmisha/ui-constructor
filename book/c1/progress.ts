import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  progressArgs,
  progressDescription,
  progressValues
} from '../components/progress'

import { defaults, propsValues } from '../../c1/Progress/props'

export const c1ProgressDescription: string = progressDescription

export const c1ProgressArgs: StorybookArgs = progressArgs(propsValues, defaults)

export const c1ProgressValues: StorybookArgsValue = progressValues
