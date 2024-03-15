import * as rollup from 'rollup'
import * as vite from 'vite'

import { PluginTool } from './classes/PluginTool'
import { PluginApi } from './classes/PluginApi'
import { PluginTranslate } from './classes/PluginTranslate'
import { PluginMedia } from './classes/PluginMedia'
import { PluginImport } from './classes/PluginImport'
import { PluginImportStyles } from './classes/PluginImportStyles'
import { PluginStyles } from './classes/PluginStyles'

import '../library/types.d.ts'

type UiPluginsOptions = {
  importComponents?: boolean
  icon?: boolean
  flag?: boolean
  style?: string | false
  api?: string
  apiUrl?: string
  translate?: string
  translateUrl?: string
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
        console.log('code', code)

        code = new PluginMedia(
          id,
          code,
          options?.flag
        ).init()

        code = new PluginTranslate(
          id,
          code,
          mode,
          options?.translate,
          options?.translateUrl
        ).init()

        code = new PluginApi(
          id,
          code,
          mode,
          options?.api,
          options?.apiUrl
        ).init()

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
