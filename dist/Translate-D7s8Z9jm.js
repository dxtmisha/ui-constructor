var l = Object.defineProperty;
var m = (a, t, s) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var e = (a, t, s) => (m(a, typeof t != "symbol" ? t + "" : t, s), s);
import { f as u } from "./forEach-B1ZDH1yu.js";
import { i as n } from "./isFilled-fJLrGjIQ.js";
import { G as d, i as g } from "./Geo-CDcb9TU_.js";
import { t as N } from "./toArray-rswbj5Xf.js";
import { A as h } from "./Api-5iAzmJA2.js";
import { u as p } from "./DataStorage-llJItFej.js";
class c {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(t) {
    var i;
    const s = this.getName(t);
    return s in this.data ? this.data[s] : (h.isLocalhost() || await this.add(t), ((i = this.data) == null ? void 0 : i[s]) ?? t);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   * @param first If set to false, returns an empty string if there is no text /<br>
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getSync(t, s = !1) {
    const i = this.getName(t);
    return i in this.data ? this.data[i] : s ? " " : t;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getList(t) {
    return new Promise((s) => {
      const i = {};
      let o = 0;
      for (const r of t)
        this.get(r).then((f) => {
          i[r] = f, ++o >= t.length && s(i);
        });
    });
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text /<br>
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getListSync(t, s = !1) {
    const i = {};
    for (const o of t)
      i[o] = this.getSync(o, s);
    return i;
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(t) {
    return new Promise((s) => {
      this.getNamesNone(t).length > 0 ? (this.cache.push(...this.getNamesNone(t)), this.resolveList.push(s), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((o) => o()), this.resolveList = [];
        });
      }, 160)) : s();
    });
  }
  /**
   * Adds texts in sync mode.<br>
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static addSync(t) {
    u(t, (s, i) => {
      g(s) && n(s) && (this.data[this.getName(i)] = s);
    });
  }
  /**
   * Adding data in the form of a query or directly, depending on the execution environment.<br>
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value /<br>список текстов в виде ключ-значение
   */
  static async addNormalOrSync(t) {
    if (n(t))
      if (h.isLocalhost())
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
    return `${d.getLocation()}-${t}`;
  }
  /**
   * Returns a list of names that are not yet in the list.<br>
   * Возвращает список имен, которых еще нет в списке.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static getNamesNone(t) {
    const s = [];
    return N(t).forEach((i) => {
      i !== "__TRANSLATE_START__" && i !== "__TRANSLATE_END__" && !(this.getName(i) in this.data) && s.push(i);
    }), s;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = h.isLocalhost() ? this.urlLocalhost : this.url, s = await h.response({
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
e(c, "url", p("apiTranslate")), e(c, "urlLocalhost", "translate.json"), e(c, "data", {}), e(c, "cache", []), e(c, "resolveList", []), e(c, "timeout");
export {
  c as T
};
