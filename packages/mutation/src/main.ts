import { createApp } from 'vue'
import { registrationUiMain } from 'ui/main'

import App from './App.vue'

const app = createApp(App)

registrationUiMain(app).then(() => app.mount('#ui-app-mutation'))
