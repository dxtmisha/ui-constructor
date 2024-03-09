var ve = Object.defineProperty;
var me = (e, t, r) => t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var d = (e, t, r) => (me(e, typeof t != "symbol" ? t + "" : t, r), r);
import { e as Gt, g as Rt, r as k, D as Ft, a as ye, f as _e, d as be, b as Ee, c as Oe, s as we, u as Ne } from "./getClipboardData-DURVmTkV.js";
import { a as ft, c as ht, G as S, i as Ae } from "./Geo-BWOHrzQ1.js";
import { c as Ce, g as Se, s as De } from "./createElement-9Hn8LIGi.js";
import { e as Me } from "./eventStopPropagation-fHm2p5BF.js";
import { e as Y, i as xe } from "./executeFunction-B6By_8Og.js";
import { a as C, f as w, t as Pt, i as Ie } from "./toArray-J4lAhJG7.js";
import { g as Ut, a as Bt, f as Le } from "./getMouseClientY-BILUOOAB.js";
import { K as nt, c as V, t as Kt, M as Te, a as je, g as ke, d as Ve } from "./MutationDataItem-eVbTOK7V.js";
import { g as $e, i as Ge } from "./getElement-BhVCn14C.js";
import { g as Re, r as Fe } from "./getElementId-BsOuboE0.js";
import { E as K, g as Pe, i as Ue } from "./EventItem-NrbVh3gg.js";
import { g as Ht, A as Be, a as Ke } from "./Api-h5l0huLV.js";
import { i as He } from "./inArray-BLmbg9f_.js";
import { i as We, t as Qe } from "./toNumber-CJS0fvr_.js";
import { D as q, u as Wt, a as G, t as _t, E as Ye, i as qe } from "./DataStorage-D-GdtGQf.js";
import { i as z } from "./isFilled-C9CTZZIi.js";
import { computed as f, isRef as ze, ref as bt, inject as Je, watch as y, effectScope as Xe, reactive as Ze, createApp as tr, triggerRef as er, shallowRef as j, watchEffect as rr } from "vue";
import { g as Qt } from "./getBind-CgHMfjrB.js";
import { g as v, a as ir, D as nr, b as sr, c as or, r as ar, t as cr } from "./DesignConstructorAbstract-_dNu1bTO.js";
import { C as Yt, t as dt, G as qt } from "./GeoIntl-DFqinyEL.js";
import { a as zt, G as ur } from "./GeoFlag-BbEvGj_n.js";
import { I as lr } from "./Icons-Bei2KRuY.js";
import { T as H } from "./Translate-DSM-n0U-.js";
import { a as fr, D as hr, b as dr } from "./DesignAsyncAbstract-D-BgPzA9.js";
import { M as pr, a as gr, b as vr, c as mr } from "./Mutation-tzxvSz7B.js";
import { createRouter as yr } from "vue-router";
function _r(e) {
  var t;
  return (e == null ? void 0 : e.key) ?? (e == null ? void 0 : e.code) ?? ((t = e == null ? void 0 : e.keyCode) == null ? void 0 : t.toString());
}
function br(e) {
  return Math.min(...Gt(e));
}
function Er(e) {
  return {
    x: Ut(e),
    y: Bt(e)
  };
}
function Or(e, t) {
  const r = {};
  return C(e) && C(t) && w(e, (i, n) => {
    n in t && (r[n] = i);
  }), r;
}
function wr(e, t) {
  let r = Object.keys(e).length !== Object.keys(t).length;
  return r || w(e, (i, n) => {
    i !== (t == null ? void 0 : t[n]) && (r = !0);
  }), r;
}
function Nr(e, t) {
  const r = Math.floor(t);
  return e >= r && e < r + 1;
}
function Ar(e, t) {
  return Array.isArray(e) ? e.every((r) => ft(r, t)) : ft(e, t);
}
function Cr(e, t = {}, r = "value") {
  return f(() => Qt(e == null ? void 0 : e.value, v(t), r));
}
function O(e) {
  return ze(e) ? e : bt(e);
}
function Sr(e, t) {
  let r = e;
  return w(t, (i, n) => {
    r = r.replace(Rt(`[${n}]`), Y(i));
  }), r;
}
function Dr(e, t, r) {
  if (C(e) && C(t)) {
    if (r) {
      let i = {}, n = !1;
      return w(e, (s, o) => {
        !n && (r === o || r === s) ? (n = !0, i = k(i, t)) : n ? i = k(i, { [o]: s }) : i[o] = C(s) ? ht(s) : s;
      }), n ? i : k(e, t);
    }
    if (C(t))
      return k(e, t);
  }
  return ht(e);
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
    return t in this.cache || (this.cache[t] = new Yt(r)), this.cache[t];
  }
}
const Q = class Q {
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
d(Q, "cache"), Q.cache = new Jt();
let pt = Q;
const Mr = "cookie-block";
class Et {
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
d(Et, "storage", new q(Mr));
const U = {};
class Xt {
  constructor(t) {
    d(this, "value");
    d(this, "options", {});
    if (this.name = t, t in st)
      return st[t];
    this.value = U == null ? void 0 : U[t], st[t] = this;
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
    this.value = Y(t), Object.assign(this.options, r), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? Wt("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, r;
    if (G() && !Et.get()) {
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
  if (G())
    for (const t of document.cookie.split(";")) {
      const [r, i] = t.trim().split("=");
      r && z(i) && (U[r] = _t(i));
    }
})();
const st = {}, L = class L {
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
    if (z(t) && Array.isArray(r) && r.length > 0) {
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
          mask: Pt(r.phoneMask),
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
d(L, "list", []), d(L, "map", {}), L.makeList(), L.makeMap();
let gt = L;
const A = class A {
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
    const i = Y(r);
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
      (...r) => (t[r[1]] = _t(r[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Ht(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
d(A, "hash", {}), d(A, "watch", {}), d(A, "block", !1), G() && (A.reload(), addEventListener("hashchange", () => A.reload()));
let T = A;
const xt = "ui-loading", $ = class $ {
  /**
   * Check if the loader is active now.<br>
   * Проверить, активен ли сейчас загрузчик.
   */
  static is() {
    return this.value > 0;
  }
  /**
   * Shows the loader.<br>
   * Показывает загрузчик.
   */
  static show() {
    this.value++, this.dispatch();
  }
  /**
   * Hides the loader.<br>
   * Скрывает загрузчик.
   */
  static hide() {
    this.is() && (this.value--, this.dispatch());
  }
  /**
   * Event registration to listen for data changes.<br>
   * Регистрация события для прослушивания изменений данных.
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param element element /<br>элемент
   */
  static registrationEvent(t, r) {
    new K(window, xt, t).setElementControl(r).start();
  }
  /**
   * Calls the event listener.<br>
   * Вызывает слушателя событий.
   */
  static dispatch() {
    this.event.dispatch({ loading: this.is() });
  }
};
d($, "value", 0), d($, "event"), G() && ($.event = new K(window, xt));
let R = $;
function xr() {
  return Zt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Zt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ir = typeof Proxy == "function", Lr = "devtools-plugin:setup", Tr = "plugin:settings:set";
let x, vt;
function jr() {
  var e;
  return x !== void 0 || (typeof window < "u" && window.performance ? (x = !0, vt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (x = !0, vt = globalThis.perf_hooks.performance) : x = !1), x;
}
function kr() {
  return jr() ? vt.now() : Date.now();
}
class Vr {
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
        return kr();
      }
    }, r && r.on(Tr, (o, a) => {
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
function $r(e, t) {
  const r = e, i = Zt(), n = xr(), s = Ir && r.enableEarlyProxy;
  if (n && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    n.emit(Lr, e, t);
  else {
    const o = s ? new Vr(r, n) : null;
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
var J = "store";
function te(e) {
  return e === void 0 && (e = null), Je(e !== null ? e : J);
}
function Gr(e, t) {
  return e.filter(t)[0];
}
function mt(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var r = Gr(t, function(n) {
    return n.original === e;
  });
  if (r)
    return r.copy;
  var i = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: i
  }), Object.keys(e).forEach(function(n) {
    i[n] = mt(e[n], t);
  }), i;
}
function D(e, t) {
  Object.keys(e).forEach(function(r) {
    return t(e[r], r);
  });
}
function ee(e) {
  return e !== null && typeof e == "object";
}
function Rr(e) {
  return e && typeof e.then == "function";
}
function b(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Fr(e, t) {
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
  X(e, r, [], e._modules.root, !0), Ot(e, r, t);
}
function Ot(e, t, r) {
  var i = e._state, n = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, o = {}, a = {}, c = Xe(!0);
  c.run(function() {
    D(s, function(l, u) {
      o[u] = Fr(l, e), a[u] = f(function() {
        return o[u]();
      }), Object.defineProperty(e.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Ze({
    data: t
  }), e._scope = c, e.strict && Hr(e), i && r && e._withCommit(function() {
    i.data = null;
  }), n && n.stop();
}
function X(e, t, r, i, n) {
  var s = !r.length, o = e._modules.getNamespace(r);
  if (i.namespaced && (e._modulesNamespaceMap[o] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + o + " for the namespaced module " + r.join("/")), e._modulesNamespaceMap[o] = i), !s && !n) {
    var a = wt(t, r.slice(0, -1)), c = r[r.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in a && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + r.join(".") + '"'
      ), a[c] = i.state;
    });
  }
  var l = i.context = Pr(e, o, r);
  i.forEachMutation(function(u, h) {
    var p = o + h;
    Ur(e, p, u, l);
  }), i.forEachAction(function(u, h) {
    var p = u.root ? h : o + h, g = u.handler || u;
    Br(e, p, g, l);
  }), i.forEachGetter(function(u, h) {
    var p = o + h;
    Kr(e, p, u, l);
  }), i.forEachChild(function(u, h) {
    X(e, t, r.concat(h), u, n);
  });
}
function Pr(e, t, r) {
  var i = t === "", n = {
    dispatch: i ? e.dispatch : function(s, o, a) {
      var c = W(s, o, a), l = c.payload, u = c.options, h = c.type;
      if ((!u || !u.root) && (h = t + h, process.env.NODE_ENV !== "production" && !e._actions[h])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + h);
        return;
      }
      return e.dispatch(h, l);
    },
    commit: i ? e.commit : function(s, o, a) {
      var c = W(s, o, a), l = c.payload, u = c.options, h = c.type;
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
        return wt(e.state, r);
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
function Ur(e, t, r, i) {
  var n = e._mutations[t] || (e._mutations[t] = []);
  n.push(function(o) {
    r.call(e, i.state, o);
  });
}
function Br(e, t, r, i) {
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
    return Rr(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(c) {
      throw e._devtoolHook.emit("vuex:error", c), c;
    }) : a;
  });
}
function Kr(e, t, r, i) {
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
function Hr(e) {
  y(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && b(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function wt(e, t) {
  return t.reduce(function(r, i) {
    return r[i];
  }, e);
}
function W(e, t, r) {
  return ee(e) && e.type && (r = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && b(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: r };
}
var Wr = "vuex bindings", It = "vuex:mutations", ot = "vuex:actions", I = "vuex", Qr = 0;
function Yr(e, t) {
  $r(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Wr]
    },
    function(r) {
      r.addTimelineLayer({
        id: It,
        label: "Vuex Mutations",
        color: Lt
      }), r.addTimelineLayer({
        id: ot,
        label: "Vuex Actions",
        color: Lt
      }), r.addInspector({
        id: I,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), r.on.getInspectorTree(function(i) {
        if (i.app === e && i.inspectorId === I)
          if (i.filter) {
            var n = [];
            ce(n, t._modules.root, i.filter, ""), i.rootNodes = n;
          } else
            i.rootNodes = [
              ae(t._modules.root, "")
            ];
      }), r.on.getInspectorState(function(i) {
        if (i.app === e && i.inspectorId === I) {
          var n = i.nodeId;
          ne(t, n), i.state = Jr(
            Zr(t._modules, n),
            n === "root" ? t.getters : t._makeLocalGettersCache,
            n
          );
        }
      }), r.on.editInspectorState(function(i) {
        if (i.app === e && i.inspectorId === I) {
          var n = i.nodeId, s = i.path;
          n !== "root" && (s = n.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            i.set(t._state.data, s, i.state.value);
          });
        }
      }), t.subscribe(function(i, n) {
        var s = {};
        i.payload && (s.payload = i.payload), s.state = n, r.notifyComponentUpdate(), r.sendInspectorTree(I), r.sendInspectorState(I), r.addTimelineEvent({
          layerId: It,
          event: {
            time: Date.now(),
            title: i.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(i, n) {
          var s = {};
          i.payload && (s.payload = i.payload), i._id = Qr++, i._time = Date.now(), s.state = n, r.addTimelineEvent({
            layerId: ot,
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
            layerId: ot,
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
var Lt = 8702998, qr = 6710886, zr = 16777215, se = {
  label: "namespaced",
  textColor: zr,
  backgroundColor: qr
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
function Jr(e, t, r) {
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
    var s = Xr(t);
    n.getters = Object.keys(s).map(function(o) {
      return {
        key: o.endsWith("/") ? oe(o) : o,
        editable: !1,
        value: yt(function() {
          return s[o];
        })
      };
    });
  }
  return n;
}
function Xr(e) {
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
      }), n[s] = yt(function() {
        return e[r];
      });
    } else
      t[r] = yt(function() {
        return e[r];
      });
  }), t;
}
function Zr(e, t) {
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
function yt(e) {
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
  D(this._children, t);
};
E.prototype.forEachGetter = function(t) {
  this._rawModule.getters && D(this._rawModule.getters, t);
};
E.prototype.forEachAction = function(t) {
  this._rawModule.actions && D(this._rawModule.actions, t);
};
E.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && D(this._rawModule.mutations, t);
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
  r.modules && D(r.modules, function(a, c) {
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
var Tt = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, ti = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, jt = {
  getters: Tt,
  mutations: Tt,
  actions: ti
};
function fe(e, t) {
  Object.keys(jt).forEach(function(r) {
    if (t[r]) {
      var i = jt[r];
      D(t[r], function(n, s) {
        b(
          i.assert(n),
          ei(e, r, s, n, i.expected)
        );
      });
    }
  });
}
function ei(e, t, r, i, n) {
  var s = t + " should be " + n + ' but "' + t + "." + r + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(i) + ".", s;
}
function Nt(e) {
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
  }, this.commit = function(p, g, N) {
    return l.call(o, p, g, N);
  }, this.strict = n;
  var u = this._modules.root.state;
  X(this, u, [], this._modules.root), Ot(this, u), i.forEach(function(h) {
    return h(r);
  });
}, At = { state: { configurable: !0 } };
m.prototype.install = function(t, r) {
  t.provide(r || J, this), t.config.globalProperties.$store = this;
  var i = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  i && Yr(t, this);
};
At.state.get = function() {
  return this._state.data;
};
At.state.set = function(e) {
  process.env.NODE_ENV !== "production" && b(!1, "use store.replaceState() to explicit replace store state.");
};
m.prototype.commit = function(t, r, i) {
  var n = this, s = W(t, r, i), o = s.type, a = s.payload, c = s.options, l = { type: o, payload: a }, u = this._mutations[o];
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
  var i = this, n = W(t, r), s = n.type, o = n.payload, a = { type: s, payload: o }, c = this._actions[s];
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
  i === void 0 && (i = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (b(Array.isArray(t), "module path must be a string or an Array."), b(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, r), X(this, this.state, t, this._modules.get(t), i.preserveState), Ot(this, this.state);
};
m.prototype.unregisterModule = function(t) {
  var r = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && b(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var i = wt(r.state, t.slice(0, -1));
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
Object.defineProperties(m.prototype, At);
var Ct = tt(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), Z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (e) {
        var l = et(this.$store, "mapState", e);
        if (!l)
          return;
        a = l.context.state, c = l.context.getters;
      }
      return typeof s == "function" ? s.call(this, a, c) : a[s];
    }, r[n].vuex = !0;
  }), r;
}), St = tt(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), Z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.commit;
      if (e) {
        var u = et(this.$store, "mapMutations", e);
        if (!u)
          return;
        l = u.context.commit;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), Dt = tt(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), Z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    s = e + s, r[n] = function() {
      if (!(e && !et(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(s in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + s);
          return;
        }
        return this.$store.getters[s];
      }
    }, r[n].vuex = !0;
  }), r;
}), Mt = tt(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), Z(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.dispatch;
      if (e) {
        var u = et(this.$store, "mapActions", e);
        if (!u)
          return;
        l = u.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), he = function(e) {
  return {
    mapState: Ct.bind(null, e),
    mapGetters: Dt.bind(null, e),
    mapMutations: St.bind(null, e),
    mapActions: Mt.bind(null, e)
  };
};
function Z(e) {
  return P(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function P(e) {
  return Array.isArray(e) || ee(e);
}
function tt(e) {
  return function(t, r) {
    return typeof t != "string" ? (r = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, r);
  };
}
function et(e, t, r) {
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
    var h = mt(u.state);
    typeof l > "u" || (a && u.subscribe(function(p, g) {
      var N = mt(g);
      if (r(p, h, N)) {
        var rt = $t(), it = n(p), ge = "mutation " + p.type + rt;
        kt(l, ge, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", i(h)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", it), l.log("%c next state", "color: #4CAF50; font-weight: bold", i(N)), Vt(l);
      }
      h = N;
    }), c && u.subscribeAction(function(p, g) {
      if (s(p, g)) {
        var N = $t(), rt = o(p), it = "action " + p.type + N;
        kt(l, it, t), l.log("%c action", "color: #03A9F4; font-weight: bold", rt), Vt(l);
      }
    }));
  };
}
function kt(e, t, r) {
  var i = r ? e.groupCollapsed : e.group;
  try {
    i.call(e, t);
  } catch {
    e.log(t);
  }
}
function Vt(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function $t() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + B(e.getHours(), 2) + ":" + B(e.getMinutes(), 2) + ":" + B(e.getSeconds(), 2) + "." + B(e.getMilliseconds(), 3);
}
function ri(e, t) {
  return new Array(t + 1).join(e);
}
function B(e, t) {
  return ri("0", t - e.toString().length) + e;
}
var ii = {
  version: "4.1.0",
  Store: m,
  storeKey: J,
  createStore: Nt,
  useStore: te,
  mapState: Ct,
  mapMutations: St,
  mapGetters: Dt,
  mapActions: Mt,
  createNamespacedHelpers: he,
  createLogger: de
};
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: m,
  createLogger: de,
  createNamespacedHelpers: he,
  createStore: Nt,
  default: ii,
  mapActions: Mt,
  mapGetters: Dt,
  mapMutations: St,
  mapState: Ct,
  storeKey: J,
  useStore: te
}, Symbol.toStringTag, { value: "Module" }));
class ni {
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
    nt in a ? a[nt][t] = c : a[nt] = {
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
      Kt(t.replace(/\//g, "-")),
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
    r && (z(r == null ? void 0 : r.translate) ? H.add(r.translate).then(() => this.createAppItem(t, r)) : this.createAppItem(t, r));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, r) {
    const i = tr(r.item);
    r != null && r.router && i.use(this.createRouter(r.router)), r != null && r.store && i.use(this.createStore(r.store)), r != null && r.init && r.init(i), w(V.getComponentList(), (n, s) => i.component(s, n)), i.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return yr(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return Nt(t);
  }
}
class si {
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
    this.item = O(t), this.type = O(r), this.code = O(i), this.date = bt(dt(this.item.value)), this.datetime = new Ft(
      this.date.value,
      this.type.value,
      this.code.value
    ), y(this.item, (n) => {
      this.date.value = dt(n);
    }), y(this.type, (n) => this.datetime.setType(n)), y(this.code, (n) => this.datetime.setCode(n)), y(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => er(this.date));
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
class oi extends K {
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
class ai {
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
d(_, "item", j(S.get())), d(_, "country", f(() => _.item.value.country)), d(_, "language", f(() => _.item.value.language)), d(_, "standard", f(() => _.item.value.standard)), d(_, "firstDay", f(() => _.item.value.firstDay));
let F = _;
class ci {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    d(this, "location");
    d(this, "intl");
    this.location = O(t), this.intl = f(() => new qt(this.location.value ?? F.getLanguage().value));
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
function ui(e, t, r) {
  if (e in at)
    return at[e];
  const i = new Xt(e), n = bt(i.get(t, r));
  return y(n, (s) => {
    i.set(s, r);
  }), at[e] = n, n;
}
const at = {};
function li(e, t) {
  if (e in ct)
    return ct[e];
  const r = j(T.get(e, t));
  return y(r, (i) => T.set(e, i)), T.addWatch(e, (i) => {
    r.value = i;
  }), ct[e] = r, r;
}
const ct = {};
function fi() {
  const e = j(R.is());
  return R.registrationEvent(({ detail: t }) => {
    e.value = t.loading;
  }), e;
}
function hi(e, t) {
  if (e in ut)
    return ut[e];
  const r = new q(e, !0), i = j(r.get(t));
  return y(i, (n) => r.set(n)), ut[e] = i, i;
}
const ut = {};
function di(e, t, r) {
  if (e in lt)
    return lt[e];
  const i = new q(e), n = j(i.get(t, r));
  return y(n, (s) => i.set(s)), lt[e] = n, n;
}
const lt = {};
function pe(e) {
  const t = j(H.getListSync(e, !0));
  return rr(async () => {
    F.getLanguage() && (t.value = { ...await H.getList(e) });
  }), t;
}
const pi = (e) => pe(e), Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Be,
  ApiMethodItem: Ke,
  Cache: Jt,
  CacheItem: Yt,
  CacheStatic: pt,
  Cookie: Xt,
  CookieBlock: Et,
  DataStorage: q,
  Datetime: Ft,
  DatetimeRef: si,
  DesignAbstract: fr,
  DesignAsyncAbstract: hr,
  DesignChanged: dr,
  DesignComponents: ir,
  DesignConstructorAbstract: nr,
  Env: Ye,
  EventItem: K,
  EventRef: oi,
  GEO_FLAG_ICON_NAME: ur,
  Geo: S,
  GeoFlag: zt,
  GeoFlagRef: ai,
  GeoIntl: qt,
  GeoIntlRef: ci,
  GeoPhone: gt,
  GeoRef: F,
  Hash: T,
  Icons: lr,
  Loading: R,
  Mutation: pr,
  MutationCollect: Te,
  MutationData: gr,
  MutationDataItem: je,
  MutationGlobal: V,
  MutationGlobalRef: ni,
  MutationObserverGlobal: vr,
  MutationObserverItems: mr,
  Translate: H,
  anyToString: ye,
  arrFill: _e,
  copyObject: ht,
  createElement: Ce,
  eventStopPropagation: Me,
  executeFunction: Y,
  forEach: w,
  frame: Le,
  getAttributes: ke,
  getBind: Qt,
  getBindRef: Cr,
  getClassName: sr,
  getClipboardData: be,
  getColumn: Ee,
  getElement: $e,
  getElementId: Re,
  getElementItem: Se,
  getElementOrWindow: Pe,
  getExp: Rt,
  getIndexForRender: or,
  getKey: _r,
  getLengthOfAllArray: Gt,
  getMaxLengthAllArray: Oe,
  getMinLengthAllArray: br,
  getMouseClient: Er,
  getMouseClientX: Ut,
  getMouseClientY: Bt,
  getRef: v,
  getRequestString: Ht,
  inArray: He,
  intersectKey: Or,
  isArray: We,
  isDifferent: wr,
  isDomRuntime: G,
  isFilled: z,
  isFunction: xe,
  isInDom: Ue,
  isIntegerBetween: Nr,
  isNull: qe,
  isObject: C,
  isObjectNotArray: Ie,
  isSelected: ft,
  isSelectedByList: Ar,
  isString: Ae,
  isWindow: Ge,
  random: Fe,
  render: ar,
  replaceRecursive: k,
  replaceTemplate: Sr,
  setElementItem: De,
  splice: Dr,
  strFill: we,
  t: pi,
  toArray: Pt,
  toCamelCase: cr,
  toCamelCaseFirst: Kt,
  toDate: dt,
  toKebabCase: Ve,
  toNumber: Qe,
  toRefItem: O,
  transformation: _t,
  uniqueArray: Ne,
  useCookieRef: ui,
  useEnv: Wt,
  useHashRef: li,
  useLoadingRef: fi,
  useSessionRef: hi,
  useStorageRef: di,
  useTranslateRef: pe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Jt as C,
  si as D,
  oi as E,
  gt as G,
  T as H,
  R as L,
  ni as M,
  br as a,
  Er as b,
  wr as c,
  Nr as d,
  Ar as e,
  Cr as f,
  _r as g,
  pt as h,
  Or as i,
  Xt as j,
  Et as k,
  ai as l,
  ci as m,
  F as n,
  ui as o,
  li as p,
  fi as q,
  Sr as r,
  Dr as s,
  O as t,
  Bi as u,
  Ui as v,
  hi as w,
  di as x,
  pe as y,
  pi as z
};
