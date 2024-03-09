import './../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { router } from '../src/router'
import { store } from '../src/store'
import { init } from '../src/init'

import translate from '../src/translate'

(window as any)?.UI_VUE.addComponent(
  import.meta.env.BASE_URL,
  App,
  router,
  store,
  init,
  Object.keys(translate)
)
