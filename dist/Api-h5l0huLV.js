var F = Object.defineProperty;
var j = (n, t, e) => t in n ? F(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var h = (n, t, e) => (j(n, typeof t != "symbol" ? t + "" : t, e), e);
import { e as $ } from "./executeFunction-B6By_8Og.js";
import { f as b, t as O, i as g } from "./toArray-J4lAhJG7.js";
import { i as c } from "./isFilled-C9CTZZIi.js";
import { G as p, i as d } from "./Geo-BWOHrzQ1.js";
import { u as U } from "./DataStorage-D-GdtGQf.js";
function v(n, t = "=", e = "&") {
  return b(
    n,
    (s, r) => `${r}${t}${encodeURIComponent(String(s).trim())}`
  ).sort().join(e);
}
var S = /* @__PURE__ */ ((n) => (n.get = "GET", n.post = "POST", n.put = "PUT", n.delete = "DELETE", n))(S || {});
const y = [], i = class i {
  /**
   * Is the server local.<br>
   * Является ли сервер локальный.
   */
  static isLocalhost() {
    return typeof location > "u" || location.hostname === "localhost";
  }
  /**
   * Getting the header for the request.<br>
   * Получение заголовка для запроса.
   * @param value list of headers /<br>список заголовков
   * @param type type of request /<br>тип запроса
   */
  static getHeaders(t, e = "application/json;charset=UTF-8") {
    if (t !== null) {
      const s = { ...t || {} };
      return e && (s["Content-Type"] = e), s;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   * @param api adding a path to the site’s API /<br>добавление пути к API сайта
   */
  static getUrl(t, e = !0) {
    return `${e ? this.url : ""}${t}`.replace("{locale}", p.getLocation()).replace("{country}", p.getCountry()).replace("{language}", p.getLanguage());
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   * @param method method for request /<br>метод запрос
   */
  static getBody(t = {}, e = "GET") {
    if (e !== "GET" && c(t))
      return t instanceof FormData || d(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.<br>
   * Получение данных для тела метода get.
   * @param request this request /<br>данный запрос
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   */
  static getBodyForGet(t, e = "", s = "GET") {
    if (s === "GET") {
      const r = e.match(/\?/) ? "&" : "?", a = typeof t == "object" ? v(t) : t;
      if (c(a))
        return `${r}${a}`;
    }
    return "";
  }
  /**
   * Change the base path to the script.<br>
   * Изменить базовый путь к скрипту.
   * @param url path to the script /<br>путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, i;
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async request(t) {
    return d(t) ? await this.fetch({
      path: t
    }) : await this.fetch(t);
  }
  /**
   * Sends a get method request.<br>
   * Отправляет запрос метода get.
   * @param request list of parameters /<br>список параметров
   */
  static get(t) {
    return this.request({
      ...t,
      method: "GET"
      /* get */
    });
  }
  /**
   * Sends a post method request.<br>
   * Отправляет запрос метода post.
   * @param request list of parameters /<br>список параметров
   */
  static post(t) {
    return this.request({
      ...t,
      method: "POST"
      /* post */
    });
  }
  /**
   * Sends a put method request.<br>
   * Отправляет запрос метода put.
   * @param request list of parameters /<br>список параметров
   */
  static put(t) {
    return this.request({
      ...t,
      method: "PUT"
      /* put */
    });
  }
  /**
   * Sends a delete method request.<br>
   * Отправляет запрос метода delete.
   * @param request list of parameters /<br>список параметров
   */
  static delete(t) {
    return this.request({
      ...t,
      method: "DELETE"
      /* delete */
    });
  }
  /**
   * Adding cached requests.<br>
   * Добавление кешированных запросов.
   * @param response data for caching /<br>данные для кеширования
   */
  static addResponse(t) {
    return this.response.push(...O(t)), i;
  }
  /**
   * Checks if there is a global cached request, if there is, returns it.<br>
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request /<br>ссылка на запрос
   * @param method request method /<br>метод запроса
   * @param request data for the request /<br>данные для запроса
   */
  static getResponse(t = "", e, s) {
    return this.response.find((r) => {
      if ((r == null ? void 0 : r.disable) !== !0 && t === r.path && e === r.method && y.indexOf(r) === -1) {
        let a = !1;
        if (s === (r == null ? void 0 : r.request) && (a = !0), c(s) && c(r.request) && g(s) && g(r.request) && !(s instanceof FormData) && !(r.request instanceof FormData) && Object.values(s).length === Object.values(r.request).length && (a = Object.entries(r.request).reduce(
          (u, [f, l]) => u && l === (s == null ? void 0 : s[f]),
          !0
        )), a)
          return y.push(r), !0;
      }
      return !1;
    });
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
  static async fetch({
    api: t = !0,
    path: e = "",
    pathFull: s = void 0,
    method: r = "GET",
    request: a = void 0,
    headers: u = {},
    type: f = "application/json;charset=UTF-8",
    global: l = r === "GET",
    init: E = {}
  }) {
    if (l) {
      const o = this.getResponse(e, r, a);
      if (o)
        return $(o.response);
    }
    try {
      const o = s ?? this.getUrl(e, t), G = `${o}${this.getBodyForGet(a, o, r)}`;
      return await (await fetch(G, {
        ...E,
        method: r,
        headers: this.getHeaders(u, f),
        body: this.getBody(a, r)
      })).json();
    } catch (o) {
      console.error(o);
    }
    return {};
  }
};
h(i, "url", U("api", "/")), h(i, "response", []);
let T = i;
export {
  T as A,
  S as a,
  v as g
};
