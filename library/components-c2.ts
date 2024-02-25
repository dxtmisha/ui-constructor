// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'
import { forEach } from '../functions/forEach'

import { C2Button } from '../c2/Button'
import { C2Icon } from '../c2/Icon'
import { C2Image } from '../c2/Image'
import { C2Progress } from '../c2/Progress'
import { C2Ripple } from '../c2/Ripple'

export const components = {
  C2Button,
  C2Icon,
  C2Image,
  C2Progress,
  C2Ripple
}

export const uiC2ComponentsPlugin = {
  install: async (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
