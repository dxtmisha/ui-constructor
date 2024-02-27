var p = Object.defineProperty;
var D = (c, t, e) => t in c ? p(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var u = (c, t, e) => (D(c, typeof t != "symbol" ? t + "" : t, e), e);
import { i as b } from "./DataStorage-DLhLvnDX.js";
import { t as d } from "./toNumber-CJS0fvr_.js";
import { G as y } from "./Geo-CsoTI0Xl.js";
class x {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    u(this, "cache");
    u(this, "comparisons", []);
    this.callback = t;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(t) {
    return this.isUpdate(t) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(t) {
    return this.isUpdate(t) && await this.setCacheAsync(), this.cache;
  }
  /**
   * Overwrites or adds new values for the cache.<br>
   * Перезаписывает или добавляет новые значения для кэша.
   */
  setCache() {
    this.cache = this.callback();
  }
  /**
   * Overwrites or adds new values for the cache (Async).<br>
   * Перезаписывает или добавляет новые значения для кэша (Async).
   */
  async setCacheAsync() {
    this.cache = await this.callback();
  }
  /**
   * Checking additional data.<br>
   * Проверка дополнительных данных.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  isUpdate(t) {
    return this.cache === void 0 || this.comparisons.length !== t.length || this.comparisons.findIndex((e, n) => e !== t[n]) >= 0 ? (this.comparisons = [...t], !0) : !1;
  }
}
function h(c) {
  if (c instanceof Date)
    return c;
  if (b(c))
    return /* @__PURE__ */ new Date();
  if (typeof c == "number")
    return new Date(c);
  let t = c, e = "";
  c.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (a, r, i) => (t = r, e = i, a));
  const n = (/^\d{4}\d{2}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(t) && `${t.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(t) && `${t}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(t) && `${t}-01T00:00:00`) ?? (/^\d{4}$/.exec(t) && `${t}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(t) && `2000-01-01T${t}`) ?? t.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${n}${e}`);
}
class I {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(t = y.getLocation()) {
    u(this, "geo");
    this.geo = y.find(t);
    const e = this.getLocation();
    if (e in m)
      return m[e];
    m[e] = this;
  }
  /**
   * Returns country code and language.<br>
   * Возвращает код страны и языка.
   */
  getLocation() {
    return this.geo.standard;
  }
  /**
   * Returns the first day of the week.<br>
   * Возвращает первый день недели.
   */
  getFirstDay() {
    return this.geo.firstDay;
  }
  /**
   * The consistent translation of language, region and script display names.<br>
   * Последовательный перевод отображаемых названий языка, региона и скрипта.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param typeOptions an object with some or all of the following properties /<br>
   * объект с некоторыми или всеми из следующих свойств
   */
  display(t, e) {
    let n = { type: "language" }, a;
    e && (typeof e == "string" ? n.type = e : n = {
      ...n,
      ...e
    });
    try {
      t ? a = new Intl.DisplayNames(this.getLocation(), n).of(t) : n.type === "language" ? a = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.language) : n.type === "region" && (a = new Intl.DisplayNames(this.getLocation(), n).of(this.geo.country));
    } catch {
    }
    return a ?? t ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(t, e) {
    const n = {
      type: "language",
      style: e
    };
    return this.display(t, n);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(t, e) {
    const n = {
      type: "region",
      style: e
    };
    return this.display(t, n);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(t, e) {
    var n, a;
    return ((a = (n = this.numberObject(e)) == null ? void 0 : n.format) == null ? void 0 : a.call(n, d(t))) || t.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var t, e, n, a, r;
    return ((r = (a = (n = (e = (t = this.numberObject()) == null ? void 0 : t.formatToParts) == null ? void 0 : e.call(t, 1.2)) == null ? void 0 : n.find) == null ? void 0 : a.call(n, (i) => i.type === "decimal")) == null ? void 0 : r.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(t, e, n = !1) {
    const a = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof e == "string" ? { currency: e } : e || {}
    }, r = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...i) => (a.currency = i[2].toUpperCase(), i[1]));
    if (n) {
      const i = this.numberObject(a);
      return i ? i.formatToParts(d(t)).filter((o) => ["literal", "currency"].indexOf(o.type) === -1).join("") : t.toString();
    } else
      return this.number(r, a);
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
    const n = {
      style: "unit",
      ...typeof e == "string" ? { unit: e } : e || {}
    }, a = t.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...r) => (n.unit = r[2].toLowerCase(), r[1]));
    return this.number(a, n);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(t, e) {
    return this.number(t, {
      style: "percent",
      ...e || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(t, e) {
    return this.percent(d(t) / 100, e);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(t, e, n, a) {
    const r = h(t), i = typeof n == "string", o = this.dateOptions(e, i ? n : "short");
    return a && (o.hour12 = !1), i || Object.assign(o, n), r.toLocaleString(this.getLocation(), o);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(t, e, n) {
    const a = h(t), r = n || /* @__PURE__ */ new Date(), i = {
      numeric: "auto",
      ...typeof e == "string" ? { style: e } : e || {}
    };
    let o = "second", s = (a.getTime() - r.getTime()) / 1e3;
    Math.abs(s) >= 60 && (o = "minute", s /= 60, Math.abs(s) >= 60 && (o = "hour", s /= 60, Math.abs(s) >= 24 && (o = "day", s /= 24, Math.abs(s) >= 30 && (o = "month", s /= 30, Math.abs(s) >= 12 && (o = "year", s /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), i).format(Math.round(s), o);
    } catch {
    }
    return "";
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
  relativeLimit(t, e, n, a, r, i, o) {
    const s = h(t), l = n || /* @__PURE__ */ new Date(), f = new Date(l), g = new Date(l);
    return f.setDate(l.getDate() - e), g.setDate(l.getDate() + e), s >= f && s <= g ? this.relative(
      s,
      a,
      l
    ) : this.date(
      s,
      i,
      r,
      o
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(t, e) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: e || "long" }).format(h(t));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), a = Intl.DateTimeFormat(this.getLocation(), { month: t || "long" });
      for (let r = 0; r < 12; r++)
        n.setMonth(r), e.push({
          label: a.format(n).replace(/^./, (i) => i.toUpperCase()),
          value: r + 1
        });
    } catch {
    }
    return e;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(t, e) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }).format(h(t));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(t) {
    const e = [{
      label: "",
      value: void 0
    }];
    try {
      const n = /* @__PURE__ */ new Date(), a = Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }), r = n.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      n.setDate(n.getDate() - r);
      for (let i = 0; i < 7; i++)
        e.push({
          label: a.format(n).replace(/^./, (o) => o.toUpperCase()),
          value: n.getDay()
        }), n.setDate(n.getDate() + 1);
    } catch {
    }
    return e;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(t) {
    return this.date(t, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(t, e = (n, a) => [n, a]) {
    const n = new Intl.Collator(this.getLocation());
    return t.sort((a, r) => n.compare(...e(a, r)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(t) {
    try {
      return new Intl.NumberFormat(this.getLocation(), t);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(t, e = "short") {
    const n = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(t) !== -1 && (n.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(t) !== -1 && (n.month = e), ["full", "datetime", "date", void 0, "day"].indexOf(t) !== -1 && (n.day = "2-digit"), t !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(t) !== -1 && (n.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(t) !== -1 && (n.minute = "2-digit"), ["full", "time", "second"].indexOf(t) !== -1 && (n.second = "2-digit")), n;
  }
}
const m = {};
export {
  x as C,
  I as G,
  h as t
};
