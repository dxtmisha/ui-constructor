import { shallowRef } from 'vue'
import { Loading } from '../../classes/Loading.ts'

/**
 * Returns the loading status.<br>
 * Возвращает статус загрузки.
 */
export function useLoadingRef () {
  const item = shallowRef(Loading.is())

  Loading.registrationEvent(({ detail }) => {
    item.value = detail.loading
  })

  return item
}
