import {
  StorybookArgs,
  StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

export const skeletonArgs: StorybookArgs = {
  // Status
  active: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  }
}

export const skeletonValues: StorybookArgsValue = {
  active: true
}

export const skeletonText = {
  main: {
    title: 'Skeleton',
    description: {
      main: 'Компонент для вывода скелета.'
    }
  }
}
