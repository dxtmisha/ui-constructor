import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

export const progressDescription: string = 'Компонент для работы с отображением загрузчика.'

export const progressArgs = (
  propsValues: Record<string, string[]>,
  defaults: Record<string, any>
): StorybookArgs => ({
  // Status
  visible: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' },
      type: { summary: 'string | number' }
    }
  },

  // Values
  value: {
    control: {
      type: StorybookControl.number,
      min: 0,
      max: 100
    },
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string | number' }
    }
  },
  max: {
    control: StorybookControl.number,
    table: {
      category: StorybookCategory.value,
      defaultValue: { summary: '100' },
      type: { summary: 'string | number' }
    },
    description: 'Указывать максимальное допустимое значение'
  },

  // Style
  delay: {
    control: {
      type: StorybookControl.number,
      min: 0
    },
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults?.delay },
      type: { summary: 'string | number' }
    },
    description: 'Задержка отображения. Это нужно, чтобы не было скачков в анимации, когда загрузка происходит слишком быстро'
  },
  delayHide: {
    control: {
      type: StorybookControl.number,
      min: 0
    },
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: defaults?.delayHide },
      type: { summary: 'string | number' }
    },
    description: 'Задержка при скрытии.'
  },
  inverse: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.style,
      type: { summary: 'boolean' }
    },
    description: 'Изменять цвет загрузчика на цвет текста'
  },

  // Tokens
  linear: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.linear },
      type: { summary: 'boolean' }
    },
    description: 'Отображать линейный загрузчик'
  },
  circular: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Отображать круглый загрузчик'
  },
  indeterminate: {
    control: StorybookControl.select,
    options: propsValues?.indeterminate,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.indeterminate },
      type: { summary: propsValues?.indeterminate.join(' | ') }
    },
    description: 'Тип анимации для загрузчика. ' +
      'Анимированный загрузчик отображается только в том случае, если не указать значение value'
  },
  position: {
    control: StorybookControl.select,
    options: propsValues?.position,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: defaults?.position },
      type: { summary: propsValues?.position.join(' | ') }
    },
    description: 'Место отображения загрузчика. Это поле только для загрузчика типа linear'
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Убирает отступы у загрузчика типа circular'
  }
})

export const progressValues: StorybookArgsValue = {
  visible: true
}
