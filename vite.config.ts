import { resolve } from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

const library = 'library'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin({
      clearPureImport: false,
      include: [
        `${library}/**/*.ts`,
        'classes/**/*.ts',
        'composables/**/*.ts',
        'config/**/*.ts',
        'constructors/**/*.ts',
        'functions/**/*.ts',
        'types/**/*.ts'
      ]
    })
  ],
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, `${library}/components.ts`),
        flags: resolve(__dirname, `${library}/flags.ts`),
        index: resolve(__dirname, `${library}/index.ts`),
        main: resolve(__dirname, `${library}/main.ts`),
        media: resolve(__dirname, `${library}/media.ts`),
        plugin: resolve(__dirname, `${library}/plugin.ts`),
        'plugin-basic': resolve(__dirname, `${library}/plugin-basic.ts`)
      },
      name: 'ui',
      fileName: (format, entryName) => {
        if (format === 'es') {
          return `${entryName}.js`
        }

        return `${entryName}.umd.${format}`
      }
    }
  }
})
