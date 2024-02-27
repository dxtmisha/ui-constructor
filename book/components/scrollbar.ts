import {
  StorybookArgs,
  StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

export const scrollbarDescription: string = 'Компонент для работы со скроллами. Уменьшает скролл, если он большой. ' +
  'Также добавляет бордер сверху и снизу, в зависимости от местоположения скролла.'

export const scrollbarArgs: StorybookArgs = {
  // Options
  tag: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'div' },
      type: { summary: 'string' }
    }
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    }
  },

  // Border
  border: {
    control: StorybookControl.boolean,
    table: {
      category: 'Border',
      type: { summary: 'boolean' }
    },
    description: 'Отображать бордер сверху, если скролл не в начале, и снизу, если скролл не прокручен до конца'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: 'Border',
      type: { summary: 'boolean' }
    },
    description: 'Изменяет поведение работы бордера на обратное. Работает, если включен параметр border'
  }
}

export const scrollbarValues: StorybookArgsValue = {}
