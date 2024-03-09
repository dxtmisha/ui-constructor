import * as rollup from 'rollup'
import * as vite from 'vite'

import { PluginTool } from './classes/PluginTool'
import { PluginImport } from './classes/PluginImport'
import { PluginImportStyles } from './classes/PluginImportStyles'
import { PluginStyles } from './classes/PluginStyles'
import { PluginTranslate } from './classes/PluginTranslate'

type UiPluginsOptions = {
  importComponents?: boolean
  style?: string | false
  translate?: string
  translateApi?: string
}

/**
 * Plugin for working with the design system.<br>
 * Плагин для работы с системой дизайна.
 */
export default function uiVitePlugin (options: UiPluginsOptions = {}): vite.Plugin {
  const importStyles = new PluginImportStyles()
  const first = { value: true }
  let mode: string = 'production'

  return {
    name: 'vite-plugin-vue-ui',
    enforce: 'pre',
    apply (_, env): boolean {
      mode = env.mode
      return true
    },
    transform (code: string, id: string): rollup.TransformResult {
      if (
        first.value &&
        PluginTool.isJs(id)
      ) {
        code = new PluginTranslate(
          id,
          code,
          mode,
          options?.translate,
          options?.translateApi
        ).init()

        console.log('code', code)
        first.value = false
      }

      if (options?.importComponents ?? true) {
        code = new PluginImport(importStyles, id, code).init()
      }

      if (options?.style !== false) {
        code = new PluginStyles(id, code, options?.style).init()
      }

      return {
        code
      }
    }
  }
}
