import {
  type StorybookArgs,
  type StorybookArgsValue
} from '../../types/storybook'

import {
  progressArgs,
  progressDescription,
  progressValues
} from '../components/progress'

import { defaults, propsValues } from '../../c2/Progress/props'

export const c2ProgressDescription: string = progressDescription

export const c2ProgressArgs: StorybookArgs = progressArgs(propsValues, defaults)

export const c2ProgressValues: StorybookArgsValue = progressValues
