var de = Object.defineProperty;
var pe = (e, t, r) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var d = (e, t, r) => (pe(e, typeof t != "symbol" ? t + "" : t, r), r);
import { e as kt, g as $t, r as L, D as Gt, a as ge, f as ve, d as me, b as ye, c as _e, s as be, u as Ee } from "./getClipboardData-D5e2qFhs.js";
import { a as ut, c as lt, G as I, i as Oe } from "./Geo-DALuw2l2.js";
import { c as we, g as Ae, s as Ne } from "./createElement-9Hn8LIGi.js";
import { e as Ce } from "./eventStopPropagation-fHm2p5BF.js";
import { e as Q, i as Se } from "./executeFunction-B6By_8Og.js";
import { a as N, f as C, i as De, t as xe } from "./toArray-J4lAhJG7.js";
import { g as Rt, a as Pt, f as Me } from "./getMouseClientY-BILUOOAB.js";
import { K as rt, c as V, t as Ft, M as Ie, a as Te, g as je, d as Le } from "./MutationDataItem-Bssnbqfh.js";
import { g as Ve, i as ke } from "./getElement-BhVCn14C.js";
import { g as $e, r as Ge } from "./getElementId-CyEaj3Ao.js";
import { E as B, g as Re, i as Pe } from "./EventItem-7-MD1Y0R.js";
import { g as Ut, A as Fe, a as Ue } from "./Api-vZZaaOPv.js";
import { i as Be } from "./inArray-BLmbg9f_.js";
import { i as Ke, t as He } from "./toNumber-CJS0fvr_.js";
import { D as Y, u as Bt, a as $, t as vt, E as We, i as Qe } from "./DataStorage-Bv8gu1PM.js";
import { i as mt } from "./isFilled-B_gpJgL6.js";
import { computed as f, isRef as Ye, ref as yt, inject as qe, watch as y, effectScope as ze, reactive as Je, createApp as Xe, triggerRef as Ze, shallowRef as j, watchEffect as tr } from "vue";
import { g as Kt } from "./getBind-CgHMfjrB.js";
import { g as v, a as er, D as rr, b as ir, c as nr, r as or, t as sr } from "./DesignConstructorAbstract-_dNu1bTO.js";
import { C as Ht, t as ft, G as Wt } from "./GeoIntl-CUd2jzS4.js";
import { a as Qt, G as ar } from "./GeoFlag-D1Br7H3P.js";
import { I as cr } from "./Icons-DOTKrEyY.js";
import { T as K } from "./Translate-BsmXUyE2.js";
import { a as ur, D as lr, b as fr } from "./DesignAsyncAbstract-D-BgPzA9.js";
import { M as hr, a as dr, b as pr, c as gr } from "./Mutation-CtF3sh0A.js";
import { createRouter as vr } from "vue-router";
function mr(e) {
  var t;
  return (e == null ? void 0 : e.key) ?? (e == null ? void 0 : e.code) ?? ((t = e == null ? void 0 : e.keyCode) == null ? void 0 : t.toString());
}
function yr(e) {
  return Math.min(...kt(e));
}
function _r(e) {
  return {
    x: Rt(e),
    y: Pt(e)
  };
}
function br(e, t) {
  const r = {};
  return N(e) && N(t) && C(e, (i, n) => {
    n in t && (r[n] = i);
  }), r;
}
function Er(e, t) {
  let r = Object.keys(e).length !== Object.keys(t).length;
  return r || C(e, (i, n) => {
    i !== (t == null ? void 0 : t[n]) && (r = !0);
  }), r;
}
function Or(e, t) {
  const r = Math.floor(t);
  return e >= r && e < r + 1;
}
function wr(e, t) {
  return Array.isArray(e) ? e.every((r) => ut(r, t)) : ut(e, t);
}
function Ar(e, t = {}, r = "value") {
  return f(() => Kt(e == null ? void 0 : e.value, v(t), r));
}
function O(e) {
  return Ye(e) ? e : yt(e);
}
function Nr(e, t) {
  let r = e;
  return C(t, (i, n) => {
    r = r.replace($t(`[${n}]`), Q(i));
  }), r;
}
function Cr(e, t, r) {
  if (N(e) && N(t)) {
    if (r) {
      let i = {}, n = !1;
      return C(e, (o, s) => {
        !n && (r === s || r === o) ? (n = !0, i = L(i, t)) : n ? i = L(i, { [s]: o }) : i[s] = N(o) ? lt(o) : o;
      }), n ? i : L(e, t);
    }
    if (N(t))
      return L(e, t);
  }
  return lt(e);
}
class Yt {
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
    return t in this.cache || (this.cache[t] = new Ht(r)), this.cache[t];
  }
}
const W = class W {
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
d(W, "cache"), W.cache = new Yt();
let ht = W;
const Sr = "cookie-block";
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
d(_t, "storage", new Y(Sr));
const F = {};
class qt {
  constructor(t) {
    d(this, "value");
    d(this, "options", {});
    if (this.name = t, t in it)
      return it[t];
    this.value = F == null ? void 0 : F[t], it[t] = this;
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
    this.value = Q(t), Object.assign(this.options, r), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? Bt("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, r;
    if ($() && !_t.get()) {
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
  if ($())
    for (const t of document.cookie.split(";")) {
      const [r, i] = t.trim().split("=");
      r && mt(i) && (F[r] = vt(i));
    }
})();
const it = {}, A = class A {
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
    const i = Q(r);
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
      (...r) => (t[r[1]] = vt(r[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0, history.replaceState(null, "", `#${Ut(this.hash, "=", ";")}`), requestAnimationFrame(() => {
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
    C(this.watch, (r, i) => {
      var n;
      ((n = this.hash) == null ? void 0 : n[i]) !== (t == null ? void 0 : t[i]) && r.forEach((o) => o(t[i]));
    });
  }
};
d(A, "hash", {}), d(A, "watch", {}), d(A, "block", !1), $() && (A.reload(), addEventListener("hashchange", () => A.reload()));
let T = A;
const Dt = "ui-loading", k = class k {
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
    new B(window, Dt, t).setElementControl(r).start();
  }
  /**
   * Calls the event listener.<br>
   * Вызывает слушателя событий.
   */
  static dispatch() {
    this.event.dispatch({ loading: this.is() });
  }
};
d(k, "value", 0), d(k, "event"), $() && (k.event = new B(window, Dt));
let G = k;
function Dr() {
  return zt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const xr = typeof Proxy == "function", Mr = "devtools-plugin:setup", Ir = "plugin:settings:set";
let x, dt;
function Tr() {
  var e;
  return x !== void 0 || (typeof window < "u" && window.performance ? (x = !0, dt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (x = !0, dt = globalThis.perf_hooks.performance) : x = !1), x;
}
function jr() {
  return Tr() ? dt.now() : Date.now();
}
class Lr {
  constructor(t, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = r;
    const i = {};
    if (t.settings)
      for (const s in t.settings) {
        const a = t.settings[s];
        i[s] = a.defaultValue;
      }
    const n = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, i);
    try {
      const s = localStorage.getItem(n), a = JSON.parse(s);
      Object.assign(o, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(s) {
        try {
          localStorage.setItem(n, JSON.stringify(s));
        } catch {
        }
        o = s;
      },
      now() {
        return jr();
      }
    }, r && r.on(Ir, (s, a) => {
      s === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, a) => this.target ? this.target.on[a] : (...c) => {
        this.onQueue.push({
          method: a,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...c) => (this.targetQueue.push({
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
  const r = e, i = zt(), n = Dr(), o = xr && r.enableEarlyProxy;
  if (n && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    n.emit(Mr, e, t);
  else {
    const s = o ? new Lr(r, n) : null;
    (i.__VUE_DEVTOOLS_PLUGINS__ = i.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var q = "store";
function Jt(e) {
  return e === void 0 && (e = null), qe(e !== null ? e : q);
}
function kr(e, t) {
  return e.filter(t)[0];
}
function pt(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var r = kr(t, function(n) {
    return n.original === e;
  });
  if (r)
    return r.copy;
  var i = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: i
  }), Object.keys(e).forEach(function(n) {
    i[n] = pt(e[n], t);
  }), i;
}
function S(e, t) {
  Object.keys(e).forEach(function(r) {
    return t(e[r], r);
  });
}
function Xt(e) {
  return e !== null && typeof e == "object";
}
function $r(e) {
  return e && typeof e.then == "function";
}
function b(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function Gr(e, t) {
  return function() {
    return e(t);
  };
}
function Zt(e, t, r) {
  return t.indexOf(e) < 0 && (r && r.prepend ? t.unshift(e) : t.push(e)), function() {
    var i = t.indexOf(e);
    i > -1 && t.splice(i, 1);
  };
}
function te(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var r = e.state;
  z(e, r, [], e._modules.root, !0), bt(e, r, t);
}
function bt(e, t, r) {
  var i = e._state, n = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var o = e._wrappedGetters, s = {}, a = {}, c = ze(!0);
  c.run(function() {
    S(o, function(l, u) {
      s[u] = Gr(l, e), a[u] = f(function() {
        return s[u]();
      }), Object.defineProperty(e.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Je({
    data: t
  }), e._scope = c, e.strict && Br(e), i && r && e._withCommit(function() {
    i.data = null;
  }), n && n.stop();
}
function z(e, t, r, i, n) {
  var o = !r.length, s = e._modules.getNamespace(r);
  if (i.namespaced && (e._modulesNamespaceMap[s] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + s + " for the namespaced module " + r.join("/")), e._modulesNamespaceMap[s] = i), !o && !n) {
    var a = Et(t, r.slice(0, -1)), c = r[r.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in a && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + r.join(".") + '"'
      ), a[c] = i.state;
    });
  }
  var l = i.context = Rr(e, s, r);
  i.forEachMutation(function(u, h) {
    var p = s + h;
    Pr(e, p, u, l);
  }), i.forEachAction(function(u, h) {
    var p = u.root ? h : s + h, g = u.handler || u;
    Fr(e, p, g, l);
  }), i.forEachGetter(function(u, h) {
    var p = s + h;
    Ur(e, p, u, l);
  }), i.forEachChild(function(u, h) {
    z(e, t, r.concat(h), u, n);
  });
}
function Rr(e, t, r) {
  var i = t === "", n = {
    dispatch: i ? e.dispatch : function(o, s, a) {
      var c = H(o, s, a), l = c.payload, u = c.options, h = c.type;
      if ((!u || !u.root) && (h = t + h, process.env.NODE_ENV !== "production" && !e._actions[h])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + h);
        return;
      }
      return e.dispatch(h, l);
    },
    commit: i ? e.commit : function(o, s, a) {
      var c = H(o, s, a), l = c.payload, u = c.options, h = c.type;
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
        return ee(e, t);
      }
    },
    state: {
      get: function() {
        return Et(e.state, r);
      }
    }
  }), n;
}
function ee(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var r = {}, i = t.length;
    Object.keys(e.getters).forEach(function(n) {
      if (n.slice(0, i) === t) {
        var o = n.slice(i);
        Object.defineProperty(r, o, {
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
  n.push(function(s) {
    r.call(e, i.state, s);
  });
}
function Fr(e, t, r, i) {
  var n = e._actions[t] || (e._actions[t] = []);
  n.push(function(s) {
    var a = r.call(e, {
      dispatch: i.dispatch,
      commit: i.commit,
      getters: i.getters,
      state: i.state,
      rootGetters: e.getters,
      rootState: e.state
    }, s);
    return $r(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(c) {
      throw e._devtoolHook.emit("vuex:error", c), c;
    }) : a;
  });
}
function Ur(e, t, r, i) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(o) {
    return r(
      i.state,
      // local state
      i.getters,
      // local getters
      o.state,
      // root state
      o.getters
      // root getters
    );
  };
}
function Br(e) {
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
function H(e, t, r) {
  return Xt(e) && e.type && (r = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && b(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: r };
}
var Kr = "vuex bindings", xt = "vuex:mutations", nt = "vuex:actions", M = "vuex", Hr = 0;
function Wr(e, t) {
  Vr(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Kr]
    },
    function(r) {
      r.addTimelineLayer({
        id: xt,
        label: "Vuex Mutations",
        color: Mt
      }), r.addTimelineLayer({
        id: nt,
        label: "Vuex Actions",
        color: Mt
      }), r.addInspector({
        id: M,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), r.on.getInspectorTree(function(i) {
        if (i.app === e && i.inspectorId === M)
          if (i.filter) {
            var n = [];
            oe(n, t._modules.root, i.filter, ""), i.rootNodes = n;
          } else
            i.rootNodes = [
              ne(t._modules.root, "")
            ];
      }), r.on.getInspectorState(function(i) {
        if (i.app === e && i.inspectorId === M) {
          var n = i.nodeId;
          ee(t, n), i.state = qr(
            Jr(t._modules, n),
            n === "root" ? t.getters : t._makeLocalGettersCache,
            n
          );
        }
      }), r.on.editInspectorState(function(i) {
        if (i.app === e && i.inspectorId === M) {
          var n = i.nodeId, o = i.path;
          n !== "root" && (o = n.split("/").filter(Boolean).concat(o)), t._withCommit(function() {
            i.set(t._state.data, o, i.state.value);
          });
        }
      }), t.subscribe(function(i, n) {
        var o = {};
        i.payload && (o.payload = i.payload), o.state = n, r.notifyComponentUpdate(), r.sendInspectorTree(M), r.sendInspectorState(M), r.addTimelineEvent({
          layerId: xt,
          event: {
            time: Date.now(),
            title: i.type,
            data: o
          }
        });
      }), t.subscribeAction({
        before: function(i, n) {
          var o = {};
          i.payload && (o.payload = i.payload), i._id = Hr++, i._time = Date.now(), o.state = n, r.addTimelineEvent({
            layerId: nt,
            event: {
              time: i._time,
              title: i.type,
              groupId: i._id,
              subtitle: "start",
              data: o
            }
          });
        },
        after: function(i, n) {
          var o = {}, s = Date.now() - i._time;
          o.duration = {
            _custom: {
              type: "duration",
              display: s + "ms",
              tooltip: "Action duration",
              value: s
            }
          }, i.payload && (o.payload = i.payload), o.state = n, r.addTimelineEvent({
            layerId: nt,
            event: {
              time: Date.now(),
              title: i.type,
              groupId: i._id,
              subtitle: "end",
              data: o
            }
          });
        }
      });
    }
  );
}
var Mt = 8702998, Qr = 6710886, Yr = 16777215, re = {
  label: "namespaced",
  textColor: Yr,
  backgroundColor: Qr
};
function ie(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function ne(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: ie(t),
    tags: e.namespaced ? [re] : [],
    children: Object.keys(e._children).map(
      function(r) {
        return ne(
          e._children[r],
          t + r + "/"
        );
      }
    )
  };
}
function oe(e, t, r, i) {
  i.includes(r) && e.push({
    id: i || "root",
    label: i.endsWith("/") ? i.slice(0, i.length - 1) : i || "Root",
    tags: t.namespaced ? [re] : []
  }), Object.keys(t._children).forEach(function(n) {
    oe(e, t._children[n], r, i + n + "/");
  });
}
function qr(e, t, r) {
  t = r === "root" ? t : t[r];
  var i = Object.keys(t), n = {
    state: Object.keys(e.state).map(function(s) {
      return {
        key: s,
        editable: !0,
        value: e.state[s]
      };
    })
  };
  if (i.length) {
    var o = zr(t);
    n.getters = Object.keys(o).map(function(s) {
      return {
        key: s.endsWith("/") ? ie(s) : s,
        editable: !1,
        value: gt(function() {
          return o[s];
        })
      };
    });
  }
  return n;
}
function zr(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var i = r.split("/");
    if (i.length > 1) {
      var n = t, o = i.pop();
      i.forEach(function(s) {
        n[s] || (n[s] = {
          _custom: {
            value: {},
            display: s,
            tooltip: "Module",
            abstract: !0
          }
        }), n = n[s]._custom.value;
      }), n[o] = gt(function() {
        return e[r];
      });
    } else
      t[r] = gt(function() {
        return e[r];
      });
  }), t;
}
function Jr(e, t) {
  var r = t.split("/").filter(function(i) {
    return i;
  });
  return r.reduce(
    function(i, n, o) {
      var s = i[n];
      if (!s)
        throw new Error('Missing module "' + n + '" for path "' + t + '".');
      return o === r.length - 1 ? s : s._children;
    },
    t === "root" ? e : e.root._children
  );
}
function gt(e) {
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
}, se = { namespaced: { configurable: !0 } };
se.namespaced.get = function() {
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
  S(this._children, t);
};
E.prototype.forEachGetter = function(t) {
  this._rawModule.getters && S(this._rawModule.getters, t);
};
E.prototype.forEachAction = function(t) {
  this._rawModule.actions && S(this._rawModule.actions, t);
};
E.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && S(this._rawModule.mutations, t);
};
Object.defineProperties(E.prototype, se);
var D = function(t) {
  this.register([], t, !1);
};
D.prototype.get = function(t) {
  return t.reduce(function(r, i) {
    return r.getChild(i);
  }, this.root);
};
D.prototype.getNamespace = function(t) {
  var r = this.root;
  return t.reduce(function(i, n) {
    return r = r.getChild(n), i + (r.namespaced ? n + "/" : "");
  }, "");
};
D.prototype.update = function(t) {
  ae([], this.root, t);
};
D.prototype.register = function(t, r, i) {
  var n = this;
  i === void 0 && (i = !0), process.env.NODE_ENV !== "production" && ce(t, r);
  var o = new E(r, i);
  if (t.length === 0)
    this.root = o;
  else {
    var s = this.get(t.slice(0, -1));
    s.addChild(t[t.length - 1], o);
  }
  r.modules && S(r.modules, function(a, c) {
    n.register(t.concat(c), a, i);
  });
};
D.prototype.unregister = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1], n = r.getChild(i);
  if (!n) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + i + "', which is not registered"
    );
    return;
  }
  n.runtime && r.removeChild(i);
};
D.prototype.isRegistered = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1];
  return r ? r.hasChild(i) : !1;
};
function ae(e, t, r) {
  if (process.env.NODE_ENV !== "production" && ce(e, r), t.update(r), r.modules)
    for (var i in r.modules) {
      if (!t.getChild(i)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + i + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      ae(
        e.concat(i),
        t.getChild(i),
        r.modules[i]
      );
    }
}
var It = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Xr = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Tt = {
  getters: It,
  mutations: It,
  actions: Xr
};
function ce(e, t) {
  Object.keys(Tt).forEach(function(r) {
    if (t[r]) {
      var i = Tt[r];
      S(t[r], function(n, o) {
        b(
          i.assert(n),
          Zr(e, r, o, n, i.expected)
        );
      });
    }
  });
}
function Zr(e, t, r, i, n) {
  var o = t + " should be " + n + ' but "' + t + "." + r + '"';
  return e.length > 0 && (o += ' in module "' + e.join(".") + '"'), o += " is " + JSON.stringify(i) + ".", o;
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
  var o = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new D(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = o;
  var s = this, a = this, c = a.dispatch, l = a.commit;
  this.dispatch = function(p, g) {
    return c.call(s, p, g);
  }, this.commit = function(p, g, w) {
    return l.call(s, p, g, w);
  }, this.strict = n;
  var u = this._modules.root.state;
  z(this, u, [], this._modules.root), bt(this, u), i.forEach(function(h) {
    return h(r);
  });
}, wt = { state: { configurable: !0 } };
m.prototype.install = function(t, r) {
  t.provide(r || q, this), t.config.globalProperties.$store = this;
  var i = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  i && Wr(t, this);
};
wt.state.get = function() {
  return this._state.data;
};
wt.state.set = function(e) {
  process.env.NODE_ENV !== "production" && b(!1, "use store.replaceState() to explicit replace store state.");
};
m.prototype.commit = function(t, r, i) {
  var n = this, o = H(t, r, i), s = o.type, a = o.payload, c = o.options, l = { type: s, payload: a }, u = this._mutations[s];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + s);
    return;
  }
  this._withCommit(function() {
    u.forEach(function(p) {
      p(a);
    });
  }), this._subscribers.slice().forEach(function(h) {
    return h(l, n.state);
  }), process.env.NODE_ENV !== "production" && c && c.silent && console.warn(
    "[vuex] mutation type: " + s + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
m.prototype.dispatch = function(t, r) {
  var i = this, n = H(t, r), o = n.type, s = n.payload, a = { type: o, payload: s }, c = this._actions[o];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + o);
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
    return u(s);
  })) : c[0](s);
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
  return Zt(t, this._subscribers, r);
};
m.prototype.subscribeAction = function(t, r) {
  var i = typeof t == "function" ? { before: t } : t;
  return Zt(i, this._actionSubscribers, r);
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
  i === void 0 && (i = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (b(Array.isArray(t), "module path must be a string or an Array."), b(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, r), z(this, this.state, t, this._modules.get(t), i.preserveState), bt(this, this.state);
};
m.prototype.unregisterModule = function(t) {
  var r = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && b(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var i = Et(r.state, t.slice(0, -1));
    delete i[t[t.length - 1]];
  }), te(this);
};
m.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && b(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
m.prototype.hotUpdate = function(t) {
  this._modules.update(t), te(this, !0);
};
m.prototype._withCommit = function(t) {
  var r = this._committing;
  this._committing = !0, t(), this._committing = r;
};
Object.defineProperties(m.prototype, wt);
var At = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), J(t).forEach(function(i) {
    var n = i.key, o = i.val;
    r[n] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (e) {
        var l = Z(this.$store, "mapState", e);
        if (!l)
          return;
        a = l.context.state, c = l.context.getters;
      }
      return typeof o == "function" ? o.call(this, a, c) : a[o];
    }, r[n].vuex = !0;
  }), r;
}), Nt = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), J(t).forEach(function(i) {
    var n = i.key, o = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.commit;
      if (e) {
        var u = Z(this.$store, "mapMutations", e);
        if (!u)
          return;
        l = u.context.commit;
      }
      return typeof o == "function" ? o.apply(this, [l].concat(a)) : l.apply(this.$store, [o].concat(a));
    };
  }), r;
}), Ct = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), J(t).forEach(function(i) {
    var n = i.key, o = i.val;
    o = e + o, r[n] = function() {
      if (!(e && !Z(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(o in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + o);
          return;
        }
        return this.$store.getters[o];
      }
    }, r[n].vuex = !0;
  }), r;
}), St = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !P(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), J(t).forEach(function(i) {
    var n = i.key, o = i.val;
    r[n] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.dispatch;
      if (e) {
        var u = Z(this.$store, "mapActions", e);
        if (!u)
          return;
        l = u.context.dispatch;
      }
      return typeof o == "function" ? o.apply(this, [l].concat(a)) : l.apply(this.$store, [o].concat(a));
    };
  }), r;
}), ue = function(e) {
  return {
    mapState: At.bind(null, e),
    mapGetters: Ct.bind(null, e),
    mapMutations: Nt.bind(null, e),
    mapActions: St.bind(null, e)
  };
};
function J(e) {
  return P(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function P(e) {
  return Array.isArray(e) || Xt(e);
}
function X(e) {
  return function(t, r) {
    return typeof t != "string" ? (r = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, r);
  };
}
function Z(e, t, r) {
  var i = e._modulesNamespaceMap[r];
  return process.env.NODE_ENV !== "production" && !i && console.error("[vuex] module namespace not found in " + t + "(): " + r), i;
}
function le(e) {
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
  var o = e.actionFilter;
  o === void 0 && (o = function(u, h) {
    return !0;
  });
  var s = e.actionTransformer;
  s === void 0 && (s = function(u) {
    return u;
  });
  var a = e.logMutations;
  a === void 0 && (a = !0);
  var c = e.logActions;
  c === void 0 && (c = !0);
  var l = e.logger;
  return l === void 0 && (l = console), function(u) {
    var h = pt(u.state);
    typeof l > "u" || (a && u.subscribe(function(p, g) {
      var w = pt(g);
      if (r(p, h, w)) {
        var tt = Vt(), et = n(p), he = "mutation " + p.type + tt;
        jt(l, he, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", i(h)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", et), l.log("%c next state", "color: #4CAF50; font-weight: bold", i(w)), Lt(l);
      }
      h = w;
    }), c && u.subscribeAction(function(p, g) {
      if (o(p, g)) {
        var w = Vt(), tt = s(p), et = "action " + p.type + w;
        jt(l, et, t), l.log("%c action", "color: #03A9F4; font-weight: bold", tt), Lt(l);
      }
    }));
  };
}
function jt(e, t, r) {
  var i = r ? e.groupCollapsed : e.group;
  try {
    i.call(e, t);
  } catch {
    e.log(t);
  }
}
function Lt(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function Vt() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + U(e.getHours(), 2) + ":" + U(e.getMinutes(), 2) + ":" + U(e.getSeconds(), 2) + "." + U(e.getMilliseconds(), 3);
}
function ti(e, t) {
  return new Array(t + 1).join(e);
}
function U(e, t) {
  return ti("0", t - e.toString().length) + e;
}
var ei = {
  version: "4.1.0",
  Store: m,
  storeKey: q,
  createStore: Ot,
  useStore: Jt,
  mapState: At,
  mapMutations: Nt,
  mapGetters: Ct,
  mapActions: St,
  createNamespacedHelpers: ue,
  createLogger: le
};
const Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: m,
  createLogger: le,
  createNamespacedHelpers: ue,
  createStore: Ot,
  default: ei,
  mapActions: St,
  mapGetters: Ct,
  mapMutations: Nt,
  mapState: At,
  storeKey: q,
  useStore: Jt
}, Symbol.toStringTag, { value: "Module" }));
class ri {
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
  static addComponent(t, r, i, n, o, s) {
    const a = window, c = {
      item: r,
      router: i,
      store: n,
      init: o,
      translate: s
    };
    rt in a ? a[rt][t] = c : a[rt] = {
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
      Ft(t.replace(/\//g, "-")),
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
    r && (mt(r == null ? void 0 : r.translate) ? K.add(r.translate).then(() => this.createAppItem(t, r)) : this.createAppItem(t, r));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, r) {
    const i = Xe(r.item);
    r != null && r.router && i.use(this.createRouter(r.router)), r != null && r.store && i.use(this.createStore(r.store)), r != null && r.init && r.init(i), C(V.getComponentList(), (n, o) => i.component(o, n)), i.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return vr(t);
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
class ii {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, r = "date", i = I.getLocation()) {
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
    this.item = O(t), this.type = O(r), this.code = O(i), this.date = yt(ft(this.item.value)), this.datetime = new Gt(
      this.date.value,
      this.type.value,
      this.code.value
    ), y(this.item, (n) => {
      this.date.value = ft(n);
    }), y(this.type, (n) => this.datetime.setType(n)), y(this.code, (n) => this.datetime.setCode(n)), y(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Ze(this.date));
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
class ni extends B {
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
  constructor(t, r, i = ["click"], n, o, s) {
    const a = O(t), c = O(r);
    super(
      a.value,
      i,
      n,
      o,
      s
    ), c.value && this.setElementControl(c.value), y(a, (l) => this.setElement(l)), y(c, (l) => this.setElementControl(l));
  }
}
class oi {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = I.getLocation()) {
    d(this, "code");
    d(this, "flag");
    this.code = O(t), this.flag = new Qt(this.code.value), y(this.code, (r) => this.flag.setCode(r));
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
    I.set(t, !0), this.item.value = I.getItem();
  }
};
d(_, "item", j(I.get())), d(_, "country", f(() => _.item.value.country)), d(_, "language", f(() => _.item.value.language)), d(_, "standard", f(() => _.item.value.standard)), d(_, "firstDay", f(() => _.item.value.firstDay));
let R = _;
class si {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    d(this, "location");
    d(this, "intl");
    this.location = O(t), this.intl = f(() => new Wt(this.location.value ?? R.getLanguage().value));
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
  relativeLimit(t, r, i, n, o, s, a) {
    return f(() => this.intl.value.relativeLimit(
      v(t),
      r,
      i,
      n,
      o,
      s,
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
function ai(e, t, r) {
  if (e in ot)
    return ot[e];
  const i = new qt(e), n = yt(i.get(t, r));
  return y(n, (o) => {
    i.set(o, r);
  }), ot[e] = n, n;
}
const ot = {};
function ci(e, t) {
  if (e in st)
    return st[e];
  const r = j(T.get(e, t));
  return y(r, (i) => T.set(e, i)), T.addWatch(e, (i) => {
    r.value = i;
  }), st[e] = r, r;
}
const st = {};
function ui() {
  const e = j(G.is());
  return G.registrationEvent(({ detail: t }) => {
    e.value = t.loading;
  }), e;
}
function li(e, t) {
  if (e in at)
    return at[e];
  const r = new Y(e, !0), i = j(r.get(t));
  return y(i, (n) => r.set(n)), at[e] = i, i;
}
const at = {};
function fi(e, t, r) {
  if (e in ct)
    return ct[e];
  const i = new Y(e), n = j(i.get(t, r));
  return y(n, (o) => i.set(o)), ct[e] = n, n;
}
const ct = {};
function fe(e) {
  const t = j(K.getListSync(e, !0));
  return tr(async () => {
    R.getLanguage() && (t.value = { ...await K.getList(e) });
  }), t;
}
const hi = (e) => fe(e), Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Fe,
  ApiMethodItem: Ue,
  Cache: Yt,
  CacheItem: Ht,
  CacheStatic: ht,
  Cookie: qt,
  CookieBlock: _t,
  DataStorage: Y,
  Datetime: Gt,
  DatetimeRef: ii,
  DesignAbstract: ur,
  DesignAsyncAbstract: lr,
  DesignChanged: fr,
  DesignComponents: er,
  DesignConstructorAbstract: rr,
  Env: We,
  EventItem: B,
  EventRef: ni,
  GEO_FLAG_ICON_NAME: ar,
  Geo: I,
  GeoFlag: Qt,
  GeoFlagRef: oi,
  GeoIntl: Wt,
  GeoIntlRef: si,
  GeoRef: R,
  Hash: T,
  Icons: cr,
  Loading: G,
  Mutation: hr,
  MutationCollect: Ie,
  MutationData: dr,
  MutationDataItem: Te,
  MutationGlobal: V,
  MutationGlobalRef: ri,
  MutationObserverGlobal: pr,
  MutationObserverItems: gr,
  Translate: K,
  anyToString: ge,
  arrFill: ve,
  copyObject: lt,
  createElement: we,
  eventStopPropagation: Ce,
  executeFunction: Q,
  forEach: C,
  frame: Me,
  getAttributes: je,
  getBind: Kt,
  getBindRef: Ar,
  getClassName: ir,
  getClipboardData: me,
  getColumn: ye,
  getElement: Ve,
  getElementId: $e,
  getElementItem: Ae,
  getElementOrWindow: Re,
  getExp: $t,
  getIndexForRender: nr,
  getKey: mr,
  getLengthOfAllArray: kt,
  getMaxLengthAllArray: _e,
  getMinLengthAllArray: yr,
  getMouseClient: _r,
  getMouseClientX: Rt,
  getMouseClientY: Pt,
  getRef: v,
  getRequestString: Ut,
  inArray: Be,
  intersectKey: br,
  isArray: Ke,
  isDifferent: Er,
  isDomRuntime: $,
  isFilled: mt,
  isFunction: Se,
  isInDom: Pe,
  isIntegerBetween: Or,
  isNull: Qe,
  isObject: N,
  isObjectNotArray: De,
  isSelected: ut,
  isSelectedByList: wr,
  isString: Oe,
  isWindow: ke,
  random: Ge,
  render: or,
  replaceRecursive: L,
  replaceTemplate: Nr,
  setElementItem: Ne,
  splice: Cr,
  strFill: be,
  t: hi,
  toArray: xe,
  toCamelCase: sr,
  toCamelCaseFirst: Ft,
  toDate: ft,
  toKebabCase: Le,
  toNumber: He,
  toRefItem: O,
  transformation: vt,
  uniqueArray: Ee,
  useCookieRef: ai,
  useEnv: Bt,
  useHashRef: ci,
  useLoadingRef: ui,
  useSessionRef: li,
  useStorageRef: fi,
  useTranslateRef: fe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yt as C,
  ii as D,
  ni as E,
  oi as G,
  T as H,
  G as L,
  ri as M,
  yr as a,
  _r as b,
  Er as c,
  Or as d,
  wr as e,
  Ar as f,
  mr as g,
  ht as h,
  br as i,
  qt as j,
  _t as k,
  si as l,
  R as m,
  ai as n,
  ci as o,
  ui as p,
  li as q,
  Nr as r,
  Cr as s,
  O as t,
  Fi as u,
  Pi as v,
  fi as w,
  fe as x,
  hi as y
};
