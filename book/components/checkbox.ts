import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

import {
  fieldMessageArgs,
  fieldMessageValues
} from './fieldMessage'

import { image } from '../values.ts'

export const checkboxArgs = (iconsValue: any = image): StorybookArgs => {
  return {
    // Status
    loading: {
      control: StorybookControl.boolean,
      table: {
        category: StorybookCategory.status,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      }
    },
    readonly: {
      control: StorybookControl.boolean,
      table: {
        category: StorybookCategory.status,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      }
    },
    disabled: {
      control: StorybookControl.boolean,
      table: {
        category: StorybookCategory.status,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      }
    },

    // Values
    icon: {
      control: StorybookControl.select,
      options: iconsValue,
      table: {
        category: StorybookCategory.value,
        type: { summary: 'string' }
      }
    },
    label: {
      control: StorybookControl.text,
      table: {
        category: StorybookCategory.value,
        type: { summary: 'string' }
      }
    },
    value: {
      control: StorybookControl.boolean,
      table: {
        category: StorybookCategory.value,
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      }
    },

    // Input
    required: {
      control: StorybookControl.boolean,
      table: {
        category: 'Input',
        type: { summary: 'boolean' }
      }
    },

    // Message
    helperMessage: fieldMessageArgs.helperMessage,
    validationMessage: fieldMessageArgs.validationMessage
  }
}

export const checkboxValues: StorybookArgsValue = {
  loading: false,
  readonly: false,
  disabled: false,
  icon: undefined,
  label: 'Label',
  helperMessage: fieldMessageValues.helperMessage
}

export const checkboxText = {
  main: {
    title: 'Checkbox',
    description: {
      main: 'Флажки позволяют пользователям выбирать один или несколько элементов из списка, а также включать или отключать элемент.'
    }
  }
}
