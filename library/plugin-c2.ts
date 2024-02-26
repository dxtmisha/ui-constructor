// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'

import { uiC2ComponentsPlugin } from './components-c2'
import { makeMedia } from './media'
import { registrationUiTranslate } from './translate'

import { type ConstrRegistration } from '../types/constructor'

import '../c2/styles/main.scss'
import './types.d.ts'

export const registrationUiC2 = async (app: App, options?: ConstrRegistration): Promise<App> => {
  makeMedia()

  if (options) {
    if (options?.translate) {
      await registrationUiTranslate(options.translate)
    }
  }

  app.use(uiC2ComponentsPlugin)

  return app
}
