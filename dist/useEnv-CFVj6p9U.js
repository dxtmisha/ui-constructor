function I(e) {
  return typeof e == "string";
}
function l(e) {
  return e == null;
}
function d(e) {
  if (e)
    switch (typeof e) {
      case "bigint":
      case "number":
        return e !== 0;
      case "boolean":
        return e;
      case "function":
      case "symbol":
        return !0;
      case "object":
        return Array.isArray(e) ? e.length > 0 : Object.values(e).some((t) => !l(t));
      case "string":
        return !["", "undefined", "null", "0", "false", "[]"].includes(e);
      case "undefined":
        return !1;
      default:
        return !!e;
    }
  return !1;
}
function u(e, t = !1) {
  if (typeof e == "string") {
    const n = e.trim();
    switch (n) {
      case "undefined":
        return;
      case "null":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        if (/^[{[]/.exec(n))
          try {
            return JSON.parse(n);
          } catch {
          }
        else {
          if (/^[0-9]+\.[0-9.]+$/.exec(n))
            return parseFloat(n);
          if (/^[0-9]+$/.exec(n))
            return parseInt(n, 10);
          if (t && window && n in window && typeof window[n] == "function")
            return window[n];
        }
    }
  }
  return e;
}
var r = { VITE_PREFIX: "__dUi", VITE_DESIGNS: "m2,m3,c1,c2", VITE_DESIGNS_MAIN: "m3", VITE_DESIGNS_GLOBAL: "UI", VITE_UI_GIT: "git+https://github.com/dxtmisha/ui-playground.git", VITE_UI_WEB: "https://ru.dev2.coralclub.app", VITE_UI_PATH: "/ui/", VITE_UI_API_TRANSLATE: "restApi/uiTranslate", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const a = {
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
class f {
  /**
   * Constructor
   * @param index property name /<br>название свойства
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.index = t;
  }
  /**
   * Returns the values from the env environment.<br>
   * Возвращает значения из окружения env.
   * @param defaultValue default property value /<br>значение свойства по умолчанию
   */
  get(t) {
    var i, c, o;
    const n = this.getName();
    if (import.meta) {
      const s = (r == null ? void 0 : r[n]) ?? (r == null ? void 0 : r[`VITE_${n}`]);
      if (s)
        return u(s);
    }
    if (typeof process < "u") {
      const s = ((i = process.env) == null ? void 0 : i[n]) ?? ((c = process.env) == null ? void 0 : c[`VUE_APP_${n}`]) ?? ((o = process.env) == null ? void 0 : o[`NUXT_${n}`]);
      if (s)
        return u(s);
    }
    return u(
      t ?? this.getValue()
    );
  }
  /**
   * Getting a basic object with a key name and a default value.<br>
   * Получение базового объекта с названием ключа и значения по умолчанию.
   * @private
   */
  getBasic() {
    return a == null ? void 0 : a[this.index];
  }
  /**
   * Get the full key name in env.<br>
   * Получаем полное название ключа в env.
   */
  getName() {
    var t;
    return ((t = this.getBasic()) == null ? void 0 : t.index) ?? this.index;
  }
  /**
   * Gets values by its keys.<br>
   * Получает значения по его ключам.
   */
  getValue() {
    var t;
    return (t = this.getBasic()) == null ? void 0 : t.value;
  }
}
function E(e, t) {
  return new f(e).get(t);
}
export {
  f as E,
  d as a,
  l as b,
  I as i,
  u as t,
  E as u
};
