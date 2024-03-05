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

export const imageValues: StorybookArgsValue = {
  turn: false,
  disabled: false,
  hide: false,
  value: 'search'
}

export const imageText = {
  main: {
    title: 'Image',
    description: 'Компонент для отображения графических материалов. ' +
      'Компонент используется для работы с SVG файлами, графическими файлами (загруженными через input или по url) и иконками.'
  },
  value: {
    title: {
      main: 'Value',
      icon: 'Свои иконки',
      unloaded: 'Загружаемые пользовательские изображения'
    },
    description: {
      main: 'Компонент изображения может отображать встроенные иконки, картины, SVG-файлы и PDF.',
      icon: 'Можно подключить дополнительные иконки через метод Icons.add. ' +
        'Подключенная иконка может быть любым изображением или SVG-файлом. ' +
        'При этом цвет изображения будет залит цветом шрифта.',
      unloaded: {
        main: 'Компонент изображения может также принимать значения типа File, загружаемые изображения пользователя. ' +
          'Все загружаемые файлы с размером больше 1280 будут сжиматься до 1280 для увеличения производительности. ',
        attention: 'Внимание! Браузер блокирует отображение файлов типа PDF. Поэтому, несмотря на то, что такие ' +
          'файлы будут работать при локальном запуске проекта, они не будут отображаться на сайте.'
      }
    }
  },
  coordinator: {
    title: 'Coordinator',
    description: {
      main: 'Обычно изображения центрируются, из-за чего иногда они обрезаются неудачно. ' +
        'Чтобы исправить это, можно использовать свойство coordinator для изменения центральной части изображения. ' +
        'Оно выводит изображения так, чтобы всегда была видна та часть изображения, которая была указана.',
      value: 'Свойство coordinator принимает массив из 4 значений, указанных в процентах. ' +
        'Каждое значение отвечает за обрезку изображения [сверху, справа, снизу, слева].'
    }
  },
  adaptive: {
    title: {
      main: 'Adaptive',
      group: 'Разделение на группы'
    },
    description: {
      main: 'Для изображения с продуктами можно выравнивать размеры элементов между собой, ' +
        'чтобы продукты на изображении были в одном масштабе. ' +
        'Для работы необходимо указать размер продукта, и у изображения не должно быть пустых отступов. ' +
        'Сам размер изображения может быть любым и не равен другим.',
      value: 'Для активации адаптивности необходимо включить свойство adaptive и один из размеров (высота или ширина) object-width/ object-height. ' +
        'После этого все компоненты с включенным adaptive будут выравнивать размер изображения между собой.',
      group: 'Адаптация можно разделить на группы черед свойство adaptive-group.',
      always: 'По умолчанию адаптив останавливается при выходе элемента за пределы экрана. ' +
        'Для постоянного отслеживания размера используется свойство adaptive-always.'
    }
  }
}
