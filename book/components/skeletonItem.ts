import {
  StorybookArgs,
  StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

export const skeletonItemArgs: StorybookArgs = {
  // Status
  skeleton: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  }
}

export const skeletonItemValues: StorybookArgsValue = {}

export const skeletonItemText = {
  main: {
    title: 'Skeleton item',
    description: {
      main: 'Компонент управления скелетон для одного элемента.'
    }
  }
}
