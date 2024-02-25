var de = Object.defineProperty;
var ge = (e, t, r) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var d = (e, t, r) => (ge(e, typeof t != "symbol" ? t + "" : t, r), r);
import { i as y, f as E } from "./forEach-B1ZDH1yu.js";
import { i as jt, u as $t, a as gt, t as pt, E as pe, b as me } from "./useEnv-CFVj6p9U.js";
import { i as ct, c as T, D as Y, a as R, G as A, A as ve, b as ye } from "./Api-xb9Hb97W.js";
import { c as _e, g as be, s as Ee } from "./createElement-C7okUM5s.js";
import { e as De } from "./eventStopPropagation-fHm2p5BF.js";
import { e as K, i as Oe } from "./executeFunction-B6By_8Og.js";
import { K as rt, c as j, t as Ft, M as we, a as Me, g as Ce, d as Ae } from "./MutationDataItem-CCjAUy7V.js";
import { g as Ne, i as Se } from "./getElement-BhVCn14C.js";
import { g as xe, r as Ie } from "./getElementId-Dv5cOpg7.js";
import { C as Vt, t as $, a as mt, E as Gt, b as Pt, G as Le, g as Te, i as ke } from "./EventItem-BiWzkDiN.js";
import { i as je } from "./inArray-BLmbg9f_.js";
import { a as $e, D as Fe, b as Ve, i as Ge, t as Pe } from "./toNumber-BeBr0lVX.js";
import { g as m, a as Be, D as Re, b as We, c as He, i as Ue, r as Ye, t as Ke } from "./DesignConstructorAbstract-ZQD6lBiI.js";
import { computed as h, isRef as Qe, ref as vt, inject as ze, watch as _, effectScope as Je, reactive as qe, createApp as Xe, triggerRef as Ze, shallowRef as V, watchEffect as tr } from "vue";
import { g as Bt } from "./getBind-BTtwgl8A.js";
import { t as er } from "./toArray-rswbj5Xf.js";
import { I as rr } from "./Icons-BOdC4Ie-.js";
import { T as W } from "./Translate-Brfdat4q.js";
import { M as ir, a as nr, b as sr, c as or } from "./Mutation-BwhPgSpu.js";
import { createRouter as ar } from "vue-router";
function ur(e) {
  return jt(e) ? e : y(e) ? JSON.stringify(e) : (e == null ? void 0 : e.toString()) ?? "";
}
function Rt(e, t) {
  return Array(t).fill(e);
}
function Wt(e, t, r) {
  requestAnimationFrame(() => {
    e(), t != null && t() ? Wt(e, t, r) : r == null || r();
  });
}
async function cr(e) {
  var t;
  return ((t = e == null ? void 0 : e.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function lr(e, t) {
  return E(e, (r) => r == null ? void 0 : r[t]);
}
function Ht(e, t = "ig", r = ":value") {
  const i = e.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(r.replaceAll(":value", i), t);
}
function hr(e) {
  var t;
  return (e == null ? void 0 : e.key) ?? (e == null ? void 0 : e.code) ?? ((t = e == null ? void 0 : e.keyCode) == null ? void 0 : t.toString());
}
function yt(e) {
  return E(e, (t) => t.length);
}
function fr(e) {
  return Math.max(...yt(e));
}
function dr(e) {
  return Math.min(...yt(e));
}
function Ut(e) {
  var t, r;
  return (e == null ? void 0 : e.clientX) || ((t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0].clientX) || ((r = e == null ? void 0 : e.touches) == null ? void 0 : r[0].clientX) || 0;
}
function Yt(e) {
  var t, r;
  return (e == null ? void 0 : e.clientY) || ((t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0].clientY) || ((r = e == null ? void 0 : e.touches) == null ? void 0 : r[0].clientY) || 0;
}
function gr(e) {
  return {
    x: Ut(e),
    y: Yt(e)
  };
}
function pr(e, t) {
  const r = {};
  return y(e) && y(t) && E(e, (i, n) => {
    n in t && (r[n] = i);
  }), r;
}
function mr(e, t) {
  let r = Object.keys(e).length !== Object.keys(t).length;
  return r || E(e, (i, n) => {
    i !== (t == null ? void 0 : t[n]) && (r = !0);
  }), r;
}
function vr(e, t) {
  const r = Math.floor(t);
  return e >= r && e < r + 1;
}
function yr(e, t) {
  return Array.isArray(e) ? e.every((r) => ct(r, t)) : ct(e, t);
}
function _r(e, t = {}, r = "value") {
  return h(() => Bt(e == null ? void 0 : e.value, m(t), r));
}
function w(e) {
  return Qe(e) ? e : vt(e);
}
function Kt(e) {
  return [...new Set(e)];
}
function L(e, t, r = !0) {
  const i = T(e);
  return y(e) && y(t) && E(
    t,
    (n, s) => {
      const o = e == null ? void 0 : e[s];
      y(o) && y(n) ? r && Array.isArray(o) && Array.isArray(n) ? i[s] = T(Kt([...o, ...n])) : i[s] = L(
        Array.isArray(o) ? { ...o } : o,
        n,
        r
      ) : i[s] = y(n) ? T(n) : n;
    }
  ), i;
}
function br(e, t) {
  let r = e;
  return E(t, (i, n) => {
    r = r.replace(Ht(`[${n}]`), K(i));
  }), r;
}
function Er(e, t, r) {
  if (y(e) && y(t)) {
    if (r) {
      let i = {}, n = !1;
      return E(e, (s, o) => {
        !n && (r === o || r === s) ? (n = !0, i = L(i, t)) : n ? i = L(i, { [o]: s }) : i[o] = y(s) ? T(s) : s;
      }), n ? i : L(e, t);
    }
    if (y(t))
      return L(e, t);
  }
  return T(e);
}
function Dr(e, t) {
  return Rt(e, t).join("");
}
class Qt {
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
    return t in this.cache || (this.cache[t] = new Vt(r)), this.cache[t];
  }
}
const U = class U {
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
d(U, "cache"), U.cache = new Qt();
let lt = U;
const Or = "cookie-block";
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
d(_t, "storage", new Y(Or));
const P = {};
class zt {
  constructor(t) {
    d(this, "value");
    d(this, "options", {});
    if (this.name = t, t in it)
      return it[t];
    this.value = P == null ? void 0 : P[t], it[t] = this;
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
    this.value = K(t), Object.assign(this.options, r), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? $t("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, r;
    if (R() && !_t.get()) {
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
  if (R())
    for (const t of document.cookie.split(";")) {
      const [r, i] = t.trim().split("=");
      r && gt(i) && (P[r] = pt(i));
    }
})();
const it = {};
class Q {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, r = "date", i = A.getLocation()) {
    d(this, "date");
    d(this, "hour24", !1);
    d(this, "watch");
    this.type = r, this.code = i, this.date = $(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new mt(this.code);
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
    const r = this.getTimeZoneOffset();
    if (t === "minute")
      return r.toString();
    const i = r / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(i), { signDisplay: "always" });
    const n = this.getIntl().number(Math.trunc(i), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), s = i.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${n}${s}` : `${n}:${s}`;
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
  locale(t = this.type, r) {
    return this.getIntl().date(
      this.date,
      t,
      r,
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
    const r = new Q(this.date, this.type, "en-GB"), i = [];
    let n;
    return r.setHour24(!0), this.type === "hour-minute" ? n = r.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (i.push(r.localeYear()), i.push(r.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && i.push(r.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (n = r.locale("time"))), `${i.join("-")}${n ? `T${n}${t ? r.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = $(t), this.update(), this;
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
    const t = this.date.getDay(), r = this.getFirstDayCode();
    return this.moveByDay(
      (r === 6 ? -1 : r) - t
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
const C = class C {
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
    const i = K(r);
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
      (...r) => (t[r[1]] = pt(r[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = E(
      this.hash,
      (r, i) => `${i}=${encodeURIComponent(String(r))}`
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
    E(this.watch, (r, i) => {
      var n;
      ((n = this.hash) == null ? void 0 : n[i]) !== (t == null ? void 0 : t[i]) && r.forEach((s) => s(t[i]));
    });
  }
};
d(C, "hash", {}), d(C, "watch", {}), d(C, "block", !1), R() && (C.reload(), addEventListener("hashchange", () => C.reload()));
let k = C;
function wr() {
  return Jt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Jt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Mr = typeof Proxy == "function", Cr = "devtools-plugin:setup", Ar = "plugin:settings:set";
let x, ht;
function Nr() {
  var e;
  return x !== void 0 || (typeof window < "u" && window.performance ? (x = !0, ht = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (x = !0, ht = globalThis.perf_hooks.performance) : x = !1), x;
}
function Sr() {
  return Nr() ? ht.now() : Date.now();
}
class xr {
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
        return Sr();
      }
    }, r && r.on(Ar, (o, a) => {
      o === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, a) => this.target ? this.target.on[a] : (...u) => {
        this.onQueue.push({
          method: a,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...u) => (this.targetQueue.push({
        method: a,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[a](...u)) : (...u) => new Promise((l) => {
        this.targetQueue.push({
          method: a,
          args: u,
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
function Ir(e, t) {
  const r = e, i = Jt(), n = wr(), s = Mr && r.enableEarlyProxy;
  if (n && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    n.emit(Cr, e, t);
  else {
    const o = s ? new xr(r, n) : null;
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
var z = "store";
function qt(e) {
  return e === void 0 && (e = null), ze(e !== null ? e : z);
}
function Lr(e, t) {
  return e.filter(t)[0];
}
function ft(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var r = Lr(t, function(n) {
    return n.original === e;
  });
  if (r)
    return r.copy;
  var i = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: i
  }), Object.keys(e).forEach(function(n) {
    i[n] = ft(e[n], t);
  }), i;
}
function N(e, t) {
  Object.keys(e).forEach(function(r) {
    return t(e[r], r);
  });
}
function Xt(e) {
  return e !== null && typeof e == "object";
}
function Tr(e) {
  return e && typeof e.then == "function";
}
function D(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function kr(e, t) {
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
  J(e, r, [], e._modules.root, !0), bt(e, r, t);
}
function bt(e, t, r) {
  var i = e._state, n = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, o = {}, a = {}, u = Je(!0);
  u.run(function() {
    N(s, function(l, c) {
      o[c] = kr(l, e), a[c] = h(function() {
        return o[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return a[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = qe({
    data: t
  }), e._scope = u, e.strict && Gr(e), i && r && e._withCommit(function() {
    i.data = null;
  }), n && n.stop();
}
function J(e, t, r, i, n) {
  var s = !r.length, o = e._modules.getNamespace(r);
  if (i.namespaced && (e._modulesNamespaceMap[o] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + o + " for the namespaced module " + r.join("/")), e._modulesNamespaceMap[o] = i), !s && !n) {
    var a = Et(t, r.slice(0, -1)), u = r[r.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && u in a && console.warn(
        '[vuex] state field "' + u + '" was overridden by a module with the same name at "' + r.join(".") + '"'
      ), a[u] = i.state;
    });
  }
  var l = i.context = jr(e, o, r);
  i.forEachMutation(function(c, f) {
    var g = o + f;
    $r(e, g, c, l);
  }), i.forEachAction(function(c, f) {
    var g = c.root ? f : o + f, p = c.handler || c;
    Fr(e, g, p, l);
  }), i.forEachGetter(function(c, f) {
    var g = o + f;
    Vr(e, g, c, l);
  }), i.forEachChild(function(c, f) {
    J(e, t, r.concat(f), c, n);
  });
}
function jr(e, t, r) {
  var i = t === "", n = {
    dispatch: i ? e.dispatch : function(s, o, a) {
      var u = H(s, o, a), l = u.payload, c = u.options, f = u.type;
      if ((!c || !c.root) && (f = t + f, process.env.NODE_ENV !== "production" && !e._actions[f])) {
        console.error("[vuex] unknown local action type: " + u.type + ", global type: " + f);
        return;
      }
      return e.dispatch(f, l);
    },
    commit: i ? e.commit : function(s, o, a) {
      var u = H(s, o, a), l = u.payload, c = u.options, f = u.type;
      if ((!c || !c.root) && (f = t + f, process.env.NODE_ENV !== "production" && !e._mutations[f])) {
        console.error("[vuex] unknown local mutation type: " + u.type + ", global type: " + f);
        return;
      }
      e.commit(f, l, c);
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
function $r(e, t, r, i) {
  var n = e._mutations[t] || (e._mutations[t] = []);
  n.push(function(o) {
    r.call(e, i.state, o);
  });
}
function Fr(e, t, r, i) {
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
    return Tr(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(u) {
      throw e._devtoolHook.emit("vuex:error", u), u;
    }) : a;
  });
}
function Vr(e, t, r, i) {
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
function Gr(e) {
  _(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && D(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Et(e, t) {
  return t.reduce(function(r, i) {
    return r[i];
  }, e);
}
function H(e, t, r) {
  return Xt(e) && e.type && (r = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && D(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: r };
}
var Pr = "vuex bindings", Nt = "vuex:mutations", nt = "vuex:actions", I = "vuex", Br = 0;
function Rr(e, t) {
  Ir(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Pr]
    },
    function(r) {
      r.addTimelineLayer({
        id: Nt,
        label: "Vuex Mutations",
        color: St
      }), r.addTimelineLayer({
        id: nt,
        label: "Vuex Actions",
        color: St
      }), r.addInspector({
        id: I,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), r.on.getInspectorTree(function(i) {
        if (i.app === e && i.inspectorId === I)
          if (i.filter) {
            var n = [];
            se(n, t._modules.root, i.filter, ""), i.rootNodes = n;
          } else
            i.rootNodes = [
              ne(t._modules.root, "")
            ];
      }), r.on.getInspectorState(function(i) {
        if (i.app === e && i.inspectorId === I) {
          var n = i.nodeId;
          ee(t, n), i.state = Ur(
            Kr(t._modules, n),
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
          layerId: Nt,
          event: {
            time: Date.now(),
            title: i.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(i, n) {
          var s = {};
          i.payload && (s.payload = i.payload), i._id = Br++, i._time = Date.now(), s.state = n, r.addTimelineEvent({
            layerId: nt,
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
            layerId: nt,
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
var St = 8702998, Wr = 6710886, Hr = 16777215, re = {
  label: "namespaced",
  textColor: Hr,
  backgroundColor: Wr
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
function se(e, t, r, i) {
  i.includes(r) && e.push({
    id: i || "root",
    label: i.endsWith("/") ? i.slice(0, i.length - 1) : i || "Root",
    tags: t.namespaced ? [re] : []
  }), Object.keys(t._children).forEach(function(n) {
    se(e, t._children[n], r, i + n + "/");
  });
}
function Ur(e, t, r) {
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
    var s = Yr(t);
    n.getters = Object.keys(s).map(function(o) {
      return {
        key: o.endsWith("/") ? ie(o) : o,
        editable: !1,
        value: dt(function() {
          return s[o];
        })
      };
    });
  }
  return n;
}
function Yr(e) {
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
      }), n[s] = dt(function() {
        return e[r];
      });
    } else
      t[r] = dt(function() {
        return e[r];
      });
  }), t;
}
function Kr(e, t) {
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
function dt(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var O = function(t, r) {
  this.runtime = r, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var i = t.state;
  this.state = (typeof i == "function" ? i() : i) || {};
}, oe = { namespaced: { configurable: !0 } };
oe.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
O.prototype.addChild = function(t, r) {
  this._children[t] = r;
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
  N(this._children, t);
};
O.prototype.forEachGetter = function(t) {
  this._rawModule.getters && N(this._rawModule.getters, t);
};
O.prototype.forEachAction = function(t) {
  this._rawModule.actions && N(this._rawModule.actions, t);
};
O.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && N(this._rawModule.mutations, t);
};
Object.defineProperties(O.prototype, oe);
var S = function(t) {
  this.register([], t, !1);
};
S.prototype.get = function(t) {
  return t.reduce(function(r, i) {
    return r.getChild(i);
  }, this.root);
};
S.prototype.getNamespace = function(t) {
  var r = this.root;
  return t.reduce(function(i, n) {
    return r = r.getChild(n), i + (r.namespaced ? n + "/" : "");
  }, "");
};
S.prototype.update = function(t) {
  ae([], this.root, t);
};
S.prototype.register = function(t, r, i) {
  var n = this;
  i === void 0 && (i = !0), process.env.NODE_ENV !== "production" && ue(t, r);
  var s = new O(r, i);
  if (t.length === 0)
    this.root = s;
  else {
    var o = this.get(t.slice(0, -1));
    o.addChild(t[t.length - 1], s);
  }
  r.modules && N(r.modules, function(a, u) {
    n.register(t.concat(u), a, i);
  });
};
S.prototype.unregister = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1], n = r.getChild(i);
  if (!n) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + i + "', which is not registered"
    );
    return;
  }
  n.runtime && r.removeChild(i);
};
S.prototype.isRegistered = function(t) {
  var r = this.get(t.slice(0, -1)), i = t[t.length - 1];
  return r ? r.hasChild(i) : !1;
};
function ae(e, t, r) {
  if (process.env.NODE_ENV !== "production" && ue(e, r), t.update(r), r.modules)
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
var xt = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Qr = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, It = {
  getters: xt,
  mutations: xt,
  actions: Qr
};
function ue(e, t) {
  Object.keys(It).forEach(function(r) {
    if (t[r]) {
      var i = It[r];
      N(t[r], function(n, s) {
        D(
          i.assert(n),
          zr(e, r, s, n, i.expected)
        );
      });
    }
  });
}
function zr(e, t, r, i, n) {
  var s = t + " should be " + n + ' but "' + t + "." + r + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(i) + ".", s;
}
function Dt(e) {
  return new v(e);
}
var v = function e(t) {
  var r = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (D(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), D(this instanceof e, "store must be called with the new operator."));
  var i = t.plugins;
  i === void 0 && (i = []);
  var n = t.strict;
  n === void 0 && (n = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new S(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var o = this, a = this, u = a.dispatch, l = a.commit;
  this.dispatch = function(g, p) {
    return u.call(o, g, p);
  }, this.commit = function(g, p, M) {
    return l.call(o, g, p, M);
  }, this.strict = n;
  var c = this._modules.root.state;
  J(this, c, [], this._modules.root), bt(this, c), i.forEach(function(f) {
    return f(r);
  });
}, Ot = { state: { configurable: !0 } };
v.prototype.install = function(t, r) {
  t.provide(r || z, this), t.config.globalProperties.$store = this;
  var i = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  i && Rr(t, this);
};
Ot.state.get = function() {
  return this._state.data;
};
Ot.state.set = function(e) {
  process.env.NODE_ENV !== "production" && D(!1, "use store.replaceState() to explicit replace store state.");
};
v.prototype.commit = function(t, r, i) {
  var n = this, s = H(t, r, i), o = s.type, a = s.payload, u = s.options, l = { type: o, payload: a }, c = this._mutations[o];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + o);
    return;
  }
  this._withCommit(function() {
    c.forEach(function(g) {
      g(a);
    });
  }), this._subscribers.slice().forEach(function(f) {
    return f(l, n.state);
  }), process.env.NODE_ENV !== "production" && u && u.silent && console.warn(
    "[vuex] mutation type: " + o + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
v.prototype.dispatch = function(t, r) {
  var i = this, n = H(t, r), s = n.type, o = n.payload, a = { type: s, payload: o }, u = this._actions[s];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(c) {
      return c.before;
    }).forEach(function(c) {
      return c.before(a, i.state);
    });
  } catch (c) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(c));
  }
  var l = u.length > 1 ? Promise.all(u.map(function(c) {
    return c(o);
  })) : u[0](o);
  return new Promise(function(c, f) {
    l.then(function(g) {
      try {
        i._actionSubscribers.filter(function(p) {
          return p.after;
        }).forEach(function(p) {
          return p.after(a, i.state);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(p));
      }
      c(g);
    }, function(g) {
      try {
        i._actionSubscribers.filter(function(p) {
          return p.error;
        }).forEach(function(p) {
          return p.error(a, i.state, g);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(p));
      }
      f(g);
    });
  });
};
v.prototype.subscribe = function(t, r) {
  return Zt(t, this._subscribers, r);
};
v.prototype.subscribeAction = function(t, r) {
  var i = typeof t == "function" ? { before: t } : t;
  return Zt(i, this._actionSubscribers, r);
};
v.prototype.watch = function(t, r, i) {
  var n = this;
  return process.env.NODE_ENV !== "production" && D(typeof t == "function", "store.watch only accepts a function."), _(function() {
    return t(n.state, n.getters);
  }, r, Object.assign({}, i));
};
v.prototype.replaceState = function(t) {
  var r = this;
  this._withCommit(function() {
    r._state.data = t;
  });
};
v.prototype.registerModule = function(t, r, i) {
  i === void 0 && (i = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (D(Array.isArray(t), "module path must be a string or an Array."), D(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, r), J(this, this.state, t, this._modules.get(t), i.preserveState), bt(this, this.state);
};
v.prototype.unregisterModule = function(t) {
  var r = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && D(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var i = Et(r.state, t.slice(0, -1));
    delete i[t[t.length - 1]];
  }), te(this);
};
v.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && D(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
v.prototype.hotUpdate = function(t) {
  this._modules.update(t), te(this, !0);
};
v.prototype._withCommit = function(t) {
  var r = this._committing;
  this._committing = !0, t(), this._committing = r;
};
Object.defineProperties(v.prototype, Ot);
var wt = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), q(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      var a = this.$store.state, u = this.$store.getters;
      if (e) {
        var l = Z(this.$store, "mapState", e);
        if (!l)
          return;
        a = l.context.state, u = l.context.getters;
      }
      return typeof s == "function" ? s.call(this, a, u) : a[s];
    }, r[n].vuex = !0;
  }), r;
}), Mt = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), q(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], u = arguments.length; u--; )
        a[u] = arguments[u];
      var l = this.$store.commit;
      if (e) {
        var c = Z(this.$store, "mapMutations", e);
        if (!c)
          return;
        l = c.context.commit;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), Ct = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), q(t).forEach(function(i) {
    var n = i.key, s = i.val;
    s = e + s, r[n] = function() {
      if (!(e && !Z(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(s in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + s);
          return;
        }
        return this.$store.getters[s];
      }
    }, r[n].vuex = !0;
  }), r;
}), At = X(function(e, t) {
  var r = {};
  return process.env.NODE_ENV !== "production" && !G(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), q(t).forEach(function(i) {
    var n = i.key, s = i.val;
    r[n] = function() {
      for (var a = [], u = arguments.length; u--; )
        a[u] = arguments[u];
      var l = this.$store.dispatch;
      if (e) {
        var c = Z(this.$store, "mapActions", e);
        if (!c)
          return;
        l = c.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [l].concat(a)) : l.apply(this.$store, [s].concat(a));
    };
  }), r;
}), ce = function(e) {
  return {
    mapState: wt.bind(null, e),
    mapGetters: Ct.bind(null, e),
    mapMutations: Mt.bind(null, e),
    mapActions: At.bind(null, e)
  };
};
function q(e) {
  return G(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function G(e) {
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
  r === void 0 && (r = function(c, f, g) {
    return !0;
  });
  var i = e.transformer;
  i === void 0 && (i = function(c) {
    return c;
  });
  var n = e.mutationTransformer;
  n === void 0 && (n = function(c) {
    return c;
  });
  var s = e.actionFilter;
  s === void 0 && (s = function(c, f) {
    return !0;
  });
  var o = e.actionTransformer;
  o === void 0 && (o = function(c) {
    return c;
  });
  var a = e.logMutations;
  a === void 0 && (a = !0);
  var u = e.logActions;
  u === void 0 && (u = !0);
  var l = e.logger;
  return l === void 0 && (l = console), function(c) {
    var f = ft(c.state);
    typeof l > "u" || (a && c.subscribe(function(g, p) {
      var M = ft(p);
      if (r(g, f, M)) {
        var tt = kt(), et = n(g), fe = "mutation " + g.type + tt;
        Lt(l, fe, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", i(f)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", et), l.log("%c next state", "color: #4CAF50; font-weight: bold", i(M)), Tt(l);
      }
      f = M;
    }), u && c.subscribeAction(function(g, p) {
      if (s(g, p)) {
        var M = kt(), tt = o(g), et = "action " + g.type + M;
        Lt(l, et, t), l.log("%c action", "color: #03A9F4; font-weight: bold", tt), Tt(l);
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
function kt() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + B(e.getHours(), 2) + ":" + B(e.getMinutes(), 2) + ":" + B(e.getSeconds(), 2) + "." + B(e.getMilliseconds(), 3);
}
function Jr(e, t) {
  return new Array(t + 1).join(e);
}
function B(e, t) {
  return Jr("0", t - e.toString().length) + e;
}
var qr = {
  version: "4.1.0",
  Store: v,
  storeKey: z,
  createStore: Dt,
  useStore: qt,
  mapState: wt,
  mapMutations: Mt,
  mapGetters: Ct,
  mapActions: At,
  createNamespacedHelpers: ce,
  createLogger: le
};
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: v,
  createLogger: le,
  createNamespacedHelpers: ce,
  createStore: Dt,
  default: qr,
  mapActions: At,
  mapGetters: Ct,
  mapMutations: Mt,
  mapState: wt,
  storeKey: z,
  useStore: qt
}, Symbol.toStringTag, { value: "Module" }));
class Xr {
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
    const a = window, u = {
      item: r,
      router: i,
      store: n,
      init: s,
      translate: o
    };
    rt in a ? a[rt][t] = u : a[rt] = {
      [t]: u
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const r = j.getComponentGlobalItem(t);
    r && j.addComponent(
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
    const r = j.getComponentGlobalItem(t);
    r && (gt(r == null ? void 0 : r.translate) ? W.add(r.translate).then(() => this.createAppItem(t, r)) : this.createAppItem(t, r));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, r) {
    const i = Xe(r.item);
    r != null && r.router && i.use(this.createRouter(r.router)), r != null && r.store && i.use(this.createStore(r.store)), r != null && r.init && r.init(i), E(j.getComponentList(), (n, s) => i.component(s, n)), i.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return ar(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return Dt(t);
  }
}
class Zr {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, r = "date", i = A.getLocation()) {
    d(this, "item");
    d(this, "type");
    d(this, "code");
    d(this, "date");
    d(this, "datetime");
    d(this, "year", h(() => this.date.value && this.datetime.getYear()));
    d(this, "month", h(() => this.date.value && this.datetime.getMonth()));
    d(this, "day", h(() => this.date.value && this.datetime.getDay()));
    d(this, "hour", h(() => this.date.value && this.datetime.getHour()));
    d(this, "minute", h(() => this.date.value && this.datetime.getMinute()));
    d(this, "second", h(() => this.date.value && this.datetime.getSecond()));
    this.item = w(t), this.type = w(r), this.code = w(i), this.date = vt($(this.item.value)), this.datetime = new Q(
      this.date.value,
      this.type.value,
      this.code.value
    ), _(this.item, (n) => {
      this.date.value = $(n);
    }), _(this.type, (n) => this.datetime.setType(n)), _(this.code, (n) => this.datetime.setCode(n)), _(this.date, (n) => this.datetime.setDate(n)), this.datetime.setWatch(() => Ze(this.date));
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
    return h(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return h(() => this.date.value && this.datetime.getFirstDayCode());
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
    return h(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, r) {
    return h(() => this.date.value && this.datetime.locale(t, r));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return h(() => this.date.value && this.datetime.standard(t));
  }
}
class ti extends Gt {
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
    const a = w(t), u = w(r);
    super(
      a.value,
      i,
      n,
      s,
      o
    ), u.value && this.setElementControl(u.value), _(a, (l) => this.setElement(l)), _(u, (l) => this.setElementControl(l));
  }
}
class ei {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = A.getLocation()) {
    d(this, "code");
    d(this, "flag");
    this.code = w(t), this.flag = new Pt(this.code.value), _(this.code, (r) => this.flag.setCode(r));
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
    return h(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return h(() => {
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
    return h(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return h(() => this.flag.getNational(t));
  }
}
const b = class b {
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
    A.set(t, !0), this.item.value = A.getItem();
  }
};
d(b, "item", V(A.get())), d(b, "country", h(() => b.item.value.country)), d(b, "language", h(() => b.item.value.language)), d(b, "standard", h(() => b.item.value.standard)), d(b, "firstDay", h(() => b.item.value.firstDay));
let F = b;
class ri {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    d(this, "location");
    d(this, "intl");
    this.location = w(t), this.intl = h(() => new mt(this.location.value ?? F.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, r) {
    return h(() => this.intl.value.display(m(t), r));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, r) {
    return h(() => this.intl.value.languageName(m(t), r));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, r) {
    return h(() => this.intl.value.countryName(m(t), r));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, r) {
    return h(() => this.intl.value.number(m(t), r));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return h(() => this.intl.value.decimal());
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
    return h(() => this.intl.value.currency(m(t), r, i));
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
    return h(() => this.intl.value.unit(m(t), r));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, r) {
    return h(() => this.intl.value.percent(m(t), r));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, r) {
    return h(() => this.intl.value.percentBy100(m(t), r));
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
    return h(() => this.intl.value.date(m(t), r, i, n));
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
    return h(() => this.intl.value.relative(m(t), r, i));
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
    return h(() => this.intl.value.relativeLimit(
      m(t),
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
    return h(() => this.intl.value.month(m(t), r));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return h(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, r) {
    return h(() => this.intl.value.weekday(m(t), r));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return h(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return h(() => this.intl.value.time(m(t)));
  }
}
function ii(e, t, r) {
  if (e in st)
    return st[e];
  const i = new zt(e), n = vt(i.get(t, r));
  return _(n, (s) => {
    i.set(s, r);
  }), st[e] = n, n;
}
const st = {};
function ni(e, t) {
  if (e in ot)
    return ot[e];
  const r = V(k.get(e, t));
  return _(r, (i) => k.set(e, i)), k.addWatch(e, (i) => {
    r.value = i;
  }), ot[e] = r, r;
}
const ot = {};
function si(e, t) {
  if (e in at)
    return at[e];
  const r = new Y(e, !0), i = V(r.get(t));
  return _(i, (n) => r.set(n)), at[e] = i, i;
}
const at = {};
function oi(e, t, r) {
  if (e in ut)
    return ut[e];
  const i = new Y(e), n = V(i.get(t, r));
  return _(n, (s) => i.set(s)), ut[e] = n, n;
}
const ut = {};
function he(e) {
  const t = V(W.getListSync(e));
  return tr(async () => {
    F.getLanguage() && (t.value = { ...await W.getList(e) });
  }), t;
}
const ai = (e) => he(e), xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: ve,
  ApiMethodItem: ye,
  Cache: Qt,
  CacheItem: Vt,
  CacheStatic: lt,
  Cookie: zt,
  CookieBlock: _t,
  DataStorage: Y,
  Datetime: Q,
  DatetimeRef: Zr,
  DesignAbstract: $e,
  DesignAsyncAbstract: Fe,
  DesignChanged: Ve,
  DesignComponents: Be,
  DesignConstructorAbstract: Re,
  Env: pe,
  EventItem: Gt,
  EventRef: ti,
  GEO_FLAG_ICON_NAME: Le,
  Geo: A,
  GeoFlag: Pt,
  GeoFlagRef: ei,
  GeoIntl: mt,
  GeoIntlRef: ri,
  GeoRef: F,
  Hash: k,
  Icons: rr,
  Mutation: ir,
  MutationCollect: we,
  MutationData: nr,
  MutationDataItem: Me,
  MutationGlobal: j,
  MutationGlobalRef: Xr,
  MutationObserverGlobal: sr,
  MutationObserverItems: or,
  Translate: W,
  anyToString: ur,
  arrFill: Rt,
  copyObject: T,
  createElement: _e,
  eventStopPropagation: De,
  executeFunction: K,
  forEach: E,
  frame: Wt,
  getAttributes: Ce,
  getBind: Bt,
  getBindRef: _r,
  getClassName: We,
  getClipboardData: cr,
  getColumn: lr,
  getElement: Ne,
  getElementId: xe,
  getElementItem: be,
  getElementOrWindow: Te,
  getExp: Ht,
  getIndexForRender: He,
  getKey: hr,
  getLengthOfAllArray: yt,
  getMaxLengthAllArray: fr,
  getMinLengthAllArray: dr,
  getMouseClient: gr,
  getMouseClientX: Ut,
  getMouseClientY: Yt,
  getRef: m,
  inArray: je,
  intersectKey: pr,
  isArray: Ge,
  isDifferent: mr,
  isDomRuntime: R,
  isFilled: gt,
  isFunction: Oe,
  isInDom: ke,
  isIntegerBetween: vr,
  isNull: me,
  isObject: y,
  isObjectNotArray: Ue,
  isSelected: ct,
  isSelectedByList: yr,
  isString: jt,
  isWindow: Se,
  random: Ie,
  render: Ye,
  replaceRecursive: L,
  replaceTemplate: br,
  setElementItem: Ee,
  splice: Er,
  strFill: Dr,
  t: ai,
  toArray: er,
  toCamelCase: Ke,
  toCamelCaseFirst: Ft,
  toDate: $,
  toKebabCase: Ae,
  toNumber: Pe,
  toRefItem: w,
  transformation: pt,
  uniqueArray: Kt,
  useCookieRef: ii,
  useEnv: $t,
  useHashRef: ni,
  useSessionRef: si,
  useStorageRef: oi,
  useTranslateRef: he
}, Symbol.toStringTag, { value: "Module" }));
export {
  lt as A,
  zt as B,
  Qt as C,
  _t as D,
  Q as E,
  Zr as F,
  ti as G,
  k as H,
  ei as I,
  ri as J,
  F as K,
  ii as L,
  Xr as M,
  ni as N,
  si as O,
  oi as P,
  he as Q,
  ai as R,
  ur as a,
  Rt as b,
  lr as c,
  Ht as d,
  hr as e,
  Wt as f,
  cr as g,
  yt as h,
  fr as i,
  dr as j,
  gr as k,
  Ut as l,
  Yt as m,
  pr as n,
  mr as o,
  vr as p,
  yr as q,
  _r as r,
  L as s,
  w as t,
  xi as u,
  Si as v,
  br as w,
  Er as x,
  Dr as y,
  Kt as z
};
