import { executeFunction } from '../functions/executeFunction'
import { getRequestString } from '../functions/getRequestString'
import { isFilled } from '../functions/isFilled'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isString } from '../functions/isString'
import { toArray } from '../functions/toArray'

import { Loading } from './Loading'
import { Geo } from './Geo'

import { useEnv } from '../composables/useEnv'

export enum ApiMethodItem {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE'
}

export type ApiMethod = string & ApiMethodItem
export type ApiFetch = {
  api?: boolean
  path?: string
  pathFull?: string
  method?: ApiMethod
  request?: FormData | Record<string, any> | string
  auth?: boolean
  headers?: Record<string, string>
  type?: string
  global?: boolean
  init?: RequestInit
}
export type ApiResponse = {
  path: string
  method: ApiMethod
  request?: ApiFetch['request']
  response: any | ((request?: ApiFetch['request']) => any)
  disable?: boolean
}

const apiFirst: ApiResponse[] = []

/**
 * Class for working with requests.<br>
 * Класс для работы с запросами.
 */
export class Api {
  protected static url = useEnv<string>('api', '/')
  protected static response: ApiResponse[] = []

  /**
   * Is the server local.<br>
   * Является ли сервер локальный.
   */
  static isLocalhost (): boolean {
    return typeof location === 'undefined' || location.hostname === 'localhost'
  }

  /**
   * Getting the header for the request.<br>
   * Получение заголовка для запроса.
   * @param value list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   */
  static getHeaders (
    value?: Record<string, string> | null,
    type = 'application/json;charset=UTF-8'
  ): Record<string, string> | undefined {
    if (value !== null) {
      const headers = { ...(value || {}) }

      if (type) {
        headers['Content-Type'] = type
      }

      return headers
    }

    return undefined
  }

  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   * @param api adding a path to the site’s API /<br>добавление пути к API сайта
   */
  static getUrl (path: string, api: boolean = true): string {
    return `${api ? this.url : ''}${path}`
      .replace('{locale}', Geo.getLocation())
      .replace('{country}', Geo.getCountry())
      .replace('{language}', Geo.getLanguage())
  }

  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   * @param method method for request /<br>метод запрос
   */
  static getBody (
    request: ApiFetch['request'] = {},
    method = ApiMethodItem.get
  ): string | FormData | undefined {
    if (
      method !== ApiMethodItem.get &&
      isFilled(request)
    ) {
      if (
        request instanceof FormData ||
        isString(request)
      ) {
        return request
      }

      return JSON.stringify(request)
    }

    return undefined
  }

  /**
   * Getting data for the body of the get method.<br>
   * Получение данных для тела метода get.
   * @param request this request /<br>данный запрос
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   */
  static getBodyForGet (
    request: ApiFetch['request'],
    path: string = '',
    method = ApiMethodItem.get
  ): string {
    if (method === ApiMethodItem.get) {
      const type = path.match(/\?/) ? '&' : '?'
      const body = typeof request === 'object' ? getRequestString(request) : request

      if (isFilled(body)) {
        return `${type}${body}`
      }
    }

    return ''
  }

  /**
   * Change the base path to the script.<br>
   * Изменить базовый путь к скрипту.
   * @param url path to the script /<br>путь к скрипту
   */
  static setUrl (url: string): Api {
    this.url = url
    return Api
  }

  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async request<T> (pathRequest: string | ApiFetch): Promise<T> {
    if (isString(pathRequest)) {
      return await this.fetch<T>({
        path: pathRequest
      })
    }

    return await this.fetch<T>(pathRequest)
  }

  /**
   * Sends a get method request.<br>
   * Отправляет запрос метода get.
   * @param request list of parameters /<br>список параметров
   */
  static get<T> (request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.get
    })
  }

  /**
   * Sends a post method request.<br>
   * Отправляет запрос метода post.
   * @param request list of parameters /<br>список параметров
   */
  static post<T> (request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.post
    })
  }

  /**
   * Sends a put method request.<br>
   * Отправляет запрос метода put.
   * @param request list of parameters /<br>список параметров
   */
  static put<T> (request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.put
    })
  }

  /**
   * Sends a delete method request.<br>
   * Отправляет запрос метода delete.
   * @param request list of parameters /<br>список параметров
   */
  static delete<T> (request: ApiFetch): Promise<T> {
    return this.request({
      ...request,
      method: ApiMethodItem.delete
    })
  }

  /**
   * Adding cached requests.<br>
   * Добавление кешированных запросов.
   * @param response data for caching /<br>данные для кеширования
   */
  static addResponse (
    response: ApiResponse | ApiResponse[]
  ): Api {
    this.response.push(...toArray(response))
    return Api
  }

  /**
   * Checks if there is a global cached request, if there is, returns it.<br>
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request /<br>ссылка на запрос
   * @param method request method /<br>метод запроса
   * @param request data for the request /<br>данные для запроса
   */
  protected static getResponse (
    path: string = '',
    method: ApiMethod,
    request?: ApiFetch['request']
  ): ApiResponse | undefined {
    return this.response.find(item => {
      if (
        item?.disable !== true &&
        path === item.path &&
        method === item.method &&
        apiFirst.indexOf(item) === -1
      ) {
        let response = false

        if (request === item?.request) {
          response = true
        }

        if (
          isFilled(request) &&
          isFilled(item.request) &&
          isObjectNotArray(request) &&
          isObjectNotArray(item.request) &&
          !(request instanceof FormData) &&
          !(item.request instanceof FormData) &&
          Object.values(request).length === Object.values(item.request).length
        ) {
          response = Object.entries(item.request).reduce(
            (accum, [key, value]) => (accum && value === request?.[key]),
            true
          )
        }

        if (response) {
          apiFirst.push(item)
          return true
        }
      }

      return false
    })
  }

  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   * @param request body of the request /<br>тело запроса
   * @param auth enable authorization verification /<br>включить проверку на авторизацию
   * @param headers list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   * @param init additional parameters /<br>дополнительных параметров
   */
  protected static async fetch<T> ({
    api = true,
    path = '',
    pathFull = undefined,
    method = ApiMethodItem.get,
    request = undefined,
    headers = {},
    type = 'application/json;charset=UTF-8',
    global = method === ApiMethodItem.get,
    init = {}
  }: ApiFetch): Promise<T> {
    if (global) {
      const response = this.getResponse(path, method, request)

      if (response) {
        return executeFunction(response.response)
      }
    }

    let data: T = {} as T

    Loading.show()

    try {
      const pathFinal = pathFull ?? this.getUrl(path, api)
      const url = `${pathFinal}${this.getBodyForGet(request, pathFinal, method)}`

      data = await (await fetch(url, {
        ...init,
        method,
        headers: this.getHeaders(headers, type),
        body: this.getBody(request, method)
      })).json()
    } catch (e) {
      console.error(e)
    }

    Loading.hide()

    return data
  }
}
