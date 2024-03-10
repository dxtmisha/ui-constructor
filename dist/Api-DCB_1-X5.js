var $ = Object.defineProperty;
var b = (a, t, e) => t in a ? $(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var c = (a, t, e) => (b(a, typeof t != "symbol" ? t + "" : t, e), e);
import { e as U } from "./getElement-BR44wGpt.js";
import { f as D, t as S, i as T } from "./toArray-J4lAhJG7.js";
import { i as h } from "./isFilled-DceQGTNk.js";
import { G as g, i as y } from "./Geo-D8QhPkzz.js";
import { a as N, u as B } from "./DataStorage-OPOHkMtN.js";
import { E as v } from "./EventItem-CPq_Pubk.js";
function C(a, t = "=", e = "&") {
  return D(
    a,
    (r, s) => `${s}${t}${encodeURIComponent(String(r).trim())}`
  ).sort().join(e);
}
const G = "ui-loading", u = class u {
  /**
   * Check if the loader is active now.<br>
   * Проверить, активен ли сейчас загрузчик.
   */
  static is() {
    return this.value > 0;
  }
  /**
   * Shows the loader.<br>
   * Показывает загрузчик.
   */
  static show() {
    this.value++, this.dispatch();
  }
  /**
   * Hides the loader.<br>
   * Скрывает загрузчик.
   */
  static hide() {
    this.is() && (this.value--, this.dispatch());
  }
  /**
   * Event registration to listen for data changes.<br>
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element /<br>элемент
   */
  static registrationEvent(t, e) {
    new v(window, G, t).setElementControl(e).start();
  }
  /**
   * Calls the event listener.<br>
   * Вызывает слушателя событий.
   */
  static dispatch() {
    this.event.dispatch({ loading: this.is() });
  }
};
c(u, "value", 0), c(u, "event"), N() && (u.event = new v(window, G));
let l = u;
var P = /* @__PURE__ */ ((a) => (a.get = "GET", a.post = "POST", a.put = "PUT", a.delete = "DELETE", a))(P || {});
const w = [], o = class o {
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
      const r = { ...t || {} };
      return e && (r["Content-Type"] = e), r;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   * @param api adding a path to the site’s API /<br>добавление пути к API сайта
   */
  static getUrl(t, e = !0) {
    return `${e ? this.url : ""}${t}`.replace("{locale}", g.getLocation()).replace("{country}", g.getCountry()).replace("{language}", g.getLanguage());
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   * @param method method for request /<br>метод запрос
   */
  static getBody(t = {}, e = "GET") {
    if (e !== "GET" && h(t))
      return t instanceof FormData || y(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.<br>
   * Получение данных для тела метода get.
   * @param request this request /<br>данный запрос
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   */
  static getBodyForGet(t, e = "", r = "GET") {
    if (r === "GET") {
      const s = e.match(/\?/) ? "&" : "?", i = typeof t == "object" ? C(t) : t;
      if (h(i))
        return `${s}${i}`;
    }
    return "";
  }
  /**
   * Change the base path to the script.<br>
   * Изменить базовый путь к скрипту.
   * @param url path to the script /<br>путь к скрипту
   */
  static setUrl(t) {
    return this.url = t, o;
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async request(t) {
    return y(t) ? await this.fetch({
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
    return this.response.push(...S(t)), o;
  }
  /**
   * Checks if there is a global cached request, if there is, returns it.<br>
   * Проверяет, есть ли глобальный кешированный запрос, если есть, возвращает его.
   * @param path link to the request /<br>ссылка на запрос
   * @param method request method /<br>метод запроса
   * @param request data for the request /<br>данные для запроса
   */
  static getResponse(t = "", e, r) {
    return this.response.find((s) => {
      if ((s == null ? void 0 : s.disable) !== !0 && t === s.path && e === s.method && w.indexOf(s) === -1) {
        let i = !1;
        if (r === (s == null ? void 0 : s.request) && (i = !0), h(r) && h(s.request) && T(r) && T(s.request) && !(r instanceof FormData) && !(s.request instanceof FormData) && Object.values(r).length === Object.values(s.request).length && (i = Object.entries(s.request).reduce(
          (f, [p, d]) => f && d === (r == null ? void 0 : r[p]),
          !0
        )), i)
          return w.push(s), !0;
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
    pathFull: r = void 0,
    method: s = "GET",
    request: i = void 0,
    headers: f = {},
    type: p = "application/json;charset=UTF-8",
    global: d = s === "GET",
    init: j = {}
  }) {
    if (d) {
      const n = this.getResponse(e, s, i);
      if (n)
        return U(n.response);
    }
    let E = {};
    l.show();
    try {
      const n = r ?? this.getUrl(e, t), O = `${n}${this.getBodyForGet(i, n, s)}`;
      E = await (await fetch(O, {
        ...j,
        method: s,
        headers: this.getHeaders(f, p),
        body: this.getBody(i, s)
      })).json();
    } catch (n) {
      console.error(n);
    }
    return l.hide(), E;
  }
};
c(o, "url", B("api", "/")), c(o, "response", []);
let F = o;
export {
  F as A,
  l as L,
  P as a,
  C as g
};
