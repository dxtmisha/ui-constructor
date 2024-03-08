import * as rollup from 'rollup'
import * as vite from 'vite'

import { PluginImport } from './classes/PluginImport'
import { PluginImportStyles } from './classes/PluginImportStyles'
import { PluginStyles } from './classes/PluginStyles'

type UiPluginsOptions = {
  importComponents?: boolean
  style?: string | false
}

/**
 * Plugin for working with the design system.<br>
 * Плагин для работы с системой дизайна.
 */
export default function uiVitePlugin (options: UiPluginsOptions = {}): vite.Plugin {
  const importStyles = new PluginImportStyles()
  let first = true

  return {
    name: 'vite-plugin-vue-ui',
    enforce: 'pre',
    transform (code: string, id: string): rollup.TransformResult {
      if (
        first
      ) {
        first = false
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
