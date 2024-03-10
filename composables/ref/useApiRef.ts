import { type Ref, shallowRef, watchEffect } from 'vue'
import { toRefItem } from '../../functions/ref/toRefItem'

import {
  Api,
  type ApiFetch,
  ApiMethodItem
} from '../../classes/Api'

/**
 * Returns data for working with requests.<br>
 * Возвращает данные для работы с запросами.
 * @param path path to request /<br>путь к запрос
 * @param options data for the request /<br>данные для запроса
 */
export function useApiRef<R> (
  path: string,
  options?: ApiMethodItem | ApiFetch
) {
  const getOptions = (options?: string | ApiFetch): ApiFetch => {
    if (typeof options === 'string') {
      return { method: options as ApiMethodItem }
    }

    if (options) {
      return options
    }

    return {} as ApiFetch
  }

  const reset = async () => {
    const response = await Api.request<Record<string, any>>({
      ...request.value,
      path,
      pathFull: undefined
    })

    console.log('response', response)

    if (response) {
      if ('data' in response) {
        data.value = response.data as R
      } else {
        data.value = response as R
      }
    } else {
      data.value = undefined
    }
  }

  const update = (options?: ApiFetch) => {
    if (options) {
      request.value = getOptions(options)
    }

    reset().then()
  }

  const data = shallowRef<R>()
  const request: Ref<ApiFetch> = toRefItem(getOptions(options))

  console.log('data', data)

  watchEffect(() => {
    console.log('watchEffect')
    reset().then()
  })

  return {
    data,
    request,
    update
  }
}
