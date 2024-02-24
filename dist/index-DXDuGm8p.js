var Ie = Object.defineProperty;
var Me = (i, t, e) => t in i ? Ie(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var h = (i, t, e) => (Me(i, typeof t != "symbol" ? t + "" : t, e), e);
import { j as Et, g as b, f as m, e as k, h as vt, c as P, D as J, u as X, i as Y, a as N, t as tt, G as x, k as Le, A as ke, E as xe, b as $e, d as Te } from "./Api-DYbVHTIo.js";
import { g as et, d as Wt, f as v, t as Ut, C as Ht, l as G, o as wt, a as Kt, E as Yt, n as Zt, D as je, p as Fe, q as Ve, s as Pe, u as Be, G as Ge, j as Re, b as We, k as Ue, i as He, c as Ke, e as Ye, r as Ze, h as qe, m as Qe } from "./EventItem-BvpvW_U2.js";
import { g as qt, i as ze } from "./getBind-BlxhXjR2.js";
import { computed as d, isRef as Je, ref as Dt, inject as Xe, watch as C, effectScope as ti, reactive as ei, createApp as ii, triggerRef as si, shallowRef as W, watchEffect as ri } from "vue";
import { t as Qt } from "./toArray-rswbj5Xf.js";
import { I as ni } from "./Icons-CcgnciiT.js";
import { T as Z } from "./Translate-DEvK7S1r.js";
import { createRouter as oi } from "vue-router";
function ai(i) {
  return Et(i) ? i : b(i) ? JSON.stringify(i) : (i == null ? void 0 : i.toString()) ?? "";
}
function zt(i, t) {
  return Array(t).fill(i);
}
function Jt(i, t, e) {
  var s;
  return ((s = et(i)) == null ? void 0 : s[t]) ?? e;
}
function Xt(i, t, e) {
  const s = et(i);
  if (s) {
    const r = Jt(s, t);
    if (b(r) && b(e))
      m(e, (n, o) => {
        r[o] = k(n);
      });
    else {
      const n = k(e);
      !(t in s) && typeof n == "string" ? s.setAttribute(t.toString(), n) : s[t] = k(e);
    }
  }
  return s;
}
function ci(i, t = "div", e, s) {
  const r = document.createElement(t);
  return typeof e == "function" ? e(r) : Wt(e) && m(e, (n, o) => {
    Xt(r, o, n);
  }), i == null || i.insertBefore(r, s ?? null), r;
}
function ui(i) {
  i.preventDefault(), i.stopPropagation();
}
function te(i, t, e) {
  requestAnimationFrame(() => {
    i(), t != null && t() ? te(i, t, e) : e == null || e();
  });
}
function ee(i) {
  const t = {}, e = et(i);
  if (e)
    for (const s of e.attributes)
      t[s.name] = ((s == null ? void 0 : s.value) || (s == null ? void 0 : s.textContent)) ?? void 0;
  return t;
}
async function hi(i) {
  var t;
  return ((t = i == null ? void 0 : i.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function li(i, t) {
  return m(i, (e) => e == null ? void 0 : e[t]);
}
function ie(i, t = "ig", e = ":value") {
  const s = i.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(e.replaceAll(":value", s), t);
}
function di(i) {
  var t;
  return (i == null ? void 0 : i.key) ?? (i == null ? void 0 : i.code) ?? ((t = i == null ? void 0 : i.keyCode) == null ? void 0 : t.toString());
}
function St(i) {
  return m(i, (t) => t.length);
}
function fi(i) {
  return Math.max(...St(i));
}
function gi(i) {
  return Math.min(...St(i));
}
function se(i) {
  var t, e;
  return (i == null ? void 0 : i.clientX) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientX) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientX) || 0;
}
function re(i) {
  var t, e;
  return (i == null ? void 0 : i.clientY) || ((t = i == null ? void 0 : i.targetTouches) == null ? void 0 : t[0].clientY) || ((e = i == null ? void 0 : i.touches) == null ? void 0 : e[0].clientY) || 0;
}
function pi(i) {
  return {
    x: se(i),
    y: re(i)
  };
}
function mi(i, t) {
  const e = {};
  return b(i) && b(t) && m(i, (s, r) => {
    r in t && (e[r] = s);
  }), e;
}
function vi(i, t) {
  let e = Object.keys(i).length !== Object.keys(t).length;
  return e || m(i, (s, r) => {
    s !== (t == null ? void 0 : t[r]) && (e = !0);
  }), e;
}
function yi(i, t) {
  const e = Math.floor(t);
  return i >= e && i < e + 1;
}
function bi(i, t) {
  return Array.isArray(i) ? i.every((e) => vt(e, t)) : vt(i, t);
}
function _i(i, t = {}, e = "value") {
  return d(() => qt(i == null ? void 0 : i.value, v(t), e));
}
function A(i) {
  return Je(i) ? i : Dt(i);
}
function ne(i) {
  return [...new Set(i)];
}
function V(i, t, e = !0) {
  const s = P(i);
  return b(i) && b(t) && m(
    t,
    (r, n) => {
      const o = i == null ? void 0 : i[n];
      b(o) && b(r) ? e && Array.isArray(o) && Array.isArray(r) ? s[n] = P(ne([...o, ...r])) : s[n] = V(
        Array.isArray(o) ? { ...o } : o,
        r,
        e
      ) : s[n] = b(r) ? P(r) : r;
    }
  ), s;
}
function Ci(i, t) {
  let e = i;
  return m(t, (s, r) => {
    e = e.replace(ie(`[${r}]`), k(s));
  }), e;
}
function Ei(i, t, e) {
  if (b(i) && b(t)) {
    if (e) {
      let s = {}, r = !1;
      return m(i, (n, o) => {
        !r && (e === o || e === n) ? (r = !0, s = V(s, t)) : r ? s = V(s, { [o]: n }) : s[o] = b(n) ? P(n) : n;
      }), r ? s : V(i, t);
    }
    if (b(t))
      return V(i, t);
  }
  return P(i);
}
function wi(i, t) {
  return zt(i, t).join("");
}
function q(i) {
  return Ut(i).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function it(i) {
  return i.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
class oe {
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
  get(t, e, s) {
    return this.getCacheItem(t, e).getCache(s ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, e, s) {
    return await this.getCacheItem(t, e).getCacheAsync(s ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, e) {
    return t in this.cache || (this.cache[t] = new Ht(e)), this.cache[t];
  }
}
const z = class z {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(t, e, s) {
    return this.cache.get(t, e, s);
  }
};
h(z, "cache"), z.cache = new oe();
let yt = z;
const Di = "cookie-block";
class Ot {
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
h(Ot, "storage", new J(Di));
const H = {};
class ae {
  constructor(t) {
    h(this, "value");
    h(this, "options", {});
    if (this.name = t, t in lt)
      return lt[t];
    this.value = H == null ? void 0 : H[t], lt[t] = this;
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
    this.value = k(t), Object.assign(this.options, e), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? X("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, e;
    if (Y() && !Ot.get()) {
      const s = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(s)}`,
        `max-age=${s === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((e = this.options) == null ? void 0 : e.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (Y())
    for (const t of document.cookie.split(";")) {
      const [e, s] = t.trim().split("=");
      e && N(s) && (H[e] = tt(s));
    }
})();
const lt = {};
class st {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", s = x.getLocation()) {
    h(this, "date");
    h(this, "hour24", !1);
    h(this, "watch");
    this.type = e, this.code = s, this.date = G(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new wt(this.code);
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
    const s = e / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(s), { signDisplay: "always" });
    const r = this.getIntl().number(Math.trunc(s), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), n = s.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${r}${n}` : `${r}:${n}`;
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
    const e = new st(this.date, this.type, "en-GB"), s = [];
    let r;
    return e.setHour24(!0), this.type === "hour-minute" ? r = e.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (s.push(e.localeYear()), s.push(e.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && s.push(e.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (r = e.locale("time"))), `${s.join("-")}${r ? `T${r}${t ? e.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = G(t), this.update(), this;
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
    var r;
    const s = k(e);
    s !== ((r = this.hash) == null ? void 0 : r[t]) && (this.hash[t] = s, this.update());
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
      (...e) => (t[e[1]] = tt(e[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = m(
      this.hash,
      (e, s) => `${s}=${encodeURIComponent(String(e))}`
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
    m(this.watch, (e, s) => {
      var r;
      ((r = this.hash) == null ? void 0 : r[s]) !== (t == null ? void 0 : t[s]) && e.forEach((n) => n(t[s]));
    });
  }
};
h(M, "hash", {}), h(M, "watch", {}), h(M, "block", !1), Y() && (M.reload(), addEventListener("hashchange", () => M.reload()));
let B = M;
var D = /* @__PURE__ */ ((i) => (i.new = "new", i.init = "init", i.end = "end", i))(D || {});
const Tt = "d-mutation", Si = it(X("DESIGNS_MAIN", "design")), Oi = it(X("DESIGNS_GLOBAL", "ui")), L = "__UI_PROJECT";
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
    return `${Tt}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${Tt}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, e = D.new) {
    const s = [];
    if ("querySelector" in t) {
      const r = this.getSelectorByStatus(e);
      t.querySelector(r) && t.querySelectorAll(r).forEach((n) => s.push(n));
    }
    return s;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var e, s;
    return !!((e = t == null ? void 0 : t.closest) != null && e.call(t, this.getSelectorInit()) || !((s = t == null ? void 0 : t.closest) != null && s.call(t, "body")));
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
    m(t, (e, s) => {
      this.addFunction(s, e);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    m(t, (e, s) => {
      this.addClass(s, e);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    m(t, (e, s) => {
      this.addComponent(s, e);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, e, s) {
    if (this.compItems[t] = {
      item: e,
      callback: s
    }, t in this.compCaching) {
      const r = this.compCaching[t];
      return delete this.compCaching[t], r;
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
class ce {
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
    this.element = t, this.id = Kt(t), this.componentName = ((e = t.dataset) == null ? void 0 : e[w.getKeyUi()]) ?? "component", this.static = D.new, this.slots = this.initSlots(), this.setStatus(D.init), this.element.classList.add(this.getClassMain());
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
    const t = q(this.componentName);
    return _.isComponent(t) ? t : q(`${Si}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return it(this.getComponentName()).replace(/-.*?$/, "");
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
    const s = _.registrationComponent(
      this.getId(),
      t,
      (r) => {
        N(r) && this.setProps(r).update();
      }
    );
    return s && this.setProps(s), this.callback = e, this;
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
    return m(this.element.dataset, (e, s) => {
      s !== w.getKeyUi() && (t[s] = tt(e));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return N(t) && m(t, (e, s) => {
      s === "slots" ? this.setSlots(e) : this.props[s] = e;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return N(t) && m(t, (e, s) => {
      this.slots[s] = this.initChildrenList(Qt(e));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, e = [];
    for (const s of this.element.children) {
      const r = s.getAttribute("data-slot");
      if (r)
        t[r] = this.initChildrenList(s.childNodes);
      else {
        const n = this.initChildren(s);
        n && ("default" in t ? t.default.push(n) : t.default = [n]);
      }
      e.push(s);
    }
    for (const s of e)
      this.element.removeChild(s);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const e = [];
    for (const s of t) {
      const r = this.initChildren(s);
      r && e.push(r);
    }
    return e;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var s, r;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...ee(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const e = (r = (s = t == null ? void 0 : t.textContent) == null ? void 0 : s.trim) == null ? void 0 : r.call(s);
    if (N(e))
      return e;
    if (Et(t) && N(t))
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
class ue {
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
    return this.isComponent(t) && !this.is(t) && !w.closestInit(t) && this.items.push(new ce(t)), this;
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
class he {
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
      e.removedNodes.forEach((s) => this.removeCallback(s)), e.addedNodes.forEach((s) => this.addCallback(s));
    });
  }
}
class le {
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
    h(this, "items", new ue());
    this.callback = t, this.mutationGlobal = new he(
      (e) => this.add(e),
      (e) => this.remove(e)
    ), this.mutationItems = new le(
      this.items,
      (e) => {
        var s;
        return (s = this.items.getItem(e)) == null ? void 0 : s.update();
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
  return de().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function de() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ii = typeof Proxy == "function", Mi = "devtools-plugin:setup", Li = "plugin:settings:set";
let j, bt;
function ki() {
  var i;
  return j !== void 0 || (typeof window < "u" && window.performance ? (j = !0, bt = window.performance) : typeof globalThis < "u" && (!((i = globalThis.perf_hooks) === null || i === void 0) && i.performance) ? (j = !0, bt = globalThis.perf_hooks.performance) : j = !1), j;
}
function xi() {
  return ki() ? bt.now() : Date.now();
}
class $i {
  constructor(t, e) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = e;
    const s = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        s[o] = a.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let n = Object.assign({}, s);
    try {
      const o = localStorage.getItem(r), a = JSON.parse(o);
      Object.assign(n, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return n;
      },
      setSettings(o) {
        try {
          localStorage.setItem(r, JSON.stringify(o));
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
  const e = i, s = de(), r = Ai(), n = Ii && e.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !n))
    r.emit(Mi, i, t);
  else {
    const o = n ? new $i(e, r) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
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
function fe(i) {
  return i === void 0 && (i = null), Xe(i !== null ? i : rt);
}
function ji(i, t) {
  return i.filter(t)[0];
}
function _t(i, t) {
  if (t === void 0 && (t = []), i === null || typeof i != "object")
    return i;
  var e = ji(t, function(r) {
    return r.original === i;
  });
  if (e)
    return e.copy;
  var s = Array.isArray(i) ? [] : {};
  return t.push({
    original: i,
    copy: s
  }), Object.keys(i).forEach(function(r) {
    s[r] = _t(i[r], t);
  }), s;
}
function $(i, t) {
  Object.keys(i).forEach(function(e) {
    return t(i[e], e);
  });
}
function ge(i) {
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
function pe(i, t, e) {
  return t.indexOf(i) < 0 && (e && e.prepend ? t.unshift(i) : t.push(i)), function() {
    var s = t.indexOf(i);
    s > -1 && t.splice(s, 1);
  };
}
function me(i, t) {
  i._actions = /* @__PURE__ */ Object.create(null), i._mutations = /* @__PURE__ */ Object.create(null), i._wrappedGetters = /* @__PURE__ */ Object.create(null), i._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var e = i.state;
  nt(i, e, [], i._modules.root, !0), Nt(i, e, t);
}
function Nt(i, t, e) {
  var s = i._state, r = i._scope;
  i.getters = {}, i._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var n = i._wrappedGetters, o = {}, a = {}, c = ti(!0);
  c.run(function() {
    $(n, function(l, u) {
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
  }), i._state = ei({
    data: t
  }), i._scope = c, i.strict && Wi(i), s && e && i._withCommit(function() {
    s.data = null;
  }), r && r.stop();
}
function nt(i, t, e, s, r) {
  var n = !e.length, o = i._modules.getNamespace(e);
  if (s.namespaced && (i._modulesNamespaceMap[o] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + o + " for the namespaced module " + e.join("/")), i._modulesNamespaceMap[o] = s), !n && !r) {
    var a = At(t, e.slice(0, -1)), c = e[e.length - 1];
    i._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in a && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + e.join(".") + '"'
      ), a[c] = s.state;
    });
  }
  var l = s.context = Pi(i, o, e);
  s.forEachMutation(function(u, f) {
    var g = o + f;
    Bi(i, g, u, l);
  }), s.forEachAction(function(u, f) {
    var g = u.root ? f : o + f, p = u.handler || u;
    Gi(i, g, p, l);
  }), s.forEachGetter(function(u, f) {
    var g = o + f;
    Ri(i, g, u, l);
  }), s.forEachChild(function(u, f) {
    nt(i, t, e.concat(f), u, r);
  });
}
function Pi(i, t, e) {
  var s = t === "", r = {
    dispatch: s ? i.dispatch : function(n, o, a) {
      var c = Q(n, o, a), l = c.payload, u = c.options, f = c.type;
      if ((!u || !u.root) && (f = t + f, process.env.NODE_ENV !== "production" && !i._actions[f])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + f);
        return;
      }
      return i.dispatch(f, l);
    },
    commit: s ? i.commit : function(n, o, a) {
      var c = Q(n, o, a), l = c.payload, u = c.options, f = c.type;
      if ((!u || !u.root) && (f = t + f, process.env.NODE_ENV !== "production" && !i._mutations[f])) {
        console.error("[vuex] unknown local mutation type: " + c.type + ", global type: " + f);
        return;
      }
      i.commit(f, l, u);
    }
  };
  return Object.defineProperties(r, {
    getters: {
      get: s ? function() {
        return i.getters;
      } : function() {
        return ve(i, t);
      }
    },
    state: {
      get: function() {
        return At(i.state, e);
      }
    }
  }), r;
}
function ve(i, t) {
  if (!i._makeLocalGettersCache[t]) {
    var e = {}, s = t.length;
    Object.keys(i.getters).forEach(function(r) {
      if (r.slice(0, s) === t) {
        var n = r.slice(s);
        Object.defineProperty(e, n, {
          get: function() {
            return i.getters[r];
          },
          enumerable: !0
        });
      }
    }), i._makeLocalGettersCache[t] = e;
  }
  return i._makeLocalGettersCache[t];
}
function Bi(i, t, e, s) {
  var r = i._mutations[t] || (i._mutations[t] = []);
  r.push(function(o) {
    e.call(i, s.state, o);
  });
}
function Gi(i, t, e, s) {
  var r = i._actions[t] || (i._actions[t] = []);
  r.push(function(o) {
    var a = e.call(i, {
      dispatch: s.dispatch,
      commit: s.commit,
      getters: s.getters,
      state: s.state,
      rootGetters: i.getters,
      rootState: i.state
    }, o);
    return Fi(a) || (a = Promise.resolve(a)), i._devtoolHook ? a.catch(function(c) {
      throw i._devtoolHook.emit("vuex:error", c), c;
    }) : a;
  });
}
function Ri(i, t, e, s) {
  if (i._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  i._wrappedGetters[t] = function(n) {
    return e(
      s.state,
      // local state
      s.getters,
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
function At(i, t) {
  return t.reduce(function(e, s) {
    return e[s];
  }, i);
}
function Q(i, t, e) {
  return ge(i) && i.type && (e = t, t = i, i = i.type), process.env.NODE_ENV !== "production" && S(typeof i == "string", "expects string as the type, but found " + typeof i + "."), { type: i, payload: t, options: e };
}
var Ui = "vuex bindings", jt = "vuex:mutations", dt = "vuex:actions", F = "vuex", Hi = 0;
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
        id: jt,
        label: "Vuex Mutations",
        color: Ft
      }), e.addTimelineLayer({
        id: dt,
        label: "Vuex Actions",
        color: Ft
      }), e.addInspector({
        id: F,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), e.on.getInspectorTree(function(s) {
        if (s.app === i && s.inspectorId === F)
          if (s.filter) {
            var r = [];
            Ce(r, t._modules.root, s.filter, ""), s.rootNodes = r;
          } else
            s.rootNodes = [
              _e(t._modules.root, "")
            ];
      }), e.on.getInspectorState(function(s) {
        if (s.app === i && s.inspectorId === F) {
          var r = s.nodeId;
          ve(t, r), s.state = qi(
            zi(t._modules, r),
            r === "root" ? t.getters : t._makeLocalGettersCache,
            r
          );
        }
      }), e.on.editInspectorState(function(s) {
        if (s.app === i && s.inspectorId === F) {
          var r = s.nodeId, n = s.path;
          r !== "root" && (n = r.split("/").filter(Boolean).concat(n)), t._withCommit(function() {
            s.set(t._state.data, n, s.state.value);
          });
        }
      }), t.subscribe(function(s, r) {
        var n = {};
        s.payload && (n.payload = s.payload), n.state = r, e.notifyComponentUpdate(), e.sendInspectorTree(F), e.sendInspectorState(F), e.addTimelineEvent({
          layerId: jt,
          event: {
            time: Date.now(),
            title: s.type,
            data: n
          }
        });
      }), t.subscribeAction({
        before: function(s, r) {
          var n = {};
          s.payload && (n.payload = s.payload), s._id = Hi++, s._time = Date.now(), n.state = r, e.addTimelineEvent({
            layerId: dt,
            event: {
              time: s._time,
              title: s.type,
              groupId: s._id,
              subtitle: "start",
              data: n
            }
          });
        },
        after: function(s, r) {
          var n = {}, o = Date.now() - s._time;
          n.duration = {
            _custom: {
              type: "duration",
              display: o + "ms",
              tooltip: "Action duration",
              value: o
            }
          }, s.payload && (n.payload = s.payload), n.state = r, e.addTimelineEvent({
            layerId: dt,
            event: {
              time: Date.now(),
              title: s.type,
              groupId: s._id,
              subtitle: "end",
              data: n
            }
          });
        }
      });
    }
  );
}
var Ft = 8702998, Yi = 6710886, Zi = 16777215, ye = {
  label: "namespaced",
  textColor: Zi,
  backgroundColor: Yi
};
function be(i) {
  return i && i !== "root" ? i.split("/").slice(-2, -1)[0] : "Root";
}
function _e(i, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: be(t),
    tags: i.namespaced ? [ye] : [],
    children: Object.keys(i._children).map(
      function(e) {
        return _e(
          i._children[e],
          t + e + "/"
        );
      }
    )
  };
}
function Ce(i, t, e, s) {
  s.includes(e) && i.push({
    id: s || "root",
    label: s.endsWith("/") ? s.slice(0, s.length - 1) : s || "Root",
    tags: t.namespaced ? [ye] : []
  }), Object.keys(t._children).forEach(function(r) {
    Ce(i, t._children[r], e, s + r + "/");
  });
}
function qi(i, t, e) {
  t = e === "root" ? t : t[e];
  var s = Object.keys(t), r = {
    state: Object.keys(i.state).map(function(o) {
      return {
        key: o,
        editable: !0,
        value: i.state[o]
      };
    })
  };
  if (s.length) {
    var n = Qi(t);
    r.getters = Object.keys(n).map(function(o) {
      return {
        key: o.endsWith("/") ? be(o) : o,
        editable: !1,
        value: Ct(function() {
          return n[o];
        })
      };
    });
  }
  return r;
}
function Qi(i) {
  var t = {};
  return Object.keys(i).forEach(function(e) {
    var s = e.split("/");
    if (s.length > 1) {
      var r = t, n = s.pop();
      s.forEach(function(o) {
        r[o] || (r[o] = {
          _custom: {
            value: {},
            display: o,
            tooltip: "Module",
            abstract: !0
          }
        }), r = r[o]._custom.value;
      }), r[n] = Ct(function() {
        return i[e];
      });
    } else
      t[e] = Ct(function() {
        return i[e];
      });
  }), t;
}
function zi(i, t) {
  var e = t.split("/").filter(function(s) {
    return s;
  });
  return e.reduce(
    function(s, r, n) {
      var o = s[r];
      if (!o)
        throw new Error('Missing module "' + r + '" for path "' + t + '".');
      return n === e.length - 1 ? o : o._children;
    },
    t === "root" ? i : i.root._children
  );
}
function Ct(i) {
  try {
    return i();
  } catch (t) {
    return t;
  }
}
var O = function(t, e) {
  this.runtime = e, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var s = t.state;
  this.state = (typeof s == "function" ? s() : s) || {};
}, Ee = { namespaced: { configurable: !0 } };
Ee.namespaced.get = function() {
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
  $(this._children, t);
};
O.prototype.forEachGetter = function(t) {
  this._rawModule.getters && $(this._rawModule.getters, t);
};
O.prototype.forEachAction = function(t) {
  this._rawModule.actions && $(this._rawModule.actions, t);
};
O.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && $(this._rawModule.mutations, t);
};
Object.defineProperties(O.prototype, Ee);
var T = function(t) {
  this.register([], t, !1);
};
T.prototype.get = function(t) {
  return t.reduce(function(e, s) {
    return e.getChild(s);
  }, this.root);
};
T.prototype.getNamespace = function(t) {
  var e = this.root;
  return t.reduce(function(s, r) {
    return e = e.getChild(r), s + (e.namespaced ? r + "/" : "");
  }, "");
};
T.prototype.update = function(t) {
  we([], this.root, t);
};
T.prototype.register = function(t, e, s) {
  var r = this;
  s === void 0 && (s = !0), process.env.NODE_ENV !== "production" && De(t, e);
  var n = new O(e, s);
  if (t.length === 0)
    this.root = n;
  else {
    var o = this.get(t.slice(0, -1));
    o.addChild(t[t.length - 1], n);
  }
  e.modules && $(e.modules, function(a, c) {
    r.register(t.concat(c), a, s);
  });
};
T.prototype.unregister = function(t) {
  var e = this.get(t.slice(0, -1)), s = t[t.length - 1], r = e.getChild(s);
  if (!r) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + s + "', which is not registered"
    );
    return;
  }
  r.runtime && e.removeChild(s);
};
T.prototype.isRegistered = function(t) {
  var e = this.get(t.slice(0, -1)), s = t[t.length - 1];
  return e ? e.hasChild(s) : !1;
};
function we(i, t, e) {
  if (process.env.NODE_ENV !== "production" && De(i, e), t.update(e), e.modules)
    for (var s in e.modules) {
      if (!t.getChild(s)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + s + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      we(
        i.concat(s),
        t.getChild(s),
        e.modules[s]
      );
    }
}
var Vt = {
  assert: function(i) {
    return typeof i == "function";
  },
  expected: "function"
}, Ji = {
  assert: function(i) {
    return typeof i == "function" || typeof i == "object" && typeof i.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, Pt = {
  getters: Vt,
  mutations: Vt,
  actions: Ji
};
function De(i, t) {
  Object.keys(Pt).forEach(function(e) {
    if (t[e]) {
      var s = Pt[e];
      $(t[e], function(r, n) {
        S(
          s.assert(r),
          Xi(i, e, n, r, s.expected)
        );
      });
    }
  });
}
function Xi(i, t, e, s, r) {
  var n = t + " should be " + r + ' but "' + t + "." + e + '"';
  return i.length > 0 && (n += ' in module "' + i.join(".") + '"'), n += " is " + JSON.stringify(s) + ".", n;
}
function It(i) {
  return new y(i);
}
var y = function i(t) {
  var e = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (S(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), S(this instanceof i, "store must be called with the new operator."));
  var s = t.plugins;
  s === void 0 && (s = []);
  var r = t.strict;
  r === void 0 && (r = !1);
  var n = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new T(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = n;
  var o = this, a = this, c = a.dispatch, l = a.commit;
  this.dispatch = function(g, p) {
    return c.call(o, g, p);
  }, this.commit = function(g, p, I) {
    return l.call(o, g, p, I);
  }, this.strict = r;
  var u = this._modules.root.state;
  nt(this, u, [], this._modules.root), Nt(this, u), s.forEach(function(f) {
    return f(e);
  });
}, Mt = { state: { configurable: !0 } };
y.prototype.install = function(t, e) {
  t.provide(e || rt, this), t.config.globalProperties.$store = this;
  var s = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  s && Ki(t, this);
};
Mt.state.get = function() {
  return this._state.data;
};
Mt.state.set = function(i) {
  process.env.NODE_ENV !== "production" && S(!1, "use store.replaceState() to explicit replace store state.");
};
y.prototype.commit = function(t, e, s) {
  var r = this, n = Q(t, e, s), o = n.type, a = n.payload, c = n.options, l = { type: o, payload: a }, u = this._mutations[o];
  if (!u) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + o);
    return;
  }
  this._withCommit(function() {
    u.forEach(function(g) {
      g(a);
    });
  }), this._subscribers.slice().forEach(function(f) {
    return f(l, r.state);
  }), process.env.NODE_ENV !== "production" && c && c.silent && console.warn(
    "[vuex] mutation type: " + o + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
y.prototype.dispatch = function(t, e) {
  var s = this, r = Q(t, e), n = r.type, o = r.payload, a = { type: n, payload: o }, c = this._actions[n];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + n);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(u) {
      return u.before;
    }).forEach(function(u) {
      return u.before(a, s.state);
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
        s._actionSubscribers.filter(function(p) {
          return p.after;
        }).forEach(function(p) {
          return p.after(a, s.state);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(p));
      }
      u(g);
    }, function(g) {
      try {
        s._actionSubscribers.filter(function(p) {
          return p.error;
        }).forEach(function(p) {
          return p.error(a, s.state, g);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(p));
      }
      f(g);
    });
  });
};
y.prototype.subscribe = function(t, e) {
  return pe(t, this._subscribers, e);
};
y.prototype.subscribeAction = function(t, e) {
  var s = typeof t == "function" ? { before: t } : t;
  return pe(s, this._actionSubscribers, e);
};
y.prototype.watch = function(t, e, s) {
  var r = this;
  return process.env.NODE_ENV !== "production" && S(typeof t == "function", "store.watch only accepts a function."), C(function() {
    return t(r.state, r.getters);
  }, e, Object.assign({}, s));
};
y.prototype.replaceState = function(t) {
  var e = this;
  this._withCommit(function() {
    e._state.data = t;
  });
};
y.prototype.registerModule = function(t, e, s) {
  s === void 0 && (s = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (S(Array.isArray(t), "module path must be a string or an Array."), S(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, e), nt(this, this.state, t, this._modules.get(t), s.preserveState), Nt(this, this.state);
};
y.prototype.unregisterModule = function(t) {
  var e = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && S(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var s = At(e.state, t.slice(0, -1));
    delete s[t[t.length - 1]];
  }), me(this);
};
y.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && S(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
y.prototype.hotUpdate = function(t) {
  this._modules.update(t), me(this, !0);
};
y.prototype._withCommit = function(t) {
  var e = this._committing;
  this._committing = !0, t(), this._committing = e;
};
Object.defineProperties(y.prototype, Mt);
var Lt = at(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !U(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), ot(t).forEach(function(s) {
    var r = s.key, n = s.val;
    e[r] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (i) {
        var l = ct(this.$store, "mapState", i);
        if (!l)
          return;
        a = l.context.state, c = l.context.getters;
      }
      return typeof n == "function" ? n.call(this, a, c) : a[n];
    }, e[r].vuex = !0;
  }), e;
}), kt = at(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !U(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), ot(t).forEach(function(s) {
    var r = s.key, n = s.val;
    e[r] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.commit;
      if (i) {
        var u = ct(this.$store, "mapMutations", i);
        if (!u)
          return;
        l = u.context.commit;
      }
      return typeof n == "function" ? n.apply(this, [l].concat(a)) : l.apply(this.$store, [n].concat(a));
    };
  }), e;
}), xt = at(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !U(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), ot(t).forEach(function(s) {
    var r = s.key, n = s.val;
    n = i + n, e[r] = function() {
      if (!(i && !ct(this.$store, "mapGetters", i))) {
        if (process.env.NODE_ENV !== "production" && !(n in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + n);
          return;
        }
        return this.$store.getters[n];
      }
    }, e[r].vuex = !0;
  }), e;
}), $t = at(function(i, t) {
  var e = {};
  return process.env.NODE_ENV !== "production" && !U(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), ot(t).forEach(function(s) {
    var r = s.key, n = s.val;
    e[r] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var l = this.$store.dispatch;
      if (i) {
        var u = ct(this.$store, "mapActions", i);
        if (!u)
          return;
        l = u.context.dispatch;
      }
      return typeof n == "function" ? n.apply(this, [l].concat(a)) : l.apply(this.$store, [n].concat(a));
    };
  }), e;
}), Se = function(i) {
  return {
    mapState: Lt.bind(null, i),
    mapGetters: xt.bind(null, i),
    mapMutations: kt.bind(null, i),
    mapActions: $t.bind(null, i)
  };
};
function ot(i) {
  return U(i) ? Array.isArray(i) ? i.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(i).map(function(t) {
    return { key: t, val: i[t] };
  }) : [];
}
function U(i) {
  return Array.isArray(i) || ge(i);
}
function at(i) {
  return function(t, e) {
    return typeof t != "string" ? (e = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), i(t, e);
  };
}
function ct(i, t, e) {
  var s = i._modulesNamespaceMap[e];
  return process.env.NODE_ENV !== "production" && !s && console.error("[vuex] module namespace not found in " + t + "(): " + e), s;
}
function Oe(i) {
  i === void 0 && (i = {});
  var t = i.collapsed;
  t === void 0 && (t = !0);
  var e = i.filter;
  e === void 0 && (e = function(u, f, g) {
    return !0;
  });
  var s = i.transformer;
  s === void 0 && (s = function(u) {
    return u;
  });
  var r = i.mutationTransformer;
  r === void 0 && (r = function(u) {
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
    var f = _t(u.state);
    typeof l > "u" || (a && u.subscribe(function(g, p) {
      var I = _t(p);
      if (e(g, f, I)) {
        var ut = Rt(), ht = r(g), Ae = "mutation " + g.type + ut;
        Bt(l, Ae, t), l.log("%c prev state", "color: #9E9E9E; font-weight: bold", s(f)), l.log("%c mutation", "color: #03A9F4; font-weight: bold", ht), l.log("%c next state", "color: #4CAF50; font-weight: bold", s(I)), Gt(l);
      }
      f = I;
    }), c && u.subscribeAction(function(g, p) {
      if (n(g, p)) {
        var I = Rt(), ut = o(g), ht = "action " + g.type + I;
        Bt(l, ht, t), l.log("%c action", "color: #03A9F4; font-weight: bold", ut), Gt(l);
      }
    }));
  };
}
function Bt(i, t, e) {
  var s = e ? i.groupCollapsed : i.group;
  try {
    s.call(i, t);
  } catch {
    i.log(t);
  }
}
function Gt(i) {
  try {
    i.groupEnd();
  } catch {
    i.log("—— log end ——");
  }
}
function Rt() {
  var i = /* @__PURE__ */ new Date();
  return " @ " + K(i.getHours(), 2) + ":" + K(i.getMinutes(), 2) + ":" + K(i.getSeconds(), 2) + "." + K(i.getMilliseconds(), 3);
}
function ts(i, t) {
  return new Array(t + 1).join(i);
}
function K(i, t) {
  return ts("0", t - i.toString().length) + i;
}
var es = {
  version: "4.1.0",
  Store: y,
  storeKey: rt,
  createStore: It,
  useStore: fe,
  mapState: Lt,
  mapMutations: kt,
  mapGetters: xt,
  mapActions: $t,
  createNamespacedHelpers: Se,
  createLogger: Oe
};
const Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: y,
  createLogger: Oe,
  createNamespacedHelpers: Se,
  createStore: It,
  default: es,
  mapActions: $t,
  mapGetters: xt,
  mapMutations: kt,
  mapState: Lt,
  storeKey: rt,
  useStore: fe
}, Symbol.toStringTag, { value: "Module" }));
class is {
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
  static addComponent(t, e, s, r, n, o) {
    const a = window, c = {
      item: e,
      router: s,
      store: r,
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
      q(t.replace(/\//g, "-")),
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
    e && (N(e == null ? void 0 : e.translate) ? Z.add(e.translate).then(() => this.createAppItem(t, e)) : this.createAppItem(t, e));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, e) {
    const s = ii(e.item);
    e != null && e.router && s.use(this.createRouter(e.router)), e != null && e.store && s.use(this.createStore(e.store)), e != null && e.init && e.init(s), m(_.getComponentList(), (r, n) => s.component(n, r)), s.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return oi(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return It(t);
  }
}
class ss {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, e = "date", s = x.getLocation()) {
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
    this.item = A(t), this.type = A(e), this.code = A(s), this.date = Dt(G(this.item.value)), this.datetime = new st(
      this.date.value,
      this.type.value,
      this.code.value
    ), C(this.item, (r) => {
      this.date.value = G(r);
    }), C(this.type, (r) => this.datetime.setType(r)), C(this.code, (r) => this.datetime.setCode(r)), C(this.date, (r) => this.datetime.setDate(r)), this.datetime.setWatch(() => si(this.date));
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
class rs extends Yt {
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
  constructor(t, e, s = ["click"], r, n, o) {
    const a = A(t), c = A(e);
    super(
      a.value,
      s,
      r,
      n,
      o
    ), c.value && this.setElementControl(c.value), C(a, (l) => this.setElement(l)), C(c, (l) => this.setElementControl(l));
  }
}
class ns {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = x.getLocation()) {
    h(this, "code");
    h(this, "flag");
    this.code = A(t), this.flag = new Zt(this.code.value), C(this.code, (e) => this.flag.setCode(e));
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
    x.set(t, !0), this.item.value = x.getItem();
  }
};
h(E, "item", W(x.get())), h(E, "country", d(() => E.item.value.country)), h(E, "language", d(() => E.item.value.language)), h(E, "standard", d(() => E.item.value.standard)), h(E, "firstDay", d(() => E.item.value.firstDay));
let R = E;
class os {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    h(this, "location");
    h(this, "intl");
    this.location = A(t), this.intl = d(() => new wt(this.location.value ?? R.getLanguage().value));
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
  currency(t, e, s = !1) {
    return d(() => this.intl.value.currency(v(t), e, s));
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
  date(t, e, s, r) {
    return d(() => this.intl.value.date(v(t), e, s, r));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, e, s) {
    return d(() => this.intl.value.relative(v(t), e, s));
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
  relativeLimit(t, e, s, r, n, o, a) {
    return d(() => this.intl.value.relativeLimit(
      v(t),
      e,
      s,
      r,
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
function as(i, t, e) {
  if (i in ft)
    return ft[i];
  const s = new ae(i), r = Dt(s.get(t, e));
  return C(r, (n) => {
    s.set(n, e);
  }), ft[i] = r, r;
}
const ft = {};
function cs(i, t) {
  if (i in gt)
    return gt[i];
  const e = W(B.get(i, t));
  return C(e, (s) => B.set(i, s)), B.addWatch(i, (s) => {
    e.value = s;
  }), gt[i] = e, e;
}
const gt = {};
function us(i, t) {
  if (i in pt)
    return pt[i];
  const e = new J(i, !0), s = W(e.get(t));
  return C(s, (r) => e.set(r)), pt[i] = s, s;
}
const pt = {};
function hs(i, t, e) {
  if (i in mt)
    return mt[i];
  const s = new J(i), r = W(s.get(t, e));
  return C(r, (n) => s.set(n)), mt[i] = r, r;
}
const mt = {};
function Ne(i) {
  const t = W(Z.getListSync(i));
  return ri(async () => {
    R.getLanguage() && (t.value = { ...await Z.getList(i) });
  }), t;
}
const ls = (i) => Ne(i), Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Le,
  ApiMethodItem: ke,
  Cache: oe,
  CacheItem: Ht,
  CacheStatic: yt,
  Cookie: ae,
  CookieBlock: Ot,
  DataStorage: J,
  Datetime: st,
  DatetimeRef: ss,
  DesignAbstract: je,
  DesignAsyncAbstract: Fe,
  DesignChanged: Ve,
  DesignComponents: Pe,
  DesignConstructorAbstract: Be,
  Env: xe,
  EventItem: Yt,
  EventRef: rs,
  GEO_FLAG_ICON_NAME: Ge,
  Geo: x,
  GeoFlag: Zt,
  GeoFlagRef: ns,
  GeoIntl: wt,
  GeoIntlRef: os,
  GeoRef: R,
  Hash: B,
  Icons: ni,
  Mutation: Ni,
  MutationCollect: w,
  MutationData: ue,
  MutationDataItem: ce,
  MutationGlobal: _,
  MutationGlobalRef: is,
  MutationObserverGlobal: he,
  MutationObserverItems: le,
  Translate: Z,
  anyToString: ai,
  arrFill: zt,
  copyObject: P,
  createElement: ci,
  eventStopPropagation: ui,
  executeFunction: k,
  forEach: m,
  frame: te,
  getAttributes: ee,
  getBind: qt,
  getBindRef: _i,
  getClassName: Re,
  getClipboardData: hi,
  getColumn: li,
  getElement: et,
  getElementId: Kt,
  getElementItem: Jt,
  getElementOrWindow: We,
  getExp: ie,
  getIndexForRender: Ue,
  getKey: di,
  getLengthOfAllArray: St,
  getMaxLengthAllArray: fi,
  getMinLengthAllArray: gi,
  getMouseClient: pi,
  getMouseClientX: se,
  getMouseClientY: re,
  getRef: v,
  inArray: ze,
  intersectKey: mi,
  isArray: He,
  isDifferent: vi,
  isDomRuntime: Y,
  isFilled: N,
  isFunction: $e,
  isInDom: Ke,
  isIntegerBetween: yi,
  isNull: Te,
  isObject: b,
  isObjectNotArray: Wt,
  isSelected: vt,
  isSelectedByList: bi,
  isString: Et,
  isWindow: Ye,
  random: Ze,
  render: qe,
  replaceRecursive: V,
  replaceTemplate: Ci,
  setElementItem: Xt,
  splice: Ei,
  strFill: wi,
  t: ls,
  toArray: Qt,
  toCamelCase: Ut,
  toCamelCaseFirst: q,
  toDate: G,
  toKebabCase: it,
  toNumber: Qe,
  toRefItem: A,
  transformation: tt,
  uniqueArray: ne,
  useCookieRef: as,
  useEnv: X,
  useHashRef: cs,
  useSessionRef: us,
  useStorageRef: hs,
  useTranslateRef: Ne
}, Symbol.toStringTag, { value: "Module" }));
export {
  cs as $,
  V as A,
  Ci as B,
  Xt as C,
  Ei as D,
  wi as E,
  q as F,
  it as G,
  ne as H,
  oe as I,
  yt as J,
  ae as K,
  Ot as L,
  _ as M,
  st as N,
  B as O,
  Ni as P,
  w as Q,
  ue as R,
  ce as S,
  he as T,
  le as U,
  ss as V,
  rs as W,
  ns as X,
  os as Y,
  R as Z,
  as as _,
  is as a,
  us as a0,
  hs as a1,
  Ne as a2,
  ls as a3,
  ai as b,
  zt as c,
  ci as d,
  ui as e,
  te as f,
  ee as g,
  hi as h,
  li as i,
  Jt as j,
  ie as k,
  di as l,
  St as m,
  fi as n,
  gi as o,
  pi as p,
  se as q,
  re as r,
  mi as s,
  vi as t,
  Es as u,
  Cs as v,
  yi as w,
  bi as x,
  _i as y,
  A as z
};
