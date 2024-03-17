import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import { makeIconsC2 } from '../c2/icons.ts'

makeIconsC2()

const app = createApp(App)

app.mount('#app')
