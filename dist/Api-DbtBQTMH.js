var g = Object.defineProperty;
var m = (r, t, a) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a;
var i = (r, t, a) => (m(r, typeof t != "symbol" ? t + "" : t, a), a);
import { i as y } from "./isFilled-Bk7ZeS55.js";
import { G as e, i as c } from "./Geo-CsoTI0Xl.js";
import { u as l } from "./DataStorage-DLhLvnDX.js";
var p = /* @__PURE__ */ ((r) => (r.get = "GET", r.post = "POST", r.put = "PUT", r.delete = "DELETE", r))(p || {});
class n {
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
  static getHeaders(t, a = "application/json;charset=UTF-8") {
    if (t !== null) {
      const s = { ...t || {} };
      return a && (s["Content-Type"] = a), s;
    }
  }
  /**
   * Getting the full path to the request script.<br>
   * Получение полного пути к скрипту запроса.
   * @param path path to the script /<br>путь к скрипту
   */
  static getUrl(t) {
    return `${this.isLocalhost() ? this.urlLocalhost : this.url}${t}`.replace("{locale}", e.getLocation()).replace("{country}", e.getCountry()).replace("{language}", e.getLanguage());
  }
  /**
   * Get access to a script by the name of the team.<br>
   * Получение к скрипту по названию команды.
   * @param command name of the team /<br>название команды
   */
  static getUrlByCommand(t) {
    return this.isLocalhost() ? `${this.urlCommand}/${t}.json` : `${this.urlCommand}/?command=${t}`;
  }
  /**
   * Getting data for the body.<br>
   * Получение данных для тела.
   * @param request this request /<br>данный запрос
   */
  static getBody(t) {
    if (y(t))
      return t instanceof FormData || c(t) ? t : JSON.stringify(t);
  }
  /**
   * To execute a request.<br>
   * Выполнить запрос.
   * @param pathRequest query string or list of parameters /<br>строка запроса или список параметров
   */
  static async response(t) {
    return c(t) ? await this.fetch({
      path: t
    }) : await this.fetch(t);
  }
  /**
   * Execute a query by the name of the team.<br>
   * Выполнить запрос по названию команды.
   * @param command name of the team /<br>название команды
   * @param request query string or list of parameters /<br>строка запроса или список параметров
   */
  static async responseByCommand(t, a) {
    return await this.fetch({
      path: this.getUrlByCommand(t),
      ...a ?? {}
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
    method: a = "GET",
    request: s = void 0,
    headers: h = {},
    type: u = "application/json;charset=UTF-8",
    init: d = {}
  }) {
    try {
      const o = this.getHeaders(h, u), f = o && a === "GET" ? "POST" : a;
      return await (await fetch(this.getUrl(t), {
        ...d,
        method: f,
        headers: o,
        body: this.getBody(s)
      })).json();
    } catch (o) {
      console.error(o);
    }
    return {};
  }
}
i(n, "url", l("api", "/")), i(n, "urlLocalhost", `${l("BASE_URL", "/")}public/`), i(n, "urlCommand", "ui");
export {
  n as A,
  p as a
};
