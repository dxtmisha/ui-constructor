import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import { image, percent } from '../values'

export const m3ImageDescription: string =
  'Компонент для отображения графических материалов. ' +
  'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.'

export const m3ImageDescriptionAdaptive: string =
  'Для изображения с продуктами можно выравнивать размеры элементов между собой, ' +
  'чтобы продукты на изображении были в одном масштабе. ' +
  'Для работы необходимо указать размер продукта, и у изображения не должно быть пустых отступов. ' +
  'Сам размер изображения может быть любым и не равен другим.'

export const m3ImageArgs: StorybookArgs = {
  // Status
  turn: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },
  hide: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      type: { summary: 'boolean' }
    }
  },

  // Values
  value: {
    control: StorybookControl.select,
    options: image,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string' }
    },
    description: 'Значение может быть названием иконки, ссылкой на изображение или объектом File'
  },

  // Image
  coordinator: {
    control: StorybookControl.object,
    table: {
      category: 'Image',
      type: { summary: 'number[]' }
    },
    description: 'Кроп изображения'
  },
  size: {
    control: StorybookControl.select,
    options: [
      'auto',
      'contain',
      'cover',
      ...percent
    ],
    table: {
      category: 'Image',
      defaultValue: { summary: 'cover' },
      type: { summary: 'auto | contain | cover | percent' }
    },
    description: 'Можно ввести тип масштабирования или значение в процентах'
  },
  x: {
    control: StorybookControl.select,
    options: percent,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Сдвиг изображения по x-плоскости. Не работает с coordinates/size'
  },
  y: {
    control: StorybookControl.select,
    options: percent,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Сдвиг изображения по y-плоскости. Не работает с coordinates/size'
  },

  // Image/ Adaptive
  adaptive: {
    control: StorybookControl.boolean,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'boolean' }
    },
    description: 'Включение режима адаптации размера изображения'
  },
  adaptiveGroup: {
    control: StorybookControl.text,
    table: {
      category: 'Image/ Adaptive',
      defaultValue: { summary: 'main' },
      type: { summary: 'string' }
    },
    description: 'Название группы'
  },
  adaptiveAlways: {
    control: StorybookControl.boolean,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'boolean' }
    },
    description: 'Всегда адаптирует размер изображения, даже если элемент вышел за пределы экрана'
  },
  objectWidth: {
    control: StorybookControl.number,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'number' }
    },
    description: 'Ширина продукта на изображении'
  },
  objectHeight: {
    control: StorybookControl.number,
    table: {
      category: 'Image/ Adaptive',
      type: { summary: 'number' }
    },
    description: 'Высота продукта на изображении'
  }
}

export const m3ImageValues: StorybookArgsValue = {
  turn: false,
  disabled: false,
  hide: false,
  value: 'search'
}
