// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { type App } from 'vue'
import { forEach } from '../functions/forEach'

import { M2Button } from '../m2/Button'
import { M2Icon } from '../m2/Icon'
import { M2Image } from '../m2/Image'
import { M2Progress } from '../m2/Progress'
import { M2Ripple } from '../m2/Ripple'
import { M2Skeleton } from '../m2/Skeleton'
import { M3Button } from '../m3/Button'
import { M3Checkbox } from '../m3/Checkbox'
import { M3FieldMessage } from '../m3/FieldMessage'
import { M3Icon } from '../m3/Icon'
import { M3Image } from '../m3/Image'
import { M3Input } from '../m3/Input'
import { M3Mask } from '../m3/Mask'
import { M3Mutation } from '../m3/Mutation'
import { M3MutationItem } from '../m3/MutationItem'
import { M3Progress } from '../m3/Progress'
import { M3Ripple } from '../m3/Ripple'
import { M3Scrollbar } from '../m3/Scrollbar'
import { M3Skeleton } from '../m3/Skeleton'
import { M3SkeletonItem } from '../m3/SkeletonItem'
import { M3Window } from '../m3/Window'
import { C1Button } from '../c1/Button'
import { C1Icon } from '../c1/Icon'
import { C1Image } from '../c1/Image'
import { C1Progress } from '../c1/Progress'
import { C1Ripple } from '../c1/Ripple'
import { C2Button } from '../c2/Button'
import { C2Checkbox } from '../c2/Checkbox'
import { C2Chip } from '../c2/Chip'
import { C2FieldMessage } from '../c2/FieldMessage'
import { C2Icon } from '../c2/Icon'
import { C2Image } from '../c2/Image'
import { C2Mutation } from '../c2/Mutation'
import { C2MutationItem } from '../c2/MutationItem'
import { C2Progress } from '../c2/Progress'
import { C2Radio } from '../c2/Radio'
import { C2Ripple } from '../c2/Ripple'
import { C2Scrollbar } from '../c2/Scrollbar'
import { C2Skeleton } from '../c2/Skeleton'
import { C2Switch } from '../c2/Switch'
import { C2Window } from '../c2/Window'

export const components = {
  M2Button,
  M2Icon,
  M2Image,
  M2Progress,
  M2Ripple,
  M2Skeleton,
  M3Button,
  M3Checkbox,
  M3FieldMessage,
  M3Icon,
  M3Image,
  M3Input,
  M3Mask,
  M3Mutation,
  M3MutationItem,
  M3Progress,
  M3Ripple,
  M3Scrollbar,
  M3Skeleton,
  M3SkeletonItem,
  M3Window,
  C1Button,
  C1Icon,
  C1Image,
  C1Progress,
  C1Ripple,
  C2Button,
  C2Checkbox,
  C2Chip,
  C2FieldMessage,
  C2Icon,
  C2Image,
  C2Mutation,
  C2MutationItem,
  C2Progress,
  C2Radio,
  C2Ripple,
  C2Scrollbar,
  C2Skeleton,
  C2Switch,
  C2Window
}

export const uiComponentsPlugin = {
  install: async (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}
