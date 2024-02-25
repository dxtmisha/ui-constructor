import { type PropType } from 'vue'

import {
  ButtonProps,
  defaultsButton,
  propsButton
} from '../../constructors/Button/props'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon'],
  size: ['sm', 'md', 'lg', 'xl'],
  palette: ['webText', 'webWhite', 'webAccent', 'webAccentWhite', 'webError', 'webGray1', 'webGray2', 'webGray3', 'webGray4', 'webGlue1', 'webGlue2', 'webGlue3', 'accent', 'success', 'error', 'notification', 'ripple', 'background', 'backgroundImage', 'backgroundNotificationInfo', 'backgroundNotificationWarning', 'backgroundError', 'gray1', 'gray2', 'gray3', 'gray4', 'shading', 'green1', 'green2', 'yellow1', 'yellow2', 'yellow3', 'blue1', 'extra1', 'extra2', 'extra3', 'extra4', 'extra5', 'extra6', 'extra7', 'extra8', 'extra9', 'extra10', 'extra11', 'extra12', 'extra13', 'extra14', 'extra15', 'extra16', 'extra17', 'extra18', 'extra19']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  loading?: boolean
  readonly?: boolean
  adaptive?: 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  contained?: boolean
  outlined?: boolean
  white?: boolean
  text?: boolean
  palette?: 'webText' | 'webWhite' | 'webAccent' | 'webAccentWhite' | 'webError' | 'webGray1' | 'webGray2' | 'webGray3' | 'webGray4' | 'webGlue1' | 'webGlue2' | 'webGlue3' | 'accent' | 'success' | 'error' | 'notification' | 'ripple' | 'background' | 'backgroundImage' | 'backgroundNotificationInfo' | 'backgroundNotificationWarning' | 'backgroundError' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'shading' | 'green1' | 'green2' | 'yellow1' | 'yellow2' | 'yellow3' | 'blue1' | 'extra1' | 'extra2' | 'extra3' | 'extra4' | 'extra5' | 'extra6' | 'extra7' | 'extra8' | 'extra9' | 'extra10' | 'extra11' | 'extra12' | 'extra13' | 'extra14' | 'extra15' | 'extra16' | 'extra17' | 'extra18' | 'extra19'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export type Props = PropsToken & Omit<ButtonProps, keyof PropsToken>

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: Props = {
  ...defaultsButton as Props,
  ...{
    // :default [!] System label / Системная метка
    size: 'md',
    contained: true
    // :default [!] System label / Системная метка
  }
}

// Constructor for property
// Конструктор для свойства
export const propsInstruction = {
  ...propsButton,
  ...{
    // :prop [!] System label / Системная метка
    focus: Boolean,
    disabled: Boolean,
    selected: Boolean,
    loading: Boolean,
    readonly: Boolean,
    adaptive: String as PropType<PropsToken['adaptive']>,
    size: {
      type: String as PropType<PropsToken['size']>,
      default: defaults?.size
    },
    contained: {
      type: Boolean,
      default: defaults?.contained
    },
    outlined: Boolean,
    white: Boolean,
    text: Boolean,
    palette: String as PropType<PropsToken['palette']>
    // :prop [!] System label / Системная метка
  }
}
