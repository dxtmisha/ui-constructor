var Oe = Object.defineProperty;
var Ne = (i, t, e) => t in i ? Oe(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var h = (i, t, e) => (Ne(i, typeof t != "symbol" ? t + "" : t, e), e);
import { i as b, f as p } from "./forEach-B1ZDH1yu.js";
import { i as Ct, c as pt, d as V, D as z, u as J, e as K, a as N, t as X, G as k, A as Ae, f as Ie, E as Me, b as Le } from "./Api-6wgpqJNV.js";
import { c as ke, g as xe, s as $e } from "./createElement-C7okUM5s.js";
import { e as Te } from "./eventStopPropagation-fHm2p5BF.js";
import { e as tt, i as je } from "./executeFunction-B6By_8Og.js";
import { g as Rt, i as Fe } from "./getElement-BhVCn14C.js";
import { C as Wt, t as B, a as Et, g as Ut, E as Ht, b as Kt, G as Ve, c as Pe, i as Be, r as Ge } from "./EventItem-CT0twIVD.js";
import { i as Re } from "./inArray-BLmbg9f_.js";
import { a as We, D as Ue, b as He, i as Ke, t as Ye } from "./toNumber-BeBr0lVX.js";
import { g as v, t as Yt, a as Ze, D as qe, b as Qe, c as ze, i as Je, r as Xe } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { computed as d, isRef as ti, ref as wt, inject as ei, watch as C, effectScope as ii, reactive as ri, createApp as si, triggerRef as ni, shallowRef as R, watchEffect as oi } from "vue";
import { g as Zt } from "./getBind-BTtwgl8A.js";
import { t as qt } from "./toArray-rswbj5Xf.js";
import { I as ai } from "./Icons-CqlWFogF.js";
import { T as Y } from "./Translate-XciraImL.js";
import { createRouter as ci } from "vue-router";
function ui(i) {
  return Ct(i) ? i : b(i) ? JSON.stringify(i) : (i == null ? void 0 : i.toString()) ?? "";
}
function Qt(i, t) {
  return Array(t).fill(i);
}
function zt(i, t, e) {
  requestAnimationFrame(() => {
    i(), t != null && t() ? zt(i, t, e) : e == null || e();
  });
}
function Jt(i) {
  const t = {}, e = Rt(i);
  if (e)
    for (const r of e.attributes)
      t[r.name] = ((r == null ? void 0 : r.value) || (r == null ? void 0 : r.textContent)) ?? void 0;
  return t;
}
async function hi(i) {
  var t;
  return ((t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function li(i, t) {
  return p(i, (e) => e == null ? void 0 : e[t]);
}
function Xt(i, t = "ig", e = ":value") {
  const r = i.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(e.replaceAll(":value", r), t);
}
function di(i) {
  var t;
  return (i == null ? void 0 : i.key) ?? (i == null ? void 0 : i.code) ?? ((t = i == null ? void 0 : i.keyCode) == null ? void 0 : t.toString());
}
function Dt(i) {
  return p(i, (t) => t.length);
}
function fi(i) {
  return Math.max(...Dt(i));
}
function gi(i) {
  return Math.min(...Dt(i));
}
function te(i) {
  var t, e;
  return (i == null ? void 0 : i.clientX) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientX) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientX) || 0;
}
function ee(i) {
  var t, e;
  return (i == null ? void 0 : i.clientY) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientY) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientY) || 0;
}
function mi(i) {
  return {
    x: te(i),
    y: ee(i)
  };
}
function pi(i, t) {
  const e = {};
  return b(i) && b(t) && p(i, (r, s) => {
    s in t && (e[s] = r);
  }), e;
}
function vi(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || p(i, (r, s) => {
    r !== (t == null ? void 0 : t[s]) && (e = !0);
  }), e;
}
function yi(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function bi(i, t) {
  return Array.isArray(i) ? i.every((e) => pt(e, t)) : pt(i, t);
}
function _i(i, t = {}, e = "value") {
  return d(() => Zt(i == null ? void 0 : i.value, v(t), e));
}
function A(i) {
  return ti(i) ? i : wt(i);
}
function ie(i) {
  return [...new Set(i)];
}
function F(i, t, e = !0) {
  const r = V(i);
  return b(i) && b(t) && p(
    t,
    (s, n) => {
      const o = i == null ? void 0 : i[n];
      b(o) && b(s) ? e && Array.isArray(o) && Array.isArray(s) ? r[n] = V(ie([...o, ...s])) : r[n] = F(
        Array.isArray(o) ? { ...o } : o,
        s,
        e
      ) : r[n] = b(s) ? V(s) : s;
    }
  ), r;
}
function Ci(i, t) {
  let e = i;
  return p(t, (r, s) => {
    e = e.replace(Xt(`[${s}]`), tt(r));
  }), e;
}
function Ei(i, t, e) {
  if (b(i) && b(t)) {
    if (e) {
      let r = {}, s = !1;
      return p(i, (n, o) => {
        !s && (e === o || e === n) ? (s = !0, r = F(r, t)) : s ? r = F(r, { [o]: n }) : r[o] = b(n) ? V(n) : n;
      }), s ? r : F(i, t);
    }
    if (b(t))
      return F(i, t);
  }
  return V(i);
}
function wi(i, t) {
  return Qt(i, t).join("");
}
function Z(i) {
  return Yt(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function et(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
class re {
  constructor() {
    h(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(t, e, r) {
    return this.getCacheItem(t, e).getCache(r ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, e, r) {
    return await this.getCacheItem(t, e).getCacheAsync(r ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Wt(e)), this.cache[t];
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
  static get(t, e, r) {
    return this.cache.get(t, e, r);
  }
};
h(Q, "cache"), Q.cache = new re();
let vt = Q;
const Di = "cookie-block";
class St {
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
h(St, "storage", new z(Di));
const U = {};
class se {
  constructor(t) {
    h(this, "value");
    h(this, "options", {});
    if (this.name = t, t in ht)
      return ht[t];
    this.value = U == null ? void 0 : U[t], ht[t] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(t, e) {
    return this.value === void 0 && t && this.set(t, e), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(t, e) {
    this.value = tt(t), Object.assign(this.options, e), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? J("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, e;
    if (K() && !St.get()) {
      const r = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(r)}`,
        `max-age=${r === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((e = this.options) == null ? void 0 : e.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (K())
    for (const t of document.cookie.split(";")) {
      const [e, r] = t.trim().split("=");
      e && N(r) && (U[e] = X(r));
    }
})();
const ht = {};
class it {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", r = k.getLocation()) {
    h(this, "date");
    h(this, "hour24", !1);
    h(this, "watch");
    this.type = e, this.code = r, this.date = B(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new Et(this.code);
  }
  /**
   * Returns a Date object.<br>
   * Возвращает объект Date.
   */
  getDate() {
    return this.date;
  }
  /**
   * Returns the type of data output.<br>
   * Возвращает тип вывода данных.
   */
  getType() {
    return this.type;
  }
  /**
   * Returns the format of hours.<br>
   * Возвращает формат часов.
   */
  getHoursType() {
    const t = this.clone();
    return t.setHours(23), t.toLocaleTimeString(this.getIntl().getLocation(), { hour: "2-digit" }).match(/23/ig) ? "24" : "12";
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   */
  getHour24() {
    return this.hour24;
  }
  /**
   * The method returns the difference, in minutes, between
   * a date as evaluated in the UTC time zone, and the same date as evaluated
   * in the local time zone.<br>
   * Метод возвращает смещение часового пояса относительно часового пояса UTC
   * в минутах для текущей локали.
   */
  getTimeZoneOffset() {
    return this.date.getTimezoneOffset();
  }
  /**
   * Returns the time zone as a string.<br>
   * Возвращает временную зону в виде строки.
   * @param style the style of the returned data /<br>стиль возвращаемых данных
   */
  getTimeZone(t) {
    const e = this.getTimeZoneOffset();
    if (t === "minute")
      return e.toString();
    const r = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(r), { signDisplay: "always" });
    const s = this.getIntl().number(Math.trunc(r), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), n = r.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${s}${n}` : `${s}:${n}`;
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    const t = this.getIntl().getFirstDay();
    return t === "Sa" ? 6 : t === "Su" ? 0 : 1;
  }
  /**
   * The method returns the year of the specified date according to local time.<br>
   * Метод возвращает год указанной даты по местному времени.
   */
  getYear() {
    return this.date.getFullYear();
  }
  /**
   * The method returns the month in the specified date according to local time,
   * as a zero-based value.<br>
   * Метод возвращает месяц указанной даты по местному времени, нумерация
   * месяцев начинается с нуля для первого месяца в году.
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }
  /**
   * The method returns the day of the month for the specified date according to local time.<br>
   * Метод возвращает день месяца указанной даты по местному времени
   */
  getDay() {
    return this.date.getDate();
  }
  /**
   * The method returns the hour for the specified date, according to local time.<br>
   * Метод возвращает часы указанной даты по местному времени.
   */
  getHour() {
    return this.date.getHours();
  }
  /**
   * The method returns the minutes in the specified date according to local time.<br>
   * Метод возвращает минуты указанной даты по местному времени.
   */
  getMinute() {
    return this.date.getMinutes();
  }
  /**
   * The method returns the seconds in the specified date according to local time.<br>
   * Метод возвращает секунды указанной даты по местному времени.
   */
  getSecond() {
    return this.date.getSeconds();
  }
  /**
   * Returns the last day of the week.<br>
   * Возвращает последний день недели.
   */
  getMaxDay() {
    return this.getMonth() > 0 ? this.cloneDayLast().getDay() : 0;
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type, e) {
    return this.getIntl().date(
      this.date,
      t,
      e,
      this.hour24
    );
  }
  /**
   * Returns the formatted year.<br>
   * Возвращает отформатированный год.
   * @param style the representation of the month /<br>представление месяца
   */
  localeYear(t = "numeric") {
    return this.locale("year", { year: t });
  }
  /**
   * Returns the formatted month.<br>
   * Возвращает отформатированный месяц.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMonth(t = "long") {
    return this.locale("month", { month: t });
  }
  /**
   * Returns the formatted day.<br>
   * Возвращает отформатированный день.
   * @param style the representation of the month /<br>представление месяца
   */
  localeDay(t = "numeric") {
    return this.locale("day", { day: t });
  }
  /**
   * Returns the formatted hour.<br>
   * Возвращает отформатированный час.
   * @param style the representation of the month /<br>представление месяца
   */
  localeHour(t = "numeric") {
    return this.locale("hour", { hour: t });
  }
  /**
   * Returns the formatted minute.<br>
   * Возвращает отформатированную минуту.
   * @param style the representation of the month /<br>представление месяца
   */
  localeMinute(t = "numeric") {
    return this.locale("minute", { minute: t });
  }
  /**
   * Returns the formatted second.<br>
   * Возвращает отформатированную секунду.
   * @param style the representation of the month /<br>представление месяца
   */
  localeSecond(t = "numeric") {
    return this.locale("second", { second: t });
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    const e = new it(this.date, this.type, "en-GB"), r = [];
    let s;
    return e.setHour24(!0), this.type === "hour-minute" ? s = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (r.push(e.localeYear()), r.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && r.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (s = e.locale("time"))), `${r.join("-")}${s ? `T${s}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = B(t), this.update(), this;
  }
  /**
   * Change the type of data output.<br>
   * Изменить тип вывода данных.
   * @param value type of output /<br>тип вывод
   */
  setType(t) {
    return this.type = t, this.update(), this;
  }
  /**
   * Whether to use 12-hour time.<br>
   * Использовать ли 12-часовой формат времени.
   * @param value If true, output the 12-hour time format /<br>
   * если true, выводить 12-часовой формат времени
   */
  setHour24(t) {
    return this.hour24 = t, this.update(), this;
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(t) {
    return this.code = t, this;
  }
  /**
   * The function is called when the data is updated.<br>
   * Функция вызывается при обновлении данных.
   * @param watch the function calls /<br>функция вызывает
   */
  setWatch(t) {
    return this.watch = t, this;
  }
  /**
   * The method sets the full year for a specified date according to local time.<br>
   * Метод устанавливает полный год указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setYear(t) {
    return this.date.setFullYear(t), this.update(), this;
  }
  /**
   * The method sets the month for a specified date according to the currently set year.<br>
   * Метод устанавливает месяц указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setMonth(t) {
    return this.date.setMonth(t - 1), this.update(), this;
  }
  /**
   * The method changes the day of the month of a given Date instance, based on local time.<br>
   * Метод устанавливает день месяца указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setDay(t) {
    return this.date.setDate(t), this.update(), this;
  }
  /**
   * The method sets the hours for a specified date according to local time.<br>
   * Метод устанавливает часы указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setHour(t) {
    return this.date.setHours(t), this.update(), this;
  }
  /**
   * The method sets the minutes for a specified date according to local time
   *
   * Метод устанавливает минуты указанной даты по местному времени
   * @param value value / значения
   */
  setMinute(t) {
    return this.date.setMinutes(t), this.update(), this;
  }
  /**
   * The method sets the seconds for a specified date according to local time.<br>
   * Метод устанавливает секунды указанной даты по местному времени.
   * @param value value /<br>значения
   */
  setSecond(t) {
    return this.date.setSeconds(t), this.update(), this;
  }
  /**
   * Shift the date by a given value in years.<br>
   * Сдвинуть дату на заданное значение в годах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByYear(t) {
    return this.setYear(this.date.getFullYear() + t), this;
  }
  /**
   * Shift the date by a given value in months.<br>
   * Сдвинуть дату на заданное значение в месяцах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMonth(t) {
    return this.setMonth(this.date.getMonth() + 1 + t), this;
  }
  /**
   * Shift the date by a given value in days.<br>
   * Сдвинуть дату на заданное значение в днях.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByDay(t) {
    return this.setDay(this.date.getDate() + t), this;
  }
  /**
   * Shift the date by a given value in hours.<br>
   * Сдвинуть дату на заданное значение в часах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByHour(t) {
    return this.setHour(this.date.getHours() + t), this;
  }
  /**
   * Shift the date by a given value in minutes.<br>
   * Сдвинуть дату на заданное значение в минутах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveByMinute(t) {
    return this.setMinute(this.date.getMinutes() + t), this;
  }
  /**
   * Shift the date by a given value in seconds.<br>
   * Сдвинуть дату на заданное значение в секундах.
   * @param value values for moving /<br>значения для перемещения
   */
  moveBySecond(t) {
    return this.setSecond(this.date.getSeconds() + t), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthFirst() {
    return this.setMonth(1), this;
  }
  /**
   * Translate to the first month.<br>
   * Переводить на первый месяц.
   */
  moveMonthLast() {
    return this.setMonth(12), this;
  }
  /**
   * Translate to the first day of the next month.<br>
   * Переводить на первый день следующего месяца.
   */
  moveMonthNext() {
    return this.setDay(1).moveByMonth(1), this;
  }
  /**
   * Translate to the first day of the previous month.<br>
   * Переводить на первый день предыдущего месяца.
   */
  moveMonthPrevious() {
    return this.setDay(1).moveByMonth(-1), this;
  }
  /**
   * Translate to the first day of the week.<br>
   * Переводить на первый день недели.
   */
  moveWeekdayFirst() {
    const t = this.date.getDay(), e = this.getFirstDayCode();
    return this.moveByDay(
      (e === 6 ? -1 : e) - t
    ), this;
  }
  /**
   * Translate to the last day of the week.<br>
   * Переводить на последний день недели.
   */
  moveWeekdayLast() {
    return this.moveWeekdayFirst().moveByDay(6), this;
  }
  /**
   * Translate to the first day of the first week of the month.<br>
   * Переводить на первый день первой недели месяца.
   */
  moveWeekdayFirstByMonth() {
    return this.moveDayFirst().moveWeekdayFirst(), this;
  }
  /**
   * Translate to the first day of the first full week of the following month.<br>
   * Переводить на первый день первой полной недели следующего месяца.
   */
  moveWeekdayLastByMonth() {
    return this.moveDayLast().moveWeekdayLast(), this;
  }
  /**
   * Translate to the next week.<br>
   * Переводить на следующую неделю.
   */
  moveWeekdayNext() {
    return this.moveWeekdayFirst().moveByDay(7), this;
  }
  /**
   * Translate to the previous week.<br>
   * Переводить на предыдущую неделю.
   */
  moveWeekdayPrevious() {
    return this.moveWeekdayFirst().moveByDay(-7), this;
  }
  /**
   * Translate to the first day of the month.<br>
   * Переводить на первый день месяца.
   */
  moveDayFirst() {
    return this.setDay(1), this;
  }
  /**
   * Translate to the last day of the month.<br>
   * Переводить на последний день месяца.
   */
  moveDayLast() {
    return this.setDay(1).moveByMonth(1).moveByDay(-1), this;
  }
  /**
   * Translate to the next day.<br>
   * Переводить на следующий день.
   */
  moveDayNext() {
    return this.moveByDay(1), this;
  }
  /**
   * Translate to the previous day.<br>
   * Переводить на предыдущий день.
   */
  moveDayPrevious() {
    return this.moveByDay(-1), this;
  }
  /**
   * Clone the Date object.<br>
   * Клонировать объект Date.
   */
  clone() {
    return new Date(this.date);
  }
  /**
   * Clone the GeoDate object.<br>
   * Клонировать объект GeoDate.
   */
  cloneClass() {
    return new this.constructor(
      this.clone(),
      this.type,
      this.code
    );
  }
  /**
   * Clone the GeoDate object and set the month to January.<br>
   * Клонировать объект GeoDate и установить месяц на январь.
   */
  cloneMonthFirst() {
    return this.cloneClass().moveMonthFirst();
  }
  /**
   * Clone the GeoDate object and move the month to the end of the year.<br>
   * Клонировать объект GeoDate и перевести месяц на конец года.
   */
  cloneMonthLast() {
    return this.cloneClass().moveMonthLast();
  }
  /**
   * Clone the GeoDate object and transfer it one month ahead.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц вперед.
   */
  cloneMonthNext() {
    return this.cloneClass().moveMonthNext();
  }
  /**
   * Clone the GeoDate object and transfer it one month back.<br>
   * Клонировать объект GeoDate и перевести на 1 месяц назад.
   */
  cloneMonthPrevious() {
    return this.cloneClass().moveMonthPrevious();
  }
  /**
   * Returns the first day of the week according to the current date.<br>
   * Возвращает первый день недели по текущей дате.
   */
  cloneWeekdayFirst() {
    return this.cloneClass().moveWeekdayFirst();
  }
  /**
   * Returns the last day of the week according to the current date.<br>
   * Возвращает последний день недели по текущей дате.
   */
  cloneWeekdayLast() {
    return this.cloneClass().moveWeekdayLast();
  }
  /**
   * Returns the first day of the week according to the current month.<br>
   * Возвращает первый день недели по текущему месяцу.
   */
  cloneWeekdayFirstByMonth() {
    return this.cloneClass().moveWeekdayFirstByMonth();
  }
  /**
   * Returns the last day of the week according to the current month.<br>
   * Возвращает последний день недели по текущему месяцу.
   */
  cloneWeekdayLastByMonth() {
    return this.cloneClass().moveWeekdayLastByMonth();
  }
  /**
   * Returns the next week according to the current date.<br>
   * Возвращает следующую неделю по текущей дате.
   */
  cloneWeekdayNext() {
    return this.cloneClass().moveWeekdayNext();
  }
  /**
   * Returns the previous week according to the current date.<br>
   * Возвращает предыдущую неделю по текущей дате.
   */
  cloneWeekdayPrevious() {
    return this.cloneClass().moveWeekdayPrevious();
  }
  /**
   * Clone the GeoDate object and move the day to the beginning of the month.<br>
   * Клонировать объект GeoDate и перевести день на начало месяца.
   */
  cloneDayFirst() {
    return this.cloneClass().moveDayFirst();
  }
  /**
   * Clone the GeoDate object and move the day to the end of the month.<br>
   * Клонировать объект GeoDate и перевести день на конец месяца.
   */
  cloneDayLast() {
    return this.cloneClass().moveDayLast();
  }
  /**
   * Clone the GeoDate object and move by 1 day.<br>
   * Клонировать объект GeoDate и перевести на 1 день.
   */
  cloneDayNext() {
    return this.cloneClass().moveDayNext();
  }
  /**
   * Clone the GeoDate object and go back by 1 day.<br>
   * Клонировать объект GeoDate и вернуться на 1 день.
   */
  cloneDayPrevious() {
    return this.cloneClass().moveDayPrevious();
  }
  /**
   * Updating all values.<br>
   * Обновление всех значений.
   */
  update() {
    var t;
    return (t = this.watch) == null || t.call(
      this,
      this.date,
      this.type,
      this.hour24
    ), this;
  }
}
const M = class M {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(t, e) {
    return !(t in this.hash) && e && this.set(t, e), this.hash[t];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(t, e) {
    var s;
    const r = tt(e);
    r !== ((s = this.hash) == null ? void 0 : s[t]) && (this.hash[t] = r, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(t, e) {
    t in this.watch ? this.watch[t].push(e) : this.watch = { [t]: [e] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...e) => (t[e[1]] = X(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = p(
      this.hash,
      (e, r) => `${r}=${encodeURIComponent(String(e))}`
    );
    t.sort(), history.replaceState(null, "", `#${t.join(";")}`), requestAnimationFrame(() => {
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
    p(this.watch, (e, r) => {
      var s;
      ((s = this.hash) == null ? void 0 : s[r]) !== (t == null ? void 0 : t[r]) && e.forEach((n) => n(t[r]));
    });
  }
};
h(M, "hash", {}), h(M, "watch", {}), h(M, "block", !1), K() && (M.reload(), addEventListener("hashchange", () => M.reload()));
let P = M;
var D = /* @__PURE__ */ ((i) => (i.new = "new", i.init = "init", i.end = "end", i))(D || {});
const $t = "d-mutation", Si = et(J("DESIGNS_MAIN", "design")), Oi = et(J("DESIGNS_GLOBAL", "ui")), L = "__UI_PROJECT";
class w {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return Oi;
  }
  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit() {
    return D.init;
  }
  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd() {
    return D.end;
  }
  /**
   * Returns the names of attributes indicating the design name.<br>
   * Возвращает названия атрибутов, обозначающих название дизайна.
   */
  static getAttributeUi() {
    return `data-${this.getKeyUi()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент находится в обработке.
   */
  static getClassInit() {
    return `${$t}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${$t}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, e = D.new) {
    const r = [];
    if ("querySelector" in t) {
      const s = this.getSelectorByStatus(e);
      t.querySelector(s) && t.querySelectorAll(s).forEach((n) => r.push(n));
    }
    return r;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var e, r;
    return !!((e = t == null ? void 0 : t.closest) != null && e.call(t, this.getSelectorInit()) || !((r = t == null ? void 0 : t.closest) != null && r.call(t, "body")));
  }
  /**
   * Returns the select for a new element.<br>
   * Возвращает селект для нового элемента.
   */
  static getSelectorNew() {
    return `*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`;
  }
  /**
   * Returns the select for an element in processing.<br>
   * Возвращает селект для элемента в обработке.
   */
  static getSelectorInit() {
    return `*[${this.getAttributeUi()}].${this.getClassInit()}`;
  }
  /**
   * Returns the select for an element that has already been processed.<br>
   * Возвращает селект для элемента, который уже обработан.
   */
  static getSelectorEnd() {
    return `*[${this.getAttributeUi()}].${this.getClassEnd()}`;
  }
  /**
   * Returns the select for searching elements by their status.<br>
   * Возвращает селект для поиска элементов по их статусу.
   * @param status status name /<br>название статуса
   */
  static getSelectorByStatus(t) {
    switch (t) {
      case D.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case D.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
class _ {
  /**
   * Checks if a function is in the list by its name.<br>
   * Проверяет, есть ли функция в списке по ее имени.
   * @param name function name /<br>название функции
   */
  static isFunction(t) {
    return t in this.functions;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли класс в списке по его имени.
   * @param name class name /<br>название класса
   */
  static isClass(t) {
    return t in this.classes;
  }
  /**
   * Checks if a class is in the list by its name.<br>
   * Проверяет, есть ли компонент в списке по его имени.
   * @param name component name /<br>название компонента
   */
  static isComponent(t) {
    return t in this.components;
  }
  /**
   * Returns a list of connected components.<br>
   * Возвращает список подключенных компонентов.
   */
  static getComponentList() {
    return this.components;
  }
  /**
   * Returns a list of global projects.<br>
   * Возвращает список глобальных проектов.
   */
  static getComponentGlobal() {
    return L in window ? window[L] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var e;
    if (L in window)
      return ((e = window[L]) == null ? void 0 : e[t]) ?? void 0;
  }
  /**
   * Returns connected Vue components by their name.<br>
   * Возвращает подключенные компоненты Vue по их имени.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentVue(t) {
    if (t in this.components)
      return this.components[t];
  }
  /**
   * Returns an instance of the element.<br>
   * Возвращает экземпляр элемента.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentItem(t) {
    if (t in this.compItems)
      return this.compItems[t].item;
  }
  /**
   * Adds a new function.<br>
   * Добавляет новую функцию.
   * @param name function name /<br>название функции
   * @param item new function /<br>новая функция
   */
  static addFunction(t, e) {
    this.isFunction(t) || (this.functions[t] = e);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, e) {
    this.isClass(t) || (this.classes[t] = e);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, e) {
    this.isComponent(t) || (this.components[t] = e);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    p(t, (e, r) => {
      this.addFunction(r, e);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    p(t, (e, r) => {
      this.addClass(r, e);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    p(t, (e, r) => {
      this.addComponent(r, e);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, e, r) {
    if (this.compItems[t] = {
      item: e,
      callback: r
    }, t in this.compCaching) {
      const s = this.compCaching[t];
      return delete this.compCaching[t], s;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, e) {
    t in this.compItems ? this.compItems[t].callback(e) : this.compCaching[t] = e;
  }
  /**
   * Removal of the component from the list.<br>
   * Удаление компонента из списка.
   * @param name component identifier /<br>идентификатор компонента
   */
  static removeComponent(t) {
    t in this.compItems && delete this.compItems[t];
  }
}
h(_, "functions", {}), h(_, "classes", {}), h(_, "components", {}), h(_, "compItems", {}), h(_, "compCaching", {});
class ne {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    h(this, "id");
    h(this, "componentName");
    h(this, "static");
    h(this, "slots", {});
    h(this, "props", {});
    h(this, "callback");
    var e;
    this.element = t, this.id = Ut(t), this.componentName = ((e = t.dataset) == null ? void 0 : e[w.getKeyUi()]) ?? "component", this.static = D.new, this.slots = this.initSlots(), this.setStatus(D.init), this.element.classList.add(this.getClassMain());
  }
  /**
   * Checks if the element belongs to the current object.<br>
   * Проверяет, принадлежит ли элемент текущему объекту.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return this.element === t;
  }
  /**
   * Checks if the current element is a link.<br>
   * Проверяет, является ли текущий элемент ссылкой.
   */
  isLink() {
    return !!this.componentName.match("/");
  }
  /**
   * Returns the identifier.<br>
   * Возвращает идентификатор.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier.<br>
   * Возвращает названия компонента.
   */
  getComponentName() {
    if (this.isLink())
      return this.componentName;
    const t = Z(this.componentName);
    return _.isComponent(t) ? t : Z(`${Si}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return et(this.getComponentName()).replace(/-.*?$/, "");
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return `${this.getDesign()}-system`;
  }
  /**
   * Returns the element.<br>
   * Возвращает элемент.
   */
  getElement() {
    return this.element;
  }
  /**
   * Returns the status.<br>
   * Возвращает статус.
   */
  getStatus() {
    return this.static;
  }
  /**
   * Returns property data.<br>
   * Возвращает данные свойства.
   */
  getProps() {
    return {
      ...this.getDataset(),
      ...this.props
    };
  }
  /**
   * Returns data about the slot.<br>
   * Возвращает данные о слоте.
   */
  getSlots() {
    return this.slots;
  }
  /**
   * Changes the status of the item.<br>
   * Изменяет статус элемента.
   * @param status status values /<br>значения статуса
   */
  setStatus(t) {
    switch (this.removeClasses(), this.static = t, this.static) {
      case D.init:
        this.element.classList.add(w.getClassInit());
        break;
      case D.end:
        this.element.classList.add(w.getClassEnd());
        break;
    }
    return this;
  }
  /**
   * Registers a component for data update.<br>
   * Регистрирует компонент для обновления данных.
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  registration(t, e) {
    const r = _.registrationComponent(
      this.getId(),
      t,
      (s) => {
        N(s) && this.setProps(s).update();
      }
    );
    return r && this.setProps(r), this.callback = e, this;
  }
  /**
   * Called upon data update.<br>
   * Вызывается при обновлении данных.
   */
  update() {
    var t;
    return (t = this.callback) == null || t.call(
      this,
      this.getProps()
    ), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  disconnect() {
    return _.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return p(this.element.dataset, (e, r) => {
      r !== w.getKeyUi() && (t[r] = X(e));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return N(t) && p(t, (e, r) => {
      r === "slots" ? this.setSlots(e) : this.props[r] = e;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return N(t) && p(t, (e, r) => {
      this.slots[r] = this.initChildrenList(qt(e));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, e = [];
    for (const r of this.element.children) {
      const s = r.getAttribute("data-slot");
      if (s)
        t[s] = this.initChildrenList(r.childNodes);
      else {
        const n = this.initChildren(r);
        n && ("default" in t ? t.default.push(n) : t.default = [n]);
      }
      e.push(r);
    }
    for (const r of e)
      this.element.removeChild(r);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const e = [];
    for (const r of t) {
      const s = this.initChildren(r);
      s && e.push(s);
    }
    return e;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var r, s;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...Jt(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const e = (s = (r = t == null ? void 0 : t.textContent) == null ? void 0 : r.trim) == null ? void 0 : s.call(r);
    if (N(e))
      return e;
    if (Ct(t) && N(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove(w.getClassInit()), this.element.classList.remove(w.getClassEnd()), this;
  }
}
class oe {
  constructor() {
    h(this, "items", []);
  }
  /**
   * Checks if the element is in the list.<br>
   * Проверяет, есть ли элемент в списке.
   * @param element tracking element /<br>элемент слежения
   */
  is(t) {
    return !!this.getItem(t);
  }
  /**
   * Checks if the element is a component.<br>
   * Проверяет, является ли элемент компонентом.
   * @param element tracking element /<br>элемент слежения
   */
  isComponent(t) {
    var e;
    return !!((e = t.dataset) != null && e[w.getKeyUi()]);
  }
  /**
   * Retrieving a list of all data.<br>
   * Получение списка всех данных.
   */
  get() {
    return this.items;
  }
  /**
   * Returns an object with information about the element.<br>
   * Возвращает объект с информацией об элементе.
   * @param element tracking element /<br>элемент слежения
   */
  getItem(t) {
    var e;
    return (e = this.items) == null ? void 0 : e[this.find(t)];
  }
  /**
   * Adding an element for processing.<br>
   * Добавление элемента для обработки.
   * @param element tracking element /<br>элемент слежения
   */
  add(t) {
    return this.isComponent(t) && !this.is(t) && !w.closestInit(t) && this.items.push(new ne(t)), this;
  }
  /**
   * Removes an element from the list.<br>
   * Удаляет элемент из списка.
   * @param element tracking element /<br>элемент слежения
   */
  remove(t) {
    const e = this.find(t);
    return e >= 0 && (this.items[e].disconnect(), this.items.splice(e, 1)), this;
  }
  /**
   * Searching for an element in the list.<br>
   * Поиск элемента в списке.
   * @param element tracking element /<br>элемент слежения
   */
  find(t) {
    return this.items.findIndex((e) => e.is(t));
  }
}
class ae {
  /**
   * Constructor
   * @param addCallback function for adding an element /<br>функция для добавления элемента
   * @param removeCallback function for removing an element /<br>функция для удаления элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    h(this, "mutation");
    this.addCallback = t, this.removeCallback = e;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.mutation || (this.mutation = new MutationObserver((t) => this.callback(t)), this.mutation.observe(document.body, {
      attributes: !1,
      attributeOldValue: !1,
      characterData: !1,
      characterDataOldValue: !1,
      childList: !0,
      subtree: !0
    })), this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((e) => {
      e.removedNodes.forEach((r) => this.removeCallback(r)), e.addedNodes.forEach((r) => this.addCallback(r));
    });
  }
}
class ce {
  /**
   * Constructor
   * @param items object for working with elements /<br>объект для работы с элементами
   * @param update function for updating data /<br>функция обновления данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, e) {
    h(this, "mutation");
    this.items = t, this.update = e;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    this.mutation && this.end();
    const t = this.items.get();
    if (t.length > 0) {
      this.mutation = new MutationObserver((e) => this.callback(e));
      for (const e of t)
        this.mutation.observe(e.getElement(), {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !1,
          characterDataOldValue: !1,
          childList: !1,
          subtree: !1
        });
    }
    return this;
  }
  /**
   * Stop observing the DOM changes.<br>
   * Остановка наблюдения за изменениями DOM.
   */
  end() {
    return this.mutation && (this.mutation.disconnect(), this.mutation = void 0), this;
  }
  /**
   * A method for tracking changes.<br>
   * Метод для слежения за изменениями.
   * @param record an array of MutationRecord objects /<br>массив объектов MutationRecord
   */
  callback(t) {
    t.forEach((e) => {
      e.type === "attributes" && this.update(e.target);
    });
  }
}
class Ni {
  /**
   * Constructor
   */
  constructor(t) {
    h(this, "mutationGlobal");
    h(this, "mutationItems");
    h(this, "items", new oe());
    this.callback = t, this.mutationGlobal = new ae(
      (e) => this.add(e),
      (e) => this.remove(e)
    ), this.mutationItems = new ce(
      this.items,
      (e) => {
        var r;
        return (r = this.items.getItem(e)) == null ? void 0 : r.update();
      }
    );
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    return this.addList(), this.mutationGlobal.start(), this.mutationItems.start(), this;
  }
  /**
   * Termination of observation of changes.<br>
   * Прекращения наблюдения за изменения.
   */
  stop() {
    return this.mutationGlobal.end(), this;
  }
  /**
   * Adding an element and its child elements.<br>
   * Добавление элемента и его дочерних элементы.
   * @param element element for deletion /<br>элемент для удаления
   */
  add(t) {
    this.items.add(t), this.addList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Adding child elements.<br>
   * Добавления дочерних элементы.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  addList(t = document.body) {
    w.find(t).forEach((e) => this.items.add(e));
  }
  /**
   * Removing an element and its child elements from the list.<br>
   * Удаление элемента и его дочерних элементов из списка.
   * @param element element for deletion /<br>элемент для удаления
   */
  remove(t) {
    this.items.remove(t), this.removeList(t), this.callback(), this.mutationItems.start();
  }
  /**
   * Removing child elements.<br>
   * Удаление дочерних элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   */
  removeList(t = document.body) {
    w.find(t, D.init).forEach((e) => this.items.remove(e));
  }
}
function Ai() {
  return ue().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ue() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ii = typeof Proxy == "function", Mi = "devtools-plugin:setup", Li = "plugin:settings:set";
let T, yt;
function ki() {
  var i;
  return T !== void 0 || (typeof window < "u" && window.performance ? (T = !0, yt = window.performance) : typeof globalThis < "u" && (!((i = globalThis.perf_hooks) === null || i === void 0) && i.performance) ? (T = !0, yt = globalThis.perf_hooks.performance) : T = !1), T;
}
function xi() {
  return ki() ? yt.now() : Date.now();
}
class $i {
  constructor(t, e) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = e;
    const r = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        r[o] = a.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let n = Object.assign({}, r);
    try {
      const o = localStorage.getItem(s), a = JSON.parse(o);
      Object.assign(n, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return n;
      },
      setSettings(o) {
        try {
          localStorage.setItem(s, JSON.stringify(o));
        } catch {
        }
        n = o;
      },
      now() {
        return xi();
      }
    }, e && e.on(Li, (o, a) => {
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
    for (const e of this.onQueue)
      this.target.on[e.method](...e.args);
    for (const e of this.targetQueue)
      e.resolve(await this.target[e.method](...e.args));
  }
}
function Ti(i, t) {
  const e = i, r = ue(), s = Ai(), n = Ii && e.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !n))
    s.emit(Mi, i, t);
  else {
    const o = n ? new $i(e, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: e,
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
var rt = "store";
function he(i) {
  return i === void 0 && (i = null), ei(i !== null ? i : rt);
}
function ji(i, t) {
  return i.filter(t)[0];
}
function bt(i, t) {
  if (t === void 0 && (t = []), i === null || typeof i != "object")
    return i;
  var e = ji(t, function(s) {
    return s.original === i;
  });
  if (e)
    return e.copy;
  var r = Array.isArray(i) ? [] : {};
  return t.push({
    original: i,
    copy: r
  }), Object.keys(i).forEach(function(s) {
    r[s] = bt(i[s], t);
  }), r;
}
function x(i, t) {
  Object.keys(i).forEach(function(e) {
    return t(i[e], e);
  });
}
function le(i) {
  return i !== null && typeof i == "object";
}
function Fi(i) {
  return i && typeof i.then == "function";
}
function S(i, t) {
  if (!i)
    throw new Error("[vuex] " + t);
}
function Vi(i, t) {
  return function() {
    return i(t);
  };
}
function de(i, t, e) {
  return t.indexOf(i) < 0 && (e && e.prepend ? t.unshift(i) : t.push(i)), function() {
    var r = t.indexOf(i);
    r > -1 && t.splice(r, 1);
  };
}
function fe(i, t) {
  i._actions = /* @__PURE__ */ Object.create(null), i._mutations = /* @__PURE__ */ Object.create(null), i._wrappedGetters = /* @__PURE__ */ Object.create(null), i._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var e = i.state;
  st(i, e, [], i._modules.root, !0), Ot(i, e, t);
}
function Ot(i, t, e) {
  var r = i._state, s = i._scope;
  i.getters = {}, i._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var n = i._wrappedGetters, o = {}, a = {}, c = ii(!0);
  c.run(function() {
    x(n, function(l, u) {
      o[u] = Vi(l, i), a[u] = d(function() {
        return o[u]();
      }), Object.defineProperty(i.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), i._state = ri({
    data: t
  }), i._scope = c, i.strict && Wi(i), r && e && i._withCommit(function() {
    r.data = null;
  }), s && s.stop();
}
function st(i, t, e, r, s) {
  var n = !e.length, o = i._modules.getNamespace(e);
  if (r.namespaced && (i._modulesNamespaceMap[o] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + o + " for the namespaced module " + e.join("/")), i._modulesNamespaceMap[o] = r), !n && !s) {
    var a = Nt(t, e.slice(0, -1)), c = e[e.length - 1];
    i._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in a && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + e.join(".") + '"'
      ), a[c] = r.state;
    });
  }
  var l = r.context = Pi(i, o, e);
  r.forEachMutation(function(u, f) {
    var g = o + f;
    Bi(i, g, u, l);
  }), r.forEachAction(function(u, f) {
    var g = u.root ? f : o + f, m = u.handler || u;
    Gi(i, g, m, l);
  }), r.forEachGetter(function(u, f) {
    var g = o + f;
    Ri(i, g, u, l);
  }), r.forEachChild(function(u, f) {
    st(i, t, e.concat(f), u, s);
  });
}
function Pi(i, t, e) {
  var r = t === "", s = {
    dispatch: r ? i.dispatch : function(n, o, a) {
      var c = q(n, o, a), l = c.payload, u = c.options, f = c.type;
      if ((!u || !u.root) && (f = t + f, process.env.NODE_ENV !== "production" && !i._actions[f])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + f);
        return;
      }
      return i.dispatch(f, l);
    },
    commit: r ? i.commit : function(n, o, a) {
      var c = q(n, o, a), l = c.payload, u = c.options, f = c.type;
      if ((!u || !u.root) && (f = t + f, process.env.NODE_ENV !== "production" && !i._mutations[f])) {
        console.error("[vuex] unknown local mutation type: " + c.type + ", global type: " + f);
        return;
      }
      i.commit(f, l, u);
    }
  };
  return Object.defineProperties(s, {
    getters: {
      get: r ? function() {
        return i.getters;
      } : function() {
        return ge(i, t);
      }
    },
    state: {
      get: function() {
        return Nt(i.state, e);
      }
    }
  }), s;
}
function ge(i, t) {
  if (!i._makeLocalGettersCache[t]) {
    var e = {}, r = t.length;
    Object.keys(i.getters).forEach(function(s) {
      if (s.slice(0, r) === t) {
        var n = s.slice(r);
        Object.defineProperty(e, n, {
          get: function() {
            return i.getters[s];
          },
          enumerable: !0
        });
      }
    }), i._makeLocalGettersCache[t] = e;
  }
  return i._makeLocalGettersCache[t];
}
function Bi(i, t, e, r) {
  var s = i._mutations[t] || (i._mutations[t] = []);
  s.push(function(o) {
    e.call(i, r.state, o);
  });
}
function Gi(i, t, e, r) {
  var s = i._actions[t] || (i._actions[t] = []);
  s.push(function(o) {
    var a = e.call(i, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: i.getters,
      rootState: i.state
    }, o);
    return Fi(a) || (a = Promise.resolve(a)), i._devtoolHook ? a.catch(function(c) {
      throw i._devtoolHook.emit("vuex:error", c), c;
    }) : a;
  });
}
function Ri(i, t, e, r) {
  if (i._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  i._wrappedGetters[t] = function(n) {
    return e(
      r.state,
      // local state
      r.getters,
      // local getters
      n.state,
      // root state
      n.getters
      // root getters
    );
  };
}
function Wi(i) {
  C(function() {
    return i._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && S(i._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Nt(i, t) {
  return t.reduce(function(e, r) {
    return e[r];
  }, i);
}
function q(i, t, e) {
  return le(i) && i.type && (e = t, t = i, i = i.type), process.env.NODE_ENV !== "production" && S(typeof i == "string", "expects string as the type, but found " + typeof i + "."), { type: i, payload: t, options: e };
}
var Ui = "vuex bindings", Tt = "vuex:mutations", lt = "vuex:actions", j = "vuex", Hi = 0;
function Ki(i, t) {
  Ti(
    {
      id: "org.vuejs.vuex",
      app: i,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Ui]
    },
    function(e) {
      e.addTimelineLayer({
        id: Tt,
        label: "Vuex Mutations",
        color: jt
      }), e.addTimelineLayer({
        id: lt,
        label: "Vuex Actions",
        color: jt
      }), e.addInspector({
        id: j,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), e.on.getInspectorTree(function(r) {
        if (r.app === i && r.inspectorId === j)
          if (r.filter) {
            var s = [];
            ye(s, t._modules.root, r.filter, ""), r.rootNodes = s;
          } else
            r.rootNodes = [
              ve(t._modules.root, "")
            ];
      }), e.on.getInspectorState(function(r) {
        if (r.app === i && r.inspectorId === j) {
          var s = r.nodeId;
          ge(t, s), r.state = qi(
            zi(t._modules, s),
            s === "root" ? t.getters : t._makeLocalGettersCache,
            s
          );
        }
      }), e.on.editInspectorState(function(r) {
        if (r.app === i && r.inspectorId === j) {
          var s = r.nodeId, n = r.path;
          s !== "root" && (n = s.split("/").filter(Boolean).concat(n)), t._withCommit(function() {
            r.set(t._state.data, n, r.state.value);
          });
        }
      }), t.subscribe(function(r, s) {
        var n = {};
        r.payload && (n.payload = r.payload), n.state = s, e.notifyComponentUpdate(), e.sendInspectorTree(j), e.sendInspectorState(j), e.addTimelineEvent({
          layerId: Tt,
          event: {
            time: Date.now(),
            title: r.type,
            data: n
          }
        });
      }), t.subscribeAction({
        before: function(r, s) {
          var n = {};
          r.payload && (n.payload = r.payload), r._id = Hi++, r._time = Date.now(), n.state = s, e.addTimelineEvent({
            layerId: lt,
            event: {
              time: r._time,
              title: r.type,
              groupId: r._id,
              subtitle: "start",
              data: n
            }
          });
        },
        after: function(r, s) {
          var n = {}, o = Date.now() - r._time;
          n.duration = {
            _custom: {
              type: "duration",
              display: o + "ms",
              tooltip: "Action duration",
              value: o
            }
          }, r.payload && (n.payload = r.payload), n.state = s, e.addTimelineEvent({
            layerId: lt,
            event: {
              time: Date.now(),
              title: r.type,
              groupId: r._id,
              subtitle: "end",
              data: n
            }
          });
        }
      });
    }
  );
}
var jt = 8702998, Yi = 6710886, Zi = 16777215, me = {
  label: "namespaced",
  textColor: Zi,
  backgroundColor: Yi
};
function pe(i) {
  return i && i !== "root" ? i.split("/").slice(-2, -1)[0] : "Root";
}
function ve(i, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: pe(t),
    tags: i.namespaced ? [me] : [],
    children: Object.keys(i._children).map(
      function(e) {
        return ve(
          i._children[e],
          t + e + "/"
        );
      }
    )
  };
}
function ye(i, t, e, r) {
  r.includes(e) && i.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [me] : []
  }), Object.keys(t._children).forEach(function(s) {
    ye(i, t._children[s], e, r + s + "/");
  });
}
function qi(i, t, e) {
  t = e === "root" ? t : t[e];
  var r = Object.keys(t), s = {
    state: Object.keys(i.state).map(function(o) {
      return {
        key: o,
        editable: !0,
        value: i.state[o]
      };
    })
  };
  if (r.length) {
    var n = Qi(t);
    s.getters = Object.keys(n).map(function(o) {
      return {
        key: o.endsWith("/") ? pe(o) : o,
        editable: !1,
        value: _t(function() {
          return n[o];
        })
      };
    });
  }
  return s;
}
function Qi(i) {
  var t = {};
  return Object.keys(i).forEach(function(e) {
    var r = e.split("/");
    if (r.length > 1) {
      var s = t, n = r.pop();
      r.forEach(function(o) {
        s[o] || (s[o] = {
          _custom: {
            value: {},
            display: o,
            tooltip: "Module",
            abstract: !0
          }
        }), s = s[o]._custom.value;
      }), s[n] = _t(function() {
        return i[e];
      });
    } else
      t[e] = _t(function() {
        return i[e];
      });
  }), t;
}
function zi(i, t) {
  var e = t.split("/").filter(function(r) {
    return r;
  });
  return e.reduce(
    function(r, s, n) {
      var o = r[s];
      if (!o)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return n === e.length - 1 ? o : o._children;
    },
    t === "root" ? i : i.root._children
  );
}
function _t(i) {
  try {
    return i();
  } catch (t) {
    return t;
  }
}
var O = function(t, e) {
  this.runtime = e, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var r = t.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, be = { namespaced: { configurable: !0 } };
be.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
O.prototype.addChild = function(t, e) {
  this._children[t] = e;
};
O.prototype.removeChild = function(t) {
  delete this._children[t];
};
O.prototype.getChild = function(t) {
  return this._children[t];
};
O.prototype.hasChild = function(t) {
  return t in this._children;
};
O.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
O.prototype.forEachChild = function(t) {
  x(this._children, t);
};
O.prototype.forEachGetter = function(t) {
  this._rawModule.getters && x(this._rawModule.getters, t);
};
O.prototype.forEachAction = function(t) {
  this._rawModule.actions && x(this._rawModule.actions, t);
};
O.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && x(this._rawModule.mutations, t);
};
Object.defineProperties(O.prototype, be);
var $ = function(t) {
  this.register([], t, !1);
};
$.prototype.get = function(t) {
  return t.reduce(function(e, r) {
    return e.getChild(r);
  }, this.root);
};
$.prototype.getNamespace = function(t) {
  var e = this.root;
  return t.reduce(function(r, s) {
    return e = e.getChild(s), r + (e.namespaced ? s + "/" : "");
  }, "");
};
$.prototype.update = function(t) {
  _e([], this.root, t);
};
$.prototype.register = function(t, e, r) {
  var s = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && Ce(t, e);
  var n = new O(e, r);
  if (t.length === 0)
    this.root = n;
  else {
    var o = this.get(t.slice(0, -1));
    o.addChild(t[t.length - 1], n);
  }
  e.modules && x(e.modules, function(a, c) {
    s.register(t.concat(c), a, r);
  });
};
$.prototype.unregister = function(t) {
  var e = this.get(t.slice(0, -1)), r = t[t.length - 1], s = e.getChild(r);
  if (!s) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  s.runtime && e.removeChild(r);
};
$.prototype.isRegistered = function(t) {
  var e = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return e ? e.hasChild(r) : !1;
};
function _e(i, t, e) {
  if (process.env.NODE_ENV !== "production" && Ce(i, e), t.update(e), e.modules)
    for (var r in e.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      _e(
        i.concat(r),
        t.getChild(r),
        e.modules[r]
      );
    }
}
var Ft = {
  assert: function(i) {
    return typeof i == "function";
  },
  expected: "function"
}, Ji = {
  assert: function(i) {
    return typeof i == "function" || typeof i == "object" && typeof i.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Vt = {
  getters: Ft,
  mutations: Ft,
  actions: Ji
};
function Ce(i, t) {
  Object.keys(Vt).forEach(function(e) {
    if (t[e]) {
      var r = Vt[e];
      x(t[e], function(s, n) {
        S(
          r.assert(s),
          Xi(i, e, n, s, r.expected)
        );
      });
    }
  });
}
function Xi(i, t, e, r, s) {
  var n = t + " should be " + s + ' but "' + t + "." + e + '"';
  return i.length > 0 && (n += ' in module "' + i.join(".") + '"'), n += " is " + JSON.stringify(r) + ".", n;
}
function At(i) {
  return new y(i);
}
var y = function i(t) {
  var e = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (S(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), S(this instanceof i, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var s = t.strict;
  s === void 0 && (s = !1);
  var n = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new $(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = n;
  var o = this, a = this, c = a.dispatch, l = a.commit;
  this.dispatch = function(g, m) {
    return c.call(o, g, m);
  }, this.commit = function(g, m, I) {
    return l.call(o, g, m, I);
  }, this.strict = s;
  var u = this._modules.root.state;
  st(this, u, [], this._modules.root), Ot(this, u), r.forEach(function(f) {
    return f(e);
  });
}, It = { state: { configurable: !0 } };
y.prototype.install = function(t, e) {
  t.provide(e || rt, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && Ki(t, this);
};
It.state.get = function() {
  return this._state.data;
};
It.state.set = function(i) {
  process.env.NODE_ENV !== "production" && S(!1, "use store.replaceState() to explicit replace store state.");
};
y.prototype.commit = function(t, e, r) {
  var s = this, n = q(t, e, r), o = n.type, a = n.payload, c = n.options, l = { type: o, payload: a }, u = this._mutations[o];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + o);
    return;
  }
  this._withCommit(function() {
    u.forEach(function(g) {
      g(a);
    });
  }), this._subscribers.slice().forEach(function(f) {
    return f(l, s.state);
  }), process.env.NODE_ENV !== "production" && c && c.silent && console.warn(
    "[vuex] mutation type: " + o + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
y.prototype.dispatch = function(t, e) {
  var r = this, s = q(t, e), n = s.type, o = s.payload, a = { type: n, payload: o }, c = this._actions[n];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + n);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(u) {
      return u.before;
    }).forEach(function(u) {
      return u.before(a, r.state);
    });
  } catch (u) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(u));
  }
  var l = c.length > 1 ? Promise.all(c.map(function(u) {
    return u(o);
  })) : c[0](o);
  return new Promise(function(u, f) {
    l.then(function(g) {
      try {
        r._actionSubscribers.filter(function(m) {
          return m.after;
        }).forEach(function(m) {
          return m.after(a, r.state);
        });
      } catch (m) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(m));
      }
      u(g);
    }, function(g) {
      try {
        r._actionSubscribers.filter(function(m) {
          return m.error;
        }).forEach(function(m) {
          return m.error(a, r.state, g);
        });
      } catch (m) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(m));
      }
      f(g);
    });
  });
};
y.prototype.subscribe = function(t, e) {
  return de(t, this._subscribers, e);
};
y.prototype.subscribeAction = function(t, e) {
  var r = typeof t == "function" ? { before: t } : t;
  return de(r, this._actionSubscribers, e);
};
y.prototype.watch = function(t, e, r) {
  var s = this;
  return process.env.NODE_ENV !== "production" && S(typeof t == "function", "store.watch only accepts a function."), C(function() {
    return t(s.state, s.getters);
  }, e, Object.assign({}, r));
};
y.prototype.replaceState = function(t) {
  var e = this;
  this._withCommit(function() {
    e._state.data = t;
  });
};
y.prototype.registerModule = function(t, e, r) {
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (S(Array.isArray(t), "module path must be a string or an Array."), S(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, e), st(this, this.state, t, this._modules.get(t), r.preserveState), Ot(this, this.state);
};
y.prototype.unregisterModule = function(t) {
  var e = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && S(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Nt(e.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), fe(this);
};
y.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && S(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
y.prototype.hotUpdate = function(t) {
  this._modules.update(t), fe(this, !0);
};
y.prototype._withCommit = function(t) {
  var e = this._committing;
  this._committing = !0, t(), this._committing = e;
};
Object.defineProperties(y.prototype, It);
var Mt = ot(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !W(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), nt(t).forEach(function(r) {
    var s = r.key, n = r.val;
    e[s] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (i) {
        var l = at(this.$store, "mapState", i);
        if (!l)
          return;
        a = l.context.state, c = l.context.getters;
      }
      return typeof n == "function" ? n.call(this, a, c) : a[n];
    }, e[s].vuex = !0;
  }), e;
}), Lt = ot(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !W(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), nt(t).forEach(function(r) {
    var s = r.key, n = r.val;
    e[s] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.commit;
      if (i) {
        var u = at(this.$store, "mapMutations", i);
        if (!u)
          return;
        l = u.context.commit;
      }
      return typeof n == "function" ? n.apply(this, [l].concat(a)) : l.apply(this.$store, [n].concat(a));
    };
  }), e;
}), kt = ot(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !W(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), nt(t).forEach(function(r) {
    var s = r.key, n = r.val;
    n = i + n, e[s] = function() {
      if (!(i && !at(this.$store, "mapGetters", i))) {
        if (process.env.NODE_ENV !== "production" && !(n in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + n);
          return;
        }
        return this.$store.getters[n];
      }
    }, e[s].vuex = !0;
  }), e;
}), xt = ot(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !W(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), nt(t).forEach(function(r) {
    var s = r.key, n = r.val;
    e[s] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.dispatch;
      if (i) {
        var u = at(this.$store, "mapActions", i);
        if (!u)
          return;
        l = u.context.dispatch;
      }
      return typeof n == "function" ? n.apply(this, [l].concat(a)) : l.apply(this.$store, [n].concat(a));
    };
  }), e;
}), Ee = function(i) {
  return {
    mapState: Mt.bind(null, i),
    mapGetters: kt.bind(null, i),
    mapMutations: Lt.bind(null, i),
    mapActions: xt.bind(null, i)
  };
};
function nt(i) {
  return W(i) ? Array.isArray(i) ? i.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(i).map(function(t) {
    return { key: t, val: i[t] };
  }) : [];
}
function W(i) {
  return Array.isArray(i) || le(i);
}
function ot(i) {
  return function(t, e) {
    return typeof t != "string" ? (e = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), i(t, e);
  };
}
function at(i, t, e) {
  var r = i._modulesNamespaceMap[e];
  return process.env.NODE_ENV !== "production" && !r && console.error("[vuex] module namespace not found in " + t + "(): " + e), r;
}
function we(i) {
  i === void 0 && (i = {});
  var t = i.collapsed;
  t === void 0 && (t = !0);
  var e = i.filter;
  e === void 0 && (e = function(u, f, g) {
    return !0;
  });
  var r = i.transformer;
  r === void 0 && (r = function(u) {
    return u;
  });
  var s = i.mutationTransformer;
  s === void 0 && (s = function(u) {
    return u;
  });
  var n = i.actionFilter;
  n === void 0 && (n = function(u, f) {
    return !0;
  });
  var o = i.actionTransformer;
  o === void 0 && (o = function(u) {
    return u;
  });
  var a = i.logMutations;
  a === void 0 && (a = !0);
  var c = i.logActions;
  c === void 0 && (c = !0);
  var l = i.logger;
  return l === void 0 && (l = console), function(u) {
    var f = bt(u.state);
    typeof l > "u" || (a && u.subscribe(function(g, m) {
      var I = bt(m);
      if (e(g, f, I)) {
        var ct = Gt(), ut = s(g), Se = "mutation " + g.type + ct;
        Pt(l, Se, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(f)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", ut), l.log("%c next state", "color: #4CAF50; font-weight: bold", r(I)), Bt(l);
      }
      f = I;
    }), c && u.subscribeAction(function(g, m) {
      if (n(g, m)) {
        var I = Gt(), ct = o(g), ut = "action " + g.type + I;
        Pt(l, ut, t), l.log("%c action", "color: #03A9F4; font-weight: bold", ct), Bt(l);
      }
    }));
  };
}
function Pt(i, t, e) {
  var r = e ? i.groupCollapsed : i.group;
  try {
    r.call(i, t);
  } catch {
    i.log(t);
  }
}
function Bt(i) {
  try {
    i.groupEnd();
  } catch {
    i.log("—— log end ——");
  }
}
function Gt() {
  var i = /* @__PURE__ */ new Date();
  return " @ " + H(i.getHours(), 2) + ":" + H(i.getMinutes(), 2) + ":" + H(i.getSeconds(), 2) + "." + H(i.getMilliseconds(), 3);
}
function tr(i, t) {
  return new Array(t + 1).join(i);
}
function H(i, t) {
  return tr("0", t - i.toString().length) + i;
}
var er = {
  version: "4.1.0",
  Store: y,
  storeKey: rt,
  createStore: At,
  useStore: he,
  mapState: Mt,
  mapMutations: Lt,
  mapGetters: kt,
  mapActions: xt,
  createNamespacedHelpers: Ee,
  createLogger: we
};
const Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: y,
  createLogger: we,
  createNamespacedHelpers: Ee,
  createStore: At,
  default: er,
  mapActions: xt,
  mapGetters: kt,
  mapMutations: Lt,
  mapState: Mt,
  storeKey: rt,
  useStore: he
}, Symbol.toStringTag, { value: "Module" }));
class ir {
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
  static addComponent(t, e, r, s, n, o) {
    const a = window, c = {
      item: e,
      router: r,
      store: s,
      init: n,
      translate: o
    };
    L in a ? a[L][t] = c : a[L] = {
      [t]: c
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const e = _.getComponentGlobalItem(t);
    e && _.addComponent(
      Z(t.replace(/\//g, "-")),
      e.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const e = _.getComponentGlobalItem(t);
    e && (N(e == null ? void 0 : e.translate) ? Y.add(e.translate).then(() => this.createAppItem(t, e)) : this.createAppItem(t, e));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, e) {
    const r = si(e.item);
    e != null && e.router && r.use(this.createRouter(e.router)), e != null && e.store && r.use(this.createStore(e.store)), e != null && e.init && e.init(r), p(_.getComponentList(), (s, n) => r.component(n, s)), r.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return ci(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return At(t);
  }
}
class rr {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", r = k.getLocation()) {
    h(this, "item");
    h(this, "type");
    h(this, "code");
    h(this, "date");
    h(this, "datetime");
    h(this, "year", d(() => this.date.value && this.datetime.getYear()));
    h(this, "month", d(() => this.date.value && this.datetime.getMonth()));
    h(this, "day", d(() => this.date.value && this.datetime.getDay()));
    h(this, "hour", d(() => this.date.value && this.datetime.getHour()));
    h(this, "minute", d(() => this.date.value && this.datetime.getMinute()));
    h(this, "second", d(() => this.date.value && this.datetime.getSecond()));
    this.item = A(t), this.type = A(e), this.code = A(r), this.date = wt(B(this.item.value)), this.datetime = new it(
      this.date.value,
      this.type.value,
      this.code.value
    ), C(this.item, (s) => {
      this.date.value = B(s);
    }), C(this.type, (s) => this.datetime.setType(s)), C(this.code, (s) => this.datetime.setCode(s)), C(this.date, (s) => this.datetime.setDate(s)), this.datetime.setWatch(() => ni(this.date));
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
    return d(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return d(() => this.date.value && this.datetime.getFirstDayCode());
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
    return d(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, e) {
    return d(() => this.date.value && this.datetime.locale(t, e));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return d(() => this.date.value && this.datetime.standard(t));
  }
}
class sr extends Ht {
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
  constructor(t, e, r = ["click"], s, n, o) {
    const a = A(t), c = A(e);
    super(
      a.value,
      r,
      s,
      n,
      o
    ), c.value && this.setElementControl(c.value), C(a, (l) => this.setElement(l)), C(c, (l) => this.setElementControl(l));
  }
}
class nr {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = k.getLocation()) {
    h(this, "code");
    h(this, "flag");
    this.code = A(t), this.flag = new Kt(this.code.value), C(this.code, (e) => this.flag.setCode(e));
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
    return d(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return d(() => {
      var e;
      return (e = this.flag.get(t)) == null ? void 0 : e.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return d(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return d(() => this.flag.getNational(t));
  }
}
const E = class E {
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
    k.set(t, !0), this.item.value = k.getItem();
  }
};
h(E, "item", R(k.get())), h(E, "country", d(() => E.item.value.country)), h(E, "language", d(() => E.item.value.language)), h(E, "standard", d(() => E.item.value.standard)), h(E, "firstDay", d(() => E.item.value.firstDay));
let G = E;
class or {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    h(this, "location");
    h(this, "intl");
    this.location = A(t), this.intl = d(() => new Et(this.location.value ?? G.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    return d(() => this.intl.value.display(v(t), e));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, e) {
    return d(() => this.intl.value.languageName(v(t), e));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, e) {
    return d(() => this.intl.value.countryName(v(t), e));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    return d(() => this.intl.value.number(v(t), e));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return d(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, e, r = !1) {
    return d(() => this.intl.value.currency(v(t), e, r));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, e) {
    return d(() => this.intl.value.unit(v(t), e));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return d(() => this.intl.value.percent(v(t), e));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return d(() => this.intl.value.percentBy100(v(t), e));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, e, r, s) {
    return d(() => this.intl.value.date(v(t), e, r, s));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, e, r) {
    return d(() => this.intl.value.relative(v(t), e, r));
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
  relativeLimit(t, e, r, s, n, o, a) {
    return d(() => this.intl.value.relativeLimit(
      v(t),
      e,
      r,
      s,
      n,
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
  month(t, e) {
    return d(() => this.intl.value.month(v(t), e));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return d(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, e) {
    return d(() => this.intl.value.weekday(v(t), e));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return d(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return d(() => this.intl.value.time(v(t)));
  }
}
function ar(i, t, e) {
  if (i in dt)
    return dt[i];
  const r = new se(i), s = wt(r.get(t, e));
  return C(s, (n) => {
    r.set(n, e);
  }), dt[i] = s, s;
}
const dt = {};
function cr(i, t) {
  if (i in ft)
    return ft[i];
  const e = R(P.get(i, t));
  return C(e, (r) => P.set(i, r)), P.addWatch(i, (r) => {
    e.value = r;
  }), ft[i] = e, e;
}
const ft = {};
function ur(i, t) {
  if (i in gt)
    return gt[i];
  const e = new z(i, !0), r = R(e.get(t));
  return C(r, (s) => e.set(s)), gt[i] = r, r;
}
const gt = {};
function hr(i, t, e) {
  if (i in mt)
    return mt[i];
  const r = new z(i), s = R(r.get(t, e));
  return C(s, (n) => r.set(n)), mt[i] = s, s;
}
const mt = {};
function De(i) {
  const t = R(Y.getListSync(i));
  return oi(async () => {
    G.getLanguage() && (t.value = { ...await Y.getList(i) });
  }), t;
}
const lr = (i) => De(i), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Ae,
  ApiMethodItem: Ie,
  Cache: re,
  CacheItem: Wt,
  CacheStatic: vt,
  Cookie: se,
  CookieBlock: St,
  DataStorage: z,
  Datetime: it,
  DatetimeRef: rr,
  DesignAbstract: We,
  DesignAsyncAbstract: Ue,
  DesignChanged: He,
  DesignComponents: Ze,
  DesignConstructorAbstract: qe,
  Env: Me,
  EventItem: Ht,
  EventRef: sr,
  GEO_FLAG_ICON_NAME: Ve,
  Geo: k,
  GeoFlag: Kt,
  GeoFlagRef: nr,
  GeoIntl: Et,
  GeoIntlRef: or,
  GeoRef: G,
  Hash: P,
  Icons: ai,
  Mutation: Ni,
  MutationCollect: w,
  MutationData: oe,
  MutationDataItem: ne,
  MutationGlobal: _,
  MutationGlobalRef: ir,
  MutationObserverGlobal: ae,
  MutationObserverItems: ce,
  Translate: Y,
  anyToString: ui,
  arrFill: Qt,
  copyObject: V,
  createElement: ke,
  eventStopPropagation: Te,
  executeFunction: tt,
  forEach: p,
  frame: zt,
  getAttributes: Jt,
  getBind: Zt,
  getBindRef: _i,
  getClassName: Qe,
  getClipboardData: hi,
  getColumn: li,
  getElement: Rt,
  getElementId: Ut,
  getElementItem: xe,
  getElementOrWindow: Pe,
  getExp: Xt,
  getIndexForRender: ze,
  getKey: di,
  getLengthOfAllArray: Dt,
  getMaxLengthAllArray: fi,
  getMinLengthAllArray: gi,
  getMouseClient: mi,
  getMouseClientX: te,
  getMouseClientY: ee,
  getRef: v,
  inArray: Re,
  intersectKey: pi,
  isArray: Ke,
  isDifferent: vi,
  isDomRuntime: K,
  isFilled: N,
  isFunction: je,
  isInDom: Be,
  isIntegerBetween: yi,
  isNull: Le,
  isObject: b,
  isObjectNotArray: Je,
  isSelected: pt,
  isSelectedByList: bi,
  isString: Ct,
  isWindow: Fe,
  random: Ge,
  render: Xe,
  replaceRecursive: F,
  replaceTemplate: Ci,
  setElementItem: $e,
  splice: Ei,
  strFill: wi,
  t: lr,
  toArray: qt,
  toCamelCase: Yt,
  toCamelCaseFirst: Z,
  toDate: B,
  toKebabCase: et,
  toNumber: Ye,
  toRefItem: A,
  transformation: X,
  uniqueArray: ie,
  useCookieRef: ar,
  useEnv: J,
  useHashRef: cr,
  useSessionRef: ur,
  useStorageRef: hr,
  useTranslateRef: De
}, Symbol.toStringTag, { value: "Module" }));
export {
  lr as $,
  wi as A,
  Z as B,
  et as C,
  ie as D,
  re as E,
  vt as F,
  se as G,
  St as H,
  it as I,
  P as J,
  Ni as K,
  w as L,
  _ as M,
  oe as N,
  ne as O,
  ae as P,
  ce as Q,
  rr as R,
  sr as S,
  nr as T,
  or as U,
  G as V,
  ar as W,
  cr as X,
  ur as Y,
  hr as Z,
  De as _,
  ir as a,
  ui as b,
  Qt as c,
  hi as d,
  li as e,
  zt as f,
  Jt as g,
  Xt as h,
  di as i,
  Dt as j,
  fi as k,
  gi as l,
  mi as m,
  te as n,
  ee as o,
  pi as p,
  vi as q,
  yi as r,
  bi as s,
  _i as t,
  Mr as u,
  Ir as v,
  A as w,
  F as x,
  Ci as y,
  Ei as z
};
