import {
  type StorybookArgs,
  type StorybookArgsValue,
  StorybookControl
} from '../../types/storybook'
import { StorybookCategory } from '../category'

import {
  buttonArgs,
  buttonArgsOutlined,
  buttonArgsPalette,
  buttonArgsText,
  buttonValues,
  buttonDescription,
  buttonArgsSize
} from '../components/button'

import { defaults, propsValues } from '../../c2/Button/props'

export const c2ButtonNameHierarchy = 'Иерархия'
export const c2ButtonNameSize = 'Размеры кнопок и радиус угла'
export const c2ButtonNameIntent = 'Роли'

export const c2ButtonDescription: string = buttonDescription

export const c2ButtonDescriptionHierarchy: string =
  'Иерархия кнопок подчеркивает, какая кнопка более важна в данном контексте, ' +
  'чтобы пользователь мог немедленно принимать меры.<br>' +
  'Кнопки используют цвет и контраст для создания акцентов и иерархии. ' +
  'Кнопки с наибольшим акцентом имеют максимальный приоритет. ' +
  'Кнопки с пониженным и низким акцентом имеют пониженный и низкий приоритет соответственно.'

export const c2ButtonDescriptionPrimary: string =
  'Используйте одну основную кнопку в каждом контексте, чтобы позволить ' +
  'пользователям выполнить конкретное действие, продвигаться в процессе, подтверждать ' +
  'и отклонять или завершать задачу.<br>' +
  '*<b>Исключения</b>: В веб-приложениях можно использовать более одной Primary кнопки, ' +
  'если на экране размещено несколько панелей. В этом случае стремитесь к тому, чтобы ' +
  'в каждой панели было по одной кнопке.'

export const c2ButtonDescriptionSecondary: string =
  'Secondary кнопки - основа интерфейса. Отдавайте им ' +
  'предпочтение всякий раз, когда это возможно. Серый фон обеспечивает ' +
  'лучшую видимость и делает их более доступными по сравнению ' +
  'с Ghost кнопками.'

export const c2ButtonDescriptionOutline: string =
  'Outline кнопки менее приоритетны, чем Secondary кнопки. Они используются ' +
  'для обозначения дополнительных действий, таких, как открытие фильтров, либо в тех случаях, ' +
  'когда Primary кнопка уже есть на странице, а между двумя другими действиями все ' +
  'еще необходимо обозначить приоритет. Также Outline кнопки должны использоваться ' +
  'для обозначения действия с пониженным приоритетом на цветном, или сером фоне.'

export const c2ButtonDescriptionGhost: string =
  'Ghost кнопки имеют наименьший приоритет. Они используются для ' +
  'обозначения действий отмены, действий позволяющих пользователю пропустить, ' +
  'отказаться, или игнорировать. Так же они могут быть использованы в качестве ' +
  'акцентированных ссылок для скачивания файлов, оформления элементов управления ' +
  '(слайдеров, элементов пагинации и т. д.).'

export const c2ButtonDescriptionIntent: string =
  'Кнопки распределены по ролям, для обозначения типов действия. ' +
  'Если тип действия не подходит ни под одну роль, рекомендуется использовать Default кнопки.'

export const c2ButtonArgs: StorybookArgs = {
  ...buttonArgs(propsValues, defaults),

  // Tokens
  primary: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      defaultValue: { summary: 'true' },
      type: { summary: 'boolean' }
    },
    description: 'Основная кнопка'
  },
  secondary: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.token,
      type: { summary: 'boolean' }
    },
    description: 'Вторичная кнопка'
  },
  outline: buttonArgsOutlined,
  ghost: buttonArgsText,
  size: buttonArgsSize(propsValues, defaults),
  palette: buttonArgsPalette(propsValues, defaults)
}

export const c2ButtonValues: StorybookArgsValue = buttonValues

export const c2ButtonStyles = [
  {
    name: 'Primary',
    props: {}
  },
  {
    name: 'Secondary',
    props: { secondary: true }
  },
  {
    name: 'Secondary Outline',
    props: { outline: true }
  },
  {
    name: 'Ghost',
    props: { ghost: true }
  }
]
