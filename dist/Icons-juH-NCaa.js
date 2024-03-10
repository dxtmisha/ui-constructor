var N = Object.defineProperty;
var d = (a, t, i) => t in a ? N(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var o = (a, t, i) => (d(a, typeof t != "symbol" ? t + "" : t, i), i);
import { f as m } from "./toArray-J4lAhJG7.js";
import { u as f, a as w } from "./DataStorage-OPOHkMtN.js";
import { A as p } from "./Api-DCB_1-X5.js";
const c = "__UI_ICON", u = 320, l = "--LOAD--", s = class s {
  /**
   * Checks if the given icon is in the list of connected icons.<br>
   * Проверяет, есть ли данная иконка в списке подключенных иконок.
   * @param index icon name /<br>название иконки
   */
  static is(t) {
    return t in this.icons || this.getName(t) in this.icons;
  }
  /**
   * Returns the icon by the name.<br>
   * Возвращает иконку по названию.
   * @param index icon name /<br>название иконки
   * @param url path to the storage location of the icon, if the icon does not exist /<br>
   * путь к месту хранения иконки, если иконка не существует
   * @param wait waiting time for picture loading <br>время ожидания загрузки картинки
   */
  static async get(t, i = "", e = 1e3 * 60 * 3) {
    var n, h;
    const r = ((n = this.icons) == null ? void 0 : n[this.getName(t)]) ?? ((h = this.icons) == null ? void 0 : h[t]) ?? `${t.replace(/^@/, i ?? this.url)}.svg`;
    return typeof r == "string" ? r === l && e > 0 ? (await this.wait(), this.get(t, i, e - u)) : r : await r;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return m(this.icons, (t, i) => i.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(t, i) {
    this.icons[this.getName(t)] = i;
  }
  /**
   * Adding custom icons in loading mode.<br>
   * Добавление пользовательских иконок в режиме загрузки.
   * @param index icon name /<br>название иконки
   */
  static addLoad(t) {
    this.icons[this.getName(t)] = l;
  }
  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal(t, i) {
    this.icons[this.getName(t)] = `${this.urlGlobal}${i}`;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(t) {
    m(t, (i, e) => this.add(e, i));
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
  static wait() {
    return new Promise((t) => setTimeout(() => t(), u));
  }
};
o(s, "icons", {}), o(s, "url", f("UI_PATH") ?? "/icons/"), o(s, "urlGlobal", `${p.isLocalhost(), ""}${s.url}`), w() && (c in window || (window[c] = {}), s.icons = window[c]);
let g = s;
export {
  g as I
};
