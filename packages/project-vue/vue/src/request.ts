import { ApiResponse } from 'ui'

// TODO: Объект для тестового запроса, подключается только в режиме разработчика
export default [
  {
    path: 'user',
    method: 'GET',
    response: () => {
      return {
        id: '1234567',
        name: 'Is Test User'
      }
    }
  }
] as ApiResponse[]
