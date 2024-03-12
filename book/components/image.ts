import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import { image, percent } from '../values'

export const imageArgs: StorybookArgs = {
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
    description: 'Можно ввести тип масштабирования или значение в процентах. Не работает с coordinates'
  },
  x: {
    control: StorybookControl.select,
    options: percent,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Сдвиг изображения по x-плоскости. Не работает с coordinates'
  },
  y: {
    control: StorybookControl.select,
    options: percent,
    table: {
      category: 'Image',
      type: { summary: 'percent' }
    },
    description: 'Сдвиг изображения по y-плоскости. Не работает с coordinates'
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

export const imageValues: StorybookArgsValue = {
  turn: false,
  disabled: false,
  hide: false,
  value: 'search'
}

export const imageText = {
  main: {
    title: 'Image',
    description: {
      main: 'Компонент для отображения графических материалов. ' +
        'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.'
    }
  }
}
