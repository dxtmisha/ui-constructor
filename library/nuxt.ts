// This file is generated by a script, do not edit.
// Этот файл генерируется скриптом, не редактировать.

import { addComponent, addImports, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ui',
    version: '0.0.0-dev.3'
  },
  async setup (_, nuxt) {
    nuxt.options.css.push('ui/style.css')
    nuxt.options.build.transpile = [
      /ui\/dist\/(m2|m3|c1|c2)/i
    ]

    addImports({
      name: 'uiPluginBasic',
      from: 'ui/plugin-basic',
      type: true
    })

    await addComponent({
      name: 'M2Button',
      export: 'M2Button',
      filePath: 'ui/M2Button'
    })
    await addComponent({
      name: 'M2Icon',
      export: 'M2Icon',
      filePath: 'ui/M2Icon'
    })
    await addComponent({
      name: 'M2Image',
      export: 'M2Image',
      filePath: 'ui/M2Image'
    })
    await addComponent({
      name: 'M2Progress',
      export: 'M2Progress',
      filePath: 'ui/M2Progress'
    })
    await addComponent({
      name: 'M2Ripple',
      export: 'M2Ripple',
      filePath: 'ui/M2Ripple'
    })
    await addComponent({
      name: 'M3Button',
      export: 'M3Button',
      filePath: 'ui/M3Button'
    })
    await addComponent({
      name: 'M3Icon',
      export: 'M3Icon',
      filePath: 'ui/M3Icon'
    })
    await addComponent({
      name: 'M3Image',
      export: 'M3Image',
      filePath: 'ui/M3Image'
    })
    await addComponent({
      name: 'M3Mutation',
      export: 'M3Mutation',
      filePath: 'ui/M3Mutation'
    })
    await addComponent({
      name: 'M3MutationItem',
      export: 'M3MutationItem',
      filePath: 'ui/M3MutationItem'
    })
    await addComponent({
      name: 'M3Progress',
      export: 'M3Progress',
      filePath: 'ui/M3Progress'
    })
    await addComponent({
      name: 'M3Ripple',
      export: 'M3Ripple',
      filePath: 'ui/M3Ripple'
    })
    await addComponent({
      name: 'C1Button',
      export: 'C1Button',
      filePath: 'ui/C1Button'
    })
    await addComponent({
      name: 'C1Icon',
      export: 'C1Icon',
      filePath: 'ui/C1Icon'
    })
    await addComponent({
      name: 'C1Image',
      export: 'C1Image',
      filePath: 'ui/C1Image'
    })
    await addComponent({
      name: 'C1Progress',
      export: 'C1Progress',
      filePath: 'ui/C1Progress'
    })
    await addComponent({
      name: 'C1Ripple',
      export: 'C1Ripple',
      filePath: 'ui/C1Ripple'
    })
    await addComponent({
      name: 'C2Button',
      export: 'C2Button',
      filePath: 'ui/C2Button'
    })
    await addComponent({
      name: 'C2Icon',
      export: 'C2Icon',
      filePath: 'ui/C2Icon'
    })
    await addComponent({
      name: 'C2Image',
      export: 'C2Image',
      filePath: 'ui/C2Image'
    })
    await addComponent({
      name: 'C2Mutation',
      export: 'C2Mutation',
      filePath: 'ui/C2Mutation'
    })
    await addComponent({
      name: 'C2MutationItem',
      export: 'C2MutationItem',
      filePath: 'ui/C2MutationItem'
    })
    await addComponent({
      name: 'C2Progress',
      export: 'C2Progress',
      filePath: 'ui/C2Progress'
    })
    await addComponent({
      name: 'C2Ripple',
      export: 'C2Ripple',
      filePath: 'ui/C2Ripple'
    })
  }
})