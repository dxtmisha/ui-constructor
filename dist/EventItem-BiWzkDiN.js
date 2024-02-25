var E = Object.defineProperty;
var T = (a, e, i) => e in a ? E(a, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[e] = i;
var h = (a, e, i) => (T(a, typeof e != "symbol" ? e + "" : e, i), i);
import { f as C, i as I } from "./forEach-B1ZDH1yu.js";
import { G as g } from "./Api-xb9Hb97W.js";
import { b as M } from "./useEnv-CFVj6p9U.js";
import { t as f } from "./toNumber-BeBr0lVX.js";
import { i as w, g as m } from "./getElement-BhVCn14C.js";
import { t as L } from "./toArray-rswbj5Xf.js";
class F {
  /**
   * Constructor
   * @param callback function for the cache /<br>функция для кэша
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e) {
    h(this, "cache");
    h(this, "comparisons", []);
    this.callback = e;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  getCache(e) {
    return this.isUpdate(e) && this.setCache(), this.cache;
  }
  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).<br>
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param comparison additional data for comparison /<br>дополнительные данные для сравнения
   */
  async getCacheAsync(e) {
    return this.isUpdate(e) && await this.setCacheAsync(), this.cache;
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
  isUpdate(e) {
    return this.cache === void 0 || this.comparisons.length !== e.length || this.comparisons.findIndex((i, s) => i !== e[s]) >= 0 ? (this.comparisons = [...e], !0) : !1;
  }
}
function d(a) {
  if (a instanceof Date)
    return a;
  if (M(a))
    return /* @__PURE__ */ new Date();
  if (typeof a == "number")
    return new Date(a);
  let e = a, i = "";
  a.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (n, r, o) => (e = r, i = o, n));
  const s = (/^\d{4}\d{2}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) ?? (/^\d{4}\d{2}$/.exec(e) && `${e.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00`) ?? (/^\d{4}-\d{2}-\d{2}$/.exec(e) && `${e}T00:00:00`) ?? (/^\d{4}-\d{2}$/.exec(e) && `${e}-01T00:00:00`) ?? (/^\d{4}$/.exec(e) && `${e}-01-01T00:00:00`) ?? (/^\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}:00`) ?? (/^\d{2}:\d{2}:\d{2}$/.exec(e) && `2000-01-01T${e}`) ?? e.replace(" ", "T");
  return /* @__PURE__ */ new Date(`${s}${i}`);
}
class S {
  /**
   * Constructor
   * @param code country code, full form language-country or one of them /<br>
   * код страны, полный вид язык-страна или один из них
   */
  constructor(e = g.getLocation()) {
    h(this, "geo");
    this.geo = g.find(e);
    const i = this.getLocation();
    if (i in y)
      return y[i];
    y[i] = this;
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
  display(e, i) {
    let s = { type: "language" }, n;
    i && (typeof i == "string" ? s.type = i : s = {
      ...s,
      ...i
    });
    try {
      e ? n = new Intl.DisplayNames(this.getLocation(), s).of(e) : s.type === "language" ? n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.language) : s.type === "region" && (n = new Intl.DisplayNames(this.getLocation(), s).of(this.geo.country));
    } catch {
    }
    return n ?? e ?? "";
  }
  /**
   * Get display names of language.<br>
   * Получить отображаемые имена языка.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  languageName(e, i) {
    const s = {
      type: "language",
      style: i
    };
    return this.display(e, s);
  }
  /**
   * Get display names of region.<br>
   * Получить отображаемые имена региона.
   * @param value the code to provide depends on the type /<br>предоставляемый код зависит от типа
   * @param style the formatting style to use /<br>используемый стиль форматирования
   */
  countryName(e, i) {
    const s = {
      type: "region",
      style: i
    };
    return this.display(e, s);
  }
  /**
   * In basic use without specifying a locale, a formatted string.<br>
   * При обычном использовании без указания локали форматированная строка<br>
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми
   * или всеми свойствами
   */
  number(e, i) {
    var s, n;
    return ((n = (s = this.numberObject(i)) == null ? void 0 : s.format) == null ? void 0 : n.call(s, f(e))) || e.toString();
  }
  /**
   * Decimal point symbol.<br>
   * Символ десятичной точки.
   */
  decimal() {
    var e, i, s, n, r;
    return ((r = (n = (s = (i = (e = this.numberObject()) == null ? void 0 : e.formatToParts) == null ? void 0 : i.call(e, 1.2)) == null ? void 0 : s.find) == null ? void 0 : n.call(s, (o) => o.type === "decimal")) == null ? void 0 : r.value) || ".";
  }
  /**
   * Currency formatting.<br>
   * Форматирование валюты.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param currencyOptions the currency to use in currency formatting /<br>
   * валюта для использования в форматировании валюты
   * @param numberOnly do not display the currency symbol /<br>не выводить значок валюты
   */
  currency(e, i, s = !1) {
    const n = {
      style: "currency",
      currencyDisplay: "symbol",
      ...typeof i == "string" ? { currency: i } : i || {}
    }, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...o) => (n.currency = o[2].toUpperCase(), o[1]));
    if (s) {
      const o = this.numberObject(n);
      return o ? o.formatToParts(f(e)).filter(($) => ["literal", "currency"].indexOf($.type) === -1).join("") : e.toString();
    } else
      return this.number(r, n);
  }
  /**
   * Unit formatting.
   * If the style is 'unit', a unit property must be provided.<br>
   * Форматирование юнитов.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param unitOptions the unit to use in unit formatting /<br>блок для использования
   * в форматировании блока
   */
  unit(e, i) {
    const s = {
      style: "unit",
      ...typeof i == "string" ? { unit: i } : i || {}
    }, n = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...r) => (s.unit = r[2].toLowerCase(), r[1]));
    return this.number(n, s);
  }
  /**
   * Number as a percentage.<br>
   * Число в виде процента.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>объект с некоторыми или всеми свойствами
   */
  percent(e, i) {
    return this.number(e, {
      style: "percent",
      ...i || {}
    });
  }
  /**
   * Number as a percentage (unit).<br>
   * Число в виде процента (единица).
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  percentBy100(e, i) {
    return this.percent(f(e) / 100, i);
  }
  /**
   * Enables language-sensitive date and time formatting.<br>
   * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
   * @param value the date to format /<br>дата для форматирования
   * @param type type of data format /<br>тип формата data
   * @param styleOptions the representation of the month /<br>представление месяца
   * @param hour24 whether to use 12-hour time /<br>использовать ли 12-часовое время
   */
  date(e, i, s, n) {
    const r = d(e), o = typeof s == "string", $ = this.dateOptions(i, o ? s : "short");
    return n && ($.hour12 = !1), o || Object.assign($, s), r.toLocaleString(this.getLocation(), $);
  }
  /**
   * Enables language-sensitive relative time formatting.<br>
   * Включает форматирование относительного времени с учетом языка.
   * @param value a number, bigint, or string, to format /<br>число для форматирования
   * @param styleOptions the length of the internationalized message /<br>
   * длина интернационализированного сообщения
   * @param todayValue current day /<br>текущий день
   */
  relative(e, i, s) {
    const n = d(e), r = s || /* @__PURE__ */ new Date(), o = {
      numeric: "auto",
      ...typeof i == "string" ? { style: i } : i || {}
    };
    let $ = "second", c = (n.getTime() - r.getTime()) / 1e3;
    Math.abs(c) >= 60 && ($ = "minute", c /= 60, Math.abs(c) >= 60 && ($ = "hour", c /= 60, Math.abs(c) >= 24 && ($ = "day", c /= 24, Math.abs(c) >= 30 && ($ = "month", c /= 30, Math.abs(c) >= 12 && ($ = "year", c /= 12)))));
    try {
      return new Intl.RelativeTimeFormat(this.getLocation(), o).format(Math.round(c), $);
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
  relativeLimit(e, i, s, n, r, o, $) {
    const c = d(e), l = s || /* @__PURE__ */ new Date(), p = new Date(l), b = new Date(l);
    return p.setDate(l.getDate() - i), b.setDate(l.getDate() + i), c >= p && c <= b ? this.relative(
      c,
      n,
      l
    ) : this.date(
      c,
      o,
      r,
      $
    );
  }
  /**
   * Names of months.<br>
   * Названия месяцев.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the month /<br>представление месяца
   */
  month(e, i) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { month: i || "long" }).format(d(e));
    } catch {
    }
    return "";
  }
  /**
   * Array to list of months.<br>
   * Массив в список месяцев.
   * @param style the representation of the month /<br>представление месяца
   */
  months(e) {
    const i = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
      for (let r = 0; r < 12; r++)
        s.setMonth(r), i.push({
          label: n.format(s).replace(/^./, (o) => o.toUpperCase()),
          value: r + 1
        });
    } catch {
    }
    return i;
  }
  /**
   * Returns names of days of the week.<br>
   * Возвращает названия дней недели.
   * @param value the date to format /<br>дата для форматирования
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekday(e, i) {
    try {
      return Intl.DateTimeFormat(this.getLocation(), { weekday: i || "long" }).format(d(e));
    } catch {
    }
    return "";
  }
  /**
   * An array of the list of names of the days of the week.<br>
   * Массив из списка названий дней недели.
   * @param style the representation of the weekday /<br>представление о дне недели
   */
  weekdays(e) {
    const i = [{
      label: "",
      value: void 0
    }];
    try {
      const s = /* @__PURE__ */ new Date(), n = Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), r = s.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
      s.setDate(s.getDate() - r);
      for (let o = 0; o < 7; o++)
        i.push({
          label: n.format(s).replace(/^./, ($) => $.toUpperCase()),
          value: s.getDay()
        }), s.setDate(s.getDate() + 1);
    } catch {
    }
    return i;
  }
  /**
   * Time.<br>
   * Время.
   * @param value the date to format /<br>дата для форматирования
   */
  time(e) {
    return this.date(e, "time");
  }
  /**
   * Sorts strings taking into account the characteristics of countries.<br>
   * Сортирует строки с учетом особенностей стран.
   * @param data an array with data /<br>массив с данными
   * @param compareFn a function for sorting /<br>функция для сортировки
   */
  sort(e, i = (s, n) => [s, n]) {
    const s = new Intl.Collator(this.getLocation());
    return e.sort((n, r) => s.compare(...i(n, r)));
  }
  /**
   * The object enables language-sensitive number formatting.<br>
   * Объект включает форматирование чисел с учетом языка.
   * @param options an object with some or all properties /<br>
   * объект с некоторыми или всеми свойствами
   */
  numberObject(e) {
    try {
      return new Intl.NumberFormat(this.getLocation(), e);
    } catch {
    }
  }
  /**
   * Returns options for data according to its type.<br>
   * Возвращает options для data по его типу.
   * @param type type of data format /<br>тип формата data
   * @param display the representation of the month /<br>представление месяца
   */
  dateOptions(e, i = "short") {
    const s = {};
    return ["full", "datetime", "date", void 0, "year-month", "year"].indexOf(e) !== -1 && (s.year = "numeric"), ["full", "datetime", "date", void 0, "year-month", "month"].indexOf(e) !== -1 && (s.month = i), ["full", "datetime", "date", void 0, "day"].indexOf(e) !== -1 && (s.day = "2-digit"), e !== void 0 && (["full", "datetime", "time", "hour-minute", "hour"].indexOf(e) !== -1 && (s.hour = "2-digit"), ["full", "datetime", "time", "hour-minute", "minute"].indexOf(e) !== -1 && (s.minute = "2-digit"), ["full", "time", "second"].indexOf(e) !== -1 && (s.second = "2-digit")), s;
  }
}
const y = {}, t = "@flag", u = class u {
  /**
   * Constructor
   * @param code country and language code /<br>код страны и языка
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(e = g.getLocation()) {
    this.code = e;
  }
  /**
   * Returns information about the country and its flag.<br>
   * Возвращает информацию о стране и её флаге.
   * @param code country code /<br>код страны
   */
  get(e = this.code) {
    var s;
    const i = g.find(e);
    if (i) {
      const n = this.getCountry(i);
      return {
        language: this.getLanguage(i),
        country: n,
        standard: i.standard,
        icon: (s = u.flags) == null ? void 0 : s[i.country],
        label: n,
        value: i.country
      };
    }
  }
  /**
   * Getting a link to the flag.<br>
   * Получение ссылки на флаг.
   * @param code country code /<br>код страны
   */
  getFlag(e = this.code) {
    var i;
    return (i = this.get(e)) == null ? void 0 : i.icon;
  }
  /**
   * Getting a list of countries by an array of codes.<br>
   * Получение списка стран по массиву с кодами.
   * @param codes country code /<br>код страны
   */
  getList(e) {
    return C(this.getCodes(e), (i) => this.get(i));
  }
  /**
   * Getting a list of countries by an array of codes in national language.<br>
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code /<br>код страны.
   */
  getNational(e) {
    return C(this.getList(e), (i) => {
      const s = new u(i.language).get(i.standard);
      return {
        ...i,
        nationalLanguage: s == null ? void 0 : s.language,
        nationalCountry: s == null ? void 0 : s.country
      };
    });
  }
  /**
   * To change the location.<br>
   * Изменить местоположение.
   * @param code country and language code /<br>код страны и языка
   */
  setCode(e) {
    return this.code = e, this;
  }
  /**
   * Returns a special object for formatting.<br>
   * Возвращает специальный объект для работы с форматированием.
   */
  getLocation() {
    return new S(this.code);
  }
  /**
   * Returns a list of countries to retrieve data from.<br>
   * Возвращает список стран для получения данных.
   * @param codes country code /<br>код страны
   */
  getCodes(e) {
    return e ?? Object.keys(u.flags);
  }
  /**
   * Getting the name of the language.<br>
   * Получение названия языка.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getLanguage(e) {
    return this.getLocation().languageName(e.language);
  }
  /**
   * Getting the name of the country.<br>
   * Получение названия страны.
   * @param data object with information of data /<br>объект с информацией данных
   */
  getCountry(e) {
    return this.getLocation().countryName(e.country);
  }
};
h(u, "flags", {
  AD: `${t}-ad`,
  AE: `${t}-ae`,
  AF: `${t}-af`,
  AG: `${t}-ag`,
  AI: `${t}-ai`,
  AL: `${t}-al`,
  AM: `${t}-am`,
  AN: `${t}-an`,
  AO: `${t}-ao`,
  AQ: `${t}-aq`,
  AR: `${t}-ar`,
  AS: `${t}-as`,
  AT: `${t}-at`,
  AU: `${t}-au`,
  AW: `${t}-aw`,
  AX: `${t}-ax`,
  AZ: `${t}-az`,
  BA: `${t}-ba`,
  BB: `${t}-bb`,
  BD: `${t}-bd`,
  BE: `${t}-be`,
  BF: `${t}-bf`,
  BG: `${t}-bg`,
  BH: `${t}-bh`,
  BI: `${t}-bi`,
  BJ: `${t}-bj`,
  BL: `${t}-bl`,
  BM: `${t}-bm`,
  BN: `${t}-bn`,
  BO: `${t}-bo`,
  BQ: `${t}-bq`,
  BR: `${t}-br`,
  BS: `${t}-bs`,
  BT: `${t}-bt`,
  BV: `${t}-bv`,
  BW: `${t}-bw`,
  BY: `${t}-by`,
  BZ: `${t}-bz`,
  CA: `${t}-ca`,
  CC: `${t}-cc`,
  CD: `${t}-cd`,
  CF: `${t}-cf`,
  CG: `${t}-cg`,
  CH: `${t}-ch`,
  CI: `${t}-ci`,
  CK: `${t}-ck`,
  CL: `${t}-cl`,
  CM: `${t}-cm`,
  CN: `${t}-cn`,
  CO: `${t}-co`,
  CR: `${t}-cr`,
  CU: `${t}-cu`,
  CV: `${t}-cv`,
  CW: `${t}-cw`,
  CX: `${t}-cx`,
  CY: `${t}-cy`,
  CZ: `${t}-cz`,
  DE: `${t}-de`,
  DJ: `${t}-dj`,
  DK: `${t}-dk`,
  DM: `${t}-dm`,
  DO: `${t}-do`,
  DZ: `${t}-dz`,
  EC: `${t}-ec`,
  EE: `${t}-ee`,
  EG: `${t}-eg`,
  EH: `${t}-eh`,
  ER: `${t}-er`,
  ES: `${t}-es`,
  ET: `${t}-et`,
  FI: `${t}-fi`,
  FJ: `${t}-fj`,
  FK: `${t}-fk`,
  FM: `${t}-fm`,
  FO: `${t}-fo`,
  FR: `${t}-fr`,
  GA: `${t}-ga`,
  GB: `${t}-gb`,
  GD: `${t}-gd`,
  GE: `${t}-ge`,
  GF: `${t}-gf`,
  GG: `${t}-gg`,
  GH: `${t}-gh`,
  GI: `${t}-gi`,
  GL: `${t}-gl`,
  GM: `${t}-gm`,
  GN: `${t}-gn`,
  GP: `${t}-gp`,
  GQ: `${t}-gq`,
  GR: `${t}-gr`,
  GT: `${t}-gt`,
  GU: `${t}-gu`,
  GW: `${t}-gw`,
  GY: `${t}-gy`,
  HK: `${t}-hk`,
  HM: `${t}-hm`,
  HN: `${t}-hn`,
  HR: `${t}-hr`,
  HT: `${t}-ht`,
  HU: `${t}-hu`,
  ID: `${t}-id`,
  IE: `${t}-ie`,
  IL: `${t}-il`,
  IM: `${t}-im`,
  IN: `${t}-in`,
  IO: `${t}-io`,
  IQ: `${t}-iq`,
  IR: `${t}-ir`,
  IS: `${t}-is`,
  IT: `${t}-it`,
  JE: `${t}-je`,
  JM: `${t}-jm`,
  JO: `${t}-jo`,
  JP: `${t}-jp`,
  KE: `${t}-ke`,
  KG: `${t}-kg`,
  KH: `${t}-kh`,
  KI: `${t}-ki`,
  KM: `${t}-km`,
  KN: `${t}-kn`,
  KP: `${t}-kp`,
  KR: `${t}-kr`,
  KW: `${t}-kw`,
  KY: `${t}-ky`,
  KZ: `${t}-kz`,
  LA: `${t}-la`,
  LB: `${t}-lb`,
  LC: `${t}-lc`,
  LI: `${t}-li`,
  LK: `${t}-lk`,
  LR: `${t}-lr`,
  LS: `${t}-ls`,
  LT: `${t}-lt`,
  LU: `${t}-lu`,
  LV: `${t}-lv`,
  LY: `${t}-ly`,
  MA: `${t}-ma`,
  MC: `${t}-mc`,
  MD: `${t}-md`,
  ME: `${t}-me`,
  MF: `${t}-mf`,
  MG: `${t}-mg`,
  MH: `${t}-mh`,
  MK: `${t}-mk`,
  ML: `${t}-ml`,
  MM: `${t}-mm`,
  MN: `${t}-mn`,
  MO: `${t}-mo`,
  MP: `${t}-mp`,
  MQ: `${t}-mq`,
  MR: `${t}-mr`,
  MS: `${t}-ms`,
  MT: `${t}-mt`,
  MU: `${t}-mu`,
  MV: `${t}-mv`,
  MW: `${t}-mw`,
  MX: `${t}-mx`,
  MY: `${t}-my`,
  MZ: `${t}-mz`,
  NA: `${t}-na`,
  NC: `${t}-nc`,
  NE: `${t}-ne`,
  NF: `${t}-nf`,
  NG: `${t}-ng`,
  NI: `${t}-ni`,
  NL: `${t}-nl`,
  NO: `${t}-no`,
  NP: `${t}-np`,
  NR: `${t}-nr`,
  NU: `${t}-nu`,
  NZ: `${t}-nz`,
  OM: `${t}-om`,
  PA: `${t}-pa`,
  PE: `${t}-pe`,
  PF: `${t}-pf`,
  PG: `${t}-pg`,
  PH: `${t}-ph`,
  PK: `${t}-pk`,
  PL: `${t}-pl`,
  PM: `${t}-pm`,
  PN: `${t}-pn`,
  PR: `${t}-pr`,
  PS: `${t}-ps`,
  PT: `${t}-pt`,
  PW: `${t}-pw`,
  PY: `${t}-py`,
  QA: `${t}-qa`,
  RE: `${t}-re`,
  RO: `${t}-ro`,
  RS: `${t}-rs`,
  RU: `${t}-ru`,
  RW: `${t}-rw`,
  SA: `${t}-sa`,
  SB: `${t}-sb`,
  SC: `${t}-sc`,
  SD: `${t}-sd`,
  SE: `${t}-se`,
  SG: `${t}-sg`,
  SH: `${t}-sh`,
  SI: `${t}-si`,
  SJ: `${t}-sj`,
  SK: `${t}-sk`,
  SL: `${t}-sl`,
  SM: `${t}-sm`,
  SN: `${t}-sn`,
  SO: `${t}-so`,
  SR: `${t}-sr`,
  SS: `${t}-ss`,
  ST: `${t}-st`,
  SV: `${t}-sv`,
  SX: `${t}-sx`,
  SY: `${t}-sy`,
  SZ: `${t}-sz`,
  TC: `${t}-tc`,
  TD: `${t}-td`,
  TG: `${t}-tg`,
  TH: `${t}-th`,
  TJ: `${t}-tj`,
  TK: `${t}-tk`,
  TL: `${t}-tl`,
  TM: `${t}-tm`,
  TN: `${t}-tn`,
  TO: `${t}-to`,
  TR: `${t}-tr`,
  TT: `${t}-tt`,
  TV: `${t}-tv`,
  TW: `${t}-tw`,
  TZ: `${t}-tz`,
  UA: `${t}-ua`,
  UG: `${t}-ug`,
  US: `${t}-us`,
  UY: `${t}-uy`,
  UZ: `${t}-uz`,
  VA: `${t}-va`,
  VC: `${t}-vc`,
  VE: `${t}-ve`,
  VG: `${t}-vg`,
  VI: `${t}-vi`,
  VN: `${t}-vn`,
  VU: `${t}-vu`,
  WF: `${t}-wf`,
  WS: `${t}-ws`,
  YE: `${t}-ye`,
  YT: `${t}-yt`,
  ZA: `${t}-za`,
  ZM: `${t}-zm`,
  ZW: `${t}-zw`
});
let v = u;
function D(a) {
  return w(a) ? a : m(a);
}
function A(a) {
  var e;
  return !!((e = m(a)) != null && e.closest("html"));
}
class P {
  /**
   * Classes Constructor
   * @param elementSelector element /<br>элемент
   * @param type type /<br>тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs /<br>объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics /<br>объект options
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  constructor(e, i = ["click"], s, n, r) {
    /**
     * Element.<br>
     * Элемент.
     * @protected
     */
    h(this, "element");
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.<br>
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     * @protected
     */
    h(this, "elementControl");
    h(this, "elementControlEdit");
    /**
     * A case-sensitive string representing the event type to listen for.<br>
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     * @protected
     */
    h(this, "type");
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.<br>
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     * @protected
     */
    h(this, "listenerRecent", (e) => {
      var i, s;
      A(this.elementControl) ? ((i = this.listener) == null || i.call(this.element, e, this.detail), I(this.options) && ((s = this.options) != null && s.once) && this.stop()) : this.stop();
    });
    /**
     * Event states.<br>
     * Состояния события.
     * @protected
     */
    h(this, "activity", !1);
    h(this, "activityItems", []);
    this.listener = s, this.options = n, this.detail = r, this.element = D(e), this.elementControl = m(e), this.type = L(i);
  }
  /**
   * Checks whether event listening is currently enabled.<br>
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive() {
    return this.activity;
  }
  /**
   * Change of an element for tracking.<br>
   * Изменение элемента для прослеживания.
   * @param elementSelector element /<br>элемент
   */
  setElement(e) {
    const i = D(e);
    return this.elementControlEdit || (this.elementControl = m(e)), this.element = i, this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element /<br>элемент
   */
  setElementControl(e) {
    return this.elementControl = m(e), this.elementControlEdit = !M(this.elementControl), this.elementControlEdit || (this.elementControl = m(this.element)), this;
  }
  /**
   * Changes the type of the handled event.<br>
   * Изменяет тип обрабатываемого события.
   * @param type type /<br>тип
   */
  setType(e) {
    return this.type = L(e), this.reset(), this;
  }
  /**
   * Modifies the object that receives the notification.<br>
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(e) {
    return this.listener = e, this;
  }
  /**
   * Modifying the options object that defines the characteristics of an object.<br>
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(e) {
    return this.options = e, this.reset(), this;
  }
  /**
   * Modifying a dependent value for the dispatch method.<br>
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(e) {
    return this.detail = e, this;
  }
  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.<br>
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event /<br>зависимое от события
   * значение, связанное с событием
   */
  dispatch(e = this.detail) {
    return this.type.forEach(
      (i) => {
        var s;
        return (s = this.element) == null ? void 0 : s.dispatchEvent(new CustomEvent(i, { detail: e }));
      }
    ), this;
  }
  /**
   * Starting event listening.<br>
   * Запуск прослушивания события.
   */
  start() {
    return this.activity || (this.activity = !0, this.activityItems = [], this.type.forEach((e) => {
      this.element && !(e === "resize" && this.makeResize()) && !(e === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(e, this.listenerRecent, this.options), this.activityItems.push({
        element: this.element,
        type: e
      }));
    })), this;
  }
  /**
   * Stopping event listening.<br>
   * Остановка прослушивания события.
   */
  stop() {
    return this.activity && (this.activity = !1, this.activityItems.forEach(({
      element: e,
      type: i,
      listener: s,
      observer: n
    }) => {
      n ? n.disconnect() : s ? e == null || e.removeEventListener(i, s) : e == null || e.removeEventListener(i, this.listenerRecent);
    })), this;
  }
  /**
   * Toggling event handler state.<br>
   * Переключение состояния работы события.
   * @param activity event activation /<br>активация события
   */
  toggle(e) {
    return e ? this.start() : this.stop();
  }
  /**
   * Overloads the listening events.<br>
   * Перегружает события прослушивания.
   */
  reset() {
    return this.activity && (this.stop(), this.start()), this;
  }
  /**
   * Checks if the ResizeObserver object exists.<br>
   * Проверяет, существует ли объект ResizeObserver.
   */
  isObserver() {
    return "ResizeObserver" in window;
  }
  /**
   * The implementation of the resize event for an element.<br>
   * Реализация события изменения размера для элемента.
   * @protected
   */
  makeResize() {
    if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
      const e = new ResizeObserver(
        (i) => this.listenerRecent(i == null ? void 0 : i[0])
      );
      return e.observe(this.element), this.activityItems.push({
        element: this.element,
        type: "resize",
        observer: e
      }), !0;
    }
    return !1;
  }
  /**
   * Implementation of the scroll event for an element.<br>
   * Реализация события изменения положения скролла для элемента.
   * @protected
   */
  makeScroll() {
    if (this.element) {
      let e = !1;
      const i = (s) => {
        e || (e = !0, requestAnimationFrame(() => {
          this.listenerRecent(s), e = !1;
        }));
      };
      return this.element.addEventListener("scroll", i, this.options), this.element.addEventListener("resize", i, this.options), this.activityItems.push(
        {
          element: this.element,
          type: "scroll",
          listener: i
        },
        {
          element: this.element,
          type: "resize",
          listener: i
        }
      ), !0;
    }
    return !1;
  }
}
export {
  F as C,
  P as E,
  t as G,
  S as a,
  v as b,
  D as g,
  A as i,
  d as t
};
