import { ApiResponse } from 'ui'

export default [
  {
    path: 'user',
    response: () => {
      return {
        id: '1234567',
        name: 'Is Test User'
      }
    }
  }
] as ApiResponse[]
