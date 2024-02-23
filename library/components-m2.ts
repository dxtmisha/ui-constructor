// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'
import { forEach } from '../functions/forEach'

import { M2Image } from '../m2/Image'

export const components = {
  M2Image
}

export const uiM2ComponentsPlugin = {
  install: async (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
