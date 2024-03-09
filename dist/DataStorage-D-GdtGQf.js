var g = Object.defineProperty;
var I = (i, e, t) => e in i ? g(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var u = (i, e, t) => (I(i, typeof e != "symbol" ? e + "" : e, t), t);
import { e as d } from "./executeFunction-B6By_8Og.js";
function f() {
  return typeof window < "u";
}
function v(i) {
  return i == null;
}
function o(i, e = !1) {
  if (typeof i == "string") {
    const t = i.trim();
    switch (t) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(t))
          try {
            return JSON.parse(t);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(t))
            return parseFloat(t);
          if (/^[0-9]+$/.exec(t))
            return parseInt(t, 10);
          if (e && window && t in window && typeof window[t] == "function")
            return window[t];
        }
    }
  }
  return i;
}
var r = { VITE_PREFIX: "__dUi", VITE_DESIGNS: "m2,m3,c1,c2", VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", VITE_UI_GIT: "git+https://github.com/dxtmisha/ui-playground.git", VITE_UI_WEB: "https://ru.dev2.coralclub.app", VITE_UI_PATH: "/ui/icons/", VITE_UI_API_URL: "/restApi/", VITE_UI_API_TRANSLATE: "/restApi/uiTranslate", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const c = {
  api: {
    index: "UI_API_URL",
    value: "/api/"
  },
  apiTranslate: {
    index: "UI_API_TRANSLATE",
    value: "ui/?command=translate"
  },
  cache: {
    index: "UI_CACHE",
    value: 7 * 24 * 60 * 60
  },
  iconPath: {
    index: "UI_ICON_PATH",
    value: "/icons/"
  },
  language: {
    index: "UI_LANGUAGE",
    value: "en-GB"
  },
  prefix: {
    index: "UI_PREFIX",
    value: "ui-playground-"
  }
};
class E {
  /**
   * Constructor
   * @param index property name /<br>название свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    this.index = e;
  }
  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get(e) {
    var s, n, h;
    const t = this.getName();
    if (import.meta) {
      const a = (r == null ? void 0 : r[t]) ?? (r == null ? void 0 : r[`VITE_${t}`]);
      if (a)
        return o(a);
    }
    if (typeof process < "u") {
      const a = ((s = process.env) == null ? void 0 : s[t]) ?? ((n = process.env) == null ? void 0 : n[`VUE_APP_${t}`]) ?? ((h = process.env) == null ? void 0 : h[`NUXT_${t}`]);
      if (a)
        return o(a);
    }
    return o(
      e ?? this.getValue()
    );
  }
  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  getBasic() {
    return c == null ? void 0 : c[this.index];
  }
  /**
   * Get the full key name in env.<br>
   * Получаем полное название ключа в env.
   */
  getName() {
    var e;
    return ((e = this.getBasic()) == null ? void 0 : e.index) ?? this.index;
  }
  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  getValue() {
    var e;
    return (e = this.getBasic()) == null ? void 0 : e.value;
  }
}
function p(i, e) {
  return new E(i).get(e);
}
class T {
  /**
   * Constructor
   * @param name value name /<br>название значения
   * @param isSession should we use a session? /<br>использовать ли сессию?
   */
  constructor(e, t = !1) {
    u(this, "value");
    u(this, "age");
    this.name = e, this.isSession = t;
    const s = `${t ? "session" : "storage"}#${e}`;
    if (s in l)
      return l[s];
    const n = this.getValue();
    n && (this.value = n.value, this.age = n.age), l[s] = this;
  }
  /**
   * Getting data from local storage.<br>
   * Получение данных из локального хранилища.
   * @param defaultValue default value /<br>значение по умолчанию
   * @param cache cache time /<br>время кэширования
   */
  get(e, t) {
    if (this.value && this.isCache(t))
      return this.value;
    if (e)
      return this.set(e);
  }
  /**
   * Changing data in storage.<br>
   * Изменение данных в хранилище.
   * @param value new values /<br>новые значения
   */
  set(e) {
    var t, s;
    return this.value = d(e), this.age = (/* @__PURE__ */ new Date()).getTime(), this.value === void 0 ? (t = this.getMethod()) == null || t.removeItem(this.getIndex()) : (s = this.getMethod()) == null || s.setItem(this.getIndex(), JSON.stringify({
      value: this.value,
      age: this.age
    })), this.value;
  }
  /**
   * Checks for storage time limit.<br>
   * Проверяет на лимит времени хранения.
   * @param cache cache time /<br>время кэширования
   */
  isCache(e) {
    return v(e) || this.age && this.age + e * 1e3 >= (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * Returns an object for working with storage.<br>
   * Возвращает объект для работы с хранилищем.
   */
  getMethod() {
    if (f())
      return this.isSession ? window == null ? void 0 : window.sessionStorage : window == null ? void 0 : window.localStorage;
  }
  /**
   * Getting the user name in the storage.<br>
   * Получение имени пользователя в хранилище.
   */
  getIndex() {
    return `${p("prefix", "")}${this.name}`;
  }
  /**
   * Getting data from storage.<br>
   * Получение данных из хранилища.
   */
  getValue() {
    var t;
    const e = (t = this.getMethod()) == null ? void 0 : t.getItem(this.getIndex());
    if (e)
      try {
        return JSON.parse(e);
      } catch {
      }
  }
}
const l = {};
export {
  T as D,
  E,
  f as a,
  v as i,
  o as t,
  p as u
};
