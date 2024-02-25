import { createApp } from 'vue'
import { registrationUi } from 'ui/main'

import App from './App.vue'

const app = createApp(App)

registrationUi(app).then(() => {
  app.mount('#ui-app-mutation')
})
