// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { Icons } from '../classes/Icons.ts'

import flags from './flags.json'
import c2 from './../c2/icons.json'

export const makeUiFlags = (): void => {
  [
    ...flags
  ].forEach(key => Icons.addLoad(key))

  import('./flags').then(item => item.makeFlags())
}

export const makeUiIcons = (): void => {
  [
    ...c2
  ].forEach(key => Icons.addLoad(key))

  import('./../c2/icons').then(item => item.makeIconsC2())
}

export const makeUiMedia = (): void => {
  makeUiFlags()
  makeUiIcons()
}
