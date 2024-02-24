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
          ...(() => {
            const data: Record<string, any> = {}

            components.forEach(item => {
              data[item.name] = resolve(__dirname, `${item.path}/index.ts`)
            })

            return data
          })(),
          ...(() => {
            const data: Record<string, any> = {}
            const list = [
              'index',
              'flags',
              'media',
              'translate',
              'components',
              'components-c1',
              'components-c2',
              'components-m2',
              'components-m3',
              'plugin',
              'plugin-c1',
              'plugin-c2',
              'plugin-m2',
              'plugin-m3',
              'plugin-basic',
              'main'
            ]

            list.forEach(item => {
              data[item] = resolve(__dirname, `${library}/${item}.ts`)
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
      },
      rollupOptions: {
        external: ['vue', 'vue-router', 'ui'],
        output: {
          globals: {
            vue: 'UI_CORE_VUE',
            'vue-router': 'UI_CORE_VUE_ROUTER',
            vuex: 'UI_CORE_VUEX',
            ui: 'UI_CORE_UI'
          }
        }
      }
    }
  }
})
