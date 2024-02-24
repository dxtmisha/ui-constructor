// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'
import { forEach } from '../functions/forEach'

import { C1Icon } from '../c1/Icon'
import { C1Image } from '../c1/Image'

export const components = {
  C1Icon,
  C1Image
}

export const uiC1ComponentsPlugin = {
  install: async (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
