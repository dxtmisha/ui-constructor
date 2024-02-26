var l = Object.defineProperty;
var m = (e, t, s) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var a = (e, t, s) => (m(e, typeof t != "symbol" ? t + "" : t, s), s);
import { f } from "./forEach-B1ZDH1yu.js";
import { u as d, a as r, i as g } from "./useEnv-CFVj6p9U.js";
import { t as p } from "./toArray-rswbj5Xf.js";
import { A as c, G as y } from "./Api-xb9Hb97W.js";
class o {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(t) {
    var i;
    const s = this.getName(t);
    return s in this.data ? this.data[s] : (c.isLocalhost() || await this.add(t), ((i = this.data) == null ? void 0 : i[s]) ?? t);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync(t) {
    const s = this.getName(t);
    return s in this.data ? this.data[s] : t;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getList(t) {
    return new Promise((s) => {
      const i = {};
      let n = 0;
      for (const h of t)
        this.get(h).then((u) => {
          i[h] = u, ++n >= t.length && s(i);
        });
    });
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getListSync(t) {
    const s = {};
    for (const i of t)
      s[i] = this.getSync(i);
    return s;
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(t) {
    return new Promise((s) => {
      this.cache.push(...p(t)), this.resolveList.push(s), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((i) => i()), this.resolveList = [];
        });
      }, 160);
    });
  }
  /**
   * Adds texts in sync mode.<br>
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static addSync(t) {
    f(t, (s, i) => {
      g(s) && r(s) && (this.data[this.getName(i)] = s);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.<br>
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (r(t))
      if (c.isLocalhost())
        this.addSync(t);
      else {
        const s = Object.keys(t);
        s.length > 0 && await this.add(s);
      }
  }
  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  static getName(t) {
    return `${y.getLocation()}-${t}`;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = c.isLocalhost() ? this.urlLocalhost : this.url, s = await c.response({
      path: t,
      request: {
        list: this.cache
      }
    });
    return (s == null ? void 0 : s.data) ?? {};
  }
  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((s) => {
      this.data[this.getName(s)] = (t == null ? void 0 : t[s]) ?? "";
    }), this.cache = [];
  }
}
a(o, "url", d("apiTranslate")), a(o, "urlLocalhost", "translate.json"), a(o, "data", {}), a(o, "cache", []), a(o, "resolveList", []), a(o, "timeout");
export {
  o as T
};