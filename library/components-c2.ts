// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'
import { forEach } from '../functions/forEach'

import { C2Button } from '../c2/Button'
import { C2Checkbox } from '../c2/Checkbox'
import { C2FieldMessage } from '../c2/FieldMessage'
import { C2Icon } from '../c2/Icon'
import { C2Image } from '../c2/Image'
import { C2Mutation } from '../c2/Mutation'
import { C2MutationItem } from '../c2/MutationItem'
import { C2Progress } from '../c2/Progress'
import { C2Ripple } from '../c2/Ripple'
import { C2Skeleton } from '../c2/Skeleton'

export const components = {
  C2Button,
  C2Checkbox,
  C2FieldMessage,
  C2Icon,
  C2Image,
  C2Mutation,
  C2MutationItem,
  C2Progress,
  C2Ripple,
  C2Skeleton
}

export const uiC2ComponentsPlugin = {
  install: async (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
