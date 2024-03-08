var E = Object.defineProperty;
var G = (n, t, s) => t in n ? E(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var f = (n, t, s) => (G(n, typeof t != "symbol" ? t + "" : t, s), s);
import { f as F, t as j, i as p } from "./toArray-J4lAhJG7.js";
import { i as c } from "./isFilled-B_gpJgL6.js";
import { G as h, i as d } from "./Geo--oUfkiFU.js";
import { u as $ } from "./DataStorage-Bv8gu1PM.js";
import { e as b } from "./executeFunction-B6By_8Og.js";
function U(n, t = "=", s = "&") {
  return F(
    n,
    (e, r) => `${r}${t}${encodeURIComponent(String(e).trim())}`
  ).sort().join(s);
}
var v = /* @__PURE__ */ ((n) => (n.get = "GET", n.post = "POST", n.put = "PUT", n.delete = "DELETE", n))(v || {});
const o = class o {
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
  static getHeaders(t, s = "application/json;charset=UTF-8") {
    if (t !== null) {
      const e = { ...t || {} };
      return s && (e["Content-Type"] = s), e;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl(t) {
    return `${this.url}${t}`.replace("{locale}", h.getLocation()).replace("{country}", h.getCountry()).replace("{language}", h.getLanguage());
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   * @param method method for request /<br>метод запрос
   */
  static getBody(t = {}, s = "GET") {
    if (s !== "GET" && c(t))
      return t instanceof FormData || d(t) ? t : JSON.stringify(t);
  }
  /**
   * Getting data for the body of the get method.<br>
   * Получение данных для тела метода get.
   * @param request this request /<br>данный запрос
   * @param path path to request /<br>путь к запрос
   * @param method method for request /<br>метод запрос
   */
  static getBodyForGet(t, s = "", e = "GET") {
    if (e === "GET") {
      const r = s.match(/\?/) ? "&" : "?", a = typeof t == "object" ? U(t) : t;
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
    return this.url = t, o;
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
  static addResponse(t) {
    return this.response.push(...j(t)), o;
  }
  static getResponse(t = "", s, e) {
    return this.response.find((r) => {
      if ((r == null ? void 0 : r.disable) !== !0 && t === r.path && s === r.method) {
        if (e === (r == null ? void 0 : r.request))
          return !0;
        if (c(e) && c(r.request) && p(e) && p(r.request) && !(e instanceof FormData) && !(r.request instanceof FormData) && Object.values(e).length === Object.values(r.request).length)
          return Object.entries(r.request).reduce(
            (a, [u, l]) => a && l === (e == null ? void 0 : e[u]),
            !0
          );
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
    path: t = "",
    pathFull: s = void 0,
    method: e = "GET",
    request: r = void 0,
    headers: a = {},
    type: u = "application/json;charset=UTF-8",
    init: l = {}
  }) {
    const g = this.getResponse(t, e, r);
    if (g)
      return b(g.response);
    try {
      const i = s ?? this.getUrl(t), T = `${i}${this.getBodyForGet(r, i, e)}`;
      return await (await fetch(T, {
        ...l,
        method: e,
        headers: this.getHeaders(a, u),
        body: this.getBody(r, e)
      })).json();
    } catch (i) {
      console.error(i);
    }
    return {};
  }
};
f(o, "url", $("api", "/")), f(o, "response", []);
let y = o;
export {
  y as A,
  v as a,
  U as g
};
