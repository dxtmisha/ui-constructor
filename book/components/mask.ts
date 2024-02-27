import {
  StorybookArgs,
  StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

export const maskDescription: string = 'Это готовая маска для ввода числа. ' +
  'Через свойство fraction можно указывать количество остатков. ' +
  'Если fraction равно true, остаток будет резервным.'

export const maskArgs: StorybookArgs = {
  // Values
  type: {
    control: StorybookControl.select,
    options: [
      'text',
      'number',
      'currency',
      'datetime',
      'date',
      'year-month',
      'time',
      'hour-minute'
    ],
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: 'text' },
      type: { summary: 'string' }
    }
  },
  name: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    }
  },
  value: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    }
  },
  mask: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    }
  },
  special: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '*' },
      type: { summary: 'string' }
    },
    description: 'Символ, который определяет символ для замены'
  },
  match: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '/[0-9]/' },
      type: { summary: 'string' }
    },
    description: 'Регулярное выражение, проверяющее вводимый символ. ' +
      'Если вводимый символ соответствует условию, символ пропускается'
  },
  pattern: {
    control: StorybookControl.object,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string | object' }
    },
    description: 'Объект со свойством значения из HTMLInputElement. ' +
      'Используется для проверки правильности вводимых данных. ' +
      'Если входные данные - это строка, вставляется в поле pattern у input'
  },
  check: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Регулярное выражение для проверки полных вводимых данных'
  },

  // Number
  fraction: {
    control: StorybookControl.number,
    table: {
      category: 'Number',
      type: { summary: 'number' }
    },
    description: 'Указывает количество символов остатка у числа. Работает только для типа число'
  },
  currency: {
    control: StorybookControl.text,
    table: {
      category: 'Number',
      type: { summary: 'string' }
    },
    description: 'Тип валюты. Работает только для типа валюты'
  },

  // Styles
  language: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'string' }
    },
    description: '[<b>Только для теста</b>] Язык форматирования. ' +
      'По умолчанию форматирование маски будет ориентироваться по полю lang в теге html'
  },
  view: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: '_' },
      type: { summary: 'string' }
    },
    description: 'Символ замены для тех мест, где пользователь еще не ввел данные'
  },
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Скрывает часть маски, где пользователь еще не ввел данные'
  },
  right: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Выравнивает текст направо'
  }
}

export const maskValues: StorybookArgsValue = {
  type: 'text',
  name: undefined,
  value: undefined,
  mask: '+7 (***) **-**-**'
}
