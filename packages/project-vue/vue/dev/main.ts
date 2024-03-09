import { createApp, type Plugin } from 'vue'
import { Api, isFilled } from 'ui'
import { registrationUi } from 'ui/registration'

import '../src/style.scss'

import App from './../src/App.vue'

import './../src/tailwind.css'

import { init } from './../src/init'

import { createRouter } from 'vue-router'
import { router } from './../src/router'

import { createStore } from 'vuex'
import { store } from './../src/store'

import api from '../src/response'
import translate from '../src/translate'

const app = createApp(App)

app.use(createStore(store))

if (isFilled(router.routes)) {
  app.use(createRouter(router) as Plugin<[]>)
}

;(async () => {
  Api.addResponse(api)

  await init(app)
  await registrationUi(app, {
    translate
  })
})().then(() => app.mount('#app'))
