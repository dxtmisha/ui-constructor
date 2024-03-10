import { type App } from 'vue'

export const init = async (app: App): Promise<void> => {
  // TODO: место для подключения плагинов для vue
  console.log('App', app)
}
