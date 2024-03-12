var ve = Object.defineProperty;
var me = (e, t, r) => t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var d = (e, t, r) => (me(e, typeof t != "symbol" ? t + "" : t, r), r);
import { e as kt, d as Vt, r as k, D as $t, a as ye, b as _e, g as be, c as Ee, f as Oe, s as we, u as Ae } from "./getClipboardData-C58U0kqa.js";
import { a as ct, c as ut, G as S, i as Ne } from "./Geo-BOuiw8Eo.js";
import { c as Ce, g as Se, s as De } from "./createElement-Bvijtmfm.js";
import { e as xe } from "./eventStopPropagation-fHm2p5BF.js";
import { e as H, g as Me, i as Ie, a as Le } from "./getElement-uQ-JTFk-.js";
import { a as C, f as w, t as Gt, i as Te } from "./toArray-J4lAhJG7.js";
import { g as Rt, a as Ft, f as je } from "./getMouseClientY-BILUOOAB.js";
import { K as et, M as V, t as Pt, G as ke, b as Ve, c as $e, g as Ge, a as Re } from "./MutationDataItem-BkaAFILl.js";
import { g as Fe, r as Pe } from "./getElementId-D4gB7mP1.js";
import { E as Ut, g as Ue, i as Be } from "./EventItem-CNRiCeQO.js";
import { g as Bt, A as Kt, L as lt, a as Ke } from "./Api-DPTFo5Em.js";
import { i as He } from "./inArray-BLmbg9f_.js";
import { i as We } from "./isArray-QlWcxgml.js";
import { D as W, u as Ht, i as P, t as mt, E as qe } from "./DataStorage-BS0mwKb9.js";
import { i as q } from "./isFilled-ClO-1E4U.js";
import { i as Qe } from "./isNull-CjWwlQS3.js";
import { computed as f, isRef as Ye, ref as yt, inject as ze, watch as y, effectScope as Je, reactive as Xe, createApp as Ze, triggerRef as tr, shallowRef as D, watchEffect as Wt } from "vue";
import { g as qt } from "./getBind-CgHMfjrB.js";
import { g as v, D as er, c as rr, a as ir, b as nr, r as sr, t as or } from "./DesignConstructorAbstract-pm1V7i1G.js";
import { C as Qt, t as ft, G as Yt } from "./GeoIntl-DH3GBVnO.js";
import { t as ar } from "./toNumber-eA5ODeva.js";
import { a as zt, G as cr } from "./GeoFlag-DfvLx1lW.js";
import { I as ur } from "./Icons-CdwVzsbE.js";
import { T as U } from "./Translate-uy9VsNDO.js";
import { D as lr, a as fr, b as hr } from "./DesignAsyncAbstract-Bi5cMulT.js";
import { M as dr, a as pr, b as gr, c as vr } from "./Mutation-DfMpPPdj.js";
import { createRouter as mr } from "vue-router";
function yr(e) {
  var t;
  return (e == null ? void 0 : e.key) ?? (e == null ? void 0 : e.code) ?? ((t = e == null ? void 0 : e.keyCode) == null ? void 0 : t.toString());
}
function _r(e) {
  return Math.min(...kt(e));
}
function br(e) {
  return {
    x: Rt(e),
    y: Ft(e)
  };
}
function Er(e, t) {
  const r = {};
  return C(e) && C(t) && w(e, (i, n) => {
    n in t && (r[n] = i);
  }), r;
}
function Or(e, t) {
  let r = Object.keys(e).length !== Object.keys(t).length;
  return r || w(e, (i, n) => {
    i !== (t == null ? void 0 : t[n]) && (r = !0);
  }), r;
}
function wr(e, t) {
  const r = Math.floor(t);
  return e >= r && e < r + 1;
}
function Ar(e, t) {
  return Array.isArray(e) ? e.every((r) => ct(r, t)) : ct(e, t);
}
function Nr(e, t = {}, r = "value") {
  return f(() => qt(e == null ? void 0 : e.value, v(t), r));
}
function O(e) {
  return Ye(e) ? e : yt(e);
}
function Cr(e, t) {
  let r = e;
  return w(t, (i, n) => {
    r = r.replace(Vt(`[${n}]`), H(i));
  }), r;
}
function Sr(e, t, r) {
  if (C(e) && C(t)) {
    if (r) {
      let i = {}, n = !1;
      return w(e, (s, o) => {
        !n && (r === o || r === s) ? (n = !0, i = k(i, t)) : n ? i = k(i, { [o]: s }) : i[o] = C(s) ? ut(s) : s;
      }), n ? i : k(e, t);
    }
    if (C(t))
      return k(e, t);
  }
  return ut(e);
}
class Jt {
  constructor() {
    d(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(t, r, i) {
    return this.getCacheItem(t, r).getCache(i ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, r, i) {
    return await this.getCacheItem(t, r).getCacheAsync(i ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, r) {
    return t in this.cache || (this.cache[t] = new Qt(r)), this.cache[t];
  }
}
const K = class K {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(t, r, i) {
    return this.cache.get(t, r, i);
  }
};
d(K, "cache"), K.cache = new Jt();
let ht = K;
const Dr = "cookie-block";
class _t {
  /**
   * Obtaining status.<br>
   * Получение статуса.
   */
  static get() {
    return this.storage.get() ?? !1;
  }
  /**
   * Changing status.<br>
   * Изменение статуса.
   * @param value value to be changed /<br>значение, на которое будет изменен
   */
  static set(t) {
    this.storage.set(t);
  }
}
d(_t, "storage", new W(Dr));
const R = {};
class Xt {
  constructor(t) {
    d(this, "value");
    d(this, "options", {});
    if (this.name = t, t in rt)
      return rt[t];
    this.value = R == null ? void 0 : R[t], rt[t] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(t, r) {
    return this.value === void 0 && t && this.set(t, r), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(t, r) {
    this.value = H(t), Object.assign(this.options, r), this.update();
  }
  /**
   * Delete cookie data.<br>
   * Удаление данных из cookie.
   */
  remove() {
    this.set("");
  }
  /**
   * Returns cache time.<br>
   * Возвращает время кэширования.
   */
  getAge() {
    var t;
    return ((t = this.options) == null ? void 0 : t.age) ?? Ht("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, r;
    if (P() && !_t.get()) {
      const i = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(i)}`,
        `max-age=${i === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((r = this.options) == null ? void 0 : r.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (P())
    for (const t of document.cookie.split(";")) {
      const [r, i] = t.trim().split("=");
      r && q(i) && (R[r] = mt(i));
    }
})();
const rt = {}, T = class T {
  /**
   * Getting an object with information about the phone code and country.<br>
   * Получение объекта с информацией о телефонном коде и стране.
   * @param code country and language code /<br>код страны и языка
   */
  static get(t) {
    return this.list.find((r) => t === r.value);
  }
  /**
   * Getting information by phone.<br>
   * Получение информации по телефону.
   * @param phone phone number /<br>номер телефон
   */
  static getByPhone(t) {
    let r = this.map, i, n = "";
    return this.toNumber(t).forEach((s) => {
      n === "" && s in r ? (i = r[s], r = r[s].next) : n += s;
    }), {
      item: i,
      phone: n
    };
  }
  /**
   * We get an array from a list of all phone numbers.<br>
   * Получаем массив из списка всех телефонных кодов.
   */
  static getList() {
    return this.list;
  }
  /**
   * We get a map of a tree, sorted by its code.<br>
   * Получаем карту дерева, отсортированную по его коду.
   */
  static getMap() {
    return this.map;
  }
  /**
   * Convert to phone mask.<br>
   * Преобразовать в маску телефона.
   * @param phone phone number /<br>номер телефон
   * @param masks a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toMask(t, r) {
    if (q(t) && Array.isArray(r) && r.length > 0) {
      const i = this.removeZero(t), n = i.length;
      for (const s of r)
        if (this.getUnnecessaryLength(s) === n)
          return this.toStandard(i, s);
    }
  }
  /**
   * Deletes the country code from the input number.<br>
   * Удаляет код страны по входному номеру.
   * @param phone phone number /<br>номер телефон
   */
  static removeZero(t) {
    return t.match(/^0/) ? t.replace(/^0/, "") : t.match(/^89/) ? t.replace(/^8/, "") : t;
  }
  /**
   * Deletes all characters that do not belong to the mask.<br>
   * Удаляет все символы, не относящиеся к маске.
   * @param mask A mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static getUnnecessaryLength(t) {
    return t.replace(/[^*]+/ig, "").length;
  }
  /**
   * Creating a list for the map.<br>
   * Формирование списка для карты.
   */
  static makeList() {
    const t = w(S.getList(), (r) => {
      if (r != null && r.phoneMask)
        return {
          phone: (r == null ? void 0 : r.phoneCode) && parseInt(r.phoneCode) || void 0,
          mask: Gt(r.phoneMask),
          value: r.country
        };
    });
    this.list = t.sort((r, i) => r.phone - i.phone);
  }
  /**
   * Creating a map for search.<br>
   * Создание карты для поиска.
   */
  static makeMap() {
    this.list.forEach((t) => {
      t.mask.forEach((r) => {
        let i = this.map, n;
        this.toNumber(r).forEach((s) => {
          s in i || (i[s] = {
            items: [],
            info: void 0,
            value: void 0,
            mask: [],
            maskFull: [],
            next: {}
          }), n = i[s], i = i[s].next;
        }), n && (n.value === void 0 && (n.info = t, n.value = t.value), n.mask.push(r), n.maskFull.push(r.replace(/\d/ig, "*")), n.items.push(t));
      });
    });
  }
  /**
   * The method parses a string argument and returns a floating point number.<br>
   * Метод принимает строку в качестве аргумента и возвращает десятичное число.
   * @param value the value to parse /<br>текстовая строка
   */
  static toNumber(t) {
    return t.replace(/\D+/ig, "").split("");
  }
  /**
   * Converts the phone to a standard.<br>
   * Преобразовывает телефон в стандарт.
   * @param phone phone number /<br>номер телефон
   * @param mask a mask to transform a phone number /<br>маска для преобразования номер телефон
   */
  static toStandard(t, r) {
    let i = 0;
    return r.replace(/\*/ig, () => t[i++]);
  }
};
d(T, "list", []), d(T, "map", {}), T.makeList(), T.makeMap();
let dt = T;
const N = class N {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(t, r) {
    return !(t in this.hash) && r && this.set(t, r), this.hash[t];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(t, r) {
    var n;
    const i = H(r);
    i !== ((n = this.hash) == null ? void 0 : n[t]) && (this.hash[t] = i, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(t, r) {
    t in this.watch ? this.watch[t].push(r) : this.watch = { [t]: [r] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...r) => (t[r[1]] = mt(r[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Bt(this.hash, "=", ";")}`), requestAnimationFrame(() => {
      this.block = !1;
    });
  }
  /**
   * Update hash variable from URL string.<br>
   * Обновление переменной хэша из строки URL.
   */
  static reload() {
    if (!this.block) {
      const t = this.getLocation();
      this.makeWatch(t), this.hash = t;
    }
  }
  /**
   * Calling all functions whose data has changed.<br>
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data /<br>свежий данные
   */
  static makeWatch(t) {
    w(this.watch, (r, i) => {
      var n;
      ((n = this.hash) == null ? void 0 : n[i]) !== (t == null ? void 0 : t[i]) && r.forEach((s) => s(t[i]));
    });
  }
};
d(N, "hash", {}), d(N, "watch", {}), d(N, "block", !1), P() && (N.reload(), addEventListener("hashchange", () => N.reload()));
let j = N;
function xr() {
  return Zt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Zt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Mr = typeof Proxy == "function", Ir = "devtools-plugin:setup", Lr = "plugin:settings:set";
let I, pt;
function Tr() {
  var e;
  return I !== void 0 || (typeof window < "u" && window.performance ? (I = !0, pt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (I = !0, pt = globalThis.perf_hooks.performance) : I = !1), I;
}
function jr() {
  return Tr() ? pt.now() : Date.now();
}
class kr {
  constructor(t, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = r;
    const i = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        i[o] = a.defaultValue;
      }
    const n = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, i);
    try {
      const o = localStorage.getItem(n), a = JSON.parse(o);
      Object.assign(s, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(o) {
        try {
          localStorage.setItem(n, JSON.stringify(o));
        } catch {
        }
        s = o;
      },
      now() {
        return jr();
      }
    }, r && r.on(Lr, (o, a) => {
      o === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, a) => this.target ? this.target.on[a] : (...c) => {
        this.onQueue.push({
          method: a,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...c) => (this.targetQueue.push({
        method: a,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[a](...c)) : (...c) => new Promise((l) => {
        this.targetQueue.push({
          method: a,
          args: c,
          resolve: l
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const r of this.onQueue)
      this.target.on[r.method](...r.args);
    for (const r of this.targetQueue)
      r.resolve(await this.target[r.method](...r.args));
  }
}
function Vr(e, t) {
  const r = e, i = Zt(), n = xr(), s = Mr && r.enableEarlyProxy;
  if (n && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    n.emit(Ir, e, t);
  else {
    const o = s ? new kr(r, n) : null;
    (i.__VUE_DEVTOOLS_PLUGINS__ = i.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var Q = "store";
function te(e) {
  return e === void 0 && (e = null), ze(e !== null ? e : Q);
}
function $r(e, t) {
  return e.filter(t)[0];
}
function gt(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var r = $r(t, function(n) {
    return n.original === e;
  });
  if (r)
    return r.copy;
  var i = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: i
  }), Object.keys(e).forEach(function(n) {
    i[n] = gt(e[n], t);
  }), i;
}
function x(e, t) {
  Object.keys(e).forEach(function(r) {
    return t(e[r], r);
  });
}
function ee(e) {
  return e !== null && typeof e == "object";
}
function Gr(e) {
  return e && typeof e.then == "function";
}
function b(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Rr(e, t) {
  return function() {
    return e(t);
  };
}
function re(e, t, r) {
  return t.indexOf(e) < 0 && (r && r.prepend ? t.unshift(e) : t.push(e)), function() {
    var i = t.indexOf(e);
    i > -1 && t.splice(i, 1);
  };
}
function ie(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var r = e.state;
  Y(e, r, [], e._modules.root, !0), bt(e, r, t);
}
function bt(e, t, r) {
  var i = e._state, n = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, o = {}, a = {}, c = Je(!0);
  c.run(function() {
    x(s, function(l, u) {
      o[u] = Rr(l, e), a[u] = f(function() {
        return o[u]();
      }), Object.defineProperty(e.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Xe({
    data: t
  }), e._scope = c, e.strict && Kr(e), i && r && e._withCommit(function() {
    i.data = null;
  }), n && n.stop();
}
function Y(e, t, r, i, n) {
  var s = !r.length, o = e._modules.getNamespace(r);
  if (i.namespaced && (e._modulesNamespaceMap[o] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + o + " for the namespaced module " + r.join("/")), e._modulesNamespaceMap[o] = i), !s && !n) {
    var a = Et(t, r.slice(0, -1)), c = r[r.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in a && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + r.join(".") + '"'
      ), a[c] = i.state;
    });
  }
  var l = i.context = Fr(e, o, r);
  i.forEachMutation(function(u, h) {
    var p = o + h;
    Pr(e, p, u, l);
  }), i.forEachAction(function(u, h) {
    var p = u.root ? h : o + h, g = u.handler || u;
    Ur(e, p, g, l);
  }), i.forEachGetter(function(u, h) {
    var p = o + h;
    Br(e, p, u, l);
  }), i.forEachChild(function(u, h) {
    Y(e, t, r.concat(h), u, n);
  });
}
function Fr(e, t, r) {
  var i = t === "", n = {
    dispatch: i ? e.dispatch : function(s, o, a) {
      var c = B(s, o, a), l = c.payload, u = c.options, h = c.type;
      if ((!u || !u.root) && (h = t + h, process.env.NODE_ENV !== "production" && !e._actions[h])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + h);
        return;
      }
      return e.dispatch(h, l);
    },
    commit: i ? e.commit : function(s, o, a) {
      var c = B(s, o, a), l = c.payload, u = c.options, h = c.type;
      if ((!u || !u.root) && (h = t + h, process.env.NODE_ENV !== "production" && !e._mutations[h])) {
        console.error("[vuex] unknown local mutation type: " + c.type + ", global type: " + h);
        return;
      }
      e.commit(h, l, u);
    }
  };
  return Object.defineProperties(n, {
    getters: {
      get: i ? function() {
        return e.getters;
      } : function() {
        return ne(e, t);
      }
    },
    state: {
      get: function() {
        return Et(e.state, r);
      }
    }
  }), n;
}
function ne(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var r = {}, i = t.length;
    Object.keys(e.getters).forEach(function(n) {
      if (n.slice(0, i) === t) {
        var s = n.slice(i);
        Object.defineProperty(r, s, {
          get: function() {
            return e.getters[n];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = r;
  }
  return e._makeLocalGettersCache[t];
}
function Pr(e, t, r, i) {
  var n = e._mutations[t] || (e._mutations[t] = []);
  n.push(function(o) {
    r.call(e, i.state, o);
  });
}
function Ur(e, t, r, i) {
  var n = e._actions[t] || (e._actions[t] = []);
  n.push(function(o) {
    var a = r.call(e, {
      dispatch: i.dispatch,
      commit: i.commit,
      getters: i.getters,
      state: i.state,
      rootGetters: e.getters,
      rootState: e.state
    }, o);
    return Gr(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(c) {
      throw e._devtoolHook.emit("vuex:error", c), c;
    }) : a;
  });
}
function Br(e, t, r, i) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(s) {
    return r(
      i.state,
      // local state
      i.getters,
      // local getters
      s.state,
      // root state
      s.getters
      // root getters
    );
  };
}
function Kr(e) {
  y(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && b(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Et(e, t) {
  return t.reduce(function(r, i) {
    return r[i];
  }, e);
}
function B(e, t, r) {
  return ee(e) && e.type && (r = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && b(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: r };
}
var Hr = "vuex bindings", Dt = "vuex:mutations", it = "vuex:actions", L = "vuex", Wr = 0;
function qr(e, t) {
  Vr(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Hr]
    },
    function(r) {
      r.addTimelineLayer({
        id: Dt,
        label: "Vuex Mutations",
        color: xt
      }), r.addTimelineLayer({
        id: it,
        label: "Vuex Actions",
        color: xt
      }), r.addInspector({
        id: L,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), r.on.getInspectorTree(function(i) {
        if (i.app === e && i.inspectorId === L)
          if (i.filter) {
            var n = [];
            ce(n, t._modules.root, i.filter, ""), i.rootNodes = n;
          } else
            i.rootNodes = [
              ae(t._modules.root, "")
            ];
      }), r.on.getInspectorState(function(i) {
        if (i.app === e && i.inspectorId === L) {
          var n = i.nodeId;
          ne(t, n), i.state = zr(
            Xr(t._modules, n),
            n === "root" ? t.getters : t._makeLocalGettersCache,
            n
          );
        }
      }), r.on.editInspectorState(function(i) {
        if (i.app === e && i.inspectorId === L) {
          var n = i.nodeId, s = i.path;
          n !== "root" && (s = n.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            i.set(t._state.data, s, i.state.value);
          });
        }
      }), t.subscribe(function(i, n) {
        var s = {};
        i.payload && (s.payload = i.payload), s.state = n, r.notifyComponentUpdate(), r.sendInspectorTree(L), r.sendInspectorState(L), r.addTimelineEvent({
          layerId: Dt,
          event: {
            time: Date.now(),
            title: i.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(i, n) {
          var s = {};
          i.payload && (s.payload = i.payload), i._id = Wr++, i._time = Date.now(), s.state = n, r.addTimelineEvent({
            layerId: it,
            event: {
              time: i._time,
              title: i.type,
              groupId: i._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(i, n) {
          var s = {}, o = Date.now() - i._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: o + "ms",
              tooltip: "Action duration",
              value: o
            }
          }, i.payload && (s.payload = i.payload), s.state = n, r.addTimelineEvent({
            layerId: it,
            event: {
              time: Date.now(),
              title: i.type,
              groupId: i._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var xt = 8702998, Qr = 6710886, Yr = 16777215, se = {
  label: "namespaced",
  textColor: Yr,
  backgroundColor: Qr
};
function oe(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function ae(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: oe(t),
    tags: e.namespaced ? [se] : [],
    children: Object.keys(e._children).map(
      function(r) {
        return ae(
          e._children[r],
          t + r + "/"
        );
      }
    )
  };
}
function ce(e, t, r, i) {
  i.includes(r) && e.push({
    id: i || "root",
    label: i.endsWith("/") ? i.slice(0, i.length - 1) : i || "Root",
    tags: t.namespaced ? [se] : []
  }), Object.keys(t._children).forEach(function(n) {
    ce(e, t._children[n], r, i + n + "/");
  });
}
function zr(e, t, r) {
  t = r === "root" ? t : t[r];
  var i = Object.keys(t), n = {
    state: Object.keys(e.state).map(function(o) {
      return {
        key: o,
        editable: !0,
        value: e.state[o]
      };
    })
  };
  if (i.length) {
    var s = Jr(t);
    n.getters = Object.keys(s).map(function(o) {
      return {
        key: o.endsWith("/") ? oe(o) : o,
        editable: !1,
        value: vt(function() {
          return s[o];
        })
      };
    });
  }
  return n;
}
function Jr(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var i = r.split("/");
    if (i.length > 1) {
      var n = t, s = i.pop();
      i.forEach(function(o) {
        n[o] || (n[o] = {
          _custom: {
            value: {},
            display: o,
            tooltip: "Module",
            abstract: !0
          }
        }), n = n[o]._custom.value;
      }), n[s] = vt(function() {
        return e[r];
      });
    } else
      t[r] = vt(function() {
        return e[r];
      });
  }), t;
}
function Xr(e, t) {
  var r = t.split("/").filter(function(i) {
    return i;
  });
  return r.reduce(
    function(i, n, s) {
      var o = i[n];
      if (!o)
        throw new Error('Missing module "' + n + '" for path "' + t + '".');
      return s === r.length - 1 ? o : o._children;
    },
    t === "root" ? e : e.root._children
  );
}
function vt(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var E = function(t, r) {
  this.runtime = r, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var i = t.state;
  this.state = (typeof i == "function" ? i() : i) || {};
}, ue = { namespaced: { configurable: !0 } };
ue.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
E.prototype.addChild = function(t, r) {
  this._children[t] = r;
};
E.prototype.removeChild = function(t) {
  delete this._children[t];
};
E.prototype.getChild = function(t) {
  return this._children[t];
};
E.prototype.hasChild = function(t) {
  return t in this._children;
};
E.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
E.prototype.forEachChild = function(t) {
  x(this._children, t);
};
E.prototype.forEachGetter = function(t) {
  this._rawModule.getters && x(this._rawModule.getters, t);
};
E.prototype.forEachAction = function(t) {
  this._rawModule.actions && x(this._rawModule.actions, t);
};
E.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && x(this._rawModule.mutations, t);
};
Object.defineProperties(E.prototype, ue);
var M = function(t) {
  this.register([], t, !1);
};
M.prototype.get = function(t) {
  return t.reduce(function(r, i) {
    return r.getChild(i);
  }, this.root);
};
M.prototype.getNamespace = function(t) {
  var r = this.root;
  return t.reduce(function(i, n) {
    return r = r.getChild(n), i + (r.namespaced ? n + "/" : "");
  }, "");
};
M.prototype.update = function(t) {
  le([], this.root, t);
};
M.prototype.register = function(t, r, i) {
  var n = this;
  i === void 0 && (i = !0), process.env.NODE_ENV !== "production" && fe(t, r);
  var s = new E(r, i);
  if (t.length === 0)
    this.root = s;
  else {
    var o = this.get(t.slice(0, -1));
    o.addChild(t[t.length - 1], s);
  }
  r.modules && x(r.modules, function(a, c) {
    n.register(t.concat(c), a, i);
  });
};
M.prototype.unregister = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1], n = r.getChild(i);
  if (!n) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + i + "', which is not registered"
    );
    return;
  }
  n.runtime && r.removeChild(i);
};
M.prototype.isRegistered = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1];
  return r ? r.hasChild(i) : !1;
};
function le(e, t, r) {
  if (process.env.NODE_ENV !== "production" && fe(e, r), t.update(r), r.modules)
    for (var i in r.modules) {
      if (!t.getChild(i)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + i + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      le(
        e.concat(i),
        t.getChild(i),
        r.modules[i]
      );
    }
}
var Mt = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Zr = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, It = {
  getters: Mt,
  mutations: Mt,
  actions: Zr
};
function fe(e, t) {
  Object.keys(It).forEach(function(r) {
    if (t[r]) {
      var i = It[r];
      x(t[r], function(n, s) {
        b(
          i.assert(n),
          ti(e, r, s, n, i.expected)
        );
      });
    }
  });
}
function ti(e, t, r, i, n) {
  var s = t + " should be " + n + ' but "' + t + "." + r + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(i) + ".", s;
}
function Ot(e) {
  return new m(e);
}
var m = function e(t) {
  var r = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (b(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), b(this instanceof e, "store must be called with the new operator."));
  var i = t.plugins;
  i === void 0 && (i = []);
  var n = t.strict;
  n === void 0 && (n = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new M(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var o = this, a = this, c = a.dispatch, l = a.commit;
  this.dispatch = function(p, g) {
    return c.call(o, p, g);
  }, this.commit = function(p, g, A) {
    return l.call(o, p, g, A);
  }, this.strict = n;
  var u = this._modules.root.state;
  Y(this, u, [], this._modules.root), bt(this, u), i.forEach(function(h) {
    return h(r);
  });
}, wt = { state: { configurable: !0 } };
m.prototype.install = function(t, r) {
  t.provide(r || Q, this), t.config.globalProperties.$store = this;
  var i = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  i && qr(t, this);
};
wt.state.get = function() {
  return this._state.data;
};
wt.state.set = function(e) {
  process.env.NODE_ENV !== "production" && b(!1, "use store.replaceState() to explicit replace store state.");
};
m.prototype.commit = function(t, r, i) {
  var n = this, s = B(t, r, i), o = s.type, a = s.payload, c = s.options, l = { type: o, payload: a }, u = this._mutations[o];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + o);
    return;
  }
  this._withCommit(function() {
    u.forEach(function(p) {
      p(a);
    });
  }), this._subscribers.slice().forEach(function(h) {
    return h(l, n.state);
  }), process.env.NODE_ENV !== "production" && c && c.silent && console.warn(
    "[vuex] mutation type: " + o + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
m.prototype.dispatch = function(t, r) {
  var i = this, n = B(t, r), s = n.type, o = n.payload, a = { type: s, payload: o }, c = this._actions[s];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(u) {
      return u.before;
    }).forEach(function(u) {
      return u.before(a, i.state);
    });
  } catch (u) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(u));
  }
  var l = c.length > 1 ? Promise.all(c.map(function(u) {
    return u(o);
  })) : c[0](o);
  return new Promise(function(u, h) {
    l.then(function(p) {
      try {
        i._actionSubscribers.filter(function(g) {
          return g.after;
        }).forEach(function(g) {
          return g.after(a, i.state);
        });
      } catch (g) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(g));
      }
      u(p);
    }, function(p) {
      try {
        i._actionSubscribers.filter(function(g) {
          return g.error;
        }).forEach(function(g) {
          return g.error(a, i.state, p);
        });
      } catch (g) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(g));
      }
      h(p);
    });
  });
};
m.prototype.subscribe = function(t, r) {
  return re(t, this._subscribers, r);
};
m.prototype.subscribeAction = function(t, r) {
  var i = typeof t == "function" ? { before: t } : t;
  return re(i, this._actionSubscribers, r);
};
m.prototype.watch = function(t, r, i) {
  var n = this;
  return process.env.NODE_ENV !== "production" && b(typeof t == "function", "store.watch only accepts a function."), y(function() {
    return t(n.state, n.getters);
  }, r, Object.assign({}, i));
};
m.prototype.replaceState = function(t) {
  var r = this;
  this._withCommit(function() {
    r._state.data = t;
  });
};
m.prototype.registerModule = function(t, r, i) {
  i === void 0 && (i = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (b(Array.isArray(t), "module path must be a string or an Array."), b(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, r), Y(this, this.state, t, this._modules.get(t), i.preserveState), bt(this, this.state);
};
m.prototype.unregisterModule = function(t) {
  var r = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && b(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var i = Et(r.state, t.slice(0, -1));
    delete i[t[t.length - 1]];
  }), ie(this);
};
m.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && b(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
m.prototype.hotUpdate = function(t) {
  this._modules.update(t), ie(this, !0);
};
m.prototype._withCommit = function(t) {
  var r = this._committing;
  this._committing = !0, t(), this._committing = r;
};
Object.defineProperties(m.prototype, wt);
var At = J(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (e) {
        var l = X(this.$store, "mapState", e);
        if (!l)
          return;
        a = l.context.state, c = l.context.getters;
      }
      return typeof s == "function" ? s.call(this, a, c) : a[s];
    }, r[n].vuex = !0;
  }), r;
}), Nt = J(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.commit;
      if (e) {
        var u = X(this.$store, "mapMutations", e);
        if (!u)
          return;
        l = u.context.commit;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), Ct = J(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    s = e + s, r[n] = function() {
      if (!(e && !X(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(s in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + s);
          return;
        }
        return this.$store.getters[s];
      }
    }, r[n].vuex = !0;
  }), r;
}), St = J(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.dispatch;
      if (e) {
        var u = X(this.$store, "mapActions", e);
        if (!u)
          return;
        l = u.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), he = function(e) {
  return {
    mapState: At.bind(null, e),
    mapGetters: Ct.bind(null, e),
    mapMutations: Nt.bind(null, e),
    mapActions: St.bind(null, e)
  };
};
function z(e) {
  return G(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function G(e) {
  return Array.isArray(e) || ee(e);
}
function J(e) {
  return function(t, r) {
    return typeof t != "string" ? (r = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, r);
  };
}
function X(e, t, r) {
  var i = e._modulesNamespaceMap[r];
  return process.env.NODE_ENV !== "production" && !i && console.error("[vuex] module namespace not found in " + t + "(): " + r), i;
}
function de(e) {
  e === void 0 && (e = {});
  var t = e.collapsed;
  t === void 0 && (t = !0);
  var r = e.filter;
  r === void 0 && (r = function(u, h, p) {
    return !0;
  });
  var i = e.transformer;
  i === void 0 && (i = function(u) {
    return u;
  });
  var n = e.mutationTransformer;
  n === void 0 && (n = function(u) {
    return u;
  });
  var s = e.actionFilter;
  s === void 0 && (s = function(u, h) {
    return !0;
  });
  var o = e.actionTransformer;
  o === void 0 && (o = function(u) {
    return u;
  });
  var a = e.logMutations;
  a === void 0 && (a = !0);
  var c = e.logActions;
  c === void 0 && (c = !0);
  var l = e.logger;
  return l === void 0 && (l = console), function(u) {
    var h = gt(u.state);
    typeof l > "u" || (a && u.subscribe(function(p, g) {
      var A = gt(g);
      if (r(p, h, A)) {
        var Z = jt(), tt = n(p), ge = "mutation " + p.type + Z;
        Lt(l, ge, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", i(h)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", tt), l.log("%c next state", "color: #4CAF50; font-weight: bold", i(A)), Tt(l);
      }
      h = A;
    }), c && u.subscribeAction(function(p, g) {
      if (s(p, g)) {
        var A = jt(), Z = o(p), tt = "action " + p.type + A;
        Lt(l, tt, t), l.log("%c action", "color: #03A9F4; font-weight: bold", Z), Tt(l);
      }
    }));
  };
}
function Lt(e, t, r) {
  var i = r ? e.groupCollapsed : e.group;
  try {
    i.call(e, t);
  } catch {
    e.log(t);
  }
}
function Tt(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function jt() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + F(e.getHours(), 2) + ":" + F(e.getMinutes(), 2) + ":" + F(e.getSeconds(), 2) + "." + F(e.getMilliseconds(), 3);
}
function ei(e, t) {
  return new Array(t + 1).join(e);
}
function F(e, t) {
  return ei("0", t - e.toString().length) + e;
}
var ri = {
  version: "4.1.0",
  Store: m,
  storeKey: Q,
  createStore: Ot,
  useStore: te,
  mapState: At,
  mapMutations: Nt,
  mapGetters: Ct,
  mapActions: St,
  createNamespacedHelpers: he,
  createLogger: de
};
const Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: m,
  createLogger: de,
  createNamespacedHelpers: he,
  createStore: Ot,
  default: ri,
  mapActions: St,
  mapGetters: Ct,
  mapMutations: Nt,
  mapState: At,
  storeKey: Q,
  useStore: te
}, Symbol.toStringTag, { value: "Module" }));
class ii {
  /**
   * Adding a new component or project to the cache.<br>
   * Добавление в кеш нового компонента или проекта.
   * @param name component name /<br>название компонента
   * @param app project object /<br>объект проекта
   * @param router data for Router /<br>данные для Router
   * @param store data for Store /<br>данные для Store
   * @param init function for additional object management /<br>функция для дополнительного управления объектом
   * @param translate list of text translation keys /<br>список ключей текстовых переводов
   */
  static addComponent(t, r, i, n, s, o) {
    const a = window, c = {
      item: r,
      router: i,
      store: n,
      init: s,
      translate: o
    };
    et in a ? a[et][t] = c : a[et] = {
      [t]: c
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const r = V.getComponentGlobalItem(t);
    r && V.addComponent(
      Pt(t.replace(/\//g, "-")),
      r.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const r = V.getComponentGlobalItem(t);
    r && (q(r == null ? void 0 : r.translate) ? U.add(r.translate).then(() => this.createAppItem(t, r)) : this.createAppItem(t, r));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, r) {
    const i = Ze(r.item);
    r != null && r.router && i.use(this.createRouter(r.router)), r != null && r.store && i.use(this.createStore(r.store)), r != null && r.init && r.init(i), w(V.getComponentList(), (n, s) => i.component(s, n)), i.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return mr(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return Ot(t);
  }
}
class ni {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, r = "date", i = S.getLocation()) {
    d(this, "item");
    d(this, "type");
    d(this, "code");
    d(this, "date");
    d(this, "datetime");
    d(this, "year", f(() => this.date.value && this.datetime.getYear()));
    d(this, "month", f(() => this.date.value && this.datetime.getMonth()));
    d(this, "day", f(() => this.date.value && this.datetime.getDay()));
    d(this, "hour", f(() => this.date.value && this.datetime.getHour()));
    d(this, "minute", f(() => this.date.value && this.datetime.getMinute()));
    d(this, "second", f(() => this.date.value && this.datetime.getSecond()));
    this.item = O(t), this.type = O(r), this.code = O(i), this.date = yt(ft(this.item.value)), this.datetime = new $t(
      this.date.value,
      this.type.value,
      this.code.value
    ), y(this.item, (n) => {
      this.date.value = ft(n);
    }), y(this.type, (n) => this.datetime.setType(n)), y(this.code, (n) => this.datetime.setCode(n)), y(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => tr(this.date));
  }
  /**
   * Returns the basic data for the date.<br>
   * Возвращает основные данные для даты.
   */
  getItem() {
    return this.item;
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Obtaining an object of the basic Datetime class.<br>
   * Получение объекта основного класса Datetime.
   */
  getDatetime() {
    return this.datetime;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    return f(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return f(() => this.date.value && this.datetime.getFirstDayCode());
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.year;
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.month;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени.
   */
  getDay() {
    return this.day;
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.hour;
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.minute;
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.second;
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return f(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, r) {
    return f(() => this.date.value && this.datetime.locale(t, r));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return f(() => this.date.value && this.datetime.standard(t));
  }
}
class si extends Ut {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param elementSelectorControl control element /<br>элемент управления
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(t, r, i = ["click"], n, s, o) {
    const a = O(t), c = O(r);
    super(
      a.value,
      i,
      n,
      s,
      o
    ), c.value && this.setElementControl(c.value), y(a, (l) => this.setElement(l)), y(c, (l) => this.setElementControl(l));
  }
}
class oi {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = S.getLocation()) {
    d(this, "code");
    d(this, "flag");
    this.code = O(t), this.flag = new zt(this.code.value), y(this.code, (r) => this.flag.setCode(r));
  }
  /**
   * Obtaining a reactive object with the country code.<br>
   * Получение реактивного объекта с кодом страны.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(t = this.code.value) {
    return f(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return f(() => {
      var r;
      return (r = this.flag.get(t)) == null ? void 0 : r.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return f(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return f(() => this.flag.getNational(t));
  }
}
const _ = class _ {
  /**
   * Information about the current country.<br>
   * Информация об текущей стране.
   */
  static get() {
    return this.item;
  }
  /**
   * Current country.<br>
   * Текущая страна.
   */
  static getCountry() {
    return this.country;
  }
  /**
   * Current language.<br>
   * Текущий язык.
   */
  static getLanguage() {
    return this.language;
  }
  /**
   * Full format according to the standard.<br>
   * Полный формат согласно стандарту.
   */
  static getStandard() {
    return this.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  static getFirstDay() {
    return this.firstDay;
  }
  /**
   * Changes the data by the full code.<br>
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  static set(t) {
    S.set(t, !0), this.item.value = S.getItem();
  }
};
d(_, "item", D(S.get())), d(_, "country", f(() => _.item.value.country)), d(_, "language", f(() => _.item.value.language)), d(_, "standard", f(() => _.item.value.standard)), d(_, "firstDay", f(() => _.item.value.firstDay));
let $ = _;
class ai {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    d(this, "location");
    d(this, "intl");
    this.location = O(t), this.intl = f(() => new Yt(this.location.value ?? $.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, r) {
    return f(() => this.intl.value.display(v(t), r));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, r) {
    return f(() => this.intl.value.languageName(v(t), r));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, r) {
    return f(() => this.intl.value.countryName(v(t), r));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, r) {
    return f(() => this.intl.value.number(v(t), r));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return f(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, r, i = !1) {
    return f(() => this.intl.value.currency(v(t), r, i));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, r) {
    return f(() => this.intl.value.unit(v(t), r));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, r) {
    return f(() => this.intl.value.percent(v(t), r));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, r) {
    return f(() => this.intl.value.percentBy100(v(t), r));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, r, i, n) {
    return f(() => this.intl.value.date(v(t), r, i, n));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, r, i) {
    return f(() => this.intl.value.relative(v(t), r, i));
  }
  /**
   * Enables language-sensitive relative time formatting
   * Including the ability to add a limit to output the standard time format if the value
   * exceeds the allowable limit.<br>
   * Включает форматирование относительного времени с учетом языка.
   * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
   * если значение вышло за пределы допустимого.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param limit values that determine the output limit (values per day) /<br>
   * значения, по которым определяем предел вывода (значения в день)
   * @param todayValue current day /<br>текущий день
   * @param relativeOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param dateOptions the representation of the month /<br>представление месяца
   * @param type type of data format /<br>тип формата data
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  relativeLimit(t, r, i, n, s, o, a) {
    return f(() => this.intl.value.relativeLimit(
      v(t),
      r,
      i,
      n,
      s,
      o,
      a
    ));
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, r) {
    return f(() => this.intl.value.month(v(t), r));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return f(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, r) {
    return f(() => this.intl.value.weekday(v(t), r));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return f(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return f(() => this.intl.value.time(v(t)));
  }
}
function ci(e, t) {
  const r = (a) => typeof a == "string" ? { method: a } : a || {}, i = async () => {
    const a = await Kt.request({
      ...o.value,
      path: e,
      pathFull: void 0
    });
    a ? "data" in a ? s.value = a.data : s.value = a : s.value = void 0;
  }, n = (a) => {
    a && (o.value = r(a)), i().then();
  }, s = D(), o = O(r(t));
  return Wt(() => i()), {
    data: s,
    request: o,
    update: n
  };
}
function ui(e, t, r) {
  if (e in nt)
    return nt[e];
  const i = new Xt(e), n = yt(i.get(t, r));
  return y(n, (s) => {
    i.set(s, r);
  }), nt[e] = n, n;
}
const nt = {};
function li(e, t) {
  if (e in st)
    return st[e];
  const r = D(j.get(e, t));
  return y(r, (i) => j.set(e, i)), j.addWatch(e, (i) => {
    r.value = i;
  }), st[e] = r, r;
}
const st = {};
function fi() {
  const e = D(lt.is());
  return lt.registrationEvent(({ detail: t }) => {
    e.value = t.loading;
  }), e;
}
function hi(e, t) {
  if (e in ot)
    return ot[e];
  const r = new W(e, !0), i = D(r.get(t));
  return y(i, (n) => r.set(n)), ot[e] = i, i;
}
const ot = {};
function di(e, t, r) {
  if (e in at)
    return at[e];
  const i = new W(e), n = D(i.get(t, r));
  return y(n, (s) => i.set(s)), at[e] = n, n;
}
const at = {};
function pe(e) {
  const t = D(U.getListSync(e, !0));
  return Wt(async () => {
    $.getLanguage() && (t.value = { ...await U.getList(e) });
  }), t;
}
const pi = (e) => pe(e), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Kt,
  ApiMethodItem: Ke,
  Cache: Jt,
  CacheItem: Qt,
  CacheStatic: ht,
  Cookie: Xt,
  CookieBlock: _t,
  DataStorage: W,
  Datetime: $t,
  DatetimeRef: ni,
  DesignAbstract: lr,
  DesignAsyncAbstract: fr,
  DesignChanged: hr,
  DesignComponents: er,
  DesignConstructorAbstract: rr,
  Env: qe,
  EventItem: Ut,
  EventRef: si,
  GEO_FLAG_ICON_NAME: cr,
  Geo: S,
  GeoFlag: zt,
  GeoFlagRef: oi,
  GeoIntl: Yt,
  GeoIntlRef: ai,
  GeoPhone: dt,
  GeoRef: $,
  Global: ke,
  Hash: j,
  Icons: ur,
  Loading: lt,
  Mutation: dr,
  MutationCollect: Ve,
  MutationData: pr,
  MutationDataItem: $e,
  MutationGlobal: V,
  MutationGlobalRef: ii,
  MutationObserverGlobal: gr,
  MutationObserverItems: vr,
  Translate: U,
  anyToString: ye,
  arrFill: _e,
  copyObject: ut,
  createElement: Ce,
  eventStopPropagation: xe,
  executeFunction: H,
  forEach: w,
  frame: je,
  getAttributes: Ge,
  getBind: qt,
  getBindRef: Nr,
  getClassName: ir,
  getClipboardData: be,
  getColumn: Ee,
  getElement: Me,
  getElementId: Fe,
  getElementItem: Se,
  getElementOrWindow: Ue,
  getExp: Vt,
  getIndexForRender: nr,
  getKey: yr,
  getLengthOfAllArray: kt,
  getMaxLengthAllArray: Oe,
  getMinLengthAllArray: _r,
  getMouseClient: br,
  getMouseClientX: Rt,
  getMouseClientY: Ft,
  getRef: v,
  getRequestString: Bt,
  inArray: He,
  intersectKey: Er,
  isArray: We,
  isDifferent: Or,
  isDomRuntime: P,
  isFilled: q,
  isFunction: Ie,
  isInDom: Be,
  isIntegerBetween: wr,
  isNull: Qe,
  isObject: C,
  isObjectNotArray: Te,
  isSelected: ct,
  isSelectedByList: Ar,
  isString: Ne,
  isWindow: Le,
  random: Pe,
  render: sr,
  replaceRecursive: k,
  replaceTemplate: Cr,
  setElementItem: De,
  splice: Sr,
  strFill: we,
  t: pi,
  toArray: Gt,
  toCamelCase: or,
  toCamelCaseFirst: Pt,
  toDate: ft,
  toKebabCase: Re,
  toNumber: ar,
  toRefItem: O,
  transformation: mt,
  uniqueArray: Ae,
  useApiRef: ci,
  useCookieRef: ui,
  useEnv: Ht,
  useHashRef: li,
  useLoadingRef: fi,
  useSessionRef: hi,
  useStorageRef: di,
  useTranslateRef: pe
}, Symbol.toStringTag, { value: "Module" }));
export {
  pi as A,
  Jt as C,
  ni as D,
  si as E,
  dt as G,
  j as H,
  ii as M,
  _r as a,
  br as b,
  Or as c,
  wr as d,
  Ar as e,
  Nr as f,
  yr as g,
  ht as h,
  Er as i,
  Xt as j,
  _t as k,
  oi as l,
  ai as m,
  $ as n,
  ci as o,
  ui as p,
  li as q,
  Cr as r,
  Sr as s,
  O as t,
  Ki as u,
  Bi as v,
  fi as w,
  hi as x,
  di as y,
  pe as z
};
