import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registrationUi } from '../library/plugin.ts'

const app = createApp(App)

registrationUi(app, {
  translate: {
    a: 'asd'
  }
}).then(app => app.mount('#app'))
