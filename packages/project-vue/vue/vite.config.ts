import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { uiVitePlugin } from 'ui/vite-plugin-vue-ui'

const BASE_URL = 'url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'development' ? '/' : BASE_URL
  const root = mode === 'development' ? './dev' : './production'

  return {
    root,
    base,
    publicDir: `${root}/public`,
    plugins: [
      uiVitePlugin({
        importComponents: false,
        icon: false,
        flag: false
      }),
      vue(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    build: {
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
