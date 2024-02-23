import { resolve } from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

import data from './library/components.json'

const name = data?.name ?? 'ui'
const library = data?.library ?? 'library'
const components = data?.components ?? []

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      dtsPlugin({
        clearPureImport: false,
        copyDtsFiles: true,
        include: [
          `${library}/**/*.ts`,
          'classes/**/*.ts',
          'composables/**/*.ts',
          'config/**/*.ts',
          'constructors/**/*.{ts,tsx}',
          'functions/**/*.ts',
          'types/**/*.ts',
          'c1/**/index.ts',
          'c2/**/*.ts',
          'm2/**/*.ts',
          'm3/**/index.ts'
        ]
      })
    ],
    build: {
      cssCodeSplit: true,
      lib: {
        entry: {
          index: resolve(__dirname, `${library}/index.ts`),
          flags: resolve(__dirname, `${library}/flags.ts`),
          media: resolve(__dirname, `${library}/media.ts`),
          translate: resolve(__dirname, `${library}/translate.ts`),
          components: resolve(__dirname, `${library}/components.ts`),
          plugin: resolve(__dirname, `${library}/plugin.ts`),
          'plugin-basic': resolve(__dirname, `${library}/plugin-basic.ts`),
          main: resolve(__dirname, `${library}/main.ts`),
          ...(() => {
            const data: Record<string, any> = {}

            components.forEach(item => {
              data[item.name] = resolve(__dirname, `${item.path}/index.ts`)
            })

            return data
          })()
        },
        name,
        fileName: (format, entryName) => {
          if (format === 'es') {
            return `${entryName}.js`
          }

          return `${entryName}.umd.${format}`
        }
      }
    }
  }
})
