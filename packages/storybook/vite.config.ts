import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import uiVitePlugin from 'ui/vite-plugin-vue-ui'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uiVitePlugin({
      style: 'c2',
      api: './api/',
      apiUrl: '/api/',
      translate: './translate',
      translateUrl: '/test/t'
    })
  ]
})
