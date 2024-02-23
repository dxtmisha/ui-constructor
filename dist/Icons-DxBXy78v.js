var n = Object.defineProperty;
var u = (a, t, s) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var e = (a, t, s) => (u(a, typeof t != "symbol" ? t + "" : t, s), s);
import { u as g, k as m, f as o } from "./Api-BN9TTpr9.js";
const i = class i {
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
  static async get(t, s = "") {
    var c, h;
    const r = ((c = this.icons) == null ? void 0 : c[this.getName(t)]) ?? ((h = this.icons) == null ? void 0 : h[t]) ?? `${t.replace(/^@/, s ?? this.url)}.svg`;
    return typeof r == "string" ? r : await r;
  }
  /**
   * Returns a list of names of all registered icons.<br>
   * Возвращает список названий всех зарегистрированных иконок.
   */
  static getNameList() {
    return o(this.icons, (t, s) => s.replace(/^@/, ""));
  }
  /**
   * Adding custom icons.<br>
   * Добавление пользовательских иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static add(t, s) {
    this.icons[this.getName(t)] = s;
  }
  /**
   * Adding custom global icons.<br>
   * Добавление пользовательских глобальных иконок.
   * @param index icon name /<br>название иконки
   * @param file path to the file /<br>путь к файлу
   */
  static addGlobal(t, s) {
    this.icons[this.getName(t)] = `${this.urlGlobal}${s}`;
  }
  /**
   * Adding an icon by the list.<br>
   * Добавление иконки по списку.
   * @param list list of icons /<br>список иконки
   */
  static addByList(t) {
    o(t, (s, r) => this.add(r, s));
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
e(i, "icons", {}), e(i, "url", g("UI_PATH") ?? "/icons/"), e(i, "urlGlobal", `${m.isLocalhost(), ""}${i.url}`);
let l = i;
export {
  l as I
};
