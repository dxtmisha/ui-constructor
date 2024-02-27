var m = Object.defineProperty;
var w = (a, t, i) => t in a ? m(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var o = (a, t, i) => (w(a, typeof t != "symbol" ? t + "" : t, i), i);
import { f as h } from "./forEach-B1ZDH1yu.js";
import { u as N, A as f } from "./Api-6wgpqJNV.js";
const u = 320, l = "--LOAD--", s = class s {
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
    var c, n;
    const r = ((c = this.icons) == null ? void 0 : c[this.getName(t)]) ?? ((n = this.icons) == null ? void 0 : n[t]) ?? `${t.replace(/^@/, i ?? this.url)}.svg`;
    return typeof r == "string" ? r === l && e > 0 ? (await this.wait(), this.get(t, i, e - u)) : r : await r;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return h(this.icons, (t, i) => i.replace(/^@/, ""));
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
    h(t, (i, e) => this.add(e, i));
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
o(s, "icons", {}), o(s, "url", N("UI_PATH") ?? "/icons/"), o(s, "urlGlobal", `${f.isLocalhost(), ""}${s.url}`), typeof window < "u" && ("__UI__ICON" in window || (window.__UI__ICON = {}), s.icons = window.__UI__ICON);
let d = s;
export {
  d as I,
  l as a,
  u as b
};
