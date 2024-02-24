// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'

import { uiComponentsPlugin } from './components'
import { registrationUiTranslate } from './translate'

import { type ConstrRegistration } from '../types/constructor'

import './style-basic.scss'
import './types.d.ts'

export const uiPlugin = {
  install: (app: App) => app.use(uiComponentsPlugin)
}

export const registrationUiBasic = async (app: App, options?: ConstrRegistration): Promise<App> => {
  if (options) {
    if (options?.translate) {
      await registrationUiTranslate(options.translate)
    }
  }

  app.use(uiComponentsPlugin)

  return app
}