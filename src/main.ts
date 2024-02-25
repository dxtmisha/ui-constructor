import { createApp } from 'vue'
import { registrationUi } from '../library/plugin.ts'

import './style.css'
import App from './App.vue'

const app = createApp(App)

registrationUi(app, {
  translate: {
    a: 'asd'
  }
}).then(app => app.mount('#app'))
