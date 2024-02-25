var l = Object.defineProperty;
var u = (a, t, i) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var e = (a, t, i) => (u(a, typeof t != "symbol" ? t + "" : t, i), i);
import { f as n } from "./forEach-B1ZDH1yu.js";
import { A as m } from "./Api-xb9Hb97W.js";
import { u as d } from "./useEnv-CFVj6p9U.js";
const s = class s {
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
   */
  static async get(t, i = "") {
    var o, c;
    const r = ((o = this.icons) == null ? void 0 : o[this.getName(t)]) ?? ((c = this.icons) == null ? void 0 : c[t]) ?? `${t.replace(/^@/, i ?? this.url)}.svg`;
    return typeof r == "string" ? r : await r;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return n(this.icons, (t, i) => i.replace(/^@/, ""));
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
    n(t, (i, r) => this.add(r, i));
  }
  /**
   * Returns the icon name.<br>
   * Возвращает название иконки.
   * @param index icon name /<br>название иконки
   */
  static getName(t) {
    return `@${t}`;
  }
};
e(s, "icons", {}), e(s, "url", d("UI_PATH") ?? "/icons/"), e(s, "urlGlobal", `${m.isLocalhost(), ""}${s.url}`), typeof window < "u" && ("__UI__ICON" in window || (window.__UI__ICON = {}), s.icons = window.__UI__ICON);
let h = s;
export {
  h as I
};
