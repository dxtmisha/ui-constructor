var Gr = Object.defineProperty;
var Ur = (e, t, n) => t in e ? Gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => (Ur(e, typeof t != "symbol" ? t + "" : t, n), n);
import { j as xe, g as T, f as P, e as ct, h as be, c as gt, D as Wt, u as Rt, i as jt, a as tt, t as Ht, G as et, k as Vt, A as Wr, E as Hr, I as Kr, b as qr, d as Yr } from "./Icons-253BbGkD.js";
import { g as Kt, d as Le, x as _, f as M, y as zr, z as qt, l as On, C as Sn, m as At, p as Te, t as Ve, a as An, A as Yt, B as Y, F as kn, H as _t, I as Qr, J as Jr, K as Zr, L as Ot, M as Dn, N as Rn, O as In, P as le, Q as V, R as Xr, S as ti, T as ei, U as ni, V as ri, E as $n, o as Pn, D as ii, q as si, s as oi, u as ai, w as ci, G as ui, j as li, b as hi, k as fi, i as di, c as pi, e as mi, r as gi, h as vi, n as yi } from "./DesignConstructorAbstract-Dn9vNsVi.js";
function Ei(e) {
  return xe(e) ? e : T(e) ? JSON.stringify(e) : (e == null ? void 0 : e.toString()) ?? "";
}
function Mn(e, t) {
  return Array(t).fill(e);
}
function xn(e, t, n) {
  var r;
  return ((r = Kt(e)) == null ? void 0 : r[t]) ?? n;
}
function Ln(e, t, n) {
  const r = Kt(e);
  if (r) {
    const i = xn(r, t);
    if (T(i) && T(n))
      P(n, (s, a) => {
        i[a] = ct(s);
      });
    else {
      const s = ct(n);
      !(t in r) && typeof s == "string" ? r.setAttribute(t.toString(), s) : r[t] = ct(n);
    }
  }
  return r;
}
function _i(e, t = "div", n, r) {
  const i = document.createElement(t);
  return typeof n == "function" ? n(i) : Le(n) && P(n, (s, a) => {
    Ln(i, a, s);
  }), e == null || e.insertBefore(i, r ?? null), i;
}
function bi(e) {
  e.preventDefault(), e.stopPropagation();
}
function Tn(e, t, n) {
  requestAnimationFrame(() => {
    e(), t != null && t() ? Tn(e, t, n) : n == null || n();
  });
}
function Vn(e) {
  const t = {}, n = Kt(e);
  if (n)
    for (const r of n.attributes)
      t[r.name] = ((r == null ? void 0 : r.value) || (r == null ? void 0 : r.textContent)) ?? void 0;
  return t;
}
async function wi(e) {
  var t;
  return ((t = e == null ? void 0 : e.clipboardData) == null ? void 0 : t.getData("text")) ?? (await navigator.clipboard.readText() || "");
}
function Ci(e, t) {
  return P(e, (n) => n == null ? void 0 : n[t]);
}
function jn(e, t = "ig", n = ":value") {
  const r = e.replace(/([[\]\\^$.?*+()])/g, "\\$1");
  return new RegExp(n.replaceAll(":value", r), t);
}
function Ni(e) {
  var t;
  return (e == null ? void 0 : e.key) ?? (e == null ? void 0 : e.code) ?? ((t = e == null ? void 0 : e.keyCode) == null ? void 0 : t.toString());
}
function je(e) {
  return P(e, (t) => t.length);
}
function Oi(e) {
  return Math.max(...je(e));
}
function Si(e) {
  return Math.min(...je(e));
}
function Bn(e) {
  var t, n;
  return (e == null ? void 0 : e.clientX) || ((t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0].clientX) || ((n = e == null ? void 0 : e.touches) == null ? void 0 : n[0].clientX) || 0;
}
function Fn(e) {
  var t, n;
  return (e == null ? void 0 : e.clientY) || ((t = e == null ? void 0 : e.targetTouches) == null ? void 0 : t[0].clientY) || ((n = e == null ? void 0 : e.touches) == null ? void 0 : n[0].clientY) || 0;
}
function Ai(e) {
  return {
    x: Bn(e),
    y: Fn(e)
  };
}
function ki(e, t) {
  return e.indexOf(t) !== -1;
}
function Di(e, t) {
  const n = {};
  return T(e) && T(t) && P(e, (r, i) => {
    i in t && (n[i] = r);
  }), n;
}
function Ri(e, t) {
  let n = Object.keys(e).length !== Object.keys(t).length;
  return n || P(e, (r, i) => {
    r !== (t == null ? void 0 : t[i]) && (n = !0);
  }), n;
}
function Ii(e, t) {
  const n = Math.floor(t);
  return e >= n && e < n + 1;
}
function $i(e, t) {
  return Array.isArray(e) ? e.every((n) => be(n, t)) : be(e, t);
}
function Gn(e, t = {}, n = "value") {
  const r = typeof t == "string", i = r ? t : n, s = r ? {} : t;
  return e ? e && Le(e) && i in e ? {
    ...s,
    ...e
  } : {
    ...s,
    [i]: e
  } : {};
}
function Pi(e, t = {}, n = "value") {
  return _(() => Gn(e == null ? void 0 : e.value, M(t), n));
}
function nt(e) {
  return zr(e) ? e : qt(e);
}
function Un(e) {
  return [...new Set(e)];
}
function mt(e, t, n = !0) {
  const r = gt(e);
  return T(e) && T(t) && P(
    t,
    (i, s) => {
      const a = e == null ? void 0 : e[s];
      T(a) && T(i) ? n && Array.isArray(a) && Array.isArray(i) ? r[s] = gt(Un([...a, ...i])) : r[s] = mt(
        Array.isArray(a) ? { ...a } : a,
        i,
        n
      ) : r[s] = T(i) ? gt(i) : i;
    }
  ), r;
}
function Mi(e, t) {
  let n = e;
  return P(t, (r, i) => {
    n = n.replace(jn(`[${i}]`), ct(r));
  }), n;
}
function xi(e, t, n) {
  if (T(e) && T(t)) {
    if (n) {
      let r = {}, i = !1;
      return P(e, (s, a) => {
        !i && (n === a || n === s) ? (i = !0, r = mt(r, t)) : i ? r = mt(r, { [a]: s }) : r[a] = T(s) ? gt(s) : s;
      }), i ? r : mt(e, t);
    }
    if (T(t))
      return mt(e, t);
  }
  return gt(e);
}
function Li(e, t) {
  return Mn(e, t).join("");
}
function Bt(e) {
  return On(e).replace(/^([a-z])/, (t) => `${t.toUpperCase()}`);
}
function zt(e) {
  return e.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (t) => `${t.toLowerCase()}`).replace(/^[A-Z]/, (t) => t.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (t) => `-${t.toLowerCase()}`).replace(/[A-Z]/g, (t) => t.toLowerCase());
}
class Wn {
  constructor() {
    y(this, "cache", {});
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  get(t, n, r) {
    return this.getCacheItem(t, n).getCache(r ?? []);
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getAsync(t, n, r) {
    return await this.getCacheItem(t, n).getCacheAsync(r ?? []);
  }
  /**
   * Returns an instance of the object for working with the cache element.<br>
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   */
  getCacheItem(t, n) {
    return t in this.cache || (this.cache[t] = new Sn(n)), this.cache[t];
  }
}
const Ut = class Ut {
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name /<br>название кэша
   * @param callback function for the cache /<br>функция для кэша
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  static get(t, n, r) {
    return this.cache.get(t, n, r);
  }
};
y(Ut, "cache"), Ut.cache = new Wn();
let we = Ut;
const Ti = "cookie-block";
class Be {
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
y(Be, "storage", new Wt(Ti));
const xt = {};
class Hn {
  constructor(t) {
    y(this, "value");
    y(this, "options", {});
    if (this.name = t, t in he)
      return he[t];
    this.value = xt == null ? void 0 : xt[t], he[t] = this;
  }
  /**
   * Get data or update if none.<br>
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  get(t, n) {
    return this.value === void 0 && t && this.set(t, n), this.value;
  }
  /**
   * Updates cookie data.<br>
   * Обновляет данные cookie.
   * @param value value or function to change data /<br>значение или функция для изменения данных
   * @param options additional parameters /<br>дополнительные параметры
   */
  set(t, n) {
    this.value = ct(t), Object.assign(this.options, n), this.update();
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
    return ((t = this.options) == null ? void 0 : t.age) ?? Rt("cache") ?? 7 * 24 * 60 * 60;
  }
  /**
   * Update cookie data.<br>
   * Обновление данных cookie.
   */
  update() {
    var t, n;
    if (jt() && !Be.get()) {
      const r = String(this.value ?? "");
      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(r)}`,
        `max-age=${r === "" ? "-1" : this.getAge()}`,
        `SameSite=${((t = this.options) == null ? void 0 : t.sameSite) ?? "strict"}`,
        ...((n = this.options) == null ? void 0 : n.arguments) ?? []
      ].join("; ");
    }
  }
}
(() => {
  if (jt())
    for (const t of document.cookie.split(";")) {
      const [n, r] = t.trim().split("=");
      n && tt(r) && (xt[n] = Ht(r));
    }
})();
const he = {};
class Qt {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, n = "date", r = et.getLocation()) {
    y(this, "date");
    y(this, "hour24", !1);
    y(this, "watch");
    this.type = n, this.code = r, this.date = At(t);
  }
  /**
   * Returns an object for working with formatting.<br>
   * Возвращает объект для работы с форматированием.
   */
  getIntl() {
    return new Te(this.code);
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
    const n = this.getTimeZoneOffset();
    if (t === "minute")
      return n.toString();
    const r = n / 60 * -1;
    if (t === "hour")
      return this.getIntl().number(Math.trunc(r), { signDisplay: "always" });
    const i = this.getIntl().number(Math.trunc(r), {
      signDisplay: "always",
      minimumIntegerDigits: 2
    }), s = r.toString().match(/.\d+/) ? "30" : "00";
    return t === "RFC" ? `${i}${s}` : `${i}:${s}`;
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
  locale(t = this.type, n) {
    return this.getIntl().date(
      this.date,
      t,
      n,
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
    const n = new Qt(this.date, this.type, "en-GB"), r = [];
    let i;
    return n.setHour24(!0), this.type === "hour-minute" ? i = n.locale(this.type, {
      year: "numeric",
      month: "2-digit",
      hour12: !1
    }) : (["full", "datetime", "date", "year-month", "year", "month", "day"].indexOf(this.type) !== -1 && (r.push(n.localeYear()), r.push(n.localeMonth("2-digit"))), ["full", "datetime", "date", "year", "month", "day"].indexOf(this.type) !== -1 && r.push(n.localeDay("2-digit")), ["full", "datetime", "time", "hour", "minute", "second"].indexOf(this.type) !== -1 && (i = n.locale("time"))), `${r.join("-")}${i ? `T${i}${t ? n.getTimeZone() : ""}` : ""}`;
  }
  /**
   * Change the date completely.<br>
   * Изменять полностью дату.
   * @param value an integer value representing the number /<br>
   * целочисленное значение, представляющее число
   */
  setDate(t) {
    return this.date = At(t), this.update(), this;
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
    const t = this.date.getDay(), n = this.getFirstDayCode();
    return this.moveByDay(
      (n === 6 ? -1 : n) - t
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
const ot = class ot {
  /**
   * Get data from hash.<br>
   * Получение данных из хэша.
   * @param name variable names /<br>названия переменных
   * @param defaultValue value or function to change data /<br>значение или функция для изменения данных
   */
  static get(t, n) {
    return !(t in this.hash) && n && this.set(t, n), this.hash[t];
  }
  /**
   * Change data in hash.<br>
   * Изменение данных в хэше.
   * @param name variable names /<br>названия переменных
   * @param callback value or function to change data /<br>значение или функция для изменения данных
   */
  static set(t, n) {
    var i;
    const r = ct(n);
    r !== ((i = this.hash) == null ? void 0 : i[t]) && (this.hash[t] = r, this.update());
  }
  /**
   * Adding an event when data is changed.<br>
   * Добавление события при изменении данных.
   * @param name variable names /<br>названия переменных
   * @param callback the function is called when the data is changed /<br>функция вызывается при изменении данных
   */
  static addWatch(t, n) {
    t in this.watch ? this.watch[t].push(n) : this.watch = { [t]: [n] };
  }
  /**
   * Obtaining data from the URL string.<br>
   * Получение данных из строки URL.
   */
  static getLocation() {
    const t = {};
    return location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...n) => (t[n[1]] = Ht(n[2]), "")
    ), t;
  }
  /**
   * Update hash string in URL.<br>
   * Обновление строки хэша в URL.
   */
  static update() {
    this.block = !0;
    const t = P(
      this.hash,
      (n, r) => `${r}=${encodeURIComponent(String(n))}`
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
    P(this.watch, (n, r) => {
      var i;
      ((i = this.hash) == null ? void 0 : i[r]) !== (t == null ? void 0 : t[r]) && n.forEach((s) => s(t[r]));
    });
  }
};
y(ot, "hash", {}), y(ot, "watch", {}), y(ot, "block", !1), jt() && (ot.reload(), addEventListener("hashchange", () => ot.reload()));
let vt = ot;
class J {
  /**
   * Getting the translation text by its code.<br>
   * Получение текста перевода по его коду.
   * @param name code name /<br>название кода
   */
  static async get(t) {
    var r;
    const n = this.getName(t);
    return n in this.data ? this.data[n] : (Vt.isLocalhost() || await this.add(t), ((r = this.data) == null ? void 0 : r[n]) ?? t);
  }
  /**
   * Getting the translation text by its code (Sync).<br>
   * Получение текста перевода по его коду (Sync).
   * @param name code name /<br>название кода
   */
  static getSync(t) {
    const n = this.getName(t);
    return n in this.data ? this.data[n] : t;
  }
  /**
   * Getting a list of translations by an array of text codes.<br>
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static async getList(t) {
    return new Promise((n) => {
      const r = {};
      let i = 0;
      for (const s of t)
        this.get(s).then((a) => {
          r[s] = a, ++i >= t.length && n(r);
        });
    });
  }
  /**
   * Added a list of translated texts.<br>
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations /<br>список кодов для получения переводов
   */
  static add(t) {
    return new Promise((n) => {
      this.cache.push(...Ve(t)), this.resolveList.push(n), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.timeout = void 0, this.make().then(() => {
          this.resolveList.forEach((r) => r()), this.resolveList = [];
        });
      }, 160);
    });
  }
  /**
   * Getting the full title for translation.<br>
   * Получение полного названия для перевода.
   * @param name code name /<br>название кода
   */
  static getName(t) {
    return `${et.getLocation()}-${t}`;
  }
  /**
   * Getting the list of translations from the server.<br>
   * Получение списка переводов с сервера.
   */
  static async getResponse() {
    const t = Vt.isLocalhost() ? this.urlLocalhost : this.url, n = await Vt.response({
      path: t,
      request: {
        list: this.cache
      }
    });
    return (n == null ? void 0 : n.data) ?? {};
  }
  /**
   * Adding translation data from the server.<br>
   * Добавление данных по переводу с сервера.
   */
  static async make() {
    const t = await this.getResponse();
    this.cache.forEach((n) => {
      this.data[this.getName(n)] = (t == null ? void 0 : t[n]) ?? "";
    }), this.cache = [];
  }
}
y(J, "url", Rt("apiTranslate")), y(J, "urlLocalhost", "translate.json"), y(J, "data", {}), y(J, "cache", []), y(J, "resolveList", []), y(J, "timeout");
var W = /* @__PURE__ */ ((e) => (e.new = "new", e.init = "init", e.end = "end", e))(W || {});
const rn = "d-mutation", Vi = zt(Rt("DESIGNS_MAIN", "design")), ji = zt(Rt("DESIGNS_GLOBAL", "ui")), at = "__UI_PROJECT";
class U {
  /**
   * Returns the names of keys indicating the design name.<br>
   * Возвращает названия ключей, обозначающих название дизайна.
   */
  static getKeyUi() {
    return ji;
  }
  /**
   * Returns the names of keys indicating that the element is being processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент находится в обработке.
   */
  static getKeyInit() {
    return W.init;
  }
  /**
   * Returns the names of keys indicating that the element has already been processed.<br>
   * Возвращает названия ключей, обозначающих, что элемент уже обработан.
   */
  static getKeyEnd() {
    return W.end;
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
    return `${rn}--${this.getKeyInit()}`;
  }
  /**
   * Returns the names of attributes indicating that the element is being processed.<br>
   * Возвращает названия атрибутов, обозначающих, что элемент уже обработан.
   */
  static getClassEnd() {
    return `${rn}--${this.getKeyEnd()}`;
  }
  /**
   * Initial stage, start of searching for all unprocessed elements.<br>
   * Начальный этап, начало поиска всех необработанных элементов.
   * @param initial initial element for search /<br>начальный элемент для поиска
   * @param status status name /<br>название статуса
   */
  static find(t = document.body, n = W.new) {
    const r = [];
    if ("querySelector" in t) {
      const i = this.getSelectorByStatus(n);
      t.querySelector(i) && t.querySelectorAll(i).forEach((s) => r.push(s));
    }
    return r;
  }
  /**
   * Checks if the parent element is in processing.<br>
   * Проверяет, находится ли родительский элемент в обработке.
   * @param element tracking element /<br>элемент слежения
   */
  static closestInit(t) {
    var n, r;
    return !!((n = t == null ? void 0 : t.closest) != null && n.call(t, this.getSelectorInit()) || !((r = t == null ? void 0 : t.closest) != null && r.call(t, "body")));
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
      case W.init:
        return `${this.getSelectorInit()}, ${this.getSelectorEnd()}`;
      case W.end:
        return this.getSelectorEnd();
      default:
        return this.getSelectorNew();
    }
  }
}
class B {
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
    return at in window ? window[at] : {};
  }
  /**
   * Returns the global project by its name.<br>
   * Возвращает глобальный проект по его названию.
   * @param name component identifier /<br>идентификатор компонента
   */
  static getComponentGlobalItem(t) {
    var n;
    if (at in window)
      return ((n = window[at]) == null ? void 0 : n[t]) ?? void 0;
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
  static addFunction(t, n) {
    this.isFunction(t) || (this.functions[t] = n);
  }
  /**
   * Adds a new class.<br>
   * Добавляет новый класс.
   * @param name class name /<br>название класса
   * @param item new class /<br>новый класс
   */
  static addClass(t, n) {
    this.isClass(t) || (this.classes[t] = n);
  }
  /**
   * Adds a new component.<br>
   * Добавляет новый компонент.
   * @param name component name /<br>название компонента
   * @param component new component /<br>новый компонент
   */
  static addComponent(t, n) {
    this.isComponent(t) || (this.components[t] = n);
  }
  /**
   * Adding a new function to a list.<br>
   * Добавление новой функции в список.
   * @param functions list of functions to be added /<br>список добавляемой функции
   */
  static addFunctionList(t) {
    P(t, (n, r) => {
      this.addFunction(r, n);
    });
  }
  /**
   * Adding a new class to a list.<br>
   * Добавление нового класса в список.
   * @param classes list of classes to be added /<br>список добавляемого класса
   */
  static addClassList(t) {
    P(t, (n, r) => {
      this.addClass(r, n);
    });
  }
  /**
   * Adding a new component to a list.<br>
   * Добавление нового компонента в список.
   * @param components list of components to be added /<br>список добавляемого компонента
   */
  static addComponentList(t) {
    P(t, (n, r) => {
      this.addComponent(r, n);
    });
  }
  /**
   * Registers a component to track parameter changes.<br>
   * Регистрирует компонент для слежения за изменением параметра.
   * @param name component identifier /<br>идентификатор компонента
   * @param item element instance /<br>экземпляр элемента
   * @param callback function called upon change /<br>вызываемая функция при изменении
   */
  static registrationComponent(t, n, r) {
    if (this.compItems[t] = {
      item: n,
      callback: r
    }, t in this.compCaching) {
      const i = this.compCaching[t];
      return delete this.compCaching[t], i;
    }
  }
  /**
   * Calls data update.<br>
   * Вызывает обновление данных.
   * @param name component identifier /<br>идентификатор компонента
   * @param props component property /<br>свойство компонента
   */
  static comp(t, n) {
    t in this.compItems ? this.compItems[t].callback(n) : this.compCaching[t] = n;
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
y(B, "functions", {}), y(B, "classes", {}), y(B, "components", {}), y(B, "compItems", {}), y(B, "compCaching", {});
class Kn {
  /**
   * Constructor
   * @param element tracking element /<br>элемент слежения
   */
  constructor(t) {
    y(this, "id");
    y(this, "componentName");
    y(this, "static");
    y(this, "slots", {});
    y(this, "props", {});
    y(this, "callback");
    var n;
    this.element = t, this.id = An(t), this.componentName = ((n = t.dataset) == null ? void 0 : n[U.getKeyUi()]) ?? "component", this.static = W.new, this.slots = this.initSlots(), this.setStatus(W.init), this.element.classList.add(this.getClassMain());
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
    const t = Bt(this.componentName);
    return B.isComponent(t) ? t : Bt(`${Vi}-${this.componentName}`);
  }
  /**
   * Returns the name of the design.<br>
   * Возвращает название дизайна.
   */
  getDesign() {
    return zt(this.getComponentName()).replace(/-.*?$/, "");
  }
  /**
   * Returns the name of the main class.<br>
   * Возвращает название главного класса.
   */
  getClassMain() {
    return `${this.getDesign()}-init`;
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
      case W.init:
        this.element.classList.add(U.getClassInit());
        break;
      case W.end:
        this.element.classList.add(U.getClassEnd());
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
  registration(t, n) {
    const r = B.registrationComponent(
      this.getId(),
      t,
      (i) => {
        tt(i) && this.setProps(i).update();
      }
    );
    return r && this.setProps(r), this.callback = n, this;
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
    return B.removeComponent(this.getId()), this;
  }
  /**
   * Returns data from attributes.<br>
   * Возвращает данные из атрибутов.
   */
  getDataset() {
    const t = {};
    return P(this.element.dataset, (n, r) => {
      r !== U.getKeyUi() && (t[r] = Ht(n));
    }), t;
  }
  /**
   * Changes the property.<br>
   * Изменяет свойство.
   * @param props property values /<br>значения свойство
   */
  setProps(t) {
    return tt(t) && P(t, (n, r) => {
      r === "slots" ? this.setSlots(n) : this.props[r] = n;
    }), this;
  }
  /**
   * Data updates for the slot.<br>
   * Обновления данных для слота.
   * @param slots list of slots for update /<br>список слотов для обновления
   */
  setSlots(t) {
    return tt(t) && P(t, (n, r) => {
      this.slots[r] = this.initChildrenList(Ve(n));
    }), this;
  }
  /**
   * Initializes the data list for the slot.<br>
   * Инициализирует список данных для слота.
   */
  initSlots() {
    const t = {}, n = [];
    for (const r of this.element.children) {
      const i = r.getAttribute("data-slot");
      if (i)
        t[i] = this.initChildrenList(r.childNodes);
      else {
        const s = this.initChildren(r);
        s && ("default" in t ? t.default.push(s) : t.default = [s]);
      }
      n.push(r);
    }
    for (const r of n)
      this.element.removeChild(r);
    return t;
  }
  /**
   * Initializes the list of child elements.<br>
   * Инициализирует список дочерних элементов.
   * @param children list of child elements /<br>список дочерних элементов
   */
  initChildrenList(t) {
    const n = [];
    for (const r of t) {
      const i = this.initChildren(r);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Initializes data for the child element.<br>
   * Инициализирует данные для дочернего элемента.
   * @param element child element /<br>дочерний элемент
   */
  initChildren(t) {
    var r, i;
    if (t instanceof HTMLElement)
      return {
        tag: t.nodeName,
        attributes: {
          ...Vn(t),
          innerHTML: (t == null ? void 0 : t.innerHTML) ?? ""
        }
      };
    const n = (i = (r = t == null ? void 0 : t.textContent) == null ? void 0 : r.trim) == null ? void 0 : i.call(r);
    if (tt(n))
      return n;
    if (xe(t) && tt(t))
      return t;
  }
  /**
   * Removal of all classes related to the status.<br>
   * Удаление всех классов, относящихся к статусу.
   */
  removeClasses() {
    return this.element.classList.remove(U.getClassInit()), this.element.classList.remove(U.getClassEnd()), this;
  }
}
class qn {
  constructor() {
    y(this, "items", []);
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
    var n;
    return !!((n = t.dataset) != null && n[U.getKeyUi()]);
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
    var n;
    return (n = this.items) == null ? void 0 : n[this.find(t)];
  }
  /**
   * Adding an element for processing.<br>
   * Добавление элемента для обработки.
   * @param element tracking element /<br>элемент слежения
   */
  add(t) {
    return this.isComponent(t) && !this.is(t) && !U.closestInit(t) && this.items.push(new Kn(t)), this;
  }
  /**
   * Removes an element from the list.<br>
   * Удаляет элемент из списка.
   * @param element tracking element /<br>элемент слежения
   */
  remove(t) {
    const n = this.find(t);
    return n >= 0 && (this.items[n].disconnect(), this.items.splice(n, 1)), this;
  }
  /**
   * Searching for an element in the list.<br>
   * Поиск элемента в списке.
   * @param element tracking element /<br>элемент слежения
   */
  find(t) {
    return this.items.findIndex((n) => n.is(t));
  }
}
class Yn {
  /**
   * Constructor
   * @param addCallback function for adding an element /<br>функция для добавления элемента
   * @param removeCallback function for removing an element /<br>функция для удаления элемента
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, n) {
    y(this, "mutation");
    this.addCallback = t, this.removeCallback = n;
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
    t.forEach((n) => {
      n.removedNodes.forEach((r) => this.removeCallback(r)), n.addedNodes.forEach((r) => this.addCallback(r));
    });
  }
}
class zn {
  /**
   * Constructor
   * @param items object for working with elements /<br>объект для работы с элементами
   * @param update function for updating data /<br>функция обновления данных
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t, n) {
    y(this, "mutation");
    this.items = t, this.update = n;
  }
  /**
   * Start observing the changes.<br>
   * Старт наблюдения за изменениями.
   */
  start() {
    this.mutation && this.end();
    const t = this.items.get();
    if (t.length > 0) {
      this.mutation = new MutationObserver((n) => this.callback(n));
      for (const n of t)
        this.mutation.observe(n.getElement(), {
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
    t.forEach((n) => {
      n.type === "attributes" && this.update(n.target);
    });
  }
}
class Bi {
  /**
   * Constructor
   */
  constructor(t) {
    y(this, "mutationGlobal");
    y(this, "mutationItems");
    y(this, "items", new qn());
    this.callback = t, this.mutationGlobal = new Yn(
      (n) => this.add(n),
      (n) => this.remove(n)
    ), this.mutationItems = new zn(
      this.items,
      (n) => {
        var r;
        return (r = this.items.getItem(n)) == null ? void 0 : r.update();
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
    U.find(t).forEach((n) => this.items.add(n));
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
    U.find(t, W.init).forEach((n) => this.items.remove(n));
  }
}
function Fi() {
  return Qn().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Qn() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Gi = typeof Proxy == "function", Ui = "devtools-plugin:setup", Wi = "plugin:settings:set";
let dt, Ce;
function Hi() {
  var e;
  return dt !== void 0 || (typeof window < "u" && window.performance ? (dt = !0, Ce = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (dt = !0, Ce = globalThis.perf_hooks.performance) : dt = !1), dt;
}
function Ki() {
  return Hi() ? Ce.now() : Date.now();
}
class qi {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const a in t.settings) {
        const u = t.settings[a];
        r[a] = u.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const a = localStorage.getItem(i), u = JSON.parse(a);
      Object.assign(s, u);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(a) {
        try {
          localStorage.setItem(i, JSON.stringify(a));
        } catch {
        }
        s = a;
      },
      now() {
        return Ki();
      }
    }, n && n.on(Wi, (a, u) => {
      a === this.plugin.id && this.fallbacks.setSettings(u);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, u) => this.target ? this.target.on[u] : (...c) => {
        this.onQueue.push({
          method: u,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, u) => this.target ? this.target[u] : u === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(u) ? (...c) => (this.targetQueue.push({
        method: u,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[u](...c)) : (...c) => new Promise((h) => {
        this.targetQueue.push({
          method: u,
          args: c,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Jn(e, t) {
  const n = e, r = Qn(), i = Fi(), s = Gi && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(Ui, e, t);
  else {
    const a = s ? new qi(n, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Z = typeof window < "u";
function Zn(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const k = Object.assign;
function fe(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = F(i) ? i.map(e) : e(i);
  }
  return n;
}
const St = () => {
}, F = Array.isArray;
function w(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Yi = /\/$/, zi = (e) => e.replace(Yi, "");
function de(e, t, n = "/") {
  let r, i = {}, s = "", a = "";
  const u = t.indexOf("#");
  let c = t.indexOf("?");
  return u < c && u >= 0 && (c = -1), c > -1 && (r = t.slice(0, c), s = t.slice(c + 1, u > -1 ? u : t.length), i = e(s)), u > -1 && (r = r || t.slice(0, u), a = t.slice(u, t.length)), r = Zi(r ?? t, n), {
    fullPath: r + (s && "?") + s + a,
    path: r,
    query: i,
    hash: a
  };
}
function Qi(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sn(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function on(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && rt(t.matched[r], n.matched[i]) && Xn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function rt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Ji(e[n], t[n]))
      return !1;
  return !0;
}
function Ji(e, t) {
  return F(e) ? an(e, t) : F(t) ? an(t, e) : e === t;
}
function an(e, t) {
  return F(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Zi(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return w(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let s = n.length - 1, a, u;
  for (a = 0; a < r.length; a++)
    if (u = r[a], u !== ".")
      if (u === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + r.slice(a - (a === r.length ? 1 : 0)).join("/");
}
var yt;
(function(e) {
  e.pop = "pop", e.push = "push";
})(yt || (yt = {}));
var ut;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ut || (ut = {}));
const pe = "";
function tr(e) {
  if (!e)
    if (Z) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), zi(e);
}
const Xi = /^[^#]+#/;
function er(e, t) {
  return e.replace(Xi, "#") + t;
}
function ts(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Jt = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function es(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          w(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        w(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) {
      process.env.NODE_ENV !== "production" && w(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = ts(i, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function cn(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ne = /* @__PURE__ */ new Map();
function ns(e, t) {
  Ne.set(e, t);
}
function rs(e) {
  const t = Ne.get(e);
  return Ne.delete(e), t;
}
let is = () => location.protocol + "//" + location.host;
function nr(e, t) {
  const { pathname: n, search: r, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let u = i.includes(e.slice(s)) ? e.slice(s).length : 1, c = i.slice(u);
    return c[0] !== "/" && (c = "/" + c), sn(c, "");
  }
  return sn(n, e) + r + i;
}
function ss(e, t, n, r) {
  let i = [], s = [], a = null;
  const u = ({ state: f }) => {
    const p = nr(e, location), E = n.value, D = t.value;
    let S = 0;
    if (f) {
      if (n.value = p, t.value = f, a && a === E) {
        a = null;
        return;
      }
      S = D ? f.position - D.position : 0;
    } else
      r(p);
    i.forEach((b) => {
      b(n.value, E, {
        delta: S,
        type: yt.pop,
        direction: S ? S > 0 ? ut.forward : ut.back : ut.unknown
      });
    });
  };
  function c() {
    a = n.value;
  }
  function h(f) {
    i.push(f);
    const p = () => {
      const E = i.indexOf(f);
      E > -1 && i.splice(E, 1);
    };
    return s.push(p), p;
  }
  function o() {
    const { history: f } = window;
    f.state && f.replaceState(k({}, f.state, { scroll: Jt() }), "");
  }
  function l() {
    for (const f of s)
      f();
    s = [], window.removeEventListener("popstate", u), window.removeEventListener("beforeunload", o);
  }
  return window.addEventListener("popstate", u), window.addEventListener("beforeunload", o, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: h,
    destroy: l
  };
}
function un(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Jt() : null
  };
}
function os(e) {
  const { history: t, location: n } = window, r = {
    value: nr(e, n)
  }, i = { value: t.state };
  i.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(c, h, o) {
    const l = e.indexOf("#"), f = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + c : is() + e + c;
    try {
      t[o ? "replaceState" : "pushState"](h, "", f), i.value = h;
    } catch (p) {
      process.env.NODE_ENV !== "production" ? w("Error with push/replace State", p) : console.error(p), n[o ? "replace" : "assign"](f);
    }
  }
  function a(c, h) {
    const o = k({}, t.state, un(
      i.value.back,
      // keep back and forward entries but override current position
      c,
      i.value.forward,
      !0
    ), h, { position: i.value.position });
    s(c, o, !0), r.value = c;
  }
  function u(c, h) {
    const o = k(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      i.value,
      t.state,
      {
        forward: c,
        scroll: Jt()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && w(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(o.current, o, !0);
    const l = k({}, un(r.value, c, null), { position: o.position + 1 }, h);
    s(c, l, !1), r.value = c;
  }
  return {
    location: r,
    state: i,
    push: u,
    replace: a
  };
}
function rr(e) {
  e = tr(e);
  const t = os(e), n = ss(e, t.state, t.location, t.replace);
  function r(s, a = !0) {
    a || n.pauseListeners(), history.go(s);
  }
  const i = k({
    // it's overridden right after
    location: "",
    base: e,
    go: r,
    createHref: er.bind(null, e)
  }, t, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), i;
}
function as(e = "") {
  let t = [], n = [pe], r = 0;
  e = tr(e);
  function i(u) {
    r++, r !== n.length && n.splice(r), n.push(u);
  }
  function s(u, c, { direction: h, delta: o }) {
    const l = {
      direction: h,
      delta: o,
      type: yt.pop
    };
    for (const f of t)
      f(u, c, l);
  }
  const a = {
    // rewritten by Object.defineProperty
    location: pe,
    // TODO: should be kept in queue
    state: {},
    base: e,
    createHref: er.bind(null, e),
    replace(u) {
      n.splice(r--, 1), i(u);
    },
    push(u, c) {
      i(u);
    },
    listen(u) {
      return t.push(u), () => {
        const c = t.indexOf(u);
        c > -1 && t.splice(c, 1);
      };
    },
    destroy() {
      t = [], n = [pe], r = 0;
    },
    go(u, c = !0) {
      const h = this.location, o = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        u < 0 ? ut.back : ut.forward
      );
      r = Math.max(0, Math.min(r + u, n.length - 1)), c && s(this.location, h, {
        direction: o,
        delta: u
      });
    }
  };
  return Object.defineProperty(a, "location", {
    enumerable: !0,
    get: () => n[r]
  }), a;
}
function cs(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && w(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), rr(e);
}
function us(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ir(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Q = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Oe = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Se;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Se || (Se = {}));
const ls = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${fs(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Et(e, t) {
  return process.env.NODE_ENV !== "production" ? k(new Error(ls[e](t)), {
    type: e,
    [Oe]: !0
  }, t) : k(new Error(), {
    type: e,
    [Oe]: !0
  }, t);
}
function q(e, t) {
  return e instanceof Error && Oe in e && (t == null || !!(e.type & t));
}
const hs = ["params", "query", "hash"];
function fs(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of hs)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ln = "[^/]+?", ds = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, ps = /[.+*?^${}()[\]/\\]/g;
function ms(e, t) {
  const n = k({}, ds, t), r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const h of e) {
    const o = h.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !h.length && (i += "/");
    for (let l = 0; l < h.length; l++) {
      const f = h[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        l || (i += "/"), i += f.value.replace(ps, "\\$&"), p += 40;
      else if (f.type === 1) {
        const { value: E, repeatable: D, optional: S, regexp: b } = f;
        s.push({
          name: E,
          repeatable: D,
          optional: S
        });
        const N = b || ln;
        if (N !== ln) {
          p += 10;
          try {
            new RegExp(`(${N})`);
          } catch (j) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${N}): ` + j.message);
          }
        }
        let I = D ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
        l || (I = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        S && h.length < 2 ? `(?:/${I})` : "/" + I), S && (I += "?"), i += I, p += 20, S && (p += -8), D && (p += -20), N === ".*" && (p += -50);
      }
      o.push(p);
    }
    r.push(o);
  }
  if (n.strict && n.end) {
    const h = r.length - 1;
    r[h][r[h].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && (i += "(?:/|$)");
  const a = new RegExp(i, n.sensitive ? "" : "i");
  function u(h) {
    const o = h.match(a), l = {};
    if (!o)
      return null;
    for (let f = 1; f < o.length; f++) {
      const p = o[f] || "", E = s[f - 1];
      l[E.name] = p && E.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function c(h) {
    let o = "", l = !1;
    for (const f of e) {
      (!l || !o.endsWith("/")) && (o += "/"), l = !1;
      for (const p of f)
        if (p.type === 0)
          o += p.value;
        else if (p.type === 1) {
          const { value: E, repeatable: D, optional: S } = p, b = E in h ? h[E] : "";
          if (F(b) && !D)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const N = F(b) ? b.join("/") : b;
          if (!N)
            if (S)
              f.length < 2 && (o.endsWith("/") ? o = o.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          o += N;
        }
    }
    return o || "/";
  }
  return {
    re: a,
    score: r,
    keys: s,
    parse: u,
    stringify: c
  };
}
function gs(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r)
      return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function vs(e, t) {
  let n = 0;
  const r = e.score, i = t.score;
  for (; n < r.length && n < i.length; ) {
    const s = gs(r[n], i[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (hn(r))
      return 1;
    if (hn(i))
      return -1;
  }
  return i.length - r.length;
}
function hn(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ys = {
  type: 0,
  value: ""
}, Es = /[a-zA-Z0-9_]/;
function _s(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[ys]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${h}": ${p}`);
  }
  let n = 0, r = n;
  const i = [];
  let s;
  function a() {
    s && i.push(s), s = [];
  }
  let u = 0, c, h = "", o = "";
  function l() {
    h && (n === 0 ? s.push({
      type: 0,
      value: h
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: h,
      regexp: o,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), h = "");
  }
  function f() {
    h += c;
  }
  for (; u < e.length; ) {
    if (c = e[u++], c === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (h && l(), a()) : c === ":" ? (l(), n = 1) : f();
        break;
      case 4:
        f(), n = r;
        break;
      case 1:
        c === "(" ? n = 2 : Es.test(c) ? f() : (l(), n = 0, c !== "*" && c !== "?" && c !== "+" && u--);
        break;
      case 2:
        c === ")" ? o[o.length - 1] == "\\" ? o = o.slice(0, -1) + c : n = 3 : o += c;
        break;
      case 3:
        l(), n = 0, c !== "*" && c !== "?" && c !== "+" && u--, o = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), l(), a(), i;
}
function bs(e, t, n) {
  const r = ms(_s(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const a of r.keys)
      s.has(a.name) && w(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(a.name);
  }
  const i = k(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function sr(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = pn({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(o) {
    return r.get(o);
  }
  function s(o, l, f) {
    const p = !f, E = ws(o);
    process.env.NODE_ENV !== "production" && Ss(E, l), E.aliasOf = f && f.record;
    const D = pn(t, o), S = [
      E
    ];
    if ("alias" in o) {
      const I = typeof o.alias == "string" ? [o.alias] : o.alias;
      for (const j of I)
        S.push(k({}, E, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: f ? f.record.components : E.components,
          path: j,
          // we might be the child of an alias
          aliasOf: f ? f.record : E
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let b, N;
    for (const I of S) {
      const { path: j } = I;
      if (l && j[0] !== "/") {
        const it = l.record.path, z = it[it.length - 1] === "/" ? "" : "/";
        I.path = l.record.path + (j && z + j);
      }
      if (process.env.NODE_ENV !== "production" && I.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (b = bs(I, l, D), process.env.NODE_ENV !== "production" && l && j[0] === "/" && As(b, l), f ? (f.alias.push(b), process.env.NODE_ENV !== "production" && Os(f, b)) : (N = N || b, N !== b && N.alias.push(b), p && o.name && !dn(b) && a(o.name)), E.children) {
        const it = E.children;
        for (let z = 0; z < it.length; z++)
          s(it[z], b, f && f.children[z]);
      }
      f = f || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && c(b);
    }
    return N ? () => {
      a(N);
    } : St;
  }
  function a(o) {
    if (ir(o)) {
      const l = r.get(o);
      l && (r.delete(o), n.splice(n.indexOf(l), 1), l.children.forEach(a), l.alias.forEach(a));
    } else {
      const l = n.indexOf(o);
      l > -1 && (n.splice(l, 1), o.record.name && r.delete(o.record.name), o.children.forEach(a), o.alias.forEach(a));
    }
  }
  function u() {
    return n;
  }
  function c(o) {
    let l = 0;
    for (; l < n.length && vs(o, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (o.record.path !== n[l].record.path || !or(o, n[l])); )
      l++;
    n.splice(l, 0, o), o.record.name && !dn(o) && r.set(o.record.name, o);
  }
  function h(o, l) {
    let f, p = {}, E, D;
    if ("name" in o && o.name) {
      if (f = r.get(o.name), !f)
        throw Et(1, {
          location: o
        });
      if (process.env.NODE_ENV !== "production") {
        const N = Object.keys(o.params || {}).filter((I) => !f.keys.find((j) => j.name === I));
        N.length && w(`Discarded invalid param(s) "${N.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      D = f.record.name, p = k(
        // paramsFromLocation is a new object
        fn(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          f.keys.filter((N) => !N.optional).map((N) => N.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        o.params && fn(o.params, f.keys.map((N) => N.name))
      ), E = f.stringify(p);
    } else if ("path" in o)
      E = o.path, process.env.NODE_ENV !== "production" && !E.startsWith("/") && w(`The Matcher cannot resolve relative paths but received "${E}". Unless you directly called \`matcher.resolve("${E}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), f = n.find((N) => N.re.test(E)), f && (p = f.parse(E), D = f.record.name);
    else {
      if (f = l.name ? r.get(l.name) : n.find((N) => N.re.test(l.path)), !f)
        throw Et(1, {
          location: o,
          currentLocation: l
        });
      D = f.record.name, p = k({}, l.params, o.params), E = f.stringify(p);
    }
    const S = [];
    let b = f;
    for (; b; )
      S.unshift(b.record), b = b.parent;
    return {
      name: D,
      path: E,
      params: p,
      matched: S,
      meta: Ns(S)
    };
  }
  return e.forEach((o) => s(o)), { addRoute: s, resolve: h, removeRoute: a, getRoutes: u, getRecordMatcher: i };
}
function fn(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function ws(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Cs(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Cs(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const r in e.components)
      t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function dn(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Ns(e) {
  return e.reduce((t, n) => k(t, n.meta), {});
}
function pn(e, t) {
  const n = {};
  for (const r in e)
    n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ae(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Os(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ae.bind(null, n)))
      return w(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ae.bind(null, n)))
      return w(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Ss(e, t) {
  t && t.record.name && !e.name && !e.path && w(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function As(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ae.bind(null, n)))
      return w(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function or(e, t) {
  return t.children.some((n) => n === e || or(e, n));
}
const ar = /#/g, ks = /&/g, Ds = /\//g, Rs = /=/g, Is = /\?/g, cr = /\+/g, $s = /%5B/g, Ps = /%5D/g, ur = /%5E/g, Ms = /%60/g, lr = /%7B/g, xs = /%7C/g, hr = /%7D/g, Ls = /%20/g;
function Fe(e) {
  return encodeURI("" + e).replace(xs, "|").replace($s, "[").replace(Ps, "]");
}
function Ts(e) {
  return Fe(e).replace(lr, "{").replace(hr, "}").replace(ur, "^");
}
function ke(e) {
  return Fe(e).replace(cr, "%2B").replace(Ls, "+").replace(ar, "%23").replace(ks, "%26").replace(Ms, "`").replace(lr, "{").replace(hr, "}").replace(ur, "^");
}
function Vs(e) {
  return ke(e).replace(Rs, "%3D");
}
function js(e) {
  return Fe(e).replace(ar, "%23").replace(Is, "%3F");
}
function Bs(e) {
  return e == null ? "" : js(e).replace(Ds, "%2F");
}
function kt(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && w(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function fr(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(cr, " "), a = s.indexOf("="), u = kt(a < 0 ? s : s.slice(0, a)), c = a < 0 ? null : kt(s.slice(a + 1));
    if (u in t) {
      let h = t[u];
      F(h) || (h = t[u] = [h]), h.push(c);
    } else
      t[u] = c;
  }
  return t;
}
function De(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Vs(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (F(r) ? r.map((s) => s && ke(s)) : [r && ke(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function Fs(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = F(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const Zt = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Re = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), It = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Xt = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Ft = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ct() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const i = e.indexOf(r);
      i > -1 && e.splice(i, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function dr(e, t, n) {
  const r = () => {
    e[t].delete(n);
  };
  Qr(r), Jr(r), Zr(() => {
    e[t].add(n);
  }), e[t].add(n);
}
function Gs(e) {
  if (process.env.NODE_ENV !== "production" && !Yt()) {
    w("getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function");
    return;
  }
  const t = Y(
    Zt,
    // to avoid warning
    {}
  ).value;
  if (!t) {
    process.env.NODE_ENV !== "production" && w("No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
    return;
  }
  dr(t, "leaveGuards", e);
}
function Us(e) {
  if (process.env.NODE_ENV !== "production" && !Yt()) {
    w("getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function");
    return;
  }
  const t = Y(
    Zt,
    // to avoid warning
    {}
  ).value;
  if (!t) {
    process.env.NODE_ENV !== "production" && w("No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
    return;
  }
  dr(t, "updateGuards", e);
}
function X(e, t, n, r, i) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, u) => {
    const c = (l) => {
      l === !1 ? u(Et(4, {
        from: n,
        to: t
      })) : l instanceof Error ? u(l) : us(l) ? u(Et(2, {
        from: t,
        to: l
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[i] === s && typeof l == "function" && s.push(l), a());
    }, h = e.call(r && r.instances[i], t, n, process.env.NODE_ENV !== "production" ? Ws(c, t, n) : c);
    let o = Promise.resolve(h);
    if (e.length < 3 && (o = o.then(c)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof h == "object" && "then" in h)
        o = o.then((f) => c._called ? f : (w(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (h !== void 0 && !c._called) {
        w(l), u(new Error("Invalid navigation guard"));
        return;
      }
    }
    o.catch((l) => u(l));
  });
}
function Ws(e, t, n) {
  let r = 0;
  return function() {
    r++ === 1 && w(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function me(e, t, n, r) {
  const i = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && w(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let u = s.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!u || typeof u != "object" && typeof u != "function")
          throw w(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(u)}".`), new Error("Invalid route component");
        if ("then" in u) {
          w(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = u;
          u = () => c;
        } else
          u.__asyncLoader && // warn only once per component
          !u.__warnedDefineAsync && (u.__warnedDefineAsync = !0, w(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[a]))
        if (Hs(u)) {
          const h = (u.__vccOpts || u)[t];
          h && i.push(X(h, n, r, s, a));
        } else {
          let c = u();
          process.env.NODE_ENV !== "production" && !("catch" in c) && (w(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), i.push(() => c.then((h) => {
            if (!h)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const o = Zn(h) ? h.default : h;
            s.components[a] = o;
            const f = (o.__vccOpts || o)[t];
            return f && X(f, n, r, s, a)();
          }));
        }
    }
  }
  return i;
}
function Hs(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ks(e) {
  return e.matched.every((t) => t.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(e.matched.map((t) => t.components && Promise.all(Object.keys(t.components).reduce((n, r) => {
    const i = t.components[r];
    return typeof i == "function" && !("displayName" in i) && n.push(i().then((s) => {
      if (!s)
        return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${t.path}". Ensure you passed a function that returns a promise.`));
      const a = Zn(s) ? s.default : s;
      t.components[r] = a;
    })), n;
  }, [])))).then(() => e);
}
function Ie(e) {
  const t = Y(It), n = Y(Xt), r = _(() => t.resolve(Ot(e.to))), i = _(() => {
    const { matched: c } = r.value, { length: h } = c, o = c[h - 1], l = n.matched;
    if (!o || !l.length)
      return -1;
    const f = l.findIndex(rt.bind(null, o));
    if (f > -1)
      return f;
    const p = mn(c[h - 2]);
    return (
      // we are dealing with nested routes
      h > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      mn(o) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(rt.bind(null, c[h - 2])) : f
    );
  }), s = _(() => i.value > -1 && zs(n.params, r.value.params)), a = _(() => i.value > -1 && i.value === n.matched.length - 1 && Xn(n.params, r.value.params));
  function u(c = {}) {
    return Ys(c) ? t[Ot(e.replace) ? "replace" : "push"](
      Ot(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(St) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Z) {
    const c = Yt();
    if (c) {
      const h = {
        route: r.value,
        isActive: s.value,
        isExactActive: a.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(h), kn(() => {
        h.route = r.value, h.isActive = s.value, h.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: _(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: u
  };
}
const qs = /* @__PURE__ */ Dn({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Ie,
  setup(e, { slots: t }) {
    const n = Rn(Ie(e)), { options: r } = Y(It), i = _(() => ({
      [gn(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [gn(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : In("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: i.value
      }, s);
    };
  }
}), pr = qs;
function Ys(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function zs(e, t) {
  for (const n in t) {
    const r = t[n], i = e[n];
    if (typeof r == "string") {
      if (r !== i)
        return !1;
    } else if (!F(i) || i.length !== r.length || r.some((s, a) => s !== i[a]))
      return !1;
  }
  return !0;
}
function mn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const gn = (e, t, n) => e ?? t ?? n, Qs = /* @__PURE__ */ Dn({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && Js();
    const r = Y(Ft), i = _(() => e.route || r.value), s = Y(Re, 0), a = _(() => {
      let h = Ot(s);
      const { matched: o } = i.value;
      let l;
      for (; (l = o[h]) && !l.components; )
        h++;
      return h;
    }), u = _(() => i.value.matched[a.value]);
    le(Re, _(() => a.value + 1)), le(Zt, u), le(Ft, i);
    const c = qt();
    return V(() => [c.value, u.value, e.name], ([h, o, l], [f, p, E]) => {
      o && (o.instances[l] = h, p && p !== o && h && h === f && (o.leaveGuards.size || (o.leaveGuards = p.leaveGuards), o.updateGuards.size || (o.updateGuards = p.updateGuards))), h && o && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !rt(o, p) || !f) && (o.enterCallbacks[l] || []).forEach((D) => D(h));
    }, { flush: "post" }), () => {
      const h = i.value, o = e.name, l = u.value, f = l && l.components[o];
      if (!f)
        return vn(n.default, { Component: f, route: h });
      const p = l.props[o], E = p ? p === !0 ? h.params : typeof p == "function" ? p(h) : p : null, S = In(f, k({}, E, t, {
        onVnodeUnmounted: (b) => {
          b.component.isUnmounted && (l.instances[o] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && Z && S.ref) {
        const b = {
          depth: a.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (F(S.ref) ? S.ref.map((I) => I.i) : [S.ref.i]).forEach((I) => {
          I.__vrv_devtools = b;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        vn(n.default, { Component: S, route: h }) || S
      );
    };
  }
});
function vn(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const mr = Qs;
function Js() {
  const e = Yt(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    w(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Nt(e, t) {
  const n = k({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => oo(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Lt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Zs = 0;
function Xs(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = Zs++;
  Jn({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (i) => {
    typeof i.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((o, l) => {
      o.instanceData && o.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Nt(t.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: o, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const f = l.__vrv_devtools;
        o.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: gr
        });
      }
      F(l.__vrl_devtools) && (l.__devtoolsApi = i, l.__vrl_devtools.forEach((f) => {
        let p = Er, E = "";
        f.isExactActive ? (p = yr, E = "This is exactly active") : f.isActive && (p = vr, E = "This link is active"), o.tags.push({
          label: f.route.path,
          textColor: 0,
          tooltip: E,
          backgroundColor: p
        });
      }));
    }), V(t.currentRoute, () => {
      c(), i.notifyComponentUpdate(), i.sendInspectorTree(u), i.sendInspectorState(u);
    });
    const s = "router:navigations:" + r;
    i.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((o, l) => {
      i.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: o },
          groupId: l.meta.__navigationId
        }
      });
    });
    let a = 0;
    t.beforeEach((o, l) => {
      const f = {
        guard: Lt("beforeEach"),
        from: Nt(l, "Current Location during this navigation"),
        to: Nt(o, "Target location")
      };
      Object.defineProperty(o.meta, "__navigationId", {
        value: a++
      }), i.addTimelineEvent({
        layerId: s,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: o.fullPath,
          data: f,
          groupId: o.meta.__navigationId
        }
      });
    }), t.afterEach((o, l, f) => {
      const p = {
        guard: Lt("afterEach")
      };
      f ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: f ? f.message : "",
          tooltip: "Navigation Failure",
          value: f
        }
      }, p.status = Lt("❌")) : p.status = Lt("✅"), p.from = Nt(l, "Current Location during this navigation"), p.to = Nt(o, "Target location"), i.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: o.fullPath,
          time: i.now(),
          data: p,
          logType: f ? "warning" : "default",
          groupId: o.meta.__navigationId
        }
      });
    });
    const u = "router-inspector:" + r;
    i.addInspector({
      id: u,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!h)
        return;
      const o = h;
      let l = n.getRoutes().filter((f) => !f.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !f.parent.record.components);
      l.forEach(wr), o.filter && (l = l.filter((f) => (
        // save matches state based on the payload
        $e(f, o.filter.toLowerCase())
      ))), l.forEach((f) => br(f, t.currentRoute.value)), o.rootNodes = l.map(_r);
    }
    let h;
    i.on.getInspectorTree((o) => {
      h = o, o.app === e && o.inspectorId === u && c();
    }), i.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === u) {
        const f = n.getRoutes().find((p) => p.record.__vd_id === o.nodeId);
        f && (o.state = {
          options: eo(f)
        });
      }
    }), i.sendInspectorTree(u), i.sendInspectorState(u);
  });
}
function to(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function eo(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((r) => `${r.name}${to(r)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const gr = 15485081, vr = 2450411, yr = 8702998, no = 2282478, Er = 16486972, ro = 6710886;
function _r(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: no
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Er
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: gr
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: yr
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: vr
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ro
  });
  let r = n.__vd_id;
  return r == null && (r = String(io++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(_r)
  };
}
let io = 0;
const so = /^\/(.*)\/([a-z]*)$/;
function br(e, t) {
  const n = t.matched.length && rt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => rt(r, e.record))), e.children.forEach((r) => br(r, t));
}
function wr(e) {
  e.__vd_match = !1, e.children.forEach(wr);
}
function $e(e, t) {
  const n = String(e.re).match(so);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((a) => $e(a, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const i = e.record.path.toLowerCase(), s = kt(i);
  return !t.startsWith("/") && (s.includes(t) || i.includes(t)) || s.startsWith(t) || i.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((a) => $e(a, t));
}
function oo(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Cr(e) {
  const t = sr(e.routes, e), n = e.parseQuery || fr, r = e.stringifyQuery || De, i = e.history;
  if (process.env.NODE_ENV !== "production" && !i)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Ct(), a = Ct(), u = Ct(), c = _t(Q);
  let h = Q;
  Z && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const o = fe.bind(null, (d) => "" + d), l = fe.bind(null, Bs), f = (
    // @ts-expect-error: intentionally avoid the type check
    fe.bind(null, kt)
  );
  function p(d, g) {
    let m, v;
    return ir(d) ? (m = t.getRecordMatcher(d), v = g) : v = d, t.addRoute(v, m);
  }
  function E(d) {
    const g = t.getRecordMatcher(d);
    g ? t.removeRoute(g) : process.env.NODE_ENV !== "production" && w(`Cannot remove non-existent route "${String(d)}"`);
  }
  function D() {
    return t.getRoutes().map((d) => d.record);
  }
  function S(d) {
    return !!t.getRecordMatcher(d);
  }
  function b(d, g) {
    if (g = k({}, g || c.value), typeof d == "string") {
      const C = de(n, d, g.path), R = t.resolve({ path: C.path }, g), st = i.createHref(C.fullPath);
      return process.env.NODE_ENV !== "production" && (st.startsWith("//") ? w(`Location "${d}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : R.matched.length || w(`No match found for location with path "${d}"`)), k(C, R, {
        params: f(R.params),
        hash: kt(C.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let m;
    if ("path" in d)
      process.env.NODE_ENV !== "production" && "params" in d && !("name" in d) && // @ts-expect-error: the type is never
      Object.keys(d.params).length && w(`Path "${d.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), m = k({}, d, {
        path: de(n, d.path, g.path).path
      });
    else {
      const C = k({}, d.params);
      for (const R in C)
        C[R] == null && delete C[R];
      m = k({}, d, {
        params: l(C)
      }), g.params = l(g.params);
    }
    const v = t.resolve(m, g), A = d.hash || "";
    process.env.NODE_ENV !== "production" && A && !A.startsWith("#") && w(`A \`hash\` should always start with the character "#". Replace "${A}" with "#${A}".`), v.params = o(f(v.params));
    const $ = Qi(r, k({}, d, {
      hash: Ts(A),
      path: v.path
    })), O = i.createHref($);
    return process.env.NODE_ENV !== "production" && (O.startsWith("//") ? w(`Location "${d}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : v.matched.length || w(`No match found for location with path "${"path" in d ? d.path : d}"`)), k({
      fullPath: $,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: A,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === De ? Fs(d.query) : d.query || {}
      )
    }, v, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function N(d) {
    return typeof d == "string" ? de(n, d, c.value.path) : k({}, d);
  }
  function I(d, g) {
    if (h !== d)
      return Et(8, {
        from: g,
        to: d
      });
  }
  function j(d) {
    return bt(d);
  }
  function it(d) {
    return j(k(N(d), { replace: !0 }));
  }
  function z(d) {
    const g = d.matched[d.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: m } = g;
      let v = typeof m == "function" ? m(d) : m;
      if (typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = N(v) : (
        // force empty params
        { path: v }
      ), v.params = {}), process.env.NODE_ENV !== "production" && !("path" in v) && !("name" in v))
        throw w(`Invalid redirect found:
${JSON.stringify(v, null, 2)}
 when navigating to "${d.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return k({
        query: d.query,
        hash: d.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in v ? {} : d.params
      }, v);
    }
  }
  function bt(d, g) {
    const m = h = b(d), v = c.value, A = d.state, $ = d.force, O = d.replace === !0, C = z(m);
    if (C)
      return bt(
        k(N(C), {
          state: typeof C == "object" ? k({}, A, C.state) : A,
          force: $,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        g || m
      );
    const R = m;
    R.redirectedFrom = g;
    let st;
    return !$ && on(r, v, m) && (st = Et(16, { to: R, from: v }), en(
      v,
      v,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : Je(R, v)).catch((L) => q(L) ? (
      // navigation redirects still mark the router as ready
      q(
        L,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? L : ae(L)
    ) : (
      // reject any unknown error
      oe(L, R, v)
    )).then((L) => {
      if (L) {
        if (q(
          L,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          on(r, b(L.to), R) && // and we have done it a couple of times
          g && // @ts-expect-error: added only in dev
          (g._count = g._count ? (
            // @ts-expect-error
            g._count + 1
          ) : 1) > 30 ? (w(`Detected a possibly infinite redirection in a navigation guard when going from "${v.fullPath}" to "${R.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : bt(
            // keep options
            k({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, N(L.to), {
              state: typeof L.to == "object" ? k({}, A, L.to.state) : A,
              force: $
            }),
            // preserve the original redirectedFrom if any
            g || R
          );
      } else
        L = Xe(R, v, !0, O, A);
      return Ze(R, v, L), L;
    });
  }
  function jr(d, g) {
    const m = I(d, g);
    return m ? Promise.reject(m) : Promise.resolve();
  }
  function Qe(d) {
    const g = Mt.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(d) : d();
  }
  function Je(d, g) {
    let m;
    const [v, A, $] = ao(d, g);
    m = me(v.reverse(), "beforeRouteLeave", d, g);
    for (const C of v)
      C.leaveGuards.forEach((R) => {
        m.push(X(R, d, g));
      });
    const O = jr.bind(null, d, g);
    return m.push(O), ft(m).then(() => {
      m = [];
      for (const C of s.list())
        m.push(X(C, d, g));
      return m.push(O), ft(m);
    }).then(() => {
      m = me(A, "beforeRouteUpdate", d, g);
      for (const C of A)
        C.updateGuards.forEach((R) => {
          m.push(X(R, d, g));
        });
      return m.push(O), ft(m);
    }).then(() => {
      m = [];
      for (const C of $)
        if (C.beforeEnter)
          if (F(C.beforeEnter))
            for (const R of C.beforeEnter)
              m.push(X(R, d, g));
          else
            m.push(X(C.beforeEnter, d, g));
      return m.push(O), ft(m);
    }).then(() => (d.matched.forEach((C) => C.enterCallbacks = {}), m = me($, "beforeRouteEnter", d, g), m.push(O), ft(m))).then(() => {
      m = [];
      for (const C of a.list())
        m.push(X(C, d, g));
      return m.push(O), ft(m);
    }).catch((C) => q(
      C,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? C : Promise.reject(C));
  }
  function Ze(d, g, m) {
    u.list().forEach((v) => Qe(() => v(d, g, m)));
  }
  function Xe(d, g, m, v, A) {
    const $ = I(d, g);
    if ($)
      return $;
    const O = g === Q, C = Z ? history.state : {};
    m && (v || O ? i.replace(d.fullPath, k({
      scroll: O && C && C.scroll
    }, A)) : i.push(d.fullPath, A)), c.value = d, en(d, g, m, O), ae();
  }
  let wt;
  function Br() {
    wt || (wt = i.listen((d, g, m) => {
      if (!nn.listening)
        return;
      const v = b(d), A = z(v);
      if (A) {
        bt(k(A, { replace: !0 }), v).catch(St);
        return;
      }
      h = v;
      const $ = c.value;
      Z && ns(cn($.fullPath, m.delta), Jt()), Je(v, $).catch((O) => q(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : q(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (bt(
        O.to,
        v
        // avoid an uncaught rejection, let push call triggerError
      ).then((C) => {
        q(
          C,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !m.delta && m.type === yt.pop && i.go(-1, !1);
      }).catch(St), Promise.reject()) : (m.delta && i.go(-m.delta, !1), oe(O, v, $))).then((O) => {
        O = O || Xe(
          // after navigation, all matched components are resolved
          v,
          $,
          !1
        ), O && (m.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !q(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? i.go(-m.delta, !1) : m.type === yt.pop && q(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && i.go(-1, !1)), Ze(v, $, O);
      }).catch(St);
    }));
  }
  let se = Ct(), tn = Ct(), Pt;
  function oe(d, g, m) {
    ae(d);
    const v = tn.list();
    return v.length ? v.forEach((A) => A(d, g, m)) : (process.env.NODE_ENV !== "production" && w("uncaught error during route navigation:"), console.error(d)), Promise.reject(d);
  }
  function Fr() {
    return Pt && c.value !== Q ? Promise.resolve() : new Promise((d, g) => {
      se.add([d, g]);
    });
  }
  function ae(d) {
    return Pt || (Pt = !d, Br(), se.list().forEach(([g, m]) => d ? m(d) : g()), se.reset()), d;
  }
  function en(d, g, m, v) {
    const { scrollBehavior: A } = e;
    if (!Z || !A)
      return Promise.resolve();
    const $ = !m && rs(cn(d.fullPath, 0)) || (v || !m) && history.state && history.state.scroll || null;
    return ti().then(() => A(d, g, $)).then((O) => O && es(O)).catch((O) => oe(O, d, g));
  }
  const ce = (d) => i.go(d);
  let ue;
  const Mt = /* @__PURE__ */ new Set(), nn = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: E,
    hasRoute: S,
    getRoutes: D,
    resolve: b,
    options: e,
    push: j,
    replace: it,
    go: ce,
    back: () => ce(-1),
    forward: () => ce(1),
    beforeEach: s.add,
    beforeResolve: a.add,
    afterEach: u.add,
    onError: tn.add,
    isReady: Fr,
    install(d) {
      const g = this;
      d.component("RouterLink", pr), d.component("RouterView", mr), d.config.globalProperties.$router = g, Object.defineProperty(d.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ot(c)
      }), Z && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ue && c.value === Q && (ue = !0, j(i.location).catch((A) => {
        process.env.NODE_ENV !== "production" && w("Unexpected error when starting the router:", A);
      }));
      const m = {};
      for (const A in Q)
        Object.defineProperty(m, A, {
          get: () => c.value[A],
          enumerable: !0
        });
      d.provide(It, g), d.provide(Xt, Xr(m)), d.provide(Ft, c);
      const v = d.unmount;
      Mt.add(d), d.unmount = function() {
        Mt.delete(d), Mt.size < 1 && (h = Q, wt && wt(), wt = null, c.value = Q, ue = !1, Pt = !1), v();
      }, process.env.NODE_ENV !== "production" && Z && Xs(d, g, t);
    }
  };
  function ft(d) {
    return d.reduce((g, m) => g.then(() => Qe(m)), Promise.resolve());
  }
  return nn;
}
function ao(e, t) {
  const n = [], r = [], i = [], s = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < s; a++) {
    const u = t.matched[a];
    u && (e.matched.find((h) => rt(h, u)) ? r.push(u) : n.push(u));
    const c = e.matched[a];
    c && (t.matched.find((h) => rt(h, c)) || i.push(c));
  }
  return [n, r, i];
}
function co() {
  return Y(It);
}
function uo() {
  return Y(Xt);
}
const Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get NavigationFailureType() {
    return Se;
  },
  RouterLink: pr,
  RouterView: mr,
  START_LOCATION: Q,
  createMemoryHistory: as,
  createRouter: Cr,
  createRouterMatcher: sr,
  createWebHashHistory: cs,
  createWebHistory: rr,
  isNavigationFailure: q,
  loadRouteLocation: Ks,
  matchedRouteKey: Zt,
  onBeforeRouteLeave: Gs,
  onBeforeRouteUpdate: Us,
  parseQuery: fr,
  routeLocationKey: Xt,
  routerKey: It,
  routerViewLocationKey: Ft,
  stringifyQuery: De,
  useLink: Ie,
  useRoute: uo,
  useRouter: co,
  viewDepthKey: Re
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var te = "store";
function Nr(e) {
  return e === void 0 && (e = null), Y(e !== null ? e : te);
}
function lo(e, t) {
  return e.filter(t)[0];
}
function Pe(e, t) {
  if (t === void 0 && (t = []), e === null || typeof e != "object")
    return e;
  var n = lo(t, function(i) {
    return i.original === e;
  });
  if (n)
    return n.copy;
  var r = Array.isArray(e) ? [] : {};
  return t.push({
    original: e,
    copy: r
  }), Object.keys(e).forEach(function(i) {
    r[i] = Pe(e[i], t);
  }), r;
}
function lt(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function Or(e) {
  return e !== null && typeof e == "object";
}
function ho(e) {
  return e && typeof e.then == "function";
}
function H(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function fo(e, t) {
  return function() {
    return e(t);
  };
}
function Sr(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var r = t.indexOf(e);
    r > -1 && t.splice(r, 1);
  };
}
function Ar(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ee(e, n, [], e._modules.root, !0), Ge(e, n, t);
}
function Ge(e, t, n) {
  var r = e._state, i = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, a = {}, u = {}, c = ei(!0);
  c.run(function() {
    lt(s, function(h, o) {
      a[o] = fo(h, e), u[o] = _(function() {
        return a[o]();
      }), Object.defineProperty(e.getters, o, {
        get: function() {
          return u[o].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Rn({
    data: t
  }), e._scope = c, e.strict && yo(e), r && n && e._withCommit(function() {
    r.data = null;
  }), i && i.stop();
}
function ee(e, t, n, r, i) {
  var s = !n.length, a = e._modules.getNamespace(n);
  if (r.namespaced && (e._modulesNamespaceMap[a] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + a + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[a] = r), !s && !i) {
    var u = Ue(t, n.slice(0, -1)), c = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && c in u && console.warn(
        '[vuex] state field "' + c + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), u[c] = r.state;
    });
  }
  var h = r.context = po(e, a, n);
  r.forEachMutation(function(o, l) {
    var f = a + l;
    mo(e, f, o, h);
  }), r.forEachAction(function(o, l) {
    var f = o.root ? l : a + l, p = o.handler || o;
    go(e, f, p, h);
  }), r.forEachGetter(function(o, l) {
    var f = a + l;
    vo(e, f, o, h);
  }), r.forEachChild(function(o, l) {
    ee(e, t, n.concat(l), o, i);
  });
}
function po(e, t, n) {
  var r = t === "", i = {
    dispatch: r ? e.dispatch : function(s, a, u) {
      var c = Gt(s, a, u), h = c.payload, o = c.options, l = c.type;
      if ((!o || !o.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._actions[l])) {
        console.error("[vuex] unknown local action type: " + c.type + ", global type: " + l);
        return;
      }
      return e.dispatch(l, h);
    },
    commit: r ? e.commit : function(s, a, u) {
      var c = Gt(s, a, u), h = c.payload, o = c.options, l = c.type;
      if ((!o || !o.root) && (l = t + l, process.env.NODE_ENV !== "production" && !e._mutations[l])) {
        console.error("[vuex] unknown local mutation type: " + c.type + ", global type: " + l);
        return;
      }
      e.commit(l, h, o);
    }
  };
  return Object.defineProperties(i, {
    getters: {
      get: r ? function() {
        return e.getters;
      } : function() {
        return kr(e, t);
      }
    },
    state: {
      get: function() {
        return Ue(e.state, n);
      }
    }
  }), i;
}
function kr(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {}, r = t.length;
    Object.keys(e.getters).forEach(function(i) {
      if (i.slice(0, r) === t) {
        var s = i.slice(r);
        Object.defineProperty(n, s, {
          get: function() {
            return e.getters[i];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = n;
  }
  return e._makeLocalGettersCache[t];
}
function mo(e, t, n, r) {
  var i = e._mutations[t] || (e._mutations[t] = []);
  i.push(function(a) {
    n.call(e, r.state, a);
  });
}
function go(e, t, n, r) {
  var i = e._actions[t] || (e._actions[t] = []);
  i.push(function(a) {
    var u = n.call(e, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: e.getters,
      rootState: e.state
    }, a);
    return ho(u) || (u = Promise.resolve(u)), e._devtoolHook ? u.catch(function(c) {
      throw e._devtoolHook.emit("vuex:error", c), c;
    }) : u;
  });
}
function vo(e, t, n, r) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(s) {
    return n(
      r.state,
      // local state
      r.getters,
      // local getters
      s.state,
      // root state
      s.getters
      // root getters
    );
  };
}
function yo(e) {
  V(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && H(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function Ue(e, t) {
  return t.reduce(function(n, r) {
    return n[r];
  }, e);
}
function Gt(e, t, n) {
  return Or(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && H(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var Eo = "vuex bindings", yn = "vuex:mutations", ge = "vuex:actions", pt = "vuex", _o = 0;
function bo(e, t) {
  Jn(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Eo]
    },
    function(n) {
      n.addTimelineLayer({
        id: yn,
        label: "Vuex Mutations",
        color: En
      }), n.addTimelineLayer({
        id: ge,
        label: "Vuex Actions",
        color: En
      }), n.addInspector({
        id: pt,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === pt)
          if (r.filter) {
            var i = [];
            $r(i, t._modules.root, r.filter, ""), r.rootNodes = i;
          } else
            r.rootNodes = [
              Ir(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === pt) {
          var i = r.nodeId;
          kr(t, i), r.state = No(
            So(t._modules, i),
            i === "root" ? t.getters : t._makeLocalGettersCache,
            i
          );
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === e && r.inspectorId === pt) {
          var i = r.nodeId, s = r.path;
          i !== "root" && (s = i.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            r.set(t._state.data, s, r.state.value);
          });
        }
      }), t.subscribe(function(r, i) {
        var s = {};
        r.payload && (s.payload = r.payload), s.state = i, n.notifyComponentUpdate(), n.sendInspectorTree(pt), n.sendInspectorState(pt), n.addTimelineEvent({
          layerId: yn,
          event: {
            time: Date.now(),
            title: r.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(r, i) {
          var s = {};
          r.payload && (s.payload = r.payload), r._id = _o++, r._time = Date.now(), s.state = i, n.addTimelineEvent({
            layerId: ge,
            event: {
              time: r._time,
              title: r.type,
              groupId: r._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(r, i) {
          var s = {}, a = Date.now() - r._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: a + "ms",
              tooltip: "Action duration",
              value: a
            }
          }, r.payload && (s.payload = r.payload), s.state = i, n.addTimelineEvent({
            layerId: ge,
            event: {
              time: Date.now(),
              title: r.type,
              groupId: r._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var En = 8702998, wo = 6710886, Co = 16777215, Dr = {
  label: "namespaced",
  textColor: Co,
  backgroundColor: wo
};
function Rr(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function Ir(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Rr(t),
    tags: e.namespaced ? [Dr] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return Ir(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function $r(e, t, n, r) {
  r.includes(n) && e.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: t.namespaced ? [Dr] : []
  }), Object.keys(t._children).forEach(function(i) {
    $r(e, t._children[i], n, r + i + "/");
  });
}
function No(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t), i = {
    state: Object.keys(e.state).map(function(a) {
      return {
        key: a,
        editable: !0,
        value: e.state[a]
      };
    })
  };
  if (r.length) {
    var s = Oo(t);
    i.getters = Object.keys(s).map(function(a) {
      return {
        key: a.endsWith("/") ? Rr(a) : a,
        editable: !1,
        value: Me(function() {
          return s[a];
        })
      };
    });
  }
  return i;
}
function Oo(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = n.split("/");
    if (r.length > 1) {
      var i = t, s = r.pop();
      r.forEach(function(a) {
        i[a] || (i[a] = {
          _custom: {
            value: {},
            display: a,
            tooltip: "Module",
            abstract: !0
          }
        }), i = i[a]._custom.value;
      }), i[s] = Me(function() {
        return e[n];
      });
    } else
      t[n] = Me(function() {
        return e[n];
      });
  }), t;
}
function So(e, t) {
  var n = t.split("/").filter(function(r) {
    return r;
  });
  return n.reduce(
    function(r, i, s) {
      var a = r[i];
      if (!a)
        throw new Error('Missing module "' + i + '" for path "' + t + '".');
      return s === n.length - 1 ? a : a._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Me(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var K = function(t, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var r = t.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, Pr = { namespaced: { configurable: !0 } };
Pr.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
K.prototype.addChild = function(t, n) {
  this._children[t] = n;
};
K.prototype.removeChild = function(t) {
  delete this._children[t];
};
K.prototype.getChild = function(t) {
  return this._children[t];
};
K.prototype.hasChild = function(t) {
  return t in this._children;
};
K.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
K.prototype.forEachChild = function(t) {
  lt(this._children, t);
};
K.prototype.forEachGetter = function(t) {
  this._rawModule.getters && lt(this._rawModule.getters, t);
};
K.prototype.forEachAction = function(t) {
  this._rawModule.actions && lt(this._rawModule.actions, t);
};
K.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && lt(this._rawModule.mutations, t);
};
Object.defineProperties(K.prototype, Pr);
var ht = function(t) {
  this.register([], t, !1);
};
ht.prototype.get = function(t) {
  return t.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
ht.prototype.getNamespace = function(t) {
  var n = this.root;
  return t.reduce(function(r, i) {
    return n = n.getChild(i), r + (n.namespaced ? i + "/" : "");
  }, "");
};
ht.prototype.update = function(t) {
  Mr([], this.root, t);
};
ht.prototype.register = function(t, n, r) {
  var i = this;
  r === void 0 && (r = !0), process.env.NODE_ENV !== "production" && xr(t, n);
  var s = new K(n, r);
  if (t.length === 0)
    this.root = s;
  else {
    var a = this.get(t.slice(0, -1));
    a.addChild(t[t.length - 1], s);
  }
  n.modules && lt(n.modules, function(u, c) {
    i.register(t.concat(c), u, r);
  });
};
ht.prototype.unregister = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1], i = n.getChild(r);
  if (!i) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + r + "', which is not registered"
    );
    return;
  }
  i.runtime && n.removeChild(r);
};
ht.prototype.isRegistered = function(t) {
  var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Mr(e, t, n) {
  if (process.env.NODE_ENV !== "production" && xr(e, n), t.update(n), n.modules)
    for (var r in n.modules) {
      if (!t.getChild(r)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      Mr(
        e.concat(r),
        t.getChild(r),
        n.modules[r]
      );
    }
}
var _n = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Ao = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, bn = {
  getters: _n,
  mutations: _n,
  actions: Ao
};
function xr(e, t) {
  Object.keys(bn).forEach(function(n) {
    if (t[n]) {
      var r = bn[n];
      lt(t[n], function(i, s) {
        H(
          r.assert(i),
          ko(e, n, s, i, r.expected)
        );
      });
    }
  });
}
function ko(e, t, n, r, i) {
  var s = t + " should be " + i + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(r) + ".", s;
}
function We(e) {
  return new x(e);
}
var x = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (H(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), H(this instanceof e, "store must be called with the new operator."));
  var r = t.plugins;
  r === void 0 && (r = []);
  var i = t.strict;
  i === void 0 && (i = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new ht(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var a = this, u = this, c = u.dispatch, h = u.commit;
  this.dispatch = function(f, p) {
    return c.call(a, f, p);
  }, this.commit = function(f, p, E) {
    return h.call(a, f, p, E);
  }, this.strict = i;
  var o = this._modules.root.state;
  ee(this, o, [], this._modules.root), Ge(this, o), r.forEach(function(l) {
    return l(n);
  });
}, He = { state: { configurable: !0 } };
x.prototype.install = function(t, n) {
  t.provide(n || te, this), t.config.globalProperties.$store = this;
  var r = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  r && bo(t, this);
};
He.state.get = function() {
  return this._state.data;
};
He.state.set = function(e) {
  process.env.NODE_ENV !== "production" && H(!1, "use store.replaceState() to explicit replace store state.");
};
x.prototype.commit = function(t, n, r) {
  var i = this, s = Gt(t, n, r), a = s.type, u = s.payload, c = s.options, h = { type: a, payload: u }, o = this._mutations[a];
  if (!o) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + a);
    return;
  }
  this._withCommit(function() {
    o.forEach(function(f) {
      f(u);
    });
  }), this._subscribers.slice().forEach(function(l) {
    return l(h, i.state);
  }), process.env.NODE_ENV !== "production" && c && c.silent && console.warn(
    "[vuex] mutation type: " + a + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
x.prototype.dispatch = function(t, n) {
  var r = this, i = Gt(t, n), s = i.type, a = i.payload, u = { type: s, payload: a }, c = this._actions[s];
  if (!c) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + s);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(o) {
      return o.before;
    }).forEach(function(o) {
      return o.before(u, r.state);
    });
  } catch (o) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(o));
  }
  var h = c.length > 1 ? Promise.all(c.map(function(o) {
    return o(a);
  })) : c[0](a);
  return new Promise(function(o, l) {
    h.then(function(f) {
      try {
        r._actionSubscribers.filter(function(p) {
          return p.after;
        }).forEach(function(p) {
          return p.after(u, r.state);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(p));
      }
      o(f);
    }, function(f) {
      try {
        r._actionSubscribers.filter(function(p) {
          return p.error;
        }).forEach(function(p) {
          return p.error(u, r.state, f);
        });
      } catch (p) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(p));
      }
      l(f);
    });
  });
};
x.prototype.subscribe = function(t, n) {
  return Sr(t, this._subscribers, n);
};
x.prototype.subscribeAction = function(t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Sr(r, this._actionSubscribers, n);
};
x.prototype.watch = function(t, n, r) {
  var i = this;
  return process.env.NODE_ENV !== "production" && H(typeof t == "function", "store.watch only accepts a function."), V(function() {
    return t(i.state, i.getters);
  }, n, Object.assign({}, r));
};
x.prototype.replaceState = function(t) {
  var n = this;
  this._withCommit(function() {
    n._state.data = t;
  });
};
x.prototype.registerModule = function(t, n, r) {
  r === void 0 && (r = {}), typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && (H(Array.isArray(t), "module path must be a string or an Array."), H(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ee(this, this.state, t, this._modules.get(t), r.preserveState), Ge(this, this.state);
};
x.prototype.unregisterModule = function(t) {
  var n = this;
  typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && H(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
    var r = Ue(n.state, t.slice(0, -1));
    delete r[t[t.length - 1]];
  }), Ar(this);
};
x.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), process.env.NODE_ENV !== "production" && H(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
};
x.prototype.hotUpdate = function(t) {
  this._modules.update(t), Ar(this, !0);
};
x.prototype._withCommit = function(t) {
  var n = this._committing;
  this._committing = !0, t(), this._committing = n;
};
Object.defineProperties(x.prototype, He);
var Ke = re(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !$t(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), ne(t).forEach(function(r) {
    var i = r.key, s = r.val;
    n[i] = function() {
      var u = this.$store.state, c = this.$store.getters;
      if (e) {
        var h = ie(this.$store, "mapState", e);
        if (!h)
          return;
        u = h.context.state, c = h.context.getters;
      }
      return typeof s == "function" ? s.call(this, u, c) : u[s];
    }, n[i].vuex = !0;
  }), n;
}), qe = re(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !$t(t) && console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), ne(t).forEach(function(r) {
    var i = r.key, s = r.val;
    n[i] = function() {
      for (var u = [], c = arguments.length; c--; )
        u[c] = arguments[c];
      var h = this.$store.commit;
      if (e) {
        var o = ie(this.$store, "mapMutations", e);
        if (!o)
          return;
        h = o.context.commit;
      }
      return typeof s == "function" ? s.apply(this, [h].concat(u)) : h.apply(this.$store, [s].concat(u));
    };
  }), n;
}), Ye = re(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !$t(t) && console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), ne(t).forEach(function(r) {
    var i = r.key, s = r.val;
    s = e + s, n[i] = function() {
      if (!(e && !ie(this.$store, "mapGetters", e))) {
        if (process.env.NODE_ENV !== "production" && !(s in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + s);
          return;
        }
        return this.$store.getters[s];
      }
    }, n[i].vuex = !0;
  }), n;
}), ze = re(function(e, t) {
  var n = {};
  return process.env.NODE_ENV !== "production" && !$t(t) && console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), ne(t).forEach(function(r) {
    var i = r.key, s = r.val;
    n[i] = function() {
      for (var u = [], c = arguments.length; c--; )
        u[c] = arguments[c];
      var h = this.$store.dispatch;
      if (e) {
        var o = ie(this.$store, "mapActions", e);
        if (!o)
          return;
        h = o.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [h].concat(u)) : h.apply(this.$store, [s].concat(u));
    };
  }), n;
}), Lr = function(e) {
  return {
    mapState: Ke.bind(null, e),
    mapGetters: Ye.bind(null, e),
    mapMutations: qe.bind(null, e),
    mapActions: ze.bind(null, e)
  };
};
function ne(e) {
  return $t(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function $t(e) {
  return Array.isArray(e) || Or(e);
}
function re(e) {
  return function(t, n) {
    return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
  };
}
function ie(e, t, n) {
  var r = e._modulesNamespaceMap[n];
  return process.env.NODE_ENV !== "production" && !r && console.error("[vuex] module namespace not found in " + t + "(): " + n), r;
}
function Tr(e) {
  e === void 0 && (e = {});
  var t = e.collapsed;
  t === void 0 && (t = !0);
  var n = e.filter;
  n === void 0 && (n = function(o, l, f) {
    return !0;
  });
  var r = e.transformer;
  r === void 0 && (r = function(o) {
    return o;
  });
  var i = e.mutationTransformer;
  i === void 0 && (i = function(o) {
    return o;
  });
  var s = e.actionFilter;
  s === void 0 && (s = function(o, l) {
    return !0;
  });
  var a = e.actionTransformer;
  a === void 0 && (a = function(o) {
    return o;
  });
  var u = e.logMutations;
  u === void 0 && (u = !0);
  var c = e.logActions;
  c === void 0 && (c = !0);
  var h = e.logger;
  return h === void 0 && (h = console), function(o) {
    var l = Pe(o.state);
    typeof h > "u" || (u && o.subscribe(function(f, p) {
      var E = Pe(p);
      if (n(f, l, E)) {
        var D = Nn(), S = i(f), b = "mutation " + f.type + D;
        wn(h, b, t), h.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(l)), h.log("%c mutation", "color: #03A9F4; font-weight: bold", S), h.log("%c next state", "color: #4CAF50; font-weight: bold", r(E)), Cn(h);
      }
      l = E;
    }), c && o.subscribeAction(function(f, p) {
      if (s(f, p)) {
        var E = Nn(), D = a(f), S = "action " + f.type + E;
        wn(h, S, t), h.log("%c action", "color: #03A9F4; font-weight: bold", D), Cn(h);
      }
    }));
  };
}
function wn(e, t, n) {
  var r = n ? e.groupCollapsed : e.group;
  try {
    r.call(e, t);
  } catch {
    e.log(t);
  }
}
function Cn(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function Nn() {
  var e = /* @__PURE__ */ new Date();
  return " @ " + Tt(e.getHours(), 2) + ":" + Tt(e.getMinutes(), 2) + ":" + Tt(e.getSeconds(), 2) + "." + Tt(e.getMilliseconds(), 3);
}
function Do(e, t) {
  return new Array(t + 1).join(e);
}
function Tt(e, t) {
  return Do("0", t - e.toString().length) + e;
}
var Ro = {
  version: "4.1.0",
  Store: x,
  storeKey: te,
  createStore: We,
  useStore: Nr,
  mapState: Ke,
  mapMutations: qe,
  mapGetters: Ye,
  mapActions: ze,
  createNamespacedHelpers: Lr,
  createLogger: Tr
};
const Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Store: x,
  createLogger: Tr,
  createNamespacedHelpers: Lr,
  createStore: We,
  default: Ro,
  mapActions: ze,
  mapGetters: Ye,
  mapMutations: qe,
  mapState: Ke,
  storeKey: te,
  useStore: Nr
}, Symbol.toStringTag, { value: "Module" }));
class Io {
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
  static addComponent(t, n, r, i, s, a) {
    const u = window, c = {
      item: n,
      router: r,
      store: i,
      init: s,
      translate: a
    };
    at in u ? u[at][t] = c : u[at] = {
      [t]: c
    };
  }
  /**
   * Creates a new component by name.<br>
   * Создает новый компонент по названию.
   * @param name component name /<br>название компонента
   */
  static createComponent(t) {
    const n = B.getComponentGlobalItem(t);
    n && B.addComponent(
      Bt(t.replace(/\//g, "-")),
      n.item
    );
  }
  /**
   * Creating a project for Vue.<br>
   * Создание проекта для Vue.
   * @param name project name /<br>название проекта
   */
  static createApp(t) {
    const n = B.getComponentGlobalItem(t);
    n && (tt(n == null ? void 0 : n.translate) ? J.add(n.translate).then(() => this.createAppItem(t, n)) : this.createAppItem(t, n));
  }
  /**
   * Creates a vue object.<br>
   * Создает объект vue.
   * @param name project name /<br>название проекта
   * @param item global project /<br>глобальный проект
   */
  static createAppItem(t, n) {
    const r = ni(n.item);
    n != null && n.router && r.use(this.createRouter(n.router)), n != null && n.store && r.use(this.createStore(n.store)), n != null && n.init && n.init(r), P(B.getComponentList(), (i, s) => r.component(s, i)), r.mount(`*[data-app="${t}"]`);
  }
  /**
   * Creates data for Router.<br>
   * Создает данные для Router.
   * @param router data for Router /<br>данные для Router
   */
  static createRouter(t) {
    return Cr(t);
  }
  /**
   * Creates data for Store.<br>
   * Создает данные для Store.
   * @param store store data /<br>данные store
   */
  static createStore(t) {
    return We(t);
  }
}
class $o {
  /**
   * Constructor
   * @param date date for processing /<br>дата для обработки
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t, n = "date", r = et.getLocation()) {
    y(this, "item");
    y(this, "type");
    y(this, "code");
    y(this, "date");
    y(this, "datetime");
    y(this, "year", _(() => this.date.value && this.datetime.getYear()));
    y(this, "month", _(() => this.date.value && this.datetime.getMonth()));
    y(this, "day", _(() => this.date.value && this.datetime.getDay()));
    y(this, "hour", _(() => this.date.value && this.datetime.getHour()));
    y(this, "minute", _(() => this.date.value && this.datetime.getMinute()));
    y(this, "second", _(() => this.date.value && this.datetime.getSecond()));
    this.item = nt(t), this.type = nt(n), this.code = nt(r), this.date = qt(At(this.item.value)), this.datetime = new Qt(
      this.date.value,
      this.type.value,
      this.code.value
    ), V(this.item, (i) => {
      this.date.value = At(i);
    }), V(this.type, (i) => this.datetime.setType(i)), V(this.code, (i) => this.datetime.setCode(i)), V(this.date, (i) => this.datetime.setDate(i)), this.datetime.setWatch(() => ri(this.date));
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
    return _(() => this.date.value && this.datetime.getHoursType());
  }
  /**
   * Returns the code of the first day of the week.<br>
   * Возвращает код первого дня недели.
   */
  getFirstDayCode() {
    return _(() => this.date.value && this.datetime.getFirstDayCode());
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
    return _(() => this.date.value && this.datetime.getMaxDay());
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param type type of date format for output /<br>тип формата даты вывода
   * @param styleOptions the representation of the month /<br>представление месяца
   */
  locale(t = this.type.value, n) {
    return _(() => this.date.value && this.datetime.locale(t, n));
  }
  /**
   * Output of standard data.<br>
   * Вывод стандартных данных.
   * @param timeZone add time zone /<br>добавить временную зону
   */
  standard(t = !0) {
    return _(() => this.date.value && this.datetime.standard(t));
  }
}
class Po extends $n {
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
  constructor(t, n, r = ["click"], i, s, a) {
    const u = nt(t), c = nt(n);
    super(
      u.value,
      r,
      i,
      s,
      a
    ), c.value && this.setElementControl(c.value), V(u, (h) => this.setElement(h)), V(c, (h) => this.setElementControl(h));
  }
}
class Mo {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  constructor(t = et.getLocation()) {
    y(this, "code");
    y(this, "flag");
    this.code = nt(t), this.flag = new Pn(this.code.value), V(this.code, (n) => this.flag.setCode(n));
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
    return _(() => this.flag.get(t));
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(t = this.code.value) {
    return _(() => {
      var n;
      return (n = this.flag.get(t)) == null ? void 0 : n.icon;
    });
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(t) {
    return _(() => this.flag.getList(t));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(t) {
    return _(() => this.flag.getNational(t));
  }
}
const G = class G {
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
    et.set(t, !0), this.item.value = et.getItem();
  }
};
y(G, "item", _t(et.get())), y(G, "country", _(() => G.item.value.country)), y(G, "language", _(() => G.item.value.language)), y(G, "standard", _(() => G.item.value.standard)), y(G, "firstDay", _(() => G.item.value.firstDay));
let Dt = G;
class xo {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t) {
    y(this, "location");
    y(this, "intl");
    this.location = nt(t), this.intl = _(() => new Te(this.location.value ?? Dt.getLanguage().value));
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, n) {
    return _(() => this.intl.value.display(M(t), n));
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, n) {
    return _(() => this.intl.value.languageName(M(t), n));
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, n) {
    return _(() => this.intl.value.countryName(M(t), n));
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, n) {
    return _(() => this.intl.value.number(M(t), n));
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    return _(() => this.intl.value.decimal());
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, n, r = !1) {
    return _(() => this.intl.value.currency(M(t), n, r));
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(t, n) {
    return _(() => this.intl.value.unit(M(t), n));
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, n) {
    return _(() => this.intl.value.percent(M(t), n));
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, n) {
    return _(() => this.intl.value.percentBy100(M(t), n));
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, n, r, i) {
    return _(() => this.intl.value.date(M(t), n, r, i));
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, n, r) {
    return _(() => this.intl.value.relative(M(t), n, r));
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
  relativeLimit(t, n, r, i, s, a, u) {
    return _(() => this.intl.value.relativeLimit(
      M(t),
      n,
      r,
      i,
      s,
      a,
      u
    ));
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, n) {
    return _(() => this.intl.value.month(M(t), n));
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    return _(() => this.intl.value.months(t));
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, n) {
    return _(() => this.intl.value.weekday(M(t), n));
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    return _(() => this.intl.value.weekdays(t));
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return _(() => this.intl.value.time(M(t)));
  }
}
function Lo(e, t, n) {
  if (e in ve)
    return ve[e];
  const r = new Hn(e), i = qt(r.get(t, n));
  return V(i, (s) => {
    r.set(s, n);
  }), ve[e] = i, i;
}
const ve = {};
function To(e, t) {
  if (e in ye)
    return ye[e];
  const n = _t(vt.get(e, t));
  return V(n, (r) => vt.set(e, r)), vt.addWatch(e, (r) => {
    n.value = r;
  }), ye[e] = n, n;
}
const ye = {};
function Vo(e, t) {
  if (e in Ee)
    return Ee[e];
  const n = new Wt(e, !0), r = _t(n.get(t));
  return V(r, (i) => n.set(i)), Ee[e] = r, r;
}
const Ee = {};
function jo(e, t, n) {
  if (e in _e)
    return _e[e];
  const r = new Wt(e), i = _t(r.get(t, n));
  return V(i, (s) => r.set(s)), _e[e] = i, i;
}
const _e = {};
function Vr(e) {
  const t = _t({});
  return kn(async () => {
    Dt.getLanguage() && (t.value = await J.getList(e));
  }), t;
}
const Bo = (e) => Vr(e), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Api: Vt,
  ApiMethodItem: Wr,
  Cache: Wn,
  CacheItem: Sn,
  CacheStatic: we,
  Cookie: Hn,
  CookieBlock: Be,
  DataStorage: Wt,
  Datetime: Qt,
  DatetimeRef: $o,
  DesignAbstract: ii,
  DesignAsyncAbstract: si,
  DesignChanged: oi,
  DesignComponents: ai,
  DesignConstructorAbstract: ci,
  Env: Hr,
  EventItem: $n,
  EventRef: Po,
  GEO_FLAG_ICON_NAME: ui,
  Geo: et,
  GeoFlag: Pn,
  GeoFlagRef: Mo,
  GeoIntl: Te,
  GeoIntlRef: xo,
  GeoRef: Dt,
  Hash: vt,
  Icons: Kr,
  Mutation: Bi,
  MutationCollect: U,
  MutationData: qn,
  MutationDataItem: Kn,
  MutationGlobal: B,
  MutationGlobalRef: Io,
  MutationObserverGlobal: Yn,
  MutationObserverItems: zn,
  Translate: J,
  anyToString: Ei,
  arrFill: Mn,
  copyObject: gt,
  createElement: _i,
  eventStopPropagation: bi,
  executeFunction: ct,
  forEach: P,
  frame: Tn,
  getAttributes: Vn,
  getBind: Gn,
  getBindRef: Pi,
  getClassName: li,
  getClipboardData: wi,
  getColumn: Ci,
  getElement: Kt,
  getElementId: An,
  getElementItem: xn,
  getElementOrWindow: hi,
  getExp: jn,
  getIndexForRender: fi,
  getKey: Ni,
  getLengthOfAllArray: je,
  getMaxLengthAllArray: Oi,
  getMinLengthAllArray: Si,
  getMouseClient: Ai,
  getMouseClientX: Bn,
  getMouseClientY: Fn,
  getRef: M,
  inArray: ki,
  intersectKey: Di,
  isArray: di,
  isDifferent: Ri,
  isDomRuntime: jt,
  isFilled: tt,
  isFunction: qr,
  isInDom: pi,
  isIntegerBetween: Ii,
  isNull: Yr,
  isObject: T,
  isObjectNotArray: Le,
  isSelected: be,
  isSelectedByList: $i,
  isString: xe,
  isWindow: mi,
  random: gi,
  render: vi,
  replaceRecursive: mt,
  replaceTemplate: Mi,
  setElementItem: Ln,
  splice: xi,
  strFill: Li,
  t: Bo,
  toArray: Ve,
  toCamelCase: On,
  toCamelCaseFirst: Bt,
  toDate: At,
  toKebabCase: zt,
  toNumber: yi,
  toRefItem: nt,
  transformation: Ht,
  uniqueArray: Un,
  useCookieRef: Lo,
  useEnv: Rt,
  useHashRef: To,
  useSessionRef: Vo,
  useStorageRef: jo,
  useTranslateRef: Vr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mo as $,
  Pi as A,
  nt as B,
  Gn as C,
  mt as D,
  Mi as E,
  Ln as F,
  xi as G,
  Li as H,
  Bt as I,
  zt as J,
  Un as K,
  Wn as L,
  B as M,
  we as N,
  Hn as O,
  Be as P,
  Qt as Q,
  vt as R,
  Bi as S,
  J as T,
  U,
  qn as V,
  Kn as W,
  Yn as X,
  zn as Y,
  $o as Z,
  Po as _,
  Io as a,
  xo as a0,
  Dt as a1,
  Lo as a2,
  To as a3,
  Vo as a4,
  jo as a5,
  Vr as a6,
  Bo as a7,
  Ho as b,
  Ei as c,
  Mn as d,
  _i as e,
  bi as f,
  Tn as g,
  Vn as h,
  wi as i,
  Ci as j,
  xn as k,
  jn as l,
  Ni as m,
  je as n,
  Oi as o,
  Si as p,
  Ai as q,
  Bn as r,
  Fn as s,
  ki as t,
  Ko as u,
  Wo as v,
  Di as w,
  Ri as x,
  Ii as y,
  $i as z
};
