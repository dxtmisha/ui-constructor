import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

export const fieldMessageArgs: StorybookArgs = {
  // Status
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },

  // Value
  counter: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'number' }
    }
  },
  maxlength: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'number' }
    }
  },

  // Message
  helperMessage: {
    control: StorybookControl.text,
    table: {
      category: 'Message',
      type: { summary: 'string' }
    }
  },
  validationMessage: {
    control: StorybookControl.text,
    table: {
      category: 'Message',
      type: { summary: 'string' }
    },
    description: 'Выводит текст ошибки. Если есть текст ошибки, то обычный текст скрывается'
  }
}

export const fieldMessageValues: StorybookArgsValue = {
  disabled: false,
  counter: 5,
  maxlength: 10,
  helperMessage: 'Supporting text'
}

export const fieldMessageText = {
  main: {
    title: 'Field/ Message',
    description: {
      main: 'Компонент для вывода дополнительного текста и текста ошибки.'
    }
  }
}
