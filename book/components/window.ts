import {
  StorybookArgs,
  StorybookArgsValue,
  StorybookControl
} from '../../types/storybook.ts'
import { StorybookCategory } from '../category.ts'

import { propsValues } from '../../m3/Window/props.ts'

export const windowDescription: string = 'Базовый компонент для работы с окном. Используется в меню, модальных окнах и подобных элементах.'

export const windowArgs: StorybookArgs = {
  // Status
  open: {
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

  // Values
  overElement: {
    control: StorybookControl.text,
    table: {
      category: StorybookCategory.value,
      type: { summary: 'string| HTMLElement' }
    },
    description: 'Выбранный элемент в окне для фокусировки. ' +
      'Если задано это свойство, то элемент, подходящий по условиям, ' +
      'будет прокручиваться к середине окна. Работает только когда axis равно on'
  },

  // Options
  contextmenu: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Изменить открытие окна на правую кнопку'
  },
  adaptive: {
    control: StorybookControl.select,
    options: propsValues.adaptive,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'auto' },
      type: { summary: propsValues.adaptive.join(' | ') }
    },
    description: 'Изменяет поведение работы окна. Отвечает за поведение перехода окна между ' +
      'модальным окном, меню и статическим окном'
  },
  overscroll: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
    },
    description: 'Отмена скролла у элемента body, если мышь над окном. Не работает на старых браузерах'
  },
  autoClose: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Авто закрывает окно при нажатии на окне. Если нужно отменить это ' +
      'действие для конкретного элемента, надо добавить класс *-window–static (* - названия дизайна)'
  },
  flash: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Быстрое открытие/закрытие. ' +
      'Это свойство отменяет анимацию для увеличения производительности. ' +
      'Это нужно, когда в окне слишком много элементов'
  },
  inDom: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.option,
      type: { summary: 'boolean' }
    },
    description: 'Окно остается в DOM и не убирает его при закрытии. ' +
      'Для увеличения производительности, если при открытии есть очень тяжелые элементы'
  },

  // Menu
  axis: {
    control: StorybookControl.select,
    options: [
      'x',
      'y',
      'on'
    ],
    table: {
      category: 'Menu',
      defaultValue: { summary: 'y' },
      type: { summary: 'x | y | on' }
    },
    description: 'Ось выравнивания окна'
  },
  indent: {
    control: StorybookControl.number,
    table: {
      category: 'Menu',
      defaultValue: { summary: '4' },
      type: { summary: 'number' }
    },
    description: 'Расстояние между элементом управления и окном в режиме меню. ' +
      'Работает только когда axis равно x или y'
  },

  // Modal
  alignment: {
    control: StorybookControl.select,
    options: propsValues.alignment,
    table: {
      category: 'Modal',
      defaultValue: { summary: 'center' },
      type: { summary: propsValues.alignment.join(' | ') }
    },
    description: 'Расположение окна'
  },
  origin: {
    control: StorybookControl.select,
    options: propsValues.origin,
    table: {
      category: 'Modal',
      defaultValue: { summary: 'center' },
      type: { summary: propsValues.origin.join(' | ') }
    },
    description: 'Направление открытия окна'
  },
  persistent: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Запрещает закрытие окна при нажатии за пределы модального окна'
  },
  dense: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Убирает отступы у окна, прижимая к краю'
  },
  fullscreen: {
    control: StorybookControl.boolean,
    table: {
      category: 'Modal',
      type: { summary: 'boolean' }
    },
    description: 'Увеличивает окно до полного размера'
  },

  // Static
  staticMode: {
    control: StorybookControl.boolean,
    table: {
      category: 'Static',
      type: { summary: 'boolean' }
    },
    description: 'Включение статического режима. Это когда окно становится просто div элементом ' +
      'и переходит в оконный режим при маленьком разрешении монитора. Свойство работает только ' +
      'когда adaptive равно 1 из статических свойств'
  },

  // Tokens
  width: {
    control: StorybookControl.select,
    options: propsValues.width,
    table: {
      category: StorybookCategory.token,
      type: { summary: `${propsValues.width.join(' | ')} | string` }
    },
    description: 'Ширина окна'
  },
  height: {
    control: StorybookControl.select,
    options: propsValues.height,
    table: {
      category: StorybookCategory.token,
      type: { summary: `${propsValues.height.join(' | ')} | string` }
    },
    description: 'Высота окна'
  }
}

export const windowValues: StorybookArgsValue = {}

export const windowText = {
  main: {
    title: 'Window',
    description: {
      main: 'Базовый компонент для работы с окном. Используется в меню, модальных окнах и подобных элементах.'
    }
  }
}
